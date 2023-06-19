"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[544],{8557:function(t,e,s){s.d(e,{Z:function(){return o}});s(7658);function n(t){return{all:t=t||new Map,on:function(e,s){var n=t.get(e);n?n.push(s):t.set(e,[s])},off:function(e,s){var n=t.get(e);n&&(s?n.splice(n.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var n=t.get(e);n&&n.slice().map((function(t){t(s)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,s)}))}}}const l=n();var o=l},1645:function(t,e,s){var n=s(2492),l=s.n(n);e.Z=l().mixin({toast:!0,showConfirmButton:!1,timer:2500})},8134:function(t,e,s){s.d(e,{Z:function(){return y}});var n=s(3396),l=s(7139);const o={class:"card border mb-4 col-sm-12"},i=["onClick"],a=["src"],r={class:"card-body p-0 p-2"},c={class:"d-flex justify-content-between align-items-center my-2"},d={class:"fw-bold fs-4"},u={class:"badge pill bg-brown"},p={class:"d-flex justify-content-between align-items-center"},b={class:"fs-5 text-danger fw-bold"},_={class:"text-muted"};function h(t,e,s,h,f,g){const w=(0,n.up)("swiper-slide"),m=(0,n.up)("swiper");return(0,n.wg)(),(0,n.j4)(m,{class:"mt-5",style:{"--swiper-navigation-color":"brown","--swiper-pagination-color":"brown"},modules:f.modules,navigation:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:10}}},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(f.products,(e=>((0,n.wg)(),(0,n.j4)(w,null,{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("div",o,[(0,n._)("div",{onClick:t=>g.getDetail(e.id)},[(0,n._)("img",{src:e.imageUrl,class:"card-img-top object-fit"},null,8,a)],8,i),(0,n._)("div",r,[(0,n._)("div",c,[(0,n._)("span",d,(0,l.zw)(e.title),1),(0,n._)("span",u,(0,l.zw)(e.category),1)]),(0,n._)("div",p,[(0,n._)("span",b,"特價 NT$"+(0,l.zw)(t.$filters.currency(e.price)),1),(0,n._)("span",_,[(0,n._)("del",null,"原價NT$"+(0,l.zw)(t.$filters.currency(e.origin_price)),1)])])])])])])),_:2},1024)))),256))])),_:1},8,["modules"])}s(7658);var f=s(8040),g=s(9477),w={components:{Swiper:f.tq,SwiperSlide:f.o5},emits:["update"],data(){return{modules:[g.tl,g.pt,g.W_],products:[]}},methods:{getProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/coffee-api/products/all";this.$http.get(t).then((t=>{this.products=t.data.products}))},getDetail(t){this.$router.push(`/product/${t}`),this.$emit("update")}},mounted(){this.getProducts()}},m=s(89);const v=(0,m.Z)(w,[["render",h],["__scopeId","data-v-0ba1c8dc"]]);var y=v},3544:function(t,e,s){s.r(e),s.d(e,{default:function(){return at}});var n=s(3396),l=s(7139),o=s(9242);const i={class:"container-fluid"},a={class:"mt-3"},r={key:0,class:"row"},c=(0,n._)("h3",{class:"mt-3 mb-4"},"購物清單",-1),d={class:"col-md-9"},u={class:"table border text-center"},p=(0,n._)("thead",null,[(0,n._)("tr",{class:"table-brown"},[(0,n._)("th",null,"商品"),(0,n._)("th",null,"數量"),(0,n._)("th",null,"單位"),(0,n._)("th",null,"單價"),(0,n._)("th",null,"小計"),(0,n._)("th")])],-1),b={class:"fw-bold align-middle"},_=["src"],h=(0,n._)("br",null,null,-1),f={class:"mb-0 fw-bold"},g={style:{"max-width":"160px"}},w={class:"input-group border"},m=["onClick"],v=(0,n._)("i",{class:"bi bi-dash"},null,-1),y=[v],x=["onUpdate:modelValue","onChange"],C=["onClick"],k=(0,n._)("i",{class:"bi bi-plus"},null,-1),$=[k],Z=["onClick"],z=(0,n._)("i",{class:"bi bi-x-lg"},null,-1),L=[z],U={class:"d-flex justify-content-between my-2"},q=(0,n._)("i",{class:"bi bi-trash-fill"},null,-1),D=(0,n._)("i",{class:"bi bi-arrow-return-left"},null,-1),j={class:"col-md-3"},P={class:"table border fw-bold"},I=(0,n._)("thead",{class:"table-brown text-center"},[(0,n._)("tr",null,[(0,n._)("th",{colspan:"2"},[(0,n._)("span",{class:"fs-4"},"訂單金額")])])],-1),V={class:"fs-6"},W=(0,n._)("td",{class:"border-0 pt-4"},"總計",-1),N={class:"border-0 pt-4 text-end"},T={key:0},A=(0,n._)("td",{class:"text-danger"},"折扣金額",-1),B={class:"text-end text-danger"},S={colspan:"2",class:"border-0 pb-4"},H={class:"fs-4 border-top"},Y=(0,n._)("td",{class:"border-0 pt-4"},"總金額",-1),K={class:"border-0 pt-4 text-end"},M={colspan:"2"},O={key:1,class:"container"},E={class:"row"},F={class:"col-md-8 mx-auto border p-5 m-5 rounded bg-brown text-white text-center shadow-lg"},G=(0,n._)("h1",null,"購物車為空",-1),J=(0,n._)("i",{class:"bi bi-cart"},null,-1),Q={class:"row"},R=(0,n._)("div",{class:"text-center"},[(0,n._)("span",{class:"fs-1 fw-bold text-white bg-brown opacity-75 px-5"},"熱銷商品")],-1),X={class:"container-fluid"};function tt(t,e,s,v,k,z){const tt=(0,n.up)("loading"),et=(0,n.up)("router-link"),st=(0,n.up)("AllProduct");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(tt,{active:k.isLoading},null,8,["active"]),(0,n._)("div",i,[(0,n._)("div",a,[k.carts.length>0?((0,n.wg)(),(0,n.iD)("div",r,[c,(0,n._)("div",d,[(0,n._)("table",u,[p,(0,n._)("tbody",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.carts,(e=>((0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",null,[(0,n._)("img",{src:e.product.imageUrl,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,_),h,(0,n._)("p",f,(0,l.zw)(e.product.title),1)]),(0,n._)("td",g,[(0,n._)("div",w,[(0,n._)("button",{class:"btn btn-outline-dark border-0",type:"button",onClick:t=>z.minus(e)},y,8,m),(0,n.wy)((0,n._)("input",{type:"number",class:"form-control text-center",min:"1","onUpdate:modelValue":t=>e.qty=t,onChange:t=>z.updateCart(e)},null,40,x),[[o.nr,e.qty,void 0,{number:!0}]]),(0,n._)("button",{class:"btn btn-outline-dark border-0",type:"button",onClick:t=>z.plus(e)},$,8,C)])]),(0,n._)("td",null,(0,l.zw)(e.product.unit),1),(0,n._)("td",null,(0,l.zw)(t.$filters.currency(e.product.price)),1),(0,n._)("td",null,(0,l.zw)(t.$filters.currency(e.final_total)),1),(0,n._)("td",null,[(0,n._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>z.removeCartItem(e.id)},L,8,Z)])])))),256))])]),(0,n._)("div",U,[(0,n._)("button",{type:"button",class:"btn btn btn-outline-danger w-50 me-5",onClick:e[0]||(e[0]=t=>z.removeAllCartItem())},[q,(0,n.Uk)(" 全部清空 ")]),(0,n.Wm)(et,{to:"/products",class:"btn btn-outline-secondary w-50"},{default:(0,n.w5)((()=>[D,(0,n.Uk)(" 繼續購物")])),_:1})])]),(0,n._)("div",j,[(0,n._)("table",P,[I,(0,n._)("tbody",V,[(0,n._)("tr",null,[W,(0,n._)("td",N," NT$"+(0,l.zw)(t.$filters.currency(k.cart.total)),1)]),k.cart.final_total!==k.cart.total?((0,n.wg)(),(0,n.iD)("tr",T,[A,(0,n._)("td",B," NT$"+(0,l.zw)(t.$filters.currency(k.cart.total-k.cart.final_total)),1)])):(0,n.kq)("",!0),(0,n._)("tr",null,[(0,n._)("td",S,[(0,n.Uk)(" 優惠碼 "),(0,n.wy)((0,n._)("input",{type:"text",class:"w-100",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[1]||(e[1]=t=>k.coupon_code=t)},null,512),[[o.nr,k.coupon_code]]),(0,n._)("button",{type:"button",class:"btn btn-outline-danger w-100 mt-2",onClick:e[2]||(e[2]=t=>z.addCouponCode())}," 使用優惠券 ")])]),(0,n._)("tr",H,[Y,(0,n._)("td",K," NT$"+(0,l.zw)(t.$filters.currency(k.cart.final_total)),1)]),(0,n._)("tr",null,[(0,n._)("td",M,[(0,n.Wm)(et,{to:"/order",class:"btn btn-outline-brown w-100 my-3"},{default:(0,n.w5)((()=>[(0,n.Uk)("下一步")])),_:1})])])])])])])):((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",E,[(0,n._)("div",F,[G,(0,n.Wm)(et,{to:"/products",class:"btn btn-brown border btn-lg w-100 mt-5"},{default:(0,n.w5)((()=>[J,(0,n.Uk)(" 繼續購買 ")])),_:1})]),(0,n._)("div",Q,[R,(0,n._)("div",X,[(0,n.Wm)(st)])])])]))])])],64)}var et=s(1645),st=s(8134),nt=s(8557),lt={components:{AllProduct:st.Z},data(){return{cart:{},carts:[],isLoading:!1,coupon_code:""}},inject:["emitter","$httpMessageState"],methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/coffee-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t),this.cart=t.data.data,this.carts=t.data.data.carts,this.isLoading=!1}))},plus(t){t.qty+=1,this.updateCart(t)},minus(t){t.qty>1&&(t.qty-=1,this.updateCart(t))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/coffee-api/cart/${t.id}`;this.isLoading=!0;const s={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:s}).then((t=>{console.log(t),this.isLoading=!1,this.getCart(),nt.Z.emit("get-cart")}))},removeCartItem(t){const e=`https://vue3-course-api.hexschool.io/api/coffee-api/cart/${t}`;this.isLoading=!0,this.$http.delete(e).then((t=>{et.Z.fire({icon:"error",title:"移除該品項"}),this.getCart(),this.isLoading=!1,nt.Z.emit("get-cart")}))},removeAllCartItem(){const t="https://vue3-course-api.hexschool.io/api/coffee-api/carts";this.isLoading=!0,this.$http.delete(t).then((t=>{et.Z.fire({icon:"error",title:"全部移除"}),this.getCart(),this.isLoading=!1,nt.Z.emit("get-cart")}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/coffee-api/coupon",e={code:this.coupon_code};this.$http.post(t,{data:e}).then((t=>{console.log("123",t),t.data.success?(this.getCart(),et.Z.fire({icon:"success",title:"使用優惠券"})):et.Z.fire({icon:"error",title:"使用失敗"})}))}},created(){this.getCart()}},ot=s(89);const it=(0,ot.Z)(lt,[["render",tt]]);var at=it}}]);
//# sourceMappingURL=544.9e396eef.js.map