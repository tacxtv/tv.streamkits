(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{504:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("bb7be3e6",content,!0,{sourceMap:!1})},522:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5bc5e429",content,!0,{sourceMap:!1})},523:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,'.v-application{font-family:"Roboto",sans-serif!important}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}',""]),r.locals={},t.exports=r},524:function(t,e,n){"use strict";n(504)},525:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,'.aldrich-title{font-size:2.725rem!important}.aldrich-title,.aldrich-title-mobile{font-weight:600;line-height:2.5rem;letter-spacing:.0073529412em!important;font-family:"Aldrich",sans-serif!important}.aldrich-title-mobile{font-size:2.125rem!important}.aldrich-item-title{font-size:2.525rem!important}.aldrich-item-title,.aldrich-item-title-mobile{font-weight:600;line-height:2.5rem;letter-spacing:.0073529412em!important;font-family:"Aldrich",sans-serif!important}.aldrich-item-title-mobile{font-size:1.925rem!important}.aldrich-subtitle{font-size:1.75rem!important}.aldrich-subtitle,.aldrich-subtitle-mobile{font-weight:600;line-height:2rem;letter-spacing:.0125em!important;font-family:"Aldrich",sans-serif!important;color:#ffd803}.aldrich-subtitle-mobile{font-size:1.15rem!important}.aldrich{font-family:"Aldrich",sans-serif!important;font-size:1rem!important}',""]),r.locals={},t.exports=r},532:function(t,e,n){"use strict";n.r(e);var r=n(530),o=(n(20),n(522),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),l=n(4),c=Object(l.a)(o).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),h=n(529),f=n(28),d=n(29),m=n(40),v=n(38),w=n(26),x=n(19),y=(n(12),n(3),n(71),n(102));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(w.a)(t);if(e){var o=Object(w.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(x.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},O=function(t){Object(m.a)(n,t);var e=_(n);function n(){return Object(f.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"items",get:function(){return[{title:"Adapté",subtitle:"à vos besoins de streamer"},{title:"Facile",subtitle:"à prendre en main"},{title:"Protection",subtitle:"optimale et simple"}]}},{key:"isMobile",get:function(){return this.$vuetify.breakpoint.smAndDown}}]),n}(y.b),z=O=j([y.a],O),M=(n(524),n(101)),component=Object(M.a)(z,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(c,{attrs:{height:t.isMobile?"100%":"500",dark:"",src:"/why/background.jpg"}},[e(h.a,{class:t.isMobile?"mt-6":"",attrs:{dense:"","align-content":"center"}},[e(r.a,{staticClass:"text-center",class:t.isMobile?"aldrich-title-mobile":"aldrich-title"},[t._v("\n        Pourquoi choisir Streamkits ?\n      ")])],1),t._v(" "),e(h.a,{class:t.isMobile?"mb-6":""},t._l(t.items,(function(n,i){return e(r.a,{key:i,staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[e("span",{class:t.isMobile?"aldrich-item-title-mobile":"aldrich-item-title",domProps:{textContent:t._s(n.title)}}),e("br"),t._v(" "),e("span",{class:t.isMobile?"aldrich-subtitle-mobile":"aldrich-subtitle",domProps:{textContent:t._s(n.subtitle)}})])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);