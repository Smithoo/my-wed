<template>
    <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
            <img src="./../assets/1.jpg" alt="">
        </div>
        <div class="carousel-cell">
            <img src="./../assets/2.jpg" alt="">
        </div>
        <div class="carousel-cell">
            <img src="./../assets/3.jpg" alt="">
        </div>
    </flickity>
</template>
<script>
import Flickity from 'vue-flickity';

export default {
    name: "photos",
    components: {
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                autoPlay: 5000,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
            }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        }
    }
};
</script>
<style>
.carousel-cell {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
}
.carousel-cell img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
}
.flickity-enabled {
  position: relative;
}
.flickity-enabled:focus { outline: none; }
.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
          tap-highlight-color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}
.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}
.flickity-rtl .flickity-page-dots { direction: rtl; }
.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}
.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
</style>
