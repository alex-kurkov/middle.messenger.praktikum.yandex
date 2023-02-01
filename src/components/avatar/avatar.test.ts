import { registerComponent, renderDOM } from 'core';
import { Avatar } from './avatar';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('components/Avatar', () => {
  registerComponent(Avatar);
  const avatarWithImage = new Avatar({
    abbr: 'A',
    avatar: '/pathToImage',
    size: 's',
  });
  document.body.innerHTML = '<div id="app"></div>';
  renderDOM('#app', avatarWithImage);

  it('should exist in DOM', () => {
    expect(screen.getByTestId('avatar-test')).toBeInTheDocument();
  });

  it('image should exist in DOM, while abbr-div should not be there ', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByText('A')).toBeNull();
  });
});
