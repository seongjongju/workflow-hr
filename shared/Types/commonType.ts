export type InputType = {
    placeholder?: string;
    type: string;
    autocomplete: string;
    name: string;
    required: boolean;
    readonly?: boolean;
};

export type LabelType = {
    htmlFor?: string;
    text: string;
    required: boolean;
};

export type ButtonType = {
    text: string;
    isLoading?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
