<template lang="pug">
  section
    input(type="text", placeholder="Buscar pokemon", v-model="nombre")
    button(@click="search") Buscar
</template>

<script>
export default {
  data(){
    return {
      nombre : ''
    }
  },
  methods:{
    search(){
      this.$emit('search', this.nombre)
    }
  }
}
</script>


<style scoped>
  section{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  input{
    width: 40%;
    height: 30px;
    border: none;
    font-size: 1.1em;
  }
  button{
    background: rgb(87, 145, 221);
    color: white;
    height: 30px;
    width: 80px;
    border: none;
    font-weight: bold;
  }
</style>

