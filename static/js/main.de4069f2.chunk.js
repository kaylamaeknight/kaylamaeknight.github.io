(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/ui001.dc6f3455.png"},23:function(e,t,a){e.exports=a.p+"static/media/ui002.1dd2370b.png"},24:function(e,t,a){e.exports=a.p+"static/media/ui003.a17bbced.png"},25:function(e,t,a){e.exports=a.p+"static/media/workiva.7394ffc8.png"},26:function(e,t,a){e.exports=a.p+"static/media/gtsb.b1a828e2.png"},27:function(e,t,a){e.exports=a.p+"static/media/vanmeter.41897536.png"},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=a(2),o=a(3),s=a(5),m=a(4),u=a(6),E=a(10),p=a(11),d=(a(33),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container-fluid px-5 d-flex align-items-center"},l.a.createElement("h1",{className:"logo m-0"},l.a.createElement(E.b,{to:"/"},l.a.createElement("strong",null,"KAYLA"),"KNIGHT")),l.a.createElement("nav",{className:"ml-auto d-none d-sm-block"},l.a.createElement("ul",{className:"list unstyled list-inline m-0 d-flex align-items-center"},l.a.createElement(E.b,{className:"nav-link",to:"/"},"Portfolio"),l.a.createElement(E.b,{className:"nav-link",to:"/resume"},"R\xe9sum\xe9"),l.a.createElement(E.b,{className:"nav-link btn btn-secondary ml-3",to:"/contact"},"Contact"))))))}}]),t}(n.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero bg-gradient"},l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("span",null,"Hello World \u2014"),"I am a UX/UI designer and front end web developer based in Minneapolis / St. Paul"),l.a.createElement("ul",{className:"mb-5 list-unstyled list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/kaylaknight/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in fa-lg"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.behance.net/kayla-knight",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-behance fa-lg"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/kayla-knight",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github-alt fa-lg"})))),l.a.createElement(E.b,{className:"btn btn-primary",to:"/contact"},"Say Hello")))}}]),t}(n.Component),h=function(e){var t=e.image,a=e.link,n={backgroundImage:"url(".concat(t,")")};return l.a.createElement("a",{className:"slide text-center",target:"_blank",rel:"noopener noreferrer",href:a,style:n})},f=function(e){return l.a.createElement("div",{className:"back-arrow",onClick:e.goToPrevSlide},l.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"}))},g=function(e){return l.a.createElement("div",{className:"next-arrow",onClick:e.goToNextSlide},l.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"}))},v=a(22),w=a.n(v),k=a(23),y=a.n(k),N=a(24),j=a.n(N),O=a(25),I=a.n(O),S=a(26),x=a.n(S),P=a(27),D=a.n(P),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).goToPrevSlide=function(){if(0===a.state.currentIndex)return a.setState({currentIndex:a.state.images.length-1,translateValue:-a.slideWidth()*(a.state.images.length-1)});a.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+a.slideWidth()}})},a.goToNextSlide=function(){if(a.state.currentIndex===a.state.images.length-1)return a.setState({currentIndex:0,translateValue:0});a.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-a.slideWidth()}})},a.slideWidth=function(){return document.querySelector(".slide").clientWidth},a.state={images:[I.a,D.a,x.a,w.a,y.a,j.a],links:["https://workiva.com","https://vanmeterinc.com","http://drivesmartiowa.com","https://www.behance.net/gallery/83369907/Daily-UI-001-Login","https://www.behance.net/gallery/83415529/Daily-UI-002-Payment-Info","https://www.behance.net/gallery/83671421/Daily-UI-003-Landing-Page"],currentIndex:0,translateValue:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)")}},this.state.images.map(function(t,a){return l.a.createElement(h,{key:a,link:e.state.links[a],image:t})})),l.a.createElement("div",{className:"carousel-arrows"},l.a.createElement(f,{goToPrevSlide:this.goToPrevSlide}),l.a.createElement(g,{goToNextSlide:this.goToNextSlide})))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio",className:"content"},l.a.createElement(C,null))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"content container-fluid p-5"},l.a.createElement("h1",null,"R\xe9sum\xe9"),l.a.createElement("div",{className:"mb-5 row"},l.a.createElement("div",{class:"col-12 col-md-8 mb-3 mb-md-0"},l.a.createElement("h2",null,"Professional Experience"),l.a.createElement("p",null,l.a.createElement("strong",null,"Front End Web Developer & UX/UI Designer - Consultant"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"http://thecreativegroup.com",target:"_blank",rel:"noopener noreferrer"},"The Creative Group")," \xa0\xb7\xa0 July 2019 \u2013 Present \xa0\xb7\xa0 Minneapolis / St. Paul"),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("strong",null,"UI Designer & Front End Developer"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/kaylaknight/",target:"_blank",rel:"noopener noreferrer"},"Independent Contractor")," \xa0\xb7\xa0 January 2019 \u2013 Present \xa0\xb7\xa0 Minneapolis / St. Paul"),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("strong",null,"Software Engineer"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"http://workiva.com",target:"_blank",rel:"noopener noreferrer"},"Workiva")," \xa0\xb7\xa0 October 2015 \u2013 December 2018 \xa0\xb7\xa0 Ames, IA (Remote)"),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("strong",null,"Web Designer & Front End Web Developer"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://www.shiftdsm.com/",target:"_blank",rel:"noopener noreferrer"},"Shift Interactive")," \xa0\xb7\xa0 October 2014 \u2013 October 2015 \xa0\xb7\xa0 West Des Moines, IA")),l.a.createElement("p",null,l.a.createElement("strong",null,"Web Developer"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://integer.com/",target:"_blank",rel:"noopener noreferrer"},"The Integer Group")," \xa0\xb7\xa0 April 2012 \u2013 October 2014 \xa0\xb7\xa0 Des Moines, IA")),l.a.createElement("p",null,l.a.createElement("strong",null,"Web Designer & Developer Intern"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://www.foundation.iastate.edu",target:"_blank",rel:"noopener noreferrer"},"The ISU Foundation")," \xa0\xb7\xa0 August 2010 \u2013 August 2011 \xa0\xb7\xa0 Ames, IA"))),l.a.createElement("div",{class:"col-12 col-md-4"},l.a.createElement("h2",null,"Education"),l.a.createElement("p",null,l.a.createElement("strong",null,"B.S. Computer Science"),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://www.iastate.edu/",target:"_blank",rel:"noopener noreferrer"},"Iowa State")," \xa0\xb7\xa0 2012 \xa0\xb7\xa0 Ames, IA")))),l.a.createElement("h2",null,"Technology Stack & Tools"),l.a.createElement("div",{className:"w-100 d-lg-flex justify-content-between"},l.a.createElement("div",{className:"mb-5 mb-md-0"},l.a.createElement("h3",null,"Design & Prototyping"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"Adobe XD"),l.a.createElement("li",null,"Adobe Illustrator"),l.a.createElement("li",null,"Adobe Photoshop"),l.a.createElement("li",null,"Invision"),l.a.createElement("li",null,"Flowmapp"))),l.a.createElement("div",{className:"mb-5 mb-md-0"},l.a.createElement("h3",null,"Front end Development"),l.a.createElement("ul",{className:"list-unstyled m-0"},l.a.createElement("li",null,"Bootstrap 4"),l.a.createElement("li",null,"Pattern Lab"),l.a.createElement("li",null,"Storybook"),l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS3 (SCSS)"),l.a.createElement("li",null,"JavaScript (ReactJS, jQuery)"),l.a.createElement("li",null,"Email development"))),l.a.createElement("div",{className:"mb-0"},l.a.createElement("h3",null,"Back-end Development"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"WordPress"),l.a.createElement("li",null,"Drupal"),l.a.createElement("li",null,"Modx"),l.a.createElement("li",null,"PHP")))))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"content container-fluid"},l.a.createElement("div",{className:"p-5"},l.a.createElement("h1",null,"Contact"),l.a.createElement("h2",null,"I am available for contract engagements through ",l.a.createElement("br",null),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.roberthalf.com/work-with-us/our-services/creativegroup/"},"The Creative Group")),l.a.createElement("p",null,"Please reach out to ",l.a.createElement("strong",null,"James Neis")," for more information."),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-envelope fa-fw mr-3"})," ",l.a.createElement("a",{href:"mailto:james.neis@creativegroup.com"},"james.neis@creativegroup.com")),l.a.createElement("p",{className:"mb-0"},l.a.createElement("i",{class:"fas fa-phone fa-fw mr-3"})," ",l.a.createElement("a",{href:"tel:612.333.7990"},"612.333.7990")),l.a.createElement("hr",{className:"mt-5 mb-5"}),l.a.createElement("p",null,"We can help you achieve your business goals by providing you with the committed resources you need for projects such as web/mobile design and development, user experience and content management."),l.a.createElement("p",null,"Our Salaried Professional Service specializes in the placement of creative and marketing professionals like myself, on a long-term and project basis where continuity is essential, mitigating the risk of turnover during the engagement.")))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(d,null),l.a.createElement("main",null,l.a.createElement(b,null),l.a.createElement(p.a,{exact:!0,path:"/",component:A}),l.a.createElement(p.a,{path:"/resume",component:T}),l.a.createElement(p.a,{path:"/contact",component:W})))}}]),t}(n.Component);c.a.render(l.a.createElement(_,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.de4069f2.chunk.js.map