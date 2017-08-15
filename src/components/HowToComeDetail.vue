<template>
  <div id="how-to-come-detail">
	  <div class="contents-wrap">
		  <section-title :label="label" :icon="icon"></section-title>
		  <naver-map :mapOption="mapOption"></naver-map>
		  <div class="address">
			  <b>교통회관 더컨벤션</b><br/>
			  서울 송파구 올림픽로 319<br/>
			  TEL. 02-418-5000
		  </div>
		  <div class="come-by">
			  <div class="subWay">
				  <h3>지하철</h3>
				  2호선 잠실역 8번 출구 약 300m<br/>
				  8호선 잠실역 9번 출구 약 30m
			  </div>
			  <div class="bus">
				  <h3>버&nbsp;&nbsp;스</h3>
				  <ul>
				  	<li>
						<div class="bus-header">
							간선(파랑):
						</div>
						<div class="bus-body">
							301, 302, 303, 320, 333, 341, 351, 352, 360, N13
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							지선(녹색):
						</div>
						<div class="bus-body">
							2311, 2412, 2415, 3216, 3217, 3313, 3314, 3315, 3317, 3318, 3319, 3411, 3412, 3413, 3414, 4318, 4319
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							경기(일반):
						</div>
						<div class="bus-body">
							16, 30-1, 30-3, 30-5, 32, 70, 100, 101, 116, 119, 2002-2
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							경기(직행):
						</div>
						<div class="bus-body">
							500-1, 1000, 1000-1, 1000-2, 1003, 1001, 1007, 1007-1, 1009, 1100, 1112, 1115-6, 1117, 1200, 1650, 1670, 1700, 2000, 2000-1, 2000-2, 5600, 5700, 6900, 7007, 7007-2, 8001, 8002, 8002-2, 8011, 8012, 9005
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							시외:
						</div>
						<div class="bus-body">
							1310, 1801, 1810, 3300, 7000, 8015, 8142, 8143, 8147, 8153
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							광역:
						</div>
						<div class="bus-body">
							9403, M2316, M2323
						</div>
						<div class="clr"></div>
					</li>
					<li>
						<div class="bus-header">
							공항:
						</div>
						<div class="bus-body">
							6000, 6006
						</div>
						<div class="clr"></div>
					</li>
				  </ul>
			  </div>
			  <div class="car">
				  <h3>차&nbsp;&nbsp;량 (지방)</h3>
				  중부내륙고속도로 -><br/>
				  서하남 IC에서 10분 거리<br/><br/>

				  <h3>주&nbsp;&nbsp;차</h3>
				  교통회관 지상/지하 주차장 이용<br/>
				  (2시간 무료주차)
			  </div>
		  </div>
		  <div class="go-back">
			  <button type="button" @click="onClickButton">돌아가기</button>
		  </div>
	  </div>
  </div>
</template>
<script>
import SectionTitle from "./SectionTitle";
import NaverMap from "./NaverMap";

export default {
  name: "how-to-come-detail",
  components: {SectionTitle, NaverMap},
  data() {
	  return {
		  icon: "map",
		  label: "오시는 길 (상세)",
		  mapOption: {
			  center: new naver.maps.LatLng(37.515461, 127.1032546),
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
		  }
	  }
  },
  methods: {
	  onClickButton() {
		  this.$router.push({path: "/"});
	  }
  }
}
</script>
<style scoped>
#how-to-come-detail .address {
	line-height: 30px;
}
#how-to-come-detail .come-by {
	text-align: left;
	padding: 30px;
	line-height: 30px;
}
#how-to-come-detail .come-by > div {
	margin-bottom: 30px;
}
#how-to-come-detail li {
	padding: 8px 0;
}
#how-to-come-detail .bus-header {
	float: left;
	width: 30%;
	box-sizing: border-box;
	font-weight: 600;
}
#how-to-come-detail .bus-body {
	float: left;
	width: 70%;
	box-sizing: border-box;
}
#how-to-come-detail .clr {
	clear: both;
}
#how-to-come-detail .go-back {
	padding: 0 20px;
}
#how-to-come-detail .come-by .car {
	margin-bottom: 0;
}
#how-to-come-detail button{
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
