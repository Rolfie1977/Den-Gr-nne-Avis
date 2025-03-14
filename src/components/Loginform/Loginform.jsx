import React, { useState } from "react";
import style from './Loginform.module.scss';

export const Loginform = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	async function logIn(event) {
		//forhindrer form i at blive resettet
		event.preventDefault();
		const body = new URLSearchParams();
		body.append("username", email);
		body.append("password", password);

		try {
			//Fejlhåndtering hvis bruger ikke har udfyldt felterne
			if (!email || !password) {
				setErrorMessage("Begge felter skal udfyldes");
				throw new Error("Felter ikke udfyldt");
			}

			const response = await fetch("http://localhost:4242/login", {
				method: "POST",
				body: body,
			});
			//hvis man får en unauthorized tilbage fra APIet
			if (response.status === 401) {
				setErrorMessage("Forkert email eller password");
				throw new Error("Unauhorized login");
			}
			//Hvis man får en anden fejl som ikke er 401
			if (!response.ok) {
				setErrorMessage("noget gik galt, prøv igen senere!");
				throw new Error(`Status:${response.status}`);
			}

			const result = await response.json();

			setSuccessMessage("Du er nu logget ind");
			setErrorMessage("");
		} catch (error) {
			console.error("API request error", error);
		}
	}

	return (
		<>
			<section className={style.loginStyling}>{successMessage === "" ? (
				<form onSubmit={logIn}>
					<label htmlFor="">
						Email:
						<input
							value={email}
							type="email"
							placeholder="Din email"
							onChange={(event) => setEmail(event.target.value)}
						/>
					</label>
					<label htmlFor="">
						Password:{" "}
						<input
							value={password}
							type="password"
							placeholder="Dit password"
							onChange={(event) => setPassword(event.target.value)}
						/>
					</label>
					<input type="submit" value="Login" />
					<p>{errorMessage}</p>
				</form>
			) : (
				<p>{successMessage}</p>
			)}</section>
		</>
	);
};
