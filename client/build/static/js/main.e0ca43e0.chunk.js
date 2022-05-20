(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),i=a(8),c=a(6);a(16);var s=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-light nav"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},l.a.createElement("h2",null,"Google Books")),l.a.createElement(i.b,{className:"nav-link  navSecondary push-right",to:"/"},"Search for Books"),l.a.createElement(i.b,{className:"nav-link  navSecondary",to:"/saved"},"View Saved Books"))))},u=a(34),m=a(11),h=a(12),d=a(14),v=a(13);var f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",{className:"display-4"},"Google Books Search with React")))};var E=function(e){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("span",{className:"link-container"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View more on Google Play")),l.a.createElement("br",null))};var k=function(e){var t=e.title,a=e.authors,n=e.image,r=e.description,o=e.link,i=e.button;return l.a.createElement("div",{className:"data-book-div"},l.a.createElement("ul",{className:"data"},l.a.createElement("li",null,l.a.createElement("img",{className:"booksImg",src:n,alt:t}),l.a.createElement("br",null),l.a.createElement("h5",null,"Title: ",t),l.a.createElement("h6",null,"Author: ",a," "),r,l.a.createElement("br",null),l.a.createElement(E,{link:o}),l.a.createElement("br",null),i)))};var g=function(e){return l.a.createElement("div",null,e.children)},b=a(10),p=a.n(b),S=function(e){return console.log(e),p.a.get("https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyBqJPwVVWSuyX3s_ZdJorHskPEAMfmgwGg&q="+e)},N=function(e){return p.a.post("/api/savebook",e)},y=function(){return p.a.get("/api/allbooks")},C=function(e){return p.a.delete("/api/deletebook/"+e)},B=(a(30),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={books:[],author:"",title:""},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(u.a)({},n,l))},e.handleSave=function(t){var a=e.state.books.find((function(e){return e.id===t})).volumeInfo;N({title:a.title,authors:a.authors,image:a.imageLinks.smallThumbnail,description:a.description,link:a.infoLink}).then((function(e){return alert("info added")})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state.author,n=e.state.title;0===n.length&&a.length>1||n.length>0&&a.length>1?S(n+"+inauthor:"+a).then((function(t){return e.setState({books:t.data.items})})).catch((function(e){return console.log(e)})):n.length>0&&0===a.length&&S(n).then((function(t){return e.setState({books:t.data.items})})).catch((function(e){return console.log(e)})),e.setState({title:"",author:""})},e.handleClearSearchResults=function(t){t.preventDefault(),0===e.state.books.length&&alert("No search results to delete."),e.setState({books:[]})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"form-container"},l.a.createElement(g,null," ",l.a.createElement("h3",{id:"startMsg"},"Enter Title and/or Author"),l.a.createElement("form",{className:"form-group"},l.a.createElement("p",null,"Title:"),l.a.createElement("input",{value:this.state.title,name:"title",onChange:this.handleInputChange,type:"text"}),l.a.createElement("p",null,"Author:"),l.a.createElement("input",{value:this.state.author,name:"author",onChange:this.handleInputChange,type:"text"}),l.a.createElement("button",{className:"submitBtn",onClick:this.handleFormSubmit},"Submit"),l.a.createElement("button",{className:"clearBtn",onClick:this.handleClearSearchResults},"Clear Search Results")))),l.a.createElement("div",null,l.a.createElement("h1",{className:"resultHead"},"Results"),this.state.books.length>0?l.a.createElement("div",{className:"bookInfo-container"},this.state.books.map((function(t){var a=t.volumeInfo;return void 0===a.imageLinks?l.a.createElement(k,{key:t.id,title:a.title,authors:a.authors,description:a.description,link:a.infoLink,image:l.a.createElement("h2",null,"Sorry no image"),button:l.a.createElement("button",{className:"saveBtn",onClick:function(){return e.handleSave(t.id)}},'Click to save "',a.title,'"')}):l.a.createElement(k,{key:t.id,title:a.title,authors:a.authors,description:a.description,link:a.infoLink,image:a.imageLinks.smallThumbnail,button:l.a.createElement("button",{className:"saveBtn",onClick:function(){return e.handleSave(t.id)}},'Click to save "',a.title,'"')})}))):l.a.createElement("h3",{className:"nothingMsg"},"Nothing to display")))}}]),a}(n.Component)),w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={savedBooks:[]},e.viewAllSaved=function(){y().then((function(t){return e.setState({savedBooks:t.data})})).catch((function(e){return console.log(e)}))},e.handleDelete=function(t){console.log(t),C(t).then((function(t){return e.viewAllSaved()})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.viewAllSaved()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h1",{className:"resultHead"},"Saved Books"),this.state.savedBooks.length?l.a.createElement("div",{className:"bookInfo-container"},this.state.savedBooks.map((function(t){return l.a.createElement(k,{key:t._id,id:t._id,title:t.title,authors:t.authors,image:t.image,description:t.description,link:t.link,button:l.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.handleDelete(t._id)}},'Delete "',t.title,'"')})}))):l.a.createElement("h3",{className:"nothingMsg"},"Nothing Saved"))}}]),a}(n.Component);a(64);var j=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(c.a,{exact:!0,path:"/",component:B}),l.a.createElement(c.a,{exact:!0,path:"/saved",component:w})))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e0ca43e0.chunk.js.map