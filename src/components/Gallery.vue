<template>
  <div id="gallery">
	  <div class="content-wrap">
		  <flickity ref="flickity" :options="flickityOption">
    		  <div class="carousel-cell" v-for="(photo, index) in photos" :key="index">
    			  <img :data-flickity-lazyload="photo">
    		  </div>
    	  </flickity>
	  </div>
	  <div class="close" @click="onClickClose">
		  <md-icon class="md-size-2x">close</md-icon>
	  </div>
  </div>
</template>
<script>
import Flickity from 'vue-flickity';

export default {
    name: "gallery",
    components: {Flickity},
    data() {
		return {
			carouselStyle: {
				position: "absolute",
				margin: "auto",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				height: "500px"
			},
			flickityOption: {
				initialIndex: this.$route.params.index,
				autoPlay: 5000,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: true,
                lazyLoad: true
			},
			photos: this.$route.params.photos
		};
    },
	mounted() {
		this.$refs.flickity.select(this.initialIndex, true, true);
	},
	methods: {
		onClickClose() {
			this.$router.push({path: "/"});
		}
	}
}
</script>
<style scoped>
#gallery .close {
	position: fixed;
	top: 20px;
	right: 15px;
	color: #fff;
	z-index: 100;
}
#gallery {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #222;
}
#gallery .content-wrap {
	position: absolute;
	height: 500px;
	top: 0; left: 0; bottom: 0; right: 0;
	margin: auto;
}
.carousel-cell {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 500px;
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
</style>
