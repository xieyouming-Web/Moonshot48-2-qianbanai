var f=(i,l,a)=>new Promise((c,x)=>{var d=o=>{try{r(a.next(o))}catch(h){x(h)}},p=o=>{try{r(a.throw(o))}catch(h){x(h)}},r=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,p);r((a=a.apply(i,l)).next())});import{j as e,O as w}from"./index-5a8bf324.js";import{d as S,r as u,L as I}from"./vendor-2240c9f5.js";import{F as g,b as y,o as b,B as j,a as n}from"./ui-2716f190.js";const k=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})}),C=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})}),z=()=>e.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"#4F7DFE",children:e.jsx("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"})}),t={authContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"20px",backgroundColor:"#f5f7fa"},authCard:{width:"100%",maxWidth:"400px",padding:"30px",borderRadius:"12px",backgroundColor:"white",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},authLogo:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"32px"},authTitle:{fontSize:"24px",fontWeight:"bold",marginTop:"16px",color:"#333"},authForm:{width:"100%"},formGroup:{marginBottom:"20px"},authInput:{fontSize:"16px",height:"50px"},inputPrefix:{marginRight:"10px",color:"#999"},loginOptions:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},rememberText:{fontSize:"14px"},forgotPassword:{fontSize:"14px",color:"#4F7DFE"},authBtn:{height:"46px",fontSize:"16px"},guestBtn:{height:"46px",fontSize:"16px",marginTop:"16px"},authFooter:{marginTop:"24px",textAlign:"center",fontSize:"14px",color:"#666"},registerLink:{color:"#4F7DFE",textDecoration:"none"}},T=()=>{const i=S(),[l,a]=u.useState(""),[c,x]=u.useState(""),[d,p]=u.useState(!0),[r,o]=u.useState(!1),h=()=>f(void 0,null,function*(){if(!l.trim()){n.show({content:"请输入手机号",duration:1500});return}if(!c.trim()){n.show({content:"请输入密码",duration:1500});return}localStorage.setItem("rememberMe",d.toString()),o(!0);try{const s=yield w.post("/api/auth/login",{phone:l.trim(),password:c.trim()});s.data.success?(d?(localStorage.setItem("token",s.data.data.token),localStorage.setItem("user",JSON.stringify(s.data.data.user)),localStorage.setItem("userId",s.data.data.user.id.toString())):(sessionStorage.setItem("token",s.data.data.token),sessionStorage.setItem("user",JSON.stringify(s.data.data.user)),sessionStorage.setItem("userId",s.data.data.user.id.toString())),n.show({icon:"success",content:"登录成功",duration:1500}),s.data.data.user.role==="admin"?i("/admin/dashboard"):i("/")):n.show({icon:"fail",content:s.data.message||"登录失败",duration:1500})}catch(s){console.error("登录失败:",s);let m="登录失败";s.response&&s.response.data&&s.response.data.message&&(m=s.response.data.message),n.show({icon:"fail",content:m,duration:2e3})}finally{o(!1)}}),v=()=>{n.show({content:"忘记密码功能即将上线",duration:1500})};return e.jsx("div",{style:t.authContainer,children:e.jsxs("div",{style:t.authCard,children:[e.jsxs("div",{style:t.authLogo,children:[e.jsx(z,{}),e.jsx("h1",{style:t.authTitle,children:"AI牵伴"})]}),e.jsxs(g,{layout:"vertical",style:t.authForm,children:[e.jsx(g.Item,{label:"手机号",style:t.formGroup,children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:t.inputPrefix,children:e.jsx(k,{})}),e.jsx(y,{style:t.authInput,placeholder:"请输入手机号码",value:l,onChange:a,type:"tel",clearable:!0})]})}),e.jsx(g.Item,{label:"密码",style:t.formGroup,children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:t.inputPrefix,children:e.jsx(C,{})}),e.jsx(y,{style:t.authInput,placeholder:"请输入密码",value:c,onChange:x,type:"password",clearable:!0})]})}),e.jsxs("div",{style:t.loginOptions,children:[e.jsx(b,{checked:d,onChange:p,children:e.jsx("span",{style:t.rememberText,children:"记住我"})}),e.jsx("a",{style:t.forgotPassword,onClick:v,children:"忘记密码？"})]}),e.jsx(j,{style:t.authBtn,color:"primary",block:!0,size:"large",onClick:h,loading:r,disabled:r,children:"登录"}),e.jsx(j,{style:t.guestBtn,block:!0,size:"large",onClick:()=>i("/"),children:"游客模式"})]}),e.jsxs("div",{style:t.authFooter,children:["还没有账号？ ",e.jsx(I,{to:"/register",style:t.registerLink,children:"立即注册"})]})]})})};export{T as default};
