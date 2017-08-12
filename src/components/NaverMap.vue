<template>
	<div id="naver-map">
		<div class="contents-wrap">
			<h2>오시는 길</h2>
	        <div id="naver-map-wrapper">
	            <div id="naver-map-content">
	                <div id="map"></div>
	            </div>
	        </div>
		</div>
	</div>
</template>
<script>
export default {
    name: "naver-map",
    mounted() {
        const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(37.515461, 127.1056546),
            zoom: 11,
            minZoom: 9,
            maxZoom: 12,
            scaleControl: false,
            logoControl: true,
            mapDataControl: false,
            zoomControl: false,
            mapTypeControl: false,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT
            }
        });

        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.516061, 127.1057546),
            map: map,
            clickable: true
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
	max-width: 500px;
    max-height: 500px;
}
#map {
    width: 100%;
    height: 100%;
}
</style>
