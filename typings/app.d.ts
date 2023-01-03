declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type BlockEvents = {
    events: {
      click?: (e: MouseEvent | undefined) => void;
      input?: (e: InputEvent) => void;
      focus?: (e: InputEvent) => void;
      blur?: (e: InputEvent) => void;
    };
  };
  export type InputProps = {
    onChange?: (e: InputEvent) => void;
    onFocus?: (e: InputEvent) => void;
    onBlur?: (e: InputEvent) => void;
    type?: string;
    placeholder?: string;
    name: string;
    value?: Nullable<string>;
    error?: Nullable<string>;
    autocomplete?: string;
    accept?: 'string';
    class?: string;
    required?: boolean;
    id?: string;
    labelText?: string;
    ref?: string;
    errorRef?: string;
  }
}

export {};
