import{c as A,T as B,o as I,ae as M,ap as P}from"./@vue.a2b9f58e.js";import{c as T,a as D}from"./vue-router.035f3658.js";import{E as x}from"./@element-plus.e1f7ef58.js";import{a as E}from"./js-cookie.31874410.js";import{c as S}from"./vuex.f294759a.js";import{M as i}from"./mockjs.cf4a13f7.js";import{E as C}from"./element-plus.b62f9210.js";import{a as N}from"./axios.754b77ca.js";import"./dayjs.37d5d2cb.js";import"./@vueuse.f6cb2060.js";import"./lodash-es.26478009.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./form-data.2b153385.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const V=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o},H={},J={id:"app"};function $(e,t){const o=M("router-view");return I(),A("div",J,[B(o)])}const j=V(H,[["render",$],["__scopeId","data-v-3ba6b532"]]),q="modulepreload",W=function(e,t){return new URL(e,t).href},L={},m=function(t,o,n){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(a=>{if(a=W(a,n),a in L)return;L[a]=!0;const s=a.endsWith(".css"),p=s?'[rel="stylesheet"]':"";if(!!n)for(let h=r.length-1;h>=0;h--){const _=r[h];if(_.href===a&&(!s||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":q,s||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),s)return new Promise((h,_)=>{d.addEventListener("load",h),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},K=[{path:"/",name:"home1",redirect:"/home",component:()=>m(()=>import("./Main.4faeac5b.js"),["./Main.4faeac5b.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./vue-router.035f3658.js","./vuex.f294759a.js","./js-cookie.31874410.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./Main.cbf26246.css"],import.meta.url),children:[]},{path:"/login",name:"login",component:()=>m(()=>import("./Login.9cf59584.js"),["./Login.9cf59584.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./vue-router.035f3658.js","./vuex.f294759a.js","./js-cookie.31874410.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./Login.b25cc062.css"],import.meta.url)}],F=T(),b=D({history:F,routes:K}),R=Object.assign({"../views/Home.vue":()=>m(()=>import("./Home.b72a130c.js"),["./Home.b72a130c.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./echarts.985aa5ec.js","./tslib.60310f1a.js","./zrender.ec6a2323.js","./vue-router.035f3658.js","./js-cookie.31874410.js","./vuex.f294759a.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./Home.0c7ff2c6.css"],import.meta.url),"../views/Login.vue":()=>m(()=>import("./Login.9cf59584.js"),["./Login.9cf59584.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./vue-router.035f3658.js","./vuex.f294759a.js","./js-cookie.31874410.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./Login.b25cc062.css"],import.meta.url),"../views/Main.vue":()=>m(()=>import("./Main.4faeac5b.js"),["./Main.4faeac5b.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./vue-router.035f3658.js","./vuex.f294759a.js","./js-cookie.31874410.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./Main.cbf26246.css"],import.meta.url),"../views/Mall.vue":()=>m(()=>import("./Mall.16dae6aa.js"),["./Mall.16dae6aa.js","./@vue.a2b9f58e.js","./vue-router.035f3658.js","./@element-plus.e1f7ef58.js","./js-cookie.31874410.js","./vuex.f294759a.js","./mockjs.cf4a13f7.js","./dayjs.37d5d2cb.js","./element-plus.b62f9210.js","./@vueuse.f6cb2060.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./axios.754b77ca.js","./form-data.2b153385.js"],import.meta.url),"../views/PageOne.vue":()=>m(()=>import("./PageOne.74d41da6.js"),["./PageOne.74d41da6.js","./@vue.a2b9f58e.js","./vue-router.035f3658.js","./@element-plus.e1f7ef58.js","./js-cookie.31874410.js","./vuex.f294759a.js","./mockjs.cf4a13f7.js","./dayjs.37d5d2cb.js","./element-plus.b62f9210.js","./@vueuse.f6cb2060.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./axios.754b77ca.js","./form-data.2b153385.js"],import.meta.url),"../views/PageTwo.vue":()=>m(()=>import("./PageTwo.241a4360.js"),["./PageTwo.241a4360.js","./@vue.a2b9f58e.js","./vue-router.035f3658.js","./@element-plus.e1f7ef58.js","./js-cookie.31874410.js","./vuex.f294759a.js","./mockjs.cf4a13f7.js","./dayjs.37d5d2cb.js","./element-plus.b62f9210.js","./@vueuse.f6cb2060.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./axios.754b77ca.js","./form-data.2b153385.js"],import.meta.url),"../views/User.vue":()=>m(()=>import("./User.8038ac6e.js"),["./User.8038ac6e.js","./element-plus.b62f9210.js","./@vue.a2b9f58e.js","./dayjs.37d5d2cb.js","./@vueuse.f6cb2060.js","./@element-plus.e1f7ef58.js","./lodash-es.26478009.js","./async-validator.fb49d0f5.js","./@ctrl.82a509e0.js","./@popperjs.36402333.js","./escape-html.e5dfadb9.js","./normalize-wheel-es.8aeb3683.js","./element-plus.ece55772.css","./vue-router.035f3658.js","./js-cookie.31874410.js","./vuex.f294759a.js","./mockjs.cf4a13f7.js","./axios.754b77ca.js","./form-data.2b153385.js","./User.d688cd19.css"],import.meta.url)}),k=S({state:{isCollapse:!1,currentMenu:null,tabsList:[{path:"/",name:"home",label:"\u9996\u9875",icon:"home"}],menu:[],token:""},mutations:{updateIsCollapse(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){t.name==="home"?e.currentMenu=null:(e.currentMenu=t,e.tabsList.findIndex(n=>n.name===t.name)===-1&&e.tabsList.push(t))},closeTab(e,t){let o=e.tabsList.findIndex(n=>n.name===t.name);e.tabsList.splice(o,1)},setMenu(e,t){e.menu=t,localStorage.setItem("menu",JSON.stringify(t))},addMenu(e,t){if(!localStorage.getItem("menu"))return;const o=JSON.parse(localStorage.getItem("menu"));e.menu=o;const n=[];o.forEach(r=>{r.children?(r.children=r.children.map(a=>(a.component=R[`../views/${a.url}.vue`],a)),n.push(...r.children)):(r.component=R[`../views/${r.url}.vue`],n.push(r))}),n.forEach(r=>{t.addRoute("home1",r)})},cleanMenu(e){e.menu=[],localStorage.removeItem("menu")},setToken(e,t){e.token=t,E.set("token",t)},cleanToken(e){e.token="",E.remove("token")},getToken(e){e.token=e.token||E.get("token")}}}),z={getHomeData:()=>({code:200,data:{tableData:[{name:"vivo",todayBuy:500,monthBuy:3500,totalBuy:8800},{name:"oppo",todayBuy:300,monthBuy:2200,totalBuy:22200},{name:"\u82F9\u679C",todayBuy:800,monthBuy:300,totalBuy:14e3},{name:"\u5C0F\u7C73",todayBuy:1200,monthBuy:450,totalBuy:33e3},{name:"\u4E09\u661F",todayBuy:300,monthBuy:5400,totalBuy:12e3},{name:"\u9B45\u65CF",todayBuy:350,monthBuy:1500,totalBuy:32e3}]}})};function O(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let c=[];const G=200;for(let e=0;e<G;e++)c.push(i.mock({id:i.Random.guid(),name:i.Random.cname(),addr:i.mock("@county(true)"),"age|18-60":1,birth:i.Random.date(),sex:i.Random.integer(0,1)}));const y={getUserList:e=>{const{name:t,page:o=1,limit:n=20}=O(e.url),r=c.filter(s=>!(t&&s.name.indexOf(t)===-1&&s.addr.indexOf(t)===-1)),a=r.filter((s,p)=>p<n*o&&p>=n*(o-1));return{code:200,data:{count:r.length,list:a}}},createUser:e=>{const{name:t,addr:o,age:n,birth:r,sex:a}=JSON.parse(e.body);return c.unshift({id:i.Random.guid(),name:t,addr:o,age:n,birth:r,sex:a}),{code:200,data:{message:"\u6DFB\u52A0\u6210\u529F"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(c=c.filter(o=>o.id!==t),{code:200,message:"\u5220\u9664\u6210\u529F"}):{code:-999,message:"\u53C2\u6570\u4E0D\u6B63\u786E"}},batchremove:e=>{let{ids:t}=O(e.url);return t=t.split(","),c=c.filter(o=>!t.includes(o.id)),{code:200,data:{message:"\u6279\u91CF\u5220\u9664\u6210\u529F"}}},updateUser:e=>{const{id:t,name:o,addr:n,age:r,birth:a,sex:s}=JSON.parse(e.body),p=parseInt(s);return c.some(l=>{if(l.id===t)return l.name=o,l.addr=n,l.age=r,l.birth=a,l.sex=p,!0}),{code:200,data:{message:"\u7F16\u8F91\u6210\u529F"}}}},Q={getMenu:e=>{const{username:t,password:o}=JSON.parse(e.body);return t==="admin"&&o==="admin"?{code:200,data:{menu:[{path:"/home",name:"home",label:"\u9996\u9875",icon:"house",url:"Home"},{path:"/mall",name:"mall",label:"\u5546\u54C1\u7BA1\u7406",icon:"video-play",url:"Mall"},{path:"/user",name:"user",label:"\u7528\u6237\u7BA1\u7406",icon:"user",url:"User"},{label:"\u5176\u4ED6",name:"other",icon:"location",children:[{path:"/page1",name:"page1",label:"\u9875\u97621",icon:"setting",url:"PageOne"},{path:"/page2",name:"page2",label:"\u9875\u97622",icon:"setting",url:"PageTwo"}]}],token:i.Random.guid(),message:"\u83B7\u53D6\u6210\u529F"}}:t==="xiaoxiao"&&o==="xiaoxiao"?{code:200,data:{menu:[{path:"/home",name:"home",label:"\u9996\u9875",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"\u5546\u54C1\u7BA1\u7406",icon:"video-play",url:"Mall.vue"}],token:i.Random.guid(),message:"\u83B7\u53D6\u6210\u529F"}}:{code:-999,data:{message:"\u5BC6\u7801\u9519\u8BEF"}}}};i.mock("/home/getData",z.getHomeData);i.mock(/user\/getUser/,"get",y.getUserList);i.mock(/user\/addUser/,"post",y.createUser);i.mock(/user\/editUser/,"post",y.updateUser);i.mock(/user\/deleteUser/,"get",y.deleteUser);i.mock(/permission\/getMenu/,"post",Q.getMenu);const w="production",X={development:{baseApi:"/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"},test:{baseApi:"//test.com/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"},prod:{baseApi:"//prod/api",mockApi:"https://www.fastmock.site/mock/ab00276dbd38324663d291627d19ffbd/api"}},f={env:w,mock:!0,...X[w]},U="\u7F51\u7EDC\u8BF7\u6C42\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",g=N.create({baseURL:f.baseApi});g.interceptors.request.use(e=>e);g.interceptors.response.use(e=>{const{code:t,data:o,msg:n}=e.data;return t===200?o:(C.error(n||U),Promise.reject(n||U))});function u(e){e.method=e.method||"get",e.method.toLowerCase()==="get"&&(e.params=e.data);let t=f.mock;return typeof e.mock<"u"&&(t=e.mock),f.env==="prod"?g.defaults.baseURL=f.baseApi:g.defaults.baseURL=t?f.mockApi:f.baseApi,g(e)}const Y={getTableData(e){return u({url:"/home/getTableData",method:"get",mock:!0,data:e})},getCountData(){return u({url:"/home/getCountData",method:"get",mock:!0})},getEchartData(){return u({url:"/home/getEchartData",method:"get",mock:!0})},getUserData(e){return u({url:"/user/getUser",method:"get",mock:!1,data:e})},addUser(e){return u({url:"/user/addUser",method:"post",mock:!1,data:e})},editUser(e){return u({url:"/user/editUser",method:"post",mock:!1,data:e})},deleteUser(e){return u({url:"/user/deleteUser",method:"get",mock:!1,data:e})},getMenu(e){return u({url:"/permission/getMenu",method:"post",mock:!1,data:e})}},v=P(j);for(const[e,t]of Object.entries(x))v.component(e,t);v.config.globalProperties.$api=Y;k.commit("addMenu",b);function Z(e){return!!b.getRoutes().filter(o=>o.path===e).length}b.beforeEach((e,t,o)=>{k.commit("getToken"),!k.state.token&&e.name!=="login"?o({name:"login"}):Z(e.path)?o():o({name:"home"})});v.use(b).use(k);v.mount("#app");export{V as _};
