/* eslint-disable no-console */
const players = [{ name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const playerSort = players.sort((a, b) => b.health - a.health);

console.info(`${playerSort[0].name} : ${playerSort[0].health} HP
${playerSort[1].name} : ${playerSort[1].health} HP
${playerSort[2].name} : ${playerSort[2].health} HP
`);
export default players;
