<template>
	<div id="how-to-come">
		<div class="contents-wrap">
			<section-title :label="label" :icon="icon"></section-title>
			<div class="map-wrapper">
				<img src="/static/img/map.jpg" alt="오시는길">
			</div>
			<div class="go-detail">
				<button type="button" @click="onClickButton">자세히 보기</button>
			</div>
		</div>
	</div>
</template>
<script>
import SectionTitle from "./SectionTitle";
import NaverMap from "./NaverMap";

export default {
    name: "how-to-come",
	components: {SectionTitle, NaverMap},
	data() {
		return {
			icon: "map",
			label: "오시는 길",
			mapOption: {
	            center: new naver.maps.LatLng(37.515461, 127.1032546),
	            zoom: 11,
	            minZoom: 9,
	            maxZoom: 12,
				draggable: false,
	            pinchZoom: false,
				scrollWheel: false,
				disableDoubleTapZoom: true,
	            disableDoubleClickZoom: true,
	            disableTwoFingerTapZoom: true,
				keyboardShortcuts: false,
	            scaleControl: false,
	            logoControl: true,
	            mapDataControl: false,
	            zoomControl: false,
	            mapTypeControl: false,
	            zoomControlOptions: {
	                position: naver.maps.Position.TOP_RIGHT
	            }
	        }
		}
	},
	methods: {
		onClickButton() {
			this.$router.push("map");
		}
	}
}
</script>
<style scoped>
#how-to-come .map-wrapper {
	padding: 10px 20px;
}
#how-to-come img {
	width: 100%;
}
#how-to-come .go-detail {
	padding: 0 20px;
	padding-top: 10px;
}
#how-to-come button{
	width: 100%;
	max-width: 460px;
	height: 32px;
	margin-bottom: 12px;
	border: 1px solid #bbbbbb;
	border-radius: 5px;
	box-sizing: border-box;
	color: #555555;
}
</style>
