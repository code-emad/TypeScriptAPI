const devData = require(`../data/data-dev/index.ts`)
const db = require('../connection.ts');

const {seed} = require('./seed.ts');

console.log(seed)
const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();