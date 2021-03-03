const h3=document.querySelector("h3");
const color1=document.querySelector(".color1");
const color2=document.querySelector(".color2");
const body=document.getElementById("gradient");
function chnge(){
	body.style.background=
	"linear-gradient(to right,"+color1.value+
	", "
	+color2.value
	+")";
	h3.textContent=body.style.background;
}
// input event to store input
color1.addEventListener("input",chnge);
color2.addEventListener("input",chnge);