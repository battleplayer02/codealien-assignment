(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{23:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(17),s=n.n(c),a=n(18),o=n(3),l=(n(23),n(5)),i=n.n(l),u=n(8),d=(n(25),n(0)),b=function(e){var t=e.obj,n=e.del,c=e.idx,s=e.email,a=Object(r.useState)(0),l=Object(o.a)(a,2),b=l[0],j=l[1],h=Object(r.useState)(!0),x=Object(o.a)(h,2),p=x[0],f=x[1];return Object(r.useEffect)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.url);case 3:n=e.sent,j(n.status),e.next=21;break;case 7:if(e.prev=7,e.t0=e.catch(0),j(400),e.prev=10,!p){e.next=17;break}if(""===s){e.next=16;break}return e.next=15,fetch("/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({to:s,subject:"URL:"+t.url+" Not working.",text:"URL:"+t.url+" Not working."})});case 15:e.sent;case 16:f(!1);case 17:e.next=21;break;case 19:e.prev=19,e.t1=e.catch(10);case 21:case"end":return e.stop()}}),e,null,[[0,7],[10,19]])}))),t.timeout);case 1:case"end":return e.stop()}}),e)})))),Object(d.jsxs)("div",{className:"flex justify-between w-full px-3 py-3 mt-5 bg-gray-100 rounded-lg",onDoubleClick:function(){return n(c)},children:[Object(d.jsx)("span",{className:"self-center w-21 overflow-ellipsis",children:t.url}),Object(d.jsx)("button",{className:200==b||201==b?"rounded text-sm p-2 bg-green-600 text-white":"rounded text-sm p-2 bg-red-600 text-white",children:b})]})};function j(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),i=l[0],u=l[1],j=function(e,t){var n="abcd"+e,c=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(o.a)(c,2),a=s[0],l=s[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[n,a]),[a,l]}("arr",[{url:"https://mail-backend-err.herokuapp.com/",timeout:1e3}]),h=Object(o.a)(j,2),x=h[0],p=h[1],f=Object(r.useState)(0),m=Object(o.a)(f,2),g=m[0],O=m[1],w=function(){(function(){if(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(n))return!0;return alert("Url is not valid!"),!1})()&&0!==n.length&&p([].concat(Object(a.a)(x),[{url:n,timeout:g}]))},v=function(e){var t=[];x.forEach((function(n,r){e!==r&&t.push(n)})),p(t)};return Object(d.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(d.jsx)("div",{className:"w-full h-full p-4 overflow-scroll font-sans bg-blue-400 rounded-lg hover:shadow-2xl md:w-1/2 md:h-4/5",children:Object(d.jsxs)("div",{className:"flex flex-col items-center justify-center mt-4",children:[Object(d.jsx)("header",{className:"mb-2 text-xl text-gray-800",children:"Web Moniter"}),Object(d.jsxs)("div",{className:"relative flex w-full shadow component",children:[Object(d.jsx)("div",{className:"absolute bottom-0 left-0 flex items-center h-full pl-4 pr-4 border-r error-icon",children:Object(d.jsxs)("svg",{className:"w-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(d.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),Object(d.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},type:"text",className:"flex-1 px-4 py-2 pl-16 text-sm tracking-wide bg-gray-100 border rounded focus:outline-none focus:shadow-outline",placeholder:"Enter The URL...."})]}),Object(d.jsx)("div",{className:"relative flex w-full mt-3 shadow component",children:Object(d.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)},type:"text",className:"flex-1 px-4 py-2 pl-16 text-sm tracking-wide bg-gray-100 border rounded focus:outline-none focus:shadow-outline",placeholder:"Enter Email"})}),Object(d.jsxs)("div",{className:"flex justify-between w-full mt-3",children:[Object(d.jsx)("div",{className:"w-full",children:Object(d.jsxs)("select",{value:g,onChange:function(e){return O(e.target.value)},className:"w-full p-2 bg-gray-100 rounded shadow component",name:"",id:"",children:["10 seconds, 1 minute, 5 minutes, 10 minutes, 15 minutes, 1 hour, 4 hours, 6 hours, daily.",Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"10000",children:"10 Seconds"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"60000",children:"1 Minute"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"1000",children:"1 Sec"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"300000",children:"5 Minute"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"600000",children:"10 Minute"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"900000",children:"15 Minute"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"3600000",children:"1 Hour"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"14400000",children:"4 Hour"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"21600000",children:"6 Hour"}),Object(d.jsx)("option",{class:"bg-gray-100 rounded p-2 shadow",value:"86400000",children:"1 Daily"})]})}),Object(d.jsx)("div",{className:"self-center p-2 ml-2 text-white bg-blue-800 rounded shadow hover:shadow-xl",children:Object(d.jsx)("button",{onClick:function(){return w()},children:"Add"})})]}),Object(d.jsx)("h3",{children:"Note: Double click on the item to remove it."}),Object(d.jsx)("div",{className:"w-full overflow-hidden h-",children:x.map((function(e,t){return Object(d.jsx)(b,{obj:e,del:v,idx:t,email:i},t)}))})]})})})}s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.56030c52.chunk.js.map