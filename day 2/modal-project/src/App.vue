<template>
  <h1>PokeDex</h1>
  <div class="list">
    <PokemonList />
    <ButtonBubble :onpress="wow" bgColor="red" sprite="https://iconape.com/wp-content/files/wd/155872/png/snorlax-logo.png"/>
  </div>
</template>

<script>
  import PokemonList from './components/PokemonList.vue';
  import ButtonBubble from './components/ButtonBubble.vue';
  export default {
    name: 'App',
    components: { PokemonList, ButtonBubble },
    data() {
      return {
        data: []
      }
    },
    mounted() {
      
    },
    methods: {
      wow() {
        console.log('wow')
      }
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
  img {
    user-select: none;
  }
</style>
