(function() {
	
	const root = document.querySelector(".root");

	const title = document.querySelector('.title');
	const skills = document.querySelector('.skills');
	const projects = document.querySelector('.projects-wrapper');
	const contact = document.querySelector('.contact');

	// Default display
	title.textContent = 'Skills';
	skills.style.display = 'block';
	skills.style.display = 'flex';
	projects.style.display = "none";
	contact.style.display = "none";

	document.querySelector('button[id="skills"]').addEventListener("click", function() {
		title.textContent = 'Skills';
		skills.style.display = 'block';
		skills.style.display = 'flex';
		projects.style.display = "none";
		contact.style.display = "none";
	});

	document.querySelector('button[id="projects"]').addEventListener("click", function() {
		title.textContent = 'Projects';
		skills.style.display = 'none';
		projects.style.display = 'block';
		contact.style.display = 'none';
	});

	document.querySelector('button[id="contact"]').addEventListener("click", function() {
		title.textContent = 'Contact';
		skills.style.display = 'none';
		projects.style.display = 'none';
		contact.style.display = 'block';
		contact.style.display = 'flex';
	});


	// Using an emailjs api
	emailjs.init('user_aW9POqcWHaoSnuxIHFPJr');

	const contactForm = document.querySelector('.contact form');

	window.onload = function() {
		contactForm.addEventListener('submit', function(event) {
				event.preventDefault();
				emailjs.sendForm('contact_service', 'contact_form', this)
					.then(function() {
							console.log('Sent!');
					}, function(error) {
							console.log('Failed to sent!', error);
					});
				// Clears the user inputs
				document.querySelector('input#user-name').value = '';
				document.querySelector('input#user-email').value = '';
				document.querySelector('textarea#message-area').value = '';
		});
	}

})();