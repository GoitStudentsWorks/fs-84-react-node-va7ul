import{s as i,L as x,c as b,a,b as j,r as k,u as F,j as e,d as S,F as z,l as E}from"./index-97c9a303.js";import{i as m,a as g}from"./eye-off-e5378389.js";import{i as $}from"./welcomepage-87be5f3a.js";const I=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
  }
`,P=i.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`,B=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`,C=i.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,L=i.h3`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,W=i.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;i.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: ${o=>o.$border};
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;

  &.inputError {
    border: 2px solid #e74a3b;
  }

  &.inputValid {
    border: 2px solid #3cbc81;
  }

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--primary-color-lite-green);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;i.input.attrs({type:"checkbox"})`
  position: absolute;
  appearance: none;
  cursor: pointer;
  right: 14px;
  top: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color-black-two);
    background-image: url(${m}#eye-off);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% - 2px);
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    background-color: var(--primary-color-black-two);
    background-image: url(${g}#eye);
    visibility: visible;
  }

  @media screen and (max-width: 834px) {
    top: 50%;
    left: 50%;
  }
`;const q=i(x)`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  text-align: center;
  line-height: 1.42;

  color: var(--primary-color-grey);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    justify-content: center;
    width: 212px;
  }
`,Y=i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 40px;
  @media screen and (min-width: 834px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 145px;
    justify-content: flex-start;
  }
`,H=i.p`
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 400;
  flex-shrink: 0;
`,Q=i(x)`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-weight: 500;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;i.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`;i.div`
  font-size: 12px;
  color: var(--secondary-color-pink);
`;i.svg`
  fill: var(--primary-color-white);
  margin-left: auto;
`;i.svg`
  fill: var(--primary-color-lite-green);
`;i.div`
  display: flex;
  align-items: center;
`;i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 192;
`;i.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;const s=b().shape({email:a().trim().strict().email("Enter a valid Email*").required("Email is required!"),password:a().trim().strict().min(6,"Enter a valid Password*").required("Password is required!")});i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;const n={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},T=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,l=i(j)`
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: ${o=>o.border||`1px solid ${n.inputBorder}`};
  padding: 14px;
  color: ${n.text};
  background-color: ${n.background};
  transition: border var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 1px solid ${n.inputBorderHover};
    outline: none;
  }
`,d=i.div`
  color: ${o=>o.color||n.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -20px;
  margin-left: 12px;
  font-size: 12px;
  font-family: 'Poppins400';
`,U=i.svg`
  width: 16px;
  height: 16px;
  stroke: ${n.iconStroke};
  cursor: pointer;
`,p=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,c=i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`,V=i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`;i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;i.div`
  color: var(--primary-color-grey);
  font-family: 'Poppins500';
`;i.div`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;i.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;

  &::placeholder {
    color: var(--color-primary-grey);
    font-size: 14px;
    line-height: 1.43;
  }
`;const A=i.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
`,D={email:"",password:""},M=()=>{const[o,h]=k.useState(!1),f=F(),u=(r,t)=>{f(E(r)),t.resetForm()},w=()=>{h(!o)};return e.jsx(S,{initialValues:D,validationSchema:s,onSubmit:u,children:({errors:r,touched:t})=>{const y=t.email?r.email?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",v=t.password?r.password?"1px solid #e74a3b":"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)";return e.jsx(z,{autoComplete:"off",children:e.jsxs(T,{children:[e.jsx(c,{children:e.jsx(l,{border:y,type:"text",name:"email",validate:s,placeholder:"Email"})}),r.email&&t.email||!r.email&&t.email?e.jsx(p,{children:e.jsx(d,{color:!r.email&&t.email?"#3cbc81":null,children:r.email?r.email:"Email is valid"})}):null,e.jsxs(c,{children:[e.jsx(l,{border:v,type:o?"text":"password",name:"password",placeholder:"Password"}),e.jsx(V,{children:e.jsx(U,{onClick:w,children:e.jsx("image",{href:o?m:g})})})]}),r.password&&t.password||!r.password&&t.password?e.jsx(p,{children:e.jsx(d,{color:!r.password&&t.password?"#3cbc81":null,children:r.password?r.password:"Password is secure"})}):null,e.jsx(A,{type:"submit",children:"Sign In"})]})})}})},N=()=>e.jsxs(I,{children:[e.jsx(W,{src:$,alt:"Activity tracker"}),e.jsxs(P,{children:[e.jsxs(B,{children:[e.jsx(C,{children:"Sign in"}),e.jsx(L,{children:"You need to login to use the service"})]}),e.jsx(M,{}),e.jsx(q,{to:"/forgot-password",children:"Forgot your password?"}),e.jsxs(Y,{children:[e.jsx(H,{children:"If you don't have an account yet"}),e.jsx(Q,{to:"/signup",children:"Sign up"})]})]})]}),K=()=>e.jsx(N,{});export{K as default};
