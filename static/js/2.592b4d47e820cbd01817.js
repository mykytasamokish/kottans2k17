webpackJsonp([2],{102:function(a,n,o){n=a.exports=o(12)(!0),n.push([a.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.modal-container{width:60%;margin:0 auto;padding:20px 30px;background-color:#fff;border-radius:2px;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.33);box-shadow:0 2px 8px rgba(0,0,0,.33);-webkit-transition:all .3s ease;transition:all .3s ease;font-family:Helvetica,Arial,sans-serif}.modal-header a{text-decoration:none;margin-top:0;color:#42b983}.modal-body{margin:20px 0}.modal-body .table{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:10px}.modal-body .table .info{list-style:none}.modal-body .table .info .key{color:gray;font-size:16px}.modal-body .table .info .value{margin-left:8px;color:gray}.modal-default-button{float:right}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .modal-container,.modal-leave-active .modal-container{-webkit-transform:scale(1.1);transform:scale(1.1)}","",{version:3,sources:["/Users/mykytasamokish/Workspace/WEB/vue/kottans/src/components/Modal.vue"],names:[],mappings:"AACA,YACE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,gCAAkC,AAClC,cAAe,AACf,oCAAsC,AACtC,2BAA8B,CAC/B,AACD,eACE,mBAAoB,AACpB,qBAAuB,CACxB,AACD,iBACE,UAAW,AACX,cAAiB,AACjB,kBAAmB,AACnB,sBAAuB,AACvB,kBAAmB,AACnB,6CAA+C,AACvC,qCAAuC,AAC/C,gCAAkC,AAClC,wBAA0B,AAC1B,sCAA0C,CAC3C,AACD,gBACE,qBAAsB,AACtB,aAAc,AACd,aAAe,CAChB,AACD,YACE,aAAe,CAChB,AACD,mBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,6BAA8B,AAClC,WAAa,CACd,AACD,yBACE,eAAiB,CAClB,AACD,8BACE,WAAe,AACf,cAAgB,CACjB,AACD,gCACE,gBAAiB,AACjB,UAAe,CAChB,AACD,sBACE,WAAa,CACd,AAID,iCACE,SAAW,CACZ,AACD,mEAEE,6BAA8B,AACtB,oBAAsB,CAC/B",file:"Modal.vue",sourcesContent:["\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.5);\n  display: table;\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container {\n  width: 60%;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.33);\n          box-shadow: 0 2px 8px rgba(0,0,0,0.33);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header a {\n  text-decoration: none;\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body {\n  margin: 20px 0;\n}\n.modal-body .table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 10px;\n}\n.modal-body .table .info {\n  list-style: none;\n}\n.modal-body .table .info .key {\n  color: #808080;\n  font-size: 16px;\n}\n.modal-body .table .info .value {\n  margin-left: 8px;\n  color: #808080;\n}\n.modal-default-button {\n  float: right;\n}\n.modal-enter {\n  opacity: 0;\n}\n.modal-leave-active {\n  opacity: 0;\n}\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}"],sourceRoot:""}])},106:function(a,n,o){var e=o(102);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);o(13)("5399956e",e,!0)},112:function(a,n){a.exports={render:function(){var a=this,n=a.$createElement,o=a._self._c||n;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[a._t("header",[o("span",[a._v("default header")])])],2),o("div",{staticClass:"modal-body"},[a._t("body",[o("span",[a._v("default body")])])],2),o("div",{staticClass:"modal-footer"},[a._t("footer",[o("span",[a._v("default footer")]),o("button",{staticClass:"modal-default-button",on:{click:function(n){a.$emit("close")}}},[a._v("OK")])])],2)])])])])},staticRenderFns:[]}},14:function(a,n,o){function e(a){o(106)}var A=o(3)(o(58),o(112),e,null,null);a.exports=A.exports},58:function(a,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"modal-window"}}});
//# sourceMappingURL=2.592b4d47e820cbd01817.js.map