<template lang="pug">
  footer
    a(:href="href") @jsgdev
</template>

<script>
export default {
  data(){
    return {
      href: 'https://github.com/jsgdev'
    }
  }
}
</script>

<style scoped>
  footer{
    background: black;
    color: whitesmoke;
    font-size: 1.1em;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
    color: whitesmoke;
    font-weight: bolder;
    text-decoration: none;
  }
</style>
