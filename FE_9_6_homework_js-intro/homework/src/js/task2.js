const a = prompt('a length:', '0');
const b = prompt('b length:', '0');
const angle = prompt('α-angle:', '0');
const straightAngle = 180;
let radians=angle*straightAngle/Math.PI;
let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2)-Math.cos(radians)*2*a*b);
let p = a+b+c;
let s = Math.sqrt(p/2*(p/2-a)*(p/2-b)*(p/2-c));
let message = '';

if (a > 0 && b >0 && angle >0 && angle<straightAngle) {
	message = 'a length: '+ Math.round(a * 100)/100 + 
'\nb length: '+Math.round(b * 100)/100+
'\nα-angle: '+ Math.round(angle * 100)/100+ 
'\nc length: '+ Math.round(c * 100)/100+
'\nTriangle square: '+ Math.round(s * 100)/100+
'\nTriangle perimeter: '+ Math.round(p * 100)/100;
} else {
	message = 'Invalid data';
}

console.log (message);
