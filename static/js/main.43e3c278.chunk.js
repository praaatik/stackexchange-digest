(this["webpackJsonpmark-2-stack-exchange"]=this["webpackJsonpmark-2-stack-exchange"]||[]).push([[0],{41:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),a=n(30),s=n.n(a),i=(n(41),n(35)),l=n(9),d=n(11),u=n.n(d),h=n(10),m=n(2);n(58),n(59);var j=function(){return Object(c.jsx)("div",{className:"scroll-top-button",onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"scroll-top-icon",children:[Object(c.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(c.jsx)("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})]})})};n(60);var b=function(e){return console.log(e),Object(c.jsxs)("div",{className:[e.class,"card"].join(" "),children:[Object(c.jsx)("p",{className:"site-name",children:e.siteName}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"title",children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.title}})}),Object(c.jsx)(h.b,{to:"/specific/".concat(e.siteName),children:Object(c.jsxs)("div",{className:"card--viewmore",children:["View Questions",Object(c.jsx)("span",{className:"card--viewmore__left"}),Object(c.jsx)("span",{className:"card--viewmore__top"}),Object(c.jsx)("span",{className:"card--viewmore__right"}),Object(c.jsx)("span",{className:"card--viewmore__bottom"})]})})]})};var f=function(e){return Object(c.jsxs)("div",{className:"cardholder",children:[e.sites.map((function(t,n){var r=t.substr(0,t.indexOf("."));return""===r?Object(c.jsx)(b,{siteName:t,class:t,link:e.questions[n],title:e.title[n]}):Object(c.jsx)(b,{siteName:t,class:r,link:e.questions[n],title:e.title[n]})})),Object(c.jsx)(j,{})]})},g=["stackoverflow","english.stackexchange","physics.stackexchange","movies.stackexchange","astronomy.stackexchange","raspberrypi.stackexchange","worldbuilding.stackexchange","askubuntu","superuser","math.stackexchange","unix.stackexchange","cstheory.stackexchange","codereview.stackexchange","security.stackexchange","softwareengineering.stackexchange","android.stackexchange","fitness.stackexchange","skeptics.stackexchange","scicomp.stackexchange","history.stackexchange","cs.stackexchange","hinduism.stackexchange","worldbuilding.stackexchange","networkengineering.stackexchange","ux.stackexchange"],x=(n(66),n.p+"static/media/view-dark.dca5f315.svg"),k=n.p+"static/media/question-dark.c0bf8b2f.svg",O=n.p+"static/media/view-light.e737dd0b.svg",p=n.p+"static/media/question-light.11adbd0a.svg";var v=function(e){console.log(e.theme);var t=Object(r.useState)([]),n=Object(l.a)(t,2),o=n[0],a=n[1],s=Object(r.useState)(!0),i=Object(l.a)(s,2),d=i[0],h=i[1],m=Object(r.useRef)(null),b=e.match.params.id,f="https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=".concat(b,"&filter=!LaSRLvM3aoFvP_FHtdS2mM");return Object(r.useEffect)((function(){u.a.get(f).then((function(e){e.data.items.map((function(e,t){a((function(t){return t.concat({title:e.title,link:e.link,questionId:e.question_id,creationDate:e.creation_date,isAnswered:e.is_answered,viewCount:e.view_count,answerCount:e.answer_count,tags:e.tags,ownerName:e.owner.display_name,ownerProfileLink:e.owner.link,ownerProfilePhoto:e.owner.profile_image})}))}))})),h(!1)}),[]),Object(c.jsxs)("div",{className:"question-card--parent",id:"parent",ref:m,children:[console.log("Loading is: ".concat(d)),o.map((function(t,n){return Object(c.jsxs)("div",{className:"question-card",children:[Object(c.jsx)("div",{className:"question",children:Object(c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"title",children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:t.title},className:0===t.answerCount?"no-answer":"answer"})})}),Object(c.jsx)("div",{className:"tag-holder",children:t.tags.map((function(e){return Object(c.jsx)("div",{className:"tags",children:e})}))}),Object(c.jsxs)("div",{className:"meta-data",children:[Object(c.jsxs)("div",{className:"meta-data--left",children:[Object(c.jsxs)("div",{className:"view-count",children:[Object(c.jsx)("img",{src:"dark"===e.theme?O:x,alt:"view icon"}),Object(c.jsx)("span",{children:t.viewCount})]}),Object(c.jsxs)("div",{className:"answer-count",children:[Object(c.jsx)("img",{src:"dark"===e.theme?p:k,alt:"question icon"}),Object(c.jsx)("span",{children:t.answerCount})]})]}),Object(c.jsx)("a",{href:t.ownerProfileLink,target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("div",{className:"meta-data--right",children:[Object(c.jsx)("img",{src:t.ownerProfilePhoto,alt:t.ownerName}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:t.ownerName}})]})})]}),Object(c.jsx)("span",{className:"index",children:n+1})]})})),Object(c.jsx)(j,{})]})},w=n.p+"static/media/moon.230bed42.svg",C=n.p+"static/media/sun.2d358aa0.svg";n(67);var N=function(e){return Object(c.jsx)("div",{className:"themer",onClick:function(){return e.clicked()},children:Object(c.jsx)("img",{src:"light"===e.currentTheme?w:C,alt:"theme button"})})};n(68);var _=function(){return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)(h.b,{to:"/",children:Object(c.jsx)("div",{className:"home",children:"Home"})})})},B=(n(69),n(31)),q=n(15);function y(){var e=Object(B.a)(["\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*::selection{\n    background: ",";\n    color: ",";\n}\n\nbody{\n    background: ",";\n    transition: all 250ms ease;\n\n    .question-card--parent{\n        background: ",";\n    }\n    .question-card{\n        border: 8px solid  ",";\n    }\n\n    .title{\n        color: ",";\n    }\n\n    .tag-holder{\n        background: ",";\n    }\n    \n    .tags{\n        color: ","; \n    }\n\n    .view-count, .answer-count, .meta-data--right{\n        color: ","\n    }\n\n    .index{\n        color: ",";\n    }\n\n    .themeButton{\n        background: ","\n    }\n\n    .themer{\n        background: ","\n    }\n\n    .navbar{\n        background: ",";\n        border-bottom-color: ",";\n    }\n\n    .home{\n        color: ","\n    }\n\n    .site-name{\n        color: ","\n    }\n\n    .card{\n        border: 8px solid  ",";\n    }\n\n    .card--viewmore{\n        color: ",";\n        border: 5px solid  ",";\n    }\n\n    .scroll-top-button{\n        border: 5px solid ",";\n    }\n\n    .scroll-top-icon{\n        fill: ","\n    }\n}\n"]);return y=function(){return e},e}var L=Object(q.b)(y(),(function(e){return e.theme.selectionBackgroundColor}),(function(e){return e.theme.selectionColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.tagHolderBackground}),(function(e){return e.theme.tagColor}),(function(e){return e.theme.profileColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.themeButtonColor}),(function(e){return e.theme.themeButtonColor}),(function(e){return e.theme.navBackgroundColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.titleColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.scrollTopBorder}),(function(e){return e.theme.scrollTopBorder})),S={backgroundColor:"#87556f",borderColor:"#322f3d",titleColor:"#fff",tagHolderBackground:"#59405c",tagColor:"#fff",profileColor:"#fff",themeButtonColor:"#59405c",navBackgroundColor:"#59405c",selectionBackgroundColor:"#f4eeff",selectionColor:"#87556f",scrollTopBorder:"#a6b1e1"},T={backgroundColor:"#f4eeff",borderColor:"#a6b1e1",titleColor:"#000",tagHolderBackground:"#dcd6f7",tagColor:"#000",profileColor:"#000",themeButtonColor:"#dcd6f7",navBackgroundColor:"#dcd6f7",selectionBackgroundColor:"#87556f",selectionColor:"#f4eeff",scrollTopBorder:"#322f3d"};var H=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),d=s[0],j=s[1],b=Object(r.useState)("light"),x=Object(l.a)(b,2),k=x[0],O=x[1],p=[];return Object(r.useEffect)((function(){g.map((function(e){p.push("https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=".concat(e,"&filter=!L_(IB3Vfl8G6UL78mkS_Nm"))})),u.a.all(p.map((function(e){return u.a.get(e)}))).then(u.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((function(e){o((function(t){return t.concat(e.data.items[0].link)})),j((function(t){return t.concat(e.data.items[0].title)}))}))})))}),[]),Object(c.jsx)(q.a,{theme:"light"===k?T:S,children:Object(c.jsx)(h.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(L,{}),Object(c.jsx)(_,{}),Object(c.jsx)(N,{clicked:function(){O("light"===k?"dark":"light")},currentTheme:k}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/",exact:!0,children:Object(c.jsx)(f,{sites:g,questions:n,title:d})}),Object(c.jsx)(m.a,{path:"/specific/:id",render:function(e){return Object(c.jsx)(v,Object(i.a)({theme:k},e))},exact:!0})]})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.43e3c278.chunk.js.map