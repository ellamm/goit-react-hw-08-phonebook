"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[157],{157:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var a=t(456),o=t(672),s=t(574);const n=s.Ay.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f08080;
  border-radius: 4px;
  margin: 0 auto;
`,i=s.Ay.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #f08080;
  font-size: 20px;
`,l=s.Ay.input`
  color: #171718;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`,p=s.Ay.button`
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
`;var d=t(579);const c=()=>{const e=(0,a.wA)();return(0,d.jsxs)(n,{onSubmit:r=>{r.preventDefault();const t=r.currentTarget;e((0,o.kz)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},autoComplete:"off",children:[(0,d.jsxs)(i,{children:["Username",(0,d.jsx)(l,{type:"text",name:"name",placeholder:"Please enter your username",pattern:"^[^\\d]+$",title:"Username may contain only letters, apostrophe, dash and spaces.",required:!0})]}),(0,d.jsxs)(i,{children:["Email",(0,d.jsx)(l,{type:"email",name:"email",placeholder:"Please enter your email",pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",title:"Email has to respect the format",required:!0})]}),(0,d.jsxs)(i,{children:["Password",(0,d.jsx)(l,{type:"password",name:"password",placeholder:"Please eneter your password",pattern:"^[a-zA-Z0-9!@#$%^&*()-_=+`~[\\]{}|:<>/?]+$",title:"Password must pe a safe one",required:!0})]}),(0,d.jsx)(p,{type:"submit",children:"Register"})]})};function u(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("title",{children:"Registration"}),(0,d.jsx)(c,{})," "]})}}}]);
//# sourceMappingURL=157.e6d2ff95.chunk.js.map