import Horserace from 'horserace';

const race = new Horserace({

  // required
  // passed directly to `npm install ${version}`
  versions: [
    'csjs@1.0.0',
    'csjs@1.0.6'
  ],

  // optional
  // simple testing on the return value
  test: result => {
    if (result !== 'asdf') throw Error('asdf');
  },

  actuallyRace: true

});

race
  .add('csjs (with colors)', csjs => {
    return csjs`
      .yolo { color: red; }
      .swag { color: green; }
    `;
  })
  .add('csjs (with widths)', csjs => {
    return csjs`
    .yolo { width: 1000px; }
    .swag { width: 1000px; }
  `;
  });
