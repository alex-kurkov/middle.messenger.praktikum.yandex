import { store } from 'core';
import userApi from 'services/api/user-api';
import { addMissingUserValues } from 'utils/addMissingUserValues';
import { getStaticFilePath } from 'utils/getStaticFilePath';
import router from './router';

class UserChangeController {
  // @handleError(handler)
  public async changeUserData(values: Omit<MSNUser, 'id' | 'avatar'>) {
    // TODO loader start
    const curUser = store.state.user;
    if (!curUser) {
      throw new Error('user field is missing or null in store');
    }

    const normalizedValues = addMissingUserValues(curUser, values);

    await userApi.createUser(normalizedValues).then((xhr) => {
      try {
        const user = JSON.parse(xhr.response);
        store.setState('user', {
          ...user,
          avatar: getStaticFilePath(user.avatar),
        });
        router.go('/messenger');
        return Promise.resolve();
      } catch (error) {
        return Promise.reject({
          message: 'НЕвозможно распарсить json',
          type: 'logic',
        });
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
      await userApi.createAvatar(formData).then((xhr) => {
        try {
          const user = JSON.parse(xhr.response);
          store.setState('user', {
            ...user,
            avatar: getStaticFilePath(user.avatar),
          });
          return;
        } catch (error) {
          return Promise.reject({
            message: 'НЕвозможно распарсить json с данными пользователя',
            type: 'logic',
          });
        }
      });
    }
  }
}

export const userChangeController = new UserChangeController();
