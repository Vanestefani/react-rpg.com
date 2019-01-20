const tiles = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 4, 0, 0, 0, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 20, 0, 0, 0, 0, 0, 20, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 7],
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 20, 0, 0, 0, 0, 0, 20, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 0, 0, 4, 0, 7, 7, 7, 7, 7],
  [7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 20, 0, 20, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 20, 0, 7, 7, 7, 4, 0, 0, 7, 7],
  [7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 20, 0, 7, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
];

const monsters = [
  {
    type: 'dragon',
    position: [ 12, 4 ]
  },
  {
    type: 'dragon',
    position: [ 13, 2 ]
  }
];

const stairs = {
  down: '2_2',
  up: '2_4'
}

const message = {
  title: 'Gold lining and burnt hallways',
  body: 'Here is a sweet body...'
}

export default {
  tiles,
  monsters,
  stairs,
  message
};
