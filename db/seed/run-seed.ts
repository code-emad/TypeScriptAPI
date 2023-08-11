const devData = require(`../data/data-dev/index.ts`)
const db = require('../connection.ts');

import {seed} from './seed'


const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();