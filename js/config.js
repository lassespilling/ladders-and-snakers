var skipIntro = false;
var config = {
  safeZone: 50,
  svgImages: [
    {
      url: './images/challenge.jpg',
      id: 'challenge-icon',
    },
    {
      url: './images/question.jpg',
      id: 'question-icon',
    },
    {
      url: 'https://cdn5.vectorstock.com/i/1000x1000/83/64/green-seamless-snake-skin-pattern-vector-1478364.jpg',
      id: 'snake-pattern',
      height: '40%',
      width: '40%',
    },
    {
      url: './images/snake-head.png',
      id: 'snake-head',
    },
  ],
  specialTiles: {
    5: {
      type: 'challenge',
      fill: "url('#challenge-icon')",
      color: '#fff',
      challenge: 'Drikking av pølsevann',
      success: {
        endTile: 16,
      },
      failure: {
        endTile: 6,
      },
    },
    16: {
      type: 'question',
      fill: "url('#question-icon')",
      color: '#fff',
      question: 'Hva representerer tallet 3 i bibelen?',
      answer: 'Helhet',
      success: {
        endTile: 30,
      },
      failure: {
        endTile: 17,
      },
    },
  },
  gameBoardSize: window.innerHeight * 0.7,
  tilesPerAxis: 8,
  oddTileColor: '#f4daa6',
  evenTileColor: '#FDFAED',
  textColor: '#000055',
  ladderColor: '#000',
  snakeColor: 'url("#snake-pattern")',
  snakeHeadColor: 'url("#snake-head")',
  snakeOutlineColor: '#000',
  piece: [
    '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="0.0499409in" ' +
      'height="0.0851102in" version="1.1" style="shape-rendering:geometricPrecision; ' +
      'text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"' +
      'viewBox="0 0 0 0"' +
      'xmlns:xlink="http://www.w3.org/1999/xlink">' +
      '<path fill="{color}" d="M0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0z"/>' +
      '</svg>',
  ],
  ladders: [
    {
      paths: [2, 18],
    },
    //   [4, 14],
    //   [9, 31],
    //   [28, 84],
    //   [40, 42],
    //   [51, 67],
    //   [71, 91],
    //   [80, 100],
  ],
  snakes: [
    {
      paths: ['20', '19 -5 -4', '2 -5 5', '1'],
    },
    //   ['98', '98 -2 -7', '82 9 1', '83 -3 -6', '78'],
    //   ['95', '95 -3 -7', '85 6 3', '86 -2 -3', '75'],
    //   ['93', '93 7 -1', '89 -6 2', '88 4 -6', '73'],
    //   ['87', '74 3 7', '75 5 -7', '66 -9 0', '57 3 3', '36 3 4', '24'],
    //   ['64', '58 2 2', '59 2 7', '60'],
    //   ['62', '58 5 -3', '39 5 7', '23 3 3', '19'],
    //   ['56', '56 8 3', '66 0 -7', '54', '53'],
    //   ['49', '33 3 6', '32 -2 -3', '29', '11'],
    //   ['47', '47 -4 -8', '35 2 -2', '26 9 9', '26'],
    //   ['16', '17 7 -3', '5 -4 8', '5'],
  ],
  //A B C D in clockwise order, defaults as "D"
  //eventually these will be autodectected

  textPositions: {
    16: 'A',
  },
  // textPositions: {
  //   100: 'A',
  //   93: 'C',
  //   88: 'A',
  //   87: 'C',
  //   85: 'A',
  //   84: 'A',
  //   82: 'C',
  //   75: 'B',
  //   68: 'B',
  //   67: 'A',
  //   66: 'B',
  //   65: 'A',
  //   63: 'A',
  //   62: 'A',
  //   58: 'C',
  //   57: 'C',
  //   55: 'C',
  //   48: 'A',
  //   42: 'B',
  //   41: 'C',
  //   36: 'A',
  //   35: 'A',
  //   34: 'C',
  //   29: 'C',
  //   23: 'C',
  //   22: 'A',
  //   20: 'C',
  //   17: 'A',
  //   15: 'A',
  //   16: 'B',
  //   12: 'C',
  // },
};
