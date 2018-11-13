'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    await app.sofaAntvip.ready();
  });
};
