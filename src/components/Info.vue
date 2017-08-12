<template>
	<div id="info">
		<div class="contents-wrap">
			<div class="info-upper-box">
				2017.9.9 SAT PM 1:30
			</div>
			<div class="info-under-box">
				잠실 더컨벤션 3층 아모르홀
			</div>
		</div>
	</div>
	</template>
<script>
export default {
	name: "info"
}
</script>
<style scoped>
#info .contents-wrap {
	padding-top: 0;
}
#info .contents-wrap > div {
	margin: auto;
	width: 70%;
	height: 45px;
	line-height: 45px;
}
#info .info-upper-box {
	color: #db883b;
	border-bottom: 1px solid #aaa;
	font-weight: 400;
	font-family: 'Jeju Gothic', sans-serif;
	font-size: 18px;
}
#info .info-under-box {
	font-size: 16px;
	font-family: Batang;
	color: #888;
}
</style>
