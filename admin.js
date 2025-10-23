// ========================================
// PANOU DE CONTROL ADMIN - HELLRAISER CUP
// RAPID EXPORT - LIVE UPDATE
// ========================================

// QUICK EXPORT - Adaugă buton de export rapid
function addQuickExportButton() {
  const adminPanel = document.querySelector('.admin-panel') || document.body;
  
  const exportBtn = document.createElement('button');
  exportBtn.innerHTML = '⚡ EXPORT RAPID PENTRU GITHUB ⚡';
  exportBtn.className = 'btn btn-warning btn-lg mb-3';
  exportBtn.style.cssText = 'width: 100%; font-weight: bold; font-size: 1.2rem; background: linear-gradient(45deg, #ff6b35, #f7931e); border: none; box-shadow: 0 4px 15px rgba(255,107,53,0.4);';
  
  exportBtn.onclick = function() {
    generateQuickExport();
  };
  
  adminPanel.insertBefore(exportBtn, adminPanel.firstChild);
}

function generateQuickExport() {
  const allData = localStorage.getItem('tournament_data_hellraiser');
  if (!allData) {
    alert('Nu există date salvate! Salvează primul clasamentul.');
    return;
  }
  
  const data = JSON.parse(allData);
  let exportText = `COPIE ACEST COD ȘI ÎNLOCUIEȘTE DATELE ÎN index.html PE GITHUB:\n\n`;
  exportText += `=== REZULTATE ACTUALIZATE - ${new Date().toLocaleString()} ===\n\n`;
  
  // Generează codul pentru fiecare grupă
  ['A','B','C','D','E','F'].forEach(group => {
    if (data[group]) {
      exportText += `GRUPA ${group}:\n`;
      data[group].forEach((team, index) => {
        exportText += `Poziția ${index + 1}: ${team.name} - ${team.totalPoints} PTS, ${team.wins} wins, ${team.totalKills} kills\n`;
      });
      exportText += '\n';
    }
  });
  
  // Creează o fereastră cu textul pentru copiere
  const exportWindow = window.open('', '_blank', 'width=800,height=600');
  exportWindow.document.write(`
    <html>
    <head><title>Export Rapid - Copie pentru GitHub</title></head>
    <body style="font-family: monospace; background: #1a1a1a; color: #00ff00; padding: 20px;">
      <h2 style="color: #ff6b35;">⚡ EXPORT RAPID PENTRU GITHUB ⚡</h2>
      <button onclick="navigator.clipboard.writeText(document.getElementById('exportData').innerText).then(()=>alert('Copiat în clipboard!')); " 
              style="background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin-bottom: 20px;">
        📋 COPIE ÎN CLIPBOARD
      </button>
      <pre id="exportData" style="background: #000; padding: 15px; border: 1px solid #333; white-space: pre-wrap;">${exportText}</pre>
      <h3 style="color: #ff6b35;">📋 INSTRUCȚIUNI RAPIDE:</h3>
      <ol style="color: #ffffff;">
        <li>Apasă butonul "COPIE ÎN CLIPBOARD"</li>
        <li>Mergi pe <a href="https://github.com/AlexYBS/HellRaiserX" target="_blank" style="color: #00ff00;">GitHub Repository</a></li>
        <li>Editează index.html direct pe GitHub</li>
        <li>Caută secțiunile de echipe și actualizează cu datele de mai sus</li>
        <li>Salvează - site-ul se actualizează automat!</li>
      </ol>
    </body>
    </html>
  `);
}

// Inițializează butonul când se încarcă pagina
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addQuickExportButton, 500);
});

// ========================================
// PANOU DE CONTROL ADMIN - HELLRAISER CUP
// ========================================

// Date pentru echipele din fiecare grupă
const groupTeams = {
  A: [
    { name: "Survivors", id: "groupAteam1", logo: "logos/Survivors.webp" },
    { name: "Danger Team", id: "groupAteam2", logo: "logos/DANGER_TEAM.jpg" },
    { name: "Baby Gang", id: "groupAteam3", logo: "logos/BABY_GANG.jpg" },
    { name: "Oltean Clan", id: "groupAteam4", logo: "logos/OLTEAN_CLAN.jpg" },
    { name: "Alpha Esports", id: "groupAteam5", logo: "logos/ALPHA_ESPORTS_AF.webp" },
    { name: "Absolute KO", id: "groupAteam6", logo: "logos/ABSOLUTE_KO.jpg" },
    { name: "RRSH Bloody", id: "groupAteam7", logo: "logos/RRSH_BLOODY.png" },
    { name: "RG Gaming 007", id: "groupAteam8", logo: "logos/RG_GAMING_007.png" },
    { name: "NXT ESPORTS", id: "groupAteam9", logo: "logos/NXT_ESPORTS.jpg" },
    { name: "A7 Ghosts", id: "groupAteam10", logo: "logos/A7_GHOSTS.jpg" },
    { name: "MERT Team", id: "groupAteam11", logo: "logos/MERT_TEAM.jpg" },
    { name: "13 Zona", id: "groupAteam12", logo: "logos/13_zona.jpg" }
  ],
  B: [
    { name: "Zeroo Squad", id: "groupBteam1", logo: "logos/Zeroo_Squad.webp" },
    { name: "4K Esports", id: "groupBteam2", logo: "logos/4K_esports.webp" },
    { name: "Line 07", id: "groupBteam3", logo: "logos/LINE_07.jpg" },
    { name: "Run Away", id: "groupBteam4", logo: "logos/RUN_AWAY.png" },
    { name: "7H Romania", id: "groupBteam5", logo: "logos/7H_ROMANIA.png" },
    { name: "Italy Esports", id: "groupBteam6", logo: "logos/ITALY_ESPORTS.jpg" },
    { name: "Team Sexo Duro", id: "groupBteam7", logo: "logos/TEAM_SEXO_DURO.jpg" },
    { name: "45 Dark", id: "groupBteam8", logo: "logos/45_DARK.webp" },
    { name: "Line ST", id: "groupBteam9", logo: "logos/line ST.webp" },
    { name: "Eagle Fang", id: "groupBteam10", logo: "logos/EAGLE_FANG.jpg" },
    { name: "Bossiiiii", id: "groupBteam11", logo: "logos/Bossiiiii.png" },
    { name: "Vencross", id: "groupBteam12", logo: "logos/VENCROSS.jpg" }
  ],
  C: [
    { name: "EVO Line", id: "groupCteam1", logo: "logos/EVO_LINE.jpg" },
    { name: "MVP Gaming", id: "groupCteam2", logo: "logos/MVP_GAMING.jpg" },
    { name: "Red7Black", id: "groupCteam3", logo: "logos/RED7BLACK.jpg" },
    { name: "Spainmaster", id: "groupCteam4", logo: "logos/SPAIN_MASTER.jpg" },
    { name: "Unstoppable", id: "groupCteam5", logo: "logos/UNSTOPPABLE.jpg" },
    { name: "Hooligans ESPORTS", id: "groupCteam6", logo: "logos/Hooligans_E-SPORTS.jpeg" },
    { name: "Karma", id: "groupCteam7", logo: "logos/KARMA.jpg" },
    { name: "Z'S Frestyle", id: "groupCteam8", logo: "logos/Z'S_Freestyle.jpg" },
    { name: "TM Death", id: "groupCteam9", logo: "logos/TM_DEATH.jpg" },
    { name: "Vencederos", id: "groupCteam10", logo: "logos/VENCEDEROS.jpg" },
    { name: "Fire Guards", id: "groupCteam11", logo: "logos/FIRE_GUARDS.jpg" },
    { name: "Tokyo Revengers", id: "groupCteam12", logo: "logos/Tokyo_Revengers.jpg" }
  ],
  D: [
    { name: "Tropa do Bigodes", id: "groupDteam1", logo: "logos/TROPA_DO_BIGODES.jpg" },
    { name: "SE7EN", id: "groupDteam2", logo: "logos/SE7EN.jpg" },
    { name: "VZ ESPORTS", id: "groupDteam3", logo: "logos/VZ_ESPORTS.jpg" },
    { name: "Kingdom", id: "groupDteam4", logo: "logos/KINGDOM.jpg" },
    { name: "Five G", id: "groupDteam5", logo: "logos/FIVE_G.jpg" },
    { name: "EXPANDX", id: "groupDteam6", logo: "logos/EXPANDX.jpg" },
    { name: "Banda 313", id: "groupDteam7", logo: "logos/Banda313.png" },
    { name: "Mafia", id: "groupDteam8", logo: "logos/MAFIA.jpg" },
    { name: "H7 Karderrat", id: "groupDteam9", logo: "logos/H7_KARDERRAT.jpg" },
    { name: "8M GS", id: "groupDteam10", logo: "logos/8M_GS.png" },
    { name: "Line 21", id: "groupDteam11", logo: "logos/Line_21.png" },
    { name: "BGD ESPORTS", id: "groupDteam12", logo: "logos/BGD_E-SPORTS.png" }
  ],
  E: [
    { name: "Favela Esports", id: "groupEteam1", logo: "logos/FAVELA_ESPORTS.jpg" },
    { name: "Wilder Lowe", id: "groupEteam2", logo: "logos/WILDER_LOWE.jpg" },
    { name: "Force EU", id: "groupEteam3", logo: "logos/FORCE_EU.jpg" },
    { name: "Win4ever", id: "groupEteam4", logo: "logos/WIN4EVER.jpeg" },
    { name: "Alpha Esports AF", id: "groupEteam5", logo: "logos/Alpha_Esports.png"},
    { name: "Detroit", id: "groupEteam6", logo: "logos/Detroit.jpeg" },
    { name: "No Days Off", id: "groupEteam7", logo: "logos/NO_DAYS_OFF.jpg" },
    { name: "Unknows 063", id: "groupEteam8", logo: "logos/UNKNOWS_063.jpg" },
    { name: "Enemies 99", id: "groupEteam9", logo: "logos/ENEM!ES 99.png" },
    { name: "Vamos", id: "groupEteam10", logo: "logos/VAMOS.PNG" },
    { name: "Inversidius", id: "groupEteam11", logo: "logos/INVERSIDIUS.jpg" },
    { name: "Overkill Esports", id: "groupEteam12", logo: "logos/Overkill_Esports.png" }
  ],
  F: [
    { name: "White Lion", id: "groupFteam1", logo: "logos/WHITE_LION.jpg" },
    { name: "UnderFire", id: "groupFteam2", logo: "logos/UNDERFIRE.jpg" },
    { name: "Last Legends", id: "groupFteam3", logo: "logos/LAST_LEGENDS.jpg" },
    { name: "Baltica Team", id: "groupFteam4", logo: "logos/BALTICA_TEAM.jpg" },
    { name: "D3stroy3rs", id: "groupFteam5", logo: "logos/D3STROY3RS.jpg" },
    { name: "Unknown", id: "groupFteam6", logo: "logos/UNKNOWN.png" },
    { name: "08 Elite", id: "groupFteam7", logo: "logos/08_ELITE.jpg" },
    { name: "Arushat", id: "groupFteam8", logo: "logos/Arushat.jpeg" },
    { name: "BF Esports", id: "groupFteam9", logo: "logos/BF_Esports.jpg" },
    { name: "Paixa Preta", id: "groupFteam10", logo: "logos/PAIXA_PRETA.jpg" },
    { name: "Black Team", id: "groupFteam11", logo: "logos/BLACK_TEAM.jpg" },
    { name: "Unknown 1", id: "groupFteam12", logo: "logos/UNKNOWN_1.png" }
  ]
};

// Hărțile turneului
const maps = ['Solara', 'Kalahari', 'Purgatory', 'Alpine', 'Nexterra', 'Bermuda'];

// Sistemul de punctaj pentru poziții
const positionPoints = {
  1: 20, 2: 15, 3: 12, 4: 10, 5: 8, 6: 5,
  7: 5, 8: 5, 9: 5, 10: 5, 11: 0, 12: 0
};

// Stocarea pozițiilor anterioare pentru comparație
let previousPositions = {};

// ========================================
// FUNCȚII PENTRU CALCULUL PUNCTAJULUI
// ========================================

function calculatePoints(position, kills) {
  const pos = parseInt(position);
  const killCount = parseInt(kills) || 0;
  
  if (isNaN(pos) || pos < 1 || pos > 12) return killCount;
  
  return (positionPoints[pos] || 0) + killCount;
}

function calculateKD(kills, deaths) {
  const k = parseInt(kills) || 0;
  const d = parseInt(deaths) || 0;
  
  if (d === 0) return k > 0 ? k : 0;
  return (k / d).toFixed(2);
}

function getKDColor(kd) {
  const kdValue = parseFloat(kd);
  if (kdValue >= 2.0) return '#00ff88';
  if (kdValue >= 1.5) return '#ffd700';
  if (kdValue >= 1.0) return '#ff9500';
  return '#ff6b6b';
}

// ========================================
// GENERARE PANOU DE CONTROL
// ========================================

function createAdminPanel() {
  const adminHTML = `
    <div id="adminPanel" style="display: none; position: fixed; top: 80px; left: 20px; right: 20px; bottom: 20px; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border: 2px solid #ffd700; border-radius: 15px; z-index: 10000; overflow-y: auto; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);">
      <div style="background: linear-gradient(90deg, #ffd700, #ff9500); padding: 15px 20px; border-radius: 13px 13px 0 0; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10001;">
        <h2 style="color: #000; margin: 0; font-weight: bold;">🎮 PANOU DE CONTROL ADMIN</h2>
        <div>
          <select id="groupSelector" style="padding: 8px 12px; background: #000; color: #ffd700; border: 1px solid #ffd700; border-radius: 5px; margin-right: 10px;">
            ${Object.keys(groupTeams).map(group => `<option value="${group}">Grupa ${group}</option>`).join('')}
          </select>
          <button id="hidePanel" style="background: #ff6b6b; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">✖ Închide</button>
        </div>
      </div>
      <div id="adminContent" style="padding: 20px;">
        ${generateGroupPanel('A')}
      </div>
      <div style="background: #2d2d2d; padding: 15px 20px; border-top: 1px solid #444; display: flex; justify-content: space-between; align-items: center; position: sticky; bottom: 0; gap: 10px;">
        <div style="color: #888; font-size: 12px;">💡 Auto-save în localStorage + Backup manual</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button id="updateLeaderboardBtn" style="background: linear-gradient(90deg, #ff6b6b, #ff4757); color: #fff; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">📊 Update Clasament</button>
          <button id="exportBtn" style="background: linear-gradient(90deg, #ffd700, #ff9500); color: #000; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">📤 Export</button>
          <button id="importBtn" style="background: linear-gradient(90deg, #00bfff, #0080ff); color: #fff; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">📥 Import</button>
          <button id="saveAll" style="background: linear-gradient(90deg, #00ff88, #00cc66); color: #000; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px;">💾 Save</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', adminHTML);
}

function generateGroupPanel(selectedGroup) {
  const teams = groupTeams[selectedGroup];
  
  let html = `<div class="group-panel" data-group="${selectedGroup}">`;
  html += `<h3 style="color: #ffd700; text-align: center; margin-bottom: 25px;">📊 GRUPA ${selectedGroup}</h3>`;
  
  // Pentru fiecare hartă
  maps.forEach((map, mapIndex) => {
    html += `
      <div class="map-section" style="background: #2a2a2a; margin-bottom: 20px; border-radius: 10px; padding: 15px; border: 1px solid #444;">
        <h4 style="color: #00ff88; margin: 0 0 15px 0; text-align: center; background: #1a1a1a; padding: 10px; border-radius: 5px;">🗺️ ${map}</h4>
        <div class="teams-grid" style="display: grid; gap: 10px;">`;

    // Pentru fiecare echipă
    teams.forEach((team, teamIndex) => {
      const killsId = `kills_${selectedGroup}_${mapIndex}_${teamIndex}`;
      const posId = `pos_${selectedGroup}_${mapIndex}_${teamIndex}`;
      
      html += `
        <div class="team-row" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 10px; align-items: center; background: #1a1a1a; padding: 10px; border-radius: 8px; border: 1px solid #333;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${team.logo}" alt="${team.name}" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #ffd700;">
            <span style="color: #fff; font-weight: 500; font-size: 14px;">${team.name}</span>
          </div>
          <div>
            <label style="color: #999; font-size: 11px; display: block;">Kills</label>
            <input type="number" id="${killsId}" min="0" max="50" value="0" class="kills-input" data-group="${selectedGroup}" data-map="${mapIndex}" data-team="${teamIndex}" style="width: 100%; padding: 6px; background: #333; color: #00ff88; border: 1px solid #555; border-radius: 4px; text-align: center; font-weight: bold;">
          </div>
          <div>
            <label style="color: #999; font-size: 11px; display: block;">Poziție</label>
            <select id="${posId}" class="position-select" data-group="${selectedGroup}" data-map="${mapIndex}" data-team="${teamIndex}" style="width: 100%; padding: 6px; background: #333; color: #ffd700; border: 1px solid #555; border-radius: 4px; text-align: center; font-weight: bold;">
              <option value="">-</option>
              <option value="DNS" style="color: #ff6b6b;">🚫 DNS</option>
              ${Array.from({length: 12}, (_, i) => `<option value="${i+1}" ${i === 0 ? 'style="color: #ffd700;"' : ''}>#${i+1}</option>`).join('')}
            </select>
          </div>
          <div style="text-align: center;">
            <label style="color: #999; font-size: 11px; display: block;">Puncte</label>
            <span id="points_${selectedGroup}_${mapIndex}_${teamIndex}" class="points-display" style="color: #ffd700; font-weight: bold; font-size: 16px;">0</span>
          </div>
        </div>`;
    });

    html += `</div></div>`;
  });

  html += `</div>`;
  return html;
}

// ========================================
// INIȚIALIZARE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🎮 Admin Panel - Sistem încărcat');
  
  // Creează panoul admin
  createAdminPanel();
  
  // Event listeners
  setupEventListeners();
  
  // Încarcă clasamentul salvat la pornirea paginii
  loadLeaderboardOnStartup();
});

function setupEventListeners() {
  const showBtn = document.getElementById('showAdminBtn');
  const hideBtn = document.getElementById('hidePanel');
  const adminPanel = document.getElementById('adminPanel');
  const groupSelector = document.getElementById('groupSelector');
  const adminContent = document.getElementById('adminContent');
  
  // Deschidere panou din navbar
  showBtn?.addEventListener('click', function() {
    const password = prompt('🔐 Introdu parola admin:');
    if (password === 'Teenwolf14') {
      adminPanel.style.display = 'block';
      // Încarcă datele salvate când se deschide panoul
      loadFromLocalStorage();
    } else if (password !== null) {
      alert('❌ Parolă incorectă!');
    }
  });
  
  // Închidere panou
  hideBtn?.addEventListener('click', function() {
    adminPanel.style.display = 'none';
  });
  
  // Schimbare grupă
  groupSelector?.addEventListener('change', function() {
    const selectedGroup = this.value;
    adminContent.innerHTML = generateGroupPanel(selectedGroup);
    setupInputListeners();
    // Reîncarcă datele pentru noua grupă
    loadFromLocalStorage();
  });
  
  // Export/Import buttons
  document.addEventListener('click', function(e) {
    if (e.target.id === 'exportBtn') {
      exportToJSON();
    } else if (e.target.id === 'importBtn') {
      importFromJSON();
    } else if (e.target.id === 'saveAll') {
      saveToLocalStorage();
      updateLeaderboard();
      alert('💾 Datele au fost salvate manual!');
    } else if (e.target.id === 'updateLeaderboardBtn') {
      updateLeaderboard();
      // Salvează și previousPositions în localStorage
      saveToLocalStorage();
      alert('📊 Clasamentul a fost actualizat!');
    }
  });
  
  // Configurează listeners pentru input-uri
  setupInputListeners();
}

function setupInputListeners() {
  // Listeners pentru kills și poziții
  document.querySelectorAll('.kills-input, .position-select').forEach(input => {
    input.addEventListener('input', updatePoints);
    input.addEventListener('change', updatePoints);
  });
}

function updatePoints() {
  document.querySelectorAll('.kills-input').forEach(killsInput => {
    const group = killsInput.dataset.group;
    const map = killsInput.dataset.map;
    const team = killsInput.dataset.team;
    
    const posSelect = document.getElementById(`pos_${group}_${map}_${team}`);
    const pointsDisplay = document.getElementById(`points_${group}_${map}_${team}`);
    
    if (posSelect && pointsDisplay) {
      const kills = parseInt(killsInput.value) || 0;
      const position = posSelect.value;
      
      let points = 0;
      if (position && position !== 'DNS' && position !== '') {
        points = calculatePoints(position, kills);
      } else {
        points = kills; // Doar kills dacă nu are poziție
      }
      
      pointsDisplay.textContent = points;
      pointsDisplay.style.color = points > 0 ? '#00ff88' : '#666';
    }
  });
  
  // Auto-save la fiecare modificare
  saveToLocalStorage();
  
  // Actualizează clasamentul automat
  setTimeout(() => {
    updateLeaderboard();
  }, 500); // Mic delay pentru a fi sigur că datele s-au salvat
}

// ========================================
// SISTEM DE SALVARE PENTRU GITHUB PAGES
// ========================================

function saveToLocalStorage() {
  const data = {
    timestamp: Date.now(),
    groups: {},
    previousPositions: previousPositions
  };
  
  // Colectează datele din toate input-urile
  Object.keys(groupTeams).forEach(group => {
    data.groups[group] = {};
    maps.forEach((map, mapIndex) => {
      data.groups[group][map] = {};
      groupTeams[group].forEach((team, teamIndex) => {
        const killsInput = document.getElementById(`kills_${group}_${mapIndex}_${teamIndex}`);
        const posSelect = document.getElementById(`pos_${group}_${mapIndex}_${teamIndex}`);
        
        if (killsInput && posSelect) {
          data.groups[group][map][team.name] = {
            kills: parseInt(killsInput.value) || 0,
            position: posSelect.value || '',
            points: calculatePoints(posSelect.value, killsInput.value)
          };
        }
      });
    });
  });
  
  try {
    localStorage.setItem('hellraiser_tournament_data', JSON.stringify(data));
    console.log('📁 Datele au fost salvate în localStorage');
  } catch (error) {
    console.error('❌ Eroare la salvare:', error);
  }
}

function loadFromLocalStorage() {
  try {
    const savedData = localStorage.getItem('hellraiser_tournament_data');
    if (savedData) {
      const data = JSON.parse(savedData);
      
      // Restaurează previousPositions
      previousPositions = data.previousPositions || {};
      
      // Restaurează datele în input-uri
      Object.keys(data.groups).forEach(group => {
        Object.keys(data.groups[group]).forEach(map => {
          const mapIndex = maps.indexOf(map);
          Object.keys(data.groups[group][map]).forEach(teamName => {
            const teamIndex = groupTeams[group]?.findIndex(t => t.name === teamName);
            if (teamIndex >= 0) {
              const teamData = data.groups[group][map][teamName];
              
              const killsInput = document.getElementById(`kills_${group}_${mapIndex}_${teamIndex}`);
              const posSelect = document.getElementById(`pos_${group}_${mapIndex}_${teamIndex}`);
              
              if (killsInput && posSelect) {
                killsInput.value = teamData.kills || 0;
                posSelect.value = teamData.position || '';
              }
            }
          });
        });
      });
      
      updatePoints();
      console.log('📂 Datele au fost încărcate din localStorage');
      return true;
    }
  } catch (error) {
    console.error('❌ Eroare la încărcare:', error);
  }
  return false;
}

function exportToJSON() {
  const data = JSON.parse(localStorage.getItem('hellraiser_tournament_data') || '{}');
  data.exportDate = new Date().toISOString();
  data.tournamentName = 'HellRaiser FF Cup';
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hellraiser-tournament-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  alert('💾 Datele au fost exportate cu succes!');
}

function importFromJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const data = JSON.parse(e.target.result);
          localStorage.setItem('hellraiser_tournament_data', JSON.stringify(data));
          loadFromLocalStorage();
          updateLeaderboard();
          alert('📁 Datele au fost importate cu succes!');
        } catch (error) {
          alert('❌ Fișierul nu este valid!');
        }
      };
      reader.readAsText(file);
    }
  };
  
  input.click();
}

// ========================================
// CALCULUL ȘI ACTUALIZAREA CLASAMENTULUI
// ========================================

function calculateLeaderboard() {
  const savedData = localStorage.getItem('hellraiser_tournament_data');
  if (!savedData) return [];
  
  const data = JSON.parse(savedData);
  const leaderboard = [];
  
  // Pentru fiecare grupă
  Object.keys(data.groups).forEach(group => {
    groupTeams[group].forEach(team => {
      const teamResult = {
        name: team.name,
        group: group,
        logo: team.logo,
        maps: {}, // Rezultate pe fiecare hartă
        totalPoints: 0,
        totalKills: 0,
        gamesPlayed: 0,
        bestPosition: 13
      };
      
      // Inițializează contorul de wins
      teamResult.wins = 0;
      
      // Calculează pentru fiecare hartă individual
      maps.forEach(map => {
        const teamData = data.groups[group][map]?.[team.name];
        
        // Inițializează cu 0 dacă nu există date
        teamResult.maps[map] = {
          points: 0,
          kills: 0,
          position: '',
          played: false
        };
        
        if (teamData) {
          teamResult.maps[map].points = teamData.points || 0;
          teamResult.maps[map].kills = teamData.kills || 0;
          teamResult.maps[map].position = teamData.position || '';
          
          // Adună la totaluri (inclusiv 0-urile)
          teamResult.totalPoints += teamData.points || 0;
          teamResult.totalKills += teamData.kills || 0;
          
          if (teamData.position && teamData.position !== 'DNS' && teamData.position !== '') {
            teamResult.gamesPlayed++;
            teamResult.maps[map].played = true;
            
            const pos = parseInt(teamData.position);
            
            // Verifică dacă a câștigat (locul 1)
            if (pos === 1) {
              teamResult.wins++;
            }
            
            if (pos < teamResult.bestPosition) {
              teamResult.bestPosition = pos;
            }
          }
        }
      });
      
      // Calculează KD (total kills / games played)
      teamResult.kd = teamResult.gamesPlayed > 0 ? 
        parseFloat((teamResult.totalKills / teamResult.gamesPlayed).toFixed(2)) : 0.00;
      
      // Formatează cea mai bună poziție
      teamResult.bestPosition = teamResult.bestPosition === 13 ? '-' : teamResult.bestPosition;
      
      leaderboard.push(teamResult);
    });
  });
  
  // Sortează după puncte (descrescător)
  leaderboard.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    // Dacă punctele sunt egale, sortează după kills
    if (b.totalKills !== a.totalKills) {
      return b.totalKills - a.totalKills;
    }
    // Dacă și kills-urile sunt egale, sortează după cea mai bună poziție
    const aPos = a.bestPosition === '-' ? 13 : a.bestPosition;
    const bPos = b.bestPosition === '-' ? 13 : b.bestPosition;
    return aPos - bPos;
  });
  
  return leaderboard;
}

function updateLeaderboard() {
  const leaderboard = calculateLeaderboard();
  
  // Salvează clasamentul în localStorage
  localStorage.setItem('hellraiser_leaderboard', JSON.stringify(leaderboard));
  
  // Actualizează tabelele din HTML
  updateLeaderboardTables(leaderboard);
  
  console.log('📊 Clasamentul a fost actualizat');
}

function updateLeaderboardTables(leaderboard) {
  console.log('🔄 Actualizez toate clasamentele pe grupe...');
  // Actualizează doar clasamentele pe grupe (faza de grupe)
  Object.keys(groupTeams).forEach(group => {
    const groupLeaderboard = leaderboard.filter(team => team.group === group);
    console.log(`Grupa ${group}: ${groupLeaderboard.length} echipe`);
    updateGroupLeaderboard(group, groupLeaderboard);
  });
  console.log('✅ Toate clasamentele pe grupe au fost actualizate');
}


function updateGroupLeaderboard(group, groupTeams) {
  const container = document.querySelector(`.group-table-${group} tbody`);
  if (!container) {
    console.warn(`❌ Nu s-a găsit tabelul pentru grupa ${group}`);
    return;
  }
  
  console.log(`📊 Actualizez clasamentul pentru Grupa ${group} cu ${groupTeams.length} echipe`);
  console.log('🔍 PreviousPositions state:', previousPositions);
  
  container.innerHTML = '';
  
  groupTeams.forEach((team, index) => {
    const position = index + 1;
    const teamKey = `${group}_${team.name}`;
    
    // Salvează poziția actuală pentru următoarea actualizare
    previousPositions[teamKey] = position;
    
    // Evidenţiază primele 2 echipe care se califică în finală
    let positionClass = '';
    let positionEmoji = '';
    let qualificationStatus = '';
    
    if (position === 1) {
      positionClass = '';
      positionEmoji = '🥇';
      qualificationStatus = ' ✅ QUALIFIED';
    } else if (position === 2) {
      positionClass = '';
      positionEmoji = '🥈';
      qualificationStatus = ' ✅ QUALIFIED';
    } else if (position === 3) {
      positionEmoji = '🥉';
    }
    
    // Calculează detaliile pe hărți pentru tooltip
    const mapBreakdown = maps.map(map => {
      const mapData = team.maps[map];
      const status = mapData.played ? `${mapData.points}pts (${mapData.kills}k, #${mapData.position})` : '0pts';
      return `${map}: ${status}`;
    }).join('\n');
    
    const row = document.createElement('tr');
    row.className = positionClass;
    row.title = `Map breakdown:\n${mapBreakdown}\n\nCalculation: ${maps.map(map => team.maps[map].points).join(' + ')} = ${team.totalPoints} points${position <= 2 ? '\n\n🏆 QUALIFIED FOR FINALS' : ''}`;
    
    row.innerHTML = `
      <th>${position}</th>
      <td><img src="${team.logo}" alt="Team ${group}${groupTeams.indexOf(team) + 1} Logo" class="rounded" style="width:65px;height:65px;"></td>
      <td>${team.name}</td>
      <td>${team.totalPoints}</td>
      <td>${team.wins}</td>
      <td>${team.totalKills}</td>
    `;
    
    container.appendChild(row);
    
    // Adaugă funcționalitatea de click pentru logo
    const logoImg = row.querySelector('img'); // Prima imagine din rând este logo-ul
    if (logoImg) {
      const teamIndex = groupTeams.indexOf(team) + 1;
      const targetId = `group${group}team${teamIndex}`;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        logoImg.title = `Click pentru a vedea jucătorii echipei`;
        logoImg.style.cursor = 'pointer';
        
        logoImg.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          console.log(`🖱️ Click pe echipa ${group}${teamIndex}`);
          
          // Toggle collapse cu Bootstrap
          const bsCollapse = new bootstrap.Collapse(targetElement, {
            toggle: true
          });
        });
      }
    }
  });
  
  console.log(`✅ Clasamentul pentru Grupa ${group} actualizat cu succes (${groupTeams.length} echipe)`);
}

// Încarcă clasamentul la pornirea paginii
function loadLeaderboardOnStartup() {
  console.log('🚀 Verificăm dacă există date salvate...');
  
  // Verifică dacă tabelele există în DOM
  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];
  groups.forEach(group => {
    const table = document.querySelector(`.group-table-${group}`);
    if (table) {
      console.log(`✅ Tabelul pentru Grupa ${group} găsit`);
    } else {
      console.warn(`❌ Tabelul pentru Grupa ${group} NU găsit`);
    }
  });
  
  const savedLeaderboard = localStorage.getItem('hellraiser_leaderboard');
  if (savedLeaderboard) {
    const leaderboard = JSON.parse(savedLeaderboard);
    console.log('📂 Date găsite în localStorage, actualizez clasamentele...');
    updateLeaderboardTables(leaderboard);
    console.log('📂 Clasamentul a fost încărcat din localStorage');
  } else {
    console.log('ℹ️ Nu există date salvate în localStorage');
  }
}