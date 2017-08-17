<template>
	<div class="photo360">
		<div v-if="isAvailable" class="contents-wrap">
			<div class="photo360-wrapper">
				<div class="photo360-viewer"></div>
				<div class="photo360-guide">
					<span>이미지를 돌려보세요</span>
				</div>
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
		setTimeout(() => {
			const el = this.$el.querySelector(".photo360-viewer");
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
		}, 3000);
	}
};
</script>
<style>
.photo360 {
	position: relative;
	width: 100%;
	max-height: 600px;
	background-color: #ffecec;
}
.photo360 .contents-wrap {
	padding-bottom: 0;
}
.photo360-wrapper {
	position: relative;
	width: 100%;
	max-width: 500px;
	max-height: 500px;
	padding-top: 100%;
	margin: auto;
}
.photo360-viewer {
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
.photo360-guide {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 20px;
	color: #fff;
	background-color: #999;
	font-size: 10px;
	line-height: 20px;
	opacity: 0.8;
}
</style>
