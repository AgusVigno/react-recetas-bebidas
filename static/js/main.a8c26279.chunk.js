(this["webpackJsonprecetas-bebidas"]=this["webpackJsonprecetas-bebidas"]||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(34),a(35),function(){return r.a.createElement("header",{className:"bg-alert"},r.a.createElement("h1",null,"Busca Recetas de Bebidas"))}),l=a(14),i=a(18),u=a(3),m=a(6),d=a.n(m),b=a(9),p=a(10),f=a.n(p),v=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,o(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(v.Provider,{value:{categorias:c}},e.children)},h=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({nombre:"",categoria:""}),l=Object(u.a)(s,2),i=l[0],m=l[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),E=v[0],g=v[1],j=i.categoria,O=i.nombre;return Object(n.useEffect)((function(){E&&function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=".concat(j,"&i=").concat(O),e.next=3,f.a.get(t);case 3:a=e.sent,o(a.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),r.a.createElement(h.Provider,{value:{recetas:c,buscarReceta:m,guardarConsulta:g}},e.children)},j=function(){var e=Object(n.useContext)(v).categorias,t=Object(n.useContext)(h),a=t.buscarReceta,c=t.guardarConsulta,o=Object(n.useState)({nombre:"",categoria:""}),s=Object(u.a)(o,2),m=s[0],d=s[1],b=function(e){d(Object(i.a)(Object(i.a)({},m),{},Object(l.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),a(m),c(!0)}},r.a.createElement("fieldset",{className:"text-center"},r.a.createElement("legend",null,"Busca Bebidas por Categor\xeda o Ingrediente"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{name:"nombre",className:"form-control",type:"text",placeholder:"Buscar por Ingrediente",onChange:b})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("select",{className:"form-control",name:"categoria",onChange:b},r.a.createElement("option",{value:""},"--Seleccione Categor\xeda--"),e.map((function(e){return r.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Buscar Bebidas"})))))},O=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(c),e.next=5,f.a.get(t);case 5:a=e.sent,m(a.data.drinks[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement(O.Provider,{value:{informacion:i,guardarIdReceta:o,guardarReceta:m}},e.children)},k=a(69),N=a(68);function y(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var C=Object(N.a)((function(e){return{paper:{position:"absolute",width:450,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),x=function(e){var t=e.receta,a=Object(n.useState)(y),c=Object(u.a)(a,1)[0],o=Object(n.useState)(!1),s=Object(u.a)(o,2),l=s[0],i=s[1],m=C(),d=Object(n.useContext)(O),b=d.informacion,p=d.guardarIdReceta,f=d.guardarReceta;return r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"card-header"},t.strDrink),r.a.createElement("img",{className:"card-img-top",src:t.strDrinkThumb,alt:"Imagen de ".concat(t.strDrink)}),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:function(){p(t.idDrink),i(!0)}},"Ver Receta"),r.a.createElement(k.a,{open:l,onClose:function(){p(null),f({}),i(!1)}},r.a.createElement("div",{style:c,className:m.paper},r.a.createElement("h2",null,b.strDrink),r.a.createElement("h3",{className:"mt-4"},"Instrucciones"),r.a.createElement("p",null,b.strInstructions),r.a.createElement("img",{className:"img-fluid my-4",src:b.strDrinkThumb,alt:b.strDrink}),r.a.createElement("h3",null,"Ingredientes y cantidades"),r.a.createElement("ul",null,function(e){for(var t=[],a=1;a<16;a++)e["strIngredient".concat(a)]&&t.push(r.a.createElement("li",null," ",e["strIngredient".concat(a)],"  ",e["strMeasure".concat(a)]));return t}(b)))))))},S=function(){var e=Object(n.useContext)(h).recetas;return r.a.createElement("div",{className:"row mt-5"},e.map((function(e){return r.a.createElement(x,{key:e.idDrink,receta:e})})))};var I=function(){return r.a.createElement(E,null,r.a.createElement(g,null,r.a.createElement(w,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement(j,null)),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a8c26279.chunk.js.map