import { Block } from '.';

export default function renderDOM(rootSelector = '#app', block: Block<object>) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('no root element found');
  }

  root.appendChild(block.getContent());
}
