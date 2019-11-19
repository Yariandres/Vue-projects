import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'All users and thier attributes',
    users: [
      {
        name: "Yari Herrera",
        email: "yari@gmail.com",
        skills: ["Javascript", "PHP", "CSS", "HTML"]
      },
      {
        name: "Paul Smith",
        email: "paul@gmail.com",
        skills: ["SQL", "C#", "CSS", "HTML", "Python"]
      }
    ]
  },
  getters: {
    getUsers: state => {
      return state.users
    }
  },

  mutations: {
    ADD_USER: (state, user) => {
      state.users.push(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
