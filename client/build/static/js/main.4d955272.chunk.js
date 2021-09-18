(this.webpackJsonpgameon=this.webpackJsonpgameon||[]).push([[0],{154:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,l,s,d,j,h,g,b,m,O=n(0),u=n(36),x=n.n(u),p=(n(118),n(154),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))}),f=n(4),y=n(75),v=n(24),C=n(144),w=n(198),S=n(199),k=n(197),I=n(137),$=n(112),z=n(111),L=n(81),_=n(140),N=n(89),G=n(67),D=n(68),F=n(104),T=n.n(F),A=new(function(){function e(){Object(G.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return T()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return T()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),P=n(96),B=n(94),U=n(37),E=n(13),q=n(1),H=function(e){Object(P.a)(n,e);var t=Object(B.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e={paddingBottom:"10px",fontFamily:"Good Times"};return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(E.a,{className:"text-center",children:[Object(q.jsx)(E.a.Img,{style:{margin:"0",padding:"0",minHeight:"100vh"},src:"/img/862202--1-@1x.png",alt:"Carad image"}),Object(q.jsxs)(E.a.ImgOverlay,{children:[Object(q.jsx)(E.a.Img,{style:{height:"25rem"},variant:"top",src:"/img/GameOnLogo.svg"}),Object(q.jsxs)(E.a.Body,{className:"text-white",children:[Object(q.jsx)(E.a.Title,{style:e,children:"The Spit-and-a-Handshake App"}),Object(q.jsx)(E.a.Text,{children:'Do you want to challenge someone to a duel? (Well, maybe not a REAL duel...) How about a friendly game of "H-O-R-S-E"? A quick tennis match? A round of 8-Ball? Game-On can help you organize, and keep track of, your bets and challenges with friends. Just signup, or login, create a challenge, and find a friend to prove you\'re competitive prowess.'})]}),A.loggedIn()?"":Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(U.a,{style:{width:"45%"},size:"lg",variant:"primary",type:"submit",children:"Login"}),Object(q.jsx)(E.a.Body,{children:Object(q.jsx)(E.a.Link,{style:e,className:"text-center text-light",href:"/SignUp",children:"Don't have an account? Click here!"})})]})]})]})})}}]),n}(O.Component),W=n(31),M=n.n(W),V=n(50),R=n(201),Y=n(32),J=n(200),Z=Object(J.a)(a||(a=Object(Y.a)(["\n  query users {\n    user {\n      _id\n      name\n      email\n      zipCode\n    }\n  }\n"]))),K=Object(J.a)(c||(c=Object(Y.a)(["\n  query category($_id: ID) {\n      category(_id: $_id) {\n        _id\n        name\n      }\n  }\n  "]))),Q=(Object(J.a)(r||(r=Object(Y.a)(["\n  query categories {\n      categories {\n        _id\n        name\n      }\n  }\n  "]))),Object(J.a)(i||(i=Object(Y.a)(["\n  query competition($_id: ID) {\n    competition(_id: $_id) {\n        _id\n        name\n        location\n        category\n        organizer\n        challenged\n        challengedAccept\n        date\n        victor\n        organizerScore\n        challengedScore\n        category\n        status\n        resultsConfirmed\n    }\n  }\n"])))),X=Object(J.a)(o||(o=Object(Y.a)(["\nquery losses {\n  losses {\n    _id\n    name\n    location\n    organizer\n    challenged\n    challengedAccept\n    date\n    victor\n    organizerScore\n    challengedScore\n    category\n    status\n    resultsConfirmed\n  }\n}\n"]))),ee=Object(J.a)(l||(l=Object(Y.a)(["\nquery wins {\n  wins {\n    _id\n    name\n    location\n    organizer\n    challenged\n    challengedAccept\n    date\n    victor\n    organizerScore\n    challengedScore\n    category\n    status\n    resultsConfirmed\n  }\n}\n"]))),te=Object(J.a)(s||(s=Object(Y.a)(["\n  query ties {\n    ties {\n      _id\n      name\n      location\n      organizer\n      challenged\n      challengedAccept\n      date\n      victor\n      organizerScore\n      challengedScore\n      category\n      status\n      resultsConfirmed\n    }\n  }\n"]))),ne=n(12),ae=n(113),ce=n(133),re=n(49),ie=function(){var e=Object(R.a)(ee),t=Object(R.a)(te),n=Object(R.a)(X),a=n.data;n.error;if(n.loading||e.loading||t.loading)return Object(q.jsx)("h2",{children:"LOADING..."});console.log(e),console.log(t),console.log(a);var c=e.data.wins.length,r=t.data.ties.length,i=a.losses.length,o=A.getProfile().data.name,l=function(){var e=Object(V.a)(M.a.mark((function e(t){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=window.location.origin,a=n+"/challengecreate",window.location.href=a}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s={color:"#00FC2A",fontFamily:"Good Times",display:"flex",justifyContent:"center",alignItem:"center"},d={marginBottom:"10px",width:"18rem"};return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(E.a,{children:[Object(q.jsx)(E.a.Img,{style:{margin:"0",padding:"0",minHeight:"100vh"},src:"/img/343962@1x.png",alt:"Card image"}),Object(q.jsxs)(E.a.ImgOverlay,{children:[Object(q.jsx)("h1",{style:s,className:"text-center text-white",children:"Profile"}),Object(q.jsxs)(ne.a,{className:"signUp-form text-white",children:[Object(q.jsx)(ae.a,{style:s,children:Object(q.jsx)(ae.a.Image,{width:171,height:180,alt:"171x180",src:"/img/profileavatar.png"})}),Object(q.jsx)("h1",{style:{color:"#00FC2A",fontFamily:"Good Times",fontSize:"25px"},className:"font-weight-bold text-center text-white",children:o}),Object(q.jsxs)(ce.a,{style:{fontFamily:"Good Times",background:"white"},striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Wins"}),Object(q.jsx)("th",{children:"Loses"}),Object(q.jsx)("th",{children:"Ties"})]})}),Object(q.jsx)("tbody",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:c}),Object(q.jsx)("td",{children:i}),Object(q.jsx)("td",{children:r})]})})]}),Object(q.jsx)(E.a,{style:d,className:"text-dark",children:Object(q.jsxs)(re.a,{variant:"flush",children:[Object(q.jsx)(re.a.Item,{variant:"success",as:"h4",children:"Current Challenges"}),Object(q.jsx)(re.a.Item,{children:"Cras justo odio"}),Object(q.jsx)(re.a.Item,{children:"Dapibus ac facilisis in"}),Object(q.jsx)(re.a.Item,{children:"Vestibulum at eros"})]})}),Object(q.jsx)(E.a,{style:d,className:"text-dark",children:Object(q.jsxs)(re.a,{variant:"flush",children:[Object(q.jsx)(re.a.Item,{variant:"danger",as:"h4",children:"Previous Challenges"}),Object(q.jsx)(re.a.Item,{children:"Cras justo odio"}),Object(q.jsx)(re.a.Item,{children:"Dapibus ac facilisis in"}),Object(q.jsx)(re.a.Item,{children:"Vestibulum at eros"})]})}),Object(q.jsx)(U.a,{style:{margin:"0 auto",display:"block"},className:"btn-lg",onClick:l,children:"Challenge Someone"})]})]})]})})},oe=n(21),le=n(23),se=n(203),de=Object(J.a)(d||(d=Object(Y.a)(["\n  mutation login(\n    $email: String!, \n    $password: String!) {\n    login(\n      email: $email, \n      password: $password) {\n        token\n        user {\n          _id\n          name\n      }\n    }\n  }\n"]))),je=Object(J.a)(j||(j=Object(Y.a)(["\n  mutation addUser( \n    $name: String!, \n    $email: String!,\n    $password: String!, \n    $zipCode: String!) {\n    addUser( \n      name: $name, \n      email: $email,\n      password: $password,\n      zipCode: $zipCode) {\n        token\n        user {\n        _id\n        name\n        email\n        zipCode\n      }\n    }\n  }\n"]))),he=(Object(J.a)(h||(h=Object(Y.a)(["\n  mutation createCategory(\n    $_id: ID!, \n    $name: String!) {\n    createCategory(\n      _id: $_id, \n      name: $name) {\n        _id\n        name\n    }\n  }\n"]))),Object(J.a)(g||(g=Object(Y.a)(["\n  mutation createCompetition(\n    $name: String!, \n    $location: String!, \n    $organizer: String!, \n    $challenged: String!,\n    $date: String!,\n    $category: String!) {\n    createCompetition(\n      name: $name, \n      location: $location, \n      organizer: $organizer, \n      challenged: $challenged, \n      date: $date,\n      category: $category) {\n        _id\n        name\n        location\n        category\n        organizer\n        challenged\n        challengedAccept\n        date\n    }\n  }\n"])))),ge=Object(J.a)(b||(b=Object(Y.a)(["\n  mutation udpateCompetition(\n    $_id: ID!, \n    $victor: String!, \n    $organizerScore: String!, \n    $challengedScore: String!, \n    $status: String!) {\n    updateCompetition(\n      _id: $_id, \n      victor: $victor, \n      organizerScore: $organizerScore, \n      challengedScore: $challengedScore, \n      status: $status) {\n        _id\n        victor\n        organizerScore\n        challengedScore\n        status\n    }\n  }\n"]))),be=Object(J.a)(m||(m=Object(Y.a)(["\n  mutation confirmCompetition(\n    $_id: ID!, \n    $resultsConfirmed: Boolean!) {\n    confirmCompetition(\n      _id: $_id, \n      resultsConfirmed: $resultsConfirmed) {\n        _id\n        resultsConfirmed\n    }\n  }\n"])));var me=function(e){var t=Object(O.useState)({email:"",password:""}),n=Object(le.a)(t,2),a=n[0],c=n[1],r=Object(se.a)(de),i=Object(le.a)(r,2),o=i[0],l=(i[1].error,function(){var e=Object(V.a)(M.a.mark((function e(t){var n,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,A.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),s=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(oe.a)({},n,r)))},d={display:"block",textAlign:"center",color:"white"},j={color:"#00FC2A",fontWeight:"900",fontFamily:"Good Times"};return Object(q.jsxs)(E.a,{children:[Object(q.jsx)(E.a.Img,{style:{margin:"0",padding:"0",minHeight:"100vh"},src:"/img/80-s-retro@1x.png",fluid:!0,alt:"Card image"}),Object(q.jsxs)(E.a.ImgOverlay,{children:[Object(q.jsx)(E.a.Img,{style:{display:"block",maxWidth:"800px",margin:"0 auto"},variant:"top",src:"/img/GameOnLogo.svg"}),Object(q.jsx)(E.a.Body,{children:Object(q.jsxs)(ne.a,{style:{width:"400px",margin:"0 auto",marginBottom:"0px",postition:"relative",top:"-125px"},onSubmit:l,children:[Object(q.jsxs)(ne.a.Group,{className:"mb-3 text-white",controlId:"formBasicEmail",children:[Object(q.jsx)(ne.a.Label,{style:j,children:"Email address"}),Object(q.jsx)(ne.a.Control,{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:s}),Object(q.jsx)(ne.a.Text,{style:d,bg:"light",children:"We'll never share your email with anyone else."})]}),Object(q.jsxs)(ne.a.Group,{className:"mb-3 text-white",controlId:"formBasicPassword",children:[Object(q.jsx)(ne.a.Label,{style:j,children:"Password"}),Object(q.jsx)(ne.a.Control,{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:s})]}),Object(q.jsx)(U.a,{variant:"primary",type:"submit",children:"Login"})]})}),Object(q.jsx)(E.a.Body,{children:Object(q.jsx)(E.a.Link,{style:d,bg:"light",className:"text-center",href:"/SignUp",children:"Don't have an account? Click here!"})})]})]})};var Oe=function(e){var t=Object(O.useState)({name:"",email:"",password:"",zipCode:""}),n=Object(le.a)(t,2),a=n[0],c=n[1],r=Object(se.a)(je),i=Object(le.a)(r,2),o=i[0],l=(i[1].error,function(){var e=Object(V.a)(M.a.mark((function e(t){var n,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{name:a.name,email:a.email,password:a.password,zipCode:a.zipCode}});case 4:n=e.sent,c=n.data.addUser.token,console.log(c),A.login(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()),s=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(oe.a)({},n,r)))},d={fontFamily:"Good Times",color:"#00FC2A",fontWeight:"900"},j={width:"500px",margin:"0 auto",marginBottom:"10px"};return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(E.a,{bg:"dark",children:[Object(q.jsx)(E.a.Img,{style:{margin:"0",padding:"0",minHeight:"100vh"},src:"/img/344034@1x.png",alt:"Card image"}),Object(q.jsx)(E.a.ImgOverlay,{children:Object(q.jsxs)(ne.a,{onSubmit:l,className:"SignUp-form",children:[Object(q.jsx)(E.a.Img,{style:{height:"20rem"},variant:"top",src:"/img/GameOnLogo.svg"}),Object(q.jsx)("h1",{style:{fontFamily:"Good Times",color:"#00FC2A"},className:"font-weight-bold text-center",children:"Sign-Up Here!"}),Object(q.jsxs)(ne.a.Group,{style:j,children:[Object(q.jsx)(ne.a.Label,{style:d,children:"Full Name"}),Object(q.jsx)(ne.a.Control,{type:"name",placeholder:"Full Name",name:"name",id:"email",onChange:s})]}),Object(q.jsxs)(ne.a.Group,{style:j,children:[Object(q.jsx)(ne.a.Label,{style:d,children:"Email"}),Object(q.jsx)(ne.a.Control,{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:s})]}),Object(q.jsxs)(ne.a.Group,{style:j,children:[Object(q.jsx)(ne.a.Label,{style:d,children:"Zip Code"}),Object(q.jsx)(ne.a.Control,{type:"text",placeholder:"Zip Code",name:"zipCode",id:"email"})]}),Object(q.jsxs)(ne.a.Group,{style:j,children:[Object(q.jsx)(ne.a.Label,{style:d,children:"Password"}),Object(q.jsx)(ne.a.Control,{placeholder:"******",name:"password",type:"password",id:"password",onChange:s})]}),Object(q.jsx)(U.a,{style:{margin:"0 auto",display:"block",marginTop:"20px"},type:"submit",className:"btn-lg btn-Primary btn-block",children:"Sign Up"})]})})]})})},ue=n(142);n(181);var xe=function(e){var t=A.getProfile().data.name,n=Object(O.useState)({name:"",location:"",organizer:t,challenged:"",date:"",category:""}),a=Object(le.a)(n,2),c=a[0],r=a[1],i=Object(se.a)(he),o=Object(le.a)(i,2),l=o[0],s=(o[1].error,[]),d=[],j=Object(R.a)(K),h=j.data,g=(j.cError,j.loading),b=Object(R.a)(Z);if(g||b.loading)return Object(q.jsx)("h2",{children:"LOADING..."});h.category.forEach((function(e){s.push(e.name)})),b.data.user.forEach((function(e){d.push(e.name)}));var m=function(){var e=Object(V.a)(M.a.mark((function e(t){var n,a,r,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{name:c.name,location:c.location,organizer:c.organizer,challenged:c.challenged,date:c.date,category:c.category}});case 4:n=e.sent,n.data.createCompetition.token,console.log(n),a=n.data.createCompetition._id,r=window.location.origin,i=r+"//challengepage/:"+a,window.location.href=i,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,a=t.value;r(Object(f.a)(Object(f.a)({},c),{},Object(oe.a)({},n,a)))};return Object(q.jsxs)(E.a,{children:[Object(q.jsx)(E.a.Img,{src:"/img/862202--1-@1x.png",alt:"Card image"}),Object(q.jsxs)(E.a.ImgOverlay,{children:[Object(q.jsx)(E.a.Img,{variant:"top",src:"/img/GameOnLogo.svg"}),Object(q.jsxs)(ne.a,{onSubmit:m,className:"signUp-form text-white",children:[Object(q.jsx)("h1",{className:"font-weight-bold text-center text-white",children:"Matchup"}),Object(q.jsx)("h6",{className:"font-weight-bold text-center text-white",children:'"organizer" VS. "challenged"'}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Competition Category"}),Object(q.jsxs)(ne.a.Select,{"aria-label":"Select challenge category",id:"category",name:"category",onChange:function(e){var t=e.target.value;r(Object(f.a)(Object(f.a)({},c),{},{category:t}))},children:[Object(q.jsx)("option",{children:"Select a category"}),s.map((function(e){return Object(q.jsx)("option",{value:e,children:e},e)}))]})]}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Competion Name"}),Object(q.jsx)(ne.a.Control,{type:"text",placeholder:"The Thrilla in Manilla",id:"name",name:"name",onChange:u})]}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Location"}),Object(q.jsx)(ne.a.Control,{type:"text",placeholder:"Location",id:"location",name:"location",onChange:u})]}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Date"}),Object(q.jsx)(ne.a.Control,{type:"text",placeholder:"Event Date: MM/DD/YYYY",id:"date",name:"date",onChange:u})]}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Person to challenge"}),Object(q.jsx)(ue.a,{type:"text",id:"challenged",name:"challenged",controlId:"challenged",placeholder:"Start typing a user name",onChange:function(e){var t=e.toString();r(Object(f.a)(Object(f.a)({},c),{},{challenged:t}))},options:d})]}),Object(q.jsx)(U.a,{type:"submit",className:"btn-lg",children:"Create Matchup"})]})]})]})};var pe=function(e){A.getProfile().data.name;var t=Object(O.useState)({victor:"",organizerScore:"",challengedScore:"",status:"",resultsConfirmed:""}),n=Object(le.a)(t,2),a=n[0],c=n[1],r=Object(se.a)(ge),i=Object(le.a)(r,1)[0],o=Object(se.a)(be),l=(Object(le.a)(o,1)[0],window.location.href.split(":")[3]),s=Object(R.a)(Q,{variables:{_id:l}}),d=s.data;if(s.error,s.loading)return Object(q.jsx)("h2",{children:"LOADING..."});console.log(d.competition[0]),console.log(l);var j=d.competition[0].organizer,h=d.competition[0].challenged;console.log(j),console.log(h);var g=function(){var e=Object(V.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:{_id:l,victor:a.victor,organizerScore:a.organizerScore,challengedScore:a.challengedScore,status:a.status,resultsConfirmed:a.resultsConfirmed}});case 4:n=e.sent,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(oe.a)({},n,r)))};return Object(q.jsxs)(E.a,{children:[Object(q.jsx)(E.a.Img,{src:"/img/697142-1@1x.png",alt:"Card image"}),Object(q.jsxs)(E.a.ImgOverlay,{children:[Object(q.jsx)("h1",{className:"text-center text-white",children:d.competition[0].category}),Object(q.jsxs)(ne.a,{onSubmit:g,className:"signUp-form text-white",children:[Object(q.jsxs)("h1",{className:"font-weight-bold text-center text-white",children:[j," vs. ",h]}),Object(q.jsx)(ne.a.Group,{children:Object(q.jsxs)(ne.a.Select,{"aria-label":"Victor",id:"victor",name:"victor",onChange:function(e){var t=e.target.value;c(Object(f.a)(Object(f.a)({},a),{},{victor:t}))},children:[Object(q.jsx)("option",{children:"Select A Victor"}),Object(q.jsx)("option",{value:j,children:j},j),Object(q.jsx)("option",{value:h,children:h},h),Object(q.jsx)("option",{value:"draw",children:"Tie"},"draw")]})}),Object(q.jsxs)(ne.a.Group,{children:[Object(q.jsx)(ne.a.Label,{children:"Score"}),Object(q.jsx)(ne.a.Control,{name:"organizerScore",type:"text",placeholder:"Organizer Score",id:"organizerScore",onChange:b}),Object(q.jsx)(ne.a.Control,{name:"challengedScore",type:"text",placeholder:"Challenged Score",id:"challengedScore",onChange:b})]}),Object(q.jsx)(ne.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(q.jsx)(ne.a.Check,{type:"checkbox",name:"resultsConfirmed",id:"resultsConfirmed",label:"Results Confirmed",onChange:b})}),Object(q.jsx)(U.a,{type:"submit",className:"btn-lg",children:"Submit Results"})]})]})]})},fe=function(e){Object(P.a)(n,e);var t=Object(B.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("h1",{children:"Hi here is our APP"})})}}]),n}(O.Component),ye=Object(C.a)({uri:"/graphql"}),ve=Object(I.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(f.a)(Object(f.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),Ce=new w.a({link:ve.concat(ye),cache:new S.a});var we=function(){return Object(q.jsx)(k.a,{client:Ce,children:Object(q.jsx)(y.a,{children:Object(q.jsxs)("div",{className:"flex-column justify-center align-center min-100-vh bg-dark",children:[Object(q.jsx)($.a,{bg:"dark",variant:"dark",children:Object(q.jsxs)(z.a,{children:[Object(q.jsx)($.a.Brand,{href:"/",children:Object(q.jsx)("img",{src:"/img/GameOnLogo.svg",width:"300",height:"100",className:"d-inline-block align-top",alt:"GameOn logo"})}),Object(q.jsxs)(L.a,{className:"justify-content-end",children:[Object(q.jsx)(L.a.Link,{href:"/UserPage",children:"UserPage"}),A.loggedIn()?Object(q.jsx)(L.a.Link,{onClick:A.logout,children:"Logout"}):Object(q.jsx)(L.a.Link,{href:"/Login",children:"Login"})]})]})}),Object(q.jsx)(z.a,{fluid:!0,children:Object(q.jsx)(_.a,{children:Object(q.jsx)(N.a,{children:Object(q.jsxs)(v.c,{children:[Object(q.jsx)(v.a,{exact:!0,path:"/",component:H}),Object(q.jsx)(v.a,{exact:!0,path:"/signup",component:Oe}),Object(q.jsx)(v.a,{exact:!0,path:"/HomePage",children:Object(q.jsx)(H,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/login",children:Object(q.jsx)(me,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/userpage",component:ie}),Object(q.jsx)(v.a,{exact:!0,path:"/userpage/:id",children:Object(q.jsx)(ie,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/finduser",children:Object(q.jsx)(fe,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/challengecreate",children:Object(q.jsx)(xe,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/challengepage",children:Object(q.jsx)(pe,{})}),Object(q.jsx)(v.a,{exact:!0,path:"/challengepage/:id",children:Object(q.jsx)(pe,{})})]})})})})]})})})},Se=(n(186),n(143)),ke=n(115),Ie=n(141),$e=Object(Ie.createLogger)(),ze=Object(ke.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}),Object(ke.a)($e));x.a.render(Object(q.jsx)(Se.a,{store:ze,children:Object(q.jsx)(we,{})}),document.querySelector("#root")),p()}},[[187,1,2]]]);
//# sourceMappingURL=main.4d955272.chunk.js.map