baidu.namespace.register("baidu.pageLoadTime");baidu.pageLoadTime=(function(){var a=function(){function k(m,h){try{document.getElementById(m).innerHTML=h+" ms"}catch(l){}}var f=decodeURIComponent(location.search.substring(1));var j=JSON.parse(f);var c=j.time;var i=c.redirectStart==0?c.fetchStart:c.redirectStart;k("dns",c.domainLookupEnd-c.domainLookupStart);k("dnsTotal",c.domainLookupEnd-i);k("connect",c.connectEnd-c.connectStart);k("requestTotal",c.requestStart-i);k("response",c.responseStart-c.requestStart);k("responseTotal",c.responseStart-i);k("responseEnd",c.responseEnd-c.responseStart);k("responseEndTotal",c.responseEnd-i);k("contentLoaded",c.domContentLoadedEventEnd-c.domLoading);k("contentLoadedTotal",c.domContentLoadedEventEnd-i);k("domComplete",c.domComplete-c.domContentLoadedEventEnd);k("domCompleteTotal",c.domComplete-i);k("loadTotal",c.loadEventEnd-i);var d=j.header;for(var b in d){try{document.getElementById(b).innerHTML=d[b]||" - "}catch(g){}}};return{init:a}})();baidu.pageLoadTime.init();