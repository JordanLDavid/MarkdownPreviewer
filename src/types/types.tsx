export interface HeaderProps {
    onToggleGuide: () => void;
}

export interface MarkdownInputProps {
    value:string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface MarkdownOutputProps {
    value:string;
}