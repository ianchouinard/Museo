(this.webpackJsonplibrarian=this.webpackJsonplibrarian||[]).push([[0],{247:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(19),i=n.n(c),l=(n(46),n(47),n(9)),s=n(7),m={viewWrapper:{height:"100vh",width:"100%",overflow:"hidden;"},componentViewLayout:{position:"relative",display:"flex",height:"calc(100vh - 60px)","& iframe":{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"none",overflow:"scroll"},"&.stacked":{flexDirection:"column"}},render:{position:"relative",flexGrow:"1",background:"#fff"},renderInner:{position:"relative",padding:"0 10px",background:"#fff",width:"100%",height:"100%",borderRadius:"4px"},renderSize:{fontFamily:"sans-serif",position:"absolute",top:"20px",right:"20px",background:"rgba(0,0,0,.5)",color:"#fff",padding:"5px",borderRadius:"3px"},controls:{background:"#f2f2f2",borderLeft:"2px solid #3F7FBF",boxShadow:"rgba(0, 0, 0, 0.10) -3px 0px 5px 0px","&.stacked":{width:"100% !important",height:"auto",minHeight:"100px",borderLeft:"none",borderTop:"2px solid #3F7FBF",boxShadow:"rgba(0, 0, 0, 0.10) 0px -3px 5px 0px"},"&.col-layout":{height:"100% !important"}}},p=n(12),u={componentControls:{fontFamily:"sans-serif"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",minHeight:"80px",overflowY:"auto"},title:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#ddd",color:"#282828",padding:"20px",marginLeft:"1px",fontSize:"21px"},orientation:{display:"flex","& div":{display:"flex",alignItems:"center",justifyContent:"center",width:"25px",height:"25px",marginLeft:"7px",background:"#f1f1f1",fontSize:"18px",borderRadius:"3px",cursor:"pointer","&.active":{background:"#3F7FBF",color:"#fff"}}},description:{fontSize:"14px",lineHeight:"21px",padding:"20px 20px 0 20px"},markup:{marginTop:"30px",width:"calc(100% - 45px)",marginLeft:"20px","&.stacked":{marginTop:"10px",marginBottom:"10px",marginRight:"20px",width:"auto",flexGrow:"1"}},stackedPanel:{display:"flex","& div:first-of-type":{maxWidth:"300px"}},resizeIndicator:{position:"absolute",top:"50%",left:"-10px",marginTop:"-20px",height:"20px",width:"20px",display:"flex",alignItems:"center",justifyContent:"center",background:"#3F7FBF",color:"#fff",borderRadius:"2px",fontSize:"16px","& span":{transform:"translateY(-2px)"},"&.stacked":{height:"25px",top:"-13px",left:"50%",marginLeft:"-20px",marginTop:"0","& span":{transform:"translateY(-1px)"}}}},d=n(26),f=n.n(d),h=n(27),x=n.n(h),g=n(28),b=n.n(g),v=n(29),E=n.n(v),j=n(30),y=n.n(j),N=Object(s.a)(u)((function(e){var t=e.classes,n=e.componentName,a=e.stacked,c=e.onOrientationChange,i=e.component,s=Object(o.useState)(""),m=Object(l.a)(s,2),p=m[0],u=m[1];return Object(o.useEffect)((function(){var e=!0;return fetch("/".concat(n,".html")).then((function(e){return e.text()})).then((function(t){e&&u(t)})),function(){e=!1}}),[n]),r.a.createElement("div",{className:t.componentControls},r.a.createElement("div",{className:t.inner},r.a.createElement("div",{className:t.title},r.a.createElement("span",null,i.name),r.a.createElement("div",{className:t.orientation},r.a.createElement("div",{tabIndex:"0",role:"button",title:"Controls on right",className:a?"":"active",onClick:function(){c("col")}},r.a.createElement(E.a,{size:15})),r.a.createElement("div",{tabIndex:"0",role:"button",title:"Controls on bottom",className:a?"active":"",onClick:function(){c("stacked")}},r.a.createElement(y.a,{size:15})))),r.a.createElement("div",{className:a?t.stackedPanel:""},Boolean(i.description)&&r.a.createElement("div",{className:t.description},i.description),r.a.createElement("div",{className:t.markup+(a?" stacked":"")},r.a.createElement(f.a,{language:"html"},p)))),!a&&r.a.createElement("div",{className:t.resizeIndicator},r.a.createElement(x.a,null)),a&&r.a.createElement("div",{className:t.resizeIndicator+" stacked"},r.a.createElement(b.a,null)))})),k=n(31),w={header:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"63px",background:"#f6f6f6",position:"relative",zIndex:"5",fontFamily:"sans-serif",boxShadow:"0px 3px 5px 0px rgba(0,0,0,0.15)",color:"#333"},appName:{paddingLeft:"20px",fontWeight:"700",color:"#282828",textDecoration:"none","&:hover":{color:"#3F7FBF"}},compName:{flexGrow:"1",fontWeight:"400",marginLeft:"10px"},meta:{display:"flex"}},O=n(32),C=n(14),F=n(40),S=n(33),I=n(39),z=r.a.createContext(),L=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(F.a)(this,Object(S.a)(t).call(this,e))).getConfig=function(){return fetch("/library-config.json").then((function(e){return e.json()})).then((function(e){n.mounted&&n.setState({components:e.components,projectName:e.projectName,cssPaths:e.css||[],jsPaths:e.js||[]},(function(){n.writeAssets()}))})).catch((function(e){}))},n.getComponent=function(e){if(n.state.components){var t=null,a=n.state.components.filter((function(n,a){return n.html===e&&(t=a),n.html===e}));return a&&a.length?(a[0].index=t,a[0]):{}}},n.writeAssets=function(){-1!==window.location.href.indexOf("component-render")&&n.state.jsPaths.forEach((function(e){var t=document.createElement("script");t.setAttribute("src","".concat(e)),document.head.appendChild(t)})),n.setState({ready:!0})},n.state={components:[],currentComponent:{},projectName:"",cssPaths:[],jsPaths:[],ready:!1},n.mounted=!0,n}return Object(I.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.getConfig()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement(z.Provider,{value:{state:this.state,getConfig:this.getConfig,getComponent:this.getComponent}},this.props.children)}}]),t}(o.Component),B=z.Consumer,P={componentNav:{display:"flex",alignItems:"center",marginRight:"10px",color:"#333"},control:{display:"block",margin:"0 5px",cursor:"pointer",color:"#828282","&:hover":{color:"#3F7FBF"}},name:{transform:"translateY(-1px)"}},R=n(34),W=n.n(R),T=n(35),H=n.n(T),A=Object(s.a)(P)((function(e){var t=e.classes,n=e.ctx,a=e.component,o=e.history,c=function(e){var t="next"===e?a.index+1:a.index-1;t>n.state.components.length-1?t=0:t<0&&(t=n.state.components.length-1);var r=n.state.components[t];o.push("/component/".concat(r.html))};return r.a.createElement(r.a.Fragment,null,Boolean(a)&&n.state.components.length>0&&r.a.createElement("div",{className:t.componentNav},r.a.createElement("span",{tabIndex:"0",role:"button",title:"Previous component",className:t.control,onClick:function(){c("prev")}},r.a.createElement(W.a,null)),r.a.createElement("span",{className:t.name},a.name),r.a.createElement("span",{tabIndex:"0",role:"button",title:"Next component",className:t.control,onClick:function(){c("next")}},r.a.createElement(H.a,null))))})),D=n(11),G=Object(s.a)(w)((function(e){var t=e.classes,n=e.component,a=e.history;return r.a.createElement(L,null,r.a.createElement(B,null,(function(e){return r.a.createElement("header",{className:t.header},r.a.createElement("div",{className:t.meta},r.a.createElement(D.b,{to:"/",className:t.appName,title:"home"},e.state.projectName),Boolean(n)&&r.a.createElement("div",{className:t.compName},n.name)),r.a.createElement("div",null,r.a.createElement(A,{ctx:e,component:n,history:a})))})))})),Y=Object(s.a)(m)((function(e){var t=e.classes,n=e.ctx,a=e.history,c=Object(o.useState)(0),i=Object(l.a)(c,2),s=i[0],m=i[1],u=Object(o.useState)("col"),d=Object(l.a)(u,2),f=d[0],h=d[1],x=Object(o.useState)({}),g=Object(l.a)(x,2),b=g[0],v=g[1],E=Object(p.e)().componentName;Object(o.useEffect)((function(){j(),v(n.getComponent(E))}),[]),Object(o.useEffect)((function(){v(n.getComponent(E))}),[E]);var j=function(){var e=document.querySelector(".".concat(t.render));m(e.offsetWidth)},y="col"!==f;return r.a.createElement("div",{className:t.viewWrapper},r.a.createElement(G,{component:b,history:a}),r.a.createElement("div",{className:t.componentViewLayout+(y?" stacked":"")},r.a.createElement("div",{className:t.render},r.a.createElement("div",{className:t.renderInner},r.a.createElement("iframe",{src:"/component-render/".concat(E),title:"Component View"})),r.a.createElement("div",{className:t.renderSize},s,"px")),r.a.createElement(k.Resizable,{className:t.controls+(y?" stacked":" col-layout"),defaultSize:{width:550},onResizeStop:j},Boolean(b)&&r.a.createElement(N,{componentName:E,component:b,stacked:y,onOrientationChange:function(e){h(e),setTimeout((function(){j()}),100)}}))))})),V=n(10),J={componentLoader:(a={background:"#f7f7f7",position:"absolute",top:"0",left:"0"},Object(V.a)(a,"position","absolute"),Object(V.a)(a,"width","100%"),Object(V.a)(a,"height","100vh"),Object(V.a)(a,"display","flex"),Object(V.a)(a,"overflow","auto"),Object(V.a)(a,"backgroundSize","10px 10px"),Object(V.a)(a,"backgroundImage","linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)"),Object(V.a)(a,"& > div",{margin:"auto"}),a)},M=Object(s.a)(J)((function(e){var t=e.classes,n=e.ctx,a=Object(p.e)().componentName,c=Object(o.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1];return Object(o.useEffect)((function(){var e=!0;return fetch("/".concat(a,".html")).then((function(e){return e.text()})).then((function(t){e&&m(t)})),function(){e=!1}}),[]),r.a.createElement("div",{className:t.componentLoader},n.state.ready&&r.a.createElement(r.a.Fragment,null,n.state.cssPaths.map((function(e,t){return r.a.createElement("link",{key:t,rel:"stylesheet",type:"text/css",href:"".concat(e)})})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))})),_=n(16),q={meta:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px 0","& h1":{margin:"0"}},filter:{position:"relative",display:"flex",alignItems:"center","& label":{marginRight:"10px"},"& input":{fontSize:"14px",padding:"5px 30px 5px 5px",borderRadius:"0",boxShadow:"0",outline:"none"},"& svg":{position:"absolute",bottom:"6px",right:"6px",fill:"#828282"}},homeLinks:{width:"90%",maxWidth:"800px",margin:"40px auto",fontFamily:"sans-serif","& a":{display:"block",marginBottom:"20px",background:"#f2f2f2",padding:"20px",borderRadius:"3px",color:"#282828",textDecoration:"none",fontSize:"21px",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.25)","&:hover":{color:"#fff",background:"#3F7FBF"}}}},U=n(37),$=n.n(U),K=Object(s.a)(q)((function(e){var t=e.classes,n=e.ctx,a=Object(o.useState)([]),c=Object(l.a)(a,2),i=c[0],s=c[1],m=Object(o.useState)(""),p=Object(l.a)(m,2),u=p[0],d=p[1];Object(o.useEffect)((function(){s(Object(_.a)(n.state.components))}),[n.state.components]);return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:t.homeLinks},r.a.createElement("div",{className:t.meta},r.a.createElement("h1",null,"Components"),r.a.createElement("div",{className:t.filter},r.a.createElement("label",{htmlFor:"filter"},"Filter Items"),r.a.createElement("input",{type:"text",id:"filter",value:u,onChange:function(e){var t=(e.target.value+"").toLowerCase().trim();d(t),s(Object(_.a)(n.state.components).filter((function(e){return(e.name+"").toLowerCase().includes(t)})))}}),r.a.createElement($.a,{size:18}))),i.map((function(e,t){return r.a.createElement(D.b,{to:"/component/".concat(e.html),title:"Go to ".concat(e.name),key:t},e.name)})),i.length<=0&&i.length!==n.state.components.length&&r.a.createElement("div",null,"No results, please refine your search."),n.state.components.length<=0&&r.a.createElement("div",null,"No componets found. Please make sure this project is configured correctly.")))})),Q=n(38);var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null,r.a.createElement(B,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("title",null,e.state.projectName)),r.a.createElement(D.a,{basename:"/"},r.a.createElement(p.a,{exact:!0,path:"/",component:function(){return r.a.createElement(K,{ctx:e})}}),r.a.createElement(p.a,{path:"/component/:componentName",component:function(t){return r.a.createElement(Y,Object.assign({ctx:e},t))}}),r.a.createElement(p.a,{path:"/component-render/:componentName",component:function(){return r.a.createElement(M,{ctx:e})}})),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://highlightjs.org/static/demo/styles/vs.css"}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,n){e.exports=n(247)},46:function(e,t,n){},47:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.4c23f334.chunk.js.map