import Horserace from './horserace.js';

const race = new Horserace({
  versions: [
    'csjs@1.0.0',
    'csjs@1.0.6'
  ],
});

race
  .add('csjs (yolo)', csjs => csjs`.yolo { color: red; }`)
  .add('csjs (swag)', csjs => csjs`.swag { color: red; }`)
  .run();
