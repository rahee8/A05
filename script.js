"use strict";

/* -------------------------------------------------- */
/* DATA */
/* -------------------------------------------------- */

const emergency = {
	icon: `/assets/emergency-light.png`,
	alt: `Emergency Light Icon`,
	title: `National Emergency Number`,
	subtitle: `National Emergency`,
	number: `999`,
	label: `All`,
};

const police = {
	icon: `/assets/police.png`,
	alt: `Police Avatar`,
	title: `Police Helpline Number`,
	subtitle: `Police`,
	number: `999`,
	label: `Police`,
};

const fire = {
	icon: `/assets/fire-service.png`,
	alt: `Fire Service Vehicle`,
	title: `Fire Service Number`,
	subtitle: `Fire Service`,
	number: `999`,
	label: `Fire`,
};

const ambulance = {
	icon: `/assets/ambulance.png`,
	alt: `Ambulance Vehicle`,
	title: `Ambulance Service`,
	subtitle: `Ambulance`,
	number: `1994 - 999999`,
	label: `Health`,
};

const womanChild = {
	icon: emergency.icon,
	alt: emergency.alt,
	title: `Woman & Child Helpline`,
	subtitle: `Woman & Child Helpline`,
	number: `109`,
	label: `Help`,
};

const antiCorruption = {
	icon: emergency.icon,
	alt: emergency.alt,
	title: `Anti-Corruption Helpline`,
	subtitle: `Anti-Corruption`,
	number: `106`,
	label: `Govt.`,
};

const electricity = {
	icon: emergency.icon,
	alt: emergency.alt,
	title: `Electricity Helpline`,
	subtitle: `Electricity Outage`,
	number: `16216`,
	label: `Electricity`,
};

const brac = {
	icon: `/assets/brac.png`,
	alt: `Brac Logo`,
	title: `Brac Helpline`,
	subtitle: `Brac`,
	number: `16445`,
	label: `NGO`,
};

const railway = {
	icon: `/assets/railway.png`,
	alt: `Bangladesh Railway Logo`,
	title: `Bangladesh Railway Helpline`,
	subtitle: `Bangladesh Railway`,
	number: `163`,
	label: `Travel`,
};

const hotlines = [
	emergency,
	police,
	fire,
	ambulance,
	womanChild,
	antiCorruption,
	electricity,
	brac,
	railway,
];

let favCount = 0;
let coins = 100;
let copyCount = 0;

/* -------------------------------------------------- */
/* ELEMENTS */
/* -------------------------------------------------- */

const hotlineContainer = document.querySelector(`.hotline-section`);
const historyDetailsContainer = document.querySelector(
	`.history-details-container`
);

const btnClear = document.querySelector(`.clear-btn`);

const labelFavorite = document.querySelector(`.fav-count`);
const labelCoins = document.querySelector(`.coin-count`);
const labelCopy = document.querySelector(`.copy-count`);

/* -------------------------------------------------- */
/* FUNCTIONS */
/* -------------------------------------------------- */

const displayHotlineNumbers = () => {
	hotlineContainer.innerHTML = ``;

	hotlines.forEach((obj) => {
		const html = `<div class="single-hotl-sec">
						<div class="single-hotl-nav">
							<img
								src=${obj.icon}
								alt=${obj.alt}
								class="sgl-hotl-nav-logo ${obj === police ? `color-change` : ``}"
							/>
							<img
								src="/assets/heart-white.png"
								alt="Heart Icon"
								class="sgl-hotl-nav-hrt-icon"
							/>
						</div>
						<div class="single-hotl-desc">
							<h3 class="sgl-hotl-des-title">${obj.title}</h3>
							<p class="sgl-hotl-des-subtitle">${obj.subtitle}</p>
						</div>
						<div class="single-hotl-num-lbl">
							<h4 class="sgl-hotl-num">${obj.number}</h4>
							<p class="sgl-hotl-lbl">${obj.label}</p>
						</div>
						<div class="single-hotl-btns">
							<button class="copy-btn" data-label=${obj.label}>
								<img
									src="/assets/copy.png"
									alt="Copy Icon"
									class="copy-btn-icon"
								/>
								<div>Copy</div>
							</button>
							<button class="call-btn" data-label=${obj.label}>
								<img
									src="/assets/telephone.png"
									alt="Call Icon"
									class="call-btn-icon"
								/>
								<div>Call</div>
							</button>
						</div>
					</div>`;

		hotlineContainer.insertAdjacentHTML(`beforeend`, html);
	});
};

const displayCallHistory = (label) => {
	const obj = hotlines.find((hotline) => hotline.label === label);

	const time = {
		hours: new Date().getHours(),
		minutes: new Date().getMinutes(),
		seconds: new Date().getSeconds(),
		meridiem: new Date().getHours() > 11 ? `PM` : `AM`,
	};

	const html = `<div class="history-details"><div class="history-name-num">
							<div class="history-name">${obj.title}</div>
							<div class="history-num">${obj.number}</div>
						</div>
                        <div class="history-time">${
													time.hours % 12 !== 0 ? time % 12 : 12
												}:${
		time.minutes < 10 ? `0${time.minutes}` : time.minutes
	}:${time.seconds < 10 ? `0${time.seconds}` : time.seconds} ${
		time.meridiem
	}</div></div>`;

	alert(`📞 Calling ${obj.title} ${obj.number} ...`);

	historyDetailsContainer.insertAdjacentHTML(`beforeend`, html);
};

/* -------------------------------------------------- */
/* EVENT HANDLERS */
/* -------------------------------------------------- */

displayHotlineNumbers();

btnClear.addEventListener(`click`, (e) => {
	e.preventDefault();

	historyDetailsContainer.innerHTML = ``;
});

document.addEventListener(`click`, (e) => {
	e.preventDefault();

	if (e.target.closest(`.call-btn`)) {
		if (coins > 19) {
			coins -= 20;
			labelCoins.textContent = coins;
			displayCallHistory(e.target.closest(`.call-btn`).dataset.label);
		} else {
			alert(`Insufficient Balance!`);
		}
	}

	if (e.target.closest(`.copy-btn`)) {
		const label = e.target.closest(`.copy-btn`).dataset.label;

		const obj = hotlines.find((hotline) => hotline.label === label);

		navigator.clipboard.writeText(obj.number);
		alert(`Copied '${obj.number}'`);

		++copyCount;
		labelCopy.textContent = copyCount;
	}

	if (e.target.closest(`.sgl-hotl-nav-hrt-icon`)) {
		++favCount;
		labelFavorite.textContent = favCount;
	}
});

// alert(`alert`);
//console.log(prompt(`hello`));
