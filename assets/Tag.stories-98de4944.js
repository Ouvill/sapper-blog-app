import{T as p}from"./Tag-5ddfe1cb.js";import{S as B,i as T,s as v,z as f,A as _,B as $,v as y,w as h,C as b,t as w,k as x,f as W,d as C}from"./Component-da64efc3.js";import{B as S}from"./Badge-63ea2a39.js";function D(r){let t;return{c(){t=w("3")},l(a){t=x(a,"3")},m(a,e){W(a,t,e)},d(a){a&&C(t)}}}function V(r){let t,a;return t=new S({props:{$$slots:{default:[D]},$$scope:{ctx:r}}}),{c(){f(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,n){$(t,e,n),a=!0},p(e,n){const s={};n&4&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){h(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function q(r){let t,a;return t=new p({props:{name:r[0],slug:r[1],$$slots:{default:[V]},$$scope:{ctx:r}}}),{c(){f(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,n){$(t,e,n),a=!0},p(e,[n]){const s={};n&1&&(s.name=e[0]),n&2&&(s.slug=e[1]),n&4&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){h(t.$$.fragment,e),a=!1},d(e){b(t,e)}}}function z(r,t,a){let{name:e=""}=t,{slug:n=""}=t;return r.$$set=s=>{"name"in s&&a(0,e=s.name),"slug"in s&&a(1,n=s.slug)},[e,n]}class k extends B{constructor(t){super(),T(this,t,z,q,v,{name:0,slug:1})}}k.__docgen={version:3,name:"TagWithBadge.svelte",data:[{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"slug",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j={title:"Tag",component:p,tags:["autodocs"],argTypes:{name:{control:{type:"text"},describe:"タグ名"},slug:{control:{type:"text"},describe:"スラッグ"}}},o={args:{name:"tag",slug:"tag"}},l={render:r=>({Component:k,props:r}),args:{name:"tag",slug:"tag"}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "tag",
    slug: "tag"
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    Component: TagWithBadge,
    props: args
  }),
  args: {
    name: "tag",
    slug: "tag"
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const F=["Default","WithBadge"];export{o as Default,l as WithBadge,F as __namedExportsOrder,j as default};
//# sourceMappingURL=Tag.stories-98de4944.js.map
