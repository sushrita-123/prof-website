// Tab navigation functionality
function showTab(button, sectionId) {
  // Remove active class from all tab buttons and section contents
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.section-content').forEach(content => content.classList.remove('active'));

  // Add active class to clicked button and corresponding content
  button.classList.add('active');
  document.getElementById(sectionId).classList.add('active');
}

// Year navigation functionality for publications
function scrollToYear(year) {
  // Find the first publication from the selected year
  const publications = document.querySelectorAll('.publication-card');
  for (let pub of publications) {
    if (parseInt(pub.dataset.year) === year) {
      // Scroll the publications list to the publication
      const publicationsList = document.querySelector('.publications-list');
      if (publicationsList) {
        const pubTop = pub.offsetTop;
        const listTop = publicationsList.offsetTop;
        const scrollTop = pubTop - listTop - 20; // 20px offset for better visibility
        publicationsList.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
      break;
    }
  }

  // Update active year button
  document.querySelectorAll('.year-button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}