<template>
  <div class="contain">
    <h1>Créer une nouvelle page de blog</h1>

    <div class="blocData">
      <div class="blocInfo">
        <p class="title">Titre de la page :</p>
        <label class="input">
          <input type="text" v-model="post.title">
        </label>
        <p class="title">Meta Title :</p>
        <label class="input">
          <input type="text" v-model="post.metaTitle">
        </label>
        <p class="title">Meta Description :</p>
        <label class="input">
          <input type="text" v-model="post.metaDescription">
        </label>
      </div>

      <div class="blocImg">
        <div class="image"><img :src="post.image" alt=""></div>
        <p>Ajouter une image :</p>
        <label>
          <input type="text" v-model="post.image" placeholder="https:// ...">
        </label>

      </div>
    </div>

    <div class="blocPost">
      <p class="title">Corps du post :</p>
      <label class="input">
        <textarea v-model="post.body"></textarea>
      </label>
    </div>

    <div class="createButton">
      <button @click="addPost">Créer</button>
    </div>


  </div>

</template>


<style scoped>

.blocData {
  display: flex;
  width: 80%;
  margin: auto;
}

.blocInfo {
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 40% 0 20px ;
}

.title {
  width: 50%;
  margin: auto;
}

.input {
  width: 50%;
  margin: auto;
}

.blocImg {
  width: 30%;
  height: 150px;
  padding-top: 20px;
}

.image {
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 100px;
}

.image img {
  width: 150px;
  height: 150px;
}

.blocPost {
  margin-top: 150px;
  width: 70%;
  display: flex;
}

textarea {
  width: 500px;
  height: 250px;
}

.createButton {
  margin-top: 50px;
}

.contain {
  width: 80%;
  margin: auto;
  padding-top: 5px;
}
</style>

<script>

export default {
  data() {
    return {
      post: {
        title: "",
        metaTitle: "",
        metaDescription: "",
        body: "",
        image: "",
        index: this.$store.state.nextIndex,
      }
    }
  },
  methods: {
    addPost(){
      this.$store.commit('addPost', this.post);
      this.$store.commit('increment');
      this.$router.push('admin');
    }
  }
}

</script>


