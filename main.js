// Tab navigation functionality
function showTab(button, sectionId) {
  // Remove active class from all tab buttons and section contents
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.section-content').forEach(content => content.classList.remove('active'));

  // Add active class to clicked button and corresponding content
  button.classList.add('active');
  document.getElementById(sectionId).classList.add('active');
}

function scrollToYear(year) {
  const target = document.querySelector(`.publication-card[data-year="${year}"]`);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  document.querySelectorAll(".year-button").forEach(button => {
    button.classList.toggle(
      "active",
      button.textContent.trim() === String(year)
    );
  });
}

function rotateProfilePhoto() {
  const hint = document.querySelector('.profile-photo-hint');
  hint.hidden = false;

  if (performance.getEntriesByType('navigation')[0]?.type !== 'reload') {
    return;
  }

  const photo = document.querySelector('.profile-image');
  const photos = [
    ['1.png', 'Sushrita Rakshit at a restaurant with sushi'],
    ['2.png', 'Sushrita Rakshit outside a coffee shop'],
    ['3.png', 'Sushrita Rakshit overlooking a city at night'],
    ['4.png', 'Sushrita Rakshit sitting by the sea at dusk']
  ];
  const storageKey = 'last-roulette-photo';
  let previousPhoto;

  try {
    previousPhoto = window.sessionStorage.getItem(storageKey);
  } catch {
    // Random selection still works when session storage is unavailable.
  }

  const choices = photos.filter(([filename]) => filename !== previousPhoto);
  const [filename, alt] = choices[Math.floor(Math.random() * choices.length)];
  photo.alt = alt;
  photo.src = `pic-roulette/${filename}`;

  try {
    window.sessionStorage.setItem(storageKey, filename);
  } catch {
    // The selected photo is already displayed.
  }
}

rotateProfilePhoto();
