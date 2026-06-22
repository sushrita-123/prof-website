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
