import { store } from "core";
import { AuthAPI } from "services/api";
import router from "./router";

const authApi = new AuthAPI();

export class UserAuthController {

  // @handleError(handler)
  public async register(user: Omit<MSNUser, "id" | "avatar">) {
    try {

      // TODO loader start

      await authApi
        .requestSignup(user)
        .then((data) => {
          console.log(data);
          store.setState('user', data);
          router.go('/messenger');
        })
    }
    catch (e) {
      console.log(e);
    }
    finally {
      // TODO loader stop
    }
  }
}
