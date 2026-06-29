
const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");

const heroImages = [
	'url("Images/Background.png")',
	'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80")',
	'url("https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1800&q=80")',
];

if (hero && dots.length) {
	let activeIndex = 0;

	const setSlide = (index) => {
		activeIndex = index % heroImages.length;
		hero.style.setProperty("--hero-image", heroImages[activeIndex]);

		dots.forEach((dot, i) => {
			dot.classList.toggle("active", i === activeIndex);
		});
	};

	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			setSlide(index);
		});
	});

	setInterval(() => {
		setSlide((activeIndex + 1) % heroImages.length);
	}, 3500);
}

