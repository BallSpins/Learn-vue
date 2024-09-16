Vue.createApp({
    data() {
        return {
            showSongs: true,
            songs: [
                { id: 1, title: 'On Sight', album: 'Yeezus', artist: 'Kanye West', img: 'assets/yeezus.jpg', isFav: false },
                { id: 2, title: 'I Wonder', album: 'Graduation', artist: 'Kanye West', img: 'assets/graduation.jpg', isFav: false },
                { id: 3, title: 'Good Morning', album: 'Graduation', artist: 'Kanye West', img: 'assets/graduation.jpg', isFav: false },
                { id: 4, title: 'Flashing Lights', album: 'Graduation', artist: 'Kanye West', img: 'assets/graduation.jpg', isFav: false },
                { id: 5, title: 'Windy Summer', album: 'Timely!!', artist: 'Anri', img: 'assets/timely.jpg', isFav: false },
                { id: 6, title: 'Surprise of Summer', album: 'COOOL', artist: 'Anri', img: 'assets/coool.jpg', isFav: false }
            ],
            search: '',
            filter: 'title',
            isFilterPanelVisible: false,
            isFilterIconHovered: false
        }
    },
    computed: {
        filteredSongs() {
            if (this.filter === 'isFav') {
                if(this.search) {
                    return this.songs.filter(song => 
                        song.isFav && song.title.toLowerCase().includes(this.search.toLowerCase())
                    )
                } else {
                    return this.songs.filter(song => song.isFav)
                }
            } else if(this.search) {
                return this.songs.filter(song => 
                    song[this.filter].toLowerCase().includes(this.search.toLowerCase())
                )
            } else {
                return this.songs
            }
        },
        searchPlaceholder() {
            return `Search by ${this.filter === 'isFav' ? 'favorites' : this.filter}`
        }
    },
    methods: {
        toggleFilterPanel() {
            this.isFilterPanelVisible = !this.isFilterPanelVisible
        },
        setFilter(filter) {
            this.filter = filter
            this.isFilterPanelVisible = false
            this.searchsong()
        },
        toggleFavorite(song) {
            song.isFav = !song.isFav
        }
    }
}).mount('#app')