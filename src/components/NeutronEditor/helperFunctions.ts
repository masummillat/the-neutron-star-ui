import {ContentBlock, ContentState} from 'draft-js';
import { StyleTypes } from './NeutronEditor.types';


export const BLOCK_TYPES: StyleTypes[] = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

export const INLINE_STYLES: StyleTypes[] = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

// Custom overrides for "code" style.
export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 8,
    borderLeft: '5px solid red'
  },
};

export const  findLinkEntities = (contentBlock: ContentBlock, callback:(start: number, end: number) => void, contentState: ContentState) =>  {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }

  export  const getBlockStyle = (block: ContentBlock) => {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

 /**
       * Super simple decorators for handles and hashtags, for demonstration
       * purposes only. Don't reuse these regexes.
       */
 const HANDLE_REGEX = /@[\w]+/g;
 const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

export const handleStrategy = (contentBlock: ContentBlock, callback:(start: number, end: number) => void, contentState: ContentState) => {
   findWithRegex(HANDLE_REGEX, contentBlock, callback);
 }

export const  hashtagStrategy = (contentBlock: ContentBlock, callback:(start: number, end: number) => void, contentState: ContentState)=> {
   findWithRegex(HASHTAG_REGEX, contentBlock, callback);
 }

export function findWithRegex(regex: RegExp, contentBlock: ContentBlock, callback: (start: number, end: number) => void) {
   const text = contentBlock.getText();
   let matchArr, start;
   while ((matchArr = regex.exec(text)) !== null) {
     start = matchArr.index;
     callback(start, start + matchArr[0].length);
   }
 }