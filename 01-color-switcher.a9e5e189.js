function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};e.btnStop.setAttribute("disabled",!0),e.btnStart.addEventListener("click",(function(){o=setInterval((()=>{e.body.style.backgroundColor=t()}),1e3),e.body.style.backgroundColor=t(),e.btnStop.removeAttribute("disabled"),e.btnStart.setAttribute("disabled",!0)})),e.btnStop.addEventListener("click",(function(){e.btnStart.removeAttribute("disabled"),e.btnStop.setAttribute("disabled",!0),clearInterval(o)}));let o=null;
//# sourceMappingURL=01-color-switcher.a9e5e189.js.map