import{s as g,f as m,e as h,c as b,g as k,d as u,a as f,i as _,u as p,h as v,j as w}from"./lifecycle-D2dAEIN_.js";import{S as x,i as j,t as z,a as A}from"./index-CNIsqJ_B.js";function y(r){var e,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(e=0;e<l;e++)r[e]&&(n=y(r[e]))&&(t&&(t+=" "),t+=n)}else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function c(){for(var r,e,n=0,t="",l=arguments.length;n<l;n++)(r=arguments[n])&&(e=y(r))&&(t&&(t+=" "),t+=e);return t}function L(r){let e,n,t;const l=r[5].default,a=m(l,r,r[4],null);return{c(){e=h("a"),a&&a.c(),this.h()},l(i){e=b(i,"A",{href:!0,target:!0,rel:!0,class:!0});var s=k(e);a&&a.l(s),s.forEach(u),this.h()},h(){f(e,"href",r[1]),f(e,"target",r[2]),f(e,"rel",r[3]),f(e,"class",n=c("inline-flex items-center justify-center rounded-lg px-4 py-2 text-center text-base font-medium",{"border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-zinc-600 dark:text-gray-50 dark:hover:bg-zinc-700":r[0]==="secondary","bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900":r[0]==="primary"}))},m(i,s){_(i,e,s),a&&a.m(e,null),t=!0},p(i,[s]){a&&a.p&&(!t||s&16)&&p(a,l,i,i[4],t?w(l,i[4],s,null):v(i[4]),null),(!t||s&2)&&f(e,"href",i[1]),(!t||s&4)&&f(e,"target",i[2]),(!t||s&8)&&f(e,"rel",i[3]),(!t||s&1&&n!==(n=c("inline-flex items-center justify-center rounded-lg px-4 py-2 text-center text-base font-medium",{"border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-zinc-600 dark:text-gray-50 dark:hover:bg-zinc-700":i[0]==="secondary","bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900":i[0]==="primary"})))&&f(e,"class",n)},i(i){t||(z(a,i),t=!0)},o(i){A(a,i),t=!1},d(i){i&&u(e),a&&a.d(i)}}}function B(r,e,n){let{$$slots:t={},$$scope:l}=e,{variant:a="secondary"}=e,{href:i}=e,{target:s=void 0}=e,{rel:d=void 0}=e;return r.$$set=o=>{"variant"in o&&n(0,a=o.variant),"href"in o&&n(1,i=o.href),"target"in o&&n(2,s=o.target),"rel"in o&&n(3,d=o.rel),"$$scope"in o&&n(4,l=o.$$scope)},[a,i,s,d,l,t]}class S extends x{constructor(e){super(),j(this,e,B,L,g,{variant:0,href:1,target:2,rel:3})}}S.__docgen={version:3,name:"LinkButton.svelte",data:[{visibility:"public",description:null,keywords:[],name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"secondary"},{visibility:"public",description:null,keywords:[],name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"target",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"rel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{S as L};
