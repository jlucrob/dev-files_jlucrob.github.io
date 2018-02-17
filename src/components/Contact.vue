<template>
  <div id="contact">
    <h3>Let's work together!</h3>
    <h4>Please contact me for details or questions: {{fullEmail}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: 'jlucrob',
      domain: 'hotmail',
      fullEmail: ''
    }
  },
  mounted(){
    this.fullEmail = `${this.name}@${this.domain}.com`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
