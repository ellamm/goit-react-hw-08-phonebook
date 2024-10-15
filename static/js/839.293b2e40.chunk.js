"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[839],{839:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(456),o=n(43);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")};const a=e=>e.filter;var l=n(620),c=n(574);const u=c.Ay.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`,s=c.Ay.input`
  font-size: 16px;
  width: 250px;
  height: 20px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  border-color: #3A441B;
  font-weight: 700;
`,d=c.Ay.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;var p=n(579);const f=()=>{const e=(0,r.d4)(a),t=(0,r.wA)();return(0,p.jsxs)(u,{children:[(0,p.jsx)(d,{children:"Find contacts by name"}),(0,p.jsx)(s,{type:"text",value:e,onChange:e=>{const n=e.target.value.toLowerCase();t((0,l.$u)(n))}})]})};var h="NOT_FOUND";var x=function(e,t){return e===t};function m(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?x:r,i=n.maxSize,a=void 0===i?1:i,l=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),u=1===a?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:h},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return h}return{get:r,put:function(t,o){r(t)===h&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,c);function s(){var t=u.get(arguments);if(t===h){if(t=e.apply(null,arguments),l){var n=u.getEntries().find((function(e){return l(e.value,t)}));n&&(t=n.value)}u.put(arguments,t)}return t}return s.clearCache=function(){return u.clear()},s}function g(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,a=0,l={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(l=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=l.memoizeOptions,s=void 0===u?n:u,d=Array.isArray(s)?s:[s],p=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}(r),f=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return i=f.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:f,dependencies:p,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h}}var v=g(m);const y=e=>e.contacts.isLoading,b=e=>e.contacts.items,w=v([b,a],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var j=n(977);const A=c.Ay.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f08080;
  border-radius: 4px;
  margin: 0 auto;
`,k=c.Ay.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #f08080;
  font-size: 20px;
`,z=c.Ay.input`
  color: #171718;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`,C=c.Ay.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #f08080;
  color: #f08080;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #b9bcd3;
  }
`;var E,O;function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function F(e,t){let{title:n,titleId:r,...i}=e;return o.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,E||(E=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),O||(O=o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}const S=o.forwardRef(F),H=(n.p,i()),L=i(),M=()=>{const[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),a=(0,r.d4)(b),l=(0,r.wA)(),c=e=>{const{name:n,value:r}=e.currentTarget;switch(n){case"name":t(r);break;case"number":i(r);break;default:return}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(A,{onSubmit:r=>{r.preventDefault();a.some((t=>t.name.toLowerCase()===e.toLowerCase()))?alert(`${e} is already in contacts`):(l((0,j.jx)({name:e,number:n})),t(""),i(""))},children:[(0,p.jsxs)(k,{htmlFor:H,children:["Name",(0,p.jsx)(z,{type:"text",name:"name",value:e,onChange:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)(k,{htmlFor:L,children:["Number",(0,p.jsx)(z,{type:"tel",name:"number",value:n,onChange:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",minlength:"13",maxlength:"13",required:!0})]}),(0,p.jsxs)(C,{type:"submit",children:[(0,p.jsx)(S,{fill:"#f08080",width:"25",height:"25"}),"Add contact"," "]})]}),(0,p.jsx)(f,{})]})},R=c.Ay.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f08080;
  margin: 0 auto;
`,q=c.Ay.li`
  background-color: #ffffff;
  border: 3px solid #f08080;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`,N=c.Ay.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #f08080;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #b9bcd3;
  }
`;var B,V;function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function P(e,t){let{title:n,titleId:r,...i}=e;return o.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,B||(B=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),V||(V=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}const U=o.forwardRef(P),Z=(n.p,()=>{const e=(0,r.d4)(w),t=(0,r.wA)();return(0,p.jsx)(R,{children:e.map((e=>(0,p.jsxs)(q,{children:[e.name+" : "+e.number,(0,p.jsxs)(N,{type:"button",name:"delete",onClick:()=>t((0,j.tH)(e.id)),children:[(0,p.jsx)(U,{fill:"#000000",width:"20",height:"20"}),"delete"]})]},e.id)))})});var $=n(420);function D(){const e=(0,r.d4)(y);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("title",{children:"Your contacts"}),(0,p.jsx)(M,{})," ",(0,p.jsx)("div",{children:e&&(0,p.jsx)($.a,{})})," ",(0,p.jsx)(Z,{})," "]})}}}]);
//# sourceMappingURL=839.293b2e40.chunk.js.map