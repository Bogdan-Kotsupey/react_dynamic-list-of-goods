(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),u=n(5),i=n(3),l=n(4),s=n(7),f=n(6),d=(n(13),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}),m=function(){return d().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},p=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(t){var e=t.goods;return r.a.createElement("ul",null,e.map((function(t){var e=t.color,n=t.name,o=t.id;return r.a.createElement("li",{key:o,style:{color:e}},n)})))},b=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.responseHandler=function(e){e().then((function(e){return t.setState({goods:Object(u.a)(e)})}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.responseHandler(d)}},"Load all"),r.a.createElement("button",{type:"button",onClick:function(){return t.responseHandler(m)}},"Load 5 first"),r.a.createElement("button",{type:"button",onClick:function(){return t.responseHandler(p)}},"Load red"),r.a.createElement(h,{goods:this.state.goods}))}}]),n}(o.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8dde172d.chunk.js.map