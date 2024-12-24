// Taariikhda bilowga iyo dhamaadka
const startDate = new Date("05/15/2022");
const endDate = new Date("06/15/2026");

// Function-ka lagu xisaabinayo waqtiga haray
function updateTimeRemaining() {
  // Taariikhda maanta
  const currentDate = new Date();

  // Xisaabi farqiga u dhexeeya taariikhda dhamaadka iyo maanta
  const timeDifference = endDate - currentDate;

  // Haddii farqigu yahay mid qalad ah (invalid date)
  if (isNaN(timeDifference)) {
    alert("Please enter a valid date");
    return;
  }

  // Sanad, bil, maalin, saacad, daqiiqad, ilbiriqsi
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Ku soo bandhig natiijada HTML
  document.getElementById("years").textContent = `${years} Years`;
  document.getElementById("months").textContent = `${months} Months`;
  document.getElementById("days").textContent = `${days} Days`;
  document.getElementById("hours").textContent = `${hours} Hours`;
  document.getElementById("minutes").textContent = `${minutes} Minutes`;
  document.getElementById("seconds").textContent = `${seconds} Seconds`;
}

// Ku socodsii function-ka markii bogga la furayo
setInterval(updateTimeRemaining, 1000);
