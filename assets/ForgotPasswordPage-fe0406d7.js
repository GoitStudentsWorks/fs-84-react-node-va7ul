import{s as e,F as l,b as c,L as m,E as x,c as h,a as g,u as f,g as w,j as i,d as y,h as u}from"./index-97c9a303.js";import{n as a}from"./notiflix-notify-aio-03d2e13c.js";import{i as b}from"./welcomepage-87be5f3a.js";const v=e.div`
  background: var(--primary-color-black-one);
  padding-bottom: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 8px;

  @media screen and (min-width: 834px) {
    padding-bottom: 60px;
    align-items: center;
    gap: 60px;
    padding-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 104px;
    padding-top: 20px;
  }
`,j=e.div`
  @media screen and (min-width: 834px) {
    width: 444px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`,k=e.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 12px;
  }
`,S=e.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  text-align: start;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,P=e.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 21px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,z=e(l)`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,F=e.div`
  @media screen and (min-width: 834px) {
    margin: 0 auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,E=e(c)`
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${n=>n.border||"1px solid var(--primary-color-lite-green)"};
  background: var(--primary-color-black-two);
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;

  &:placeholder-shown {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus-visible {
    border: 1px solid red;
  }
`,C=e.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  text-decoration: none;
  border: transparent;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-top: 40px;
  font-family: 'Poppins500';

  &:disabled {
    background-color: var(--primary-color-green-lite);
    cursor: not-allowed;
  }

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,N=e.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;

  width: 100%;
  margin-top: 56px;

  @media screen and (min-width: 834px) {
    margin-top: 286px;
  }

  @media screen and (min-width: 834px) {
    margin-top: 248px;
  }
`,D=e.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
  font-size: 13px;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`,L=e(m)`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: var(--secondary-color-yellow);
  }
`,M=e(x)`
  margin-left: 4px;
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
`,W=h().shape({email:g().trim("Cannot include leading and trailing spaces").email("Invalid email").required("Required")}),I=()=>{const n=f(),s=w(),d=async(r,{setSubmitting:o})=>{try{await n(u({email:r.email})),a.Notify.success("A password reset link has been sent to your email."),s("/signin")}catch(t){a.Notify.failure("Failed to send password reset link. Please try again."),console.error(t)}finally{o(!1)}};return i.jsxs(v,{children:[i.jsx(k,{src:b,alt:"Forgot Password"}),i.jsxs(j,{children:[i.jsx(S,{children:"Forgot your password"}),i.jsx(P,{children:"We will send you an email with recovery instructions"}),i.jsxs(F,{children:[i.jsx(y,{initialValues:{email:""},validationSchema:W,onSubmit:d,children:({isSubmitting:r,errors:o,touched:t})=>{const p=t.email?o.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return i.jsxs(z,{children:[i.jsx(E,{border:p,name:"email",type:"email",placeholder:"E-mail"}),i.jsx(M,{name:"email",component:"div"}),i.jsx(C,{type:"submit",disabled:r,children:"Send"})]})}}),i.jsxs(N,{children:[i.jsx(D,{children:"Do you already have an account?"}),i.jsx(L,{to:"/signin",children:"Sign in"})]})]})]})]})};export{I as default};
