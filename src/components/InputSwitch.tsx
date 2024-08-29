import React, { useEffect } from "react";

const InputSwitch = () => {
	useEffect(() => {
		const checboxSwitch = document.getElementById("flexSwitchCheckDefault") as HTMLInputElement;
		const nameMode = document.getElementById("nameMode") as HTMLLabelElement;
		checboxSwitch?.addEventListener("change", () => {
			if (checboxSwitch.checked) {
				const elements = document.querySelectorAll('[data-bs-theme="light"]');
				elements.forEach((element) => {
					element.setAttribute("data-bs-theme", "dark");
				});
				nameMode.textContent = "Dark Mode";
				nameMode.classList.add("text-light");
			} else {
				// Change all elements with data-bs-theme="dark" to data-bs-theme="light"
				const elements = document.querySelectorAll('[data-bs-theme="dark"]');
				elements.forEach((element) => {
					element.setAttribute("data-bs-theme", "light");
				});
				nameMode.textContent = "Light Mode";
				nameMode.classList.remove("text-light");
			}
		});

		return () => {
			checboxSwitch?.removeEventListener("change", () => {});
		};
	}, []);

	return (
		<div className="form-check form-switch">
			<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
			<label className="form-check-label ms-1" htmlFor="flexSwitchCheckDefault" id="nameMode">
				Light Mode
			</label>
		</div>
	);
};

export default InputSwitch;
