export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * What background color to use
     */
    buttonStyle?: React.CSSProperties | undefined;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button style type
     */
    buttonType?: "filled" | "outlined" | "text" | "elevated" | "tonal";
    icon?: React.ReactNode;
    loading?: boolean;
    className?: string;
  }