import Benchmark from 'benchmark';
import niv from 'npm-install-version';

export default class Horserace {

  constructor (args) {
    Object.assign(this, args);
    this._heats = [];
  }

  add (name, fn) {
    const heat = new Benchmark.Suite();
    heat
      .on('cycle', e => console.log(e.target.toString()))
      .on('error', e => console.log(e))
      .on('complete', () => {
        const fastest = heat.filter('fastest').map('name');
        console.log(`Fastest ${fastest.length === 1 ? 'is' : 'are'} ${fastest.join(', ')}`);
      });

    this.versions.forEach(version => {
      const lib = niv.require(version);
      heat.add(version, () => fn(lib));
    });

    heat.name = name;
    this._heats.push(heat);
    return this;
  }

  run () {
    Horserace.install(this.versions);

    this._heats.forEach(heat => {
      console.log(`\nRunning heat ${heat.name}`);
      heat.run();
    });

    console.log('');
    this.versions.forEach(version => {
      const fastest = this._heats.filter(heat => heat.filter('fastest').map('name').includes(version));
      const fastestCount = fastest.length;
      console.log(`${version} was fastest for ${fastestCount} heat${fastestCount === 1 ? '' : 's'}`);
      fastest.forEach(heat => console.log(` - ${heat.name}`));
    });
  }

  static install (versions) {
    versions.map(version => niv.install(version, { quiet: true }));
  }

}
