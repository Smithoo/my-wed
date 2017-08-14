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
			value: "느리더라도",
			coord: {x: 0, y: 0},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.UP, out: DIRECTION.LEFT}
		},
		{
			value: "바른길을",
			coord: {x: 0, y: 1},
			size: {width: 4, height: 2},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		},
		{
			value: "가겠습니다",
			coord: {x: 0, y: 3},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	],
	[
		{
			value: "멀리",
			coord: {x: 0, y: 0},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.UP, out: DIRECTION.LEFT}
		},
		{
			value: "가기위해",
			coord: {x: 0, y: 1},
			size: {width: 1, height: 2},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		},
		{
			value: "함께",
			coord: {x: 1, y: 1},
			size: {width: 3, height: 2},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		},
		{
			value: "가겠습니다",
			coord: {x: 0, y: 3},
			size: {width: 4, height: 1},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	],
	[
		{
			value: "행복하게",
			coord: {x: 0, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.UP, out: DIRECTION.LEFT}
		},
		{
			value: "가기위해",
			coord: {x: 1, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		},
		{
			value: "이사람과",
			coord: {x: 2, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		},
		{
			value: "가려합니다",
			coord: {x: 3, y: 0},
			size: {width: 1, height: 4},
			animation: {in: DIRECTION.RIGHT, out: DIRECTION.DOWN}
		}
	]
];

export default cardData;
