
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
const Nmul = a => b => c =>  a(b(c));
const Nexp = a => b => b(a);
const Npred = a => b => c => a((d => e => e(d(b))))(f => c)(g => g);
const Nsub = a => b => b(Npred)(a);

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
        Nmul:Nmul,
        Nexp:Nexp,
        Npred:Npred,
        Nsub:Nsub
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

