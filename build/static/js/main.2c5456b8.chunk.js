(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(14),l=t.n(c),s=(t(21),t(22),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),o=t(4),m=t.n(o),i=t(15),u=t(2),p=t(16),h=t.n(p),E=Object(r.createContext)(),d=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Forecast Finder"))},w=function(){return n.a.createElement("div",{className:"tagline"},n.a.createElement("p",null,"Enter the name of the city you want to see the weather in to get started"))},_=function(e){return n.a.createElement("div",{className:"content"},e.children)},f=function(){var e=Object(r.useContext)(E).api_call;return n.a.createElement("div",{onSubmit:e,className:"weather-search"},n.a.createElement("form",{className:"weather-search__form"},n.a.createElement("input",{name:"location",autoComplete:"off",className:"weather-search__input",type:"text"}),n.a.createElement("div",{className:"weather-search__submit"},n.a.createElement("button",{className:"weather-search__button"},"\u2192"))))},b=function(){var e=Object(r.useContext)(E),a=e.weather,t=e.city,c=a.temp,l=a.humidity,s=a.pressure;return n.a.createElement("div",{className:"weather-data"},n.a.createElement("p",{className:"weather__tagline"},"Weather information for ",n.a.createElement("span",{className:"weather-data__city"},t)),n.a.createElement("div",{className:"weather-data__box"},n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Temperature"),n.a.createElement("p",{className:"weather-data__value"},c,"\u2103")),n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Humidity"),n.a.createElement("p",{className:"weather-data__value"},l,"%")),n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Pressure"),n.a.createElement("p",{className:"weather-data__value"},s,"\u33d4"))))},v=function(e){var a=e.error;return n.a.createElement("div",{className:"error"},a)},N=function(){var e=new Date;return n.a.createElement("div",{className:"date-time"},"".concat(e.toLocaleDateString()," - ").concat(e.toLocaleTimeString()))},y=t(3),g=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"social"},n.a.createElement("p",null,"Developed by: Dimitris Doxopoulos"),n.a.createElement("a",{className:"social-icon",rel:"noopener noreferrer",href:"https://github.com/DimitrisDoxopoulos",target:"_blank"},n.a.createElement(y.b,null)),n.a.createElement("a",{className:"social-icon",rel:"noopener noreferrer",href:"https://www.facebook.com/DDoxopoulos/",target:"_blank"},n.a.createElement(y.a,null)),n.a.createElement("a",{className:"social-icon",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/dimitris-doxopoulos-a3687346/",target:"_blank"},n.a.createElement(y.c,null))),n.a.createElement("p",null,"Based on a tutorial made by ",n.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw",target:"_blank"},"HamScript")))},x=function(){var e=Object(r.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(),s=Object(u.a)(l,2),o=s[0],p=s[1],y=Object(r.useState)(),x=Object(u.a)(y,2),j=x[0],k=x[1],D=function(){var e=Object(i.a)(m.a.mark((function e(a){var t,r,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=a.target.elements.location.value){e.next=5;break}return c(null),e.abrupt("return",k("Please enter the name of the city"));case 5:return"325ca43691c7a61a681c3a688920ba60",r="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat("325ca43691c7a61a681c3a688920ba60"),n=h.a.get(r),e.next=10,n;case 10:l=e.sent,c(l.data.main),p(l.data.name),k(null);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return console.log(t),n.a.createElement("div",{className:"main"},n.a.createElement(d,null),n.a.createElement(_,null,n.a.createElement(N,null),n.a.createElement(w,null),n.a.createElement(E.Provider,{value:{api_call:D,weather:t,city:o,error:j}},n.a.createElement(f,null),t&&n.a.createElement(b,null),j&&n.a.createElement(v,{error:j})),n.a.createElement(g,null)))},j=function(){return n.a.createElement(s,null,n.a.createElement(x,null))};l.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2c5456b8.chunk.js.map