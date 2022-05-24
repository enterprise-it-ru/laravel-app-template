"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[928],{4513:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(821);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var a={class:""},o=["for"],u=["id","name","type","placeholder","required","readonly","enterkeyhint","pattern","autocomplete"],s=["innerHTML"],i={key:1,class:"mt-1 text-sm text-red-500"};const c={name:"InputText",emits:["update:modelValue"],props:{modelValue:String,label:{type:String,default:""},placeholder:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},type:{type:String,default:"text"},enterKeyHint:{type:String,default:""},autocomplete:{type:String,default:""},error:{type:[String,Number,Object],default:null},help:{type:[String,Number],default:null},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},data:function(){return{value:this.modelValue,elementId:this.id?this.id:this.name}},methods:{updateModelValue:function(e){this.$emit("update:modelValue",e.target.value)}}};const d=(0,n(3744).Z)(c,[["render",function(e,t,n,c,d,p){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("label",{for:d.elementId,class:"block text-sm font-medium text-gray-700"},(0,r.zw)(n.label),9,o),(0,r.wy)((0,r._)("input",{class:(0,r.C_)([n.error?"border-red-500":"","mt-1 form-input"]),id:d.elementId,name:n.name,type:n.type,placeholder:n.placeholder,required:n.required,readonly:n.readonly,enterkeyhint:n.enterKeyHint,onInput:t[0]||(t[0]=function(){return p.updateModelValue&&p.updateModelValue.apply(p,arguments)}),pattern:"number"===n.type?"[0-9]*":null,step:".001",autocomplete:""!==n.autocomplete?n.autocomplete:null,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.value=e})},null,42,u),[[r.YZ,d.value]]),n.help?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"mt-1 text-sm text-gray-500",innerHTML:n.help},null,8,s)):(0,r.kq)("",!0),n.error?((0,r.wg)(),(0,r.iD)("div",i,(0,r.zw)("object"===l(n.error)?n.error.join(","):n.error),1)):(0,r.kq)("",!0)])}]])},3812:(e,t,n)=>{n.d(t,{Z:()=>me});var r=n(821);var l=n(7462),a=n(9212),o=n(12),u=n(7325),s=n(4801),i=n(8123);function c(e,t){if(e)return e;let n=null!=t?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function d(e,t){let n=(0,r.iH)(c(e.value.type,e.value.as));return(0,r.bv)((()=>{n.value=c(e.value.type,e.value.as)})),(0,r.m0)((()=>{var e;n.value||!(0,s.v)(t)||(0,s.v)(t)instanceof HTMLButtonElement&&(null==(e=(0,s.v)(t))||!e.hasAttribute("type"))&&(n.value="button")})),n}var p,f=((p=f||{})[p.Open=0]="Open",p[p.Closed=1]="Closed",p);let m=Symbol("DisclosureContext");function v(e){let t=(0,r.f3)(m,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,v),t}return t}let g=Symbol("DisclosurePanelContext");let y=(0,r.aZ)({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let l=`headlessui-disclosure-button-${(0,u.M)()}`,c=`headlessui-disclosure-panel-${(0,u.M)()}`,d=(0,r.iH)(e.defaultOpen?0:1),p=(0,r.iH)(null),f=(0,r.iH)(null),v={buttonId:l,panelId:c,disclosureState:d,panel:p,button:f,toggleDisclosure(){d.value=(0,a.E)(d.value,{0:1,1:0})},closeDisclosure(){1!==d.value&&(d.value=1)},close(e){v.closeDisclosure();let t=e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?(0,s.v)(e):(0,s.v)(v.button):(0,s.v)(v.button);null==t||t.focus()}};return(0,r.JJ)(m,v),(0,i.Rb)((0,r.Fl)((()=>(0,a.E)(d.value,{0:i.ZM.Open,1:i.ZM.Closed})))),()=>{let{defaultOpen:r,...l}=e,a={open:0===d.value,close:v.close};return(0,o.sY)({props:l,slot:a,slots:t,attrs:n,name:"Disclosure"})}}}),b=(0,r.aZ)({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n,expose:a}){let u=v("DisclosureButton"),i=(0,r.f3)(g,null),c=null!==i&&i===u.panelId,p=(0,r.iH)(null);a({el:p,$el:p}),c||(0,r.m0)((()=>{u.button.value=p.value}));let f=d((0,r.Fl)((()=>({as:e.as,type:t.type}))),p);function m(){var t;e.disabled||(c?(u.toggleDisclosure(),null==(t=(0,s.v)(u.button))||t.focus()):u.toggleDisclosure())}function y(t){var n;if(!e.disabled)if(c)switch(t.key){case l.R.Space:case l.R.Enter:t.preventDefault(),t.stopPropagation(),u.toggleDisclosure(),null==(n=(0,s.v)(u.button))||n.focus()}else switch(t.key){case l.R.Space:case l.R.Enter:t.preventDefault(),t.stopPropagation(),u.toggleDisclosure()}}function b(e){if(e.key===l.R.Space)e.preventDefault()}return()=>{let r={open:0===u.disclosureState.value},l=c?{ref:p,type:f.value,onClick:m,onKeydown:y}:{id:u.buttonId,ref:p,type:f.value,"aria-expanded":e.disabled?void 0:0===u.disclosureState.value,"aria-controls":(0,s.v)(u.panel)?u.panelId:void 0,disabled:!!e.disabled||void 0,onClick:m,onKeydown:y,onKeyup:b};return(0,o.sY)({props:{...e,...l},slot:r,attrs:t,slots:n,name:"DisclosureButton"})}}}),h=(0,r.aZ)({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n,expose:l}){let a=v("DisclosurePanel");l({el:a.panel,$el:a.panel}),(0,r.JJ)(g,a.panelId);let u=(0,i.oJ)(),s=(0,r.Fl)((()=>null!==u?u.value===i.ZM.Open:0===a.disclosureState.value));return()=>{let r={open:0===a.disclosureState.value,close:a.close},l={id:a.panelId,ref:a.panel};return(0,o.sY)({props:{...e,...l},slot:r,attrs:t,slots:n,features:o.AN.RenderStrategy|o.AN.Static,visible:s.value,name:"DisclosurePanel"})}}});var w,x=((w=x||{})[w.First=0]="First",w[w.Previous=1]="Previous",w[w.Next=2]="Next",w[w.Last=3]="Last",w[w.Specific=4]="Specific",w[w.Nothing=5]="Nothing",w);function S(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),l=null!=r?r:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==l&&r.length-n-1>=l)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=l)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?r:a}var k=n(7419);var I,D=n(5445),E=n(2714),R=((I=R||{})[I.Open=0]="Open",I[I.Closed=1]="Closed",I),M=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(M||{});let _=Symbol("MenuContext");function O(e){let t=(0,r.f3)(_,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}let P=(0,r.aZ)({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let l=(0,r.iH)(1),u=(0,r.iH)(null),c=(0,r.iH)(null),d=(0,r.iH)([]),p=(0,r.iH)(""),f=(0,r.iH)(null),m=(0,r.iH)(1);function v(e=(e=>e)){let t=null!==f.value?d.value[f.value]:null,n=(0,D.z2)(e(d.value.slice()),(e=>(0,s.v)(e.dataRef.domRef))),r=t?n.indexOf(t):null;return-1===r&&(r=null),{items:n,activeItemIndex:r}}let g={menuState:l,buttonRef:u,itemsRef:c,items:d,searchQuery:p,activeItemIndex:f,activationTrigger:m,closeMenu:()=>{l.value=1,f.value=null},openMenu:()=>l.value=0,goToItem(e,t,n){let r=v(),l=S(e===x.Specific?{focus:x.Specific,id:t}:{focus:e},{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});p.value="",f.value=l,m.value=null!=n?n:1,d.value=r.items},search(e){let t=""!==p.value?0:1;p.value+=e.toLowerCase();let n=(null!==f.value?d.value.slice(f.value+t).concat(d.value.slice(0,f.value+t)):d.value).find((e=>e.dataRef.textValue.startsWith(p.value)&&!e.dataRef.disabled)),r=n?d.value.indexOf(n):-1;-1===r||r===f.value||(f.value=r,m.value=1)},clearSearch(){p.value=""},registerItem(e,t){let n=v((n=>[...n,{id:e,dataRef:t}]));d.value=n.items,f.value=n.activeItemIndex,m.value=1},unregisterItem(e){let t=v((t=>{let n=t.findIndex((t=>t.id===e));return-1!==n&&t.splice(n,1),t}));d.value=t.items,f.value=t.activeItemIndex,m.value=1}};return(0,E.O)([u,c],((e,t)=>{var n;0===l.value&&(g.closeMenu(),(0,D.sP)(t,D.tJ.Loose)||(e.preventDefault(),null==(n=(0,s.v)(u))||n.focus()))})),(0,r.JJ)(_,g),(0,i.Rb)((0,r.Fl)((()=>(0,a.E)(l.value,{0:i.ZM.Open,1:i.ZM.Closed})))),()=>{let r={open:0===l.value};return(0,o.sY)({props:e,slot:r,slots:t,attrs:n,name:"Menu"})}}}),N=(0,r.aZ)({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(e,{attrs:t,slots:n,expose:a}){let i=O("MenuButton"),c=`headlessui-menu-button-${(0,u.M)()}`;function p(e){switch(e.key){case l.R.Space:case l.R.Enter:case l.R.ArrowDown:e.preventDefault(),e.stopPropagation(),i.openMenu(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(i.itemsRef))||e.focus({preventScroll:!0}),i.goToItem(x.First)}));break;case l.R.ArrowUp:e.preventDefault(),e.stopPropagation(),i.openMenu(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(i.itemsRef))||e.focus({preventScroll:!0}),i.goToItem(x.Last)}))}}function f(e){if(e.key===l.R.Space)e.preventDefault()}function m(t){e.disabled||(0===i.menuState.value?(i.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(i.buttonRef))?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),t.stopPropagation(),i.openMenu(),function(e){requestAnimationFrame((()=>requestAnimationFrame(e)))}((()=>{var e;return null==(e=(0,s.v)(i.itemsRef))?void 0:e.focus({preventScroll:!0})}))))}a({el:i.buttonRef,$el:i.buttonRef});let v=d((0,r.Fl)((()=>({as:e.as,type:t.type}))),i.buttonRef);return()=>{var r;let l={open:0===i.menuState.value},a={ref:i.buttonRef,id:c,type:v.value,"aria-haspopup":!0,"aria-controls":null==(r=(0,s.v)(i.itemsRef))?void 0:r.id,"aria-expanded":e.disabled?void 0:0===i.menuState.value,onKeydown:p,onKeyup:f,onClick:m};return(0,o.sY)({props:{...e,...a},slot:l,attrs:t,slots:n,name:"MenuButton"})}}}),T=(0,r.aZ)({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n,expose:a}){let c=O("MenuItems"),d=`headlessui-menu-items-${(0,u.M)()}`,p=(0,r.iH)(null);function f(e){var t;switch(p.value&&clearTimeout(p.value),e.key){case l.R.Space:if(""!==c.searchQuery.value)return e.preventDefault(),e.stopPropagation(),c.search(e.key);case l.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==c.activeItemIndex.value){let e=c.items.value[c.activeItemIndex.value];null==(t=(0,s.v)(e.dataRef.domRef))||t.click()}c.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(c.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case l.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),c.goToItem(x.Next);case l.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),c.goToItem(x.Previous);case l.R.Home:case l.R.PageUp:return e.preventDefault(),e.stopPropagation(),c.goToItem(x.First);case l.R.End:case l.R.PageDown:return e.preventDefault(),e.stopPropagation(),c.goToItem(x.Last);case l.R.Escape:e.preventDefault(),e.stopPropagation(),c.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(c.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case l.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(c.search(e.key),p.value=setTimeout((()=>c.clearSearch()),350))}}function m(e){if(e.key===l.R.Space)e.preventDefault()}a({el:c.itemsRef,$el:c.itemsRef}),function({container:e,accept:t,walk:n,enabled:l}){(0,r.m0)((()=>{let r=e.value;if(!r||void 0!==l&&!l.value)return;let a=(0,k.r)(e);if(!a)return;let o=Object.assign((e=>t(e)),{acceptNode:t}),u=a.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,o,!1);for(;u.nextNode();)n(u.currentNode)}))}({container:(0,r.Fl)((()=>(0,s.v)(c.itemsRef))),enabled:(0,r.Fl)((()=>0===c.menuState.value)),accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let v=(0,i.oJ)(),g=(0,r.Fl)((()=>null!==v?v.value===i.ZM.Open:0===c.menuState.value));return()=>{var r,l;let a={open:0===c.menuState.value},u={"aria-activedescendant":null===c.activeItemIndex.value||null==(r=c.items.value[c.activeItemIndex.value])?void 0:r.id,"aria-labelledby":null==(l=(0,s.v)(c.buttonRef))?void 0:l.id,id:d,onKeydown:f,onKeyup:m,role:"menu",tabIndex:0,ref:c.itemsRef};return(0,o.sY)({props:{...e,...u},slot:a,attrs:t,slots:n,features:o.AN.RenderStrategy|o.AN.Static,visible:g.value,name:"MenuItems"})}}}),A=(0,r.aZ)({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n,expose:l}){let a=O("MenuItem"),i=`headlessui-menu-item-${(0,u.M)()}`,c=(0,r.iH)(null);l({el:c,$el:c});let d=(0,r.Fl)((()=>null!==a.activeItemIndex.value&&a.items.value[a.activeItemIndex.value].id===i)),p=(0,r.Fl)((()=>({disabled:e.disabled,textValue:"",domRef:c})));function f(t){if(e.disabled)return t.preventDefault();a.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(a.buttonRef))?void 0:e.focus({preventScroll:!0})}))}function m(){if(e.disabled)return a.goToItem(x.Nothing);a.goToItem(x.Specific,i)}function v(){e.disabled||d.value||a.goToItem(x.Specific,i,0)}function g(){e.disabled||!d.value||a.goToItem(x.Nothing)}return(0,r.bv)((()=>{var e,t;let n=null==(t=null==(e=(0,s.v)(c))?void 0:e.textContent)?void 0:t.toLowerCase().trim();void 0!==n&&(p.value.textValue=n)})),(0,r.bv)((()=>a.registerItem(i,p))),(0,r.SK)((()=>a.unregisterItem(i))),(0,r.m0)((()=>{0===a.menuState.value&&(!d.value||0!==a.activationTrigger.value&&(0,r.Y3)((()=>{var e,t;return null==(t=null==(e=(0,s.v)(c))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})})))})),()=>{let{disabled:r}=e,l={active:d.value,disabled:r};return(0,o.sY)({props:{...e,id:i,ref:c,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,onClick:f,onFocus:m,onPointermove:v,onMousemove:v,onPointerleave:g,onMouseleave:g},slot:l,attrs:n,slots:t,name:"MenuItem"})}}});function C(e,t){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function F(e,t){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function j(e,t){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}var H=n(1770),U=n(8305),L={class:"min-h-full bg-gray-50"},W={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},B={class:"flex items-center justify-between h-16"},$={class:"flex items-center"},Y=(0,r._)("div",{class:"flex-shrink-0"},[(0,r._)("img",{class:"h-8 w-8",src:"/images/workflow-mark-indigo-300.svg?e0807953ba6a2e5e8aabceb69544ca45",alt:"Workflow"})],-1),Z={class:"hidden md:block"},K={class:"ml-10 flex items-baseline space-x-4"},z={class:"hidden md:block"},V={class:"ml-4 flex items-center md:ml-6"},J=(0,r._)("span",{class:"sr-only"},"Open user menu",-1),q={class:"bg-indigo-100 ring-2 ring-indigo-400 h-10 w-10 rounded-full shadow flex items-center justify-center font-extrabold text-xl"},G={class:"text-white ml-4 mr-4 font-bold"},Q=["href"],X={class:"-mr-2 flex md:hidden"},ee=(0,r._)("span",{class:"sr-only"},"Open main menu",-1),te={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},ne={class:"pt-4 pb-3 border-t border-gray-700"},re={class:"flex items-center px-5"},le=(0,r._)("div",{class:"flex-shrink-0"},[(0,r._)("div",{class:"h-10 w-10 rounded-full text-white shadow flex items-center justify-center font-extrabold text-xl"},[(0,r._)("b",null,"A")])],-1),ae={class:"ml-3"},oe={class:"text-base font-medium leading-none text-white"},ue={class:"text-sm font-medium leading-none text-gray-400"},se={class:"mt-3 px-2 space-y-1"},ie={key:0,class:"bg-white shadow"},ce={class:"max-w-7xl mx-auto py-3.5 px-4 sm:px-6 lg:px-8"},de={class:"text-xl font-bold text-gray-900"},pe={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},fe={class:"px-4 py-4 sm:px-0"};const me={props:{title:{type:String,default:null}},setup:function(e){var t=e,n=(0,H.M)().userData,l=U.Z.currentRoute.value.name,a=[{name:"Dashboard",routeName:"HomePage",current:"HomePage"===l},{name:"Expenses",routeName:"Expenses",current:"Expenses"===l},{name:"Investments and Results",routeName:"Investments",current:"Investments"===l},{name:"Accounts",routeName:"",current:!1}],o=[{name:"Sign out",href:"#"}];return function(l,u){var s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",L,[(0,r.Wm)((0,r.SU)(y),{as:"nav",class:"bg-indigo-600 shadow"},{default:(0,r.w5)((function(e){var t=e.open;return[(0,r._)("div",W,[(0,r._)("div",B,[(0,r._)("div",$,[Y,(0,r._)("div",Z,[(0,r._)("div",K,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(a,(function(e){return(0,r.Wm)(s,{key:e.name,to:{name:e.routeName},class:(0,r.C_)([e.current?"bg-indigo-700 text-white":"text-white hover:bg-indigo-800 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"]),"aria-current":e.current?"page":void 0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(e.name),1)]})),_:2},1032,["to","class","aria-current"])})),64))])])]),(0,r._)("div",z,[(0,r._)("div",V,[(0,r.Wm)((0,r.SU)(P),{as:"div",class:"ml-3 relative"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,r.SU)(N),{class:"max-w-xs flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:rounded-full"},{default:(0,r.w5)((function(){return[J,(0,r._)("div",q,[(0,r.Wm)((0,r.SU)(C),{class:"text-gray-500 h-6 w-6"})]),(0,r._)("div",G,(0,r.zw)((0,r.SU)(n).name),1)]})),_:1}),(0,r.Wm)(r.uT,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,r.SU)(T),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,r.w5)((function(){return[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(o,(function(e){return(0,r.Wm)((0,r.SU)(A),{key:e.name},{default:(0,r.w5)((function(t){var n=t.active;return[(0,r._)("a",{href:e.href,class:(0,r.C_)([n?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},(0,r.zw)(e.name),11,Q)]})),_:2},1024)})),64))]})),_:1})]})),_:1})]})),_:1})])]),(0,r._)("div",X,[(0,r.Wm)((0,r.SU)(b),{class:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},{default:(0,r.w5)((function(){return[ee,t?((0,r.wg)(),(0,r.j4)((0,r.SU)(j),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):((0,r.wg)(),(0,r.j4)((0,r.SU)(F),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]})),_:2},1024)])])]),(0,r.Wm)((0,r.SU)(h),{class:"md:hidden"},{default:(0,r.w5)((function(){return[(0,r._)("div",te,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(a,(function(e){return(0,r.Wm)((0,r.SU)(b),{key:e.name,as:"a",href:e.href,class:(0,r.C_)([e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":e.current?"page":void 0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(e.name),1)]})),_:2},1032,["href","class","aria-current"])})),64))]),(0,r._)("div",ne,[(0,r._)("div",re,[le,(0,r._)("div",ae,[(0,r._)("div",oe,(0,r.zw)((0,r.SU)(n).name),1),(0,r._)("div",ue,(0,r.zw)((0,r.SU)(n).email),1)])]),(0,r._)("div",se,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(o,(function(e){return(0,r.Wm)((0,r.SU)(b),{key:e.name,as:"a",href:e.href,class:"block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(e.name),1)]})),_:2},1032,["href"])})),64))])])]})),_:1})]})),_:1}),e.title?((0,r.wg)(),(0,r.iD)("header",ie,[(0,r._)("div",ce,[(0,r._)("h1",de,(0,r.zw)(t.title),1)])])):(0,r.kq)("",!0),(0,r._)("main",null,[(0,r._)("div",pe,[(0,r._)("div",fe,[(0,r.WI)(l.$slots,"default")])])])])}}}},1928:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(821),l={class:"card"},a=(0,r._)("div",null,[(0,r._)("h3",{class:"text-lg font-medium text-gray-900"},"Category"),(0,r._)("p",{class:"mt-1 text-sm text-gray-600"},"Enter the name of the category to group expenses")],-1),o={key:0,class:"bg-red-500 inline-block text-white rounded px-4 py-2"},u={class:"w-2/4"},s=(0,r._)("div",{class:"border-b"},null,-1),i=["disabled"],c=(0,r.Uk)("Back");var d=n(3812),p=n(4513),f=n(9669),m=n.n(f);const v={name:"CategoryForm",components:{InputText:p.Z,PageComponent:d.Z},data:function(){return{form:{name:""},loading:!1,errors:null,componentKey:0}},methods:{submitForm:function(){var e=this;this.loading=!0,m().post("/api/expenses/create-category",this.form).then((function(){e.$router.push({name:"Expenses"})})).catch((function(t){t.response.data.errors?(e.errors=t.response.data.errors,e.componentKey+=1):alert("An error has occurred")})).finally((function(){e.loading=!1}))}}};const g=(0,n(3744).Z)(v,[["render",function(e,t,n,d,p,f){var m=(0,r.up)("input-text"),v=(0,r.up)("router-link"),g=(0,r.up)("page-component");return(0,r.wg)(),(0,r.j4)(g,{title:"Add Category"},{default:(0,r.w5)((function(){var e;return[(0,r._)("div",l,[(0,r._)("form",{class:"space-y-6 w-2/3 mx-auto",action:"#",method:"POST",onSubmit:t[1]||(t[1]=(0,r.iM)((function(){return f.submitForm&&f.submitForm.apply(f,arguments)}),["prevent"]))},[a,p.errors&&p.errors.message?((0,r.wg)(),(0,r.iD)("div",o,(0,r.zw)(p.errors.message),1)):(0,r.kq)("",!0),(0,r._)("div",u,[((0,r.wg)(),(0,r.j4)(m,{modelValue:p.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.name=e}),key:p.componentKey,error:null===(e=p.errors)||void 0===e?void 0:e.name,name:"name",label:"Category Name",placeholder:"Enter a category name"},null,8,["modelValue","error"]))]),s,(0,r._)("button",{type:"submit",class:"btn-primary",disabled:p.loading},"Save",8,i),(0,r.Wm)(v,{to:{name:"Expenses"},class:"btn btn-cancel ml-3"},{default:(0,r.w5)((function(){return[c]})),_:1})],32)])]})),_:1})}]])},7325:(e,t,n)=>{n.d(t,{M:()=>l});let r=0;function l(){return++r}},2714:(e,t,n)=>{n.d(t,{A:()=>u,O:()=>s});var r=n(821);function l(e,t,n){"undefined"!=typeof window&&(0,r.m0)((r=>{window.addEventListener(e,t,n),r((()=>window.removeEventListener(e,t,n)))}))}var a=n(4801);var o,u=((o=u||{})[o.None=1]="None",o[o.IgnoreScrollbars=2]="IgnoreScrollbars",o);function s(e,t,n=1){let r=!1;function o(l){if(r)return;r=!0,function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{r=!1}));let o=l.target;if(!o.ownerDocument.documentElement.contains(o))return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);if(2==(2&n)){let e=20,t=o.ownerDocument.documentElement;if(l.clientX>t.clientWidth-e||l.clientX<e||l.clientY>t.clientHeight-e||l.clientY<e)return}for(let e of u){if(null===e)continue;let t=e instanceof HTMLElement?e:(0,a.v)(e);if(null!=t&&t.contains(o))return}t(l,o)}l("pointerdown",o),l("mousedown",o)}},8123:(e,t,n)=>{n.d(t,{Rb:()=>i,ZM:()=>o,ih:()=>u,oJ:()=>s});var r=n(821);let l=Symbol("Context");var a,o=((a=o||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function u(){return null!==s()}function s(){return(0,r.f3)(l,null)}function i(e){(0,r.JJ)(l,e)}},7462:(e,t,n)=>{n.d(t,{R:()=>l});var r,l=((r=l||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},4801:(e,t,n)=>{function r(e){return null==e||null==e.value?null:"$el"in e.value?e.value.$el:e.value}n.d(t,{v:()=>r})},5445:(e,t,n)=>{n.d(t,{C5:()=>m,TO:()=>i,fE:()=>c,jA:()=>y,sP:()=>f,tJ:()=>p,z2:()=>g});var r=n(9212),l=n(7419);let a=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var o,u,s,i=((s=i||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),c=((u=c||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),d=((o=d||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o);var p=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(p||{});function f(e,t=0){var n;return e!==(null==(n=(0,l.r)(e))?void 0:n.body)&&(0,r.E)(t,{0:()=>e.matches(a),1(){let t=e;for(;null!==t;){if(t.matches(a))return!0;t=t.parentElement}return!1}})}function m(e){null==e||e.focus({preventScroll:!0})}let v=["textarea","input"].join(",");function g(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),l=t(n);if(null===r||null===l)return 0;let a=r.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function y(e,t){var n;let r,l=null!=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:null==e?void 0:e.ownerDocument)?n:document,o=Array.isArray(e)?g(e):function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(a))}(e),u=l.activeElement,s=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,o.indexOf(u))-1;if(4&t)return Math.max(0,o.indexOf(u))+1;if(8&t)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,p=o.length;do{if(d>=p||d+p<=0)return 0;let e=i+d;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}r=o[e],null==r||r.focus(c),d+=s}while(r!==l.activeElement);return r.hasAttribute("tabindex")||r.setAttribute("tabindex","0"),6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,v))&&n}(r)&&r.select(),2}},9212:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:()=>r})},7419:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(4801);function l(e){if("undefined"==typeof window)return null;if(e instanceof Node)return e.ownerDocument;if(null!=e&&e.hasOwnProperty("value")){let t=(0,r.v)(e);if(t)return t.ownerDocument}return document}},12:(e,t,n)=>{n.d(t,{AN:()=>u,CE:()=>d,l4:()=>s,sY:()=>i});var r,l,a=n(821),o=n(9212),u=((l=u||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function i({visible:e=!0,features:t=0,...n}){var r;if(e||2&t&&n.props.static)return c(n);if(1&t){let e=null==(r=n.props.unmount)||r?0:1;return(0,o.E)(e,{0:()=>null,1:()=>c({...n,props:{...n.props,hidden:!0,style:{display:"none"}}})})}return c(n)}function c({props:e,attrs:t,slots:n,slot:r,name:l}){var o;let{as:u,...s}=d(e,["unmount","static"]),i=null==(o=n.default)?void 0:o.call(n,r);if("template"===u){if(Object.keys(s).length>0||Object.keys(t).length>0){let[e,...n]=null!=i?i:[];if(!function(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}(e)||n.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,a.Ho)(e,s)}return Array.isArray(i)&&1===i.length?i[0]:i}return(0,a.h)(u,s,i)}function d(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);