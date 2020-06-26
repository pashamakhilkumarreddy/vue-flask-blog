<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form-layout #form-content>
      <form class="form" @submit.prevent="handleSubmit(register)" autocomplete="off">
        <h1 class="title is-1 has-text-centered">Register</h1>
        <div class="field">
          <label for="register-email" class="label">Email</label>
          <div class="control">
            <ValidationProvider name="Email" rules="required|email|minmax:6,90" :bails="true"
              v-slot="{ errors }">
              <input type="email" id="register-email" class="input" v-model="user.email"
                placeholder="Please enter your email" autocomplete="off" required />
              <template v-for="(error, i) of errors">
                <p class="has-text-danger mt-1" :key="i">{{error}}</p>
              </template>
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <label for="register-password" class="label">Password</label>
          <div class="control">
            <ValidationProvider name="Password" rules="required|password|minmax:8,30" :bails="true"
              v-slot="{ errors }">
              <input type="password" id="register-password" class="input" v-model="user.password"
                placeholder="Please enter your password" autocomplete="off" required />
              <template v-for="(error, i) of errors">
                <p class="has-text-danger mt-1" :key="i">{{error}}</p>
              </template>
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="user.isTermsChecked" />
              I agree to the
              <router-link :to="'terms-and-conditions'" target="_blank" exact>
                terms and conditions
              </router-link>
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-info">Register</button>
          </div>
          <div class="control flex-center">
            <p class="aside-content">Already with us?</p>&nbsp;&nbsp;
            <button type="button" class="button is-info is-light"
              @click.prevent="$navigateTo({ name: 'login' })">
              Login
            </button>
          </div>
        </div>
      </form>
    </form-layout>
  </ValidationObserver>
</template>
<script>
import FormLayout from '@/components/FormLayout.vue';
import Api from '@/services/AuthenticationService';

export default {
  name: 'Register',
  metaInfo: {
    title: 'Register',
  },
  components: {
    FormLayout,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        isTermsChecked: true,
      },
    };
  },
  methods: {
    async register() {
      try {
        const { email, password, isTermsChecked } = this.user;
        const payload = {
          email,
          password,
        };
        if (this.$checkObjectProps(payload) && isTermsChecked) {
          const result = await Api.register(payload);
          console.log(result);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
