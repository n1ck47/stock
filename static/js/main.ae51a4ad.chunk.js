(this.webpackJsonpstock=this.webpackJsonpstock||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(29),l=a.n(s),i=(a(41),a(4)),o=a(13),u=a(2),h=(a(42),a(9)),j=a.n(h),b=a(30),d=a.n(b);a(62);var p=function(e){var t=["BWIY4NDHJIXLK06R","Q4OZ3T6KRYIMRRZU","32121ZHS4J6CRSMB","BSUL8MD6S4AAI3RC","A5K8VKW29UWFEZCE","PNFFMHFJXQKIZL3H","Q0JN9NEW3S5T9BGM","KWFH468DBZ92ZWMG","Z8MQYC2X9QDL09TG","0F8QE3FDV05NTOKM"],a=Object(n.useState)([]),r=Object(i.a)(a,2),s=r[0],l=r[1],o=Object(n.useState)([]),u=Object(i.a)(o,2),h=u[0],b=u[1],p=e.name;e.symbol2&&(p=e.symbol+"  v  "+e.symbol2),Object.keys(e.price).length&&(p=p+"    $"+e.price.price),Object(n.useEffect)((function(){var a="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(e.symbol,"&apikey=").concat(t[3]);if(j.a.get(a).then((function(e){if("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."===e.data.Note)throw new Error("Api calls exhausted");var t=e.data["Time Series (Daily)"],a=[];for(var c in t){var n=c.split("-");n=new Date(n[0],n[1]-1,n[2]),a.push([n.getTime(),parseFloat(t[c]["4. close"])])}a.sort((function(e,t){return e[0]-t[0]})),l(a)})),e.symbol2){var c="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(e.symbol2,"&apikey=").concat(t[3]);j.a.get(c).then((function(e){if("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."===e.data.Note)throw new Error("Api calls exhausted");var t=e.data["Time Series (Daily)"],a=[];for(var c in t){var n=c.split("-");n=new Date(n[0],n[1]-1,n[2]),a.push([n.getTime(),parseFloat(t[c]["4. close"])])}a.sort((function(e,t){return e[0]-t[0]})),b(a)}))}}),[e.symbol]);var m={chart:{type:"spline",height:e.height,width:e.width},xAxis:{type:"date"},yAxis:[{offset:20,labels:{x:-15,align:"left"}}],title:{text:p},tooltip:{animation:!0,backgroundColor:"#e7e7de",borderRadius:8},rangeSelector:{buttons:[{type:"day",count:1,text:"1d"},{type:"day",count:7,text:"7d"},{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"years",count:1,text:"1y"},{type:"all",text:"All"}],selected:5},series:[{name:e.symbol,data:s,allowPointSelect:!0,color:"green",showInNavigator:!0},{name:e.symbol2,data:h,allowPointSelect:!0,color:"black",showInNavigator:!0}]};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"chart",children:Object(c.jsx)(d.a,{config:m})})})};a(63);var m=function(e){var t=["BWIY4NDHJIXLK06R","Q4OZ3T6KRYIMRRZU","32121ZHS4J6CRSMB","BSUL8MD6S4AAI3RC","A5K8VKW29UWFEZCE","PNFFMHFJXQKIZL3H","Q0JN9NEW3S5T9BGM","KWFH468DBZ92ZWMG","Z8MQYC2X9QDL09TG","0F8QE3FDV05NTOKM"],a=Object(n.useState)({}),r=Object(i.a)(a,2),s=r[0],l=r[1],o=Object(n.useState)({}),u=Object(i.a)(o,2),h=u[0],b=u[1],d=Object(n.useState)(),p=Object(i.a)(d,2),m=p[0],O=p[1];return Object(n.useEffect)((function(){Math.floor(10*Math.random());var a="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(e.symbol,"&apikey=").concat(t[1]);Math.floor(10*Math.random());var c="https://www.alphavantage.co/query?function=OVERVIEW&symbol=".concat(e.symbol,"&apikey=").concat(t[2]);j.a.get(a).then((function(t){if("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."===t.data.Note)throw new Error("Api calls exhausted");var a=t.data["Global Quote"],c={price:a["05. price"],change:a["09. change"]};e.setPrice(c);var n={Open:a["02. open"],High:a["03. high"],Low:a["04. low"],Volume:a["06. volume"]};l(n)})),j.a.get(c).then((function(t){if("Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."===t.data.Note)throw new Error("Api calls exhausted");var a=t.data,c="",n=a.Description;if(e.setName(a.Name),void 0!==n)for(var r=0;r<n.length&&(c+=n[r],!("."===n[r]&&c.length>500));r++);O(c);var s={"52W H":a["52WeekHigh"],"52W L":a["52WeekLow"],"Mkt Cap":a.MarketCapitalization,"P/E":a.PERatio,Beta:a.Beta,EPS:a.EPS,"50D Avg":a["50DayMovingAverage"],"200D Avg":a["200DayMovingAverage"]};b(s)}))}),[e.symbol]),Object(c.jsxs)("div",{className:"share-info",children:[Object(c.jsx)("div",{className:"description",children:m}),Object(c.jsx)("ul",{className:"outer-ul",children:function(){var e=new Array;for(var t in s)"None"!==s[t]&&e.push(Object(c.jsxs)("ul",{className:"inner-ul",children:[Object(c.jsx)("li",{type:"None",className:"bold-list",children:t},t),Object(c.jsx)("li",{type:"None",children:s[t]},"value-".concat(t))]},"ul-".concat(t)));for(var a in h)"None"!==h[a]&&e.push(Object(c.jsxs)("ul",{className:"inner-ul",children:[Object(c.jsx)("li",{type:"None",className:"bold-list",children:a},a),Object(c.jsx)("li",{type:"None",children:h[a]},"value-".concat(a))]},"ul-".concat(a)));return e}()})]})};a(64);var O=function(){return Object(c.jsx)("div",{className:"inner-header",children:Object(c.jsxs)("ul",{type:"None",className:"header-ul",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/",children:"Home"})}),Object(c.jsx)]})})},y=a(15);a(70);var f=function(e){var t=Object(n.useRef)(),a=Object(n.useState)([]),r=Object(i.a)(a,2),s=(r[0],r[1],Object(n.useState)(["GME","AAPL","AMZN","TSLA","FB","GOOGL","MSFT"])),l=Object(i.a)(s,2),o=l[0],u=l[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("form",{onSubmit:function(a){a.preventDefault();var c=t.current.value;e.setSymbol(c),t.current.value="";var n=Object(y.a)(o),r=!0;if(n.length>=19)r=!1;else for(var s=0;s<n.length;s++)n[s]===c&&(r=!1);r&&u([].concat(Object(y.a)(o),[c]))},children:Object(c.jsx)("input",{classname:"search",name:"search",type:"text",placeholder:"Enter comapny name",size:"50",ref:t})}),Object(c.jsx)("ul",{className:"company-ul",children:o.length>0?o.map((function(t,a){return Object(c.jsx)("div",{className:"company-div",children:Object(c.jsxs)("ul",{className:"inner-company-ul",children:[Object(c.jsxs)("li",{className:"company-li",onClick:function(){return e.setSymbol(t)},type:"None",children:[t," "]},t),Object(c.jsx)("li",{type:"None",children:Object(c.jsx)("button",{onClick:function(){return function(e){var t=Object(y.a)(o).filter((function(t,a){return a!==e}));u(t)}(a)},children:"X"})})]})})})):null})]})};a(71);var v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],u=l[1],h=Object(n.useRef)(),j=Object(n.useRef)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"compare",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=h.current.value;h.current.value="";var a=j.current.value;j.current.value="",r(t),u(a)},children:[Object(c.jsx)("input",{name:"company1",type:"text",placeholder:"Enter first comapny",size:"50",ref:h,required:!0}),Object(c.jsx)("input",{name:"company2",type:"text",placeholder:"Enter second comapny",size:"50",ref:j,required:!0}),Object(c.jsx)("input",{type:"submit",value:"compare"})]})}),Object(c.jsx)("div",{className:"compare-chart",children:0!==a.length?Object(c.jsx)(p,{name:"",price:"",symbol:a,symbol2:o,height:"400",width:"1440"}):""})]})},x=a(32),g=a(33),N=a(35),w=a(34),S=function(e){Object(N.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(x.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1,message:""},e.componentDidCatch=function(t,a){console.log("hi"),e.setState({error:!0,message:t})},e}return Object(g.a)(a,[{key:"render",value:function(){return this.state.error?Object(c.jsxs)(c.Fragment,{children:[console.log("hi"),this.state.message]}):Object(c.jsx)("h1",{children:this.props.children})}}]),a}(n.Component);var A=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("GME"),l=Object(i.a)(s,2),h=l[0],j=l[1],b=Object(n.useState)({}),d=Object(i.a)(b,2),y=d[0],x=d[1];return Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(u.d,{children:[Object(c.jsxs)(u.b,{path:"/stock",exact:!0,children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(O,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"company-list",children:Object(c.jsx)("div",{children:Object(c.jsx)(f,{setSymbol:j})})}),Object(c.jsxs)("div",{className:"content-chart",children:[Object(c.jsx)("div",{className:"main-chart",children:Object(c.jsx)(S,{children:Object(c.jsx)(p,{name:a,symbol:h,price:y,height:"400",width:"1000"})})}),Object(c.jsx)("div",{className:"main-share",children:Object(c.jsx)(m,{className:"in-share",setPrice:x,setName:r,symbol:h})})]})]})]}),Object(c.jsxs)(u.b,{path:"/stock/compare",exact:!0,children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(O,{})}),Object(c.jsx)(v,{})]}),Object(c.jsx)(u.a,{to:"/stock"})]})})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),E()}},[[72,1,2]]]);
//# sourceMappingURL=main.ae51a4ad.chunk.js.map