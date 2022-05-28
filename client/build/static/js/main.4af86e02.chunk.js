(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){e.exports=a(79)},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=a(24),c=a(21);a(29);var s=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-light nav"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},l.a.createElement("h2",null,"Google Books")),l.a.createElement(i.b,{className:"nav-link  navSecondary push-right",to:"/"},"Search for Books"),l.a.createElement(i.b,{className:"nav-link  navSecondary",to:"/saved"},"View Saved Books"))))},u=a(8),m=a(18),h=a(19),d=a(23),v=a(22);var E=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",{className:"display-4"},"Google Books Search with React")))};var f=function(e){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("span",{className:"link-container"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View more on Google Play")),l.a.createElement("br",null))};var p=function(e){var t=e.title,a=e.authors,n=e.image,r=e.description,o=e.link,i=e.button;return l.a.createElement("div",{className:"data-book-div"},l.a.createElement("ul",{className:"data"},l.a.createElement("li",null,l.a.createElement("img",{className:"booksImg",src:n,alt:t}),l.a.createElement("br",null),l.a.createElement("h5",null,"Title: ",t),l.a.createElement("h6",null,"Author: ",a," "),r,l.a.createElement("br",null),l.a.createElement(f,{link:o}),l.a.createElement("br",null),i)))};var k=function(e){return l.a.createElement("div",null,e.children)},g=a(15),b=(a(57),a(17)),S=a(26),y=a.n(S),N=function(e){return console.log(e),y.a.get("https://www.googleapis.com/books/v1/volumes?api_key=AIzaSyBqJPwVVWSuyX3s_ZdJorHskPEAMfmgwGg&q="+e)},w=function(e){return y.a.post("/api/savebook",e)},B=function(){return y.a.get("/api/allbooks")},C=function(e){return y.a.delete("/api/deletebook/"+e)},O=(a(43),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={books:[],author:"",title:"",isOpen:!1},e.showModal=function(){e.setState({isOpen:!0})},e.hideModal=function(){e.setState({isOpen:!1})},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(u.a)({},n,l))},e.handleSave=function(t){var a=e.state.books.find((function(e){return e.id===t})).volumeInfo;w({title:a.title,authors:a.authors,image:a.imageLinks.smallThumbnail,description:a.description,link:a.infoLink}).then((function(t){return e.showModal()})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state.author,n=e.state.title;0===n.length&&a.length>=1||n.length>0&&a.length>=1?N(n+"+inauthor:"+a).then((function(t){return e.setState({books:t.data.items})})).catch((function(e){return console.log(e)})):n.length>0&&0===a.length&&N(n).then((function(t){return e.setState({books:t.data.items})})).catch((function(e){return console.log(e)})),e.setState({title:"",author:""})},e.handleClearSearchResults=function(t){t.preventDefault(),0===e.state.books.length&&alert("No search results to delete."),e.setState({books:[]})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.a,{show:this.state.isOpen,onHide:"true"},l.a.createElement(g.a.Header,null,"Saved!"),l.a.createElement(g.a.Body,null,"Successfully Saved."),l.a.createElement(g.a.Footer,null,l.a.createElement(b.a,{variant:"primary cancelBtn",onClick:this.hideModal},"Ok"))),l.a.createElement(E,null),l.a.createElement("div",{className:"form-container"},l.a.createElement(k,null," ",l.a.createElement("h3",{id:"startMsg"},"Enter Title and/or Author"),l.a.createElement("form",{className:"form-group"},l.a.createElement("p",null,"Title:"),l.a.createElement("input",{value:this.state.title,name:"title",onChange:this.handleInputChange,type:"text"}),l.a.createElement("p",null,"Author:"),l.a.createElement("input",{value:this.state.author,name:"author",onChange:this.handleInputChange,type:"text"}),l.a.createElement(b.a,{variant:"primary submitBtn",onClick:this.handleFormSubmit},"Submit"),l.a.createElement(b.a,{variant:"info clearBtn",onClick:this.handleClearSearchResults},"Clear Search Results")))),l.a.createElement("div",null,l.a.createElement("h1",{className:"resultHead"},"Results"),this.state.books.length>0?l.a.createElement("div",{className:"bookInfo-container"},this.state.books.map((function(t){var a=t.volumeInfo;return void 0===a.imageLinks?l.a.createElement(p,{key:t.id,title:a.title,authors:a.authors,description:a.description,link:a.infoLink,image:l.a.createElement("h2",null,"Sorry no image"),button:l.a.createElement(b.a,{variant:"outline-primary saveBtn",onClick:function(){return e.handleSave(t.id)}},'Click to save "',a.title,'"')}):l.a.createElement(p,{key:t.id,title:a.title,authors:a.authors,description:a.description,link:a.infoLink,image:a.imageLinks.smallThumbnail,button:l.a.createElement(b.a,{variant:"outline-primary saveBtn",onClick:function(){return e.handleSave(t.id)}},'Click to save "',a.title,'"')})}))):l.a.createElement("h3",{className:"nothingMsg"},"Nothing to display")))}}]),a}(n.Component)),M=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={savedBooks:[],isOpen:!1},e.showModal=function(){e.setState({isOpen:!0})},e.hideModal=function(){e.setState({isOpen:!1})},e.viewAllSaved=function(){B().then((function(t){return e.setState({savedBooks:t.data})})).catch((function(e){return console.log(e)}))},e.handleDelete=function(t){console.log(t),C(t).then((function(t){return e.viewAllSaved()}),e.showModal()).catch((function(e){return console.log(e)}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.viewAllSaved()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.a,{show:this.state.isOpen,onHide:"true"},l.a.createElement(g.a.Header,null,"Deleted Saved"),l.a.createElement(g.a.Body,null,"Successfully Deleted"),l.a.createElement(g.a.Footer,null,l.a.createElement(b.a,{variant:"primary cancelBtn",onClick:this.hideModal},"Ok"))),l.a.createElement(E,null),l.a.createElement("h1",{className:"resultHead"},"Saved Books"),this.state.savedBooks.length?l.a.createElement("div",{className:"bookInfo-container"},this.state.savedBooks.map((function(t){return l.a.createElement(p,{key:t._id,id:t._id,title:t.title,authors:t.authors,image:t.image,description:t.description,link:t.link,button:l.a.createElement(b.a,{variant:"outline-info deleteBtn",onClick:function(){return e.handleDelete(t._id)}},'Delete "',t.title,'"')})}))):l.a.createElement("h3",{className:"nothingMsg"},"Nothing Saved"))}}]),a}(n.Component);a(78);var j=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(c.a,{exact:!0,path:"/",component:O}),l.a.createElement(c.a,{exact:!0,path:"/saved",component:M})))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4af86e02.chunk.js.map