(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),o=n.n(a),s=(n(16),n(11)),i=n(6),l=n(4),u=n.n(l),d=n(8),j=n(2),b=(n(18),n(0)),f=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})})};f.defaultProps={color:"steelblue"};var h=f,O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(h,{color:c?"red":"green",text:c?"Close":"Add",onClick:n}),console.log(c)]})};O.defaultProps={title:"Task Tracker"};var x=O,p=n(10),v=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(p.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]},t.id),Object(b.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(v,{task:e,onDelete:n,onToggle:c},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),l=i[0],u=i[1],d=Object(c.useState)(!1),f=Object(j.a)(d,2),h=f[0],O=f[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:l,reminder:h}),o(""),u(""),O(!1)):alert("Please add Task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day and Time",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",value:h,checked:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var g=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(j.a)(a,2),l=o[0],f=o[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App container",children:[Object(b.jsx)(x,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(b.jsx)(k,{onAdd:function(e){var t=Math.floor(1e4*Math.random()+1),n=Object(i.a)({id:t},e);f([].concat(Object(s.a)(l),[n]))}}),0!==l.length?Object(b.jsx)(m,{tasks:l,onDelete:function(e){f(l.filter((function(t){return t.id!==e}))),console.log("delete",e)},onToggle:function(e){console.log("Toggling "+e),f(l.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks to show"]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.eaaad6ea.chunk.js.map