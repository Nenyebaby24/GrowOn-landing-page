// Mobile nav toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close mobile nav on link click
    function closeMenu() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }

    // Scroll to offer section
    function scrollToOffer() {
      document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }

    // Toggle FAQ answers
    function toggleAnswer(index) {
      const answers = document.querySelectorAll('.faq-answer');
      const answer = answers[index];
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    }

    // Modal popup
    function openModal() {
      document.getElementById("discountModal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("discountModal").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("discountModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    // Form validation
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return false;
      }

      alert("Thank you! Your message has been received.");
      document.getElementById("contactForm").reset();
      return false;
    }