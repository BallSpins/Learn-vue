Vue.createApp({
    data() {
        return {
            showSongs: true,
            songs: [
                { id: 1, title: 'On Sight', album: 'Yeezus', artist: 'Kanye West', img: '../assets/yeezus.jpg', isFav: false },
                { id: 2, title: 'I Wonder', album: 'Graduation', artist: 'Kanye West', img: '../assets/graduation.jpg', isFav: false },
                { id: 3, title: 'Good Morning', album: 'Graduation', artist: 'Kanye West', img: '../assets/graduation.jpg', isFav: false },
                { id: 4, title: 'Flashing Lights', album: 'Graduation', artist: 'Kanye West', img: '../assets/graduation.jpg', isFav: false },
                { id: 5, title: 'Windy Summer', album: 'Timely!!', artist: 'Anri', img: '../assets/timely.jpg', isFav: false },
                { id: 6, title: 'Surprise of Summer', album: 'COOOL', artist: 'Anri', img: '../assets/coool.jpg', isFav: false }
            ],
            searchtitle: '',
            songSearched: []
        }
    },
    methods: {
        searchsong() {
            if(this.searchtitle) {
                this.songSearched = this.songs.filter(song => 
                    song.title.toLowerCase().includes(this.searchtitle.toLowerCase())
                )
            } else {
                this.songSearched = []
            }
        },
        toggleFavorite(song) {
            song.isFav = !song.isFav
        }
    }
}).mount('#app')