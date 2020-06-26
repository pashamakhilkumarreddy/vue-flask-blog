export default {
  isUserLoggedIn({
    user,
  }) {
    return user.token && user.isLoggedIn;
  },
};
