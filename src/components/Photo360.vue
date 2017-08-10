<template>
	<div class="photo360">
		<div class="contents-wrap">
			<div class="photo360wrapper">
				<div v-if="isAvailable" class="photo360viewer"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "photo360",
	data() {
		return {
			isAvailable: Photo360Viewer && Photo360Viewer.isWebGLAvailable()
		}
	},
	mounted() {
		this.$nextTick(() => {
			const el = this.$el.querySelector(".photo360viewer");
			if (this.isAvailable) {
				const photo360Viewer = new Photo360Viewer(
					el,
					{
						image: "/static/img/photo360_cube.jpg",
						controlMode: "gallery_yaw",
						allowPinchZoom: false,
						fieldOfView: 95,
						error: function() {
							throw new Error("360 viewer is not created");
						}
					}
				);
				photo360Viewer.resume();
			}
		});
	}
};
</script>
<style>
.photo360 {
	position: relative;
	width: 100%;
	max-height: 500px;
}
.photo360wrapper {
	position: relative;
	width: 100%;
	max-width: 500px;
	max-height: 500px;
	padding-top: 100%;
	margin: auto;
}
.photo360viewer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	max-width: 500px;
    max-height: 500px;
	touch-action: pan-y !important;
	user-select: none;
	-webkit-user-drag: none;
}
</style>
