import { Point } from './Point';

let p = new Point(10,10);

let elem = document.getElementById('output');

elem.innerHTML = `x:${p.x},y:${p.y}`;