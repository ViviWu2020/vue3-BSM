import{c as O,Q as A,o as w,a3 as M,ae as x}from"./@vue.df00f743.js";import{c as S,a as I}from"./vue-router.29007397.js";import{E as C}from"./@element-plus.425633ec.js";import{a as R}from"./js-cookie.31874410.js";import{c as D}from"./vuex.aa1ad534.js";import{M as i}from"./mockjs.7201612c.js";import{E as P}from"./element-plus.ca2a7cce.js";import{a as T}from"./axios.754b77ca.js";import"./dayjs.55c8a98e.js";import"./@vueuse.a0ed1450.js";import"./lodash-es.ee27b8bc.js";import"./@ctrl.82a509e0.js";import"./async-validator.fb49d0f5.js";import"./@popperjs.36402333.js";import"./form-data.2b153385.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const N=(e,t)=>{const o=e.__vccOpts||e;for(const[a,r]of t)o[a]=r;return o},J={},$={id:"app"};function H(e,t){const o=M("router-view");return w(),O("div",$,[A(o)])}const V=N(J,[["render",H],["__scopeId","data-v-3ba6b532"]]),q="modulepreload",j=function(e,t){return new URL(e,t).href},E={},k=function(t,o,a){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=j(n,a),n in E)return;E[n]=!0;const s=n.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!a)for(let f=r.length-1;f>=0;f--){const g=r[f];if(g.href===n&&(!s||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":q,s||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),s)return new Promise((f,g)=>{l.addEventListener("load",f),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},W=[{path:"/",name:"home1",redirect:"/home",component:()=>k(()=>import("./Main.fc72c23b.js"),["./Main.fc72c23b.js","./element-plus.ca2a7cce.js","./@vue.df00f743.js","./@vueuse.a0ed1450.js","./@element-plus.425633ec.js","./lodash-es.ee27b8bc.js","./@ctrl.82a509e0.js","./async-validator.fb49d0f5.js","./@popperjs.36402333.js","./element-plus.24050a42.css","./vue-router.29007397.js","./vuex.aa1ad534.js","./js-cookie.31874410.js","./mockjs.7201612c.js","./dayjs.55c8a98e.js","./axios.754b77ca.js","./form-data.2b153385.js","./Main.cbf26246.css"],import.meta.url),children:[]},{path:"/login",name:"login",component:()=>k(()=>import("./Login.4f598a23.js"),["./Login.4f598a23.js","./element-plus.ca2a7cce.js","./@vue.df00f743.js","./@vueuse.a0ed1450.js","./@element-plus.425633ec.js","./lodash-es.ee27b8bc.js","./@ctrl.82a509e0.js","./async-validator.fb49d0f5.js","./@popperjs.36402333.js","./element-plus.24050a42.css","./vue-router.29007397.js","./vuex.aa1ad534.js","./js-cookie.31874410.js","./mockjs.7201612c.js","./dayjs.55c8a98e.js","./axios.754b77ca.js","./form-data.2b153385.js","./Login.b25cc062.css"],import.meta.url)}],K=S("/vue3-BSM/"),y=I({history:K,routes:W}),b=D({state:{isCollapse:!1,currentMenu:null,tabsList:[{path:"/",name:"home",label:"\u9996\u9875",icon:"home"}],menu:[],token:""},mutations:{updateIsCollapse(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){t.name==="home"?e.currentMenu=null:(e.currentMenu=t,e.tabsList.findIndex(a=>a.name===t.name)===-1&&e.tabsList.push(t))},closeTab(e,t){let o=e.tabsList.findIndex(a=>a.name===t.name);e.tabsList.splice(o,1)},setMenu(e,t){e.menu=t,localStorage.setItem("menu",JSON.stringify(t))},addMenu(e,t){if(!localStorage.getItem("menu"))return;const o=JSON.parse(localStorage.getItem("menu"));e.menu=o;const a=[];o.forEach(r=>{if(r.children)r.children=r.children.map(n=>{let s=`../views/${n.url}`;return n.component=()=>k(()=>import(s),[],import.meta.url),n}),a.push(...r.children);else{let n=`../views/${r.url}`;r.component=()=>k(()=>import(n),[],import.meta.url),a.push(r)}}),a.forEach(r=>{t.addRoute("home1",r)})},cleanMenu(e){e.menu=[],localStorage.removeItem("menu")},setToken(e,t){e.token=t,R.set("token",t)},cleanToken(e){e.token="",R.remove("token")},getToken(e){e.token=e.token||R.get("token")}}}),F={getHomeData:()=>({code:200,data:{tableData:[{name:"vivo",todayBuy:500,monthBuy:3500,totalBuy:8800},{name:"oppo",todayBuy:300,monthBuy:2200,totalBuy:22200},{name:"\u82F9\u679C",todayBuy:800,monthBuy:300,totalBuy:14e3},{name:"\u5C0F\u7C73",todayBuy:1200,monthBuy:450,totalBuy:33e3},{name:"\u4E09\u661F",todayBuy:300,monthBuy:5400,totalBuy:12e3},{name:"\u9B45\u65CF",todayBuy:350,monthBuy:1500,totalBuy:32e3}]}})};function L(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let u=[];const Q=200;for(let e=0;e<Q;e++)u.push(i.mock({id:i.Random.guid(),name:i.Random.cname(),addr:i.mock("@county(true)"),"age|18-60":1,birth:i.Random.date(),sex:i.Random.integer(0,1)}));const _={getUserList:e=>{const{name:t,page:o=1,limit:a=20}=L(e.url),r=u.filter(s=>!(t&&s.name.indexOf(t)===-1&&s.addr.indexOf(t)===-1)),n=r.filter((s,d)=>d<a*o&&d>=a*(o-1));return{code:200,data:{count:r.length,list:n}}},createUser:e=>{const{name:t,addr:o,age:a,birth:r,sex:n}=JSON.parse(e.body);return u.unshift({id:i.Random.guid(),name:t,addr:o,age:a,birth:r,sex:n}),{code:200,data:{message:"\u6DFB\u52A0\u6210\u529F"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(u=u.filter(o=>o.id!==t),{code:200,message:"\u5220\u9664\u6210\u529F"}):{code:-999,message:"\u53C2\u6570\u4E0D\u6B63\u786E"}},batchremove:e=>{let{ids:t}=L(e.url);return t=t.split(","),u=u.filter(o=>!t.includes(o.id)),{code:200,data:{message:"\u6279\u91CF\u5220\u9664\u6210\u529F"}}},updateUser:e=>{const{id:t,name:o,addr:a,age:r,birth:n,sex:s}=JSON.parse(e.body),d=parseInt(s);return u.some(m=>{if(m.id===t)return m.name=o,m.addr=a,m.age=r,m.birth=n,m.sex=d,!0}),{code:200,data:{message:"\u7F16\u8F91\u6210\u529F"}}}},z={getMenu:e=>{const{username:t,password:o}=JSON.parse(e.body);return t==="admin"&&o==="admin"?{code:200,data:{menu:[{path:"/home",name:"home",label:"\u9996\u9875",icon:"house",url:"Home.vue"},{path:"/mall",name:"mall",label:"\u5546\u54C1\u7BA1\u7406",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"\u7528\u6237\u7BA1\u7406",icon:"user",url:"User.vue"},{label:"\u5176\u4ED6",name:"other",icon:"location",children:[{path:"/page1",name:"page1",label:"\u9875\u97621",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"\u9875\u97622",icon:"setting",url:"PageTwo.vue"}]}],token:i.Random.guid(),message:"\u83B7\u53D6\u6210\u529F"}}:t==="xiaoxiao"&&o==="xiaoxiao"?{code:200,data:{menu:[{path:"/home",name:"home",label:"\u9996\u9875",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"\u5546\u54C1\u7BA1\u7406",icon:"video-play",url:"Mall.vue"}],token:i.Random.guid(),message:"\u83B7\u53D6\u6210\u529F"}}:{code:-999,data:{message:"\u5BC6\u7801\u9519\u8BEF"}}}};i.mock("/home/getData",F.getHomeData);i.mock(/user\/getUser/,"get",_.getUserList);i.mock(/user\/addUser/,"post",_.createUser);i.mock(/user\/editUser/,"post",_.updateUser);i.mock(/user\/deleteUser/,"get",_.deleteUser);i.mock(/permission\/getMenu/,"post",z.getMenu);const U="production",G={development:{baseApi:"/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"},test:{baseApi:"//test.com/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"},prod:{baseApi:"//prod/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"}},p={env:U,mock:!0,...G[U]},B="\u7F51\u7EDC\u8BF7\u6C42\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",h=T.create({baseURL:p.baseApi});h.interceptors.request.use(e=>e);h.interceptors.response.use(e=>{const{code:t,data:o,msg:a}=e.data;return t===200?o:(P.error(a||B),Promise.reject(a||B))});function c(e){e.method=e.method||"get",e.method.toLowerCase()==="get"&&(e.params=e.data);let t=p.mock;return typeof e.mock<"u"&&(t=e.mock),p.env==="prod"?h.defaults.baseURL=p.baseApi:h.defaults.baseURL=t?p.mockApi:p.baseApi,h(e)}const X={getTableData(e){return c({url:"/home/getTableData",method:"get",mock:!0,data:e})},getCountData(){return c({url:"/home/getCountData",method:"get",mock:!0})},getEchartData(){return c({url:"/home/getEchartData",method:"get",mock:!0})},getUserData(e){return c({url:"/user/getUser",method:"get",mock:!1,data:e})},addUser(e){return c({url:"/user/addUser",method:"post",mock:!1,data:e})},editUser(e){return c({url:"/user/editUser",method:"post",mock:!1,data:e})},deleteUser(e){return c({url:"/user/deleteUser",method:"get",mock:!1,data:e})},getMenu(e){return c({url:"/permission/getMenu",method:"post",mock:!1,data:e})}},v=x(V);for(const[e,t]of Object.entries(C))v.component(e,t);v.config.globalProperties.$api=X;b.commit("addMenu",y);function Y(e){return!!y.getRoutes().filter(o=>o.path===e).length}y.beforeEach((e,t,o)=>{b.commit("getToken"),!b.state.token&&e.name!=="login"?o({name:"login"}):Y(e.path)?o():o({name:"home"})});v.use(y).use(b);v.mount("#app");export{N as _};
