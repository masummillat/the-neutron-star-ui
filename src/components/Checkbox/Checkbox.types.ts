export interface CheckboxProps {
    label: string;
    onChange: (value: boolean) =>void;
    checked?: boolean;
    helperText?: string | undefined
}