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

    function rotateClockwise(face, offsetX, offsetY) {
        let F1 = face[0];
        let F2 = face[1];
        let F3 = face[2];
        let F4 = face[3];
        let F5 = face[4];
        let F6 = face[5];
        let F7 = face[6];
        let F8 = face[7];

        moveFromTo(F1, 1 + offsetX, 1 + offsetY, 3 + offsetX, 1 + offsetY);
        moveFromTo(F2, 2 + offsetX, 1 + offsetY, 3 + offsetX, 2 + offsetY);
        moveFromTo(F3, 3 + offsetX, 1 + offsetY, 3 + offsetX, 3 + offsetY);

        moveFromTo(F4, 1 + offsetX, 2 + offsetY, 2 + offsetX, 1 + offsetY);
        moveFromTo(F5, 3 + offsetX, 2 + offsetY, 2 + offsetX, 3 + offsetY);
        
        moveFromTo(F6, 1 + offsetX, 3 + offsetY, 1 + offsetX, 1 + offsetY);
        moveFromTo(F7, 2 + offsetX, 3 + offsetY, 1 + offsetX, 2 + offsetY);
        moveFromTo(F8, 3 + offsetX, 3 + offsetY, 1 + offsetX, 3 + offsetY);
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
        
        let F1 = document.getElementsByClassName('x4 y1')[0];
        let F2 = document.getElementsByClassName('x5 y1')[0];
        let F3 = document.getElementsByClassName('x6 y1')[0];
        
        let F4 = document.getElementsByClassName('x4 y2')[0];
        let F5 = document.getElementsByClassName('x6 y2')[0];

        let F6 = document.getElementsByClassName('x4 y3')[0];
        let F7 = document.getElementsByClassName('x5 y3')[0];
        let F8 = document.getElementsByClassName('x6 y3')[0];
        
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

        let face = [F1, F2, F3, F4, F5, F6, F7, F8]
        rotateClockwise(face, 3, 0);
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
        
        let F1 = document.getElementsByClassName('x7 y4')[0];
        let F2 = document.getElementsByClassName('x8 y4')[0];
        let F3 = document.getElementsByClassName('x9 y4')[0];
        
        let F4 = document.getElementsByClassName('x7 y5')[0];
        let F5 = document.getElementsByClassName('x9 y5')[0];

        let F6 = document.getElementsByClassName('x7 y6')[0];
        let F7 = document.getElementsByClassName('x8 y6')[0];
        let F8 = document.getElementsByClassName('x9 y6')[0];
        
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

        let face = [F1, F2, F3, F4, F5, F6, F7, F8]
        rotateClockwise(face, 6, 3);
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
        
        let F1 = document.getElementsByClassName('x1 y4')[0];
        let F2 = document.getElementsByClassName('x2 y4')[0];
        let F3 = document.getElementsByClassName('x3 y4')[0];
        
        let F4 = document.getElementsByClassName('x1 y5')[0];
        let F5 = document.getElementsByClassName('x3 y5')[0];

        let F6 = document.getElementsByClassName('x1 y6')[0];
        let F7 = document.getElementsByClassName('x2 y6')[0];
        let F8 = document.getElementsByClassName('x3 y6')[0];
        
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

        let face = [F1, F2, F3, F4, F5, F6, F7, F8]
        rotateClockwise(face, 0, 3);
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

    Cube.F = function F() {
        let B1 = document.getElementsByClassName('x3 y4')[0];
        let B2 = document.getElementsByClassName('x3 y5')[0];
        let B3 = document.getElementsByClassName('x3 y6')[0];
        
        let Y1 = document.getElementsByClassName('x4 y3')[0];
        let Y2 = document.getElementsByClassName('x5 y3')[0];
        let Y3 = document.getElementsByClassName('x6 y3')[0];
        
        let G1 = document.getElementsByClassName('x7 y4')[0];
        let G2 = document.getElementsByClassName('x7 y5')[0];
        let G3 = document.getElementsByClassName('x7 y6')[0];
        
        let W1 = document.getElementsByClassName('x4 y7')[0];
        let W2 = document.getElementsByClassName('x5 y7')[0];
        let W3 = document.getElementsByClassName('x6 y7')[0];
        
        let F1 = document.getElementsByClassName('x4 y4')[0];
        let F2 = document.getElementsByClassName('x5 y4')[0];
        let F3 = document.getElementsByClassName('x6 y4')[0];
        
        let F4 = document.getElementsByClassName('x4 y5')[0];
        let F5 = document.getElementsByClassName('x6 y5')[0];

        let F6 = document.getElementsByClassName('x4 y6')[0];
        let F7 = document.getElementsByClassName('x5 y6')[0];
        let F8 = document.getElementsByClassName('x6 y6')[0];
        
        moveFromTo(B1, 3, 4, 6, 3);
        moveFromTo(B2, 3, 5, 5, 3);
        moveFromTo(B3, 3, 6, 4, 3);

        moveFromTo(Y1, 4, 3, 7, 4);
        moveFromTo(Y2, 5, 3, 7, 5);
        moveFromTo(Y3, 6, 3, 7, 6);

        moveFromTo(G1, 7, 4, 6, 7);
        moveFromTo(G2, 7, 5, 5, 7);
        moveFromTo(G3, 7, 6, 4, 7);

        moveFromTo(W1, 4, 7, 3, 4);
        moveFromTo(W2, 5, 7, 3, 5);
        moveFromTo(W3, 6, 7, 3, 6);

        let face = [F1, F2, F3, F4, F5, F6, F7, F8]
        rotateClockwise(face, 3, 3);
    }

    Cube.F2 = function F2() {
        Cube.F();
        Cube.F();
    }

    Cube.Fprime = function Fprime() {
        Cube.F();
        Cube.F();
        Cube.F();
    }

    Cube.D = function D() {
        let B1 = document.getElementsByClassName('x1 y6')[0];
        let B2 = document.getElementsByClassName('x2 y6')[0];
        let B3 = document.getElementsByClassName('x3 y6')[0];
        
        let R1 = document.getElementsByClassName('x4 y6')[0];
        let R2 = document.getElementsByClassName('x5 y6')[0];
        let R3 = document.getElementsByClassName('x6 y6')[0];
        
        let G1 = document.getElementsByClassName('x7 y6')[0];
        let G2 = document.getElementsByClassName('x8 y6')[0];
        let G3 = document.getElementsByClassName('x9 y6')[0];
        
        let O1 = document.getElementsByClassName('x10 y6')[0];
        let O2 = document.getElementsByClassName('x11 y6')[0];
        let O3 = document.getElementsByClassName('x12 y6')[0];
        
        let F1 = document.getElementsByClassName('x4 y7')[0];
        let F2 = document.getElementsByClassName('x5 y7')[0];
        let F3 = document.getElementsByClassName('x6 y7')[0];
        
        let F4 = document.getElementsByClassName('x4 y8')[0];
        let F5 = document.getElementsByClassName('x6 y8')[0];

        let F6 = document.getElementsByClassName('x4 y9')[0];
        let F7 = document.getElementsByClassName('x5 y9')[0];
        let F8 = document.getElementsByClassName('x6 y9')[0];
        
        moveFromTo(B1, 1, 6, 4, 6);
        moveFromTo(B2, 2, 6, 5, 6);
        moveFromTo(B3, 3, 6, 6, 6);

        moveFromTo(R1, 4, 6, 7, 6);
        moveFromTo(R2, 5, 6, 8, 6);
        moveFromTo(R3, 6, 6, 9, 6);

        moveFromTo(G1, 7, 6, 10, 6);
        moveFromTo(G2, 8, 6, 11, 6);
        moveFromTo(G3, 9, 6, 12, 6);

        moveFromTo(O1, 10, 6, 1, 6);
        moveFromTo(O2, 11, 6, 2, 6);
        moveFromTo(O3, 12, 6, 3, 6);

        let face = [F1, F2, F3, F4, F5, F6, F7, F8]
        rotateClockwise(face, 3, 6);
    }

    Cube.D2 = function D2() {
        Cube.D();
        Cube.D();
    }

    Cube.Dprime = function Dprime() {
        Cube.D();
        Cube.D();
        Cube.D();
    }

    Cube.B = function B() {
        let G1 = document.getElementsByClassName('x9 y4')[0];
        let G2 = document.getElementsByClassName('x9 y5')[0];
        let G3 = document.getElementsByClassName('x9 y6')[0];
        
        let Y1 = document.getElementsByClassName('x4 y1')[0];
        let Y2 = document.getElementsByClassName('x5 y1')[0];
        let Y3 = document.getElementsByClassName('x6 y1')[0];
        
        let B1 = document.getElementsByClassName('x1 y4')[0];
        let B2 = document.getElementsByClassName('x1 y5')[0];
        let B3 = document.getElementsByClassName('x1 y6')[0];
        
        let W1 = document.getElementsByClassName('x4 y9')[0];
        let W2 = document.getElementsByClassName('x5 y9')[0];
        let W3 = document.getElementsByClassName('x6 y9')[0];
        
        let F1 = document.getElementsByClassName('x10 y4')[0];
        let F2 = document.getElementsByClassName('x11 y4')[0];
        let F3 = document.getElementsByClassName('x12 y4')[0];
        
        let F4 = document.getElementsByClassName('x10 y5')[0];
        let F5 = document.getElementsByClassName('x12 y5')[0];

        let F6 = document.getElementsByClassName('x10 y6')[0];
        let F7 = document.getElementsByClassName('x11 y6')[0];
        let F8 = document.getElementsByClassName('x12 y6')[0];
        
        moveFromTo(G1, 9, 4, 4, 1);
        moveFromTo(G2, 9, 5, 5, 1);
        moveFromTo(G3, 9, 6, 6, 1);

        moveFromTo(Y1, 4, 1, 1, 6);
        moveFromTo(Y2, 5, 1, 1, 5);
        moveFromTo(Y3, 6, 1, 1, 4);

        moveFromTo(B1, 1, 4, 4, 9);
        moveFromTo(B2, 1, 5, 5, 9);
        moveFromTo(B3, 1, 6, 6, 9);

        moveFromTo(W1, 4, 9, 9, 6);
        moveFromTo(W2, 5, 9, 9, 5);
        moveFromTo(W3, 6, 9, 9, 4);

        let face = [F1, F2, F3, F4, F5, F6, F7, F8];
        rotateClockwise(face, 9, 3);
    }

    Cube.B2 = function B2() {
        Cube.B();
        Cube.B();
    }

    Cube.Bprime = function Bprime() {
        Cube.B();
        Cube.B();
        Cube.B();
    }

    function rand(from, to) {
        return Math.floor((Math.random() * to) + from);
    }

    Cube.useRandomMovement = function useRandomMovement() {
        let movements = [ Cube.U,Cube.U2,Cube.Uprime,
                          Cube.D,Cube.D2,Cube.Dprime,
                          Cube.R,Cube.R2,Cube.Rprime,
                          Cube.L,Cube.L2,Cube.Lprime,
                          Cube.F,Cube.F2,Cube.Fprime,
                          Cube.B,Cube.B2,Cube.Bprime ];
        let num = movements.length;

        return movements[rand(0, num)]();
    }

    Cube.shuffle = function shuffle() {
        let shuffleCount = 30;
        
        for (i = 0; i < shuffleCount; i++) {
            setTimeout(Cube.useRandomMovement, 250 * i);
        }
    }

})(Cube);