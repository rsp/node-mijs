
"use strict";

const T = a => b => a;
const F = a => b => b;
const N = n => n ? a => b => a(N(n-1)(a)(b)) : a => b => b;
const Nv = a => a(x => x+1)(0);
const P = a => b => f => f(a)(b);
const H = a => a(T);
const R = a => a(F);
const La = a => a.length ? P(a[0])(La(a.slice(1))) : null;
const L = function () { return La(Array.prototype.slice.call(arguments)); };
const Np = a => console.log(Nv(a));
const Pp = a => console.log(Nv(H(a)) + " " + Nv(R(a)));
const Ls = a => a ? Nv(H(a)) + " " + Ls(R(a)) : "";
const Lp = a => console.log(Ls(a));

const Ninc = a => b => c => b(a(b)(c));

const Nadd = a => b => c => d =>  a(c)(b(c)(d));
const Nmul = a => b => c => d =>  a(b(c))(d);

module.exports = function (opt) {
    const e = {
        T:T,
        F:F,
        N:N,
        Nv:Nv,
        P:P,
        Pp:Pp,
        H:H,
        R:R,
        La:La,
        L:L,
        Ls:Ls,
        Lp:Lp,
        Np:Np,
        Ninc:Ninc,
        Nadd:Nadd,
        Nmul:Nmul
    };
    if (opt && opt.global) {
        for (var k in e) {
            if (e.hasOwnProperty(k)) {
                global[k] = e[k];
            }
        }
    }
    return e;
}

// global.n0 = (f,x) => x;
// global.n1 = (f,x) => f(x);
// global.n2 = (f,x) => f(f(x));
// global.n3 = (f,x) => f(n2(x));

// P(a)(b) - makes a pair of a and b


// global.list = (...e) => {
//     var v, l = e;
//     while (e.length) {
//         v = e.pop();
//         l = pair(v, l);
//     }
//     return l;
// };

// global.inc = (x) => (x+1);

// global.printPair = (p) => { console.log(car(p), cdr(p)); };

// // global.printList = (l) => { console.log(car(p), cdr(p)); };

// global.printNum = (x) => { console.log( x(inc,0) ); }
