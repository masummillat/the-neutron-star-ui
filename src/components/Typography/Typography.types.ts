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
    | 'title-h1-40-regular'
    | 'title-h1-40-medium'
    | 'title-h1-40-bold'
    | 'title-h2-36-regular'
    | 'title-h2-36-medium'
    | 'title-h2-36-bold'
    | 'title-h3-32-regular'
    | 'title-h3-32-medium'
    | 'title-h3-32-bold'
    | 'title-h4-28-regular'
    | 'title-h4-28-medium'
    | 'title-h4-28-bold'
    | 'title-h5-24-regular'
    | 'title-h5-24-medium'
    | 'title-h5-24-bold'
    | 'title-h6-20-regular'
    | 'title-h6-20-medium'
    | 'title-h6-20-bold'
    | 'subtitle-h6-18-regular'
    | 'subtitle-h6-18-medium'
    | 'subtitle-h6-18-semibold'
    | 'subtitle-h6-18-bold'
    | 'subtitle-h6-18-regular-underline'
    | 'body-p-14-regular'
    | 'body-p-14-medium'
    | 'body-p-14-semi-bold'
    | 'body-p-14-bold'
    | 'body-p-14-regular-underline'
    | 'body-p-14-semibold-underline'
    | 'body-p-16-regular'
    | 'body-p-16-medium'
    | 'body-p-16-semi-bold'
    | 'body-p-16-bold'
    | 'body-p-16-regular-underline'
    | 'body-p-16-semibold-underline'
    | 'caption-p-12-regular'
    | 'caption-p-12-medium'
    | 'caption-p-12-semi-bold'
    | 'caption-p-12-bold'
    | 'caption-p-12-semibold-underline'
    | 'caption-p-12-regular-underline'
    | 'caption-p-10-regular'
    | 'caption-p-10-medium'
    | 'caption-p-10-semi-bold'
    | 'caption-p-10-bold'
    | 'caption-p-10-semibold-underline'
    | 'caption-p-10-regular-underline';

export const defaultVariantMapping = new Map([
    ['h1', 'h1'],
    ['h2', 'h2'],
    ['h3', 'h3'],
    ['h4', 'h4'],
    ['h5', 'h5'],
    ['h6', 'h6'],
    ['p', 'p'],
    ['div', 'div']]);

export interface TypographyProps{
    variant: VariantType;
    style?: React.CSSProperties;
    as?: VariantMappingType;
    children: any;
    className?: string;

}