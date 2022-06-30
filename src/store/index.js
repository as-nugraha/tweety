import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tweets: []
    }
  },
  getters: {
    getTweets (state) {
      return state.tweets;
    }
  },
  mutations: {
    addTweet(state, tweet) {
      let newTweet = {
        id: 1, 
        name: 'Asep',
        username: 'asnugraha',
        tweet: tweet,
        date: new Date,
        picture: 'https://ui-avatars.com/api/?name=asep+nugraha&background=random&size=70',
      };

      state.tweets.unshift(newTweet);
    }
  },
  actions: {
  },
  modules: {
  }
})
