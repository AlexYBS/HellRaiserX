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
    { name: "Alpha Esports", id: "groupAteam5", logo: "logos/Alpha_Esports.png" },
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
    { name: "Team D1", id: "groupDteam1", logo: "logos/UNKNOWN.png" },
    { name: "Team D2", id: "groupDteam2", logo: "logos/UNKNOWN_1.png" },
    { name: "Team D3", id: "groupDteam3", logo: "logos/AXION.jpg" },
    { name: "Team D4", id: "groupDteam4", logo: "logos/EXPANDX.jpg" },
    { name: "Team D5", id: "groupDteam5", logo: "logos/KINGDOM.jpg" },
    { name: "Team D6", id: "groupDteam6", logo: "logos/MAFIA.jpg" },
    { name: "Team D7", id: "groupDteam7", logo: "logos/SE7EN.jpg" },
    { name: "Team D8", id: "groupDteam8", logo: "logos/UNDERFIRE.jpg" },
    { name: "Team D9", id: "groupDteam9", logo: "logos/WHITE_LION.jpg" }
  ],
  E: [
    { name: "Team E1", id: "groupEteam1", logo: "logos/BALTICA_TEAM.jpg" },
    { name: "Team E2", id: "groupEteam2", logo: "logos/BLACK_TEAM.jpg" },
    { name: "Team E3", id: "groupEteam3", logo: "logos/FIVE_G.jpg" },
    { name: "Team E4", id: "groupEteam4", logo: "logos/FORCE_EU.jpg" },
    { name: "Team E5", id: "groupEteam5", logo: "logos/FORZA_DKS.jpg" },
    { name: "Team E6", id: "groupEteam6", logo: "logos/INVERSIDIUS.jpg" },
    { name: "Team E7", id: "groupEteam7", logo: "logos/LAST_LEGENDS.jpg" },
    { name: "Team E8", id: "groupEteam8", logo: "logos/NEVADA_REBORN.jpg" },
    { name: "Team E9", id: "groupEteam9", logo: "logos/NO_DAYS_OFF.jpg" }
  ],
  F: [
    { name: "Team F1", id: "groupFteam1", logo: "logos/PAIXA_PRETA.jpg" },
    { name: "Team F2", id: "groupFteam2", logo: "logos/SUPERBET.jpg" },
    { name: "Team F3", id: "groupFteam3", logo: "logos/TROPA_DO_BIGODES.jpg" },
    { name: "Team F4", id: "groupFteam4", logo: "logos/VAMOS.PNG" },
    { name: "Team F5", id: "groupFteam5", logo: "logos/VATOS_LOCOS.jpg" },
    { name: "Team F6", id: "groupFteam6", logo: "logos/VZ_ESPORTS.jpg" },
    { name: "Team F7", id: "groupFteam7", logo: "logos/WILDER_LOWE.jpg" },
    { name: "Team F8", id: "groupFteam8", logo: "logos/WIN4EVER.jpeg" },
    { name: "Team F9", id: "groupFteam9", logo: "logos/ZAKA_ESPORTS.jpg" }
  ]
};

// Numele hărților
const maps = ["Solara", "Kalahari", "Purgatory", "Alpine", "Nexterra", "Bermuda"];

// Sistem de punctaj pentru poziții
const positionPoints = {
  1: 20, 2: 15, 3: 12, 4: 10, 5: 8,
  6: 5, 7: 5, 8: 5, 9: 5, 10: 5,
  11: 0, 12: 0
};

// Parola pentru acces (schimbă aici parola)
const ADMIN_PASSWORD = 'Teenwolf14';

// ========================================
// FUNCȚII PENTRU GENERAREA INTERFEȚELOR
// ========================================

// Funcție pentru generarea interfața pentru o grupă
function generateGroupInterface(group) {
  const teams = groupTeams[group];
  let html = `<h5 style="color: #ffd700; margin-bottom: 15px;">📊 Grupa ${group}</h5>`;
  
  maps.forEach((map, mapIndex) => {
    html += `
      <div style="background: #2a2a2a; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #444;">
        <h6 style="color: #00ff88; margin-bottom: 10px;">🗺️ ${map}</h6>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; align-items: center; margin-bottom: 5px;">
          <strong style="color: #fff;">Echipa</strong>
          <strong style="color: #fff;">Kills</strong>
          <strong style="color: #fff;">Poziție</strong>
        </div>`;
    
    teams.forEach((team, teamIndex) => {
      html += `
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; align-items: center; margin-bottom: 10px; padding: 10px; background: #1a1a1a; border-radius: 4px;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <img src="${team.logo}" alt="${team.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 3px solid #ffd700;">
            <span style="color: #fff; font-size: 15px; font-weight: 600;">${team.name}</span>
          </div>
          <input type="number" 
                 id="kills_${group}_${mapIndex}_${teamIndex}" 
                 min="0" 
                 value="0"
                 style="width: 100%; padding: 4px; background: #333; color: #fff; border: 1px solid #555; border-radius: 3px;">
          <select id="pos_${group}_${mapIndex}_${teamIndex}" 
                  style="width: 100%; padding: 4px; background: #333; color: #fff; border: 1px solid #555; border-radius: 3px;">
            <option value="" selected>-</option>
            <option value="DNS" style="color: #ff6b6b;">🚫 Nu joacă</option>
            ${Array.from({length: 12}, (_, i) => `<option value="${i+1}">${i+1}</option>`).join('')}
          </select>
        </div>`;
    });
    
    html += `</div>`;
  });
  
  // Adaugă butoane de control
  html += `
    <div style="margin-top: 20px; padding: 15px; background: #2a2a2a; border-radius: 8px; border: 1px solid #444;">
      <h6 style="color: #ffd700; margin-bottom: 15px;">🎮 Control Turneu</h6>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button onclick="updateLeaderboard('${group}')" style="padding: 8px 16px; background: #00ff88; color: #000; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
          🔄 Actualizează Clasament
        </button>
      </div>
    </div>`;
  
  return html;
}

// ========================================
// FUNCȚII PENTRU ACTUALIZAREA CLASAMENTULUI
// ========================================

// Funcție pentru actualizarea clasamentuluiS
function updateLeaderboard(group) {
  const teams = groupTeams[group];
  const teamStats = {};
  
  // Inițializează statisticile echipelor
  teams.forEach(team => {
    teamStats[team.name] = {
      totalPoints: 0,
      totalKills: 0,
      wins: 0,
      id: team.id
    };
  });
  
  // Calculează punctele pentru fiecare hartă
  maps.forEach((map, mapIndex) => {
    teams.forEach((team, teamIndex) => {
      const killsInput = document.getElementById(`kills_${group}_${mapIndex}_${teamIndex}`);
      const posSelect = document.getElementById(`pos_${group}_${mapIndex}_${teamIndex}`);
      
      if (killsInput && posSelect) {
        const kills = parseInt(killsInput.value) || 0;
        const positionValue = posSelect.value;
        
        // Verifică dacă echipa nu joacă pe această hartă
        if (positionValue === 'DNS') {
          // Echipa nu joacă - primește +0 puncte (este contorizată dar fără punctaj)
          console.log(`❌ ${team.name} nu joacă pe ${map} - +0 puncte`);
          teamStats[team.name].totalPoints += 0;
          teamStats[team.name].totalKills += 0;
          // Nu primește victorie
          return; // Continuă cu următoarea echipă
        }
        
        const position = parseInt(positionValue) || 12;
        
        // Puncte pentru kills (1 punct per kill)
        const killPoints = kills;
        
        // Puncte pentru poziție
        const positionPointsValue = positionPoints[position] || 0;
        
        // Total puncte pentru această hartă
        const totalMapPoints = killPoints + positionPointsValue;
        
        teamStats[team.name].totalPoints += totalMapPoints;
        teamStats[team.name].totalKills += kills;
        
        // Dacă echipa a câștigat (poziția 1), adaugă o victorie
        if (position === 1) {
          teamStats[team.name].wins += 1;
        }
        
        // Logging pentru debugging (doar dacă există valori)
        if (kills > 0 || position < 12) {
          console.log(`📊 ${team.name} pe ${map}: ${kills}kills (${killPoints}pts) + poziția ${position} (${positionPointsValue}pts) = ${totalMapPoints}pts`);
        }
      }
    });
  });
  
  // Log rezultate finale
  console.log(`🏆 TOTALE GRUPA ${group}:`);
  Object.keys(teamStats).forEach(teamName => {
    const stats = teamStats[teamName];
    if (stats.totalPoints > 0 || stats.totalKills > 0) {
      console.log(`   ${teamName}: ${stats.totalPoints}pts (${stats.totalKills}kills, ${stats.wins}wins)`);
    }
  });
  
  // Actualizează clasamentul în HTML
  console.log(`🔍 Caut tabelul pentru grupa ${group} cu selectorul: .group-table-${group}`);
  const groupTable = document.querySelector(`.group-table-${group}`);
  console.log('🎯 Tabel găsit:', groupTable);
  
  if (groupTable) {
    teams.forEach(team => {
      const stats = teamStats[team.name];
      
      // Găsește rândul echipei în tabel
      const teamRow = groupTable.querySelector(`tr[data-bs-target="#${team.id}"]`);
      if (teamRow) {
        const cells = teamRow.querySelectorAll('td');
        if (cells.length >= 4) {
          // Convertește celulele în input-uri dacă nu sunt deja
          if (!cells[2].querySelector('input')) {
            cells[2].innerHTML = `<input type="number" value="${stats.totalPoints}" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
          } else {
            cells[2].querySelector('input').value = stats.totalPoints;
          }
          
          if (!cells[3].querySelector('input')) {
            cells[3].innerHTML = `<input type="number" value="${stats.wins}" readonly style="width: 40px; background: transparent; border: none; color: inherit; text-align: center;">`;
          } else {
            cells[3].querySelector('input').value = stats.wins;
          }
          
          if (!cells[4].querySelector('input')) {
            cells[4].innerHTML = `<input type="number" value="${stats.totalKills}" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
          } else {
            cells[4].querySelector('input').value = stats.totalKills;
          }
        }
      }
    });
    
    // Reordonează echipele în funcție de puncte
    console.log(`🔄 Sortez echipele după puncte pentru grupa ${group}...`);
    const tbody = groupTable.querySelector('tbody');
    if (!tbody) {
      console.error('❌ Nu găsesc tbody pentru grupa', group);
      return;
    }
    
    console.log('🔍 Găsit tbody:', tbody);
    console.log('🔍 Numărul de copii tbody:', tbody.children.length);
    
    const rows = Array.from(tbody.querySelectorAll('tr:not(.collapse)'));
    console.log(`📊 Găsite ${rows.length} echipe pentru sortare`);
    
    // Creează o listă cu echipe și puncte pentru debug
    const teamsForSort = rows.map(row => {
      const nameCell = row.querySelector('td:nth-child(2)');
      const pointsCell = row.querySelector('td:nth-child(3)');
      const name = nameCell ? nameCell.textContent.trim() : 'Unknown';
      const points = pointsCell && pointsCell.querySelector('input') ? 
        parseInt(pointsCell.querySelector('input').value) || 0 : 0;
      return { name, points, row };
    });
    
    console.log('📋 Echipe înainte de sortare:', teamsForSort.map(t => `${t.name}: ${t.points}pts`));
    
    // Calculează statistici suplimentare pentru fiecare echipă
    const enhancedTeams = rows.map(row => {
      const nameCell = row.querySelector('td:nth-child(2)');
      const teamName = nameCell ? nameCell.textContent.trim() : 'Unknown';
      
      // Obține statisticile din teamStats
      const stats = teamStats[teamName] || { totalPoints: 0, totalKills: 0, wins: 0 };
      
      // Calculează top3 finishes (poziții 1, 2, 3)
      let top3Count = 0;
      const teams = groupTeams[group];
      const teamIndex = teams.findIndex(t => t.name === teamName);
      
      if (teamIndex !== -1) {
        maps.forEach((map, mapIndex) => {
          const posSelect = document.getElementById(`pos_${group}_${mapIndex}_${teamIndex}`);
          if (posSelect && posSelect.value) {
            const position = parseInt(posSelect.value);
            if (position >= 1 && position <= 3) {
              top3Count++;
            }
          }
        });
      }
      
      return {
        row,
        teamName,
        points: stats.totalPoints,
        kills: stats.totalKills,
        wins: stats.wins,
        top3: top3Count
      };
    });
    
    console.log('🏆 Statistici pentru sortare:', enhancedTeams.map(t => 
      `${t.teamName}: ${t.points}pts, ${t.kills}kills, ${t.wins}wins, ${t.top3}top3`
    ));
    
    // Sortare cu criterii multiple
    enhancedTeams.sort((a, b) => {
      // 1. Criterii principal: Puncte (descrescător)
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      
      // 2. La egalitate de puncte: Kills (descrescător)  
      if (a.kills !== b.kills) {
        return b.kills - a.kills;
      }
      
      // 3. La egalitate de kills: Wins (descrescător)
      if (a.wins !== b.wins) {
        return b.wins - a.wins;
      }
      
      // 4. La egalitate de wins: Top 3 finishes (descrescător)
      if (a.top3 !== b.top3) {
        return b.top3 - a.top3;
      }
      
      // 5. La egalitate completă: păstrează ordinea alfabetică
      return a.teamName.localeCompare(b.teamName);
    });
    
    // Extrage rândurile sortate
    const sortedRows = enhancedTeams.map(team => team.row);
    
    console.log('📊 Ordinea finală:', enhancedTeams.map((t, i) => 
      `${i+1}. ${t.teamName} (${t.points}pts, ${t.kills}k, ${t.wins}w, ${t.top3}t3)`
    ));
    
    // Curăță tabelul și re-adaugă rândurile în ordinea corectă
    console.log('🗑️ Curăț tabelul...');
    const allRows = Array.from(tbody.children);
    console.log(`📋 Toate rândurile înainte: ${allRows.length}`);
    
    // Elimină toate rândurile
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    console.log('✅ Tabel golit');
    
    // Reface ordinea în tabel și actualizează pozițiile
    console.log(`📊 Adaug ${sortedRows.length} rânduri în ordinea sortată...`);
    sortedRows.forEach((row, index) => {
      const positionCell = row.querySelector('th');
      const nameCell = row.querySelector('td:nth-child(2)');
      const teamName = nameCell ? nameCell.textContent.trim() : 'Unknown';
      
      console.log(`${index + 1}. Adaug echipa: ${teamName}`);
      
      if (positionCell) {
        positionCell.textContent = index + 1;
        console.log(`   Actualizez poziția la: ${index + 1}`);
      }
      
      // Adaugă rândul principal
      tbody.appendChild(row);
      console.log(`   ✅ Rând principal adăugat`);
      
      // Găsește și adaugă rândul collapse asociat
      const targetId = row.getAttribute('data-bs-target');
      if (targetId) {
        const collapseId = targetId.replace('#', '');
        const collapseRow = allRows.find(r => r.id === collapseId);
        if (collapseRow) {
          tbody.appendChild(collapseRow);
          console.log(`   ✅ Rând collapse adăugat pentru ${teamName}`);
        } else {
          console.log(`   ⚠️ Nu găsesc rândul collapse pentru ${teamName} (${collapseId})`);
        }
      }
    });
    
    console.log(`🎯 Finalizat! Tabelul are acum ${tbody.children.length} rânduri`);
    
    console.log('✅ Sortarea completă pentru grupa', group);
  }
  
  // Salvează rezultatele în localStorage după actualizare
  saveLeaderboardToStorage();
}

// ========================================
// FUNCȚII PENTRU SALVAREA PERSISTENTĂ
// ========================================

// Salvează toate valorile din clasamente (localStorage + JSON global)
function saveLeaderboardToStorage() {
  const leaderboardData = {
    lastUpdate: new Date().toISOString(),
    groups: {}
  };
  
  Object.keys(groupTeams).forEach(group => {
    leaderboardData.groups[group] = {};
    const teams = groupTeams[group];
    
    teams.forEach(team => {
      const groupTable = document.querySelector(`.group-table-${group}`);
      if (groupTable) {
        const teamRow = groupTable.querySelector(`tr[data-bs-target="#${team.id}"]`);
        if (teamRow) {
          const cells = teamRow.querySelectorAll('td');
          if (cells.length >= 4) {
            const pointsInput = cells[2].querySelector('input');
            const winsInput = cells[3].querySelector('input');
            const killsInput = cells[4].querySelector('input');
            
            leaderboardData.groups[group][team.id] = {
              points: pointsInput ? pointsInput.value : '0',
              wins: winsInput ? winsInput.value : '0', 
              kills: killsInput ? killsInput.value : '0'
            };
          }
        }
      }
    });
  });
  
  // Salvare locală (backup)
  localStorage.setItem('hellraiser_leaderboard', JSON.stringify(leaderboardData));
  
  // Salvare globală - afișează JSON pentru copy-paste manual în tournament_data.json
  console.log('💾 COPIAZA ACEST JSON ÎN FIȘIERUL tournament_data.json:');
  console.log('========================================');
  console.log(JSON.stringify(leaderboardData, null, 2));
  console.log('========================================');
  
  // Sau downloadează automat fișierul
  downloadJSON(leaderboardData, 'tournament_data.json');
  
  // Afișează instrucțiuni pentru actualizare
  alert(`🎯 PAȘI PENTRU ACTUALIZARE GLOBALĂ:
  
1. Un fișier s-a descărcat în Downloads
2. Înlocuiește conținutul din tournament_data.json cu cel din consolă
3. Salvează fișierul (Ctrl+S)
4. Fă git commit + push
5. Rezultatele vor fi globale pentru toți!`);
}

// Funcție pentru download automat JSON
function downloadJSON(data, filename) {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  console.log(`📥 Fișierul ${filename} a fost descărcat!`);
}

// Încarcă valorile din JSON global sau localStorage
function loadLeaderboardFromStorage() {
  // Încearcă să încarce din JSON global mai întâi
  loadFromGlobalJSON()
    .then(success => {
      if (!success) {
        // Dacă nu reușește, încarcă din localStorage
        loadFromLocalStorage();
      }
    });
}

// Încarcă din fișierul JSON global
async function loadFromGlobalJSON() {
  try {
    const response = await fetch('tournament_data.json?' + Date.now());
    if (response.ok) {
      const data = await response.json();
      
      if (data.groups) {
        Object.keys(data.groups).forEach(group => {
          Object.keys(data.groups[group]).forEach(teamId => {
            const teamData = data.groups[group][teamId];
            updateTeamDisplay(group, teamId, teamData);
          });
        });
        
        console.log('🌐 Clasament încărcat din JSON global!');
        console.log('📅 Ultima actualizare:', data.lastUpdate);
        return true;
      }
    }
  } catch (error) {
    console.log('⚠️ Nu s-a putut încărca JSON global, se încearcă localStorage...');
  }
  return false;
}

// Încarcă din localStorage (backup)
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('hellraiser_leaderboard');
  
  if (savedData) {
    try {
      const leaderboardData = JSON.parse(savedData);
      const groups = leaderboardData.groups || leaderboardData;
      
      Object.keys(groups).forEach(group => {
        Object.keys(groups[group]).forEach(teamId => {
          const teamData = groups[group][teamId];
          updateTeamDisplay(group, teamId, teamData);
        });
      });
      
      console.log('📂 Clasament încărcat din localStorage!');
      return true;
    } catch (error) {
      console.error('❌ Eroare la încărcarea clasamentului:', error);
    }
  }
  
  return false;
}

// Actualizează afișarea pentru o echipă specifică
function updateTeamDisplay(group, teamId, teamData) {
  const groupTable = document.querySelector(`.group-table-${group}`);
  
  if (groupTable) {
    const teamRow = groupTable.querySelector(`tr[data-bs-target="#${teamId}"]`);
    if (teamRow) {
      const cells = teamRow.querySelectorAll('td');
      if (cells.length >= 4) {
        // Creează/actualizează input-urile cu valorile salvate
        cells[2].innerHTML = `<input type="number" value="${teamData.points}" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
        cells[3].innerHTML = `<input type="number" value="${teamData.wins}" readonly style="width: 40px; background: transparent; border: none; color: inherit; text-align: center;">`;
        cells[4].innerHTML = `<input type="number" value="${teamData.kills}" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
      }
    }
  }
}

// Încearcă să facă commit automat prin GitHub API
async function autoCommitToGitHub() {
  console.log('🚀 Încep procesul de commit automat...');
  
  // Încearcă să încărce token-ul salvat
  let githubToken = localStorage.getItem('hellraiser_github_token');
  
  if (!githubToken) {
    console.log('⚠️ Nu am găsit token salvat, cer utilizatorului...');
    githubToken = prompt(`🔑 Pentru commit automat, introdu GitHub Personal Access Token:

📋 Cum să obții token-ul:
1. Mergi la GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token → Bifează "repo" 
4. Copiază token-ul aici

✅ Token-ul va fi salvat în browser pentru viitor!
❌ Nu vrem să îl salvezi? Apasă Cancel`);
    
    if (!githubToken) {
      console.log('❌ Utilizatorul a anulat introducerea token-ului');
      showJSONInstructions();
      return;
    }
    
    // Salvează token-ul pentru viitor
    localStorage.setItem('hellraiser_github_token', githubToken);
    console.log('✅ Token salvat în browser pentru sesiunile viitoare!');
  } else {
    console.log('🔑 Folosesc token-ul salvat din localStorage...');
  }
  
  try {
    console.log('📊 Colectez datele pentru upload...');
    const leaderboardData = getCurrentLeaderboardData();
    console.log('📋 Date colectate:', leaderboardData);
    
    // Încearcă să facă commit prin GitHub API
    console.log('⬆️ Încep upload-ul pe GitHub...');
    const success = await commitToGitHub(leaderboardData, githubToken);
    console.log('📤 Rezultat commit:', success ? 'SUCCESS' : 'FAILED');
    
    if (success) {
      console.log('🎉 COMMIT AUTOMAT REUȘIT!');
      alert('🎉 SUCCES! Rezultatele au fost actualizate automat pe GitHub!\n\n✅ Toți vizitatorii vor vedea noile rezultate!');
    } else {
      console.log('❌ COMMIT AUTOMAT EȘUAT - OPRESC LOOP-UL');
      alert('❌ Commit automat eșuat. Verifică token-ul GitHub sau încearcă din nou mai târziu.');
      // NU mai chem showJSONInstructions() ca să nu se blocheze în loop
    }
  } catch (error) {
    console.error('💥 EROARE în autoCommitToGitHub:', error);
    alert('❌ Eroare la commit automat: ' + error.message);
    // NU mai chem showJSONInstructions() ca să nu se blocheze în loop
  }
}

// Comite fișierul pe GitHub prin API
async function commitToGitHub(data, token) {
  console.log('🔑 Încep commitToGitHub cu token lung de', token.length, 'caractere');
  
  const owner = 'AlexYBS';  // Username-ul tău GitHub
  const repo = 'HellRaiserX';  // Numele repo-ului
  const path = 'tournament_data.json';
  const branch = 'master';
  
  console.log(`📁 Target: ${owner}/${repo}/${path} pe branch ${branch}`);
  
  try {
    // 1. Obține SHA-ul fișierului curent
    console.log('1️⃣ Obțin SHA-ul fișierului curent...');
    const fileResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    console.log('📡 Răspuns API pentru SHA:', fileResponse.status, fileResponse.statusText);
    
    let sha = null;
    if (fileResponse.ok) {
      const fileData = await fileResponse.json();
      sha = fileData.sha;
      console.log('✅ SHA obținut:', sha);
    } else {
      console.log('⚠️ Nu am putut obține SHA, probabil fișier nou');
    }
    
    // 2. Creează commit-ul
    const content = btoa(JSON.stringify(data, null, 2)); // Base64 encode
    
    const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `🏆 Update tournament results - ${new Date().toLocaleString()}`,
        content: content,
        branch: branch,
        sha: sha  // Necesar pentru update
      })
    });
    
    if (commitResponse.ok) {
      console.log('✅ Commit realizat cu succes pe GitHub!');
      
      // Sortează toate grupele după salvare
      sortAllGroups();
      
      return true;
    } else {
      const error = await commitResponse.json();
      console.error('❌ Eroare commit GitHub:', error);
      return false;
    }
    
  } catch (error) {
    console.error('❌ Eroare GitHub API:', error);
    return false;
  }
}

// Sortează toate grupele după puncte
function sortAllGroups() {
  console.log('🔄 Sortez toate grupele după puncte...');
  Object.keys(groupTeams).forEach(group => {
    updateLeaderboard(group);
  });
  console.log('✅ Toate grupele au fost sortate!');
}

// Obține datele curente pentru salvare
function getCurrentLeaderboardData() {
  const leaderboardData = {
    lastUpdate: new Date().toISOString(),
    groups: {}
  };
  
  Object.keys(groupTeams).forEach(group => {
    leaderboardData.groups[group] = {};
    const teams = groupTeams[group];
    
    teams.forEach(team => {
      const groupTable = document.querySelector(`.group-table-${group}`);
      if (groupTable) {
        const teamRow = groupTable.querySelector(`tr[data-bs-target="#${team.id}"]`);
        if (teamRow) {
          const cells = teamRow.querySelectorAll('td');
          if (cells.length >= 4) {
            const pointsInput = cells[2].querySelector('input');
            const winsInput = cells[3].querySelector('input');
            const killsInput = cells[4].querySelector('input');
            
            leaderboardData.groups[group][team.id] = {
              points: pointsInput ? pointsInput.value : '0',
              wins: winsInput ? winsInput.value : '0', 
              kills: killsInput ? killsInput.value : '0'
            };
          }
        }
      }
    });
  });
  
  return leaderboardData;
}

// Afișează instrucțiuni pentru actualizare manuală
function showJSONInstructions() {
  alert(`🌐 CUM SĂ FACI REZULTATELE GLOBALE (Manual):

📋 METODA UȘOARĂ:
1. Actualizează clasamentul (butonul verde)
2. Se va afișa JSON în consolă (F12)
3. Copiază tot JSON-ul din consolă
4. Deschide fișierul tournament_data.json
5. Înlocuiește tot conținutul cu cel copiat
6. Salvează fișierul (Ctrl+S)
7. Fă git commit + push

✅ REZULTAT: Toți vizitatorii vor vedea rezultatele!

💡 TIP: Apasă F12 pentru a deschide consola`);
}

// Gestionează GitHub token-ul
function manageGitHubToken() {
  const savedToken = localStorage.getItem('hellraiser_github_token');
  
  if (savedToken) {
    const action = confirm(`🔑 EXISTĂ UN TOKEN SALVAT

Token curent: ${savedToken.substring(0, 8)}...${savedToken.substring(savedToken.length - 4)}

✅ OK = Păstrează token-ul actual
❌ Cancel = Șterge/Schimbă token-ul`);
    
    if (!action) {
      // Șterge token-ul vechi
      localStorage.removeItem('hellraiser_github_token');
      
      const newToken = prompt(`🔄 INTRODU NOUL TOKEN:

Vechiul token a fost șters.
Introdu noul GitHub Personal Access Token:`);
      
      if (newToken) {
        localStorage.setItem('hellraiser_github_token', newToken);
        alert('✅ Noul token a fost salvat cu succes!');
      }
    }
  } else {
    const newToken = prompt(`🔑 ADAUGĂ TOKEN GITHUB:

Nu există niciun token salvat.
Introdu GitHub Personal Access Token pentru commit automat:`);
    
    if (newToken) {
      localStorage.setItem('hellraiser_github_token', newToken);
      alert('✅ Token-ul a fost salvat cu succes!');
    }
  }
}

// ========================================
// FUNCȚII PENTRU INIȚIALIZAREA INPUT-URILOR
// ========================================

// Funcție pentru inițializarea input-urilor în clasament
function initializeLeaderboardInputs() {
  Object.keys(groupTeams).forEach(group => {
    const groupTable = document.querySelector(`.group-table-${group}`);
    if (groupTable) {
      const teams = groupTeams[group];
      teams.forEach(team => {
        const teamRow = groupTable.querySelector(`tr[data-bs-target="#${team.id}"]`);
        if (teamRow) {
          const cells = teamRow.querySelectorAll('td');
          if (cells.length >= 4) {
            // Inițializează input-urile cu valori 0 dacă nu există
            if (!cells[2].querySelector('input')) {
              cells[2].innerHTML = `<input type="number" value="0" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
            }
            if (!cells[3].querySelector('input')) {
              cells[3].innerHTML = `<input type="number" value="0" readonly style="width: 40px; background: transparent; border: none; color: inherit; text-align: center;">`;
            }
            if (!cells[4].querySelector('input')) {
              cells[4].innerHTML = `<input type="number" value="0" readonly style="width: 60px; background: transparent; border: none; color: inherit; text-align: center;">`;
            }
          }
        }
      });
    }
  });
}

// Funcție pentru citirea valorilor din clasament
function loadFromLeaderboard(group) {
  const teams = groupTeams[group];
  const groupTable = document.querySelector(`.group-table-${group}`);
  
  if (!groupTable) return;
  
  teams.forEach(team => {
    const teamRow = groupTable.querySelector(`tr[data-bs-target="#${team.id}"]`);
    if (teamRow) {
      const cells = teamRow.querySelectorAll('td');
      if (cells.length >= 4) {
        // Citește valorile din input-uri
        const pointsInput = cells[2].querySelector('input');
        const winsInput = cells[3].querySelector('input');
        const killsInput = cells[4].querySelector('input');
        
        if (pointsInput && winsInput && killsInput) {
          const totalPoints = parseInt(pointsInput.value) || 0;
          const wins = parseInt(winsInput.value) || 0;
          const totalKills = parseInt(killsInput.value) || 0;
          
          console.log(`📊 ${team.name}: ${totalPoints}pts, ${wins}wins, ${totalKills}kills`);
        }
      }
    }
  });
}

// ========================================
// FUNCȚII PENTRU VERIFICAREA PAROLEI
// ========================================

function checkPassword() {
  const password = prompt('🔒 Introdu parola pentru accesul la panoul de control:');
  
  if (password === ADMIN_PASSWORD) {
    return true;
  } else if (password !== null) {
    alert('❌ Parolă incorectă! Acces interzis.');
    return false;
  }
  return false; // Cancel apăsat
}

// ========================================
// INIȚIALIZAREA PANOULUI ADMIN
// ========================================

// Event listeners pentru panou
document.addEventListener('DOMContentLoaded', function() {
  const adminPanel = document.getElementById('adminPanel');
  const showBtn = document.getElementById('showPanelBtn');
  const hideBtn = document.getElementById('hidePanel');
  const groupSelector = document.getElementById('groupSelector');
  const matchResults = document.getElementById('matchResults');
  const saveBtn = document.getElementById('saveResults');
  
  // Verifică dacă elementele există (pentru a evita erorile)
  if (!adminPanel || !showBtn || !hideBtn || !groupSelector || !matchResults || !saveBtn) {
    console.log('Elementele panoului admin nu au fost găsite. Panoul nu va fi inițializat.');
    return;
  }
  
  // Afișează panoul cu verificare parolă
  showBtn.addEventListener('click', function() {
    if (checkPassword()) {
      adminPanel.style.display = 'block';
      showBtn.style.display = 'none';
      
      // Generează interfața pentru grupa selectată
      const selectedGroup = groupSelector.value;
      matchResults.innerHTML = generateGroupInterface(selectedGroup);
    }
  });
  
  // Ascunde panoul
  hideBtn.addEventListener('click', function() {
    adminPanel.style.display = 'none';
    showBtn.style.display = 'block';
  });
  
  // Schimbă grupa
  groupSelector.addEventListener('change', function() {
    const selectedGroup = this.value;
    matchResults.innerHTML = generateGroupInterface(selectedGroup);
  });
  
  // Salvează rezultatele
  saveBtn.addEventListener('click', function() {
    const selectedGroup = groupSelector.value;
    updateLeaderboard(selectedGroup);
    
    // Sortează și celelalte grupe vizibile
    setTimeout(() => {
      Object.keys(groupTeams).forEach(group => {
        if (group !== selectedGroup) {
          updateLeaderboard(group);
        }
      });
    }, 500);
    
    alert(`✅ Clasamentul pentru Grupa ${selectedGroup} a fost actualizat și toate grupele au fost sortate!`);
  });
  
  // Generează interfața inițială
  if (matchResults) {
    matchResults.innerHTML = generateGroupInterface('A');
  }
  
  // Inițializează input-urile în clasament
  initializeLeaderboardInputs();
  
  // Încarcă valorile salvate din localStorage
  setTimeout(() => {
    loadLeaderboardFromStorage();
  }, 500);
});

// ========================================
// SCURTĂTURI DE LA TASTATURĂ
// ========================================

// Scurtătură pentru afișarea panoului (Ctrl + Shift + A)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    const adminPanel = document.getElementById('adminPanel');
    const showBtn = document.getElementById('showPanelBtn');
    
    if (!adminPanel || !showBtn) return;
    
    if (adminPanel.style.display === 'none' || adminPanel.style.display === '') {
      // Cere parola pentru acces
      if (checkPassword()) {
        adminPanel.style.display = 'block';
        showBtn.style.display = 'none';
        
        // Generează interfața pentru grupa selectată
        const groupSelector = document.getElementById('groupSelector');
        const matchResults = document.getElementById('matchResults');
        
        if (groupSelector && matchResults) {
          const selectedGroup = groupSelector.value;
          matchResults.innerHTML = generateGroupInterface(selectedGroup);
        }
      }
    } else {
      // Dacă panoul e deja deschis, îl închide fără parolă
      adminPanel.style.display = 'none';
      showBtn.style.display = 'block';
    }
  }
});

// ========================================
// FUNCȚII UTILE PENTRU DEBUGGING
// ========================================

// Funcție pentru a afișa toate echipele dintr-o grupă (pentru debugging)
function debugShowTeams(group) {
  if (groupTeams[group]) {
    console.log(`Echipe din Grupa ${group}:`, groupTeams[group]);
  } else {
    console.log(`Grupa ${group} nu există!`);
  }
}

// Funcție pentru a verifica sistemul de punctaj
function debugPointSystem() {
  console.log('Sistem de punctaj poziții:', positionPoints);
  console.log('Hărți disponibile:', maps);
}

// Exportă funcțiile pentru debugging (în consola browser-ului)
window.adminDebug = {
  showTeams: debugShowTeams,
  pointSystem: debugPointSystem,
  generateInterface: generateGroupInterface,
  updateLeaderboard: updateLeaderboard
};

console.log('🎮 Admin Panel pentru HellRaiser Cup încărcat cu succes!');
console.log('📝 Folosește window.adminDebug pentru debugging');
