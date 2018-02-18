<template lang="pug">
  #app
    pk-header
    pk-search(@search="buscar")
    pk-section(:pokemon="pokemon")
    pk-footer
</template>

<script>
import PKSearch from './components/Buscador.vue'
import PKSection from './components/Section.vue'

import pokemonservice from './services/pokemon'

export default {
  name: 'app',
  components:{
    'pk-search': PKSearch,
    'pk-section' : PKSection
  },
  data () {
    return {
      pokemon: {}
    }
  },
  methods:{
    buscar(nombre){
      pokemonservice.search(nombre)
        .then(res => this.pokemon = res)
        console.log(res)
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
</style>
