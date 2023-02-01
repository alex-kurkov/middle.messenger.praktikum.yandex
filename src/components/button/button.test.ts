import { registerComponent, renderDOM } from 'core';
import { Button } from './button';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('components/Button', () => {
  registerComponent(Button);
  const mockFn = jest.fn();
  
  document.body.innerHTML = '<div id="app"></div>';
  renderDOM('#app', new Button({
    text: 'Тестовая Кнопка',
    onClick: mockFn
  }));
  
  const button = screen.getByRole('button');
  it('should exist in DOM', () => {
    expect(button).toBeInTheDocument();
  });

  it('should set Button text', () => {
    expect(button.textContent).toMatch(/Тестовая Кнопка/);
  });

  it('should add custom Cb on click', () => {
    button.click();
    button.click();
    expect(mockFn).toBeCalledTimes(2);
  });
});
