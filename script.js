
const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");
const navLinks = document.querySelectorAll(".nav-links a");
const inPageLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

for (const link of inPageLinks) {
	link.addEventListener("click", (event) => {
		const targetId = link.getAttribute("href");
		const target = document.querySelector(targetId);

		if (!target) {
			return;
		}

		event.preventDefault();
		target.scrollIntoView({ behavior: "smooth", block: "start" });
		history.replaceState(null, "", targetId);
	});
}

for (const link of navLinks) {
	link.addEventListener("mouseover", () => {
		navLinks.forEach((l) => l.classList.remove("active"));
		link.classList.add("active");
	});
}

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

