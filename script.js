const loader = {
	gallery: document.querySelector(".loader-gallery"),
	galleryItem: document.querySelectorAll(".loader-gallery-fig"),
	circleTop: document.querySelector(".loader-circle-top"),
	circleBottom: document.querySelector(".loader-circle-bottom"),
};
const hero = {
	headingTitle: document.querySelector(".hero-heading-title"),
	headingTitleChars: document.querySelectorAll(".hero-heading-title > h1"),
	subheadingTitle: document.querySelector(".hero-subheading-title"),
	subheadingTitleChars: document.querySelectorAll(
		".hero-subheading-title > h2"
	),
};

//? ===== Initial Animation =====
const init = () => {
	gsap.set(loader.gallery, { scale: 0.75 });
	gsap.set([loader.circleBottom, loader.circleTop], { yPercent: 0 });
	gsap.set([hero.headingTitle, hero.subheadingTitle], {
		yPercent: -250,
		rotate: -15,
	});
	gsap.set([hero.headingTitleChars, hero.subheadingTitleChars], {
		yPercent: -100,
	});

	setTimeout(() => {
		aniLoader();
		aniHero();
	}, 1000);
};

//? ===== Animate Loader =====
const aniLoader = () => {
	const galleryItemCenter = loader.galleryItem.length / 2 - 1;
	const galleryItems = loader.galleryItem[galleryItemCenter.toFixed(0)];

	gsap.timeline({ defaults: { duration: 2, ease: "expo.inOut" } })
		.to(loader.gallery, {
			scale: 1,
		})
		.to(
			galleryItems,
			{
				width: "100vw",
			},
			0
		)
		.to(
			loader.circleTop,
			{
				yPercent: -100,
			},
			0.2
		)
		.to(
			loader.circleBottom,
			{
				yPercent: 100,
			},
			0.2
		);
};

//? ===== Animate hero =====
const aniHero = () => {
	gsap.timeline({ defaults: { duration: 3, ease: "expo.inOut" } })
		.to([hero.headingTitle, hero.subheadingTitle], {
			yPercent: 0,
			rotate: 0,
		})
		.to(
			[hero.headingTitleChars, hero.subheadingTitleChars],
			{
				yPercent: 0,
			},
			0
		);
};

window.addEventListener("DOMContentLoaded", init);
