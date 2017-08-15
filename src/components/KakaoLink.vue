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
			Kakao.Link.sendDefault({
				objectType: "feed",
				content: {
					title: "우재우 ♥ 양지민 결혼합니다",
					description: "2017.9.9(토) PM 1:30\n잠실 교통회관 더컨벤션 3층 아모르홀",
					imageUrl: "https://smithoo-cb60c.firebaseapp.com/static/img/hello.jpg",
					link: {
						mobileWebUrl: "https://smithoo-cb60c.firebaseapp.com",
						webUrl: "https://smithoo-cb60c.firebaseapp.com"
					}
				},
				buttonTitle: "청첩장 보기"
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
