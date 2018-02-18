<template lang="pug">
  section
    h2 {{ pokemon.name}}
    section.pokemon
      figure
        img(:src="pokemon.sprites.back_default")
      figure
        img(:src="pokemon.sprites.front_default")
    h3 Types
    section.types
      ol
        li(v-for="t in pokemon.types") {{ t.type.name }}
    h3 Abilities
    section.abilities
      ol 
        li(v-for="h in pokemon.abilities") {{ h.ability.name}}
</template>
<script>
export default {
    props : {
    pokemon: {type : Object}
  }
}
</script>


<style scoped>
    section{
        width: 70%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(240, 240, 240);
        color: lightseagreen;
    }
    .pokemon, .types, .abilities{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    ol{
      display: flex;
      flex-direction: column;
    }
    li{
      color: midnightblue;
      margin: 5px;
      font-weight: bolder;
    }
</style>
