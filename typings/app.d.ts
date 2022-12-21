declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type BlockEvents = {
    events: {
      click?: () => void;
      input?: (e: InputEvent) => void;
      focus?: (e: InputEvent) => void;
      blur?: (e: InputEvent) => void;
    };
  };
}

export {};

declare module '*.hbs';
