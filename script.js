// Date of October 12, 2025
const targetDate = new Date("2025-10-12T00:00:00Z");

// Function to update the clock
function updateClock() {
  const currentDate = new Date();
  const timeDiff = currentDate - targetDate; // Time difference in milliseconds
  const daysSince = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

  // Update the clock display
  document.getElementById("clock").textContent = `${daysSince} days`;
}

// Update the clock every second
setInterval(updateClock, 1000);
