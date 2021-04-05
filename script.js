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
	const innerHTMLforProjects = `
	<p class="title">Projects</p>
	<div class="projects-wrapper">
		<div class="projects">
			
			<div class="project">
				<div class="thumbnail">
					<img src="https://www.probytes.net/wp-content/uploads/2018/02/25-Stunning-website-designs-of-2018-that-will-blow-you-away-1.jpg" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>
			<div class="project">
				<div class="thumbnail">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyv9wYEw5S83pzpC2oN_opKsZXRalZmUZdA&usqp=CAU" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>
			<div class="project">
				<div class="thumbnail">
					<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOe13gSGcDYolLUNkgsjU-HQ9ia9l80unoA&usqp=CAU" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>
			<div class="project">
				<div class="thumbnail">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZibkR-07bWlTIGpSWBFBHgFlMfPYQjTnROQ&usqp=CAU" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>
			<div class="project">
				<div class="thumbnail">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-szsKCskAAz5mDL6nwvR6g0oqfJW8ANSyQ&usqp=CAU" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>
			<div class="project">
				<div class="thumbnail">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBac-YOdXG8M1mM91SqOdYSQLXBcdIqe3Now&usqp=CAU" alt="">
				</div>
				<div class="info">
					<p class="title">Project Title</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque repellat saepe at. Aliquam obcaecati nulla dignissimos nesciunt cum distinctio.</p>
					<a href="">Go to Link</a>
				</div>
			</div>

		</div>
	</div>`;
	const innerHTMMLforContact = `
	<p class="title">Contact</p>
	<div class="contact">
		<div class="contact-container">
			<!-- Email illustraor -->
			<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITBhITEhIQEBMSGRgTFRUVDQ8QFhUWGBcWFxYVGhsYHiggGBsmGxgWITEhJTUvLi8uGSAzODMtNyktLisBCgoKDg0OGxAQGismICYxLjAuMDItLi0tMzErLS0tLzUwMi81LzUwMDUrLS0wNzg2LS04NjMtLTAuLTUtNTctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAgYHAwUEAQj/xABKEAABAwIACAYNCQgCAwAAAAABAAIRAwQFBiExQVFh0QcSFlJxkRciJVNygZKhorGywcITFCYyVHOCo/AjJDNCQ2LS4TWDNpPx/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAQFBgMBAgf/xAA7EQACAAQBBwkFCAMBAAAAAAAAAQIDBBFRBSExQZGhsRMUFTRhcYHB0RIkM1LwFiMyU3Ky0uEiQqKC/9oADAMBAAIRAxEAPwDcUREAREQBFCo8NYS4hoGUkkABVvCOPdhSMfLfKnVSaag8r6vnXWVJmTXaXC33I+YooYVeJ2LOizq54VKI/h21V3h1WU/Vxl8L+FWpOS0YOm4c74ApsOSKx/6b4fU4uqlLXufoamiyd3CnX0W9Hy6hX52U7n7PR8qpvX2sjVeC2o853Kx3M1lFk3ZTufs9Hyqm9Oync/Z6PlVN696Fq8FtQ53Kx3Gsosm7Kdz9no+VU3p2U7n7PR8qpvToWrwW1DncrHcayiybsp3P2ej5VTenZTufs9Hyqm9OhavBbUOdysdxrKLJuync/Z6PlVN6dlO5+z0fKqb06Fq8FtQ53Kx3Gsosm7Kdz9no+VU3r9bwqXGm3o+XUC86Fq8FtQ53Kx3GsIsqZwq1dNrTPRWePhK+y34VWf1LV7fBrtf62tXxFkisX+n/AFD6nqqpWO5+hpKKn2HCLY1CA51SiT3ykY62SB41Z7O7p1aAfTeyow5nMcHDrChzqebJ+JC14HWCZDH+F3PpREXE+wiIgCIiAIiIAqxjXjdRsqfFj5WuRLaYMRqc8/yjznzpjrjILOwHEh1epIpg5eKNNQjUNWk+NYvXqOfWc97i9zjxnOJkknOSrnJuTOX+9m/h1LH+iFVVXsf4w6eB9+G8P3N3VmtUJGimO1Y3ob7zJ2ry4U4SFqYIYYIVDCrLBaCrcbbu9JCEhThIX0eXIQkKcJCC5CEhThIQXIQkKcJCC5CEhThIQXIQkKcJCC5CEhThIQXIQkKcJCC5CF9WDcI1re549Co+m7W05DscDkcNhXCEheNJpprMx7WtGtYn49MuXto1w2lXORpGRlQ6hP1XbDn0ald1/N0LWOD3Gk16Hzeu6azBLXE5ajBr1uGnWMutZnKeS4ZcLnSVm1rDtXZw7tFnTVftv2I9Opl5REVETwiIgC5VqobSc5xAa0FxJzAASSuqq/CJefJ4r1IyGoW0/ETLvRDh410kynNmQy1rdj4mRqCFxPUjKsYcKuusL1Kzphxhg5rB9VvVlO0ledClCQt5ClClDCsy0GdcTbuyMJClCQvbnlyMJClCQlxcjCQpQkJcXIwkKUJCXFyMJClCQlxcjCQpQkJcXIwkKUJCXFyMJClCQlxcjCQpQkJcXIwkKUJCXFyMLvZXT6V4yrTMPpuDmnaNB2HMdhK5QkI86sxdm/4Kvm18HU6zfq1Gh0ajpHSDI8S+1UfgqvONgWpSP9J8jY14n2g/rV4WGqpPIzopeD3aVuNDJmcpLUWP094REUc6hZ/ws1v3O3ZznPf5LQPiWgLNeFd375bDU156y3crDJSvVw+PBkSudpEXhxRQISF0hIWvKC5zhIXSEhBc5wkLpCQguc4SF0hIQXOcJC6QkILnOEhdISEFznCQukJCC5zhIXSEhBc5wkLpCQguc4SF0hIQXOcJC6QkILnOEhdISEFy68FFWMLV289nG8lwHxLUFk3BoYxm6WOHqPuWsrKZYXvN8UvQvcnu8nxYREVWTQsz4VP+ToeAfa/0tMWacKX/ACtHwPiKssk9ZXc+BByj8B+HEpMJC/YSFqjPe0fkL8Ay6lKFaeD6xp1r+tTqNDmOpEEHwmQRqI1rnOmqVLcbWZHWTBysagTtc/bTEKrVt21Kde3exwkOBq5fR8y+jsb1+/UeqpuXajVq4KwrxHcara1TIOr+4aA4DONI82g21wypbtfTcHMcJaRmIVJVV1TKaihiTgeh2Wx4MtZFLTzLwuFqJaVd7V2Gcdjev36j1VNydjev36j1VNy05FF6XqcVsRI6PkYPazMexvX79R6qm5OxvX79R6qm5acidL1OK2IdHyMHtZmPY3r9+o9VTcnY3r9+o9VTctOROl6nFbEOj5GD2szHsb1+/UeqpuTsb1+/UeqpuWnInS9TitiHR8jB7WZj2N6/fqPVU3IeDivH8aj1VB7lpyJ0vU4rYh0fIwe1mX9ji477Q66v+Kdji477Q66v+K1BF70vU9mwdHyMHtZl/Y3uO+0Our/ivx/B3XDSTWtwBlJJqAAa/qrTnOAaScgGUk5IVEwthGrhDCPzW2PFoN/i1dDhOfwdQ0nYu9PlCqnN50oVnbtmS+tC1nGdSU8tLM23oV3d/Wt6jPq9INrOAcKgBgOaHcV20TlhRhXbH7BlO3wdaUqQhrflJOlxhkucdJKpUK7ppynS1GtDvudvIqZ8typjgfZvSZ+QkL9hIXc4+0WPg7/8pp+C/wBkrXVkfB8PpVS6H+w5a4sxln46/SuLL7JjvJfe+CCIiqSxCzbhQHdSj4HvctJWccJw7qUfu/e5WWSesrufAgZS6u/DiilQkKcJC1FzN3IQrhwYDuzV+7PtsVShW/gzHdir938bFErn7tH3EuhfvEH1qL9hKwp17N1Kq3jNd1g6HA6CFQ7WvVwXhT5OpNS2qGQQOtzdRGSRp6lpC+HCuDadxZOpVRLTmOlp0OB0ELN01Spd4JivA9K812l/USHHaOB2jWh+T7DvbXDalBr2ODmuEtIMghd1nNjdVcGYS+RrS+3eZa4DRzhqOsf6WgUKzX0mvY4Oa4SCDIIOlfNTTOS007wvQ8f7PaeepqaatEtKw/o7IiKMSAiIgCIiAIiIAvzQv1UXDeFal7e/NLT6n9WplgjMcvN9rRkz96eninRWWZLS9SRxnTlKhu87eZLW39bCGGcKVb6/+a2hil/Vq5YI0/h2aehWzAuCqdtZCnTGTO5xzudpcVHAmCadtZCnTG1zj9Z7tZ3aF6a6VFRDElKlZoFtbxfbwR8SJLT5SZniexdi+s5QuFMfs7XpqfAqBC0DhRH7O26anwKhQtBk3qsHjxZRZRfvMXh+1EISFOEhT7kK572IA+lNLof7DlrayfEIfSml0P8AYctYWbyx8dfp82aHJXwH+p8EERFUlkFnPCaO6dLwPiK0ZZ3wlDunS8D4irHJfWF3PgV+VOrPw4lOhfkLpCQtNczFyEK2cGo7sVfu/iYqtCtnBuO69X7v4mKLWv3ePuJdA/eYO/yZoyIiyRrDz8L4Lp3FmadQSM4IztdocNqpODb6rg3CJoV5dQcZaQDEc9vvC0ZebhnBVO5szTqDa1wztdrG7SpdNUqBOXMV4HpWHaiJU07iamS3aNaHisH2H20arX0g5pDmuEggyCDpC6rO8FYQq4Owgbe4k0SZaRJABP12/wBuse/PoFKoHUw5pDmkSCDIIOYhfFRTuS1nvC9D1P8As+qaoU5PNaJaVrT9MDoiIo5JCIiAIipOMOGX3F180tO242So8HJGkA6GjTrzDb2kSIp0VlmS0vUl2nGfPhkw3enUtbeCIYewzUurz5paZWnJUqAwIGcToYNJ05htsmAsDU7ay4jMpOVziMrjr2DUNCjgDAlO1tOK3tnGC98QXH3AaAvXXWonwuHkZWaBbW8X5LUcpEiL2uVm/jexLBeb1hERRCWUXhPHaW3TU+BUOFfeE36lt01PgVGharJvVofHizLZSfvUXh+1HOEhdISFNuQbnuYiD6T0uh/sOWrLK8Rh9JqXQ/2HLVFncr/GX6VxZo8kfAf6nwhCIiqi0Cz3hIHdKl4B9orQln/CMO6VLwD7RVhkvrC7nwK7KvVYu9cSnwkKcJxVpDK3IQrXwcjutU+7+Jqq/FVq4Ox3VqeB8TVGrerx9xMye/eYO98GaGiIsoa8LnUeAwkkADKSTAAGclKjwGEkgAZSSYAGklUjCd/Vv735vby2iMr3wQHDWdmoafV3kSHNbz2S0vAj1FQpKWa8T0LW39aXqOWF7p+EMJNo27R8lTMmo5viJJzhuzOfVDAuFatjfG3uAfk5yZzxJ/mGtp1dOmQrpgnBlO3tAymNpJzuOsr58PYFZc2kHtXtysfGUHUdbTpCmQ1cn4Lh+733x+v6IUVHO+Movvf+bfL3fXaenTeHMBBBBEggyCDmIXRZ1gzC9ewrmhXYXUxonKP7mnNxTq9WVW2yxhtarJbWaNjjxCOv3KPPopkt3S9qHU1nJFPXSpuZv2YtcLzP+z2EXl3OHrVjJdXp9DX8c9TZVUwzjS+sfkbZrgH9rMdu/YAPqjbnXkmjnTXZKyxeZH1PrZMlf5RXeCzvYdsasYHPq/NraXOceI5wyk/2N95XxWtKvg27a94a+nVADyMo18WdBGWNCseK+Lrbalx3w6s4ZTnDRqHvK9u6tmVbcse0Oa4QQf1kKkurlS/uYIbwa8Yu3w1EWGknTfvo4rTP9Vqh7O2+v6RGyvGVbZtSm4Oa7MfWDqOxfUqA5tXBmEZE1Leof0NQcB1gdV2s7xlW2D2EOa7MfcdR2KLUU/J2jgd4Xofk+0l01Tyl4I1aNaV5rFM+lERRiUUjhMHaW/8A2fAqNCvXCUO0t/8As+BUiFp8ndWh8eLMnlR+9R+H7UQhIU+KkKaQLnt4jj6S0uh/sFakswxIH0lp9D/YK09Z/K3xl3ebNLkZ/cP9T4QhERVZbBUHhEHdGl4HxFX5ULhBHdCl4HvKn5M6wvHgVuV+qxd64lShIU4SFpDJXIQrTwejurU8D4mqswrRwfjupU8D4gotb1ePuJuTn71B3+TL+oPeAwkkADKSTAA1o94DCSQAMpJMADWqXhG+q31783t5bRGV7yCA4azs2afVnZEhzW89ktL1I1NTUwyUs14nmSWlv0xeojhG/q31783t5bRGV74MOGs7Nmn1WrBWDadvaCnTG0k53HWUwVg2nb2gZTG0k5ydZX3r7nz1ElLl5oFv7WfFNTxQtzZrvG9OCWC7OOsIiKKTD48IYPpVqPFqsDxonIRtBGUeJVq6xEpk/s6rmDUabXecQrii7yqmbK/BFbhseYjzqSTO+JCnx2rOUyhiI0O7euXjUKQHnJKsOC8D0aDP2TACc7ieM4+M+oZF6SL2bVTpqtHE7bFuPJNHIku8uBLe9ruERFHJJ813bMqW5Y9oc12cH9ZDtVLLauDcISJqW9Q/rYHAeI+q+r5ru1ZUt3MeA5rshHv2HapNPUcneGJXhelea7SLU03K2igdo1ofk8UxZ3bKtuHsIc12Y+46jsX0qhxVwbhDJNS3qH9dDgPEfVc7O7ZUtw9jg5rsx9x1HYvKin5O0ULvC9D9e08pqrlbwRq0cOleaxTKpwjjtLf8fwKkwrvwijtLf8fwKlwr7J/VofHizN5Vfvcfh+1EISFOEhTSvue1iUPpHT6H+wVpqzTEsfSKn0P9grS1n8q/GXd5s1GRerv9T4QhERVhbhUXhAHdCl4PvKvSo2Pw/faPgn1qdk1/frufAq8sdUi71xRVISFOEhaIyFyEKzYhuAwhVJIADJJJgASMqrkKTXEAgEgOyGNIkGDrzDIuU6XykDg0XO9NUchNhmWvbV4MtOEb6pe3nyFvIojK9xkAjnHZs/QtGC8HU6FqGUxtJOdx1lVzBuMFrRtgynTqRnkhuU686+vllQ5lT0d6p58mdElBLgahXdn7WaOmn00Dc2bNhcb16ksIezjpLMirPLKhzKno705ZUOZU9HeovMqj5HuJvSNL+YizIqzyyocyp6O9OWVDmVPR3pzKo+R7h0jS/mIsyKs8sqHMqejvTllQ5lT0d6cyqPke4dI0v5iLMirPLKhzKno705ZUOZU9HenMqj5HuHSNL+YizIqzyyocyp6O9OWVDmVPR3pzKo+R7h0jS/mIsyKs8sqHMqejvTllQ5lT0d6cyqPke4dI0v5iPdu7VlS3LHtDmuyEH17DtVNirg6/01KFQ/r8QHX6vV5ZUOZU9HeuF1jRbVLdzH03ua7OO16xlyHapNPKny7wxwXhelenaQ6qfSzbRwTUo1ofk8Uz5Md7llWztn0zxmu48HyZB1FVOF3rRxyGk8SSWgxPSQNkdS5wrenlqVLUC7d7uZyrqHPmuY1ndtGjMrZtl/EhCQpwkLuR7nsYmj6RU+h/slaSs5xNH0gZ+P2XLRlQZU+Mu7zZq8h9Wf6nwhCIiri4CpePrf3midjh5xvV0VUx6pTRpO5vH9TT7lLoXafD48GVuV03Rx27HsiRTYSFKEhaK5ibkYSFKEhLi5GEhShIS4uRhIUoSEuLkYSFKEhLi5GEhShIS4uRhIUoSEuLkYSFKEhLi5GEhShIS4uRhIUoSEuLkYSFKEhLi5GEhShIS4ue3iW3u10NJ93vWgKkYjM/f6h5ojzj/au6oMou8/wRssiL3RPFvjbyCIiglsF4mNdDjYFeRnbDvOvbXKqwOplrsocCCNhyFfcuP2I1FgcaiVy0qKXimtqMthIX03toaV26m7O0x0jX48hXKFp1Emro/OorwtwxZmtPgc4SF0hIXp5c5wkLpCQguc4SF0hIQXOcJC6QkILnOEhdISEFznCQukJCC5zhIXSEhBc5wkLpCQguc4SF0hIQXOcJC6QkILnOF+wpwjWEvAAkkgAaycgCXFy2YkW8WtR/PIA/CP8AfmVnXxYLtBSsWUx/KMp1k5SetfaszPmcpNii+sD9CoZDkU8Et6Us/e8733CIi5EoIiIDwcY8E/K0eO0ftGDNzhq8SpkLUV4GGcBCpL6cNfnP92oqxo6tQL2I9Gp4fX1m0Z3K+SYpz5aSv8tax7V28e/M6bCQu1ai5lUte3iuGiIP/wA2qEK3vcyLunZkISFOEhLi5CEhThIQXIQkKcJCXFyEJCnCQlxchCQpwkJcXIQkKcJCXFyEJCnCQguQhIU4SEuLkISFOFJjCXgAEk5hBM9EJcHKFaMV8ERFZ4y/yA+d366dS/cD4uwQ+sMucMzx0nSrQqusrE1ycvxfoanJGSIoYlPnq1s8MOvvfkvF5wiIqs04REQBERAEREB81xasfTh7Q4bc/XnC8evivTLe0c6n4g5WFF0gnTIPwtr62EWooqeo+LAn269qzlSdirUH1ajT0iPcuTsW6+w/jHvVyRSFXTuzYV7yBRPQol/6fncpBxduOYP/AGN3pyeuOZ+azerui95/NwW/1Of2dpPmj2r+JSOT1xzPzWb05PXHM/NZvV3ROfzcFv8AUfZyk+aPav4lI5PXHM/NZvTk9ccz81m9XdE5/NwW/wBR9nKT5o9q/iUjk9ccz81m9OT1xzPzWb1d0Tn83Bb/AFH2cpPmj2r+JSOT1xzPzWb05PXHM/NZvV3ROfzcFv8AUfZyk+aPav4lI5PXHM/NZvX6MXrjmfmM3q7InP5uC3+o+ztJ80e1fxKYMW6+wfjC7NxWqH+o1vRJVtReOundmw6Q5AolpUT/APT8rFdt8VmAdu8v2BoYPeV69pZU6bYY3i+MknpJX1ouEc+ZH+J3J9PQU1PnlQJPHS9rz7wiIuRLCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/2Q==" alt="email-icon">
			<!-- Contact Form -->
			<form>
				<p class="get-in-touch">Get in touch</p>
				<div class="name-input">
					<input type="text" name="name" id="name" placeholder="Name">
					<i class="fas fa-user"></i>
				</div>
				<div class="email-input">
					<input type="email" name="email" id="email" placeholder="Email">
					<i class="fas fa-envelope"></i>
				</div>
				<textarea name="message" id="message-area" cols="30" rows="10" placeholder="Message"></textarea>
				<input type="submit" value="Send">
			</form>
		</div>
	</div>`;

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