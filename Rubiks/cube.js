/*
** Cube.js
*/

Cube = {};

(function (Cube) {

    let colors = ['green', 'yellow', 'white', 'red', 'blue', 'orange'];

    function makeDivs(color, x, y) {
        let divs = [];
        for (xx = 1; xx < 4; xx++) {
            for (yy = 1; yy < 4; yy ++) {
                let div = document.createElement('div');
                div.className = 'square' + ' ' + color + ' ' + 'x' + (x - - xx) + ' ' + 'y' + (y - - yy);
                divs.push(div);
            }
        }
        return divs;
    }

    let cube = document.getElementById('cube');
    let yellows = makeDivs('yellow', 3, 0);
    let blues = makeDivs('blue', 0, 3);
    let reds = makeDivs('red', 3, 3);
    let greens = makeDivs('green', 6, 3);
    let oranges = makeDivs('orange', 9, 3);
    let whites = makeDivs('white', 3, 6);
    let divs = [];
    divs.push(...yellows);
    divs.push(...blues);
    divs.push(...reds);
    divs.push(...greens);
    divs.push(...whites);
    divs.push(...oranges);
    for (i in divs) {
        if (divs.hasOwnProperty(i)) {
            cube.appendChild(divs[i]);
        }
    }

    function moveFromTo(square, x, y, toX, toY) {
        square.classList.remove('x'+x)
        square.classList.add('x'+toX);
        square.classList.remove('y'+y)
        square.classList.add('y'+toY);
    }

    Cube.U = function U() {
        let B1 = document.getElementsByClassName('x1 y4')[0];
        let B2 = document.getElementsByClassName('x2 y4')[0];
        let B3 = document.getElementsByClassName('x3 y4')[0];
        
        let R1 = document.getElementsByClassName('x4 y4')[0];
        let R2 = document.getElementsByClassName('x5 y4')[0];
        let R3 = document.getElementsByClassName('x6 y4')[0];
        
        let G1 = document.getElementsByClassName('x7 y4')[0];
        let G2 = document.getElementsByClassName('x8 y4')[0];
        let G3 = document.getElementsByClassName('x9 y4')[0];
        
        let O1 = document.getElementsByClassName('x10 y4')[0];
        let O2 = document.getElementsByClassName('x11 y4')[0];
        let O3 = document.getElementsByClassName('x12 y4')[0];
        
        let Y1 = document.getElementsByClassName('x4 y1')[0];
        let Y2 = document.getElementsByClassName('x4 y2')[0];
        let Y3 = document.getElementsByClassName('x4 y3')[0];
        
        let Y4 = document.getElementsByClassName('x5 y1')[0];
        let Y5 = document.getElementsByClassName('x5 y3')[0];

        let Y6 = document.getElementsByClassName('x6 y1')[0];
        let Y7 = document.getElementsByClassName('x6 y2')[0];
        let Y8 = document.getElementsByClassName('x6 y3')[0];
        
        moveFromTo(B1, 1, 4, 10, 4);
        moveFromTo(B2, 2, 4, 11, 4);
        moveFromTo(B3, 3, 4, 12, 4);

        moveFromTo(R1, 4, 4, 1, 4);
        moveFromTo(R2, 5, 4, 2, 4);
        moveFromTo(R3, 6, 4, 3, 4);

        moveFromTo(G1, 7, 4, 4, 4);
        moveFromTo(G2, 8, 4, 5, 4);
        moveFromTo(G3, 9, 4, 6, 4);

        moveFromTo(O1, 10, 4, 7, 4);
        moveFromTo(O2, 11, 4, 8, 4);
        moveFromTo(O3, 12, 4, 9, 4);

        moveFromTo(Y1, 4, 1, 6, 1);
        moveFromTo(Y2, 4, 2, 5, 1);
        moveFromTo(Y3, 4, 3, 4, 1);
        moveFromTo(Y4, 5, 1, 6, 2);
        moveFromTo(Y5, 5, 3, 4, 2);
        moveFromTo(Y6, 6, 1, 6, 3);
        moveFromTo(Y7, 6, 2, 5, 3);
        moveFromTo(Y8, 6, 3, 4, 3);
    }

    Cube.U2 = function U2() {
        Cube.U();
        Cube.U();
    }

    Cube.Uprime = function Uprime() {
        Cube.U();
        Cube.U();
        Cube.U();
    }

    Cube.R = function R() {
        let Y1 = document.getElementsByClassName('x6 y1')[0];
        let Y2 = document.getElementsByClassName('x6 y2')[0];
        let Y3 = document.getElementsByClassName('x6 y3')[0];
        
        let R1 = document.getElementsByClassName('x6 y4')[0];
        let R2 = document.getElementsByClassName('x6 y5')[0];
        let R3 = document.getElementsByClassName('x6 y6')[0];
        
        let W1 = document.getElementsByClassName('x6 y7')[0];
        let W2 = document.getElementsByClassName('x6 y8')[0];
        let W3 = document.getElementsByClassName('x6 y9')[0];
        
        let O1 = document.getElementsByClassName('x10 y4')[0];
        let O2 = document.getElementsByClassName('x10 y5')[0];
        let O3 = document.getElementsByClassName('x10 y6')[0];
        
        let G1 = document.getElementsByClassName('x7 y4')[0];
        let G2 = document.getElementsByClassName('x7 y5')[0];
        let G3 = document.getElementsByClassName('x7 y6')[0];
        
        let G4 = document.getElementsByClassName('x8 y4')[0];
        let G5 = document.getElementsByClassName('x8 y6')[0];

        let G6 = document.getElementsByClassName('x9 y4')[0];
        let G7 = document.getElementsByClassName('x9 y5')[0];
        let G8 = document.getElementsByClassName('x9 y6')[0];
        
        moveFromTo(Y1, 6, 1, 10, 6);
        moveFromTo(Y2, 6, 2, 10, 5);
        moveFromTo(Y3, 6, 3, 10, 4);

        moveFromTo(R1, 6, 4, 6, 1);
        moveFromTo(R2, 6, 5, 6, 2);
        moveFromTo(R3, 6, 6, 6, 3);

        moveFromTo(W1, 6, 7, 6, 4);
        moveFromTo(W2, 6, 8, 6, 5);
        moveFromTo(W3, 6, 9, 6, 6);

        moveFromTo(O1, 10, 4, 6, 9);
        moveFromTo(O2, 10, 5, 6, 8);
        moveFromTo(O3, 10, 6, 6, 7);

        moveFromTo(G1, 7, 4, 9, 4);
        moveFromTo(G2, 7, 5, 8, 4);
        moveFromTo(G3, 7, 6, 7, 4);
        moveFromTo(G4, 8, 4, 9, 5);
        moveFromTo(G5, 8, 6, 7, 5);
        moveFromTo(G6, 9, 4, 9, 6);
        moveFromTo(G7, 9, 5, 8, 6);
        moveFromTo(G8, 9, 6, 7, 6);
    }

    Cube.R2 = function R2() {
        Cube.R();
        Cube.R();
    }

    Cube.Rprime = function Rprime() {
        Cube.R();
        Cube.R();
        Cube.R();
    }

    Cube.L = function L() {
        let Y1 = document.getElementsByClassName('x4 y1')[0];
        let Y2 = document.getElementsByClassName('x4 y2')[0];
        let Y3 = document.getElementsByClassName('x4 y3')[0];
        
        let R1 = document.getElementsByClassName('x4 y4')[0];
        let R2 = document.getElementsByClassName('x4 y5')[0];
        let R3 = document.getElementsByClassName('x4 y6')[0];
        
        let W1 = document.getElementsByClassName('x4 y7')[0];
        let W2 = document.getElementsByClassName('x4 y8')[0];
        let W3 = document.getElementsByClassName('x4 y9')[0];
        
        let O1 = document.getElementsByClassName('x12 y4')[0];
        let O2 = document.getElementsByClassName('x12 y5')[0];
        let O3 = document.getElementsByClassName('x12 y6')[0];
        
        let B1 = document.getElementsByClassName('x1 y4')[0];
        let B2 = document.getElementsByClassName('x1 y5')[0];
        let B3 = document.getElementsByClassName('x1 y6')[0];
        
        let B4 = document.getElementsByClassName('x2 y4')[0];
        let B5 = document.getElementsByClassName('x2 y6')[0];

        let B6 = document.getElementsByClassName('x3 y4')[0];
        let B7 = document.getElementsByClassName('x3 y5')[0];
        let B8 = document.getElementsByClassName('x3 y6')[0];
        
        moveFromTo(Y1, 4, 1, 4, 4);
        moveFromTo(Y2, 4, 2, 4, 5);
        moveFromTo(Y3, 4, 3, 4, 6);

        moveFromTo(R1, 4, 4, 4, 7);
        moveFromTo(R2, 4, 5, 4, 8);
        moveFromTo(R3, 4, 6, 4, 9);

        moveFromTo(W1, 4, 7, 12, 6);
        moveFromTo(W2, 4, 8, 12, 5);
        moveFromTo(W3, 4, 9, 12, 4);

        moveFromTo(O1, 12, 4, 4, 3);
        moveFromTo(O2, 12, 5, 4, 2);
        moveFromTo(O3, 12, 6, 4, 1);

        moveFromTo(B1, 1, 4, 3, 4);
        moveFromTo(B2, 1, 5, 2, 4);
        moveFromTo(B3, 1, 6, 1, 4);
        moveFromTo(B4, 2, 4, 3, 5);
        moveFromTo(B5, 2, 6, 1, 5);
        moveFromTo(B6, 3, 4, 3, 6);
        moveFromTo(B7, 3, 5, 2, 6);
        moveFromTo(B8, 3, 6, 1, 6);
    }

    Cube.L2 = function L2() {
        Cube.L();
        Cube.L();
    }

    Cube.Lprime = function Lprime() {
        Cube.L();
        Cube.L();
        Cube.L();
    }

})(Cube);