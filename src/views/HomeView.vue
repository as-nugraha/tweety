<template>
  <div class="home pt-4">
    <!-- header -->
    <!-- <HeaderComp/> -->

    <div class="row">
      <!-- sidebar -->
      <div class="col-md-2 offset-md-2">
        <SidebarComp/>
      </div>

      <!-- tweets -->
      <div class="col-md-4">
        <div class="row">
          
          <!-- input tweet -->
          <div class="col-md-12">
            <InputTweet/>
          </div>

          <!-- posted -->
          <PostComp v-for="post in tweets" :key="post.id" :item="post"/>

        </div>
      </div>

      <div class="col-md-2">
        <TrendingComp/>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarComp from '@/components/SidebarComp.vue'
import TrendingComp from '@/components/TrendingComp.vue'
import PostComp from '@/components/PostComp.vue'
import InputTweet from '@/components/InputTweet.vue'

export default {
  name: 'HomeView',
  components: {
    SidebarComp,
    TrendingComp,
    PostComp,
    InputTweet,
  },
  computed: {
    tweets() {
      return this.$store.getters.getTweets
    }
  }
}
</script>
