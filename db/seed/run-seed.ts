const devData = require(`../data/data-dev/index.ts`)
const seed = require('./seed.ts')

const runSeed = () => {
    return seed(devData).then(() => db.end());
  };
  
  runSeed();