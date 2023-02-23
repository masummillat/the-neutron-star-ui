import { INLINE_STYLES } from './helperFunctions';
import StyledButton from './StyledButton';
import { InlineStyleControlsProps } from './NeutronEditor.types';

const InlineStyleControls: React.FC<InlineStyleControlsProps> = ({
  editorState,
  onToggle
}) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyledButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
