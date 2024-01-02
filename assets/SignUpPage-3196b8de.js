import{r as a,c as F,a as j,s as t,L as oe,j as e,F as N,b as x,d as L,E as b,e as P,u as se,f as ce}from"./index-9b7a50c1.js";import{n as E}from"./notiflix-notify-aio-63e2c40f.js";import{i as le}from"./welcomepage-87be5f3a.js";import{i as de,a as pe}from"./eye-off-184ec3b6.js";const q=(i,r)=>{const[s,p]=a.useState(i),[n,c]=a.useState(null),[d,h]=a.useState(!1);return a.useEffect(()=>{d&&r.validate(s).then(()=>c(null)).catch(m=>c(m.message))},[s,d,r]),{value:s,error:n,onChange:m=>{p(m.target.value)},onBlur:()=>{h(!0),r.validate(s).then(()=>c(null)).catch(m=>c(m.message))}}},me=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=F().shape({name:j().trim().strict().min(2,"Name is too short (minimum 2 characters)").max(50,"Name is too long (maximum 50 characters)").required("Name is required"),email:j().trim().strict().matches(me,"Oops! That doesn´t look like a valid email address. Try again?").required("Email is required"),password:j().trim().strict().min(6,"Password is too short (minimum 6 characters)").max(50,"Password is too long (maximum 50 characters)").required("Password is required")}),xe=async(i,r,s,p)=>{try{await u.fields.name.validate(i),await u.fields.email.validate(r),await u.fields.password.validate(s),p(!0)}catch{p(!1)}},_={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},he=t.div`
  margin: 0 auto;
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 834px) {
    padding-top: 20px;
  }
`,ge=t.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`,ue=t.div`
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
  }
`,fe=t.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,ye=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,be=t.h2`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 430px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,we=t.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }

  button:disabled {
    background-color: #b6b6b6;
  }
`,V=t.input`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--color-primary-green-lite, #e3ffa8);
  background: var(--color-primary-black-2, #0f0f0f);
  color: var(--primary-color-grey, #b6b6b6);
  font-size: 14px;
  line-height: 1.43;

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
`,ve=t.button`
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
  line-height: 1.42;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  &:disabled {
    background-color: var(--primary-color-green-lite) !important;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,W=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ke=t.div`
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
`,je=t.p`
  flex-shrink: 0;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Fe=t(oe)`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-weight: 500;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;t.p`
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;const H=t.div`
  color: ${i=>i.color||_.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Se=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${_.iconStroke};
  cursor: pointer;
`,ze=t.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  display: flex;
  align-items: center;
`,$e=({onForm:i,nameValue:r,emailValue:s,passwordValue:p})=>{const n=q(r,u.fields.name),c=q(s,u.fields.email),d=q(p,u.fields.password),[h,w]=a.useState(!1),S=()=>{w(!h)},[m,z]=a.useState(!1),f=(C,G)=>G?"1px solid #e74a3b":C?"1px solid #3cbc81":"1px solid var(--primary-color-green-lite)",{value:$}=n,{value:v}=c,{value:B}=d;return a.useEffect(()=>{xe($,v,B,z)},[$,v,B,z]),e.jsxs(ue,{children:[e.jsx(fe,{src:le,alt:"illustration-sport-and-fitness-tracker"}),e.jsxs(ge,{children:[e.jsx(ye,{children:"Sign up"}),e.jsx(be,{children:"You need to register to use the service"}),e.jsxs(we,{onSubmit:i,children:[e.jsx(W,{children:e.jsx(V,{style:{border:f(n.touched,n.error)},type:"text",name:"name",placeholder:"Name",value:n.value,onChange:n.onChange,onBlur:n.onBlur,autoComplete:"off"})}),n.error&&e.jsx(H,{children:n.error}),e.jsx(W,{children:e.jsx(V,{style:{border:f(n.touched,n.error)},type:"email",name:"email",placeholder:"E-mail",value:c.value,onChange:c.onChange,onBlur:c.onBlur,autoComplete:"off"})}),c.error&&e.jsx(H,{children:c.error}),e.jsxs(W,{children:[e.jsx(V,{style:{border:f(n.touched,n.error)},type:h?"text":"password",name:"password",placeholder:"Password",value:d.value,id:"myInput",onChange:d.onChange,onBlur:d.onBlur,autoComplete:"off"}),e.jsx(ze,{children:e.jsx(Se,{onClick:S,children:e.jsx("image",{href:h?de:pe})})})]}),d.error&&e.jsx(H,{children:d.error}),e.jsx(ve,{type:"submit",disabled:!m,children:"Next"})]}),e.jsxs(ke,{children:[e.jsx(je,{children:"Do you already have an account?"}),e.jsx(Fe,{to:"/signin",children:"Sign in"})]})]})]})},Be="/fs-84-react-node-va7ul/assets/goals-941daa22.png",M="/fs-84-react-node-va7ul/assets/checked-icon-f2266a6d.svg",Ce={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},Ee=t(N)`
  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,A=t(x)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,I=t.label`
  color: var(--primary-color-white);
  line-height: 1.42;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${A}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const Ae=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0;

  @media screen and (min-width: 834px) {
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 72px;
  }
`,Pe=t.img`
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
`,Ne=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
  }
`,Le=t.h1`
  color: var(--color-primary-white, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ge=t.p`
  color: var(--color-primary-gray, #b6b6b6);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,qe=t.div`
  display: flex;
  flex-direction: column;

  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (min-width: 834px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;t.label`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;const Ve=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: var(--color-primary-green-lite, #e3ffa8);
  color: var(--color-primary-black-2, #0f0f0f);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,We=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,He=t.div`
  color: ${i=>i.color||Ce.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -10px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,Ie=F().shape({goal:j().required("Selecting a goal is required")});function Te({onForm:i,onBackPage:r}){return e.jsxs(Ae,{children:[e.jsx(Pe,{src:Be,alt:"illustration-summer-hiking"}),e.jsxs(Ne,{children:[e.jsx(Le,{children:"Your goal"}),e.jsx(Ge,{children:"Choose a goal so that we can help you effectively"}),e.jsx(L,{initialValues:{goal:""},validationSchema:Ie,onSubmit:i,children:()=>e.jsxs(Ee,{children:[e.jsxs(qe,{children:[e.jsxs(I,{children:[e.jsx(A,{type:"radio",name:"goal",value:"Lose Fat"}),"Lose Fat"]}),e.jsxs(I,{children:[e.jsx(A,{type:"radio",name:"goal",value:"Maintain"}),"Maintain"]}),e.jsxs(I,{children:[e.jsx(A,{type:"radio",name:"goal",value:"Gain Muscle"}),"Gain Muscle"]})]}),e.jsx(b,{name:"goal",component:He}),e.jsx(Ve,{type:"submit",children:"Next"}),e.jsx(We,{type:"button",onClick:r,children:"Back"})]})})]})]})}const Me="/fs-84-react-node-va7ul/assets/genderAge-63bb302d.png",Re={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},Ue=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 834px) {
    align-items: center;
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,Ye=t.img`
  height: 296px;
  width: 300px;
  background: transparent;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 570px;
  }
`,De=t.div`
  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`,Oe=t.h1`
  color: var(--primary-color-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Qe=t.p`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 360px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ze=t(N)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,Xe=t.div`
  margin-bottom: 24px;
  width: 234px;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`,_e=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    gap: 16px;
    justify-content: center;
    flex-direction: column;
    align-items: start;
  }
`;t.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;t(x)`
  background-color: #222;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #555;
  }
`;const Je=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
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
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: var(--secondary-color-yellow);
  }
`,Ke=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,T=t(x)`
  margin-right: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,Y=t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.42;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    justify-content: start;
  }

  ${T}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--color-primary-white, #fff);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: start;
  margin-bottom: 24px;
`;t.div``;const et=t(x)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: transparent;
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;

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

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,D=t.p`
  margin-bottom: 12px;
  color: var(--primary-color-white);
  line-height: 1.42;
  text-align: start;
`,O=t.div`
  color: ${i=>i.color||Re.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: 5px;
  font-size: 12px;
`,tt=F().shape({gender:j().required("Gender is required"),age:P().positive("Age must be a positive number").integer("Age must be an integer").max(150,"Age must be less than 150").required("Age is required")});function it({onForm:i,onBackPage:r}){return e.jsxs(Ue,{children:[e.jsx(Ye,{src:Me,alt:"illustration-gender-and-age"}),e.jsxs(De,{children:[e.jsx(Oe,{children:"Select gender, Age"}),e.jsx(Qe,{children:"Choose a goal so that we can help you effectively"}),e.jsx(L,{initialValues:{gender:"",age:""},validationSchema:tt,onSubmit:i,children:()=>e.jsxs(Ze,{children:[e.jsxs(Xe,{children:[e.jsx(D,{children:"Gender"}),e.jsxs(_e,{children:[e.jsxs(Y,{children:[e.jsx(T,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs(Y,{children:[e.jsx(T,{type:"radio",name:"gender",value:"female"}),"Female"]})]}),e.jsx(b,{name:"gender",component:O})]}),e.jsx(D,{children:"Your Age"}),e.jsx(et,{type:"number",name:"age",placeholder:"Enter your age"}),e.jsx(b,{name:"age",component:O}),e.jsx(Je,{type:"submit",children:"Next"}),e.jsx(Ke,{type:"button",onClick:r,children:"Back"})]})})]})]})}const nt="/fs-84-react-node-va7ul/assets/bodyParameters-dbc57aec.png",rt={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},at=t.div`
  background-color: var(--primary-color-black-one);
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
    padding-bottom: 72px;
  }
`,ot=t.img`
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
`,st=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
    flex-direction: column;
  }
`,ct=t.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,lt=t.h2`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,dt=t.div`
  @media screen and (min-width: 834px) {
    margin: 0 auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
  }
`,Q=t.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
`,Z=t(x)`
  position: relative;
  width: 100%;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-size: 14px;
  line-height: 1.43;

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

  @media screen and (min-width: 1440px) {
    width: 212px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`,pt=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 40px;
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

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,mt=t.button`
  display: block;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,X=t.div`
  color: ${i=>i.color||rt.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  /* margin-top: 5px; */
  /* margin-left: 9px; */
  font-size: 12px;
  font-family: 'Poppins400';
`,xt=F().shape({height:P().min(50,"Height must be at least 50cm").max(250,"Height must be less than 250cm").positive("Height must be a positive number").integer("Height must be an integer").required("Height is required"),weight:P().min(30,"Weight must be at least 30kg").max(150,"Weight must be less than 150kg").positive("Weight must be a positive number").integer("Weight must be an integer").required("Weight is required")});function ht({onForm:i,onBackPage:r}){return e.jsxs(at,{children:[e.jsx(ot,{src:nt,alt:"Body parameters"}),e.jsxs(st,{children:[e.jsx(ct,{children:"Body parameters"}),e.jsx(lt,{children:"Enter your parameters for correct performance tracking"}),e.jsx(L,{initialValues:{height:"",weight:""},validationSchema:xt,onSubmit:i,children:e.jsx(N,{children:e.jsxs(dt,{children:[e.jsxs(Q,{children:["Height",e.jsx(x,{as:Z,type:"number",name:"height",placeholder:"Enter your height (in cm)"}),e.jsx(b,{name:"height",component:X})]}),e.jsxs(Q,{style:{marginTop:"24px"},children:["Weight",e.jsx(x,{as:Z,type:"number",name:"weight",placeholder:"Enter your weight (in kg)"}),e.jsx(b,{name:"weight",component:X})]}),e.jsx(pt,{type:"submit",children:"Next"}),e.jsx(mt,{type:"button",onClick:r,children:"Back"})]})})})]})]})}const gt="/fs-84-react-node-va7ul/assets/activity-0332f4f4.png",ut={text:"#FFFFFF",inputBorder:"#45FFBC",inputBorderHover:"#21CE99",error:"#e74a3b",success:"#3cbc81",background:"transparent",iconStroke:"#FFFFFF"},ft=t.div`
  background-color: var(--primary-color-black-one);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,yt=t.img`
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
`,bt=t.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media screen and (min-width: 834px) {
    align-items: center;
    gap: 80px;
    width: 438px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    align-items: flex-start;
    width: 328px;
  }
`,wt=t.h2`
  color: var(--primary-color-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    align-items: flex-start;
  }
`,vt=t.h3`
  color: var(--primary-color-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    align-items: flex-start;
  }
`,kt=t.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
  gap: 16px;
  flex-shrink: 0;

  @media screen and (min-width: 834px) {
    width: 470px;
    margin: 0 auto;
    > * {
      flex: 1 1 45%;
    }
  }

  @media screen and (min-width: 1440px) {
    align-items: start;
    width: 336px;
  }
`;t(x)`
  accent-color: #0f0;
`;const jt=t.button`
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

  @media screen and (min-width: 834px) {
    margin-right: auto;
    margin-left: auto;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
    margin-left: 0;
    width: 212px;
  }
`,Ft=t.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  background: transparent;
  color: var(--primary-color-grey);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: background-color, var(--transition-dur-and-func);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 834px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,St=t.div`
  color: ${i=>i.color||ut.error};
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  letter-spacing: var(--main-letter-spacing);
  margin-top: -18px;
  margin-left: 9px;
  font-size: 12px;
  font-family: 'Poppins400';
`,y=t(x)`
  padding-left: 8px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--primary-color-grey);
  border-radius: 100%;
  width: 12px;
  height: 12px;
  position: relative;
  flex-shrink: 0;

  &:checked {
    border-color: var(--primary-color-green-lite);
    background-image: url(${M});
    background-position: center;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
  }
`,k=t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  line-height: 1.42;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 8px;
  flex-shrink: 0;

  ${y}:checked + & {
    color: var(--primary-color-green-lite);
  }
`;t.label`
  color: var(--primary-color-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;const zt=F().shape({activity:P().required("Selecting an activity level is required")});function $t({onBackPage:i,onForm:r}){return e.jsxs(ft,{children:[e.jsx(yt,{src:gt,alt:"Activity illustration"}),e.jsxs(bt,{children:[e.jsx(wt,{children:"Your Activity"}),e.jsx(vt,{children:"To correctly calculate calorie and water intake"}),e.jsx(L,{initialValues:{activityLevel:""},validationSchema:zt,onSubmit:r,children:e.jsxs(N,{children:[e.jsxs(kt,{children:[e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.725"}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(k,{children:[e.jsx(y,{type:"radio",name:"activity",value:"1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsx(b,{name:"activity",component:St}),e.jsx(jt,{type:"submit",children:"Sign Up"}),e.jsx(Ft,{onClick:i,children:"Back"})]})})]})]})}E.Notify.init({showOnlyTheLastOne:!0,cssAnimationStyle:"from-bottom",clickToClose:!0,messageMaxLength:200,timeout:5e3,width:"300px"});const Pt=()=>{const[i,r]=a.useState(0),s=()=>{r(i+1)},p=()=>{r(i-1)},[n,c]=a.useState(""),[d,h]=a.useState(""),[w,S]=a.useState(""),[m,z]=a.useState("Lose Fat"),[f,$]=a.useState("male"),[v,B]=a.useState(""),[C,G]=a.useState(""),[R,J]=a.useState(""),[K,U]=a.useState("1.2"),ee=se(),te=async o=>{o.preventDefault();const l={name:o.target.name.value,email:o.target.email.value,password:o.target.password.value};try{await u.validate(l,{abortEarly:!1}),c(l.name),h(l.email),S(l.password),s()}catch(g){E.Notify.failure(g.errors.join(", "))}},ie=o=>{const l=o.goal;z(l),s()},ne=o=>{const l=o.gender,g=o.age;$(l),B(g),s()},re=o=>{const l=o.height,g=o.weight;G(l),J(g),s()},ae=o=>{const l=o.activity;U(l),ee(ce({name:n,email:d,password:w,goal:m,gender:f,age:v,height:Number(C),weight:Number(R),activityLevel:Number(l)})).then(g=>{g.meta.requestStatus==="fulfilled"?E.Notify.success(`Hey ${n}, you're all set! Let's get started!`):E.Notify.failure("There was a problem with your registration.")})};return e.jsxs(he,{children:[i===0&&e.jsx($e,{onForm:te,nameValue:n,emailValue:d,passwordValue:w}),i===1&&e.jsx(Te,{onForm:ie,onBackPage:p,goal:m}),i===2&&e.jsx(it,{onForm:ne,onBackPage:p,gender:f,ageValue:v}),i===3&&e.jsx(ht,{onForm:re,onBackPage:p,heightValue:C,weightValue:R}),i===4&&e.jsx($t,{onForm:ae,onBackPage:p,activity:K,setActivity:U})]})};export{Pt as default};
