<template>
    <div class="card mb-2">
        <div class="card-body">
            <!-- input post -->
            <textarea class="form-control mb-2" v-model="tweet" cols="30" rows="3"></textarea>
            <!-- button post -->
            <div class="text-right">
                <button class="btn btn-primary" @click="postTweet()">Post</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tweet: '',
        }
    },
    methods: {
        postTweet() {
            this.$store.commit('addTweet', this.tweet);
            this.tweet = null
        }
    },
}
</script>