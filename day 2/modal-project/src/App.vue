<template>
  <h1>PokeDex</h1>
  <div class="list">
    <PokemonList />
  </div>
</template>

<script>
  import PokemonList from './components/PokemonList.vue';
  export default {
    name: 'App',
    components: { PokemonList },
    data() {
      return {
        data: []
      }
    },
    mounted() {
      
    },
    methods: {
    }
  }
</script>

<style>
  h1 {
    margin: 0 auto;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
