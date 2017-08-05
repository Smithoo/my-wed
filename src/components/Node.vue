<template>
	<div class="node" :style="nodeStyle">
		<span :style="valueStyle">{{node.value}}</span>
	</div>
</template>
<script>
export default {
	name: "node",
	props: ["cellSize", "node"],
	data() {
		return {
			in: false,
			out: false,
			isHorizontal: true
		}
	},
	mounted() {
		this.setDirection();
	},
	computed: {
		nodeStyle: function() {
			const coord = this.node.coord;
			const size = this.node.size;
			return {
				top: coord.y * this.cellSize + "px",
				left: coord.x * this.cellSize + "px",
				width: size.width * this.cellSize + "px",
				height: size.height * this.cellSize + "px",
				whiteSpace: this.isHorizontal ? "nowrap" : "normal"
			};
		},
		valueStyle: function() {
			const valueLength = this.node.value.length;
			const width = this.node.size.width;
			const height = this.node.size.height;
			const horizontalScaleX =  width / valueLength;
			const verticalScaleY = height / valueLength - 0.1;
			return {
				transform: this.isHorizontal ?
					"scale(" + horizontalScaleX + ", " + height + ")" :
					"scale(" + width + ", " + verticalScaleY + ")",
				fontSize: this.cellSize + "px"
			};
		}
	},
	methods: {
		setDirection() {
			if (this.node.size.width === 1) {
				this.isHorizontal = false;
			}
		}
	}
}
</script>
<style scoped>
.node {
	position: absolute;
    transition: transform 0.8s;
}
.node.left {
    transform: translateX(-1200px);
}
.node.right {
    transform: translateX(1200px);
}
.node.up {
    transform: translateY(-1200px);
}
.node.down {
    transform: translateY(1200px);
}
.node span {
	display: inline-block;
	color: #000000;
	transform-origin: top left;
	letter-spacing: 3px;
	font-weight: 400;
}
</style>
