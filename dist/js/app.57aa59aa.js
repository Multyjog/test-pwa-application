(function(e){function t(t){for(var r,a,c=t[0],l=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/test-pwa-application/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("fb98");var r,i=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=(n("2397"),n("d225")),l=n("b0b4"),u=n("2a88"),s=n("4e2b"),d=n("308d"),f=n("6bb5"),p=(n("6762"),n("2fdb"),n("7618"));n("ac6a");r=function(){function e(){Object(c["a"])(this,e),this.handlers={},this.globalHandlers={}}return Object(l["a"])(e,[{key:"init",value:function(){var e=this;if(this.__enabled())return this.log("Начинаем регистрировать обработчки на слоты"),this.__events().forEach((function(t){return e.__wrapperBridgeObject()["".concat(t)].connect(e,e.__connectHandler(t)),e.log("Зарегистрирован обработчик для ".concat(t))})),this.__globalEvents().forEach((function(t){return e.__wrapperBridgeObject()["".concat(t)].connect(e,e.__globalConnectHandler(t)),e.log("Зарегистрирован глобальный обработчик для ".concat(t))}));this.log("Похоже это не wrapper. Так что ничего не делаем")}},{key:"addGlobalHandler",value:function(e,t){var n;if(Object(p["a"])(t))return(n=this.globalHandlers)[e]||(n[e]=[]),this.globalHandlers[e].push(t)}},{key:"removeGlobalHandler",value:function(e,t){var n,r;if(Object(p["a"])(t))return(n=this.globalHandlers)[e]||(n[e]=[]),r=this.globalHandlers[e].indexOf(t),r>=0?this.globalHandlers[e].splice(r,1):void 0}},{key:"log",value:function(e){return console.log("[WrapperBridge] ".concat(e))}},{key:"__globalEvents",value:function(){return[]}},{key:"__notRemovedNow",value:function(){return[]}},{key:"__events",value:function(){return[]}},{key:"__enabled",value:function(){return!1}},{key:"__registerHandler",value:function(e){var t;return t=this.__generateHandlerId(),e&&(this.handlers["".concat(t)]=e),this.log("Зарегистрирован обработчик с id: ".concat(t)),t}},{key:"__unregisterHandler",value:function(e){return delete this.handlers["".concat(e)],this.log("Обработчик ".concat(e," удален"))}},{key:"__generateHandlerId",value:function(){return"".concat(Date.now())}},{key:"__wrapperBridgeObject",value:function(){return window.__wrapperBridge}},{key:"__connectHandler",value:function(e){return function(){var t,n,r,i,o;return t=1===arguments.length?[arguments[0]]:Array.apply(null,arguments),o=t[0],n=t.slice(1),this.log("Получен ответ для обработчика ".concat(o)),r=this.handlers["".concat(o)],i=r,"object"===Object(p["a"])(r)&&(i=r["".concat(e)]),this.__notRemovedNow().includes(e)||this.__unregisterHandler(o),this.log("Вызываем обработчик ".concat(o,":").concat(e)),this.log(i),i.apply(this,n)}}},{key:"__globalConnectHandler",value:function(e){return function(){var t;return this.log("Получено событие для глобального обработчика '".concat(e,"'")),console.log("".concat(this.globalHandlers)),t=this.globalHandlers["".concat(e)]||[],console.log("handlers.length = ".concat(t.length)),t.forEach((function(e){return e.apply(this)}))}}}]),e}();var h,_=r;function g(e){var t=v();return function(){var n,r=Object(f["a"])(e);if(t){var i=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(d["a"])(this,n)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}h=function(){var e,t,n,r=function(r){Object(s["a"])(o,r);var i=g(o);function o(e){var t;return Object(c["a"])(this,o),t=i.call(this),t.wrapperBridge=e,t}return Object(l["a"])(o,[{key:"enabled",value:function(){return this.__enabled()}},{key:"__bridge",value:function(){return this.enabled()?this.wrapperBridge.__wrapperBridge().officeBridge:null}},{key:"version",value:function(){var e;return null!=(e=this.__bridge())?e.version():void 0}},{key:"checkAvailable",value:function(e){var t,n;return this.enabled()?(t=function(t,n){var r;if(r="","office_not_installed"===n?r="Microsoft Office не установлен":"unsupported_platform"===n&&(r="Неподдерживаемая платформа запуска"),e)return e(t,n,r)},n=this.__registerHandler(t),this.log("Посылаем сигнал на checkAvailable с id обработчика ".concat(n,".")),this.__bridge().checkAvailable(n)):e?e(!1,"not_wrapper","Запуск приложения не через обертку"):void 0}},{key:"generateFromTemplate",value:function(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.enabled()?(r=this.__registerHandler({generateFromTemplateStarted:i["started"],generateFromTemplateInProcess:i["inProcess"],generateFromTemplateFinished:i["finished"],generateFromTemplateError:i["error"]}),this.log("Посылаем сигнал на generateFromTemplate с id обработчика ".concat(r,". Шаблон: ").concat(e,". Параметры: ").concat(t,". Итоговый файл: ").concat(n)),this.__bridge().generateFromTemplate(r,e,t,n)):null}},{key:"saveFile",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.enabled()?(n=this.__registerHandler({saveFileSaved:r["fileSaved"],saveFileError:r["fileError"]}),this.log("Посылаем сигнал на saveFile с id обработчика ".concat(n,". Файл: ").concat(e,". Сохранить: ").concat(t)),this.__bridge().saveFile(n,e,t)):null}},{key:"__globalEvents",value:function(){return t}},{key:"__notRemovedNow",value:function(){return n}},{key:"__events",value:function(){return e}},{key:"__enabled",value:function(){return this.wrapperBridge.hasWrapperBridge()}},{key:"__wrapperBridgeObject",value:function(){return this.__bridge()}}]),o}(_);return t=[],n=["generateFromTemplateStarted","generateFromTemplateInProcess"],e=["generateFromTemplateStarted","generateFromTemplateInProcess","generateFromTemplateFinished","generateFromTemplateError","saveFileSaved","saveFileError","checkAvailableResult"],r}.call(void 0);var m,y,b=h;function w(e){var t=k();return function(){var n,r=Object(f["a"])(e);if(t){var i=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(d["a"])(this,n)}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}m=function(){var e,t,n,r=function(r){Object(s["a"])(o,r);var i=w(o);function o(){return Object(c["a"])(this,o),i.call(this)}return Object(l["a"])(o,[{key:"getOfficeBridge",value:function(){return this.__officeBridge}},{key:"beep",value:function(){var e;return null!=(e=this.__wrapperBridge())?e.beep():void 0}},{key:"isInternalLink",value:function(){var e;return(null!=(e=this.__wrapperBridge())?e.isInternalLink():void 0)||!1}},{key:"isExecExternal",value:function(e,t,n){return!!this.hasWrapperBridge()&&this.__wrapperBridge().isExecExternal(e,t,n)}},{key:"echo",value:function(e,t){var n;if(this.hasWrapperBridge())return n=this.__registerHandler(t),this.log("Посылаем сигнал на echo с id обработчика ".concat(n)),this.__wrapperBridge().echo(n,e),!0}},{key:"isContentDataFileExists",value:function(e){var t;return!!this.hasWrapperBridge()&&(null!=(t=this.__wrapperBridge())?t.isContentDataFileExists(e):void 0)}},{key:"readFromContentData",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler({readFromContentDataFinished:t,readFromContentDataError:n}),this.log("Посылаем сигнал на readFromContentData с id обработчика ".concat(r,". Файл: ").concat(e)),this.__wrapperBridge().readFromContentData(r,e)}},{key:"readFromStore",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler({readFromStoreFinished:t,readFromStoreError:n}),this.log("Посылаем сигнал на readFromStore с id обработчика ".concat(r,". Файл: ").concat(e)),this.__wrapperBridge().readFromStore(r,e)}},{key:"writeToStore",value:function(e,t,n){var r;if(this.hasWrapperBridge())return r=this.__registerHandler(n),this.log("Посылаем сигнал на echo с id обработчика ".concat(r)),this.__wrapperBridge().writeToStore(r,e,t),!0}},{key:"close",value:function(e,t){var n;if(this.hasWrapperBridge())return n=this.__registerHandler(t),this.log("Посылаем сигнал на close с id обработчика ".concat(n)),this.__wrapperBridge().close(n,e),!0}},{key:"logger",value:function(e){var t;if(this.hasWrapperBridge())return t=this.__registerHandler((function(){return{}})),this.__wrapperBridge().logger(t,e)}},{key:"copyDataFile",value:function(e,t,n,r,i,o){var a;if(this.hasWrapperBridge())return a=this.__registerHandler({copyDataFileStarted:r,copyDataFileFinished:n,copyDataFileCancelled:i,copyDataFileError:o}),this.log("Посылаем сигнал на copyDateFile обработчика ".concat(a)),this.__wrapperBridge().copyDateFile(a,e,t||""),!0}},{key:"execExternal",value:function(e,t,n,r,i,o){var a;if(this.hasWrapperBridge())return a=this.__registerHandler({execExternalStarted:r,execExternalFinished:i,execExternalError:o}),this.log("Посылаем сигнал на echo с execExternal обработчика ".concat(a)),this.__wrapperBridge().execExternal(a,e,t,n),!0}},{key:"hasWrapperBridge",value:function(){return null!=this.__wrapperBridge()}},{key:"init",value:function(){return Object(u["a"])(Object(f["a"])(o.prototype),"init",this).call(this),this.__officeBridge=new b(this),this.__officeBridge.init()}},{key:"__globalEvents",value:function(){return t}},{key:"__notRemovedNow",value:function(){return n}},{key:"__events",value:function(){return e}},{key:"__enabled",value:function(){return this.hasWrapperBridge()}},{key:"__wrapperBridge",value:function(){return this.__wrapperBridgeObject()}},{key:"__wrapperBridgeObject",value:function(){return window.__wrapperBridge}}]),o}(_);return t=["appCloseEvent"],n=["execExternalStarted","copyDataFileStarted"],e=["echoSender","writeToStoreFinished","readFromStoreFinished","readFromStoreError","readFromContentDataFinished","readFromContentDataError","execExternalStarted","execExternalFinished","execExternalError","copyDataFileFinished","copyDataFileCancelled","copyDataFileError"],r}.call(void 0),y=new m,y.init(),window.wrapperBridge=y;var D=y,O={mounted:function(){var e=this;return D.getOfficeBridge().checkAvailable((function(t,n,r){return e.$store.commit("changeOfficeWrapperAvailable",t)}))}},F=O,E=n("2877"),C=Object(E["a"])(F,o,a,!1,null,null,null),x=C.exports,A=n("8c4f"),B=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"top-bar"},[t("div",{staticClass:"top-bar-left"},[t("ul",{ref:"dropDown",staticClass:"dropdown menu",attrs:{"data-dropdown-menu":""}},[t("li",{staticClass:"menu-text"},[e._v("Документы")])])])]),t("div",{staticClass:"expanded row",attrs:{id:"content"}},[t("div",{staticClass:"columns small-12"},[t("router-view")],1)])])},H=[],S={},j=S,W=Object(E["a"])(j,B,H,!1,null,null,null),I=W.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"welcome-screen"},[e.applicationInstalled||"iphone"===e.userAgent?e._e():t("div",[e._v("\n        Добро пожаловать! Для установки приложения, пожалуйста, нажмите на кнопку ниже\n        "),t("hr"),t("div",[t("button",{ref:"installPWAButton",staticClass:"button",attrs:{type:"button",id:"installPWA-button"},on:{click:e.installPWA}},[e._v("Установить на телефон")])])]),e.applicationInstalled||"iphone"!==e.userAgent?e.applicationInstalled?t("div",[e._v("\n        Добро пожаловать в ваше мобильное приложение. Нажмите кнопку ниже, что бы перейти к документам\n        "),t("hr"),t("div",[t("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$router.push({name:"documents"})}}},[e._v("Перейти к документам")])])]):e._e():t("div",[e._v("\n      Добро пожаловать! Для установки приложения, пожалуйста следуйте инструкции ниже\n        "),t("hr"),e._m(0)])])},N=[function(){var e=this,t=e._self._c;return t("div",[t("ul",[t("li",[e._v("Нажмите иконку поделиться в вашем браузере Safari")]),t("li",[e._v("Выберите пункт: \"Добавить на экран 'домой'\"")])])])}],R=(n("96cf"),n("3b8d")),L=(n("4917"),{name:"WelcomeScreen",data:function(){return{installEvent:null,applicationInstalled:!0,userAgent:null}},beforeMount:function(){var e=this;window.addEventListener("DOMContentLoaded",(function(){navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||window.matchMedia("(display-mode: fullscreen)").matches||window.matchMedia("(display-mode: minimal-ui)").matches?console.log("APP IS IN STANDALONE MODE"):(console.log("APPLICATION IS NOT INSTALLED"),this.applicationInstalled=!1)})),window.addEventListener("beforeinstallprompt",(function(t){console.log("BEFORE INSTALL FIRED"),e.applicationInstalled=!1,t.preventDefault(),e.installEvent=t})),navigator.userAgent.match(/iPhone|iPad|iPod/i)&&(this.userAgent="iphone"),console.log(this.userAgent)},methods:{installPWA:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.installEvent.prompt(),e.next=3,this.installEvent.userChoice;case 3:t=e.sent,console.log("RESULT:",t),t&&"accepted"===t.outcome&&(console.log("APP INSTALLED FROM FUNCTION"),this.$router.push({name:"documents"}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),P=L,M=(n("d5ff"),Object(E["a"])(P,T,N,!1,null,"754ca726",null)),G=M.exports,U=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"margin-top":"10px"}},[t("action-buttons"),t("documents")],1)},$=[],Y=function(){var e=this,t=e._self._c;return t("div",e._l(e.getDocuments(),(function(e){return t("document",{key:e.id,attrs:{documentId:e.id}})})),1)},J=[],q=(n("7f7f"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"callout secondary"},[t("h5",[e._v(e._s(e.getDocument().name))]),t("p",[e._v(e._s(e.getDocument().description))]),t("div",{staticClass:"button-group"},[t("document-viewer",{attrs:{documentId:e.documentId}}),t("document-viewer",{attrs:{documentId:e.documentId}}),t("document-viewer",{attrs:{documentId:e.documentId}})],1)])}),V=[],X=(n("456d"),n("20d6"),n("55dd"),n("7514"),n("2f62"));i["a"].use(X["a"]);var z,K,Q=new X["a"].Store({state:{officeWrapperAvailable:!1},mutations:{changeOfficeWrapperAvailable:function(e,t){e.officeWrapperAvailable=t}},actions:{}});n("f559");z=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,[{key:"read",value:function(e,t,n){return this.__useWrapper()?this.__readWrapper(e,t,n):this.__readDefault(e,t,n)}},{key:"readJson",value:function(e,t){var n,r;return r=function(n){var r;if(r=null,""===n)r={};else try{r=JSON.parse(n)}catch(i){console.log("[DataReader] Cannot detect json in text. Return blank. Path: ".concat(e)),r={}}if(t)return t(r)},n=function(e){if(t)return t({})},this.read(e,r,n)}},{key:"readDocuments",value:function(e){return this.readJson("data/documents.json",e)}},{key:"__useWrapper",value:function(){return D.hasWrapperBridge()&&!location.href.startsWith("http")}},{key:"__readDefault",value:function(e,t,n){var r;return r=new XMLHttpRequest,r.open("GET",e,!0),r.onreadystatechange=function(){var i;if(4===r.readyState)if(200===r.status||0===r.status){if(i=r.responseText,t)return t(i)}else if(console.error("[DataReader] Неудалось открыть файл ".concat(e,". Статус ").concat(r.status)),n)return n(r.status)},r.send(null)}},{key:"__readWrapper",value:function(e,t,n){return D.readFromContentData(e,this.__readWrapperHandlerFinished(t),this.__readWrapperHandlerError(t,n))}},{key:"__readWrapperHandlerFinished",value:function(e){return function(t,n){if(e)return e(n)}}},{key:"__readWrapperHandlerError",value:function(e,t){return function(n,r,i){return console.log("[DataReader#readWrapper] Ошибка чтения из файла ".concat(n,". Код ").concat(r,". Ошибка: ").concat(i)),"fileNotExists"!==r?t(i):(console.log("[DataReader#readWrapper] Так как ошибка в том что файла нет, то просто вызываем обработчик с пустым контентом"),e?e(""):void 0)}}}]),e}(),K=new z,window.dataReader=K;var Z,ee=K;Z=function(){var e=function(){function e(t){Object(c["a"])(this,e),this.store=t,this.items=[],this.groups=[]}return Object(l["a"])(e,[{key:"getById",value:function(e){return this.items.find((function(t){return t.id===e}))}},{key:"search",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=e.toLowerCase(),this.items.filter((function(e){var i;return i=-1!==e.name.toLowerCase().indexOf(t)||-1!==e.description.toLowerCase().indexOf(t)||e.keywords&&-1!==e.keywords.findIndex((function(e){return e.toLowerCase()===t})),i&&n.__documentOptionsCheck(e,r)})).sort(this.__sortHandler)}},{key:"init",value:function(e){var t=this;return ee.readDocuments((function(n){if(t.__proceedDocuments(n),null!=e)return e()}))}},{key:"__proceedDocuments",value:function(e){var t;return t=[],e.forEach((function(e){var n;if(n=e.name.trim()[0].toUpperCase(),e.group=n,-1===t.indexOf(n))return t.push(n)})),t.sort(),this.items=e.map((function(e){return e.id="".concat(e.id),e})),this.groups=t}},{key:"__documentOptionsCheck",value:function(e,t){return 0===Object.keys(t).length||(!t["excludeFileEmpty"]||null!=e.file_name&&""!==e.file_name.trim())}}],[{key:"init",value:function(t){return window.modelDocuments=new e(Q),window.modelDocuments.init(t)}},{key:"instance",value:function(){return window.modelDocuments}}]),e}();return function(e,t){var n,r;return n=e.name.toUpperCase(),r=t.name.toUpperCase(),n<r?-1:n>r?1:0},e}.call(void 0);var te,ne=Z,re=function(){var e=this,t=e._self._c;return e.showActionLink?t("a",{staticClass:"button documents__link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.clickAction.apply(null,arguments)}}},[t("span",[e._v(e._s(e.labelActionLink))]),e.isViewable?t(e.viewComponent,{ref:"viewer",tag:"component",attrs:{documentId:e.documentId}}):e._e()],1):e._e()},ie=[];n("6b54"),n("aef6"),n("c5f6");te={props:{documentId:{type:[String,Number],require:!0}},computed:{isDocumentExists:function(){return null!=this.getDocument()},isDocument:function(){return this.isCategoryDocument(this.getDocumentCategory())},isExample:function(){return this.isCategoryExample(this.getDocumentCategory())},isForm:function(){return this.isCategoryForm(this.getDocumentCategory())},hasFile:function(){return this.isDocument||this.isForm?this.getDocument().file_name&&!Array.isArray(this.getDocument().file_name)&&""!==this.getDocument().file_name.trim():!!this.isExample&&(!!this.getDocument().file_name&&(Array.isArray(this.getDocument().file_name)?0!==this.getDocument().file_name.length:""!==this.getDocument().file_name.trim()))},isFilePdf:function(){return Array.isArray(this.getDocument().file_name)?this.getDocument().file_name[0].toString().endsWith(".pdf"):this.getDocument().file_name.toString().endsWith(".pdf")},showActionLink:function(){return this.hasFile},labelActionLink:function(){return this.getLabelActionLink(this.getDocumentCategory())},labelActionIcon:function(){return this.getLabelActionIcon(this.getDocumentCategory())}},methods:{getDocument:function(){return this.getModelDocuments().getById(this.documentId)},getDocumentCategory:function(){var e;return(null!=(e=this.getDocument())?e.category:void 0)||""},getModelDocuments:function(){return ne.instance()},getRelatedUrl:function(){var e;return this.hasFile?(e=this.getDocument().file_name,e=e.startsWith("files")?"data/".concat(e):"data/files/".concat(e),e):""},getLabelActionIcon:function(e){return this.isCategoryDocument(e)?"download":this.isCategoryExample(e)?"visibility":this.isCategoryForm(e)?"download":""},getLabelActionLink:function(e){return this.isCategoryDocument(e)?"Скачать документ":this.isCategoryExample(e)?"Посмотреть образец":this.isCategoryForm(e)?"Скачать форму":""},isCategoryDocument:function(e){return"document"===e},isCategoryExample:function(e){return"example"===e},isCategoryForm:function(e){return"form"===e}}};var oe,ae=te;n("28a5"),n("a481");oe=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,null,[{key:"iso8601",value:function(e){return e.toISOString()}},{key:"full",value:function(e){var t;return t=[e.getDate(),e.getMonth()+1,e.getFullYear()],t.join(".")}},{key:"fullMonthName",value:function(e){var t;return t=e.toLocaleString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),t.replace(/\s*г\.\s*$/,"")}},{key:"day",value:function(e){var t;return t=e.getDate(),t<10&&(t="0".concat(t)),t.toString()}},{key:"month",value:function(e){var t;return t=e.getMonth()+1,t<10&&(t="0".concat(t)),t.toString()}},{key:"monthName",value:function(e){var t;return t=e.toLocaleString("ru-RU",{day:"numeric",month:"long"}),t.split(" ")[1]}},{key:"year",value:function(e){return e.getFullYear()}},{key:"yearShort",value:function(e){return parseInt(e.getFullYear().toString().replace(/^\d{2}/,""))}}]),e}();var ce,le=oe;ce=function(){function e(t){Object(c["a"])(this,e),this.documentId=t}return Object(l["a"])(e,[{key:"enabled",value:function(){return e.enabled()}},{key:"officeWrapperBridge",value:function(){return wrapperBridge.getOfficeBridge()}},{key:"setStartedHandler",value:function(e){return this.__startedHandler=e}},{key:"setInProcessHandler",value:function(e){return this.__inProcessHandler=e}},{key:"setFinishedHandler",value:function(e){return this.__finishedHandler=e}},{key:"setErrorHandler",value:function(e){return this.__errorHandler=e}},{key:"getDocument",value:function(){return this.__document||(this.__document=ne.instance().getById(this.documentId)),this.__document}},{key:"getDocumentPath",value:function(){return this.getDocument().file_name}},{key:"generate",value:function(e){return console.log(this.optionsHash()),this.officeWrapperBridge().generateFromTemplate(this.getDocumentPath(),this.optionsHash(),e,this.__handlers())}},{key:"generateOptionsForCurrentDate",value:function(){var e;return e=new Date,{G_DATE_NOW__RAW:le.iso8601(e).toString(),G_DATE_NOW__FULL:le.full(e).toString(),G_DATE_NOW__FULL__MONTH_NAME:le.fullMonthName(e).toString(),G_DATE_NOW__DAY:le.day(e).toString(),G_DATE_NOW__MONTH:le.month(e).toString(),G_DATE_NOW__MONTH_NAME:le.monthName(e).toString(),G_DATE_NOW__YEAR:le.year(e).toString(),G_DATE_NOW__YEAR__SHORT:le.yearShort(e).toString()}}},{key:"getRandomArbitrary",value:function(e,t){return Math.round(Math.random()*(t-e)+e)}},{key:"optionsHash",value:function(){var e,t,n;for(n={},e=t=1;t<=8;e=++t)n["NUMBER_".concat(e)]=this.getRandomArbitrary(10,1e3);return Object.assign(n,this.generateOptionsForCurrentDate()),n}},{key:"__handlers",value:function(){var e;return e={},this.__startedHandler&&(e.started=this.__startedHandler),this.__inProcessHandler&&(e.inProcess=this.__inProcessHandler),this.__finishedHandler&&(e.finished=this.__finishedHandler),this.__errorHandler&&(e.error=this.__errorHandler),e}}],[{key:"enabled",value:function(){return wrapperBridge.getOfficeBridge().enabled()}}]),e}(),window.TemplateGenerator=ce;var ue,se,de=ce;se=60,ue={methods:{clickDownloadAction:function(e){return wrapperBridge.hasWrapperBridge()?this.getDocument().template?this.__fillTemplate():wrapperBridge.copyDataFile(this.getRelatedUrl(),this.__fixDocumentNameLenght(this.getDocument().name),this.__wrapperCopyFileHandler.bind(this),this.__wrapperCopyFileStartedHandler.bind(this),this.__wrapperCopyFileCancelledHandler.bind(this),this.__wrapperCopyFileError.bind(this)):window.open(this.getRelatedUrl(),"_blank")},__fillTemplate:function(){var e;return console.log("Нажали на сборку документа"),e=new de(this.getDocument().id),e.setStartedHandler((function(){return console.log("started")})),e.setInProcessHandler((function(){return console.log("working")})),e.setFinishedHandler((function(){return console.log("finished"),alert("Документ сформирован")})),e.setErrorHandler((function(){return console.log("error")})),e.generate(this.__fixDocumentNameLenght(this.getDocument().name))},__fixDocumentNameLenght:function(e){return e.substring(0,se)},__wrapperCopyFileHandler:function(e,t){var n=this;return console.log("Файл ".concat(e," скопирован в ").concat(t)),this.$modal.show("dialog",{title:"Выполнено",text:"Файл сохранен.",buttons:[{title:"Закрыть",handler:function(){return n.$modal.hide("dialog")}}]})},__wrapperCopyFileStartedHandler:function(e,t){return console.log("Начало копирования файла ".concat(e," скопирован в ").concat(t))},__wrapperCopyFileCancelledHandler:function(e,t){return console.log("Сохранение файла ".concat(e," отменено"))},__wrapperCopyFileError:function(e,t,n,r){return console.log("Ошибка сохранения файла ".concat(e,". Код: ").concat(n,". Сообщение: ").concat(r))}}};var fe,pe=ue;fe={mixins:[pe],computed:{isViewable:function(){return this.isExample&&this.hasFile}},methods:{clickAction:function(e){return this.isViewable?this.$refs.viewer.show():this.clickDownloadAction(e)}}};var he=fe,_e={mixins:[ae,he]},ge=_e,ve=Object(E["a"])(ge,re,ie,!1,null,null,null),me=ve.exports,ye={components:{DocumentViewer:me},props:{documentId:String,required:!0},methods:{getDocument:function(){return ne.instance().getById(this.documentId)}}},be=ye,we=Object(E["a"])(be,q,V,!1,null,null,null),ke=we.exports,De={components:{Document:ke},methods:{getDocuments:function(){return console.log(ne),console.log(ne.instance()),ne.instance().items}}},Oe=De,Fe=Object(E["a"])(Oe,Y,J,!1,null,null,null),Ee=Fe.exports,Ce=function(){var e=this,t=e._self._c;return t("div",[e.officeAvailable?e._e():t("div",{staticClass:"callout alert"},[t("h5",[e._v("Microsoft Office не установлен")]),t("p",[e._v("\n      Функция конвертации, документа из формата DOCX в формат DOC, недоступна.\n    ")])]),t("div",{staticClass:"button-group"},[t("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.runApp1}},[e._v('Запустить приложение "Блокнот"')]),t("button",{staticClass:"button",attrs:{type:"button",disabled:!e.officeAvailable}},[e._v("Преобразовать из docx в doc")]),t("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.clickBeepButton}},[e._v("Подать сигнал")])])])},xe=[],Ae={mixins:["installPWALogic"],computed:{officeAvailable:function(){this.$store.state.officeWrapperAvailable}},methods:{clickBeepButton:function(){D.beep()},runApp1:function(){D.execExternal("c:\\\\windows\\system32\\notepad.exe",[],"c:\\\\windows")},_handlerConvertDocxToDocSaved:function(e,t){alert("Файл  сконвертирован")}}},Be=Ae,He=Object(E["a"])(Be,Ce,xe,!1,null,null,null),Se=He.exports,je={components:{Documents:Ee,ActionButtons:Se}},We=je,Ie=Object(E["a"])(We,U,$,!1,null,null,null),Te=Ie.exports;i["a"].use(A["a"]);var Ne,Re=new A["a"]({base:"/test-pwa-application/",routes:[{path:"/documents",component:I,children:[{name:"documents",path:"/",component:Te}]},{path:"/",name:"welcome",component:G}]});Ne=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,null,[{key:"init",value:function(e){var t;if(t=function(){if(null!=e)return e()},ne.init(t),D.hasWrapperBridge())return D.addGlobalHandler("appCloseEvent",(function(){return D.close(!0)}))}}]),e}();var Le=Ne,Pe=n("9483");Object(Pe["a"])("".concat("/test-pwa-application/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,window.__store=Q,Le.init((function(){new i["a"]({router:Re,store:Q,render:function(e){return e(x)}}).$mount("#app")}))},"5bb2":function(e,t,n){},d5ff:function(e,t,n){"use strict";n("5bb2")},fb98:function(e,t,n){}});
//# sourceMappingURL=app.57aa59aa.js.map