(this.webpackJsonpcard_games_frontend=this.webpackJsonpcard_games_frontend||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/p1Back.d4876dce.jpg"},37:function(e,a,t){e.exports=t(68)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(31),d=t.n(n),o=(t(42),t(43),t(16)),s=t(12),l=t(6),i=t(7),u=t(10),m=t(9),p=t(11),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"Home")}}]),a}(r.Component);t(44);var g=new(function(){function e(a){Object(l.a)(this,e),this.cards=a}return Object(i.a)(e,[{key:"size",value:function(){return this.cards.length}},{key:"shuffle",value:function(){for(var e=this.cards,a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e}},{key:"draw",value:function(){return this.cards.shift()}}]),e}())(function(){for(var e=["\u2660\ufe0e","\u2663\ufe0e","\u2665\ufe0e","\u2666\ufe0e"],a=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],t=[],r=0;r<=e.length-1;r++)for(var c=0;c<=a.length-1;c++)t.push({suite:e[r],rank:a[c]});return function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e}(t)}()),v=t(14),h=t.n(v),k=t(70),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.userScore,t=e.computerScore;return c.a.createElement("div",{className:"score-grid-container"},c.a.createElement("div",{className:" player-score-label"},"Your Score"),c.a.createElement("div",{className:" computer-score-label"},"Computer Score"),c.a.createElement("div",{className:"player-score"},a),c.a.createElement("div",{className:"computer-score"},t))}}]),a}(r.Component),C=(t(62),t(13)),w=t.n(C),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isLoaded:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.card1Image,t=e.card2Image,r=e.card1,n=e.card2,d=e.p1Image4,o=e.p1Card4,s=e.p2Image4,l=e.p2Card4;return c.a.createElement("div",null,c.a.createElement("strong",null,"You"),c.a.createElement("div",{className:"card1-container container"},c.a.createElement("img",{src:a,alt:r,className:"war-card-match"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-1 back-of-card"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-2 back-of-card"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-3 back-of-card"}),c.a.createElement("img",{src:d,alt:o,className:"card-4 top-card"})),c.a.createElement("strong",null,"Computer"),c.a.createElement("div",{className:"card2-container container"},c.a.createElement("img",{src:t,alt:n,className:"war-card-match"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-4 back-of-card"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-5 back-of-card"}),c.a.createElement("img",{src:w.a,alt:"face down card",className:"card-6 back-of-card"}),c.a.createElement("img",{src:s,alt:l,className:"card-7 top-card"})))}}]),a}(r.Component),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={cardDeck:g,draw:g.draw(),color:"black",image1:null,image2:null,card1:null,card2:null,userScore:0,p1Image4:null,p1Card4:null,p2Image4:null,p2Card4:null,computerScore:0,isLoaded:!1,rankedCardValue1:null,rankedCardValue2:null,warRankedCardValue1:null,warRankedCardValue2:null,initWar:!1,showWar:!1},t.getCards=function(){var e=t.state.isLoaded;g.shuffle(),t.setState({cardDeck:g.shuffle(),isLoaded:!e}),t.draw(),t.getCardsFromApi(),t.updateScore()},t.draw=function(){t.setState({draw:g.draw()})},t.getCardsFromApi=function(){var e=t.state.isLoaded;h.a.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((function(a){var r=a.data.deck_id;setTimeout((function(){h.a.get("https://deckofcardsapi.com/api/deck/".concat(r,"/draw/?count=2")).then((function(a){var c=a.data.cards[0],n=a.data.cards[1];t.setState({image1:c.image,image2:n.image,card1:c,card2:n,deckId:r,isLoaded:!e})}))}),200),setTimeout((function(){t.updateScore()}),800)}));var a=t.state;a.showWar;a.initWar&&t.setState({initWar:!1})},t.updateScore=function(e,a){var r=t.state,c=r.card1,n=r.card2;r.isLoaded;if(n=a||n,(c=e||c)&&n){var d={ACE:14,KING:13,QUEEN:12,JACK:11,10:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2,1:1};t.setState({rankedCardValue1:d[c.value],rankedCardValue2:d[n.value]})}setTimeout((function(){var e=t.state,a=e.rankedCardValue1,r=e.rankedCardValue2;if(a>r&&t.setState((function(e){return{userScore:e.userScore+=1}})),r>a&&t.setState((function(e){return{computerScore:e.computerScore+=1}})),a==r){var c=t.state.initWar;t.setState({initWar:!c}),t.runWar()}}),100)},t.runWar=function(){if(t.getCardsForPlayer1(),t.getCardsForPlayer2(),!t.state.isLoaded){var e=t.state,a=e.p1Card4,r=e.p2Card4;if(a&&r){var c={ACE:14,KING:13,QUEEN:12,JACK:11,10:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2,1:1};t.setState({warRankedCardValue1:c[a.value],warRankedCardValue2:c[r.value]}),setTimeout((function(){var e=t.state,a=e.warRankedCardValue1,r=e.warRankedCardValue2;if(a>r&&t.setState((function(e){return{userScore:e.userScore+=1}})),r>a&&t.setState((function(e){return{computerScore:e.computerScore+=1}})),a==r){var c=t.state.initWar;t.setState({initWar:!c})}}),100)}}},t.getCardsForPlayer1=function(){var e=t.state,a=e.isLoaded,r=e.deckId;h.a.get("https://deckofcardsapi.com/api/deck/".concat(r,"/draw/?count=4")).then((function(e){var c=e.data.cards[3];t.setState({p1Image4:c.image,p1Card4:c,deckId:r,isLoaded:!a})}))},t.getCardsForPlayer2=function(){var e=t.state,a=e.isLoaded,r=e.deckId;h.a.get("https://deckofcardsapi.com/api/deck/".concat(r,"/draw/?count=8")).then((function(e){var c=e.data.cards[6];t.setState({p2Image4:c.image,p2Card4:c,deckId:r,isLoaded:!a})}))},t.getCards=function(){var e=t.state;e.card1,e.card2,e.isLoaded;t.getCardsFromApi()},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCardsFromApi()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,a=this.state,t=(a.draw,a.image1),r=a.image2,n=a.card1,d=a.card2,o=a.isLoaded,s=a.userScore,l=a.computerScore,i=a.initWar,u=a.deckId,m=a.p1Image4,p=a.p1Card4,f=a.p2Image4,g=a.p2Card4;return c.a.createElement("div",{className:"card-container"},c.a.createElement(E,{card1:n,card2:d,userScore:s,computerScore:l,isLoaded:o}),c.a.createElement(k.a,{variant:"outline-primary",className:"get-card-btn",onClick:function(){return e.getCards()}},"Get Card"),i?c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("strong",null," WAR "),c.a.createElement(b,{deckId:u,card1Image:t,card2Image:r,card1:n,card2:d,p1Image4:m,p1Card4:p,p2Image4:f,p2Card4:g,userScore:s,computerScore:l})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-grid-container"},c.a.createElement("div",{className:"card1 "},c.a.createElement("img",{src:t,alt:n})),c.a.createElement("div",{className:"card2 "},c.a.createElement("img",{src:r,alt:d})))))}}]),a}(r.Component);var N=function(){return c.a.createElement(o.a,{basename:"/card_games"},c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("nav",null,c.a.createElement(o.b,{to:"/"},"Home"),c.a.createElement(o.b,{to:"/war"},"War"))),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(f,null)),c.a.createElement(s.a,{exact:!0,path:"/war"},c.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.1c08a2ac.chunk.js.map