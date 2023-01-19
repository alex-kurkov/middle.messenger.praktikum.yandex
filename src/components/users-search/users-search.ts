import Block from 'core/Block';
import './users-search.css';
import template from 'bundle-text:./users-search.hbs';
import { searchController } from 'controllers/search-controller';
import { withSearchUsers } from 'services/class-decorators/store-connectors';

@withSearchUsers
export class UsersSearch<P extends object> extends Block<P> {
  static componentName = 'UsersSearch';
  constructor(props: P) {
    super({
      ...props,
      onSearch: () => {
        const inputElement = this.refs[
          'search__input'
        ].getContent() as HTMLInputElement;

        if (inputElement.value.length) {
          searchController.searchUsersByLogin(inputElement.value);
        }
      },
    });
  }

  render() {
    return template;
  }
}
