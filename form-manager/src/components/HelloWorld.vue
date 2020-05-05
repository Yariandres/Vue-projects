<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>

      <form @submit.prevent="addUser">
        <input
          class="name-input"
          type="text"
          placeholder="Name..."
          v-model="userData.name"
        />

        <input
          class="email-input"
          type="text"
          placeholder="Name..."
          v-model="userData.email"
        />

        <input type="button" value="Send..." />
      </form>
    </div>

    <div class="right">
      <Users />
    </div>
  </div>
</template>

<script>
import Users from "@/components/Users.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        skills: ""
      }
    };
  },
  components: {
    Users
  },
  computed: {
    ...mapState(["title"])
  },
  methods: {
    ...mapMutations(["ADD_USER"]),

    addUser: function() {
      this.ADD_USER(this.userData.name);

      this.userData.name = "";
    }
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
