<template>
	<div id="names">
		<div class="contents-wrap">
			<div class="names-jw">
				<div class="parents">
					우기진<br/>김명주
				</div>
				<div class="child">
					의 장남 <span class="child-name">재&nbsp;&nbsp;우</span>
				</div>
				<div class="clr"></div>
			</div>
			<div class="names-jm">
				<div class="parents">
					양경배<br/>윤미경
				</div>
				<div class="child">
					의 장녀 <span class="child-name">지&nbsp;&nbsp;민</span>
				</div>
				<div class="clr"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: "names"
}
</script>
<style scoped>
#names {
	background-color: #f3ffed;
	font-family: 'Jeju Gothic', sans-serif;
}
#names .contents-wrap {
	padding: 20px 0;
}
#names .contents-wrap > div {
	padding: 10px 0;
}
#names .parents {
	float: left;
	width: 45%;
	height: 80px;
	line-height: 40px;
	font-weight: 400;
	font-size: 22px;
	padding: 0 20px;
	text-align: right;
	box-sizing: border-box;
}
#names .child {
	float: left;
	width: 55%;
	height: 80px;
	line-height: 80px;
	font-size: 16px;
	box-sizing: border-box;
	text-align: left;
}
#names .child-name {
	font-size: 22px;
	margin-left: 15px;
}
.clr {
	clear: both;
}
</style>
