// === Setează data de deschidere a înregistrărilor (YYYY-MM-DDTHH:MM:SS) ===
const REG_OPEN_AT = "2025-09-14T23:59:59"; // ← SCHIMBĂ după nevoie
const REG_REGISTRATION_DAYS = 10; // număr zile pentru perioada de înregistrare
const regUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfxbaFDqOkAK2JV_lEVCma7PEBwEwfi0WtzMpnCIS78op6iMw/viewform?usp=header"; // ← link Google Forms

const el = (id)=>document.getElementById(id);
const dEl = el("cd-da"), hEl = el("cd-hours"), mEl = el("cd-mins"), sEl = el("cd-secs");
const regBtn = el("registerBtn");

let regCloseAt = null;
let state = "soon"; // soon | open | closeSoon | closed

function setRegisterBtnState(state) {
  const regBtn = document.getElementById("registerBtn");
  const regBtnText = document.getElementById("registerBtnText");
  const aboutBtn = document.getElementById("aboutRegisterBtn");
  const aboutBtnText = document.getElementById("aboutRegisterBtnText");
  
  let colorClass = "btn btn-lg px-4 styled-button";
  let bg = "";
  let pointer = "none";
  let opacity = "0.7";
  let cursor = "not-allowed";
  let href = "#";
  let text = "Register Soon";
  
  if(state === "open") {
    colorClass = "btn btn-success btn-lg px-4 styled-button";
    bg = "linear-gradient(90deg, #28a745 0%, #218838 100%)";
    pointer = "auto";
    opacity = "1";
    cursor = "pointer";
    href = regUrl;
    text = "Register Now";
  } else if(state === "closeSoon") {
    colorClass = "btn btn-warning btn-lg px-4 styled-button";
    bg = "linear-gradient(90deg, #ff9800 0%, #d4af37 100%)";
    pointer = "auto";
    opacity = "1";
    cursor = "pointer";
    href = regUrl;
    text = "Registration Close Soon";
  } else if(state === "closed") {
    colorClass = "btn btn-danger btn-lg px-4 styled-button";
    bg = "linear-gradient(90deg, #ff0000 0%, #b30000 100%)";
    pointer = "none";
    opacity = "0.7";
    cursor = "not-allowed";
    href = "#";
    text = "Registration Closed";
  }
  
  // Actualizează butonul principal
  regBtn.className = colorClass;
  regBtn.style.background = bg;
  regBtn.style.pointerEvents = pointer;
  regBtn.style.opacity = opacity;
  regBtn.style.cursor = cursor;
  regBtn.setAttribute("href", href);
  regBtnText.textContent = text;
  
  // Actualizează butonul About the Cup
  if(aboutBtn && aboutBtnText) {
    aboutBtn.className = colorClass;
    aboutBtn.style.background = bg;
    aboutBtn.style.pointerEvents = pointer;
    aboutBtn.style.opacity = opacity;
    aboutBtn.style.cursor = cursor;
    aboutBtn.setAttribute("href", href);
    aboutBtnText.textContent = text;
  }
}

function setCountdownStyle(color) {
	document.querySelectorAll('.cd').forEach(card => {
		card.classList.remove('border-success', 'border-danger', 'border-gold-subtle');
		card.querySelector('.fs-2').style.color = "";
		// Schimbă și culoarea numerelor countdown
		card.querySelectorAll('.cd-num').forEach(num => {
			num.style.color = "";
		});
		
		if (color === "green") {
			card.classList.add('border-success');
			card.querySelector('.fs-2').style.color = "#28a745";
			card.querySelectorAll('.cd-num').forEach(num => {
				num.style.color = "#28a745";
			});
		} else if (color === "red") {
			card.classList.add('border-danger');
			card.querySelector('.fs-2').style.color = "#dc3545";
			card.querySelectorAll('.cd-num').forEach(num => {
				num.style.color = "#dc3545";
			});
		} else {
			card.classList.add('border-gold-subtle');
			card.querySelector('.fs-2').style.color = "";
			card.querySelectorAll('.cd-num').forEach(num => {
				num.style.color = ""; // implicit, gold/auriu
			});
		}
	});
}

function updateCountdown() {
  const now = new Date();
  window.state = state;
  
  if(state === "soon"){
    const target = new Date(REG_OPEN_AT);
    const diff = target - now;
    
    if(diff <= 0){
      regCloseAt = new Date(target.getTime() + REG_REGISTRATION_DAYS*24*60*60*1000);
      state = "open";
      requestAnimationFrame(updateCountdown);
      return;
    }
    
    const secs = Math.floor(diff/1000) % 60;
    const mins = Math.floor(diff/1000/60) % 60;
    const hrs  = Math.floor(diff/1000/60/60) % 24;
    const days = Math.floor(diff/1000/60/60/24);
    
    dEl.textContent = String(days).padStart(2,"0");
    hEl.textContent = String(hrs ).padStart(2,"0");
    mEl.textContent = String(mins).padStart(2,"0");
    sEl.textContent = String(secs).padStart(2,"0");
    
    setRegisterBtnState("soon");
    setCountdownStyle("gold");
    requestAnimationFrame(updateCountdown);
    return;
  }
  
  if(state === "open"){
    const diff = regCloseAt - now;
    
    if(diff <= 0){
      [dEl,hEl,mEl,sEl].forEach(x => x && (x.textContent = "00"));
      state = "closed";
      setRegisterBtnState("closed");
      setCountdownStyle("red");
      return;
    }
    
    const secs = Math.floor(diff/1000) % 60;
    const mins = Math.floor(diff/1000/60) % 60;
    const hrs  = Math.floor(diff/1000/60/60) % 24;
    const days = Math.floor(diff/1000/60/60/24);
    
    dEl.textContent = String(days).padStart(2,"0");
    hEl.textContent = String(hrs ).padStart(2,"0");
    mEl.textContent = String(mins).padStart(2,"0");
    sEl.textContent = String(secs).padStart(2,"0");
    
    if(days === 0){
      state = "closeSoon";
      setRegisterBtnState("closeSoon");
      setCountdownStyle("red");
    }else{
      setRegisterBtnState("open");
      setCountdownStyle("green");
    }
    
    requestAnimationFrame(updateCountdown);
    return;
  }
  
  if(state === "closeSoon"){
    const diff = regCloseAt - now;
    
    if(diff <= 0){
      [dEl,hEl,mEl,sEl].forEach(x => x && (x.textContent = "00"));
      state = "closed";
      setRegisterBtnState("closed");
      setCountdownStyle("red");
      return;
    }
    
    const secs = Math.floor(diff/1000) % 60;
    const mins = Math.floor(diff/1000/60) % 60;
    const hrs  = Math.floor(diff/1000/60/60) % 24;
    const days = Math.floor(diff/1000/60/60/24);
    
    dEl.textContent = String(days).padStart(2,"0");
    hEl.textContent = String(hrs ).padStart(2,"0");
    mEl.textContent = String(mins).padStart(2,"0");
    sEl.textContent = String(secs).padStart(2,"0");
    
    setRegisterBtnState("closeSoon");
    setCountdownStyle("red");
    requestAnimationFrame(updateCountdown);
    return;
  }
  
  if(state === "closed"){
    [dEl,hEl,mEl,sEl].forEach(x => x && (x.textContent = "00"));
    setRegisterBtnState("closed");
    setCountdownStyle("red");
    return;
  }
}

document.addEventListener("DOMContentLoaded", updateCountdown);