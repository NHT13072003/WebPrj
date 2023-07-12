"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[188],{37139:function(e,t,a){var o=a(99581),n=a(26952),r=a(81433),i=a(44520),s=a(79821),l=a(3939),c=a(7936),u=a(15312),m=a(10159),d=a(70079),p=a(38088),v=a(99357),h=a(41896),f=a(47478),x=a(35250);function _(e){let{onClick:t}=e;const{query:a}=(0,m.Z)((e=>({query:e(h.storeName).getCurrentQuery()}))),{primary:o,secondary:n}=(0,v.getCurrentDates)(a,"period=month&compare=previous_year");return(0,x.jsxs)("div",{className:"woocommerce-filters-filter",children:[(0,x.jsx)("span",{className:"woocommerce-filters-label",children:(0,c.__)("Date range:","mailpoet")}),(0,x.jsx)("div",{className:"components-dropdown",tabIndex:-1,children:(0,x.jsx)("button",{type:"button","aria-expanded":"false",onClick:t,className:"components-button woocommerce-dropdown-button is-multi-line",children:(0,x.jsxs)("div",{className:"woocommerce-dropdown-button__labels",children:[(0,x.jsxs)("span",{children:[o.label," (",o.range,")"]}),(0,x.jsx)("span",{children:(0,c.sprintf)((0,c.__)("vs. %1$s (%2$s)","mailpoet"),n.label,n.range)})]})})})]})}function w(){const[e,t]=d.useState(!1),a=p.Hooks.applyFilters("mailpoet_analytics_filter",(0,x.jsx)(_,{onClick:()=>{t(!0)}}));return(0,x.jsxs)("div",{className:"mailpoet-analytics-filter-element woocommerce-layout",children:[a,e&&(0,x.jsx)(f.ZG,{tracking:{utm_medium:"upsell_modal",utm_campaign:"automation_analytics_date_range_filter"},onRequestClose:()=>t(!1),children:(0,c.__)("Changing the date range is a premium feature.","mailpoet")})]})}var j=a(12025);function b(){const{automation:e}=(0,m.Z)((e=>({automation:e(h.storeName).getAutomation()})));return(0,x.jsxs)("header",{className:"mailpoet-analytics-header",children:[(0,x.jsx)(w,{}),(0,x.jsx)(l.ZP,{href:(0,u.f)(j.x.urls.automationEditor,{id:e.id}),isPrimary:!0,children:(0,c.__)("Edit automation","mailpoet")})]})}var y=a(83047),g=a(92295);function N(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"current";const o=(0,r.select)(h.storeName).getSection("overview");if(void 0===o.data)return;const n=o.data[e]??null,i=(null===(t=o.data)||void 0===t?void 0:t.total)??null;if(!(n&&i&&n[a]&&i[a]))return 0;const s=100*n[a]/i[a]/100;return s}function S(e){const t=N(e,"current"),a=N(e,"previous");if(void 0!==t&&void 0!==a)return 0===a?0:(t>a?t-a:a-t)/a*100}function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"current";const a=(0,r.select)(h.storeName).getSection("overview");if(void 0===a.data)return;const o=a.data[e]??null;return o&&o[t]?o[t]:0}function E(e){const t=k(e,"current"),a=k(e,"previous");if(void 0===t||void 0===a)return;const o=t>a?t-a:a-t;return 0===o||0===a?0:o/a*100}function C(){const{overview:e,hasEmails:t}=(0,m.Z)((e=>({overview:e(h.storeName).getSection("overview"),hasEmails:e(h.storeName).automationHasEmails()}))),a=new Intl.NumberFormat(g.locale.toString(),{style:"percent",maximumFractionDigits:2}),o=new Intl.NumberFormat(g.locale.toString()),n=[];var r,i;return void 0!==e.data&&(n.push((0,x.jsx)(y.SummaryNumber,{label:(0,c.__)("Opened","mailpoet"),value:a.format(N("opened")),delta:S("opened").toFixed(2)},"overview-opened")),n.push((0,x.jsx)(y.SummaryNumber,{label:(0,c.__)("Clicked","mailpoet"),value:a.format(N("clicked")),delta:S("clicked").toFixed(2)},"overview-clicked"))),void 0!==e.data&&j.x.isWoocommerceActive&&(n.push((0,x.jsx)(y.SummaryNumber,{label:(0,c._x)("Orders","WooCommerce orders","mailpoet"),delta:E("orders").toFixed(2),value:o.format(k("orders"))},"overview-orders")),n.push((0,x.jsx)(y.SummaryNumber,{label:(0,c.__)("Revenue","mailpoet"),delta:E("revenue").toFixed(2),value:null===(r=e.data)||void 0===r||null===(i=r.revenue_formatted)||void 0===i?void 0:i.current},"overview-revenue"))),t?(0,x.jsxs)("div",{className:"mailpoet-automation-analytics-overview",children:[(0,x.jsx)("h1",{children:(0,c.__)("Overview","mailpoet")}),0===n.length&&(0,x.jsx)(y.SummaryListPlaceholder,{numberOfItems:j.x.isWoocommerceActive?4:2},"placeholder"),0!==n.length&&(0,x.jsx)(y.SummaryList,{label:(0,c.__)("Overview","mailpoet"),children:()=>n})]}):null}var O=a(16374),L=a(92893);function F(){return(0,x.jsx)("p",{children:"Automation flow"})}function I(){return(0,x.jsx)("p",{children:"Emails"})}function R(){return(0,x.jsx)("p",{children:"Orders"})}function Z(){return(0,x.jsx)("p",{children:"Subscribers"})}function A(){const e=(0,O.k6)(),t=(0,O.TH)(),{hasEmails:a}=(0,m.Z)((e=>({hasEmails:e(h.storeName).automationHasEmails()}))),o=(0,d.useMemo)((()=>new URLSearchParams(t.search)),[t]),n=o.get("tab")??"automation-flow",r=[{name:"automation-flow",title:(0,c.__)("Automation flow","mailpoet")}];a&&(r.push({name:"automation-emails",title:(0,c.__)("Emails","mailpoet")}),r.push({name:"automation-orders",title:(0,c._x)("Orders","WooCommerce orders","mailpoet")}),r.push({name:"automation-subscribers",title:(0,c.__)("Subscribers","mailpoet")}));const i=(0,d.useCallback)((t=>{const a=new URLSearchParams({...Object.fromEntries(o.entries()),tab:t});e.push({search:a.toString()})}),[o,e]);return(0,x.jsx)("div",{className:"mailpoet-analytics-tabs",children:(0,x.jsx)(L.Z,{onSelect:i,initialTabName:n,tabs:r,children:e=>{switch(e.name){case"automation-flow":return(0,x.jsx)(F,{});case"automation-emails":return(0,x.jsx)(I,{});case"automation-orders":return(0,x.jsx)(R,{});case"automation-subscribers":return(0,x.jsx)(Z,{});default:return null}}})})}var P=a(59481),D=a(77159);const H=window.mailpoet_automation_api;function M(){return(0,x.jsxs)("div",{className:"mailpoet-automation-analytics",children:[(0,x.jsx)(b,{}),(0,x.jsx)(C,{}),(0,x.jsx)(A,{})]})}function W(){return(0,x.jsxs)(n.BrowserRouter,{children:[(0,x.jsx)(i.Q,{}),(0,x.jsx)(s.w,{}),(0,x.jsx)(M,{})]})}(()=>{const e=(window.mailpoet_locale_full??document.documentElement.lang??"en").replace("_","-");try{new Intl.Locale(e)}catch(t){try{return new Intl.Locale(e.split("-")[0])}catch(e){return new Intl.Locale("en")}}})(),window.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("mailpoet_automation_analytics");e&&((0,h.createStore)(),(0,P.y)(),(()=>{const e=`${H.root}/mailpoet/v1/`;D.default.use(D.default.createRootURLMiddleware(e)),D.default.use(D.default.createNonceMiddleware(H.nonce))})(),(0,r.select)(h.storeName).getSections().forEach((e=>{(0,r.dispatch)(h.storeName).updateSection(e)})),o.render((0,x.jsx)(W,{}),e))}))},65311:function(e){e.exports=jQuery}},function(e){e.O(0,[351],(function(){return 37139,e(e.s=37139)})),e.O()}]);