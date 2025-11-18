// Date of October 12, 2025 (midnight UTC)
const targetDate = new Date("2025-10-12T00:00:00Z");

function pad(num, size) {
  let s = String(num);
  while (s.length < size) s = "0" + s;
  return s;
}

function updateClock() {
  const now = new Date();
  let diff = now - targetDate; // milliseconds since the target date

  // Compute units
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);
  diff -= seconds * 1000;

  const milliseconds = diff; // whatever remains

  // Format as dd:hh:mm:ss:ssss
  const formatted =
    `${pad(days, 2)}:` +
    `${pad(hours, 2)}:` +
    `${pad(minutes, 2)}:` +
    `${pad(seconds, 2)}:` +
    `${pad(milliseconds, 4)}`;

  document.getElementById("clock").textContent = formatted;
}

// update rapidly (every 25 ms feels smooth)
setInterval(updateClock, 25);
updateClock();
