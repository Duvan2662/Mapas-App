import{A as c,B as v,E as k,H as C,L as y,M as F,N as M,g as u,k as a,l as f,m as p,n as o,o as i,r as g,x as s,z as m}from"./chunk-GPVGGD2V.js";var S=t=>[t];function _(t,e){if(t&1&&(o(0,"li",2),s(1),i()),t&2){let d=e.$implicit;p("routerLink",v(2,S,d.route)),a(),m(" ",d.name," ")}}var b=(()=>{let e=class e{constructor(){this.menuItems=[{name:"FullScreen",route:"/maps/fullscreen"},{name:"Zoom-Range",route:"/maps/zoom-range"},{name:"Markers",route:"/maps/markers"},{name:"Houses",route:"/maps/properties"},{name:"Alone Page",route:"/alone"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["side-menu"]],standalone:!0,features:[c],decls:2,vars:1,consts:[[1,"list-group"],["class","list-group-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(n,r){n&1&&(o(0,"ul",0),f(1,_,2,4,"li",1),i()),n&2&&(a(),p("ngForOf",r.menuItems))},dependencies:[C,k,M,y,F],styles:["li[_ngcontent-%COMP%]{cursor:pointer;transition:.2s all}ul[_ngcontent-%COMP%]{position:fixed;top:20px;left:20px;z-index:999}"]});let t=e;return t})();var E=(()=>{let e=class e{constructor(){this.counter=10}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["counter-alone"]],inputs:{counter:"counter"},standalone:!0,features:[c],decls:4,vars:1,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,r){n&1&&(o(0,"h1"),s(1),i(),o(2,"button",0),g("click",function(){return r.counter=r.counter+1}),s(3,` +1
`),i()),n&2&&(a(),m("Counter ",r.counter,""))}});let t=e;return t})();export{b as a,E as b};
