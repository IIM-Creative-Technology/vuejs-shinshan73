<template>
  <div class="contain">
    <h1>Modifier le post {{ post.title }} page de blog</h1>

    <div class="blocData">
      <div class="blocInfo">
        <p class="title">Titre de la page :</p>
        <p>{{ post.title }}</p>
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
        <div class="image"><img alt="" src=""></div>
        <p>Ajouter une image :</p>
        <label>
          <input type="text" v-model="post.image">
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
      <button @click="savePost">Sauvegarder</button>
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
  margin: 20px 40% 0 10px ;
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
  height: 75px;
  padding-top: 10px;
}

.image {
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 50px;
}

.image img {
  width: 75px;
  height: 75px;
}

.blocPost {
  margin-top: 75px;
  width: 70%;
  display: flex;
}

textarea {
  width: 250px;
  height: 175px;
}

.createButton {
  margin-top: 25px;
}

.contain {
  width: 50%;
  padding-top: 5px;
  margin-top: 150px;
  border: 2px solid black;
}
</style>


<script>

export default {
  props: {
    index: Number,
  },
  computed: {
    post() {
      return typeof this.index !== 'undefined' && this.index !== null && this.$store.state.postList.length > this.index ? this.$store.state.postList[this.index] : {
        title: "",
        metaTitle: "",
        metaDescription: "",
        body: "",
        image: "",
        index: this.$store.state.nextIndex,
      };
    },
  },
  methods: {
    savePost(){
      this.$store.commit('savePost', this.post, this.index);
      this.$emit('edit', this.index);
    }
  },
}
</script>