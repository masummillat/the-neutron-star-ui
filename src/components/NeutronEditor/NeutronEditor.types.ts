import { ContentState, EditorState } from 'draft-js';
import { ReactNode } from 'react';

export interface NeutronEditorProps {
    placeholder?: string;
}

export interface LinkProps {
    contentState: ContentState;
    entityKey: string;
    children: ReactNode;
}

export  interface InlineStyleControlsProps {
    editorState: EditorState;
    onToggle: (style: string) => void;
}
export type StyleTypes ={
    label: string;
    style: string;
}

export interface BlockStyleControlsProps {
    editorState: EditorState;
    onToggle: (style: string) => void;
}

export interface HashTagSpanProps {
    [key: string]: any;
    offsetKey: any;
    children: ReactNode;
}
export interface HandleSpanProps {
    [key: string]: any;
    offsetKey: any;
    children: ReactNode;
}