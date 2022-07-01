<template>
  <div class="px-1 position-fixed" id="sticky-sidebar">
      <div class="nav flex-column flex-nowrap vh-100 overflow-auto p-5">
          <a class="nav-link navbar-brand link-light badge rounded-pill logo" href="#"><h4>Tweetty</h4></a>
          <a href="./" class="nav-link link-dark pl-3"><h5>Home</h5></a>
          <a href="./" class="nav-link link-dark"><h5>Explore</h5></a>
          <a href="./" class="nav-link link-dark"><h5>Notification</h5></a>
          <a href="./" class="nav-link link-dark"><h5>Message</h5></a>
          <a href="./" class="nav-link link-dark"><h5>Profile</h5></a>
          <a href="./" class="nav-link link-dark"><h5>Tweetty Post</h5></a>
      </div>
  </div>
</template>

<style scoped>
.logo {
  background-image: linear-gradient(to right,yellow,green,teal);
}
</style>