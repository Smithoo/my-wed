const DIRECTION = {
	UP: "up",
	DOWN: "down",
	LEFT: "left",
	RIGHT: "right"
};

const cardData = [
	[
		{
			value: "재우",
			coord: {x: 0, y: 0},
			size: {width: 3, height: 4},
			animation: {in: DIRECTION.LEFT, out: DIRECTION.UP}
		},
		{
			value: "장가갑니다",
			coord: {x: 3, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	],
	[
		{
			value: "지민이",
			coord: {x: 0, y: 0},
			size: {width: 4, height: 3},
			animation: {in: DIRECTION.LEFT, out: DIRECTION.UP}
		},
		{
			value: "시집갑니다",
			coord: {x: 0, y: 3},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	],
	[
		{
			value: "9월9일에",
			coord: {x: 0, y: 0},
			size: {width: 4, height: 2},
			animation: {in: DIRECTION.UP, out: DIRECTION.LEFT}
		},
		{
			value: "만나요 :)",
			coord: {x: 0, y: 2},
			size: {width: 5, height: 2},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	]
];

export default cardData;
