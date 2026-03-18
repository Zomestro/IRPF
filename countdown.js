// ================================
// CONTADOR REGRESSIVO – PRAZO FINAL
// ================================

// Prazo final: 29/05/2026 às 23:59:59 (horário local)
const deadline = new Date("2026-05-29T23:59:59");

function updateCountdown() {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<strong>Prazo encerrado</strong>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  // 🔴 Modo alerta: 7 dias ou menos
  const countdownEl = document.getElementById("countdown");
  if (days <= 7) {
    countdownEl.classList.add("countdown-danger");
  } else {
    countdownEl.classList.remove("countdown-danger");
  }
}

// Inicializa
updateCountdown();
setInterval(updateCountdown, 1000);