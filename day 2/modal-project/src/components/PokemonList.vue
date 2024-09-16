<template>
    <div class="wrap">
        <ul v-if="!loading" class="poke-list">
            <li v-for="poke in pokes" :key="poke.id" class="poke">
                <h3>{{ poke.name }}</h3>
                <img :src="poke.sprite" :alt="poke.name">
            </li>
        </ul>

        <div v-if="loading">Loading...</div>

        <div v-if="!loading" class="pagination">
            <button @click="prevPage" v-show="currentPage > 1" :disabled="currentPage === 1">Prev</button>
            <span>Page {{ currentPage }}</span>
            <button @click="nextPage">Next</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pokes: [],
                loading: false,
                currentPage: 1,
                limit: 20
            }
        },
        mounted() {
            this.loadPoke(this.currentPage)
        },
        methods: {
            async fetchData(offset, limit) {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                    const pdex = await response.json();

                    const fetchPromises = pdex.results.map(async (elem) => {
                      const pokemonResponse = await fetch(elem.url);
                      const pokemon = await pokemonResponse.json();
                      console.log(pokemon.sprites.front_default)
                      return { id: pokemon.id, name: pokemon.name, sprite: pokemon.sprites.front_default, isFav: false};
                    });
      
                    const pokes = await Promise.all(fetchPromises);
                    return pokes;
                } catch (e) {
                    console.error(e);
                    return [];
                }
            },
            async loadPoke(page) {
                this.loading = true
                const offset = (page - 1) * this.limit
                this.pokes = await this.fetchData(offset, this.limit)
                this.loading = false
            },
            nextPage() {
                this.currentPage++
                this.loadPoke(this.currentPage)
            },
            prevPage() {
                if(this.currentPage > 1) {
                    this.currentPage--
                    this.loadPoke(this.currentPage)
                }
            }
        }
    }
</script>

<style scoped>
    .wrap {
        max-width: 960px;
        width: 960px;
    }
    h3, ul {
        padding: 0;
        margin: 0;
    }

    .poke-list {
        list-style-type: none;
        padding: 0;
    }

    .poke {
        background-color: #ffaa;
        margin: 10px 0;
        padding: 10px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .poke:hover {
        background-color: #f0f0f0;
        transform: scale(1.05);
    }

    .poke img {
        width: 80px;
        height: 80px;
        border-radius: 10px;
    }
    
    .poke h3 {
        margin: 0;
        padding: 0 10px;
        flex-grow: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .pagination {
        gap: 2rem;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .pagination button {
        padding: 0.5rem;
        border: none;
        background-color: #0d6efd;
        color: white;
        border-radius: 0.2rem;
    }

    .pagination span {
        columns: #cccb;
    }
</style>