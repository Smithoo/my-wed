<template>
	<div id="naver-map">
        <div id="naver-map-wrapper">
            <div id="naver-map-content">
                <div id="map"></div>
            </div>
        </div>
	</div>
</template>
<script>
import SectionTitle from "./SectionTitle";

export default {
    name: "naver-map",
	components: {SectionTitle},
	props: ["mapOption"],
    mounted() {
        const map = new naver.maps.Map("map", this.mapOption);

        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.515661, 127.1052546),
            map: map,
            clickable: true,
			icon: {
				url: "/static/img/map_info.png",
				anchor: new naver.maps.Point(195, 103)
			}
        });

        naver.maps.Event.addListener(marker, 'click', function(e) {
            console.log(e);
        });
    }
}
</script>
<style scoped>
#naver-map {
	position: relative;
	width: 100%;
	max-height: 500px;
}
#naver-map-wrapper {
	position: relative;
	width: 100%;
	max-width: 500px;
	max-height: 500px;
	padding-top: 100%;
	margin: auto;
}
#naver-map-content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 20px;
	max-width: 500px;
    max-height: 500px;
	box-sizing: border-box;
}
#map {
    width: 100%;
    height: 100%;
}
</style>
