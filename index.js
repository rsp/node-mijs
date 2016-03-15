
"use strict";

global.t = (a, b) => a;
global.f = (a, b) => b;
global.e = null;

global.n0 = (f,x) => x;
global.n1 = (f,x) => f(x);
global.n2 = (f,x) => f(f(x));

global.n = (i) => (
    i == 0 ? ((f,x) => x) : ( (f,x) => n(i-1)(f, x) )
);


global.pair = (a, b) => ( (f) => f(a, b) );

global.car = (p) => p(t);
global.cdr = (p) => p(f);

global.list = (...e) => {
    var v, l = e;
    while (e.length) {
        v = e.pop();
        l = pair(v, l);
    }
    return l;
};

global.inc = (x) => (x+1);

global.printPair = (p) => { console.log(car(p), cdr(p)); };

// global.printList = (l) => { console.log(car(p), cdr(p)); };

global.printNum = (x) => { console.log( x(inc,0) ); }

