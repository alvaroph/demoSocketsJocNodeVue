import { defineStore } from 'pinia'
export const useGameStore = defineStore('game', {
  state: () => ({ questions: 0,
                userData: {}, 
                ranking: [], 
                users: [] }),
  getters: {
    getQuestions: (state) => state.questions,
  //  getUser: (state) => state.userData,
    getRanking: (state) => state.ranking,
   // getUsers: (state) => state.users,

  },
  actions: {
    getUser (){
      return this.userData
    },
    getUsers (){
      return this.users
    },
   setUsers(users) {
      this.users = users
    },
    addQuestion(question) {
      this.questions.push(question)
    },
    setUser(userInfo) {
      this.userData = userInfo
    }
  },
})
