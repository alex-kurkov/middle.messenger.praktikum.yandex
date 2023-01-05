import { store } from 'core';
import userApi from 'services/api/user-api';
import { getStaticFile } from 'utils/getStaticFile';
import router from './router';

class UserChangeController {
  // @handleError(handler)
  public async changeUserData(values: Omit<MSNUser, 'id' | 'avatar'>) {
    // TODO loader start
    await userApi.createUser(values).then((xhr) => {
      if (xhr.status === 200) {
        const user = JSON.parse(xhr.response);
        store.setState('user', {
          ...user,
          avatar: getStaticFile(user.avatar),
        });
        router.go('/messenger');
        return Promise.resolve();
      } else {
        throw new Error(xhr.response);
      }
    });
  }

  public async changePassword(values: {
    oldPassword: string;
    newPassword: string;
  }) {
    // TODO loader start
    await userApi
      .createPassword(values.oldPassword, values.newPassword)
      .then((xhr) => {
        if (xhr.status === 200) {
          router.go('/messenger');
          return Promise.resolve();
        } else {
          throw new Error(xhr.response);
        }
      });
  }

  public async changeAvatar(e: Event) {
    const fileInput = e.target as HTMLInputElement;
    const files: FileList | null = fileInput.files;

    if (files) {
      const image: File = files[0];
      const formData = new FormData();
      formData.set(`avatar`, image, image.name);
      userApi.createAvatar(formData).then((xhr) => {
        if (xhr.status === 200) {
          const user = JSON.parse(xhr.response);
          store.setState('user', {
            ...user,
            avatar: getStaticFile(user.avatar),
          });
          return;
        } else {
          throw new Error(xhr.response);
        }
      });
    }
  }
}

export const userChangeController = new UserChangeController();
