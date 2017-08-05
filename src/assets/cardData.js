const DIRECTION = {
	UP: "up",
	DOWN: "down",
	LEFT: "left",
	RIGHT: "right"
};

const cardData = [
	[
		{
			id: "1",
			value: "재우",
			coord: {x: 0, y: 0},
			size: {width: 3, height: 4},
			animation: {in: DIRECTION.UP, out: DIRECTION.LEFT}
		},
		{
			id: "2",
			value: "장가갑니다",
			coord: {x: 3, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	],
	[
		{
			id: "3",
			value: "지민이",
			coord: {x: 0, y: 0},
			size: {width: 4, height: 3},
			animation: {in: DIRECTION.LEFT, out: DIRECTION.UP}
		},
		{
			id: "4",
			value: "시집갑니다",
			coord: {x: 0, y: 3},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	]
];

export default cardData;
