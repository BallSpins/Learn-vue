<template>
    <div class="backdrop" ref="backdrop" :class="{ onDrop: onHover }"></div>
    <div class="Round"
    ref="round" 
    @click="onpress" 
    @mouseover="HandleMouseOver" 
    @mouseleave="HandleMouseLeave"
    :class="{ Hover: onHover }">
        <img :src="sprite" alt="img">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                onHover: false
            }
        },
        props: { 
            sprite: String,
            onpress: Function,
            bgColor: String
        },
        mounted() {
            this.$refs.round.style.backgroundColor = this.bgColor;
        },
        methods: {
            HandleMouseOver() {
                this.onHover = true;
                this.$refs.backdrop.style.display = 'block';
            },
            HandleMouseLeave() {
                this.onHover = false;
                this.$refs.backdrop.style.display = 'none';
            }
        }
    }
</script>

<style scoped>
    .backdrop {
        z-index: 10;
        /* display: none; */
        opacity: 0;
        position: absolute;
        background: rgba(0,0,0,0.2);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.3s ease;
    }

    .onDrop {
        opacity: 1;
    }

    .Round {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
        border-radius: 100%;
        position: relative;
        z-index: 11;
    }

    .Hover {
        transform: scale(1.02);
    }

    .Round img {
        width: 35px;
        height: 35px;
    }
</style>