<template>
  Id: <input type="text" name="" id="0" v-model="id" /> <br />
  Name: <input type="text" name="" id="1" v-model="name" /> <br />
  Price: <input type="text" name="" id="2" v-model="price" /> <br />

  {{ post }} <br />

  <button @click="deletePosts">Deletar Post</button>
  <button @click="putPosts">Atualizar Post</button>
  <button @click="inserirPosts">Inserir Post</button>
  <button @click="fetchPosts">Buscar Posts</button>
  <button @click="fetchByIdPosts">Buscar Post</button>
  <ul>
    <li v-for="post in posts" :key="post.id">
      Id: {{ post.id }} <br />
      Name: {{ post.name }} <br />
      Price: {{ post.price }} <br />
    </li>
  </ul>
  File:
  <input type="file" id="file" ref="file" name="image" />
  <br />

  <img
    v-if="post.id"
    :src="
      'https://almada-product.000webhostapp.com/uploads/products/' +
        post.id +
        '?' +
        Math.random()
    "
    width="200"
    height="150"
    alt="Nada"
    srcset=""
  />
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      id: "",
      userId: "",
      price: "",
      name: "",
      posts: [],
      post: "",
      baseURI: "https://almada-product-api.herokuapp.com/products",
      //baseUpload: "https://almada-product-api.herokuapp.com/upload",
      baseUpload: "http://localhost:3000/upload",
    };
  },
  methods: {
    handleFileUpload(id) {
      this.file = this.$refs.file.files[0];

      let obj = {
        resource: "products",
        id: id,
      };
      let json = JSON.stringify(obj);

      let form = new FormData();
      form.append("obj", json);
      form.append("file", this.file);

      console.log(form.getAll("file"));

      axios
        .post(this.baseUpload, form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          console.log(result);
        });
    },
    fetchPosts: function() {
      axios.get(this.baseURI).then((result) => {
        console.log(result);
        this.posts = result.data;
      });
    },
    fetchByIdPosts: function() {
      axios.get(this.baseURI + "/" + this.id).then((result) => {
        console.log(result);
        this.post = result.data;
      });
    },
    inserirPosts: function() {
      this.handleFileUpload(1);
      /*
      axios
        .post(this.baseURI, {
          name: this.name,
          price: this.price,
        })
        .then((result) => {
          if (result.status == 201) {
            alert("Inserido com sucesso !!");
            this.handleFileUpload(result.data.id);
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            alert("Dados incorretos !!");
          } else {
            alert("Problema desconhecido !!");
          }
        });
        */
    },
    putPosts: function() {
      axios
        .put(this.baseURI + "/" + this.id, {
          name: this.name,
          price: this.price,
        })
        .then((result) => {
          console.log(result.data);
          this.handleFileUpload(result.data.id);
        });
    },
    deletePosts: function() {
      axios.delete(this.baseURI + "/" + this.id).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
