(this["webpackJsonpsolo-react-project"]=this["webpackJsonpsolo-react-project"]||[]).push([[0],{15:function(e,a,t){},29:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(26),i=t.n(r),l=t(2),o=t(3),c=t(5),m=t(4),p=(t(15),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"landingPage"},s.a.createElement("div",{className:"textContainer wrapper"},s.a.createElement("h1",{className:"title"},"Plantastic"),s.a.createElement("p",{className:"titleDesc"},"A guide that will help you take better care of your plants")),s.a.createElement("a",{href:"#intro"},s.a.createElement("i",{"aria-hidden":"true",className:"fas fa-chevron-down"}),s.a.createElement("span",{className:"sr-only"},"Chevron pointing down to the next section of the page")))}}]),t}(n.Component)),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"intro wrapper"},s.a.createElement("h4",{id:"intro",className:"introTitle"},"Struggling to keep your plants alive?"),s.a.createElement("h5",{className:"introSubHeading"},"We can help!"),s.a.createElement("p",{className:"introText"},"Plantastic is database built with love for all the plant lovers out there. Whether you are a novice or a plant snob, this is for you. We've compiled a list of some of the most popular house plants along with good tips to keep your plant babies happy. Take a quick look through our gallery. Once you find the plant you are interested in, click on the image to get more deets."),s.a.createElement("p",{className:"introText last"},"We are working on growing the list."))}}]),t}(n.Component),d=[{id:6,name:"Bird of paradise",imageUrl:"assets/birdOfParadise.jpg"},{id:0,name:"Aloe vera",imageUrl:"assets/aloe.jpg"},{id:3,name:"Adansonii",imageUrl:"assets/andasonii.jpg"},{id:30,name:"String of turtles",imageUrl:"assets/stringOfTurtles.jpg"},{id:42,name:"Tillandsia",imageUrl:"assets/largeTillandasia.jpg"},{id:1,name:"African Mask",imageUrl:"assets/africanMask.jpg"},{id:4,name:"Angel wings begonia",imageUrl:"assets/angelWingsBegonia.jpg"},{id:43,name:"Bunny Ears Cactus",imageUrl:"assets/bunnyEars.jpg"},{id:9,name:"Dragon tree",imageUrl:"assets/dragonTree.jpg"},{id:5,name:"Asparagus Fern",imageUrl:"assets/asparagusFern.jpg"},{id:8,name:"Dracaena Fragrans",imageUrl:"assets/cornPlant.jpg"},{id:7,name:"Burros tail",imageUrl:"assets/burrosTail.jpg"},{id:10,name:"English Ivy",imageUrl:"assets/englishIvy.jpg"},{id:2,name:"African Violet",imageUrl:"assets/africanViolets.jpg"},{id:35,name:"String of pearls",imageUrl:"assets/stringOfPearls.jpg"},{id:11,name:"Boston fern",imageUrl:"assets/fern.jpg"},{id:12,name:"Fiddle Fig",imageUrl:"assets/fiddleFig.jpg"},{id:38,name:"Oxalis",imageUrl:"assets/oxalis.jpg"},{id:13,name:"Guiana Chestnut",imageUrl:"assets/guianaChestnut.jpg"},{id:39,name:"Echeverria",imageUrl:"assets/echeverria.jpg"},{id:14,name:"Hoya Carnosa",imageUrl:"assets/hoyaCarnosa.jpg"},{id:15,name:"Hoya Kerrii",imageUrl:"assets/hoyaKerri.jpg"},{id:31,name:"Variegated string of hearts",imageUrl:"assets/variegatedStringOfHearts.jpg"},{id:16,name:"Jade Plant",imageUrl:"assets/jadePlant.jpg"},{id:18,name:"Monster Deliciosa",imageUrl:"assets/monsteraDeliciosa.jpg"},{id:19,name:"Phalaenopsis Orchid",imageUrl:"assets/orchid.jpg"},{id:20,name:"Watermelon Peperomia",imageUrl:"assets/peperomia2.jpg"},{id:21,name:"Pothos",imageUrl:"assets/pothos.jpg"},{id:40,name:"Hens and chicks",imageUrl:"assets/hen.jpg"},{id:23,name:"Pink prayer plant",imageUrl:"assets/pinkPrayerPlant.jpg"},{id:24,name:"Ponytail Palm",imageUrl:"assets/ponyTail.jpg"},{id:22,name:"Pilea",imageUrl:"assets/pilea.jpg"},{id:25,name:"Rattlesnake",imageUrl:"assets/rattlesnake.jpg"},{id:26,name:"Rubber plant",imageUrl:"assets/rubberPlant.jpg"},{id:27,name:"Snake plant",imageUrl:"assets/snakePlant.jpg"},{id:17,name:"Lucky Bamboo",imageUrl:"assets/luckyBamboo.jpg"},{id:28,name:"Spider plant",imageUrl:"assets/spiderPlant.jpg"},{id:29,name:"String of hearts",imageUrl:"assets/stringOfHearts.jpg"},{id:32,name:"Wandering dude",imageUrl:"assets/wanderingDude.jpg"},{id:33,name:"Yucca",imageUrl:"assets/yucca.jpg"},{id:34,name:"Zz plant",imageUrl:"assets/zzPlant.jpg"},{id:36,name:"African Milk Tree",imageUrl:"assets/milkTree.jpg"},{id:37,name:"Caladium",imageUrl:"assets/calladium.jpg"},{id:41,name:"Zebra plant",imageUrl:"assets/zebra.jpg"}],u=t(11),h=t(17),f=t.n(h);t(34);f.a.initializeApp({apiKey:"AIzaSyApwrElXELr7FjhASUXLwmViqWHSYCujPQ",authDomain:"plant-guide-71002.firebaseapp.com",databaseURL:"https://plant-guide-71002.firebaseio.com",projectId:"plant-guide-71002",storageBucket:"plant-guide-71002.appspot.com",messagingSenderId:"87265471429",appId:"1:87265471429:web:31f6ccc7bd9e0cc14739ac"});var j=f.a,v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).clickHandler=function(){e.setState({showSorted:!0})},e.state={images:[],sortedImages:[],showSorted:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.database().ref().on("value",(function(a){var t=a.val(),n=[];for(var s in t)n.push({rating:t[s].rating,id:t[s].id});n.sort((function(e,a){return a.rating-e.rating}));var r=n.map((function(e){return d.filter((function(a){return a.id===e.id}))[0]}));e.setState({sortedImages:r})}))}},{key:"render",value:function(){var e=this.state.showSorted?this.state.sortedImages:d;return s.a.createElement("section",{className:"galleryContainer wrapper"},s.a.createElement("h2",{className:"plantGallery"},"Plant Gallery"),s.a.createElement("div",{className:"galleryButton"},s.a.createElement("button",{className:"sortingButton",onClick:this.clickHandler},"Click here to sort gallery by rating")),s.a.createElement("p",{className:"galleryText"},"Remember each plant is a unique living thing and may have varying needs, especially in their individual\xa0locations."),s.a.createElement("div",{className:"images"},e.map((function(e,a){return s.a.createElement(u.b,{className:"anchor",key:a,to:"/plant/".concat(e.id)},s.a.createElement("p",{className:"plantName"},e.name),s.a.createElement("img",{className:"plantImage",id:e.id,src:"".concat("/gabriela-parada-project-five","/").concat(e.imageUrl),alt:e.name}))}))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("p",{className:"footer"},s.a.createElement("i",{"aria-hidden":"true",className:"far fa-copyright"}),s.a.createElement("span",{className:"sr-only"},"Copyright"),"Gabriela Parada 2020"))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={show:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement(g,null),s.a.createElement(v,{show:this.state.show}),s.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(9),N=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).counterUp=function(){var a=e.state.selectedPlant.id,t=j.database().ref("/".concat(a,"/rating"));t.once("value",(function(e){var a=e.val();t.set(a+1)}))},e.state={plants:[],selectedPlant:{}},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.body.scrollTop=0;var a=parseInt(this.props.match.params.plantId);j.database().ref("/".concat(a)).on("value",(function(a){var t=a.val(),n={light:t.light,water:t.water,moreInfo:t.moreInfo,repotting:t.repotting,name:t.name,id:t.id,rating:t.rating};e.setState({selectedPlant:n})}))}},{key:"render",value:function(){return s.a.createElement("section",{className:"plantInfoContainer"},s.a.createElement("h1",{className:"plantTitle"},this.state.selectedPlant.name),s.a.createElement("div",{className:"iconContainer"},s.a.createElement("img",{className:"icons",src:"../assets/water.png",alt:"Water schedule"}),s.a.createElement("p",{className:"information"},"Watering: ",this.state.selectedPlant.water)),s.a.createElement("div",{className:"breakLine"}),s.a.createElement("div",{className:"iconContainer"},s.a.createElement("img",{className:"icons",src:"../assets/sun.png",alt:"Sunlight"}),s.a.createElement("p",{className:"information"},"Sunlight: ",this.state.selectedPlant.light)),s.a.createElement("div",{className:"breakLine"}),s.a.createElement("div",{className:"iconContainer"},s.a.createElement("img",{className:"icons",src:"../assets/repot.png",alt:"Repotting tips"}),s.a.createElement("p",{className:"information"},"Repotting: ",this.state.selectedPlant.repotting)),s.a.createElement("div",{className:"breakLine"}),s.a.createElement("div",{className:"iconContainer"},s.a.createElement("img",{className:"icons",src:"../assets/moredeets.png",alt:"Extra details"}),s.a.createElement("p",{className:"information"},"Extra deets: ",this.state.selectedPlant.moreInfo)),s.a.createElement("div",{className:"breakLine"}),s.a.createElement("div",null,s.a.createElement("p",{className:"like"},"If you enjoyed this, give it a ",s.a.createElement("span",{role:"img","aria-label":"Heart Icon"},"\u2665\ufe0f")),s.a.createElement("div",{className:"likesContainer"},s.a.createElement("button",{className:"likeButton",onClick:this.counterUp},s.a.createElement("i",{className:"fas fa-heart"})),s.a.createElement("p",{className:"likesNumber"},"Likes:",this.state.selectedPlant.rating)),s.a.createElement("p",{className:"iconsCred"},"Icons by IYIKON, Noun Project")))}}]),t}(n.Component),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(1,0)}},{key:"render",value:function(){return null}}]),t}(s.a.Component),U=Object(y.e)(k);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u.a,{basename:"/gabriela-parada-project-five"},s.a.createElement(y.a,{exact:!0,path:"/",component:E}),s.a.createElement(U,null),s.a.createElement(y.a,{exact:!0,path:"/plant/:plantId",component:N}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.09a90e76.chunk.js.map