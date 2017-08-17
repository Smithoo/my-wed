<template>
	<div id="hello">
		<div class="contents-wrap">
			<img src="https://firebasestorage.googleapis.com/v0/b/smithoo-cb60c.appspot.com/o/hello.jpg?alt=media&token=6b526936-fb0f-467a-9f96-2892f638cd76" alt="Wedding Invitation"/>
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
#hello .contents-wrap {
	padding-top: 0;
	min-height: 200px;
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
