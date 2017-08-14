<template>
    <div id="photos">
        <div class="contents-wrap">
			<section-title :label="label" :icon="icon"></section-title>
            <ul>
                <li class="photo-item" v-for="(thumbnail, index) in thumbs">
                    <div class="photo-wrap">
                        <div class="photo" :style="{ backgroundImage: 'url(' + thumbnail + ')' }" @click="onClickPhoto(index)"></div>
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
			thumbs: [],
            photos: []
        }
    },
    created() {
		const thumbsRef = this.storageRef.child("thumbnails");
		const photosRef = this.storageRef.child("photos");
        for (let i = 1; i <= 12; i++) {
			const thumbnail = thumbsRef.child("thumb_" + i + ".jpg");
			const photo = photosRef.child("photo_" + i + ".jpg");

            thumbnail.getDownloadURL().then((url) => {
                this.thumbs.push(url);
            });
			photo.getDownloadURL().then((url) => {
                this.photos.push(url);
            });
        }
    },
    methods: {
        onClickPhoto(index) {
			this.$router.push({ name: "gallery", params: { index: index, photos: this.photos }});
		}
    }
};
</script>
<style scoped>
#photos {
	background-color: #ffecec;
}
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
</style>
