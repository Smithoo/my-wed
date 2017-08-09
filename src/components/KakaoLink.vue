<template>
  <div id="kakao-link">
	  <button type="button" @click="sendLink">카카오톡 공유하기</button>
  </div>
</template>
<script>
import config from "./../assets/config";

export default {
	name: "kakao-link",
	mounted() {
		Kakao.init(config.kakaoAppKey);
	},
	methods: {
		sendLink() {
			Kakao.Link.sendScrap({
				requestUrl: "https://smithoo-cb60c.firebaseapp.com/",
				installTalk: true
			});
		}
	}
}
</script>
<style scoped>
#kakao-link {
	text-align: center;
	padding: 20px 0px;
}
#kakao-link button {
	width: 300px;
	height: 80px;
	background-color: #333333;
	color: #ffffff;
}
</style>
