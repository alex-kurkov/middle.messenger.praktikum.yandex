/* eslint-disable @typescript-eslint/no-explicit-any */
import Handlebars, { HelperOptions } from 'handlebars';
import Block from './Block';

export interface BlockConstructable<P extends {[key: string]: any}> {
  componentName: string;
  new (props: P): Block<P>;
}

export default function registerComponent<P extends {[key: string]: any} | object>(
  Component: BlockConstructable<P>,
) {
  
  Handlebars.registerHelper(
    Component.componentName,
    function (
      this: P,
      { hash: { ref, ...hash }, data, fn }: HelperOptions
    ) {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children, refs } = data.root;

      (Object.keys(hash) as []).forEach((key: keyof P) => {
        if (this[key] && typeof this[key] === 'string') {

            hash[key] = hash[key]?.replace(
              new RegExp(`{{${String(key)}}}`, 'i'),
              this[key]
            );
      
        }
      });

      const component = new Component(hash);

      children[component.id] = component;

      if (ref) {
        refs[ref] = component;
      }

      const contents = fn ? fn(this) : '';

      return `<div data-id="${component.id}">${contents}</div>`;
    }
  );
}
