import React, { useEffect, useState } from "react";

const InputSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme === "dark";
	});

	const svgSun = (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-brightness-high-fill ms-md-3 d-md-block d-none" viewBox="0 0 16 16">
			<path
				d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414
			a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
			/>
		</svg>
	);
	const svgMoon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-moon-fill ms-md-3 d-md-block d-none" viewBox="0 0 16 16">
			<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
		</svg>
	);

	useEffect(() => {
		const checboxSwitch = document.getElementById("flexSwitchCheckDefault") as HTMLInputElement;
		const nameMode = document.getElementById("nameMode") as HTMLLabelElement;
		const cards = document.querySelectorAll(".card");
		const main = document.getElementsByTagName("main")[0];
		const textsAndLabels = document.querySelectorAll("label, p, h1, h2, h3, h4, h5, h6, a");

		const applyTheme = (darkMode: boolean) => {
			if (darkMode) {
				nameMode.innerHTML = "Dark Mode";
				nameMode.classList.add("text-light");
				main.classList.add("bg-dark");
				cards.forEach((element) => {
					element.classList.add("bg-secondary");
				});
				textsAndLabels.forEach((element) => {
					element.classList.add("text-white");
				});
			} else {
				nameMode.textContent = "Light Mode";
				nameMode.classList.remove("text-light");
				main.classList.remove("bg-dark");
				cards.forEach((element) => {
					element.classList.remove("bg-secondary");
				});
				textsAndLabels.forEach((element) => {
					element.classList.remove("text-white");
				});
			}
		};

		applyTheme(isDarkMode);

		const changeTheme = () => {
			const newMode = checboxSwitch.checked;
			setIsDarkMode(newMode);
			localStorage.setItem("theme", newMode ? "dark" : "light");
			applyTheme(newMode);
		};

		checboxSwitch.addEventListener("change", changeTheme);
	}, [isDarkMode]);

	return (
		<div className="col form-check form-switch d-flex justify-content-start align-items-center">
			<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={isDarkMode} />
			<label className="form-check-label fs-5 ms-3 d-flex align-items-center" htmlFor="flexSwitchCheckDefault" id="nameMode"></label>
			{isDarkMode ? svgMoon : svgSun}
		</div>
	);
};

export default InputSwitch;
