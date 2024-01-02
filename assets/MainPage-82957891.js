import{s as t,i as x,k as E,m as G,j as e,n as f,t as m,o as q,p as V,q as Z,r as b,u as k,v as J,w as K,L as U,x as Q,y as X,z as Y,A as ee,B as te,C as re}from"./index-9b7a50c1.js";import{C as _,A as ie,p as H,a as N,D as ne,b as oe,L as ae,B as se,c as le,d as ce}from"./index-093f8b2f.js";import{s as de,a as pe,b as xe,c as he,M as ge,d as me,A as ue,e as fe,f as we,g as ye,h as be,B as ve,L as je,D as ke,S as Ce}from"./MealPopUpModal-0228e80d.js";import{R as $e}from"./RecommendedList-6ebc9b8c.js";const We=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ze=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,Fe=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 32px;
    padding: 24px 40px;
  }
`,P=t.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 834px) {
  }
`,Be=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-lite-green);
`,De=t.svg`
  width: 80px;
  height: 80px;
  fill: var(--primary-color-violet);
`,T=t.div`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--primary-color-grey);
`,R=t.p`
  margin-top: 4px;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.11;
  color: var(--primary-color-white);
`,Me=t.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Se=()=>{const i=x(E),r=x(G);return e.jsxs(We,{children:[e.jsx(ze,{children:"Daily goal"}),e.jsxs(Fe,{children:[e.jsxs(P,{children:[e.jsx(Be,{children:e.jsx("use",{href:`${f}#bubble`})}),e.jsxs(T,{children:[e.jsx("p",{children:"Calories"}),e.jsx(R,{children:i})]})]}),e.jsxs(P,{children:[e.jsx(De,{children:e.jsx("use",{href:`${f}#milk`})}),e.jsxs(T,{children:[e.jsx("p",{children:" Water"}),e.jsxs(R,{children:[r," ",e.jsx(Me,{children:"ml"})]})]})]})]})]})};_.register(ie,H,N);const Pe={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Te={id:"bgCircle",beforeDatasetsDraw(i){const{ctx:r}=i;r.save();const a=i.getDatasetMeta(0).data[0].x,s=i.getDatasetMeta(0).data[0].y,l=i.getDatasetMeta(0).data[0].innerRadius,d=i.getDatasetMeta(0).data[0].outerRadius,p=d-l,h=Math.PI/180;r.beginPath(),r.lineWidth=p,r.strokeStyle=`${m.palette.greyone.main}`,r.arc(a,s,d-p/2,0,h*360,!1),r.stroke()}},O=({dailyGoal:i,filledValue:r,bgColor:a})=>{let s=i-r;r>i&&(s=0);const l={datasets:[{label:[],data:[r,s],backgroundColor:[a,"transparent"],borderColor:["transparent"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ne,{options:Pe,data:l,plugins:[Te]})})},Re=t.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`,Le=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Ie=t.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Ae=t.h4`
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,L=t.span`
  margin-left: 4px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,Ee=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--primary-color-grey);
`,$=({title:i,bgColor:r,dailyGoal:a,filledValue:s})=>{s||(s=0);let l=Math.round(s*100/a),d=(a-s).toFixed(0);return s>a&&(d=0),l>100&&(l=100),e.jsxs(Le,{children:[e.jsxs(Re,{children:[e.jsx(O,{dailyGoal:a,filledValue:s,bgColor:r}),e.jsx(Ee,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs("div",{children:[e.jsx(Ae,{children:i}),e.jsxs(Ie,{children:[e.jsxs("p",{children:["Goal: ",e.jsx(L,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(L,{children:d})]})]})]})]})},Ge=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,Ue=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding: 36px 40px;
    gap: 40px;
  }
`,_e=t.ul`
  display: flex;
  flex-direction: column;
  width: 216px;
  gap: 12px;
`,He=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;t.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;const Ne=t.div`
  position: relative;
  width: 168px;
  height: 168px;
`,W=t.li`
  display: flex;
`,Oe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`,qe=t.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
`,Ve=t.p`
  color: var(--primary-color-grey);
`,Ze=()=>{const i=`${m.palette.litegreen.main}`,r=`${m.palette.pink.main}`,a=`${m.palette.yellow.main}`,s=`${m.palette.grey.main}`,l=x(E),d=x(q),p=x(V),h=x(Z),g=x(de),w=x(pe),u=x(xe),y=x(he);return e.jsxs(Ge,{children:[e.jsx(He,{children:"Food"}),e.jsxs(Ue,{children:[e.jsxs(Ne,{children:[e.jsx(O,{dailyGoal:l,filledValue:g,bgColor:i}),e.jsxs(Oe,{children:[e.jsx(qe,{children:g||0}),e.jsx(Ve,{children:"calories"})]})]}),e.jsxs(_e,{children:[e.jsx(W,{children:e.jsx($,{title:"Carbonohidrates",bgColor:r,dailyGoal:d,filledValue:w})}),e.jsx(W,{children:e.jsx($,{title:"Protein",bgColor:a,dailyGoal:p,filledValue:u})}),e.jsx(W,{children:e.jsx($,{title:"Fat",bgColor:s,dailyGoal:h,filledValue:y})})]})]})]})},Je=t.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`,Ke=t.div`
  width: 300px;
  height: 266px;
  padding: 16px 12px 24px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }
`,Qe=t.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
  }
`,Xe=t.button`
  margin-top: 32px;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  outline: none;
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;

  color: var(--primary-color-black-two);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,Ye=t.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,et=t.input`
  width: 100%;
  margin-top: 12px;
  padding: 8px 10px;
  border: 1px solid var(--primary-color-green-lite);
  border-radius: 12px;
  background-color: transparent;
  color: var(--primary-color-white);

  &:focus {
    outline: none;
    border-color: var(--primary-color-green-lite);
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: var(--primary-color-grey);
  }
`,tt=t.button`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,rt=({isModalOpen:i,setIsModalOpen:r})=>{const[a,s]=b.useState(0),l=k(),d=p=>{p.preventDefault(),l(J({value:a})),r(!1)};return b.useEffect(()=>{const p=h=>{h.code==="Escape"&&r(!1)};return i?(document.addEventListener("keydown",p),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.removeEventListener("keydown",p),document.body.style.overflow="unset"}},[i,r]),e.jsx(Je,{onClick:()=>r(!1),children:e.jsxs(Ke,{onClick:p=>p.stopPropagation(),children:[e.jsx(Ye,{children:"Add water intake"}),e.jsxs(Qe,{onSubmit:d,children:[e.jsxs("label",{children:["How much water",e.jsx(et,{name:"waterIntake",type:"number",placeholder:"Enter milliliters",onChange:p=>s(Number(p.target.value)),value:a||"",min:1})]}),e.jsx(Xe,{type:"submit",children:"Confirm"}),e.jsx(tt,{type:"button",onClick:()=>r(!1),children:"Cancel"})]})]})})};_.register(oe,ae,se,le,H,N);const it={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},nt=({waterIntake:i})=>{const r={labels:["Intake"],datasets:[{label:"Water",data:[i],backgroundColor:`${m.palette.violet.main}`,hoverBackgroundColor:`${m.palette.violet.main}`,barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(ce,{data:r,options:it})},ot=i=>i.dailyWaterStatistics.consumedWater.value,at=i=>i.dailyWaterStatistics.consumedWater._id,st=t.div`
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,lt=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,ct=t.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  padding: 16px 12px;
  margin-top: 6px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    gap: 40px;
    padding: 24px 22px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 40px;
  }
`,dt=t.h4`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
`,I=t.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: var(--primary-color-grey);
`,pt=t.span`
  color: var(--primary-color-white);
`,xt=t.span`
  margin-right: 8px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  color: var(--primary-color-white);
`,ht=t.svg`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);

  @media screen and (min-width: 834px) {
    top: 24px;
    right: 24px;
    fill: var(--primary-color-grey);
    &:hover {
      stroke: var(--primary-color-green-lite);
    }
  }
`,gt=t.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-black-two);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    fill: var(--primary-color-white);
  }
`,mt=t.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--primary-color-black-one);
  background-color: var(--primary-color-green-lite);
  border-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,ut=t.div`
  position: relative;
  height: 192px;
  width: 80px;
  border-radius: 20px;
  padding: 8px;
  border: 1px solid var(--secondary-color-grey-one);
  background-color: var(--primary-color-black-one);
`,ft=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--primary-color-black-one);
`,wt=t.p`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,yt=()=>{const[i,r]=b.useState(!1),a=k(),s=x(at),l=x(G),d=x(ot),p=d<=l?Math.round(d*100/l):100;let h=l-d;d>l&&(h=0);const g={color:p>85?`${m.palette.greyone.main}`:`${m.palette.violet.main}`};return e.jsxs(st,{children:[e.jsx(lt,{children:"Water"}),e.jsxs(ct,{children:[e.jsx(ht,{width:"20px",height:"20px",onClick:()=>{a(K(s))},children:e.jsx("use",{href:`${f}#trash-delete`})}),e.jsx(ut,{children:e.jsxs(ft,{children:[e.jsx(nt,{waterIntake:p}),e.jsx(wt,{style:g,children:`${p}%`})]})}),e.jsxs("div",{children:[e.jsx(dt,{children:"Water consumption"}),e.jsxs(I,{children:[e.jsx(xt,{children:d}),"ml"]}),e.jsxs(I,{children:[e.jsx(pt,{children:"left:"})," ",`${h} ml`]}),e.jsxs(mt,{type:"button",onClick:()=>r(!0),children:[e.jsx(gt,{children:e.jsx("use",{href:`${f}#icon-add-converted`})}),"Add water intake"]})]})]}),i&&e.jsx(rt,{setIsModalOpen:r,isModalOpen:i})]})},bt=t.div`
  margin: 0 auto;
  max-width: 300px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,vt=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,jt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,kt=t.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`,Ct=t(U)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: var(--primary-color-grey);

  &:hover {
    color: var(--primary-color-green-lite);
  }
`,$t=t.svg`
  margin-left: 6px;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }
`,Wt=()=>e.jsxs(bt,{children:[e.jsxs(vt,{children:[e.jsx(kt,{children:"Today"}),e.jsxs(Ct,{to:"/dashboard",children:["On the way to the goal",e.jsx($t,{children:e.jsx("use",{href:`${f}#icon-arrowright`})})]})]}),e.jsxs(jt,{children:[e.jsx(Se,{}),e.jsx(yt,{}),e.jsx(Ze,{})]})]}),zt=t.div`
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`,Ft=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`,Bt=t.h2`
  color: var(--primary-color-white);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,Dt=t(U)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,Mt=t.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`,St=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`,Pt=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`,Tt=t.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 4px;
  @media screen and (min-width: 834px) {
    width: auto;
  }
`,A=t.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 4px;
  @media screen and (min-width: 834px) {
    /* min-width: 88px; */
  }
`,Rt=t.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Lt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,It=t.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
  cursor: pointer;
`,At=t.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: var(--primary-color-green-lite);
`,Et=t.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;
`,z=t.span`
  color: var(--primary-color-grey);
  font-weight: 500;
`,Gt=({meal:i,title:r,totalCarbs:a,totalProtein:s,totalFat:l,typefood:d,src:p})=>{const h=k(),g=j=>{h(X({userFood:{},typeFood:j}))},[w,u]=b.useState(!1),y=()=>u(!0),v=()=>u(!1);return e.jsxs(St,{children:[e.jsx(ge,{closeModal:v,stateModal:w,typefood:d}),e.jsxs(Lt,{children:[e.jsx(me,{src:p}),e.jsx(Rt,{children:Q(r)})]}),e.jsx(Pt,{children:(i==null?void 0:i.length)>0?e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{children:["Carbonohidrates: ",e.jsxs(z,{children:[" ",a]})]}),e.jsxs(A,{children:["Protein: ",e.jsx(z,{children:s})]}),e.jsxs(A,{children:["Fat: ",e.jsx(z,{children:l})]}),e.jsx(It,{onClick:()=>g(r.toLowerCase()),children:e.jsx("use",{href:`${f}#trash-delete`})})]}):e.jsxs(Et,{id:d,"data-site":d,onClick:y,children:[e.jsx(ue,{children:"Record your meal"}),e.jsx(At,{children:e.jsx("use",{href:`${f}#icon-add-converted`})})]})})]})},Ut=[ve,je,ke,Ce],_t=()=>{const i=Y(),r=x(fe),a=x(we),s=x(ye),l=x(be),d={breakfast:r,lunch:a,dinner:s,snack:l},p=["breakfast","lunch","dinner","snack"];let h=0,g=0,w=0,u=0,y=0,v=0,j=0,F=0,B=0,D=0,M=0,S=0;(r==null?void 0:r.length)>0&&(h=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),g=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),w=r.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0)),(a==null?void 0:a.length)>0&&(u=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),y=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),v=a.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0)),(s==null?void 0:s.length)>0&&(j=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),F=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0),B=s.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0)),(l==null?void 0:l.length)>0&&(D=l.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.fat)},0),M=l.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.protein)},0),S=l.reduce((o,c)=>{var n;return o+((n=c.nutrition)==null?void 0:n.carbogidrate)},0));const C={breakfast:{carbs:w,protein:g,fat:h},lunch:{carbs:v,protein:y,fat:u},dinner:{carbs:F,protein:j,fat:B},snack:{carbs:S,protein:M,fat:D}};return e.jsxs(zt,{children:[e.jsxs(Ft,{children:[e.jsx(Bt,{children:"Diary"}),e.jsx(Dt,{to:"/diary",state:{from:i},children:"See more"})]}),e.jsx(Mt,{children:p.map((o,c)=>e.jsx(Gt,{meal:d[o],typefood:o,title:o,totalCarbs:C[o].carbs,totalProtein:C[o].protein,totalFat:C[o].fat,src:Ut[c]},o))})]})},Ht=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;

  @media screen and (min-width: 834px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 20px;
    gap: 138px;
    padding-bottom: 52px;
  }
`,Zt=()=>{const i=k();return b.useEffect(()=>{i(ee()),i(te()),i(re())},[i]),e.jsxs(e.Fragment,{children:[e.jsx(Wt,{}),e.jsxs(Ht,{children:[e.jsx(_t,{}),e.jsx($e,{})]})]})};export{Zt as default};
