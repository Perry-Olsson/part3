(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(16),c=n.n(u),o=(n(22),n(3)),s=function(e){var t=e.person,n=e.deletePerson;return a.a.createElement("div",null,t.name,a.a.createElement("span",null,t.number," ",a.a.createElement("button",{onClick:n},"delete")))},l=function(e){var t=e.persons,n=e.deletePerson;return a.a.createElement(a.a.Fragment,null,t.map((function(e){return a.a.createElement(s,{deletePerson:function(){return n(e.id,e.name)},key:e.id,person:e})})))},i=function(e){var t=e.addPerson,n=e.setNewName,r=e.setNewNumber,u=e.newName,c=e.newNumber;return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"name:"," ",a.a.createElement("input",{value:u,onChange:function(e){return n(e.target.value)},required:!0})),a.a.createElement("br",null),a.a.createElement("div",null,"number:"," ",a.a.createElement("input",{value:c,onChange:function(e){return r(e.target.value)},required:!0})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var t=e.search,n=e.setSearch;return a.a.createElement("div",null,"search:"," ",a.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},f=(n(23),function(e){var t=e.message,n=void 0===t?null:t,r=e.type;return null===n?null:a.a.createElement("div",{className:"".concat(r," notification")},n)}),p=n(6),d=function(e,t,n,r){var a={formatOk:!0,error:"",handleError:"",name:"",number:""};return null!==e.match(/[^\d-()]/gm)?(a.formatOk=!1,a.handleError=function(e){e({message:"Number must only contain characters 0-9()-",type:"error"}),setTimeout((function(){e({message:null,type:"success"})}),1e4)},a.error="number",a):(n.forEach((function(n){return n.name.toLowerCase()===t.toLowerCase()?(a.formatOk=!1,a.handleError=function(){if(window.confirm("".concat(t," is already in the phonebook, would you like to replace the old number?"))){var a=Object(p.a)(Object(p.a)({},n),{},{number:e});r(n.id,a)}},a.error="name",a):n.number.replace(/[()-]/gm,"")===e.replace(/[()-]/gm,"")?(a.formatOk=!1,a.handleError=function(t){t({message:"".concat(e," is already in the phonebook"),type:"error"}),setTimeout((function(){return t({message:null,type:"success"})}),5e3)},a.error="number",a):void 0})),a.name=t.trim(),a.number=e.replace(/\s/gm,""),a)},b=n(2),h=n.n(b),v=n(4),E=n(5),g=n.n(E),w="/api/persons",y={getAll:function(){var e=Object(v.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.a.get(w),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.a.post(w,t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(v.a)(h.a.mark((function e(t,n){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=g.a.put("".concat(w,"/").concat(t),n),e.next=3,r;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.a.delete("".concat(w,"/").concat(t)),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t){var n=new RegExp(e.trim(),"i");return t.filter((function(e){return null!==e.name.match(n)}))},k=function(e,t){e(t),setTimeout((function(){return e({message:null,type:"success"})}),1e4)},j=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],u=t[1],c=Object(r.useState)(""),s=Object(o.a)(c,2),p=s[0],b=s[1],h=Object(r.useState)(""),v=Object(o.a)(h,2),E=v[0],g=v[1],w=Object(r.useState)(""),j=Object(o.a)(w,2),N=j[0],P=j[1],x=Object(r.useState)({message:null,type:"success"}),S=Object(o.a)(x,2),C=S[0],A=S[1];Object(r.useEffect)((function(){y.getAll().then((function(e){return u(e)}))}),[]);var F=function(e,t){y.updatePerson(e,t).then((function(t){u(n.map((function(n){return n.id!==e?n:t}))),g(""),k(A,{type:"success",message:"Updated ".concat(t.name)})})).catch((function(t){"notFound"===t.response.data.type&&u(n.filter((function(t){return t.id!==e}))),g(""),k(A,{message:t.response.data.error,type:"error"})}))};return a.a.createElement("div",null,a.a.createElement("h1",null,"Phonebook"),a.a.createElement(f,{message:C.message,type:C.type}),a.a.createElement(m,{search:N,setSearch:P}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(i,{addPerson:function(e){e.preventDefault();var t=d(E,p,n,F);if(t.formatOk){var r={name:t.name,number:t.number};y.createPerson(r).then((function(e){u(n.concat(e)),b(""),g(""),k(A,{type:"success",message:"Added ".concat(e.name)})})).catch((function(e){k(A,{message:e.response.data.error,type:"error"})}))}else"number"===t.error?g(""):b(""),t.handleError(A)},setNewName:b,setNewNumber:g,newName:p,newNumber:E}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(l,{deletePerson:function(e,t){window.confirm("delete ".concat(t,"?"))&&y.deletePerson(e).then((function(){u(n.filter((function(t){return t.id!==e}))),k(A,{type:"success",message:"Deleted ".concat(t)})})).catch((function(e){k(A,{message:e.message,type:"error"})}))},persons:O(N,n)}))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.617ac837.chunk.js.map