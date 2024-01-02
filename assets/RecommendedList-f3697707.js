import{s as i,j as e,ay as f,i as s,r as c,ao as l,n as w}from"./index-97c9a303.js";const u=i.li`
  border-radius: 12px;
  background: var(--primary-color-black-two);

  display: flex;
  gap: 20px;

  width: 100%;
  padding: 20px 80px 20px 24px;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,v=i.img`
  width: 46px;
  height: 46px;
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,j=i.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  width: 150px;
`,R=i.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 140px;
`,b=i.p`
  line-height: 1.4;
`,L=i.p`
  color: var(--primary-color-grey);
  font-weight: 500;
  line-height: 1.4;
`,p=({name:r,amount:a,img:n,calories:t})=>e.jsxs(u,{children:[e.jsx(v,{src:n,alt:"img"}),e.jsxs(y,{children:[e.jsx(j,{children:r}),e.jsxs(R,{children:[e.jsx(b,{children:a}),e.jsxs(L,{children:[t," calories"]})]})]})]}),x=r=>r.recommendedFoods.isLoading,m=r=>r.recommendedFoods.error,h=r=>r.recommendedFoods.recomendedFoods,T=i.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`,S=i.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  align-items: center;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
    align-items: flex-start;
  }
`,I=i.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,O=i.img`
  width: 300px;
  height: 312px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
  }
`,C=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,z=i.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.4;
  }
`,k=i(f)`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--primary-color-grey);
  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`,E=i.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  align-items: center;

  &:hover,
  &:focus {
    fill: var(--primary-color-green-lite);
  }
`,F=i.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 3px;

  transition: color, var(--transition-dur-and-func);
  transition: fill, var(--transition-dur-and-func);
`,g=i.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
  }
`,P=i.div`
  margin: 0 auto;
  padding: 30px 0;
`,B=i.button`
  background-color: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  padding: 8px 10px;
  border-radius: 12px;
  border: none;
  width: 122px;
  height: 36px;
  text-align: center;
  font-weight: 500;
  transition: background-color, var(--transition-dur-and-func);

  &:hover {
    background-color: var(--secondary-color-yellow);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,N=()=>{const r=s(h),a=s(x),n=s(m),[t,d]=c.useState(2);return c.useEffect(()=>{const o=()=>{window.innerWidth>=834?d(4):d(2)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),a?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):n?e.jsxs("div",{children:["Error: ",n]}):e.jsxs(C,{children:[e.jsx(z,{children:"Recommended food"}),e.jsx(g,{className:"rec-list",children:r.slice(0,t).map(o=>e.jsx(p,{...o},o.name))}),e.jsx(F,{children:e.jsxs(k,{to:"/recommended-food",children:["See more",e.jsx(E,{children:e.jsx("use",{href:`${w}#icon-arrowright`})})]})})]})},M=({numberOfCardsToRender:r})=>{const a=s(h),n=s(x),t=s(m);return n?e.jsx(l,{color:"var(--primary-color-green-lite)",cssOverride:{margin:"30vh auto 0 auto"}}):t?e.jsxs("div",{children:["Error: ",t]}):e.jsx(g,{children:a.slice(0,r).map(d=>e.jsx(p,{...d},d.name))})};export{P as B,N as R,B as S,T as a,I as b,S as c,O as d,M as e,h as s};
