<template>
  <div id="about"> 
    <img src="../assets/myface.jpg"/>
<!--     <div id="img-container">
      <span id="my-face"></span>
    </div> -->
    <h3>Hi, I'm Jean-Luc</h3>
    <h4>A Web Developer from Quebec, Canada.</h4>
    <p>I'm mostly backend oriented, but I also enjoy working on the frontend, as well as doing some design. I love to learn new technologies and practices and to share any new knowledge I acquire! I'm interested in any opportunities involving web development. My experience in the field includes working on personal projects, but also freelancing for small companies.</p>
    <p>When I'm not coding, you can find me practicing outdoor sports such as skiing, hiking and rock climbing. But my biggest passion in sports is Kitesurfing. I'm a wind addict!</p>
    <p>My other interests include healthy eating, gardening, fitness and reading... audiobooks <i class="fa fa-smile-o"></i></p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  display: block;
  margin: 2.5rem auto;
  max-width: 20rem;
  border-radius: 100%;
  border: 3px var(--themecolor) solid;
}
h3, .h3, h4, .h4{
  max-width: 52rem;
}
p{
  text-align: justify;
}

#about{
  max-width: 500px !important;
  margin: 0 auto;
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
  #about{
    max-width: 600px !important;
  }
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  #about{
    max-width: 705px !important;
  }
}
</style>