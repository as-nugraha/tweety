<template>
  <div class="home">
    <!-- header -->
    <HeaderComp/>

    <div class="row">
      <!-- sidebar -->
      <div class="col-md-4">
        <SidebarComp/>
      </div>
      <!-- isi -->
      <div class="col-md-4">
asd
      </div>

      <div class="col-md-4">

      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import SidebarComp from '@/components/SidebarComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    SidebarComp
  }
}
</script>
