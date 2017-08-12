<template>
	<div class="section-title">
		<md-icon>{{icon}}</md-icon>
		<span class="section-label">{{label}}</span>
	</div>
</template>
<script>
export default {
	name: "section-title",
	props: ["label", "icon"]
}
</script>
<style scoped>
.section-title {
	text-align: left;
	padding: 10px 25px;
}
.material-icons {
	color: #555;
}
.section-label {
	position: relative;
	top: 4px;
	left: 3px;
	font-size: 18px;
	font-weight: 800;
	color: #555;
}
</style>
