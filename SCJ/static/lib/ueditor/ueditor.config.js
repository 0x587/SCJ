!function(){function e(e,l){return t(e||self.document.URL||self.location.href,l||s())}function s(){var e=document.getElementsByTagName("script");return e[e.length-1].src}function t(e,s){var t=s;return/^(\/|\\\\)/.test(s)?t=/^.+?\w(\/|\\\\)/.exec(e)[0]+s.replace(/^(\/|\\\\)/,""):/^[a-z]+:/i.test(s)||(e=e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/,""),t=e+""+s),l(t)}function l(e){var s=/^[a-z]+:\/\//.exec(e)[0],t=null,l=[];for(e=e.replace(s,"").split("?")[0].split("#")[0],e=e.replace(/\\/g,"/").split(/\//),e[e.length-1]="";e.length;)".."===(t=e.shift())?l.pop():"."!==t&&l.push(t);return s+l.join("/")}var a=window.UEDITOR_HOME_URL||e(),i=window.UEDITOR_SERVER_URL||a;window.UEDITOR_CONFIG={UEDITOR_HOME_URL:a,serverUrl:i,toolbars:[["fullscreen","source","|","undo","redo","|","bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc","|","rowspacingtop","rowspacingbottom","lineheight","|","customstyle","paragraph","fontfamily","fontsize","|","directionalityltr","directionalityrtl","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","|","touppercase","tolowercase","|","link","unlink","anchor","|","imagenone","imageleft","imageright","imagecenter","|","simpleupload","insertimage","emotion","scrawl","insertvideo","music","attachment","map","gmap","insertframe","insertcode","webapp","pagebreak","template","background","|","horizontal","date","time","spechars","snapscreen","wordimage","|","inserttable","deletetable","insertparagraphbeforetable","insertrow","deleterow","insertcol","deletecol","mergecells","mergeright","mergedown","splittocells","splittorows","splittocols","charts","|","print","preview","searchreplace","drafts","help"]],zIndex:9e6,initialFrameHeight:450,scaleEnabled:!0,minFrameHeight:350,allowDivTransToP:!1,xssFilterRules:!0,inputXssFilter:!0,outputXssFilter:!0,whitList:{a:["target","href","title","class","style"],abbr:["title","class","style"],address:["class","style"],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src","class","style"],b:["class","style"],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite","class","style"],br:[],caption:["class","style"],center:[],cite:[],code:["class","style"],col:["align","valign","span","width","class","style"],colgroup:["align","valign","span","width","class","style"],dd:["class","style"],del:["datetime"],details:["open"],div:["class","style"],dl:["class","style"],dt:["class","style"],em:["class","style"],font:["color","size","face"],footer:[],h1:["class","style"],h2:["class","style"],h3:["class","style"],h4:["class","style"],h5:["class","style"],h6:["class","style"],header:[],hr:[],i:["class","style"],img:["src","alt","title","width","height","id","_src","loadingclass","class","data-latex"],ins:["datetime"],li:["class","style"],mark:[],nav:[],ol:["class","style"],p:["class","style"],pre:["class","style"],s:[],section:[],small:[],span:["class","style"],sub:["class","style"],sup:["class","style"],strong:["class","style"],table:["width","border","align","valign","class","style"],tbody:["align","valign","class","style"],td:["width","rowspan","colspan","align","valign","class","style"],tfoot:["align","valign","class","style"],th:["width","rowspan","colspan","align","valign","class","style"],thead:["align","valign","class","style"],tr:["rowspan","align","valign","class","style"],tt:[],u:[],ul:["class","style"],video:["autoplay","controls","loop","preload","src","height","width","class","style"]}},window.UE={getUEBasePath:e}}();