import { useEffect } from "react";

const InputSwitch = () => {
	useEffect(() => {
		const checboxSwitch = document.getElementById("flexSwitchCheckDefault") as HTMLInputElement;
		const nameMode = document.getElementById("nameMode") as HTMLLabelElement;
		const cards = document.querySelectorAll(".card");
		checboxSwitch.addEventListener("change", () => {
			if (checboxSwitch.checked) {
				const elements_data_theme = document.querySelectorAll('[data-bs-theme="light"]');
				elements_data_theme.forEach((element) => {
					element.setAttribute("data-bs-theme", "dark");
				});
				nameMode.textContent = "Dark Mode";
				nameMode.classList.add("text-light");
				document.getElementsByTagName("main")[0].classList.add("bg-dark");
				cards.forEach((element) => {
					element.classList.add("bg-secondary");
					element.childNodes.forEach((child) => {
						(child as HTMLElement).classList.add("text-white");
					});
				});
			} else {
				const elements_data_theme = document.querySelectorAll('[data-bs-theme="dark"]');
				elements_data_theme.forEach((element) => {
					element.setAttribute("data-bs-theme", "light");
				});
				nameMode.textContent = "Light Mode";
				nameMode.classList.remove("text-light");
				document.getElementsByTagName("main")[0].classList.remove("bg-dark");
				cards.forEach((element) => {
					element.classList.remove("bg-secondary");
					element.childNodes.forEach((child) => {
						(child as HTMLElement).classList.remove("text-white");
					});
				});
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
