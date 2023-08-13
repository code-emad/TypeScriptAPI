const devData = require(`../data/data-dev/index.ts`);
import { db } from "../connection.cjs";
import { seed } from "./seed.cjs";

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
