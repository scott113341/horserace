'use strict';

var _templateObject = _taggedTemplateLiteral(['.yolo { color: red; }'], ['.yolo { color: red; }']),
    _templateObject2 = _taggedTemplateLiteral(['.swag { color: red; }'], ['.swag { color: red; }']);

var _horserace = require('./horserace.js');

var _horserace2 = _interopRequireDefault(_horserace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var race = new _horserace2.default({
  versions: ['csjs@1.0.0', 'csjs@1.0.6']
});

race.add('csjs (yolo)', function (csjs) {
  return csjs(_templateObject);
}).add('csjs (swag)', function (csjs) {
  return csjs(_templateObject2);
}).run();