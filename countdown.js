document.addEventListener('DOMContentLoaded', () => {
  const end = new Date(2026, 4, 29, 23, 59, 59);

  const elDays  = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMins  = document.getElementById('cd-mins');
  const elSecs  = document.getElementById('cd-secs');
  const grid    = document.getElementById('countdown');

  if (!elDays || !elHours || !elMins || !elSecs || !grid) return;

  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const now = new Date();
    let diff = end - now;

    if (diff <= 0) {
      elDays.textContent  = '00';
      elHours.textContent = '00';
      elMins.textContent  = '00';
      elSecs.textContent  = '00';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const mins  = Math.floor(diff / 60000) % 60;
    const secs  = Math.floor(diff / 1000) % 60;

    elDays.textContent  = days;
    elHours.textContent = pad(hours);
    elMins.textContent  = pad(mins);
    elSecs.textContent  = pad(secs);

    if (days <= 7) {
      grid.classList.add('countdown-danger');
    }
  }

  tick();
  setInterval(tick, 1000);
});