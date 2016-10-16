'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _benchmark = require('benchmark');

var _benchmark2 = _interopRequireDefault(_benchmark);

var _npmInstallVersion = require('npm-install-version');

var _npmInstallVersion2 = _interopRequireDefault(_npmInstallVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Horserace = function () {
  function Horserace(args) {
    _classCallCheck(this, Horserace);

    Object.assign(this, args);
    this._heats = [];
  }

  _createClass(Horserace, [{
    key: 'add',
    value: function add(name, fn) {
      var heat = new _benchmark2.default.Suite();
      heat.on('cycle', function (e) {
        return console.log(e.target.toString());
      }).on('error', function (e) {
        return console.log(e);
      }).on('complete', function () {
        var fastest = heat.filter('fastest').map('name');
        console.log('Fastest ' + (fastest.length === 1 ? 'is' : 'are') + ' ' + fastest.join(', '));
      });

      this.versions.forEach(function (version) {
        var lib = _npmInstallVersion2.default.require(version);
        heat.add(version, function () {
          return fn(lib);
        });
      });

      heat.name = name;
      this._heats.push(heat);
      return this;
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this;

      Horserace.install(this.versions);

      this._heats.forEach(function (heat) {
        console.log('\nRunning heat ' + heat.name);
        heat.run();
      });

      console.log('');
      this.versions.forEach(function (version) {
        var fastest = _this._heats.filter(function (heat) {
          return heat.filter('fastest').map('name').includes(version);
        });
        var fastestCount = fastest.length;
        console.log(version + ' was fastest for ' + fastestCount + ' heat' + (fastestCount === 1 ? '' : 's'));
        fastest.forEach(function (heat) {
          return console.log(' - ' + heat.name);
        });
      });
    }
  }], [{
    key: 'install',
    value: function install(versions) {
      versions.map(function (version) {
        return _npmInstallVersion2.default.install(version, { quiet: true });
      });
    }
  }]);

  return Horserace;
}();

exports.default = Horserace;