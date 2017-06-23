/*
* @Author: asamoon
* @Date:   2017-06-20 11:25:01
* @Last Modified by:   asamoon
* @Last Modified time: 2017-06-20 12:25:57
*/

module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "version": {
      "type": "string",
      "required": false,
      "message": "Project version",
      "default": "1.0.0"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "scss": {
      "type": "confirm",
      "message": "Install scss?"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Install vuex?"
    }
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn install\n  npm run dev\n\nDocumentation can be found at https://github.com/asamoon/embedded-tpl"
};
