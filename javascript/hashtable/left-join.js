'use strict';

const leftJoin = (hMap1, hMap2) => {
  let arr = [];

  if (hMap1.size > 0 && hMap2.size > 0) {
    hMap1.forEach((value, key) => {
      let join = [key, value];
      hMap2.get(key)
        ? join.push(hMap2.get(key))
        : join.push(null);
      arr.push(join);
    });
    return arr;
  }
};

module.exports = leftJoin;
