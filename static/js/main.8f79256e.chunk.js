(this["webpackJsonpheadless-cms-blog"]=this["webpackJsonpheadless-cms-blog"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,c,i,s,r,o,l,j,d,x,b,h=n(0),p=n.n(h),g=n(41),O=n.n(g),u=n(19),m=n(3),f=n(14),v=n(42),w=n(73),y=n(7),k=n(8),N=k.a.article(a||(a=Object(y.a)(["\n padding: 30px 50px;\n line-height: 1.5;\n&.categories-article{\n    font-size: 12px;\n    display: flex;\n    @media only screen and (max-width: 790px){\n    flex-direction: column;\n}\n\n}\n"]))),z=Object(k.a)(u.c)(c||(c=Object(y.a)(["\nfont-size: 20px;\ntext-decoration: none;\ncolor: black;\n&:hover{\n    color: wheat;\n    background-color: #303030;\n}\n&.categories-link{\n    color: #303030;\n    font-size: 12px;\n    margin: 6px;\n    padding: 12px;\n    &:hover{\n    color: wheat;\n}\n}\n&.page-link{\n    font-size: 14px;\n    color: wheat;\n    padding-left: 50px;\n}\n&.page-numbers{\n    font-size: 16px;\n    padding: 0\n}\n&.start-page{\n    margin: 25px;\n    padding: 20px;\n    color: wheat;\n    font-weight: 700;\n    &:hover{\n        background-color: wheat;\n        color: #303030;\n    }}\n&.category-list{\n    font-size: 15px;\n    padding: 2px 10px;\n    &:hover{\n        background-color: #303030;\n        color: wheat;\n        border-radius: 10px;\n    }\n}\n&.navlink-header{\n    color: wheat;\n \n}\n\n"]))),S=n(1),C=function(e){var t=Object.assign({},(Object(v.a)(e),e));return Object(S.jsxs)(N,{children:[Object(S.jsx)(z,{to:"/blog/".concat(t.uid),children:t.data.title[0].text}),Object(S.jsxs)("p",{children:[t.data.text[0].text,"..."]}),Object(S.jsx)(w.a,{variant:"middle"})]})},M=k.a.div(i||(i=Object(y.a)(["\n&.page-numbers{\n    display: flex;\n    justify-content: space-around;\n    width: 15%;\n    margin: 0 auto;\n    padding-bottom: 15px;\n}\n&.start-page{\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background-image: url('https://picsum.photos/1000/700');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n&.about{\n    padding: 30px 50px;\n    line-height: 2;\n}\n&.home-page{\n    height: fit-content;\n}\n&.articles-list{\n    padding: 30px 50px;\n}\n&.categories{\n    padding: 30px 50px;\n}\n\n"]))),F=n(27),A=function(){var e=Object(F.b)("post"),t=Object(f.a)(e,2),n=t[0];return"loaded"===t[1].state?n:""},T=Object(k.a)((function(e){return Object(S.jsx)("svg",Object(m.a)(Object(m.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),{},{children:Object(S.jsx)("path",{d:"M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0-18.7 49.1 0 67.9 49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9 49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9-49.1-18.7-67.9 0-18.7 49.1 0 67.9z"})}))}))(s||(s=Object(y.a)(["\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\nwidth: 50px;\nanimation-name: spin;\nanimation-duration: 1200ms;\nanimation-iteration-count: infinite;\nanimation-timing-function: linear;\n\n"]))),B=function(){return Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"70px"},children:Object(S.jsx)(T,{})})},D=function(){for(var e=A(),t=p.a.useState(1),n=Object(f.a)(t,2),a=n[0],c=n[1],i=6*a,s=i-6,r=e.slice(s,i),o=[],l=1;l<=Math.ceil(e.length/6);l++)o.push(l);var j=function(e){c(e.target.id)};return Object(S.jsxs)(M,{children:[r?r.map((function(e){return Object(S.jsx)("div",{children:Object(S.jsx)(C,Object(m.a)({},e))},e.uid)})):Object(S.jsx)(B,{}),Object(S.jsx)(M,{className:"page-numbers",children:o.map((function(e){return Object(S.jsx)(z,{activeStyle:{fontWeight:700},className:"page-numbers",to:"/page-".concat(e),id:e,onClick:j,children:e},e)}))})]})},E=k.a.li(r||(r=Object(y.a)(["\n    display: flex;\n    justify-content: space-between;\n    line-height: 2.5;\n    font-size: 15px;\n    &:hover{\n    background-color: #303030;\n    color: wheat;\n}\n"]))),P=function(){var e=A(),t=e&&e.map((function(e){return e.tags[0]})).filter((function(e,t,n){return n.indexOf(e)===t}));return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(M,{className:"categories",children:[Object(S.jsx)("h3",{children:"Categories "}),Object(S.jsx)("ul",{style:{padding:"8px",display:"flex"},children:t?t.map((function(e){return Object(S.jsxs)(E,{children:[Object(S.jsx)(z,{className:"category-list",to:"/categories/".concat(e),children:e.toUpperCase()}),Object(S.jsx)(w.a,{orientation:"vertical"})]},e)})):Object(S.jsx)(B,{})})]})})},R=k.a.ul(o||(o=Object(y.a)(["\npadding: 0;\n"]))),I=function(){var e=A();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(M,{className:"articles-list",children:[Object(S.jsx)("h3",{children:"Articles on blog: "}),Object(S.jsx)(R,{children:e?e.sort((function(e,t){return new Date(t.data.date)-new Date(e.data.date)})).map((function(e){return Object(S.jsxs)(E,{children:[Object(S.jsx)(z,{style:{fontSize:"15px"},to:"/blog/".concat(e.uid),children:e.data.title[0].text}),Object(S.jsx)("span",{children:e.data.date})]},e.uid)})):Object(S.jsx)(B,{})})]})})},L=function(){var e=Object(F.c)("about"),t=Object(f.a)(e,1)[0];return Object(S.jsx)(M,{className:"about",children:t?Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:t.data.title[0].text}),Object(S.jsx)("p",{children:t.data.text[0].text})]}):Object(S.jsx)(B,{})})},W=n(74),J=n(9),U=k.a.img(l||(l=Object(y.a)(["\nwidth: 80%;\nborder-radius: 4px;\n&.categories-image{\nwidth: 200px;\nmargin-left: 0\n}\n"]))),G=k.a.footer(j||(j=Object(y.a)(["\n    font-size: 14px;\n    color: wheat;\n    padding: 30px;\n    background-color: #303030;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n    .link{\n        color: wheat;\n        text-decoration: none;\n    }"]))),X=function(){var e=Object(J.e)().id,t=A(),n=t&&t.find((function(t){return t.uid===e}));return Object(S.jsx)(M,{children:n?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(N,{className:"article",children:[Object(S.jsx)("h2",{children:n.data.title[0].text}),n.data.text.map((function(e){return Object(S.jsx)("p",{children:e.text},Object(W.a)())})),Object(S.jsx)(U,{src:n.data.image.url,alt:n.data.image.alt})]}),Object(S.jsxs)(G,{children:[Object(S.jsxs)("span",{children:["Published on: ",n.data.date]}),Object(S.jsxs)("span",{children:["Category: ",Object(S.jsx)(u.b,{className:"link",to:"/categories/".concat(n.tags),children:n.tags})]}),Object(S.jsx)(z,{to:"/articles",className:"page-link",children:"  See articles list  "}),Object(S.jsx)(z,{to:"/categories",className:"page-link",children:"  Check all categories  "})]})]}):Object(S.jsx)(B,{})})},q=function(){var e=Object(J.e)().tag,t=A(),n=t&&t.filter((function(t){return t.tags[0]===e}));return Object(S.jsxs)(M,{children:[Object(S.jsx)("h3",{style:{textAlign:"center"},children:e.toUpperCase()}),n?n.map((function(e){return Object(S.jsxs)(N,{className:"categories-article",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:e.data.title[0].text}),Object(S.jsxs)("p",{children:[e.data.text[0].text,"..."]}),Object(S.jsx)(z,{className:"categories-link",to:"/blog/".concat(e.uid),children:"READ MORE"})]}),Object(S.jsx)(U,{src:e.data.image.url,alt:e.data.image.alt,className:"categories-image"})]},e.uid)})):Object(S.jsx)(B,{})]})},H=k.a.p(d||(d=Object(y.a)(["\n font-weight: 800;\n font-size: 30px;\n background-color: wheat; \n margin-top: 80px;\n padding: 10px;\n"]))),K=function(){return Object(S.jsxs)(M,{className:"start-page",children:[Object(S.jsx)(H,{children:"Welcome to MyBlog"}),Object(S.jsx)(z,{className:"start-page",to:"/page-1",children:"START EXPLORING"})]})},Q=k.a.header(x||(x=Object(y.a)(["\n    padding: 35px;\n    display: flex;\n    justify-content: space-between;\n    text-decoration: none;\n    background-color: #303030;\n    "]))),V=k.a.div(b||(b=Object(y.a)(["\n    min-width: 50%;\n    display: flex;\n    justify-content: space-around;\n    @media only screen and (max-width: 580px){\n    flex-direction: column;\n    align-items: flex-end;\n}\n    "]))),Y=function(){var e={fontWeight:700};return Object(S.jsxs)(Q,{children:[Object(S.jsx)(z,{className:"navlink-header",activeStyle:e,to:"/",children:"My Blog"}),Object(S.jsxs)(V,{children:[Object(S.jsx)(z,{className:"navlink-header",activeStyle:e,to:"/about",children:"About"}),Object(S.jsx)(z,{className:"navlink-header",activeStyle:e,to:"/categories",children:"Categories"}),Object(S.jsx)(z,{className:"navlink-header",activeStyle:e,to:"/articles",children:"Articles"})]})]})};var Z=function(){return Object(S.jsxs)(M,{children:[Object(S.jsx)(Y,{}),Object(S.jsx)(J.a,{exact:!0,path:"/",children:Object(S.jsx)(K,{})}),Object(S.jsx)(J.a,{path:"/page-:id",children:Object(S.jsx)(D,{})}),Object(S.jsx)(J.a,{path:"/articles",children:Object(S.jsx)(I,{})}),Object(S.jsx)(J.a,{path:"/about",children:Object(S.jsx)(L,{})}),Object(S.jsx)(J.a,{exact:!0,path:"/categories",children:Object(S.jsx)(P,{})}),Object(S.jsx)(J.a,{exact:!0,path:"/blog/:id",children:Object(S.jsx)(X,{})}),Object(S.jsx)(J.a,{exact:!0,path:"/categories/:tag",children:Object(S.jsx)(q,{})})]})},$=n(46).a("task-react-routing-jw",{accessToken:""}),_=(n(64),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))});O.a.render(Object(S.jsx)(u.a,{children:Object(S.jsx)(p.a.StrictMode,{children:Object(S.jsx)(F.a,{client:$,children:Object(S.jsx)(Z,{})})})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.8f79256e.chunk.js.map