(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"+YcI":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o);t.default=function(e){return a.a.createElement("div",{style:l.div},e.collection.map(function(e){return a.a.createElement("div",{key:e.id,style:l.repoCard},a.a.createElement(i.a,{href:e.html_url},a.a.createElement("a",{target:"_blank",style:l.link},a.a.createElement("h4",null,e.name))),a.a.createElement("p",null,e.description))}))};var l={div:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",padding:"0 100px"},repoCard:{backgroundColor:"gray",borderRadius:"25px",color:"rgb(243, 243, 243)",display:"flex",flexDirection:"column",margin:"25px",padding:"25px",minHeight:"300px",minWidth:"300px",maxHeight:"300px",maxWidth:"300px",textAlign:"center"},link:{color:"rgb(243, 243, 243)",textTransform:"uppercase",textAlign:"center"}}},"+sbi":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);t.default=function(e){return a.a.createElement("div",{style:o.main},a.a.createElement("h3",{style:o.h},e.title),a.a.createElement("p",null,e.content))};var o={main:{color:"#8C8686",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"50px"},h:{textTransform:"uppercase"}}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("MI3g")),i=r(n("a7VT")),l=r(n("AT/M")),u=r(n("sLSF")),c=r(n("Tit0")),s=r(n("dfwq")),d=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new d.default;function n(n){e=n.props.reduceComponentsToState((0,s.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function s(e){var r;return(0,a.default)(this,s),r=(0,o.default)(this,(0,i.default)(s).call(this,e)),p&&(t.add((0,l.default)(r)),n((0,l.default)(r))),r}return(0,c.default)(s,r),(0,u.default)(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,u.default)(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component)}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},LKS5:function(e,t,n){"use strict";n.r(t);var r=n("vYYK"),a={main:Object(r.a)({background:"rgb(2,0,36)"},"background","linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)"),header:{display:"flex",backgroundColor:"#3D3D4B",color:"#C2C2C2",justifyContent:"flex-end",paddingRight:"50px",h1:{fontFamily:"sans-serif"},bio:{display:"flex",justifyContent:"flex-end"}}};t.default=a},Q0LR:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("m/Pd"),i=n.n(o),l=n("sGm0"),u=n("LKS5");t.default=function(e){return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,"cesaresparza.dev"),a.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),a.a.createElement("link",{rel:"stylesheet",href:"/static/css/styles.css"})),a.a.createElement(l.default,null),a.a.createElement("div",{style:u.default.main},e.children))}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("q1tI"),l=n.n(i),u=n("Q0LR"),c=n("+sbi"),s=n("+YcI"),d=n("zgjP"),f=n.n(d),p=function(e){return l.a.createElement("div",null,l.a.createElement(u.default,null),l.a.createElement(c.default,{title:"My GitHub Repos"}),l.a.createElement(s.default,{collection:e.collection}))};p.getInitialProps=Object(o.default)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://api.github.com/users/cesaresparzadev/repos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Data fetched. Count: ".concat(n.length)),e.abrupt("return",{collection:n});case 8:case"end":return e.stop()}},e)})),t.default=p},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),i=n("sNwI"),l=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),s=n("fNZA");a(a.S+a.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,f=o(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,y=0,g=s(f);if(v&&(h=r(h,m>2?arguments[2]:void 0,2)),null==g||p==Array&&l(g))for(n=new p(t=u(f.length));t>y;y++)c(n,y,v?h(f[y],y):f[y]);else for(d=g.call(f),n=new p;!(a=d.next()).done;y++)c(n,y,v?i(d,h,[a.value,y],!0):a.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("imt6");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n&&(!a||a&&(void 0!==o&&o))}t.isAmp=i,t.useAmp=function(){return i(a.default.useContext(o.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.default.useContext(o.AmpModeContext);return r.enabled=!0,r.hybrid=n,a.default.createElement(e,t)}return r.__nextAmpOnly=!n,r.getInitialProps=e.getInitialProps,r}},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var o=n("d04V"),i=n.n(o),l=n("yLu3"),u=n.n(l);function c(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(u()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return c})},imt6:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpModeContext=a.createContext({})},ldVq:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,o=[],i=[],l={},u=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return i},get:function(e){return l[e.toLowerCase()]},has:function(e){return e.toLowerCase()in l}}}};for(var c in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),i.push([t,n]),l[t]=l[t]?l[t]+","+n:n}),n(u())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(c,t.headers[c]);a.send(t.body||null)})}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),i=a(n("4hZ1")),l=n("imt6"),u=n("IClC"),c=n("Wziy");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","viewport","itemProp"];function p(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(s("",t.isAmp)).filter((n=new r.default,a=new r.default,i=new r.default,l={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(a.has(e.type))return!1;a.add(e.type);break;case"meta":for(var t=0,o=f.length;t<o;t++){var u=f[t];if(e.props.hasOwnProperty(u))if("charSet"===u||"viewport"===u){if(i.has(u))return!1;i.add(u)}else{var c=e.props[u],s=l[u]||new r.default;if(s.has(c))return!1;s.add(c),l[u]=s}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})});var n,a,i,l}var m=i.default();function h(e){var t=e.children;return o.default.createElement(l.AmpModeContext.Consumer,null,function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(m,{reduceComponentsToState:p,handleStateChange:n,isAmp:c.isAmp(e)},t)})})}h.rewind=m.rewind,t.default=h},sGm0:function(e,t,n){"use strict";n.r(t);var r,a=n("vYYK"),o=n("q1tI"),i=n.n(o),l=n("YFqc"),u=n.n(l);t.default=function(){return i.a.createElement("div",{style:c.header},i.a.createElement("div",{style:c.header.bio},i.a.createElement(u.a,{href:"https://github.com/cesaresparzadev"},i.a.createElement("a",{target:"_blank"},i.a.createElement("img",{src:"https://avatars1.githubusercontent.com/u/6798420",style:c.header.bioImage,alt:""}))),i.a.createElement("div",{style:c.header.bioText},i.a.createElement("h4",null,"Cesar Esparza"),i.a.createElement("h5",null,"Web App Developer"),i.a.createElement("p",null,"JavaScript | jQuery | React | SQL"))))};var c={header:(r={display:"flex",background:"rgb(2,0,36)"},Object(a.a)(r,"background","linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,113,124,1) 0%, rgba(61,61,75,1) 64%)"),Object(a.a)(r,"color","#C2C2C2"),Object(a.a)(r,"justifyContent","center"),Object(a.a)(r,"padding","50px 0"),Object(a.a)(r,"h1",{fontFamily:"sans-serif"}),Object(a.a)(r,"bioImage",{height:"150px",width:"150px",marginBottom:"20px"}),Object(a.a)(r,"bio",{display:"flex",flexDirection:"column",alignItems:"center"}),Object(a.a)(r,"bioText",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),r)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])},yLu3:function(e,t,n){e.exports=n("VKFn")},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD","5d41","9da1"]]]);