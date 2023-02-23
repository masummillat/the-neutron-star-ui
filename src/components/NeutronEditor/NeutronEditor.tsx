import React, {
  KeyboardEvent,
  MutableRefObject,
  useRef,
  useState
} from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  getDefaultKeyBinding
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { NeutronEditorProps } from './NeutronEditor.types';
import Link from './Link';
import {
  findLinkEntities,
  handleStrategy,
  hashtagStrategy,
  styleMap
} from './helperFunctions';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';
import HandleSpan from './HandleSpan';
import HashtagSpan from './HashTagSpan';

const NeutronEditor: React.FC<NeutronEditorProps> = ({
  placeholder = 'Write your story here ...'
}) => {
  const refs = useRef<any>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link
    },
    {
      strategy: handleStrategy,
      component: HandleSpan
    },
    {
      strategy: hashtagStrategy,
      component: HashtagSpan
    }
  ]);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(decorator)
  );
  const [showURLInput, setShowURLInput] = useState<boolean>(false);
  const [urlValue, setUrlValue] = useState<string>('');

  const onChange = (newState: EditorState) => {
    setEditorState(newState);
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const mapKeyToEditorCommand = (e: KeyboardEvent) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
        return 'handled';
      }
      return 'not-handled';
    }
    return getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const _promptForLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

      let url = '';
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      setShowURLInput((s) => true);
      setUrlValue((u) => url);
      setTimeout(() => inputRef?.current?.focus(), 0);
    }
  };

  const onURLChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrlValue(e.target.value);

  const confirmLink = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });
    onChange(
      RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    );
    setShowURLInput((s) => false);
    setUrlValue((u) => '');
    setTimeout(() => refs?.current?.focus(), 0);
  };

  const onLinkInputKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      confirmLink();
    }
  };
  const removeLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      onChange(RichUtils.toggleLink(editorState, selection, null));
    }
  };

  return (
    <div className="m-2">
      <div className="flex gap-2">
        <button onClick={_promptForLink}>Add Link</button>
        <button onMouseDown={removeLink}>Remove Link</button>
      </div>
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      {showURLInput && (
        <div>
          <input
            onChange={onURLChange}
            type="text"
            value={urlValue}
            onKeyDown={onLinkInputKeyDown}
            ref={inputRef}
          />
          <button onClick={confirmLink}>Confirm</button>
        </div>
      )}
      <div className="border border-gray-300 rounded h-96 p-2 ">
        <Editor
          placeholder={placeholder}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          spellCheck={true}
          customStyleMap={styleMap}
          autoCapitalize="sentences"
          autoCorrect="on"
          ref={refs}
        />
      </div>
    </div>
  );
};

export default NeutronEditor;
