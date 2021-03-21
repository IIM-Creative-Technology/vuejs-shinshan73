<template>
  <div class="contain">
    <ul>
      <li v-for="(item, index) in postList" :key="index">
        <router-link to="/post/{{ item.metaTitle }}">
          <post v-bind:title="item.title"
                v-bind:metaDescription="item.metaDescription"
                v-bind:image="item.image"
                v-bind:index="index">
          </post>
        </router-link>
      </li>
    </ul>
  </div>


</template>

<style scoped>
.contain {
  width: 80%;
  margin: auto;
  padding-top: 50px;
}

.contain ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>

<script>
import Post from "@/components/Post";
import {mapState} from "vuex";

export default {
  components: {
    "post": Post,
  },
  computed: mapState( {
    postList: state => state.postList,
  }),
}
</script>