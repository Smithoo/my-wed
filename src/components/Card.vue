<template>
	<div id="card" :style="cardStyle">
		<div class="contents-wrap">
			<div class="card_wrap" :style="wrapStyle">
				<div class="card_box floating">
					<node v-for="node in nodes" :key="node.id" :node="node" :cellSize="cellSize"></node>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import cardData from "./../assets/cardData";
import Node from "./Node";
const cardLength = cardData.length;
export default {
	name: "card",
	components: {Node},
	data() {
		return {
			cellSize: 40,
			currentPage: 0,
			nodes: []
		};
	},
	mounted() {
		this.nodes = cardData[this.currentPage];
		setInterval(() => {
			this.currentPage = (this.currentPage + 1) % cardLength;
			this.nodes = cardData[this.currentPage];
		}, 5000);
	},
	computed: {
		cardStyle: function() {
			return {
				height: this.cellSize * 5 + "px"
			};
		},
		wrapStyle: function() {
			const length = this.cellSize * 4;
			const margin = (-2) * this.cellSize;
			return {
				width: length + "px",
				height: length + "px",
				margin: margin + "px 0 0 " + margin + "px"
			};
		}
	}
}
</script>
<style scoped>
#card {
	overflow: hidden;
	font-family: 'Jeju Gothic', sans-serif;
	position: relative;
	width: 100%;
	text-align: left;
}
.card_wrap {
	position: absolute;
	top: 50%;
    left: 50%;
	box-sizing: border-box;
}
.card_box {
	position: absolute;
	top: 0;
	left: 0;
	box-sizing: border-box;
}
@keyframes floating {
    from { margin-top: 0px; }
    to { margin-top: 12px; }
}
.card_box.floating {
    animation-name: floating;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
}
</style>
