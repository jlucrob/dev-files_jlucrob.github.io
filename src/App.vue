<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
:root{
  --themecolor:#5386E4;
}
* {
  box-sizing: border-box;
}
html{
  font-size: 62.5%; /*Makes default font-size 10px. So 1 rem = 10px*/
}
body{
  background-color: #F2F2F2;
}

/*Styles from type-scale.com*/
p {margin-bottom: 1.3rem;}
h1, h2, h3, h4, .h1, .h2, .h3, .h4 {
  margin: 1.414rem 0 0.5rem;
  font-weight: inherit;
  line-height: 1.2;
}
h1, .h1 {
  margin-top: 0;
  font-size: 3.998rem;
}
h2, .h2 {font-size: 2.827rem;}
h3, .h3 {font-size: 1.999rem;}
h4, .h4 {font-size: 1.414rem;}
small, .font_small {font-size: 0.707rem;}
/*END Styles from type-scale.com*/
a{
  color: #CC8B86;
}
a:hover{
  color: #A44C46;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.3rem;
  max-width: 770px !important;
  margin: 0 auto;
}
i, h3, h4, .h3, .h4{
  color: var(--themecolor) !important; 
}
h3, .h3, h4, .h4{
  text-align: center;
  margin: 1.414rem auto 1.5rem;
}
.container{
  max-width: 100%;
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
  #app{
    font-size: 1.5rem;
  }
  h1, .h1 {
    font-size: 4.198rem;
  }
  h2, .h2 {font-size: 3.027rem;}
  h3, .h3 {font-size: 2.199rem;}
  h4, .h4 {font-size: 1.614rem;}
  small, .font_small {font-size: 0.907rem;}
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  #app{
    font-size: 1.7rem;
  }
  h1, .h1 {
    font-size: 4.398rem;
  }
  h2, .h2 {font-size: 3.227rem;}
  h3, .h3 {font-size: 2.399rem;}
  h4, .h4 {font-size: 1.814rem;}
  small, .font_small {font-size: 1.107rem;}
}
</style>
