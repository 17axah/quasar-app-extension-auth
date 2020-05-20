function extendConf (conf, api) {
  if (!conf.framework.plugins.includes('Cookies')) {
    conf.framework.plugins.push('Cookies');
  }

  conf.boot.push(`~quasar-app-extension-auth/src/boot/auth`);

  conf.build.transpileDependencies.push(/quasar-app-extension-auth[\\/]src/);
  conf.build.transpileDependencies.push(/vue-simple-auth/);
  conf.build.transpileDependencies.push(/vue-router-auth/);
}

module.exports = function (api) {
  api.compatibleWith('quasar', '^1.9.10');
  api.compatibleWith('@quasar/app', '^1.6.0');

  api.extendQuasarConf(extendConf);
}
