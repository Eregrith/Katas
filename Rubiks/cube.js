/*
** Cube.js
*/

Cube = {};

(function (Cube) {

    Object.prototype.show = function show() {
        this.style.display = '';
    }

    Object.prototype.hide = function hide() {
        this.style.display = 'none';
    }

    Object.prototype.clearChildren = function clearChildren() {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    }

    Cube.make = function makeCube() {
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

        [...document.getElementsByClassName('square')].forEach(e => cube.removeChild(e));
        
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
    }

    Cube.make();

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

    function squareAt(xy) {
        return document.getElementsByClassName('square '+xy)[0];
    }

    Cube.applyMove = function applyMove(event, move, movePrime) {
        let shift = document.getElementById('shift');
        if (event.shiftKey || shift.checked) {
            movePrime();
        } else {
            move();
        }
    }

    Cube.U = function U() {
        let B1 = squareAt('x1 y4');
        let B2 = squareAt('x2 y4');
        let B3 = squareAt('x3 y4');
        
        let R1 = squareAt('x4 y4');
        let R2 = squareAt('x5 y4');
        let R3 = squareAt('x6 y4');
        
        let G1 = squareAt('x7 y4');
        let G2 = squareAt('x8 y4');
        let G3 = squareAt('x9 y4');
        
        let O1 = squareAt('x10 y4');
        let O2 = squareAt('x11 y4');
        let O3 = squareAt('x12 y4');
        
        let F1 = squareAt('x4 y1');
        let F2 = squareAt('x5 y1');
        let F3 = squareAt('x6 y1');
        
        let F4 = squareAt('x4 y2');
        let F5 = squareAt('x6 y2');

        let F6 = squareAt('x4 y3');
        let F7 = squareAt('x5 y3');
        let F8 = squareAt('x6 y3');
        
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
        let Y1 = squareAt('x6 y1');
        let Y2 = squareAt('x6 y2');
        let Y3 = squareAt('x6 y3');
        
        let R1 = squareAt('x6 y4');
        let R2 = squareAt('x6 y5');
        let R3 = squareAt('x6 y6');
        
        let W1 = squareAt('x6 y7');
        let W2 = squareAt('x6 y8');
        let W3 = squareAt('x6 y9');
        
        let O1 = squareAt('x10 y4');
        let O2 = squareAt('x10 y5');
        let O3 = squareAt('x10 y6');
        
        let F1 = squareAt('x7 y4');
        let F2 = squareAt('x8 y4');
        let F3 = squareAt('x9 y4');
        
        let F4 = squareAt('x7 y5');
        let F5 = squareAt('x9 y5');

        let F6 = squareAt('x7 y6');
        let F7 = squareAt('x8 y6');
        let F8 = squareAt('x9 y6');
        
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
        let Y1 = squareAt('x4 y1');
        let Y2 = squareAt('x4 y2');
        let Y3 = squareAt('x4 y3');
        
        let R1 = squareAt('x4 y4');
        let R2 = squareAt('x4 y5');
        let R3 = squareAt('x4 y6');
        
        let W1 = squareAt('x4 y7');
        let W2 = squareAt('x4 y8');
        let W3 = squareAt('x4 y9');
        
        let O1 = squareAt('x12 y4');
        let O2 = squareAt('x12 y5');
        let O3 = squareAt('x12 y6');
        
        let F1 = squareAt('x1 y4');
        let F2 = squareAt('x2 y4');
        let F3 = squareAt('x3 y4');
        
        let F4 = squareAt('x1 y5');
        let F5 = squareAt('x3 y5');

        let F6 = squareAt('x1 y6');
        let F7 = squareAt('x2 y6');
        let F8 = squareAt('x3 y6');
        
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
        let B1 = squareAt('x3 y4');
        let B2 = squareAt('x3 y5');
        let B3 = squareAt('x3 y6');
        
        let Y1 = squareAt('x4 y3');
        let Y2 = squareAt('x5 y3');
        let Y3 = squareAt('x6 y3');
        
        let G1 = squareAt('x7 y4');
        let G2 = squareAt('x7 y5');
        let G3 = squareAt('x7 y6');
        
        let W1 = squareAt('x4 y7');
        let W2 = squareAt('x5 y7');
        let W3 = squareAt('x6 y7');
        
        let F1 = squareAt('x4 y4');
        let F2 = squareAt('x5 y4');
        let F3 = squareAt('x6 y4');
        
        let F4 = squareAt('x4 y5');
        let F5 = squareAt('x6 y5');

        let F6 = squareAt('x4 y6');
        let F7 = squareAt('x5 y6');
        let F8 = squareAt('x6 y6');
        
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
        let B1 = squareAt('x1 y6');
        let B2 = squareAt('x2 y6');
        let B3 = squareAt('x3 y6');
        
        let R1 = squareAt('x4 y6');
        let R2 = squareAt('x5 y6');
        let R3 = squareAt('x6 y6');
        
        let G1 = squareAt('x7 y6');
        let G2 = squareAt('x8 y6');
        let G3 = squareAt('x9 y6');
        
        let O1 = squareAt('x10 y6');
        let O2 = squareAt('x11 y6');
        let O3 = squareAt('x12 y6');
        
        let F1 = squareAt('x4 y7');
        let F2 = squareAt('x5 y7');
        let F3 = squareAt('x6 y7');
        
        let F4 = squareAt('x4 y8');
        let F5 = squareAt('x6 y8');

        let F6 = squareAt('x4 y9');
        let F7 = squareAt('x5 y9');
        let F8 = squareAt('x6 y9');
        
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
        let G1 = squareAt('x9 y4');
        let G2 = squareAt('x9 y5');
        let G3 = squareAt('x9 y6');
        
        let Y1 = squareAt('x4 y1');
        let Y2 = squareAt('x5 y1');
        let Y3 = squareAt('x6 y1');
        
        let B1 = squareAt('x1 y4');
        let B2 = squareAt('x1 y5');
        let B3 = squareAt('x1 y6');
        
        let W1 = squareAt('x4 y9');
        let W2 = squareAt('x5 y9');
        let W3 = squareAt('x6 y9');
        
        let F1 = squareAt('x10 y4');
        let F2 = squareAt('x11 y4');
        let F3 = squareAt('x12 y4');
        
        let F4 = squareAt('x10 y5');
        let F5 = squareAt('x12 y5');

        let F6 = squareAt('x10 y6');
        let F7 = squareAt('x11 y6');
        let F8 = squareAt('x12 y6');
        
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

    Cube.M = function M() {
        let Y1 = squareAt('x5 y1');
        let Y2 = squareAt('x5 y2');
        let Y3 = squareAt('x5 y3');
        
        let R1 = squareAt('x5 y4');
        let R2 = squareAt('x5 y5');
        let R3 = squareAt('x5 y6');
        
        let W1 = squareAt('x5 y7');
        let W2 = squareAt('x5 y8');
        let W3 = squareAt('x5 y9');
        
        let O1 = squareAt('x11 y4');
        let O2 = squareAt('x11 y5');
        let O3 = squareAt('x11 y6');
        
        moveFromTo(Y1, 5, 1, 5, 4);
        moveFromTo(Y2, 5, 2, 5, 5);
        moveFromTo(Y3, 5, 3, 5, 6);

        moveFromTo(R1, 5, 4, 5, 7);
        moveFromTo(R2, 5, 5, 5, 8);
        moveFromTo(R3, 5, 6, 5, 9);

        moveFromTo(W1, 5, 7, 11, 6);
        moveFromTo(W2, 5, 8, 11, 5);
        moveFromTo(W3, 5, 9, 11, 4);

        moveFromTo(O1, 11, 4, 5, 3);
        moveFromTo(O2, 11, 5, 5, 2);
        moveFromTo(O3, 11, 6, 5, 1);
    }

    Cube.M2 = function M2() {
        Cube.M();
        Cube.M();
    }

    Cube.Mprime = function Mprime() {
        Cube.M();
        Cube.M();
        Cube.M();
    }

    Cube.E = function E() {
        let B1 = squareAt('x1 y5');
        let B2 = squareAt('x2 y5');
        let B3 = squareAt('x3 y5');
        
        let R1 = squareAt('x4 y5');
        let R2 = squareAt('x5 y5');
        let R3 = squareAt('x6 y5');
        
        let G1 = squareAt('x7 y5');
        let G2 = squareAt('x8 y5');
        let G3 = squareAt('x9 y5');

        let O1 = squareAt('x10 y5');
        let O2 = squareAt('x11 y5');
        let O3 = squareAt('x12 y5');
        
        moveFromTo(B1, 1, 5, 4, 5);
        moveFromTo(B2, 2, 5, 5, 5);
        moveFromTo(B3, 3, 5, 6, 5);

        moveFromTo(R1, 4, 5, 7, 5);
        moveFromTo(R2, 5, 5, 8, 5);
        moveFromTo(R3, 6, 5, 9, 5);

        moveFromTo(G1, 7, 5, 10, 5);
        moveFromTo(G2, 8, 5, 11, 5);
        moveFromTo(G3, 9, 5, 12, 5);

        moveFromTo(O1, 10, 5, 1, 5);
        moveFromTo(O2, 11, 5, 2, 5);
        moveFromTo(O3, 12, 5, 3, 5);
    }

    Cube.E2 = function E2() {
        Cube.E();
        Cube.E();
    }

    Cube.Eprime = function Eprime() {
        Cube.E();
        Cube.E();
        Cube.E();
    }

    Cube.S = function S() {
        let Y1 = squareAt('x4 y2');
        let Y2 = squareAt('x5 y2');
        let Y3 = squareAt('x6 y2');
        
        let G1 = squareAt('x8 y4');
        let G2 = squareAt('x8 y5');
        let G3 = squareAt('x8 y6');
        
        let W1 = squareAt('x4 y8');
        let W2 = squareAt('x5 y8');
        let W3 = squareAt('x6 y8');

        let B1 = squareAt('x2 y4');
        let B2 = squareAt('x2 y5');
        let B3 = squareAt('x2 y6');
        
        moveFromTo(Y1, 4, 2, 8, 4);
        moveFromTo(Y2, 5, 2, 8, 5);
        moveFromTo(Y3, 6, 2, 8, 6);

        moveFromTo(G1, 8, 4, 6, 8);
        moveFromTo(G2, 8, 5, 5, 8);
        moveFromTo(G3, 8, 6, 4, 8);

        moveFromTo(W1, 4, 8, 2, 4);
        moveFromTo(W2, 5, 8, 2, 5);
        moveFromTo(W3, 6, 8, 2, 6);

        moveFromTo(B1, 2, 4, 6, 2);
        moveFromTo(B2, 2, 5, 5, 2);
        moveFromTo(B3, 2, 6, 4, 2);
    }

    Cube.S2 = function S2() {
        Cube.S();
        Cube.S();
    }

    Cube.Sprime = function Sprime() {
        Cube.S();
        Cube.S();
        Cube.S();
    }

    Cube.x = function x() {
        Cube.Lprime();
        Cube.Mprime();
        Cube.R();
    }

    Cube.x2 = function x2() {
        Cube.x();
        Cube.x();
    }

    Cube.xprime = function xprime() {
        Cube.x();
        Cube.x();
        Cube.x();
    }

    Cube.y = function y() {
        Cube.U();
        Cube.Dprime();
        Cube.Eprime();
    }

    Cube.y2 = function y2() {
        Cube.y();
        Cube.y();
    }

    Cube.yprime = function yprime() {
        Cube.y();
        Cube.y();
        Cube.y();
    }

    Cube.z = function z() {
        Cube.F();
        Cube.Bprime();
        Cube.S();
    }

    Cube.z2 = function z2() {
        Cube.z();
        Cube.z();
    }

    Cube.zprime = function zprime() {
        Cube.z();
        Cube.z();
        Cube.z();
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
                          Cube.B,Cube.B2,Cube.Bprime,
                          Cube.M,Cube.M2,Cube.Mprime,
                          Cube.E,Cube.E2,Cube.Eprime,
                          Cube.S,Cube.S2,Cube.Sprime,
                          Cube.x,Cube.x2,Cube.xprime,
                          Cube.y,Cube.y2,Cube.yprime,
                          Cube.z,Cube.z2,Cube.zprime ];
        let num = movements.length;

        return movements[rand(0, num)]();
    }

    Cube.shuffle = function shuffle() {
        let shuffleCount = 60;
        
        for (i = 0; i < shuffleCount; i++) {
            setTimeout(Cube.useRandomMovement, 250 * i);
        }
    }

    Cube.askForDemo = function askForDemo() {
        let func = prompt('Enter your function with notation:');
        if (func != '' && func != null) {
            Cube.demo(func);
        }
    }

    function splitMovements(movements) {
        let letters = [];
        for (i = 0; i < movements.length; i++) {
            let letter = movements.charAt(i)
            if ("UDLRFBMSExyz".includes(letter)) {
                if (i != movements.length && "'2".includes(movements.charAt(i+1))) {
                    letter += movements.charAt(i+1);
                }
                letters.push(letter);
            }
        }
        return letters;
    }

    Cube.demo = function demo(movements) {
        let demoDisplay = document.getElementById('demoDisplay');
        let demoControls = document.getElementById('demoControls');
        let askForDemo = document.getElementById('askForDemo');
        demoDisplay.clearChildren();
        let movementSplits = splitMovements(movements);
        movementSplits.forEach((split) => {
            let splitDiv = document.createElement('div');
            splitDiv.className = 'movesplit';
            splitDiv.innerHTML = split;
            demoDisplay.appendChild(splitDiv);
        });
        demoDisplay.show();
        demoControls.show();
    }

    let demoIsFinished = false;
    Cube.playNextDemoMove = function playNextDemoMove() {
        let currentMove = document.getElementsByClassName('movesplit current')[0];
        let nextMove;
        if (currentMove === undefined) {
            let demoDisplay = document.getElementById('demoDisplay');
            nextMove = demoDisplay.firstChild;
        } else {
            currentMove.classList.remove('current');
            nextMove = currentMove.nextSibling;
        }
        if (nextMove !== null) {
            nextMove.classList.add('current');
            let move = nextMove.innerHTML;
            if (move === "L")
                Cube.L();
            if (move === "L2")
                Cube.L2();
            if (move === "L'")
                Cube.Lprime();
            if (move === "R")
                Cube.R();
            if (move === "R2")
                Cube.R2();
            if (move === "R'")
                Cube.Rprime();
            if (move === "U")
                Cube.U();
            if (move === "U2")
                Cube.U2();
            if (move === "U'")
                Cube.Uprime();
            if (move === "B")
                Cube.B();
            if (move === "B2")
                Cube.B2();
            if (move === "B'")
                Cube.Bprime();
            if (move === "F")
                Cube.F();
            if (move === "F2")
                Cube.F2();
            if (move === "F'")
                Cube.Fprime();
            if (move === "D")
                Cube.D();
            if (move === "D2")
                Cube.D2();
            if (move === "D'")
                Cube.Dprime();
            if (move === "M")
                Cube.M();
            if (move === "M2")
                Cube.M2();
            if (move === "M'")
                Cube.Mprime();
            if (move === "E")
                Cube.E();
            if (move === "E2")
                Cube.E2();
            if (move === "E'")
                Cube.Eprime();
            if (move === "S")
                Cube.S();
            if (move === "S2")
                Cube.S2();
            if (move === "S'")
                Cube.Sprime();
            if (move === "x")
                Cube.x();
            if (move === "x2")
                Cube.x2();
            if (move === "x'")
                Cube.xprime();
            if (move === "y")
                Cube.y();
            if (move === "y2")
                Cube.y2();
            if (move === "y'")
                Cube.yprime();
            if (move === "z")
                Cube.z();
            if (move === "z2")
                Cube.z2();
            if (move === "z'")
                Cube.zprime();
        } else {
            demoIsFinished = true;
        }
    }

    Cube.playDemo = function playDemo() {
        if (!demoIsFinished) {
            Cube.playNextDemoMove();
            setTimeout(Cube.playDemo, 700);
        } else {
            demoIsFinished = false;
        }
    }

})(Cube);
