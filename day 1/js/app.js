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
            isFilterIconHovered: false,
            songSearched: []
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
        searchPlaceholder() {
           return this.filter === 'isFav' ? 'Search by favorites' : `Search by ${this.filter}`
        },
        searchsong() {
            if (this.filter === 'isFav') {
                if (this.search) {
                    this.songSearched = this.songs.filter(song => 
                        song.isFav && song.title.toLowerCase().includes(this.search.toLowerCase())
                    );
                } else {
                    this.songSearched = this.songs.filter(song => song.isFav)
                }
            } else {
                if (this.search) {
                    this.songSearched = this.songs.filter(song => 
                        song[this.filter].toLowerCase().includes(this.search.toLowerCase())
                    );
                } else {
                    this.songSearched = [];
                }
            }
        },
        toggleFavorite(song) {
            song.isFav = !song.isFav

            if (this.filter === 'isFav') {
                this.searchsong();
            }
        }
    }
}).mount('#app')