(this["webpackJsonpbug-view"]=this["webpackJsonpbug-view"]||[]).push([[0],{64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(30),l=s.n(c),i=s(4),r=s(15),d=s(2),o=s(35),b=s(19),j=s(36),u=s(33),m=s.n(u),h={BACKEND:"/api",disableLogin:!0},x=s(0),O=m.a.create({baseURL:h.BACKEND}),f=function(e){O.interceptors.request.use((function(t){return t.headers={"x-access-token":e},t}))},v=function(e){var t=e.children,s=Object(j.a)(e,["children"]),n=Object(a.useContext)(w).user;return Object(x.jsx)(i.b,Object(b.a)(Object(b.a)({},s),{},{render:function(e){var s=e.location;return n.accessToken?t:(alert("Unauthorized access"),Object(x.jsx)(i.a,{to:{pathname:"/login",state:{from:s}}}))}}))},g=function(){return(new Date).toJSON().slice(0,19).replace("T"," ")},p=function(e,t,s,a){return O.patch("/bugs/"+e,{updates:[].concat(Object(o.a)(a),[{time:g(),content:s,authorID:t}])})},N=function(e){return O.delete("/bugs/"+e)},y=function(e,t,s,a){return O.post("/people",{name:a,role:e,username:t,password:s}).then((function(e){return e.data}))},w=Object(a.createContext)(),C=function(e){var t=e.children,s=Object(a.useState)({id:void 0,role:void 0,name:void 0,username:void 0,accessToken:void 0}),n=Object(d.a)(s,2),c=n[0],l=n[1],i=Object(a.useState)([]),r=Object(d.a)(i,2),o=r[0],b=r[1],j=Object(a.useState)([]),u=Object(d.a)(j,2),m=u[0],h=u[1];Object(a.useEffect)((function(){f(),v()}),[]);var f=function(){var e,t,s;null===(t=c.id,e="admin"===(s=c.role)?O.get("/bugs").then((function(e){return e.data})):"staff"===s?O.get("/bugs?staffID="+t).then((function(e){return e.data})):"user"===s?O.get("/bugs?userID="+t).then((function(e){return e.data})):void 0)||void 0===e||e.then((function(e){b(e)}))},v=function(){var e;null===(e=O.get("/people").then((function(e){return e.data})))||void 0===e||e.then((function(e){h(e)}))};return Object(x.jsx)(w.Provider,{value:{user:c,setUser:l,bugList:o,peopleList:m,refreshBugList:f,refreshPeopleList:v},children:t})},S=function(){var e,t,s=Object(a.useContext)(w),n=s.user.id,c=s.peopleList,l=s.refreshBugList,i=[],r=[];c.forEach((function(e){e.id!==n&&("staff"===e.role&&r.push(e),"user"===e.role&&i.push(e))}));var o=Object(a.useState)(""),b=Object(d.a)(o,2),j=b[0],u=b[1],m=Object(a.useState)(""),h=Object(d.a)(m,2),f=h[0],v=h[1],p=Object(a.useState)(null===(e=i[0])||void 0===e?void 0:e.id),N=Object(d.a)(p,2),y=N[0],C=N[1],S=Object(a.useState)(null===(t=r[0])||void 0===t?void 0:t.id),k=Object(d.a)(S,2),D=k[0],I=k[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark ",id:"modalAddBug",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Add new bug"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"title",value:j,onChange:function(e){u(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"title",children:"Title"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("textarea",{className:"form-control",id:"description",style:{height:"100px"},value:f,onChange:function(e){v(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"description",children:"Description"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("select",{className:"form-select",id:"selectUser",style:{height:"65px"},value:y,onChange:function(e){C(e.target.value)},children:i.map((function(e){return Object(x.jsx)("option",{value:e.id,children:"[".concat(e.username,"] ").concat(e.name)},e.id)}))}),Object(x.jsx)("label",{htmlFor:"selectUser",children:"Select user"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("select",{className:"form-select",id:"selectStaff",style:{height:"65px"},value:D,onChange:function(e){I(e.target.value)},children:r.map((function(e){return Object(x.jsx)("option",{value:e.id,children:"[".concat(e.username,"] ").concat(e.name)},e.id)}))}),Object(x.jsx)("label",{htmlFor:"selectStaff",children:"Select staff"})]})]}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(e){(function(e,t,s,a,n){return O.post("/bugs",{title:t,description:s,userID:a,staffID:n,updates:[{time:g(),content:"Bug created",authorID:e}]})})(n,j,f,y,D).then((function(){l()}))},children:"Submit"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalAddBug",onClick:function(){var e,t;u(""),v(""),C(null===(e=i[0])||void 0===e?void 0:e.id),I(null===(t=r[0])||void 0===t?void 0:t.id)},children:"+"})]})},k=function(e){var t=e.selectedBugID,s=e.setSelectedBugID,n=Object(a.useContext)(w),c=n.user.role,l=n.bugList;return Object(x.jsxs)("div",{className:"card bg-primary text-white",children:[Object(x.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-end",children:[Object(x.jsx)("h5",{children:"Bug list"}),"admin"===c&&Object(x.jsx)(S,{})]}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:l.map((function(e){return Object(x.jsx)("li",{className:"list-group-item user-select-none list-group-item-action"+(e.id===t?" active":""),onClick:function(){return s(e.id)},children:e.title},e.id)}))})]})},D=function(e){var t=e.bug,s=Object(a.useContext)(w),n=s.user.id,c=s.refreshBugList,l=Object(a.useState)(""),i=Object(d.a)(l,2),r=i[0],o=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalUpdateBug",onClick:function(){o("")},children:"Update"}),Object(x.jsx)("div",{className:"modal fade text-dark",id:"modalUpdateBug",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Update bug"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("textarea",{className:"form-control",id:"content",style:{height:"100px"},value:r,onChange:function(e){o(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"content",children:"Update content"})]})}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(e){p(t.id,n,r,t.updates).then((function(){c()}))},children:"Submit"})]})]})})})]})},I=function(e){var t,s=e.bug,n=Object(a.useContext)(w),c=n.user.id,l=n.peopleList,i=n.refreshBugList,r=l.filter((function(e){return e.id!==(null===s||void 0===s?void 0:s.staffID)&&"staff"===e.role})),o=Object(a.useState)(null===(t=r[0])||void 0===t?void 0:t.id),b=Object(d.a)(o,2),j=b[0],u=b[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark",id:"modalForwardBug",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Forward bug"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("select",{className:"form-select",id:"selectStaff",style:{height:"65px"},value:j,onChange:function(e){u(e.target.value)},children:r.map((function(e){return Object(x.jsx)("option",{value:e.id,children:"[".concat(e.username,"] ").concat(e.name)},e.id)}))}),Object(x.jsx)("label",{htmlFor:"selectStaff",children:"Forward to staff"})]})}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(){var e,t,a,n,l;(e=s.id,t=c,a=j,n=s.updates,l=r.filter((function(e){return e.id===j}))[0].username,O.patch("/bugs/"+e,{staffID:a}).then((function(){return p(e,t,"Bug is forwarded to @"+l,n)}))).then((function(){i()}))},children:"Forward"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalForwardBug",onClick:function(){u(r[0].id)},children:"Forward"})]})},F=function(e){var t=e.bug,s=Object(a.useContext)(w).refreshBugList;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark",id:"modalKillBug",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Kill bug"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsx)("div",{className:"modal-body",children:"Do you really want to kill this innocent bug?"}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(e){e.preventDefault(),N(t.id).then((function(){s()}))},children:"Submit"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalKillBug",children:"Kill"})]})},L=function(e){var t=e.selectedBugID,s=Object(a.useContext)(w),n=s.user.role,c=s.peopleList,l=s.bugList,i=[],r=[];c.forEach((function(e){"staff"===e.role&&r.push(e),"user"===e.role&&i.push(e)}));var d=l.find((function(e){return e.id===t})),o=i.find((function(e){return e.id===(null===d||void 0===d?void 0:d.userID)})),b=r.find((function(e){return e.id===(null===d||void 0===d?void 0:d.staffID)}));return Object(x.jsxs)("div",{className:"card bg-primary text-light",children:[Object(x.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-end",children:[Object(x.jsx)("h5",{children:"Bug detail"}),Object(x.jsxs)("div",{className:"btn-group ",children:[["admin","staff"].includes(n)&&Object(x.jsx)(D,{bug:d}),["admin","staff"].includes(n)&&Object(x.jsx)(I,{bug:d}),["admin","user"].includes(n)&&Object(x.jsx)(F,{bug:d})]})]}),Object(x.jsxs)("div",{className:"card-body bg-white text-dark",children:[Object(x.jsxs)("div",{className:"row mb-2 align-items-center",children:[Object(x.jsx)("label",{className:"col-2",htmlFor:"titledetail",children:Object(x.jsx)("strong",{children:"Title"})}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsx)("input",{readOnly:!0,type:"text",id:"titledetail",className:"form-control",value:null===d||void 0===d?void 0:d.title})})]}),Object(x.jsxs)("div",{className:"row mb-2 align-items-start",children:[Object(x.jsx)("label",{className:"col-2",htmlFor:"describe"}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsx)("textarea",{readOnly:!0,type:"text",id:"describe",className:"form-control",style:{height:"100px"},value:null===d||void 0===d?void 0:d.description})})]}),Object(x.jsxs)("div",{className:"row mb-2 align-items-center",children:[Object(x.jsx)("label",{className:"col-2",htmlFor:"userdetail",children:Object(x.jsx)("strong",{children:"User"})}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsxs)("span",{className:"input-group-text",children:["@",null===o||void 0===o?void 0:o.username]}),Object(x.jsx)("input",{readOnly:!0,type:"text",id:"userdetail",className:"form-control",value:null===o||void 0===o?void 0:o.name})]})})]}),Object(x.jsxs)("div",{className:"row mb-2 align-items-center",children:[Object(x.jsx)("label",{className:"col-2",htmlFor:"staffdetail",children:Object(x.jsx)("strong",{children:"Staff"})}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsxs)("span",{className:"input-group-text",children:["@",null===b||void 0===b?void 0:b.username]}),Object(x.jsx)("input",{readOnly:!0,type:"text",id:"staffdetail",className:"form-control",value:null===b||void 0===b?void 0:b.name})]})})]})]}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:null===d||void 0===d?void 0:d.updates.map((function(e,t){var s=e.time,a=e.content,n=e.authorID;return Object(x.jsx)("li",{className:"list-group-item",children:Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:s})," "+a]}),Object(x.jsxs)("div",{className:"text-primary",children:[Object(x.jsx)("em",{children:"@"}),c.find((function(e){return e.id===n})).username]})]})},t)}))})]})},B=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),s=t[0],n=t[1],c=Object(a.useContext)(w),l=c.refreshBugList,i=c.refreshPeopleList;return Object(a.useEffect)((function(){l(),i()}),[]),Object(x.jsx)("div",{className:"container pt-3",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)(k,{selectedBugID:s,setSelectedBugID:n})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)(L,{selectedBugID:s})})]})})},P=s(10),U=function(){var e=Object(a.useContext)(w),t=e.user,s=t.name,n=t.role,c=e.setUser,l=Object(i.g)();return Object(x.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("a",{className:"navbar-brand",href:"#",children:"Group 5 [BugTracker]"}),Object(x.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[["admin","staff","user"].includes(n)&&Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(P.b,{activeClassName:"active",className:"nav-link",to:"/bugview",children:"Manage Bugs"})}),["admin"].includes(n)&&Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(P.b,{activeClassName:"active",className:"nav-link",to:"/projectview",children:"Manage Project"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"navbar-text",children:"Logged in as"}),Object(x.jsx)("span",{className:"text-light m-2",children:s.toUpperCase()}),Object(x.jsx)("button",{className:"btn btn-outline-light",onClick:function(e){e.preventDefault(),localStorage.removeItem("user"),c({id:void 0,role:void 0,name:void 0,username:void 0,accessToken:void 0}),l.push("/login")},children:"Logout"})]})]})})},E=function(){var e=Object(a.useContext)(w).refreshPeopleList,t=Object(a.useState)(""),s=Object(d.a)(t,2),n=s[0],c=s[1],l=Object(a.useState)(""),i=Object(d.a)(l,2),r=i[0],o=i[1],b=Object(a.useState)(""),j=Object(d.a)(b,2),u=j[0],m=j[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark ",id:"modalAddStaff",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Add new staff"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"namestaff",value:n,onChange:function(e){c(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"namestaff",children:"Full name"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"username",value:r,onChange:function(e){o(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"username",children:"Username"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"password",className:"form-control",id:"password",value:u,onChange:function(e){m(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"})]})]}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(t){(function(e,t,s){return y("staff",e,t,s)})(r,u,n).then((function(){e()}))},children:"Submit"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalAddStaff",onClick:function(){c(""),o(""),m("")},children:"+"})]})},T=function(e){var t=e.selectedPersonID,s=e.setSelectedPersonID,n=Object(a.useContext)(w).peopleList.filter((function(e){return"staff"===e.role}));return Object(x.jsxs)("div",{className:"card bg-primary text-white",children:[Object(x.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-end",children:[Object(x.jsx)("h5",{children:"Staff list"}),Object(x.jsx)(E,{})]}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:n.map((function(e){return Object(x.jsxs)("li",{className:"list-group-item user-select-none list-group-item-action"+(e.id===t?" active":""),onClick:function(){return s(e.id)},children:[Object(x.jsxs)("strong",{children:["@",e.username]})," "+e.name]},e.id)}))})]})},A=function(e){var t=e.person,s=Object(a.useContext)(w).refreshPeopleList,n=Object(a.useState)(null===t||void 0===t?void 0:t.name),c=Object(d.a)(n,2),l=c[0],i=c[1],r=Object(a.useState)(null===t||void 0===t?void 0:t.username),o=Object(d.a)(r,2),b=o[0],j=o[1],u=Object(a.useState)(null===t||void 0===t?void 0:t.password),m=Object(d.a)(u,2),h=m[0],f=m[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalEditPerson",onClick:function(){i(null===t||void 0===t?void 0:t.name),j(null===t||void 0===t?void 0:t.username),f(null===t||void 0===t?void 0:t.password)},children:"Edit"}),Object(x.jsx)("div",{className:"modal fade text-dark ",id:"modalEditPerson",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsxs)("h5",{className:"modal-title",children:["Edit ",null===t||void 0===t?void 0:t.role]}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"nameuseredit",value:l,placeholder:null===t||void 0===t?void 0:t.name,onChange:function(e){i(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"nameuseredit",children:"Full name"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"usernameedit",value:b,placeholder:null===t||void 0===t?void 0:t.username,onChange:function(e){j(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"usernameedit",children:"Username"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"password",className:"form-control",id:"passwordedit",value:h,placeholder:null===t||void 0===t?void 0:t.password,onChange:function(e){f(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"passwordedit",children:"Password"})]})]}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(e){e.preventDefault(),function(e,t,s,a,n){return O.patch("/people/"+e,{name:t,role:s,username:a,password:n})}(t.id,l,t.role,b,h).then((function(){s()}))},children:"Submit"})]})]})})})]})},K=function(e){var t=e.person,s=e.bugList,n=Object(a.useContext)(w),c=n.refreshPeopleList,l=n.refreshBugList;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark",id:"modalDeletePerson",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsxs)("h5",{className:"modal-title",children:["Remove this ",null===t||void 0===t?void 0:t.role]}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsxs)("div",{className:"modal-body",children:["Do you really want to remove ",null===t||void 0===t?void 0:t.role," ",null===t||void 0===t?void 0:t.name,"?",Object(x.jsx)("br",{})," Innocent bugs involved with this ",null===t||void 0===t?void 0:t.role," will be killed!"]}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(e){e.preventDefault(),function(e,t){var s=t.map((function(e){return N(e.id)}));return Promise.all(s).then((function(){return O.delete("/people/"+e)}))}(t.id,s).then((function(){c()})).then((function(){l()}))},children:"Remove"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalDeletePerson",children:"Remove"})]})},J=function(e){var t=e.selectedPersonID,s=Object(a.useContext)(w),n=s.peopleList,c=s.bugList,l=n.find((function(e){return e.id===t})),i=c.filter((function(e){return e.staffID===t||e.userID===t}));return Object(x.jsxs)("div",{className:"card bg-primary text-light",children:[Object(x.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-end",children:[Object(x.jsxs)("h5",{children:["Detail ",null===l||void 0===l?void 0:l.role]}),Object(x.jsxs)("div",{className:"btn-group ",children:[Object(x.jsx)(A,{person:l}),Object(x.jsx)(K,{person:l,bugList:i})]})]}),Object(x.jsx)("div",{className:"card-body bg-white text-dark",children:Object(x.jsxs)("div",{className:"row mb-2 align-items-center",children:[Object(x.jsx)("label",{className:"col-2",htmlFor:"titledetail",children:Object(x.jsx)("strong",{children:"Name"})}),Object(x.jsx)("div",{className:"col-10",children:Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsxs)("span",{className:"input-group-text",children:["@",null===l||void 0===l?void 0:l.username]}),Object(x.jsx)("input",{readOnly:!0,type:"text",id:"userdetail",className:"form-control",value:null===l||void 0===l?void 0:l.name})]})})]})}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:null===i||void 0===i?void 0:i.map((function(e){var t,s,a=e.id,c=e.userID,i=e.staffID,r=e.title;return Object(x.jsx)("li",{className:"list-group-item",children:Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("strong",{children:["#",a]})," "+r]}),Object(x.jsxs)("div",{className:"text-primary",children:[Object(x.jsx)("em",{children:"@"}),"user"===(null===l||void 0===l?void 0:l.role)?null===(t=n.find((function(e){return(null===e||void 0===e?void 0:e.id)===i})))||void 0===t?void 0:t.username:null===(s=n.find((function(e){return(null===e||void 0===e?void 0:e.id)===c})))||void 0===s?void 0:s.username]})]})},a)}))})]})},M=function(){var e=Object(a.useContext)(w).refreshPeopleList,t=Object(a.useState)(""),s=Object(d.a)(t,2),n=s[0],c=s[1],l=Object(a.useState)(""),i=Object(d.a)(l,2),r=i[0],o=i[1],b=Object(a.useState)(""),j=Object(d.a)(b,2),u=j[0],m=j[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"modal fade text-dark ",id:"modalAddUser",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header bg-primary text-light",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Add new user"}),Object(x.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"nameuser",value:n,onChange:function(e){c(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"nameuser",children:"Full name"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"text",className:"form-control",id:"username",value:r,onChange:function(e){o(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"username",children:"Username"})]}),Object(x.jsxs)("div",{className:"form-floating mb-3",children:[Object(x.jsx)("input",{type:"password",className:"form-control",id:"password",value:u,onChange:function(e){m(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"})]})]}),Object(x.jsxs)("div",{className:"modal-footer",children:[Object(x.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(t){(function(e,t,s){return y("user",e,t,s)})(r,u,n).then((function(){e()}))},children:"Submit"})]})]})})}),Object(x.jsx)("button",{className:"btn btn-outline-light","data-bs-toggle":"modal","data-bs-target":"#modalAddUser",onClick:function(){c(""),o(""),m("")},children:"+"})]})},R=function(e){var t=e.selectedPersonID,s=e.setSelectedPersonID,n=Object(a.useContext)(w).peopleList.filter((function(e){return"user"===e.role}));return Object(x.jsxs)("div",{className:"card bg-primary text-white",children:[Object(x.jsxs)("div",{className:"card-header d-flex justify-content-between align-items-end",children:[Object(x.jsx)("h5",{children:"User list"}),Object(x.jsx)(M,{})]}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:n.map((function(e){return Object(x.jsxs)("li",{className:"list-group-item user-select-none list-group-item-action"+(e.id===t?" active":""),onClick:function(){return s(e.id)},children:[Object(x.jsxs)("strong",{children:["@",e.username]})," "+e.name]},e.id)}))})]})},V=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),s=t[0],n=t[1];return Object(x.jsx)("div",{className:"container pt-3",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-3",children:Object(x.jsx)(R,{selectedPersonID:s,setSelectedPersonID:n})}),Object(x.jsx)("div",{className:"col-sm-3",children:Object(x.jsx)(T,{selectedPersonID:s,setSelectedPersonID:n})}),Object(x.jsx)("div",{className:"col-sm-6",children:Object(x.jsx)(J,{selectedPersonID:s})})]})})},q=function(){var e=Object(a.useContext)(w),t=(e.user,e.setUser),s=(e.refreshBugList,e.refreshPeopleList,Object(a.useState)("")),n=Object(d.a)(s,2),c=n[0],l=n[1],r=Object(a.useState)(""),o=Object(d.a)(r,2),b=o[0],j=o[1],u=Object(a.useState)(!1),m=Object(d.a)(u,2),v=m[0],g=m[1],p=Object(i.g)(),N=function(){p.push("/bugview")};return Object(x.jsx)("div",{className:"container pt-5",children:Object(x.jsxs)("form",{className:"card border-primary mx-auto",style:{width:"350px"},children:[Object(x.jsx)("h3",{className:"card-header text-center text-white bg-primary",children:"Login"}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Username",value:c,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",value:b,onChange:function(e){return j(e.target.value)}})]}),Object(x.jsxs)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),g(!0),h.disableLogin?(t({id:"0",role:"admin",name:"The Master",username:"master",accessToken:"myaccesstoken"}),N()):function(e,t){return O.post("/login",{username:e,password:t}).then((function(e){return e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),f(e.data.accessToken)),e.data}))}(c,b).then((function(e){g(!1),t(e),N()})).catch((function(e){g(!1),l(""),j(""),alert("Failed to login: ".concat(e))}))},children:["Submit"," ",v&&Object(x.jsx)("span",{className:"spinner-border spinner-border-sm"})]})]})]})})};s(64);var z=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(i.d,{children:[Object(x.jsxs)(v,{path:"/bugview",children:[Object(x.jsx)(U,{}),Object(x.jsx)(r.a,{children:Object(x.jsx)("title",{children:"BugView"})}),Object(x.jsx)(B,{})]}),Object(x.jsxs)(v,{path:"/projectview",children:[Object(x.jsx)(U,{}),Object(x.jsx)(r.a,{children:Object(x.jsx)("title",{children:"Project View"})}),Object(x.jsx)(V,{})]}),Object(x.jsx)(i.b,{path:"/login",render:function(e){var t=e.location,s=JSON.parse(localStorage.getItem("user"));return s&&s.accessToken?(f(s.accessToken),Object(x.jsx)(i.a,{to:{pathname:"/bugview",state:{from:t}}})):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.a,{children:Object(x.jsx)("title",{children:"Log In"})}),Object(x.jsx)(q,{})]})}}),Object(x.jsx)(i.b,{path:"/",children:Object(x.jsx)(i.a,{to:"/login"})})]})})};l.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(P.a,{children:Object(x.jsx)(C,{children:Object(x.jsx)(z,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d06d7514.chunk.js.map