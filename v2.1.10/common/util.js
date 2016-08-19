function isTick(a){return-1!=a.indexOf("t")}function isMinute(a){return-1!=a.indexOf("m")}function isHourly(a){return-1!=a.indexOf("h")}function isDaily(a){return-1!=a.indexOf("d")}function isDotType(a){return"dot"===a}function isLineDotType(a){return"linedot"===a}function convertToTimeperiodObject(a){return{intValue:function(){return parseInt(a.toLowerCase().replace("t","").replace("h","").replace("d","").trim())},suffix:function(){return a.toLowerCase().replace(""+this.intValue(),"").trim().charAt(0)},timeInMillis:function(){var a=0;switch(this.suffix()){case"t":a=0;break;case"m":a=60*this.intValue()*1e3;break;case"h":a=60*this.intValue()*60*1e3;break;case"d":a=24*this.intValue()*60*60*1e3}return a},timeInSeconds:function(){return this.timeInMillis()/1e3},humanReadableString:function(){var a="";switch(this.suffix()){case"t":a="tick";break;case"m":a="minute(s)";break;case"h":a="hour(s)";break;case"d":a="day(s)"}return this.intValue()+" "+a}}}function isDataTypeClosePriceOnly(a){return!("candlestick"===a||"ohlc"===a)}function isSmallView(){var a=!1;return Modernizr&&(Modernizr.mq("all and (max-width: 600px)")||Modernizr.mq("all and (max-device-width: 600px)"))&&(a=!0),a}function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}function getObjects(a,b,c){var d=[];for(var e in a)a.hasOwnProperty(e)&&("object"==typeof a[e]?d=d.concat(getObjects(a[e],b,c)):e==b&&a[b]==c&&d.push(a));return d}function validateParameters(){var a=getParameterByName("instrument"),b=getParameterByName("timePeriod");if(!a||!b)return!1;var c=null;try{c=convertToTimeperiodObject(b)}catch(d){}if(!c)return!1;var e="t"===c.suffix()&&1===c.intValue(),f=-1!=c.suffix().indexOf("m")&&-1!=[1,2,3,5,10,15,30].indexOf(c.intValue()),g=-1!=c.suffix().indexOf("h")&&-1!=[1,2,4,8].indexOf(c.intValue()),h=-1!=c.suffix().indexOf("d")&&1===c.intValue();return e||f||g||h}function epoch_to_string(a,b){var c=b&&b.utc?"getUTC":"get",d=new Date(1e3*a);return d[c+"FullYear"]()+"-"+("00"+(d[c+"Month"]()+1)).slice(-2)+"-"+("00"+d[c+"Date"]()).slice(-2)+" "+("00"+d[c+"Hours"]()).slice(-2)+":"+("00"+d[c+"Minutes"]()).slice(-2)+":"+("00"+d[c+"Seconds"]()).slice(-2)}function yyyy_mm_dd_to_epoch(a,b){var c=a.split("-"),d=1*c[0],e=1*c[1],f=1*c[2];return b&&b.utc?Date.UTC(d,e-1,f)/1e3:new Date(d,e-1,f).getTime()/1e3}function formatPrice(a){return(1*a).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function sortAlphaNum(a){"use strict";var b=/[^a-zA-Z]/g,c=/[^0-9]/g;return function(d,e){var f=d[a].replace(b,""),g=e[a].replace(b,"");if(f===g){var h=parseInt(d[a].replace(c,""),10),i=parseInt(e[a].replace(c,""),10);return h===i?0:h>i?1:-1}return f>g?1:-1}}function toFixed(a,b){return $.isNumeric(a)&&(a=Math.round(a*Math.pow(10,b))/Math.pow(10,b)),a}function uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})}function setLongTimeout(a,b,c){if(b>2147483647){var d=setTimeout(function(){setLongTimeout(a,b-2147483647,c)},2147483647);c(d)}else{var d=setTimeout(a,b);c&&c(d)}}function validateEmail(a){var b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}function flatten_object(a){function b(a,d){if(Object(a)!==a)c[d]=a;else if(Array.isArray(a)){for(var e=0,f=a.length;f>e;e++)b(a[e],d+"["+e+"]");0==f&&(c[d]=[])}else{var g=!0;for(var h in a)g=!1,b(a[h],d?d+"."+h:h);g&&d&&(c[d]={})}}var c={};return b(a,""),c}function isLangSupported(a){return a=(a||"").trim().toLowerCase(),"ar"===a||"de"===a||"en"===a||"es"===a||"fr"===a||"id"===a||"it"===a||"ja"===a||"pl"===a||"pt"===a||"ru"===a||"vi"===a||"zn_cn"===a||"zh_tw"===a}function setup_i18n_translation(a){var b=Object.keys(a).filter(function(a){return""!==a&&" "!==a});b=b.sort(function(a,b){return b.length-a.length});var c=b.map(function(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}),d=new RegExp("\\b("+c.join("|")+")\\b","g"),e=function(b,c){return a[c]&&a[c][1]||c};String.prototype.i18n=function(){return this.replace(d,e)};var f=$.parseHTML.bind($);$.parseHTML=function(a,b,c){return"string"==typeof a&&(a=a.i18n()),f(a,b,c)}}String.prototype.replaceAll=function(a,b){return this.split(a).join(b)},String.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return"undefined"!=typeof a[c]?a[c]:b})};var is_beta=function(){var a=-1!==window.location.href.indexOf("/beta");return function(){return a}}(),local_storage={get:function(a){a="_webtrader_"+a+(is_beta()?"_beta":"_live");var b=localStorage.getItem(a);return b&&JSON.parse(b)},set:function(a,b){return a="_webtrader_"+a+(is_beta()?"_beta":"_live"),localStorage.setItem(a,JSON.stringify(b))},remove:function(a){return a="_webtrader_"+a+(is_beta()?"_beta":"_live"),localStorage.removeItem(a)}};