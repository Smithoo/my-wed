<template>
  <div id="kakao-link">
      <div class="contents-wrap" @click="sendLink">
		  <img src="/static/img/kakao.png" alt="카카오톡으로 청첩장 공유하기">
      </div>
  </div>
</template>
<script>
export default {
	name: "kakao-link",
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
#kakao-link .contents-wrap {
	padding: 30px 0;
    padding-top: 0;
}
#kakao-link img {
	width: 280px;
}
</style>
