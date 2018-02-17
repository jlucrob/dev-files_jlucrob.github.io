<template>
  <div id="footer">
    <div id="contact-links">
      <router-link to="/contact" class="router-link"><i class="fa fa-envelope fa-2x"></i></router-link>
      <a href="https://github.com/jlucrob" target="_blank"><i class="fa fa-github fa-2x"></i></a>
      <a href="/static/J-L_Robitaille_Resume.pdf" target="_blank"><i class="fa fa-file-pdf-o fa-2x"></i></a>
      <a href="https://www.linkedin.com/in/jean-luc-robitaille-476197153/" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
      <a href="https://twitter.com/jlucrob25" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
  margin: 2rem 0;
  text-align: center;
}
#contact-links{
  display: flex;
  width: auto;
  justify-content: center;
}
#contact-links > a, .router-link{
  margin: 0.8rem;
}
</style>
