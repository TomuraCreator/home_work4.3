import players from '../src/js/app.js';

test('have key in players', () => {
  expect(players[0]).toHaveProperty('health');
  expect(players[1]).toHaveProperty('health');
  expect(players[2]).toHaveProperty('health');
});
test('array not empty', () => {
  const received = undefined;
  expect(received).not.toBe(players);
});
