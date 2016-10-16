import test from 'tape';

import Horserace from '../horserace.js';

test('constructor', t => {
  const race = newHorserace();
  t.equal(typeof race, 'object');
  t.deepEqual(race._heats, []);
  t.equal(typeof race.add, 'function');
  t.end();
});

test('add', t => {
  const race = newHorserace();
  const fn = () => 'yolo';
  const add = race.add('yolo', fn);
  t.equal(add, race);
  t.equal(race._heats.length, 1);
  t.equal(race._heats[0].name, 'yolo');
  t.end();
});

test('install', t => {
  t.deepEqual(Horserace.install(['csjs@1.0.0']), undefined);
  t.end();
});

test('run', t => {
  const race = newHorserace();
  race
    .add('csjs (yolo)', csjs => csjs`.yolo { color: red; }`)
    .add('csjs (swag)', csjs => csjs`.swag { color: red; }`)
    .run();
  t.end();
});

function newHorserace () {
  return new Horserace({ versions: ['csjs@1.0.0', 'csjs@1.0.6'] });
}
