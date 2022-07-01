import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tweets: [
        {
          id: 3, 
          name: 'Ikbal',
          username: 'ikbal',
          tweet: 'Lorem Ipsum Lorem Ipsum',
          date: '2022-06-29',
          picture: 'https://ui-avatars.com/api/?name=ikbal&background=random&size=70',
        },
        {
          id: 2,
          name: 'Rizky',
          username: 'rizky',
          tweet: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          date: '2022-04-02',
          picture: 'https://ui-avatars.com/api/?name=rizky&background=random&size=70',
        },
        {
          id: 1,
          name: 'Alan',
          username: 'alan',
          tweet: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
          date: '2021-06-02',
          picture: 'https://ui-avatars.com/api/?name=alan&background=random&size=70',
        }
      ]
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
        id: state.tweets.length+1, 
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
