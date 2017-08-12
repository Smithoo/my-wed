<template>
    <div id="photos">
        <div class="contents-wrap">
			<section-title :label="label" :icon="icon"></section-title>
            <ul>
                <li class="photo-item" v-for="photo in photos">
                    <div class="photo-wrap">
                        <div class="photo" v-bind:style="{ backgroundImage: 'url(' + photo + ')' }"></div>
                    </div>
                </li>
                <li class="clr"></li>
            </ul>
        </div>
    </div>
</template>
<script>
import SectionTitle from "./SectionTitle";

export default {
    name: "photos",
    components: {SectionTitle},
    props: ["storageRef"],
    data() {
        return {
			label: "사진첩",
			icon: "photo_library",
            photos: [],
            flickityOn: false,
            flickityOption: {
                autoPlay: 5000,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
            }
        }
    },
    created() {
        const photosRef = this.storageRef.child("thumbnails");
        for (let i = 1; i <= 12; i++) {
            const photo = photosRef.child("thumb_" + i + ".jpg");
            photo.getDownloadURL().then((url) => {
                this.photos.push(url);
            });
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
<style scoped>
#photos ul {
    padding: 0 20px;
}
#photos .photo-item {
    position: relative;
    width: 33.33%;
    padding-top: 33.33%;
    float: left;
}
#photos .photo-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    box-sizing: border-box;
}
#photos .photo {
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
#photos .clr {
    clear: both;
}
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
