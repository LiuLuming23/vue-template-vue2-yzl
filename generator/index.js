module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.6.5",
      "vue": "^2.6.11",
      "axios": "^0.26.1",
      "vue-router": "^3.5.4"
    }, 
    devDependencies: {
        "@vue/cli-plugin-babel": "~4.5.15",
        "@vue/cli-plugin-eslint": "~4.5.15",
        "@vue/cli-service": "~4.5.15",
        "@vue/eslint-config-prettier": "^6.0.0",
        "babel-eslint": "^10.1.0",
        "eslint": "^6.7.2",
        "eslint-plugin-prettier": "^3.3.1",
        "eslint-plugin-vue": "^6.2.2",
        "prettier": "^2.2.1",
        "vue-template-compiler": "^2.6.11"
    },
    "eslintConfig": {
      "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
      ],
      "parserOptions": {
      "parser": "babel-eslint"
     }
    }
  });
  api.render('../template');
};