<template>
  <div id="gallery">
      <pinch-slider :slides="imgs" :enable-pinch="true" :current-index='currentIndex' @on-slide-change="changePageNo" @on-img-click="showFull" :lazyLoad="true">
      </pinch-slider>

	  <!--
	  <flickity v-if="flickityOn" ref="flickity" :options="flickityOption">
		  <div class="carousel-cell" v-for="photo in photos">
			  <img :src="photo">
		  </div>
	  </flickity>
  -->
  </div>
</template>
<script>
import Vue from "vue";
import { PinchSlider, AlloyFinger, AlloyFingerVue } from 'pinch-slider';

Vue.use( AlloyFingerVue, { AlloyFinger: AlloyFinger }); // use AlloyFinger's plugin
Vue.component('pinch-slider', PinchSlider);

export default {
    name: "gallery",
    components: {
        PinchSlider
    },
    props: ["storageRef"],
    data: () => ({
        imgs: [],
        currentIndex: 0,
        isFull:false
    }),
    created() {
        const photosRef = this.storageRef.child("photos");
        for (let i = 1; i <= 3; i++) {
            const photo = photosRef.child(i + ".jpg");
            photo.getDownloadURL().then((url) => {
                this.imgs.push({src: url});
            });
        }
    },
    methods: {
        showFull() {
            this.isFull = true;
        },
        changePageNo(data) {
            this.currentIndex = data.index;
        }
    }
}
</script>
<style>
.slider-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
}
</style>
