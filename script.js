function addMood(mood) {
  const garden = document.getElementById('garden');
  const plant = document.createElement('div');
  plant.className = `plant ${mood}`;
  garden.appendChild(plant);

  saveMood(mood);
}

function saveMood(mood) {
  let history = JSON.parse(localStorage.getItem('moodHistory')) || [];
  history.push({ mood: mood, date: new Date().toISOString() });
  localStorage.setItem('moodHistory', JSON.stringify(history));
}

function loadGarden() {
  const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
  const garden = document.getElementById('garden');
  history.forEach(entry => {
    const plant = document.createElement('div');
    plant.className = `plant ${entry.mood}`;
    garden.appendChild(plant);
  });
}

window.onload = loadGarden;
