function addPoiToPlan(t,e,n){e=$.trim(e),require(["common/component/addListToPlan/addListToPlan"],function(i){i.qyerAddListToPlan({obj:t,type:e,pid:n})})}function addToLikeList(t,e){qyerUtil.doLogin();var n=$(t);if(n.hasClass("_disabled"))return!1;qyerUtil.doTrackCode(n.attr("data-ipg-"+(1==n.attr("data-status")?"add":"delete"))),n.addClass("_disabled");var i=n.attr("data-status"),a=n.attr("data-id");qyerUtil.doAjax({url:"http://common1.qyerstatic.com/public.php?action=feeling",data:{oper:"planto",type:e||1,id:a,planto:i},onSuccess:function(t){n.removeClass("_disabled").text(1-i?"加入想去":"取消想去").attr("data-status",1-i),$("#mapPlaceList").find("li[tid="+a+"]").find("._addToLikeList").removeClass(1-i?"plcCancelToLikeList":"plcAddToLikeList").addClass(1-i?"plcAddToLikeList":"plcCancelToLikeList").attr("data-status",1-i)},onError:function(t){n.removeClass("_disabled"),requirejs(["common/ui/tip/tip"],function(e){e.tip({text:t.data.msg,type:"error"})})}})}!function(){var t=function(){var e=[].slice.call(arguments);return e.push(t.options),e[0].match(/^\s*#([\w:\-\.]+)\s*$/gim)&&e[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim,function(t,n){var i=document,a=i&&i.getElementById(n);e[0]=a?a.value||a.innerHTML:t}),1==arguments.length?t.compile.apply(t,e):arguments.length>=2?t.to_html.apply(t,e):void 0},e={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(t){return e.escapehash[t]},escaping:function(t){return"string"!=typeof t?t:t.replace(/[&<>"]/gim,this.escapereplace)},detection:function(t){return"undefined"==typeof t?"":t}},n=function(t){if("undefined"!=typeof console){if(console.warn)return void console.warn(t);if(console.log)return void console.log(t)}throw t},i=function(t,e){if(t=t!==Object(t)?{}:t,t.__proto__)return t.__proto__=e,t;var n=function(){},i=Object.create?Object.create(e):new(n.prototype=e,n);for(var a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);return i};t.__cache={},t.version="0.6.5-stable",t.settings={},t.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"},t.options={cache:!0,strip:!0,errorhandling:!0,detection:!0,_method:i({__escapehtml:e,__throw:n,__juicer:t},{})},t.tagInit=function(){var e=t.tags.operationOpen+"each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+t.tags.operationClose,n=t.tags.operationOpen+"\\/each"+t.tags.operationClose,i=t.tags.operationOpen+"if\\s*([^}]*?)"+t.tags.operationClose,a=t.tags.operationOpen+"\\/if"+t.tags.operationClose,o=t.tags.operationOpen+"else"+t.tags.operationClose,r=t.tags.operationOpen+"else if\\s*([^}]*?)"+t.tags.operationClose,s=t.tags.interpolateOpen+"([\\s\\S]+?)"+t.tags.interpolateClose,c=t.tags.noneencodeOpen+"([\\s\\S]+?)"+t.tags.noneencodeClose,l=t.tags.commentOpen+"[^}]*?"+t.tags.commentClose,p=t.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)"+t.tags.operationClose,d=t.tags.operationOpen+"include\\s*([^}]*?)\\s*,\\s*([^}]*?)"+t.tags.operationClose;t.settings.forstart=new RegExp(e,"igm"),t.settings.forend=new RegExp(n,"igm"),t.settings.ifstart=new RegExp(i,"igm"),t.settings.ifend=new RegExp(a,"igm"),t.settings.elsestart=new RegExp(o,"igm"),t.settings.elseifstart=new RegExp(r,"igm"),t.settings.interpolate=new RegExp(s,"igm"),t.settings.noneencode=new RegExp(c,"igm"),t.settings.inlinecomment=new RegExp(l,"igm"),t.settings.rangestart=new RegExp(p,"igm"),t.settings.include=new RegExp(d,"igm")},t.tagInit(),t.set=function(t,e){var n=this,i=function(t){return t.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim,function(t){return"\\"+t})},a=function(t,e){var a=t.match(/^tag::(.*)$/i);return a?(n.tags[a[1]]=i(e),void n.tagInit()):void(n.options[t]=e)};if(2===arguments.length)return void a(t,e);if(t===Object(t))for(var o in t)t.hasOwnProperty(o)&&a(o,t[o])},t.register=function(t,e){var n=this.options._method;return!n.hasOwnProperty(t)&&(n[t]=e)},t.unregister=function(t){var e=this.options._method;if(e.hasOwnProperty(t))return delete e[t]},t.template=function(e){var n=this;this.options=e,this.__interpolate=function(t,e,n){var i,a=t.split("|"),o=a[0]||"";return a.length>1&&(t=a.shift(),i=a.shift().split(","),o="_method."+i.shift()+".call({}, "+[t].concat(i)+")"),"<%= "+(e?"_method.__escapehtml.escaping":"")+"("+(n&&n.detection===!1?"":"_method.__escapehtml.detection")+"("+o+")) %>"},this.__removeShell=function(e,i){var a=0;return e=e.replace(t.settings.forstart,function(t,e,n,i){var n=n||"value",i=i&&i.substr(1),o="i"+a++;return"<% ~function() {for(var "+o+" in "+e+") {if("+e+".hasOwnProperty("+o+")) {var "+n+"="+e+"["+o+"];"+(i?"var "+i+"="+o+";":"")+" %>"}).replace(t.settings.forend,"<% }}}(); %>").replace(t.settings.ifstart,function(t,e){return"<% if("+e+") { %>"}).replace(t.settings.ifend,"<% } %>").replace(t.settings.elsestart,function(t){return"<% } else { %>"}).replace(t.settings.elseifstart,function(t,e){return"<% } else if("+e+") { %>"}).replace(t.settings.noneencode,function(t,e){return n.__interpolate(e,!1,i)}).replace(t.settings.interpolate,function(t,e){return n.__interpolate(e,!0,i)}).replace(t.settings.inlinecomment,"").replace(t.settings.rangestart,function(t,e,n,i){var o="j"+a++;return"<% ~function() {for(var "+o+"="+n+";"+o+"<"+i+";"+o+"++) {{var "+e+"="+o+"; %>"}).replace(t.settings.include,function(t,e,n){return"<%= _method.__juicer("+e+", "+n+"); %>"}),i&&i.errorhandling===!1||(e="<% try { %>"+e,e+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'),e},this.__toNative=function(t,e){return this.__convert(t,!e||e.strip)},this.__lexicalAnalyze=function(e){var n=[],i=[],a="",o=["if","each","_","_method","console","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"],r=function(t,e){if(Array.prototype.indexOf&&t.indexOf===Array.prototype.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},s=function(e,a){if(a=a.match(/\w+/gim)[0],r(n,a)===-1&&r(o,a)===-1&&r(i,a)===-1){if("undefined"!=typeof window&&"function"==typeof window[a]&&window[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return e;if("undefined"!=typeof global&&"function"==typeof global[a]&&global[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return e;if("function"==typeof t.options._method[a]||t.options._method.hasOwnProperty(a))return i.push(a),e;n.push(a)}return e};e.replace(t.settings.forstart,s).replace(t.settings.interpolate,s).replace(t.settings.ifstart,s).replace(t.settings.elseifstart,s).replace(t.settings.include,s).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim,s);for(var c=0;c<n.length;c++)a+="var "+n[c]+"=_."+n[c]+";";for(var c=0;c<i.length;c++)a+="var "+i[c]+"=_method."+i[c]+";";return"<% "+a+" %>"},this.__convert=function(t,e){var n=[].join("");return n+="'use strict';",n+="var _=_||{};",n+="var _out='';_out+='",n+=e!==!1?t.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;":t.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"},this.parse=function(t,e){var a=this;return e&&e.loose===!1||(t=this.__lexicalAnalyze(t)+t),t=this.__removeShell(t,e),t=this.__toNative(t,e),this._render=new Function("_, _method",t),this.render=function(t,e){return e&&e===n.options._method||(e=i(e,n.options._method)),a._render.call(this,t,e)},this}},t.compile=function(t,e){e&&e===this.options||(e=i(e,this.options));try{var a=this.__cache[t]?this.__cache[t]:new this.template(this.options).parse(t,e);return e&&e.cache===!1||(this.__cache[t]=a),a}catch(o){return n("Juicer Compile Exception: "+o.message),{render:function(){}}}},t.to_html=function(t,e,n){return n&&n===this.options||(n=i(n,this.options)),this.compile(t,n).render(e,n._method)},"undefined"!=typeof module&&module.exports?module.exports=t:this.juicer=t}();var markerArr=[],tempArr=[];window._mapTimer=!1,window.updateTable=function(){window._mapTimer&&clearTimeout(window._mapTimer);var t=$("table").find("a[data-status]");if(t.length>0){var e=t.attr("data-id"),n=$("#mapPlaceList").find("p._addToLikeList[data-pid="+e+"]").attr("data-status");t.attr("data-status",n).text(n-0?"加入想去":"取消想去")}else window._mapTimer=setTimeout(function(){window.updateTable()},20)},$(function(){var t={},e={isDisableBtn:function(n){var i=e.checkSelectedPoiLength(t);i>0?$("#addToPlan").removeClass("ui_button_disabled").addClass("ui_buttonA"):$("#addToPlan").removeClass("ui_buttonA").addClass("ui_button_disabled")},checkSelectedPoiLength:function(t){var e=0;return $.each(t,function(){e++}),e},setChecked:function(e){$.each(e,function(e,n){var i=$(n).attr("tid");"undefined"!=typeof t["city"+i]&&($(n).addClass("qmap-listStyleOn"),$(n).find("input[type=checkbox]").prop("checked",!0))}),$("#selectALL").parent().removeClass("qmap-selectAllOn"),$("#selectALL").prop("checked",!1)},addCityToTemp:function(e){var n=e.attr("tid");t["city"+n]=n},deleteCity:function(e){var n=e.attr("tid");$.each(t,function(e,i){i==n&&delete t[e]})}};requirejs(["project/js/setMapSurroundListPlace"],function(t){t({page:1,order_type:$("#sort").attr("data-value")},$("#mapPlaceList"),!1,e)}),requirejs(["common/ui/select/select"],function(){$(".qui-select").qyerSelect({onChange:function(t){requirejs(["project/js/setMapSurroundListPlace"],function(t){t({page:1,order_type:$("#sort").attr("data-value")},$("#mapPlaceList"),!1,e)})}})});var n={inition:function(){n.mapContainerHeight(),n.listContainerHeight(),n.windowChange(),n.selectAll(),n.addToPlan()},clientHeight:function(){return $(window).height()},mapContainerHeight:function(){$(".qmap-right").css("height",n.clientHeight()-52)},listContainerHeight:function(){$(".qmap-listwrap").css("height",n.clientHeight()-98)},windowChange:function(){$(window).on("resize",function(){n.mapContainerHeight(),n.listContainerHeight()})},selectAll:function(){$("#selectALL").on("change",function(){$(this).prop("checked")?($("#mapPlaceList").find(".qmap-listStyle1").addClass("qmap-listStyleOn"),$("#mapPlaceList").find(".cb input").each(function(t){$(this).prop("checked",!0),e.addCityToTemp($(this).parents("li").eq(0))}),$(this).parent().addClass("qmap-selectAllOn")):($("#mapPlaceList").find(".qmap-listStyle1").removeClass("qmap-listStyleOn"),$("#mapPlaceList").find(".cb input").each(function(t){$(this).prop("checked",!1),e.deleteCity($(this).parents("li").eq(0))}),$(this).parent().removeClass("qmap-selectAllOn")),e.isDisableBtn($("#mapPlaceList"))})},addToPlan:function(){$("#addToPlan").click(function(){var e=0,n="";return $.each(t,function(t,i){e++,n+=i,n+=","}),n+="&",e?(n=n.split(",&")[0],void require(["common/component/addListToPlan/addListToPlan"],function(t){t.qyerAddListToPlan({obj:document.getElementById("addToPlan"),type:"city",pid:n})})):void requirejs(["common/ui/tip/tip"],function(t){t.tip({text:"请选择目的地",type:"warning"})})})}};n.inition()}),$("body").off("click","._addToLikeList").on("click","._addToLikeList",function(t){function e(t,e,n){var i=$.extend({oper:"planto",type:2,id:null,status:1},t);i[i.oper]=i.status,delete i.status,qyerUtil.doAjax({url:"http://common1.qyerstatic.com/public.php?action=feeling",data:i,onSuccess:function(t){$.isFunction(e)&&e.call(this,t)},onError:function(t){n(),requirejs(["common/ui/tip/tip"],function(e){e.tip({text:t.data.msg,type:"error"})})}})}function n(){var t={liking:"plcAddToLikeList",liked:"plcCancelToLikeList"},n=["liked","liking"],a=i.attr("data-status")-0;e({id:i.attr("data-pid"),type:i.attr("data-type"),status:a},function(e){if(i.removeClass("_disabled"),0==e.error_code&&1==e.data.result){i.removeClass(t[n[a]]).addClass(t[n[1-a]]),i.attr("data-status",1-a);var o=$("table");$("table").length>0&&o.find("a[data-id="+i.attr("data-pid")+"]").attr("data-status",1-a).text(a?"取消想去":"加入想去"),$("body").trigger("addToLikeListEvent")}else requirejs(["common/ui/tip/tip"],function(t){t.tip({text:"操作失败"})})},function(){i.removeClass("_disabled")})}if(t.stopPropagation(),t.preventDefault(),!qyerUtil.isLogin())return!($(".qui-popup-logindialog").length>0&&"block"==$(".qui-popup-logindialog").css("display"))&&void qyerUtil.doLogin();var i=$(this);return!i.hasClass("_disabled")&&(i.addClass("_disabled"),qyerUtil.doTrackCode(i.attr("data-ipg-"+(1==i.attr("data-status")?"add":"delete"))),n(),!1)});