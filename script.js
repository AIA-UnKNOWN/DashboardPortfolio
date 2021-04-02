(function() {
	
	const root = document.querySelector(".root");

	const innerHTMLforSkills = `
	<p class="title">Skills</p>
	<div class="skills">

		<div class="skill">
			<span class="language">HTML</span>
			<span class="progress">
				<span class="html"></span>
			</span>
		</div>

		<div class="skill">
			<span class="language">CSS</span>
			<span class="progress">
				<span class="css"></span>
			</span>
		</div>

		<div class="skill">
			<span class="language">Javascript</span>
			<span class="progress">
				<span class="javascript"></span>
			</span>
		</div>

		<div class="skill">
			<span class="language">React</span>
			<span class="progress">
				<span class="react"></span>
			</span>
		</div>

		<div class="skill">
			<span class="language">Git</span>
			<span class="progress">
				<span class="git"></span>
			</span>
		</div>
	</div>`;
	const innerHTMLforProjects = `for Projects`;
	const innerHTMMLforContact = `for Contact`;

	document.querySelector('button[id="skills"]').addEventListener("click", function() {
		root.innerHTML = innerHTMLforSkills;
	});

	document.querySelector('button[id="projects"]').addEventListener("click", function() {
		root.innerHTML = innerHTMLforProjects;
	});

	document.querySelector('button[id="contact"]').addEventListener("click", function() {
		root.innerHTML = innerHTMMLforContact;
	});

})();