<template>
  Login: <input type="text" name="" id="1" v-model="login" /> <br />
  Password: <input type="password" name="" id="2" v-model="password" /> <br />

  <button @click="register">Register</button>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      login: "",
      password: "",
      baseLogin: "https://almada-product-api.herokuapp.com/users",
    };
  },
  methods: {
    register: function() {
      axios
        .post(this.baseLogin, {
          login: this.login,
          password: this.password,
        })
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>

<style></style>
