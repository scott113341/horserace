'use strict';

var _templateObject = _taggedTemplateLiteral(['\n      .yolo { color: red; }\n      .swag { color: green; }\n    '], ['\n      .yolo { color: red; }\n      .swag { color: green; }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    .yolo { width: 1000px; }\n    .swag { width: 1000px; }\n  '], ['\n    .yolo { width: 1000px; }\n    .swag { width: 1000px; }\n  ']);

var _horserace = require('horserace');

var _horserace2 = _interopRequireDefault(_horserace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var race = new _horserace2.default({

  // required
  // passed directly to `npm install ${version}`
  versions: ['csjs@1.0.0', 'csjs@1.0.6'],

  // optional
  // simple testing on the return value
  test: function test(result) {
    if (result !== 'asdf') throw Error('asdf');
  },

  actuallyRace: true

});

race.add('csjs (with colors)', function (csjs) {
  return csjs(_templateObject);
}).add('csjs (with widths)', function (csjs) {
  return csjs(_templateObject2);
});