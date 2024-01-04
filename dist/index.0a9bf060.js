var skipIntro = false;
var config = {
    safeZone: 50,
    svgImages: [
        {
            url: "./images/challenge.jpg",
            id: "challenge-icon"
        },
        {
            url: "./images/question.jpg",
            id: "question-icon"
        },
        {
            url: "https://cdn5.vectorstock.com/i/1000x1000/83/64/green-seamless-snake-skin-pattern-vector-1478364.jpg",
            id: "snake-pattern",
            height: "40%",
            width: "40%"
        },
        {
            url: "./images/snake-head.png",
            id: "snake-head"
        }
    ],
    specialTiles: {
        5: {
            type: "challenge",
            fill: "url('#challenge-icon')",
            color: "#fff",
            challenge: "Drikking av p\xf8lsevann",
            success: {
                endTile: 16
            },
            failure: {
                endTile: 6
            }
        },
        29: {
            type: "question",
            fill: "url('#question-icon')",
            color: "#fff",
            question: "Nevn de 12 disiplene",
            answer: "Simon Peter, Andreas, Jakob, Johannes, Filip, Bartolomeus, Matteus, Tomas, Jakob, Taddeus, Simon seloten, Judas Iskariot",
            success: {
                endTile: 41
            },
            failure: {
                endTile: 31
            }
        },
        16: {
            type: "question",
            fill: "url('#question-icon')",
            color: "#fff",
            question: "Hva representerer tallet 3 i bibelen?",
            answer: "Helhet",
            success: {
                endTile: 30
            },
            failure: {
                endTile: 17
            }
        }
    },
    gameBoardSize: window.innerWidth < 1200 ? window.innerHeight * 0.6 : window.innerWidth * 0.4,
    tilesPerAxis: 8,
    oddTileColor: "#f4daa6",
    evenTileColor: "#FDFAED",
    textColor: "#000055",
    ladderColor: "#000",
    snakeColor: 'url("#snake-pattern")',
    snakeHeadColor: 'url("#snake-head")',
    snakeOutlineColor: "#000",
    piece: [
        '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="0.0499409in" height="0.0851102in" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 0 0"xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="{color}" d="M0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0z"/></svg>'
    ],
    ladders: [
        {
            paths: [
                2,
                18
            ]
        },
        {
            paths: [
                4,
                14
            ]
        },
        {
            paths: [
                10,
                26
            ]
        },
        {
            paths: [
                30,
                46
            ]
        },
        {
            paths: [
                38,
                43
            ]
        },
        {
            paths: [
                41,
                59
            ]
        },
        {
            paths: [
                21,
                52
            ]
        },
        {
            paths: [
                27,
                37
            ]
        },
        {
            paths: [
                34,
                49
            ]
        }
    ],
    snakes: [
        {
            paths: [
                "20",
                "19 -5 -4",
                "2 -5 5",
                "1"
            ]
        },
        {
            paths: [
                "60",
                "54 -5 -5",
                "42"
            ]
        },
        {
            paths: [
                "50",
                "47 -5 -5",
                "33 -5 -5",
                "17"
            ]
        },
        {
            paths: [
                "63",
                "62 -5 -5",
                "51"
            ]
        },
        {
            paths: [
                "40",
                "25 -5 2",
                "24 1 -5",
                "10 1 -5",
                "7 1 0",
                "8"
            ]
        },
        {
            paths: [
                "53",
                "44 -2 -3",
                "36"
            ]
        },
        {
            paths: [
                "22",
                "11 -4 5",
                "12"
            ]
        }
    ],
    //A B C D in clockwise order, defaults as "D"
    //eventually these will be autodectected
    textPositions: {
        16: "A",
        37: "A"
    }
};

//# sourceMappingURL=index.0a9bf060.js.map
