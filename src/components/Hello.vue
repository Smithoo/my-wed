<template>
	<div id="hello">
		<div class="contents-wrap">
			<img src="/static/img/hello.jpg" alt="Wedding Invitation"/>
			<h1>Wedding Invitation</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "hello"
};
</script>

<style scoped>
#hello {
	position: relative;
}
#hello img {
	width: 100%;
}
#hello h1 {
	position: absolute;
	top: 0;
	opacity: 0;
}
</style>
