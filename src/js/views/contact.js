import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/Card";
import { Link } from "react-router-dom";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="add-new-btn">
				<Link to="/add">
					<button className="btn btn-success">Add a New Contact</button>
				</Link>
			</div>
			<div className="container mt-3">
				<Card />
			</div>
		</>
	)
};
