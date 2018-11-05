'use strict';

module.exports = app => {
  if (app.config.sofaAntvip && app.config.sofaAntvip.enable === false) {
    return;
  }

  app.beforeStart(async () => {
    await app.sofaAntvip.ready();
  });
};
