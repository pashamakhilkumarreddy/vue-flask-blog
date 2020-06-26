import { login, register } from '@/utils/urls';
import Api from './Api';

export default {
  login({
    email,
    password,
  }) {
    return Api().post(login, {
      email,
      password,
    });
  },
  register({
    email,
    password,
  }) {
    return Api().post(register, {
      email,
      password,
    });
  },
};
