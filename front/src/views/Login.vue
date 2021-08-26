<template>
  Login: <input type="text" name="" id="1" v-model="login" /> <br />
  Password: <input type="password" name="" id="2" v-model="password" /> <br />

  <button @click="logar">Login</button>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      baseLogin: "https://almada-product-api.herokuapp.com/users/login",
    };
  },
  methods: {
    logar: function() {
      axios
        .post(
          this.baseLogin,
          {
            login: this.login,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let userId = this.getCookie("userId");
          console.log(userId);

          if (result.data) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
          this.$router.go();
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
  },
};
</script>

<style></style>
