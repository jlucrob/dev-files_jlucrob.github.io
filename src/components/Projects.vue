<template>
  <div>
    <div id="projects">
      <div class="proj-item">
        <h3>Catherine Dufour</h3>
        <a href="http://www.catherinedufour.ca/" target="_blank"><img src="../assets/cath-dufour.jpg"></a>
        <p>Personal website of Catherine Dufour, Kiteboard Racing athlete.</p> 
        <p>- Built with Wordpress.</p>
      </div>
      <div class="proj-item">
        <h3>Robact</h3>
        <a href="http://robact.ca/" target="_blank"><img src="../assets/robact.jpg"></a>
        <p>Coorporate website for Robitaille Actuarial Consulting.</p>
        <p>- Built with raw HTML/CSS/JS and Bootstrap.</p>
        <p>- Mobile version: <a href="http://m.robact.ca/" target="_blank">m.robact.ca</a></p>
        <p>- <a href="https://github.com/jlucrob/robact" target="_blank">Source code</a></p>
      </div>
      <div class="proj-item">
        <h3>Employee Manager</h3>
        <a href="https://jlucrob.github.io/traversymedia-vuejs-firestore-app" target="_blank"><img src="../assets/employee-manager.jpg"></a>
        <p>This is a small personal project to manage employees in a company.</p>
        <p>- Built with Vue.js, a database on Firestore and published on Github Pages.</p>
        <p>- <a href="https://github.com/jlucrob/dev-files_traversymedia-vuejs-firestore-app" target="_blank">Source code</a></p>
      </div>
      <div class="proj-item">
        <h3>Flashcards</h3>
        <a href="https://github.com/jlucrob/flashcards-app-treehouse" target="_blank"><img src="../assets/flashcards.jpg"></a>
        <p>This is a small flashcards study app with questions and answers.</p>
        <p>- Built with Express, Mongoose, Pug and database on MongoDB Atlas.</p>
        <p>- <a href="https://github.com/jlucrob/flashcards-app-treehouse" target="_blank">Source code</a></p>
      </div>
      <div class="proj-item">
        <h3>API on Heroku</h3>
        <a href="https://jlucrob.github.io/vuejs-test-ghpages-link-api" target="_blank"><img src="../assets/test-rest-api.jpg"></a>
        <p>This is a small REST API deployed to Keroku. The data is consumed by a Vue.js page.</p>
        <p>- Built with Express, Mongoose and a database on MongoDB Atlas.</p>
        <p>- Source code: <a href="https://github.com/jlucrob/dev-files_vuejs-test-ghpages-link-api" target="_blank">Front End</a> / <a href="https://github.com/jlucrob/test-rest-api-to-heroku" target="_blank">Back End</a></p>
      </div>
    </div>
    <h4>Head over to my <a href="https://github.com/jlucrob" target="_blank">Github</a> to see more personal projects and their source files.</h4>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#projects{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 4rem;
}
.proj-item{
  max-width: 40rem;
  margin-top: 1.5rem;
  padding: 0 1rem 1rem 1rem;
  border-radius: 5px;
  border: solid 2px #343a40;
  background-color: #343a40;
  color: #F2F2F2;
}
.proj-item > p{
  margin-bottom: 0.5rem;
}
img{
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  max-width: 100%;
  border-radius: 5px;
}

@media (min-width: 576px) {

}

@media (min-width: 670px) {
  #projects{
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .proj-item{
    max-width: 30rem;
    min-height: 37rem;
  }
}

@media (min-width: 768px) {
  .proj-item{
    min-height: 39rem;
  }
}
</style>
