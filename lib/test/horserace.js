'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['.yolo { color: red; }'], ['.yolo { color: red; }']),
    _templateObject2 = _taggedTemplateLiteral(['.swag { color: red; }'], ['.swag { color: red; }']);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _horserace = require('../horserace.js');

var _horserace2 = _interopRequireDefault(_horserace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _tape2.default)('constructor', function (t) {
  var race = newHorserace();
  t.equal(typeof race === 'undefined' ? 'undefined' : _typeof(race), 'object');
  t.deepEqual(race._heats, []);
  t.equal(_typeof(race.add), 'function');
  t.end();
});

(0, _tape2.default)('add', function (t) {
  var race = newHorserace();
  var fn = function fn() {
    return 'yolo';
  };
  var add = race.add('yolo', fn);
  t.equal(add, race);
  t.equal(race._heats.length, 1);
  t.equal(race._heats[0].name, 'yolo');
  t.end();
});

(0, _tape2.default)('install', function (t) {
  t.deepEqual(_horserace2.default.install(['csjs@1.0.0']), undefined);
  t.end();
});

(0, _tape2.default)('run', function (t) {
  var race = newHorserace();
  race.add('csjs (yolo)', function (csjs) {
    return csjs(_templateObject);
  }).add('csjs (swag)', function (csjs) {
    return csjs(_templateObject2);
  }).run();
  t.end();
});

function newHorserace() {
  return new _horserace2.default({ versions: ['csjs@1.0.0', 'csjs@1.0.6'] });
}