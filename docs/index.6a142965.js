function e(e,t,o,s){Object.defineProperty(e,t,{get:o,set:s,enumerable:!0,configurable:!0})}var t=globalThis,o={},s={},r=t.parcelRequirefc52;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},t.parcelRequirefc52=r);var n=r.register;n("1ahZW",function(t,o){e(t.exports,"getLoginUser",()=>n),e(t.exports,"getYourUser",()=>l),e(t.exports,"postNewUser",()=>a),e(t.exports,"allUsers",()=>i),e(t.exports,"postForum1",()=>c),e(t.exports,"postForum2",()=>d),e(t.exports,"postForum3",()=>y),e(t.exports,"deleteAccount",()=>p);let s="https://slutprojekt-js2-socialmedia-default-rtdb.europe-west1.firebasedatabase.app/",r={"Content-type":"application/json; charset=UTF-8"};async function n(){let e=await fetch(s+"AllUsers/.json",{method:"GET",headers:r}),t=await e.json();return console.log(t),t}async function l(e){let t=s+`AllUsers/${e}.json`,o=await fetch(t,{method:"GET",headers:r});return await o.json()}async function a(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(s+"AllUsers/.json",t),n=await o.json();return console.log(n),n}async function i(){try{let e=await fetch("https://slutprojekt-js2-socialmedia-default-rtdb.europe-west1.firebasedatabase.app/AllUsers.json");return await e.json()}catch(e){throw console.error("Error fetching all users:",e),e}}async function c(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(s+"forum1/0/posts.json",t),n=await o.json();return console.log(n),n}async function d(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(s+"forum2/0/posts.json",t),n=await o.json();return console.log(n),n}async function y(e){let t={method:"POST",body:JSON.stringify(e),headers:r},o=await fetch(s+"forum3/0/posts.json",t),n=await o.json();return console.log(n),n}async function p(e){let t=s+`AllUsers/${e}.json`,o=await fetch(t,{method:"DELETE"});console.log(await o.json())}}),n("3cguk",function(t,o){e(t.exports,"errorMessage",()=>s);function s(e){let t=document.createElement("div");t.classList.add("errorOverlay"),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.backgroundColor="rgba(255, 255, 255, 0.551)",t.style.zIndex="1000";let o=document.querySelector("#errorMessageContainer");o.style.color="white",o.style.width="600px",o.style.height="300px",o.style.gap="20px",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.flexDirection="column",o.style.backgroundColor="rgb(115, 168, 115)",o.style.borderRadius="10px";let s=document.createElement("p");s.textContent=e,s.style.fontSize="25px",s.style.textShadow="1px 1px 2px black";let r=document.createElement("button");r.textContent="Close",r.style.padding="10px",r.style.fontSize="20px",r.style.borderRadius="10px",r.addEventListener("click",()=>{t.style.display="none",r.remove(),s.remove()}),setTimeout(()=>{t.style.display="none"},3e3),t.appendChild(o),o.appendChild(s),o.appendChild(r),document.body.appendChild(t)}});var l=r("1ahZW"),a=r("3cguk");let i="";const c=document.querySelector(".profile-images"),d=document.querySelector(".signupPElement"),y=document.querySelector(".chick-profile"),p=document.querySelector(".cow-profile"),u=document.querySelector(".pig-profile");c.addEventListener("click",e=>{e.target==y?(y.style.border="3px solid rgb(115, 168, 115)",y.style.boxSizing="border-box",p.style.border="none",u.style.border="none",console.log("chicken")):e.target==p?(p.style.border="3px solid rgb(115, 168, 115)",p.style.boxSizing="border-box",u.style.border="none",y.style.border="none",console.log("cow")):e.target===u&&(u.style.border="3px solid rgb(115, 168, 115)",u.style.boxSizing="border-box",p.style.border="none",y.style.border="none",console.log("pig"))});const f=document.querySelector("#signup-form");f.addEventListener("submit",async e=>{e.preventDefault();let t=document.querySelector("#createUsername-form"),o=document.querySelector("#createPassword-form"),s=t.value,r=o.value;if(console.log(s),console.log(r),!s||!r){(0,a.errorMessage)("Please fill out both username and password!"),f.reset();return}let n={username:s,password:r,userImage:i};console.log(n);try{let e=await (0,l.postNewUser)(n);if(e&&e.name)console.log("Successful signup!"),localStorage.setItem("profileImage",i),window.location.href="http://localhost:1234/index.html";else throw Error("Signup failed")}catch(e){(0,a.errorMessage)("Signup failed, please try again!")}f.reset()});const g=document.querySelector(".selected-chick"),m=document.querySelector(".selected-cow"),h=document.querySelector(".selected-pig");y.addEventListener("click",()=>{g.style.display="block",m.style.display="none",h.style.display="none",d.style.display="none",i="chicken"}),p.addEventListener("click",()=>{m.style.display="block",h.style.display="none",g.style.display="none",d.style.display="none",i="cow"}),u.addEventListener("click",()=>{h.style.display="block",m.style.display="none",g.style.display="none",d.style.display="none",i="pig"});
//# sourceMappingURL=index.6a142965.js.map