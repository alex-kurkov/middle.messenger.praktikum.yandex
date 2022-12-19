import Block from './Block';

export default function renderDOM(rootSelector: string = '#app', block: Block<{}>) {
  const root = document.querySelector(rootSelector);
  if (!root) {
    throw new Error('no root element found');
  }

  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
