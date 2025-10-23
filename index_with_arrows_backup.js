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
function loadPreviousPositions() {
  const saved = localStorage.getItem('hellRaiserCupPositions');
  if (saved) {
    try {
      previousPositions = JSON.parse(saved);
    } catch (e) {
      console.log('Eroare la încărcarea pozițiilor anterioare');
      previousPositions = {};
    }
  }
}

// Salvează pozițiile curente în localStorage
function savePreviousPositions() {
  localStorage.setItem('hellRaiserCupPositions', JSON.stringify(previousPositions));
}

// Obține pozițiile curente ale echipelor din toate grupele
function getCurrentPositions() {
  const positions = {};
  const groupIds = ['A','B','C','D','E','F'];
  
  groupIds.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) {
      console.log(`Tabelul pentru grupa ${grupa} nu a fost găsit`);
      return;
    }
    
    const tbody = table.querySelector('tbody');
    if (!tbody) {
      console.log(`Tbody pentru grupa ${grupa} nu a fost găsit`);
      return;
    }
    
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    console.log(`Grupa ${grupa}: găsite ${rows.length} echipe`);
    
    rows.forEach((tr, index) => {
      const teamName = tr.children[2] ? tr.children[2].textContent.trim() : '';
      if (teamName) {
        // Pentru echipe cu nume duplicate, adaugă poziția la cheie pentru unicitate
        let uniqueKey = `${grupa}_${teamName}`;
        if (positions[uniqueKey]) {
          uniqueKey = `${grupa}_${teamName}_${index + 1}`;
        }
        positions[uniqueKey] = index + 1; // poziția în clasament (1-indexat)
        console.log(`  ${uniqueKey}: poziția ${index + 1}`);
      }
    });
  });
  
  console.log('Poziții curente totale:', Object.keys(positions).length);
  return positions;
}

// Determină direcția săgeții pentru o echipă
function getArrowDirection(groupId, teamName, currentPosition) {
  const key = `${groupId}_${teamName}`;
  const previousPosition = previousPositions[key];
  
  if (!previousPosition || previousPosition === undefined) return 'new'; // echipă nouă
  
  if (previousPosition > currentPosition) return 'up'; // urcă în clasament (poziție mai mică = mai sus)
  if (previousPosition < currentPosition) return 'down'; // coboară în clasament
  return 'same'; // aceeași poziție
}

// Afișează săgețile pentru toate echipele
function displayRankingArrows() {
  console.log('Afișez săgețile...', previousPositions);
  const currentPositions = getCurrentPositions();
  const groupIds = ['A','B','C','D','E','F'];
  
  groupIds.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    
    rows.forEach((tr, index) => {
      const teamName = tr.children[2] ? tr.children[2].textContent.trim() : '';
      if (!teamName) return;
      
      const currentPosition = index + 1;
      const direction = getArrowDirection(grupa, teamName, currentPosition);
      const key = `${grupa}_${teamName}`;
      const previousPosition = previousPositions[key];
      
      console.log(`${key}: atual=${currentPosition}, anterior=${previousPosition}, direção=${direction}`);
      
      // Găsește sau creează container pentru săgeată în prima coloană (#)
      const positionCell = tr.children[0];
      if (!positionCell) return;
      
      // Elimină săgeata existentă
      const existingArrow = positionCell.querySelector('.ranking-arrow');
      if (existingArrow) existingArrow.remove();
      
      // Adaugă noua săgeată dacă este necesar
      if (direction !== 'new' && direction !== 'same') {
        console.log(`Adaug săgeată pentru ${teamName}: ${direction}`);
        const arrow = document.createElement('span');
        let arrowClass = `ranking-arrow ranking-arrow-${direction}`;
        
        // Calculează diferența de poziții pentru schimbări mari
        const positionDiff = Math.abs(currentPosition - previousPosition);
        if (positionDiff >= 3) {
          arrowClass += ' big-change';
        }
        
        arrow.className = arrowClass + ' new-arrow';
        
        // Săgeți mai expresive pentru schimbări mari
        if (direction === 'up') {
          arrow.innerHTML = positionDiff >= 3 ? '⬆️' : '↗️';
          arrow.title = `Echipa a urcat ${positionDiff} ${positionDiff === 1 ? 'poziție' : 'poziții'} în clasament`;
        } else {
          arrow.innerHTML = positionDiff >= 3 ? '⬇️' : '↘️';
          arrow.title = `Echipa a coborât ${positionDiff} ${positionDiff === 1 ? 'poziție' : 'poziții'} în clasament`;
        }
        
        // Adaugă săgeata după numărul poziției
        positionCell.appendChild(arrow);
        console.log(`Săgeată adăugată pentru ${teamName}!`);
        
        // Elimină clasa new-arrow după animație
        setTimeout(() => {
          arrow.classList.remove('new-arrow');
        }, 800);
      }
    });
  });
}

// Actualizează pozițiile și afișează săgețile
function updateRankingArrows() {
  const currentPositions = getCurrentPositions();
  
  // Afișează săgețile pe baza pozițiilor anterioare
  displayRankingArrows();
  
  // Salvează pozițiile curente pentru următoarea actualizare
  previousPositions = { ...currentPositions };
  savePreviousPositions();
}

// Sortează automat tabelele de grupe (A-F) descrescător după PTS
window.addEventListener('DOMContentLoaded', function() {
  // Încarcă pozițiile anterioare
  loadPreviousPositions();
  
  const groupIds = ['A','B','C','D','E','F'];
  groupIds.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    // Ia toate rândurile echipelor (exclude rândurile collapse)
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    // Sortează după PTS (coloana 4, index 3)
    rows.sort((a, b) => {
      const ptsA = parseInt(a.children[3].textContent, 10) || 0;
      const ptsB = parseInt(b.children[3].textContent, 10) || 0;
      return ptsB - ptsA;
    });
    // Actualizează pozițiile în DOM
    rows.forEach((tr, index) => {
      const positionCell = tr.children[0];
      if (positionCell) {
        positionCell.innerHTML = index + 1; // actualizează poziția
      }
    });
    // Reafișează rândurile în ordinea sortată, cu collapse-ul imediat după fiecare echipă
    rows.forEach(tr => {
      tbody.appendChild(tr);
      // Găsește collapse-ul asociat (data-bs-target sau id)
      const collapseId = tr.getAttribute('data-bs-target');
      if (collapseId) {
        const collapseRow = tbody.querySelector(collapseId);
        if (collapseRow) tbody.appendChild(collapseRow);
      }
    });
  });
  
  // Dacă este prima încărcare și nu avem date anterioare, creează date de test
  if (Object.keys(previousPositions).length === 0) {
    console.log('Prima încărcare - creez poziții de test pentru săgeți...');
    simulateTestData();
  }
  
  // Afișează săgețile după sortare
  updateRankingArrows();
});

// Funcție pentru resetarea pozițiilor (util pentru testare)
function resetRankingHistory() {
  localStorage.removeItem('hellRaiserCupPositions');
  previousPositions = {};
  
  // Elimină toate săgețile
  document.querySelectorAll('.ranking-arrow').forEach(arrow => arrow.remove());
  
  console.log('Istoricul clasamentului a fost resetat');
}

// Funcție pentru actualizarea manuală a clasamentului
function refreshRankings() {
  const groupIds = ['A','B','C','D','E','F'];
  
  groupIds.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) return;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    
    // Ia toate rândurile echipelor (exclude rândurile collapse)
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    
    // Sortează după PTS (coloana 4, index 3)
    rows.sort((a, b) => {
      const ptsA = parseInt(a.children[3].textContent, 10) || 0;
      const ptsB = parseInt(b.children[3].textContent, 10) || 0;
      return ptsB - ptsA;
    });
    
    // Actualizează pozițiile în DOM
    rows.forEach((tr, index) => {
      const positionCell = tr.children[0];
      if (positionCell) {
        positionCell.innerHTML = index + 1; // actualizează poziția
      }
    });
    
    // Reafișează rândurile în ordinea sortată
    rows.forEach(tr => {
      tbody.appendChild(tr);
      // Găsește collapse-ul asociat
      const collapseId = tr.getAttribute('data-bs-target');
      if (collapseId) {
        const collapseRow = tbody.querySelector(collapseId);
        if (collapseRow) tbody.appendChild(collapseRow);
      }
    });
  });
  
  // Actualizează săgețile
  updateRankingArrows();
}

// Observă schimbările în puncte pentru actualizare automată
function observePointChanges() {
  const pointsCells = document.querySelectorAll('.table td:nth-child(4)'); // coloana PTS
  
  pointsCells.forEach(cell => {
    // Crează un observer pentru modificări în conținut
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          // Așteaptă puțin pentru ca toate modificările să se finalizeze
          setTimeout(() => {
            refreshRankings();
          }, 100);
        }
      });
    });
    
    observer.observe(cell, { 
      childList: true, 
      subtree: true, 
      characterData: true 
    });
  });
}

// Funcție pentru simularea unor poziții anterioare pentru a testa săgețile
function simulateTestData() {
  console.log('Simulez poziții anterioare pentru testare...');
  
  // Mai întâi obține pozițiile actuale pentru a crea un istoric valid
  const currentPositions = getCurrentPositions();
  const testPositions = {};
  
  // Pentru fiecare echipă, creează o poziție anterioară diferită (simulând schimbări)
  Object.keys(currentPositions).forEach(key => {
    const currentPos = currentPositions[key];
    const totalTeamsInGroup = 12; // presupunem că fiecare grupă are 12 echipe
    
    // Simulează schimbări: echipele din prima jumătate "urcă", cele din a doua "coboară"
    if (currentPos <= 6) {
      // Echipele din top "vin din mijloc"
      testPositions[key] = Math.min(totalTeamsInGroup, currentPos + Math.floor(Math.random() * 4) + 2);
    } else {
      // Echipele din mijloc/jos "vin din top"
      testPositions[key] = Math.max(1, currentPos - Math.floor(Math.random() * 4) - 2);
    }
  });
  
  previousPositions = testPositions;
  savePreviousPositions();
  
  console.log('Poziții de test create pentru toate echipele:');
  console.log('Anterior vs Actual:');
  Object.keys(testPositions).forEach(key => {
    console.log(`${key}: ${testPositions[key]} -> ${currentPositions[key]}`);
  });
  
  console.log('Acum rulează refreshRankings() pentru a vedea săgețile');
}

// Funcție pentru testarea rapidă a sistemului de săgeți
function testRankingArrows() {
  console.log('Testez sistemul de săgeți...');
  
  // Primeiro verifica se ja tem dados de teste
  if (Object.keys(previousPositions).length === 0) {
    console.log('Nu există poziții anterioare. Creez date de test...');
    simulateTestData();
    
    setTimeout(() => {
      console.log('Acum refresh la clasament...');
      refreshRankings();
    }, 500);
    return;
  }
  
  // Simulează modificarea unor puncte pentru testare
  const testGroups = ['A', 'B'];
  
  testGroups.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    
    // Modifică punctele pentru primele 3 echipe
    rows.slice(0, 3).forEach((tr, index) => {
      const ptsCell = tr.children[3];
      if (ptsCell) {
        const currentPts = parseInt(ptsCell.textContent) || 0;
        // Adaugă puncte random între 1-15
        const newPts = currentPts + Math.floor(Math.random() * 15) + 1;
        ptsCell.textContent = newPts;
        
        console.log(`Grupa ${grupa}: ${tr.children[2]?.textContent} - ${currentPts} -> ${newPts} puncte`);
      }
    });
  });
  
  // Actualizează clasamentul după 1 secundă
  setTimeout(() => {
    refreshRankings();
    console.log('Clasament actualizat! Vezi săgețile în tabelele din Grupa A și B.');
  }, 1000);
}

// Funcție simplă pentru a adăuga săgeți de test manual în toate grupele
function addTestArrows() {
  console.log('Adaug săgeți de test manual în toate grupele...');
  
  const groupIds = ['A','B','C','D','E','F'];
  let totalArrows = 0;
  
  groupIds.forEach(grupa => {
    const table = document.querySelector(`.group-table-${grupa}`);
    if (!table) {
      console.log(`Nu găsesc tabelul pentru grupa ${grupa}`);
      return;
    }
    
    const tbody = table.querySelector('tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('collapse'));
    
    rows.forEach((tr, index) => {
      const positionCell = tr.children[0];
      const teamName = tr.children[2] ? tr.children[2].textContent.trim() : 'Unknown';
      
      if (!positionCell) return;
      
      // Elimină săgeata existentă
      const existingArrow = positionCell.querySelector('.ranking-arrow');
      if (existingArrow) existingArrow.remove();
      
      // Adaugă săgeți pe baza poziției:
      // Pozițiile 1-4: săgeți verzi (urcă)
      // Pozițiile 5-8: fără săgeți (stabil)  
      // Pozițiile 9-12: săgeți roșii (coboară)
      
      if (index < 4) {
        // Prima jumătate - săgeți verzi (au urcat)
        const arrow = document.createElement('span');
        arrow.className = 'ranking-arrow ranking-arrow-up new-arrow';
        arrow.innerHTML = index < 2 ? '⬆️' : '↗️'; // săgeți mari pentru top 2
        arrow.title = `${teamName} a urcat în clasament`;
        positionCell.appendChild(arrow);
        totalArrows++;
        console.log(`  Săgeată verde pentru ${teamName} (poziția ${index + 1})`);
      } else if (index >= 8) {
        // Ultima parte - săgeți roșii (au coborât)
        const arrow = document.createElement('span');
        arrow.className = 'ranking-arrow ranking-arrow-down new-arrow';
        arrow.innerHTML = index >= 10 ? '⬇️' : '↘️'; // săgeți mari pentru ultimele 2
        arrow.title = `${teamName} a coborât în clasament`;
        positionCell.appendChild(arrow);
        totalArrows++;
        console.log(`  Săgeată roșie pentru ${teamName} (poziția ${index + 1})`);
      }
    });
  });
  
  console.log(`Total săgeți adăugate: ${totalArrows}`);
  
  // Elimină clasa new-arrow după animație
  setTimeout(() => {
    document.querySelectorAll('.ranking-arrow.new-arrow').forEach(arrow => {
      arrow.classList.remove('new-arrow');
    });
  }, 800);
}

// Funcție pentru a elimina toate săgețile
function clearAllArrows() {
  const arrows = document.querySelectorAll('.ranking-arrow');
  arrows.forEach(arrow => arrow.remove());
  console.log(`Eliminate ${arrows.length} săgeți`);
}

// Expune funcțiile în window pentru debugging
window.resetRankingHistory = resetRankingHistory;
window.refreshRankings = refreshRankings;
window.updateRankingArrows = updateRankingArrows;
window.testRankingArrows = testRankingArrows;
window.simulateTestData = simulateTestData;
window.addTestArrows = addTestArrows;
window.clearAllArrows = clearAllArrows;

document.addEventListener("DOMContentLoaded", function() {
  updateCountdown();
  
  // Începe observarea schimbărilor în puncte după un delay pentru a fi sigur că DOM-ul e gata
  setTimeout(() => {
    observePointChanges();
  }, 1000);
});
