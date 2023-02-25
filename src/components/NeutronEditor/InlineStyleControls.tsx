import { INLINE_STYLES } from './helperFunctions';
import StyledButton from './StyledButton';
import { InlineStyleControlsProps } from './NeutronEditor.types';
import { ReactComponent as LinkIcon } from '../../assets/icons/link.svg';

const InlineStyleControls: React.FC<InlineStyleControlsProps> = ({
  editorState,
  onToggle,
  promptForLink,
  removeLink
}) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="flex gap-2 items-center justify-center p-1">
      {INLINE_STYLES.map((type) => (
        <StyledButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
      <div className="flex gap-2">
        <button onClick={promptForLink}>
          <LinkIcon
            className="align-baseline inline-block"
            fill="#ffffff"
            color="red"
            width={20}
            height={20}
          />
        </button>
        <button onMouseDown={removeLink}>Remove Link</button>
      </div>
    </div>
  );
};

export default InlineStyleControls;
