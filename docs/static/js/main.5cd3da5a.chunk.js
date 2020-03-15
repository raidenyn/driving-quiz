(this["webpackJsonpdriving-test"]=this["webpackJsonpdriving-test"]||[]).push([[0],{74:function(e,n,t){e.exports=t(87)},79:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(22),o=t.n(c),u=(t(79),t(49)),i=t(8),s={createNew:Object(i.createAction)("SESSION/CREATE-NEW")(),setSession:Object(i.createAction)("SESSION/SET-SESSION")(),answer:Object(i.createAction)("SESSION/ANSWER")(),nextQuestion:Object(i.createAction)("SESSION/NEXT-QUESTION")()},l=t(28),f=function(e){return e.session.current},d=function(e){return e.questions.all},b=Object(l.a)(f,(function(e){if(!e)return null;var n=e.currentQuestionIndex;return null==n?null:e.questions[n]})),O=Object(l.a)(b,d,(function(e,n){return e?n[e.questionId]:null})),v=function(e,n){return e.correctAnswerId===n.gottenAnswerId},j=(Object(l.a)(O,b,(function(e,n){return e&&n?v(e,n):null})),Object(l.a)(f,(function(e){return e?Object.keys(e.questions).length:null}))),p=Object(l.a)(f,(function(e){return e?e.currentQuestionIndex+1:null})),m=Object(l.a)(f,d,(function(e,n){return e&&n?e.questions.reduce((function(e,t){return v(n[t.questionId],t)&&e++,e}),0):null})),E=t(30),w=t(3),g=t(15),A=t(16),I=t(109);function S(){var e=Object(g.a)(["\n  text-transform: none;\n"]);return S=function(){return e},e}function h(){var e=Object(g.a)(["\n  font-weight: bold;\n  padding-right: 10px;\n"]);return h=function(){return e},e}function x(){var e=Object(g.a)(["\n  &, &:hover {\n    background-color ",";\n    width: 100%;\n  }\n"]);return x=function(){return e},e}var y=Object(A.a)((function(e){e.isCorrect,e.isGotten;var n=Object(w.a)(e,["isCorrect","isGotten"]);return a.a.createElement(I.a,Object.assign({},n,{variant:"contained"}))}))(x(),(function(e){var n=e.isCorrect,t=e.isGotten;return n?"green":t?"yellow":void 0})),N=A.a.span(h()),q=A.a.span(S()),Q=t(101),k=t(102),C=function(e){var n=e.question,t=e.gottenAnswerId,c=e.onAnswer,o=null!=t?n.correctAnswerId:null,u=Object(r.useCallback)((function(e){null==t&&c(e)}),[c,t]);return a.a.createElement(Q.a,{container:!0,spacing:2},a.a.createElement(Q.a,{item:!0,xs:12},a.a.createElement(k.a,null,n.id,". ",n.text)),n.picture&&a.a.createElement(Q.a,{item:!0,xs:12},a.a.createElement("img",{src:"images/".concat(n.picture),alt:"question"})),Object.entries(n.answers).map((function(e){var n=Object(E.a)(e,2),r=n[0],c=n[1];return a.a.createElement(Q.a,{item:!0,xs:12,sm:6,key:r},a.a.createElement(y,{isCorrect:o===r,isGotten:t===r,onClick:u.bind(null,{answerId:r})},a.a.createElement(N,null,r,"."),a.a.createElement(q,null,c.text)))})))},T=function(e){var n=e.onNewSession;return a.a.createElement(I.a,{onClick:n},"Start a new session")},R=t(103);function G(){var e=Object(g.a)(["\n  padding: 20px 20px;\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n"]);return G=function(){return e},e}var W=Object(A.a)(R.a)(G()),U=function(e){var n=e.onNextQuestion;return a.a.createElement(W,null,a.a.createElement(I.a,{onClick:n,variant:"outlined"},"Next question >>>"))},B=t(108);function J(){var e=Object(g.a)(["\n  color: green;\n"]);return J=function(){return e},e}function M(){var e=Object(g.a)(["\n  padding: 20px 20px;\n"]);return M=function(){return e},e}var P=Object(A.a)(B.a)(M()),z=A.a.span(J()),D=function(e){var n=e.total,t=e.current,r=e.correct;return a.a.createElement(P,null,t," / ",n,", correct: ",a.a.createElement(z,null,r))};function F(){var e=Object(g.a)(["\n  color: green;\n"]);return F=function(){return e},e}function V(){var e=Object(g.a)(["\n  padding: 20px 20px;\n"]);return V=function(){return e},e}var X=Object(A.a)(B.a)(V()),Y=A.a.span(F()),$=function(e){var n=e.total,t=e.correct;return a.a.createElement(X,null,a.a.createElement("p",null,"You have answered on ",n," and gotten ",a.a.createElement(Y,null,t)," correct answers"))},H=Object(u.b)((function(e){var n;return{session:e.session.current,question:O(e),gottenAnswerId:(null===(n=b(e))||void 0===n?void 0:n.gottenAnswerId)||null,totalQuestions:j(e),currentQuestion:p(e),correctAnswers:m(e)}}),s)((function(e){return e.session?e.question?a.a.createElement(R.a,null,a.a.createElement(D,{total:e.totalQuestions,current:e.currentQuestion,correct:e.correctAnswers}),a.a.createElement(C,{key:"question",question:e.question,gottenAnswerId:e.gottenAnswerId,onAnswer:e.answer}),null!=e.gottenAnswerId&&a.a.createElement(U,{key:"next",onNextQuestion:e.nextQuestion})):a.a.createElement(R.a,null,a.a.createElement($,{total:e.totalQuestions,correct:e.correctAnswers}),a.a.createElement(T,{onNewSession:e.createNew})):a.a.createElement(T,{onNewSession:e.createNew})}));var K=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(106),Z=t(24),_={retrieve:Object(i.createAction)("QUESTIONS/RETRIEVE")(),append:Object(i.createAction)("QUESTIONS/APPEND")()},ee=t(32),ne=Object(i.createReducer)({all:{}}).handleAction(_.append,(function(e,n){return Object(ee.a)(e,(function(e){var t=!0,r=!1,a=void 0;try{for(var c,o=n.payload.questions[Symbol.iterator]();!(t=(c=o.next()).done);t=!0){var u=c.value;e.all[u.id]=u}}catch(i){r=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}}))})),te=Object(i.createReducer)({current:null}).handleAction(s.setSession,(function(e,n){return Object(ee.a)(e,(function(e){e.current=n.payload}))})).handleAction(s.answer,(function(e,n){return Object(ee.a)(e,(function(e){var t,r=null===(t=e.current)||void 0===t?void 0:t.questions[e.current.currentQuestionIndex];r&&(r.gottenAnswerId=n.payload.answerId)}))})).handleAction(s.nextQuestion,(function(e){return Object(ee.a)(e,(function(e){e.current&&e.current.currentQuestionIndex++}))})),re=Object(Z.c)({questions:ne,session:te}),ae=t(110),ce=t(10),oe=t(55),ue=t.n(oe),ie=t(64),se=t(104),le=t(65),fe=t(66),de=t(67),be={retrieveQuestions:function(e){return e.pipe(Object(se.a)(Object(i.isActionOf)(_.retrieve)),Object(le.a)(function(){var e=Object(ie.a)(ue.a.mark((function e(n){var r,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,112));case 2:return r=e.sent,a=r.default,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Object(le.a)((function(e){return e()})),Object(fe.a)((function(e){return _.append({questions:e})})))},initialize:function(){return Object(de.a)(null).pipe(Object(fe.a)((function(){return _.retrieve()})))}},Oe=ae.a.apply(void 0,Object(ce.a)(Object.values(be))),ve=t(105);var je={createNewSession:function(e,n){return e.pipe(Object(se.a)(Object(i.isActionOf)(s.createNew)),Object(ve.a)(n),Object(fe.a)((function(e){var n=Object(E.a)(e,2)[1],t=Object.keys(n.questions.all),r=function(e,n){for(var t=Object(ce.a)(e),r=new Array,a=0;a<n;a++){var c=Math.floor(Math.random()*t.length),o=t.splice(c,1)[0];r.push(o)}return r}(t,t.length).map((function(e){return{questionId:+e,gottenAnswerId:null}}));return s.setSession({questions:r,currentQuestionIndex:0})})))}},pe=ae.a.apply(void 0,Object(ce.a)(Object.values(je))),me=Object(ae.a)(Oe,pe),Ee=Object(L.a)();o.a.render(a.a.createElement(u.a,{store:function(e){var n=function(e){var n=[Ee],t=Object(Z.d)(Z.a.apply(void 0,n));return Object(Z.e)(re,e,t)}(e);return Ee.run(me),n}()},a.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.5cd3da5a.chunk.js.map