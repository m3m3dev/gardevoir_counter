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

  // Format the time parts
  const formattedDays = pad(days, 2);
  const formattedHours = pad(hours, 2);
  const formattedMinutes = pad(minutes, 2);
  const formattedSeconds = pad(seconds, 2);
  const formattedMilliseconds = pad(milliseconds, 4);

  // Function to update a flip digit
  function flipDigit(element, newValue) {
    const front = element.querySelector(".front");
    const back = element.querySelector(".back");

    if (front.textContent !== newValue) {
      front.textContent = newValue;
      back.textContent = newValue;
      element.classList.add("flipping");
      setTimeout(() => {
        element.classList.remove("flipping");
      }, 500);
    }
  }

  // Update each digit
  flipDigit(document.getElementById("days"), formattedDays);
  flipDigit(document.getElementById("hours"), formattedHours);
  flipDigit(document.getElementById("minutes"), formattedMinutes);
  flipDigit(document.getElementById("seconds"), formattedSeconds);
  flipDigit(document.getElementById("milliseconds"), formattedMilliseconds);
}

// Update the clock every 25 milliseconds for smooth animation
setInterval(updateClock, 25);
updateClock();
