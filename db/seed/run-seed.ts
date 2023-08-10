const devData = require(`../data/data-dev/index.ts`)
import {seed} from './seed.ts'


const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();