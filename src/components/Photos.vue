<template>
    <div id="photos">
        <div class="contents-wrap">
            
        </div>
    </div>
</template>
<script>
export default {
    name: "photos",
    components: {
    },
    props: ["photoRef"],
    data() {
        return {
            flickityOption: {
                autoPlay: 5000,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
            }
        }
    },
    mounted() {
      setTimeout(() => {
          const photos = this.photoRef.child("photos");
          console.log(photos);
          /*
            // Points to 'images/space.jpg'
            // Note that you can use variables to create child values
            var fileName = 'space.jpg';
            var spaceRef = imagesRef.child(fileName);

            // File path is 'images/space.jpg'
            var path = spaceRef.fullPath

            // File name is 'space.jpg'
            var name = spaceRef.name

            // Points to 'images'
            var imagesRef = spaceRef.parent;
            */
      }, 3000)
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
#photos {
    position: relative;
}
#photos ul {
    position: relative;
    padding: 0 20px;
}
#photos li {
    position: relative;
    width: 33.33%;
    padding-top: 100%;
}
#photos .photo {
    position: absolute;
    background-position: center center;
    background-size: cover;
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
