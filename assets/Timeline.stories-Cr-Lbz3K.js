import{s as U,e as B,o as D,t as L,k as K,c as h,g as f,z as V,q as g,p as P,d as m,l as I,a as t,i as G,m as i,v as R}from"./lifecycle-D2dAEIN_.js";import{S as Q,i as W,c as X,b as Y,m as Z,t as $,a as ee,d as ue}from"./index-CNIsqJ_B.js";import{T as te}from"./Time-7Y_HPOpj.js";function ne(s){let e,r,k="",C,c,F,y,u,b,p,o,S,w,l,v,J,E,_,d;return u=new te({props:{date:s[1]}}),{c(){e=B("li"),r=B("span"),r.innerHTML=k,C=D(),c=B("h3"),F=L(s[0]),y=D(),X(u.$$.fragment),b=D(),p=B("p"),o=B("a"),S=L(s[3]),w=D(),l=K("svg"),v=K("path"),J=D(),E=B("p"),_=L(s[2]),this.h()},l(a){e=h(a,"LI",{class:!0});var n=f(e);r=h(n,"SPAN",{class:!0,"data-svelte-h":!0}),V(r)!=="svelte-1ok84mf"&&(r.innerHTML=k),C=g(n),c=h(n,"H3",{class:!0});var A=f(c);F=P(A,s[0]),A.forEach(m),y=g(n),Y(u.$$.fragment,n),b=g(n),p=h(n,"P",{class:!0});var x=f(p);o=h(x,"A",{class:!0,href:!0,target:!0,rel:!0});var H=f(o);S=P(H,s[3]),H.forEach(m),w=g(x),l=I(x,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var M=f(l);v=I(M,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(v).forEach(m),M.forEach(m),x.forEach(m),J=g(n),E=h(n,"P",{class:!0});var j=f(E);_=P(j,s[2]),j.forEach(m),n.forEach(m),this.h()},h(){t(r,"class","ring-3 absolute -start-1.5 mt-2 flex h-3 w-3 items-center justify-center rounded-full bg-indigo-700 ring-white dark:ring-gray-900"),t(c,"class","mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white"),t(o,"class","no-underline hover:underline"),t(o,"href",s[4]),t(o,"target","_blank"),t(o,"rel","noopener noreferrer"),t(v,"stroke-linecap","round"),t(v,"stroke-linejoin","round"),t(v,"d","M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"),t(l,"xmlns","http://www.w3.org/2000/svg"),t(l,"fill","none"),t(l,"viewBox","0 0 24 24"),t(l,"stroke-width","1.5"),t(l,"stroke","currentColor"),t(l,"class","h-6 w-6"),t(p,"class","mt-2 flex items-center gap-2 text-lg font-bold text-indigo-700 underline dark:text-indigo-400"),t(E,"class","my-2 text-sm font-normal text-gray-500 dark:text-gray-400"),t(e,"class","mb-10 ms-6")},m(a,n){G(a,e,n),i(e,r),i(e,C),i(e,c),i(c,F),i(e,y),Z(u,e,null),i(e,b),i(e,p),i(p,o),i(o,S),i(p,w),i(p,l),i(l,v),i(e,J),i(e,E),i(E,_),d=!0},p(a,[n]){(!d||n&1)&&R(F,a[0]);const A={};n&2&&(A.date=a[1]),u.$set(A),(!d||n&8)&&R(S,a[3]),(!d||n&16)&&t(o,"href",a[4]),(!d||n&4)&&R(_,a[2])},i(a){d||($(u.$$.fragment,a),d=!0)},o(a){ee(u.$$.fragment,a),d=!1},d(a){a&&m(e),ue(u)}}}function ae(s,e,r){let{eventTitle:k}=e,{eventDate:C}=e,{description:c}=e,{presentationTitle:F}=e,{presentationLink:y}=e;return s.$$set=u=>{"eventTitle"in u&&r(0,k=u.eventTitle),"eventDate"in u&&r(1,C=u.eventDate),"description"in u&&r(2,c=u.description),"presentationTitle"in u&&r(3,F=u.presentationTitle),"presentationLink"in u&&r(4,y=u.presentationLink)},[k,C,c,F,y]}class O extends Q{constructor(e){super(),W(this,e,ae,ne,U,{eventTitle:0,eventDate:1,description:2,presentationTitle:3,presentationLink:4})}}O.__docgen={version:3,name:"Timeline.svelte",data:[{visibility:"public",description:null,keywords:[],name:"eventTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"eventDate",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"presentationTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"presentationLink",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const le={title:"Timline",component:O,tags:["autodocs"],argTypes:{eventTitle:{control:{type:"text"},describe:"登壇したイベント名"},eventDate:{control:{type:"text"},describe:"登壇したイベントの日付"},presentationTitle:{control:{type:"text"},describe:"登壇資料のタイトル"},presentationLink:{control:{type:"text"},describe:"登壇資料のURL"},description:{control:{type:"text"},describe:"発表内容の概要"}}},T={args:{eventTitle:"JSConf JP 2023",eventDate:"2023-11-19",presentationTitle:"JavaScript なしで動作するモダンなコードの書き方",presentationLink:"https://example.com/",description:"Next.js、Remix、SvelteKit といった近年のフレームワークは、JavaScript がなくても動作することを一つの価値として提供しています。例えばSvelteKit のフォームではプログレッシブエンハンスメントとして、JavaScript が利用できる環境ではリッチなユーザー体験を提供しつつ、JavaScript が使えない環境においては HTML のフォームとして振る舞うことでアプリケーションの機能を変わらず提供できます。 React Server Component はサーバー側で HTML に変換されるため、クライアントに JavaScript のコードが配信されることはありません。React Server Component では useState() を使用できないといった制約がありますので、我々開発者は React Server Component の利点を十分に発揮するために、JavaScript を用いた状態管理を行う範囲を狭めることが求められています。このトークでは、CSS の :has() セレクターや、Popover API といった、従来は JavaScript を用いなければ提供できなかった機能を代替する方法を紹介します。"}};var N,q,z;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    eventTitle: "JSConf JP 2023",
    eventDate: "2023-11-19",
    presentationTitle: "JavaScript なしで動作するモダンなコードの書き方",
    presentationLink: "https://example.com/",
    description: "Next.js、Remix、SvelteKit といった近年のフレームワークは、JavaScript がなくても動作することを一つの価値として提供しています。例えばSvelteKit のフォームではプログレッシブエンハンスメントとして、JavaScript が利用できる環境ではリッチなユーザー体験を提供しつつ、JavaScript が使えない環境においては HTML のフォームとして振る舞うことでアプリケーションの機能を変わらず提供できます。 React Server Component はサーバー側で HTML に変換されるため、クライアントに JavaScript のコードが配信されることはありません。React Server Component では useState() を使用できないといった制約がありますので、我々開発者は React Server Component の利点を十分に発揮するために、JavaScript を用いた状態管理を行う範囲を狭めることが求められています。このトークでは、CSS の :has() セレクターや、Popover API といった、従来は JavaScript を用いなければ提供できなかった機能を代替する方法を紹介します。"
  }
}`,...(z=(q=T.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const oe=["Default"];export{T as Default,oe as __namedExportsOrder,le as default};
