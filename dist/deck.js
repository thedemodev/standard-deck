const front = new Array(54);

for (let i = 0; i < front.length; i++) {
  front[i] = `front-${i}.png`;
}

export const standardDeck = {
  className: 'standard-card',
  width: 102,
  height: 144,
  back: 'back.png',
  front
};
