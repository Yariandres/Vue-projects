<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
    </div>

    <div class="right">
      <Users />
    </div>
  </div>
</template>

<script>
import Users from "@/components/Users.vue";
import { mapState } from "vuex";

export default {
  name: "HelloWorld",

  components: {
    Users
  },

  computed: {
    ...mapState(["title"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
