export type VariantMappingType =
    | 'div'
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'caption';


    export type VariantType =
    | 'h1-128-regular'
    | 'h1-128-medium'
    | 'h1-96-bold'
    | 'h1-96-regular'
    | 'h1-96-medium'
    | 'h1-72-bold'
    | 'h1-72-regular'
    | 'h1-72-medium'
    | 'h1-60-bold'
    | 'h1-60-regular'
    | 'h1-60-medium'
    | 'h1-48-bold'
    | 'h1-48-regular'
    | 'h1-48-medium'
    | 'h1-36-bold'
    | 'h1-36-regular'
    | 'h1-36-medium'
    | 'h1-128-bold'
    | 'h2-30-regular'
    | 'h2-30-medium'
    | 'h2-30-bold'
    | 'h3-24-regular'
    | 'h3-24-medium'
    | 'h3-24-bold'
    | 'h4-20-regular'
    | 'h4-20-medium'
    | 'h4-20-bold'
    | 'h5-18-regular'
    | 'h5-18-medium'
    | 'h5-18-bold'
    | 'h6-16-regular'
    | 'h6-16-medium'
    | 'h6-16-bold'
    | 'p-16-regular'
    | 'p-16-medium'
    | 'p-16-semi-bold'
    | 'p-16-bold'
    | 'p-16-regular-underline'
    | 'p-16-semibold-underline'
    | 'caption-12-regular'
    | 'caption-12-medium'
    | 'caption-12-semi-bold'
    | 'caption-12-bold';

    // styles for different type of typography
export const TypographClasses = new Map([
    ['h1-128-regular', 'font-normal text-9xl'],
    ['h1-128-medium','font-medium text-9xl'],
    ['h1-128-bold','font-bold text-9xl'],
    ['h1-96-regular', 'font-normal text-8xl'],
    ['h1-96-medium','font-medium text-8xl'],
    ['h1-96-bold','font-bold text-8xl'],
    ['h1-72-regular', 'font-normal text-7xl'],
    ['h1-72-medium','font-medium text-7xl'],
    ['h1-72-bold','font-bold text-7xl'],
    ['h1-60-regular', 'font-normal text-6xl'],
    ['h1-60-medium','font-medium text-6xl'],
    ['h1-60-bold','font-bold text-6xl'],
    ['h1-48-regular', 'font-normal text-5xl'],
    ['h1-48-medium','font-medium text-5xl'],
    ['h1-48-bold','font-bold text-5xl'],
    ['h1-36-regular', 'font-normal text-4xl'],
    ['h1-36-medium','font-medium text-4xl'],
    ['h1-36-bold','font-bold text-4xl'],
    ['h2-30-regular', 'font-normal text-3xl'],
    ['h2-30-medium','font-medium text-3xl'],
    ['h2-30-bold','font-bold text-3xl'],
    ['h3-24-regular', 'font-normal text-2xl'],
    ['h3-24-medium','font-medium text-2xl'],
    ['h3-24-bold','font-bold text-2xl'],
    ['h4-20-regular', 'font-normal text-xl'],
    ['h4-20-medium','font-medium text-xl'],
    ['h4-20-bold','font-bold text-xl'],
    ['h5-18-regular', 'font-normal text-base'],
    ['h5-18-medium','font-medium text-base'],
    ['h5-18-bold','font-bold text-base'],
    ['h6-36-regular', 'font-normal text-sm'],
    ['h6-36-medium','font-medium text-sm'],
    ['h6-36-bold','font-bold text-sm'],
    ['p-16-regular', 'font-normal text-base'],
    ['p-16-medium','font-medium text-base'],
    ['p-16-semi-bold','font-semibold text-base'],
    ['p-16-bold','font-bold text-base'],
    ['caption-12-regular', 'font-normal text-xs'],
    ['caption-12-medium','font-medium text-xs'],
    ['caption-12-semi-bold','font-semibold text-xs'],
    ['caption-12-bold','font-bold text-xs'],
    
])
export const defaultVariantMapping = new Map([
    ['h1', 'h1'],
    ['h2', 'h2'],
    ['h3', 'h3'],
    ['h4', 'h4'],
    ['h5', 'h5'],
    ['h6', 'h6'],
    ['p', 'p'],
    ['div', 'div'],
    ['caption', 'p']]);

export interface TypographyProps{
    variant: VariantType;
    style?: React.CSSProperties;
    as?: VariantMappingType;
    children: any;
    className?: string;

}