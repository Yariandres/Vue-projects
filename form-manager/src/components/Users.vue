<template>
  <div class="users-list">
    <div v-for="(user, index) in getUsers" :key="index">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>

      <ul>
        <li v-for="(skill, index) in user.skills" :key="index">
          {{ skill }}
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Users",

  computed: {
    ...mapGetters(["getUsers"])
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
