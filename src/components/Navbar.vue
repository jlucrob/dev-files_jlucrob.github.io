<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Jean-Luc Robitaille</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li v-for="item in menuItems" :key="item.title" :class="{active: item.isActive}" class="nav-item mx-auto">
            <router-link class="nav-link" :to="item.link" data-toggle="collapse" data-target=".navbar-collapse.show">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      menuItems: [
        {title:'About', link:'/', isActive: false},
        {title:'Projects', link:'/projects', isActive: false},
        {title:'Contact', link:'/contact', isActive: false}
      ]
    }
  },
  methods: {
    setActiveMenu: function (currentPath) {
      this.menuItems.forEach(function(item){
        if(item.link === currentPath){
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    }
  },
  watch: {
    '$route.path': function (newPath) {
      this.setActiveMenu(newPath)
    }
  },
  mounted(){
    this.setActiveMenu(this.$route.path)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-brand{
  color: #F2F2F2;
}
.navbar-brand{
  font-size: 2.4rem;
}
li{
  font-size: 1.66rem;
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
  .navbar-brand{
    font-size: 3rem;
  }
  li{
    font-size: 2rem;
  }
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .navbar-brand{
    font-size: 4rem;
  }
  li{
    font-size: 2.66rem;
  }
}
</style>
