const homePoints = document.getElementById("home-points");
const guestPoints = document.getElementById("guest-points");

homePoints.textContent = 0;
guestPoints.textContent = 0;

let homeTotalPoints = 0;
let guestTotalPoints = 0;

function incrementBy1(value) {
  if (value === "home") {
    homeTotalPoints += 1;
    homePoints.textContent = homeTotalPoints;
  } else {
    guestTotalPoints += 1;
    guestPoints.textContent = guestTotalPoints;
  }
}

function incrementBy2(value) {
  if (value === "home") {
    homeTotalPoints += 2;
    homePoints.textContent = homeTotalPoints;
  } else {
    guestTotalPoints += 2;
    guestPoints.textContent = guestTotalPoints;
  }
}

function incrementBy3(value) {
  if (value === "home") {
    homeTotalPoints += 3;
    homePoints.textContent = homeTotalPoints;
  } else {
    guestTotalPoints += 3;
    guestPoints.textContent = guestTotalPoints;
  }
}

function reset() {
  homeTotalPoints = 0;
  guestTotalPoints = 0;

  homePoints.textContent = homeTotalPoints;
  guestPoints.textContent = guestTotalPoints;
}
