import{u as O,j as e,x as ce,ar as A,as as le,s as S,L as de,r as h,n as R,z as ue,i as P,C as he}from"./index-9b7a50c1.js";import{i as xe,C as pe,T as je,j as G,d as J,k as K,I as fe,R as me,l as ge,m as Ce,n as be,o as ye,p as ve,q as ke,r as Se,t as we,B as Q,D as V,L as X,S as Y,u as Me,W as Ie,v as Pe,w as Re,x as T,y as Be,z as W,E as Fe,F as Le,G as De,N as z,H as Te,J as E,K as $,O as N,P as Ee,Q as $e,U as Ne,V as _,A as U,X as q,M as Oe,e as Ae,f as He,g as We,h as ze,Y as _e}from"./MealPopUpModal-0228e80d.js";const Ue=({type:m,name:c,calories:C,carbogidrate:x,protein:a,fat:o,productId:i,setName:l,setCalories:w,setCarbogidrate:p,setProtein:M,setFat:j})=>{const b=O(),u=()=>{b(A(!1))},I={typeFood:m,userFood:{name:c,calories:C,nutrition:{carbogidrate:x,protein:a,fat:o}}},f=n=>{n.preventDefault(),b(le({id:i,food:I})),u()},y=n=>{if(n==="breakfast")return Q;if(n==="dinner")return V;if(n==="lunch")return X;if(n==="snack")return Y};return e.jsx(xe,{onClick:u,children:e.jsxs(pe,{onClick:n=>n.stopPropagation(),children:[e.jsx(je,{children:"Record your meal"}),e.jsxs(G,{style:{marginTop:"24px"},children:[e.jsx(J,{src:y(m)}),e.jsx(K,{children:ce(m)})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs(fe,{children:[e.jsx(me,{value:c,type:"string",placeholder:"The name of the product or dish",onChange:n=>{l(n.target.value)}}),e.jsx(ge,{min:0,max:100,type:"number",onChange:n=>{p(n.target.value)},value:x,placeholder:"Carbonoh"}),e.jsx(Ce,{min:0,max:100,type:"number",onChange:n=>{M(n.target.value)},value:a,placeholder:"Protein"}),e.jsxs(be,{children:[e.jsx(ye,{min:0,max:100,type:"number",onChange:n=>{j(n.target.value)},value:o,placeholder:"Fat"}),e.jsx(ve,{min:0,max:400,type:"number",onChange:n=>{w(n.target.value)},value:C,placeholder:"Calories"})]})]}),e.jsxs(ke,{children:[e.jsx(Se,{type:"submit",children:"Confirm"}),e.jsx(we,{onClick:u,type:"button",children:"Cancel"})]})]})]})})},qe=S(de)``,Ge=S.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  rotate: 180deg;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,Je=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Ke=S.h2`
  font-size: 24px;
  font-weight: 500;
`,Qe=S.div`
  width: 300px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,Ve=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,B=({title:m,meal:c,setFoodType:C,typefood:x,totalCarbs:a,totalProtein:o,totalFat:i,setProductId:l,setName:w,setCalories:p,setCarbogidrate:M,setProtein:j,setFat:b,src:u})=>{const I=O(),[f,y]=h.useState(!1),n=()=>y(!0),F=()=>y(!1),v=d=>{const k=d.currentTarget.dataset.set,g=c.find(L=>L._id===k);w(g.name),p(g.calories),M(g.nutrition.carbogidrate),j(g.nutrition.protein),b(g.nutrition.fat),l(k),C(`${x.toLowerCase()}`),I(A(!0))};return e.jsxs(Me,{children:[e.jsxs(Ie,{children:[e.jsxs(G,{style:{alignItems:"center"},children:[e.jsx(J,{src:u}),e.jsx(K,{children:`${m}`})]}),e.jsxs(Pe,{children:[e.jsxs(Re,{children:["Carbonohidrates: ",e.jsxs(T,{children:[" ",a||0," "]})]}),e.jsxs(Be,{children:[e.jsxs(W,{children:["Protein: ",e.jsxs(T,{children:[" ",o||0," "]})]}),e.jsxs(W,{children:["Fat: ",e.jsx(T,{children:i||0})]})]})]})]}),e.jsxs(Fe,{children:[(c==null?void 0:c.length)>0?c.map((d,k)=>e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Le,{children:[e.jsxs(De,{children:[e.jsx(z,{children:k+1}),d.name]}),e.jsxs(Te,{children:[e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Carb. "}),d.nutrition.carbogidrate]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Prot. "}),d.nutrition.protein]})}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx(N,{children:" Fat. "}),d.nutrition.fat]})})]})]}),e.jsxs(Ee,{"data-set":d._id,onClick:v,children:[e.jsx($e,{children:e.jsx("use",{href:`${R}#icon-edit-3`})}),e.jsx(Ne,{children:e.jsx("use",{href:`${R}#trash-delete`})})]})]},d._id)):e.jsxs(_,{onClick:n,children:[e.jsx(U,{children:"Record your meal"}),e.jsx(q,{children:e.jsx("use",{href:`${R}#icon-add-converted`})})]}),(c==null?void 0:c.length)>0?e.jsxs("div",{style:{display:"flex"},children:[e.jsx(z,{children:c.length+1}),e.jsxs(_,{onClick:n,children:[e.jsx(U,{children:"Record your meal"}),e.jsx(q,{children:e.jsx("use",{href:`${R}#icon-add-converted`})})]})]}):null,e.jsx(Oe,{closeModal:F,stateModal:f,typefood:x})]})]})},Xe=()=>{var H;const m=ue(),c=h.useRef(((H=m.state)==null?void 0:H.from)??"/"),[C,x]=h.useState(""),a=P(Ae),o=P(He),i=P(We),l=P(ze),[w,p]=h.useState(""),[M,j]=h.useState(""),[b,u]=h.useState(""),[I,f]=h.useState(""),[y,n]=h.useState(""),[F,v]=h.useState(""),d=O(),k=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),g=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),L=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),Z=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.fat)},0),ee=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),te=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),ne=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),se=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.protein)},0),re=a==null?void 0:a.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ae=i==null?void 0:i.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),oe=o==null?void 0:o.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),ie=l==null?void 0:l.reduce((s,r)=>{var t;return s+((t=r.nutrition)==null?void 0:t.carbogidrate)},0),D=P(_e);return h.useEffect(()=>{const s=r=>{r.code==="Escape"&&d(A(!1))};return D?(document.addEventListener("keydown",s),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[D,d]),h.useEffect(()=>{d(he())},[d]),e.jsxs(Qe,{children:[e.jsxs(Je,{children:[e.jsx(qe,{to:c.current,children:e.jsx(Ge,{children:e.jsx("use",{href:`${R}#icon-arrowright`})})}),e.jsx(Ke,{children:"Diary"})]}),D?e.jsx(Ue,{type:C,name:w,calories:M,carbogidrate:b,protein:I,fat:y,productId:F,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n}):null,e.jsxs(Ve,{children:[e.jsx(B,{totalCarbs:re,totalProtein:ee,totalFat:k,meal:a,title:"Breakfast",typefood:"breakfast",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:Q}),e.jsx(B,{totalCarbs:oe,totalProtein:ne,totalFat:L,meal:o,title:"Lunch",typefood:"lunch",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:X}),e.jsx(B,{totalCarbs:ae,totalProtein:te,totalFat:g,meal:i,title:"Dinner",typefood:"dinner",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:V}),e.jsx(B,{totalCarbs:ie,totalProtein:se,totalFat:Z,meal:l,title:"Snack",typefood:"snack",setFoodType:x,setName:p,setCalories:j,setCarbogidrate:u,setProtein:f,setFat:n,setProductId:v,src:Y})]})]})},et=()=>e.jsx("div",{children:e.jsx(Xe,{})});export{et as default};
