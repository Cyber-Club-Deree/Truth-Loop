(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["categoriesform"],{"2e9b":function(t,e,s){"use strict";var a=s("f955"),i=s.n(a);i.a},"91f7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bx--content",attrs:{id:"category-form"}},[s("v-card",{staticClass:"elevation-24"},[s("v-card-title",[t._v("Add Category")]),s("cv-form",{on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[s("body",[s("cv-text-input",{attrs:{label:"Name","invalid-message":"",placeholder:"Enter the name of the category"},model:{value:t.instance.name,callback:function(e){t.$set(t.instance,"name",e)},expression:"instance.name"}},[t.useInvalidMessageSlot?s("template",{slot:"invalid-message"},[t._v(" Required field ")]):t._e()],2),s("cv-text-input",{attrs:{label:"Description",placeholder:"Provide a description of the category"},model:{value:t.instance.description,callback:function(e){t.$set(t.instance,"description",e)},expression:"instance.description"}},[t._v(" >")])],1),t.errorTitle?s("cv-toast-notification",{attrs:{kind:"error",title:t.errorTitle,"sub-title":t.errorSubTitle,"close-aria-label":t.closeAriaLabel,"low-contrast":t.lowContrast},on:{close:t.doClose}}):t._e(),t.successTitle?s("cv-toast-notification",{attrs:{kind:"success",title:t.successTitle,"sub-title":t.successSubTitle,"close-aria-label":t.closeAriaLabel,"low-contrast":t.lowContrast},on:{close:t.doClose}}):t._e(),s("cv-button",{attrs:{kind:"primary"}},[t._v("Add")]),s("cv-button",{staticStyle:{float:"right"},attrs:{kind:"secondary"},on:{click:t.doReset}},[t._v("Reset")])],1)],1)],1)},i=[],r=(s("a4d3"),s("e01a"),s("b0c0"),s("d3b7"),s("5530")),n=(s("96cf"),s("1da1")),o={name:"category-form",data:function(){return{instance:{name:"",description:""},disabled:!1,visible:!1,status:"",invalidStatusMessage:!1,useInvalidMessageSlot:!1,errorTitle:!1,errorSubTitle:"",successTitle:!1,successSubTitle:"",closeAriaLabel:"Custom close aria label",lowContrast:!0}},methods:{doReset:function(){this.errorTitle=!1,this.errorSubTitle=!1,this.successTitle=!1,this.successSubTitle=!1,this.instance.name="",this.instance.description=""},doClose:function(){this.successTitle?this.doReset():(this.errorTitle=!1,this.errorSubTitle=!1,this.successTitle=!1,this.successSubTitle=!1)},formInvalidator:function(){return this.useInvalidMessageSlot=!this.instance.name,!this.useInvalidMessageSlot},okStatus:function(t){return t.status>=200&&t.status<300?(this.successTitle=t.statusText,this.successSubTitle="HTTP Status Code: ".concat(t.status),!0):(this.errorTitle=t.statusText,this.errorSubTitle="HTTP Status Code: ".concat(t.status),!1)},addItem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.formInvalidator()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,s=Object(r["a"])({},t.instance),s.status===t.statusPlaceholder&&delete s.status,""===s.summary&&delete s.summary,""===s.date_introduced&&delete s.date_introduced,""===s.link_to_full_text&&delete s.link_to_full_text,e.next=10,fetch("/api/v1/categories",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}});case 10:if(a=e.sent,!t.okStatus(a)){e.next=14;break}return e.next=14,a.json();case 14:e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](2),t.errorTitle=e.t0,t.errorSubTitle="",console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,16]])})))()}}},c=o,l=(s("2e9b"),s("2877")),u=s("6544"),d=s.n(u),b=s("b0af"),f=s("99d9"),v=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=v.exports;d()(v,{VCard:b["a"],VCardTitle:f["d"]})},f955:function(t,e,s){}}]);
//# sourceMappingURL=categoriesform.b89e97c8.js.map