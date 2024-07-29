import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import Authorization from "./Authorization";

export default function Header({ toggleUserRegForm, toggleUserLoginForm }) {
	return (
		<header className="Header">
			<Link to="/">
				<span>
					<img className="Logo" src="/images/logo.png" alt="Logo" />
				</span>
			</Link>
			<Navigation />
			<Authorization
				toggleUserRegForm={toggleUserRegForm}
				toggleUserLoginForm={toggleUserLoginForm}
			/>
		</header>
	);
}
