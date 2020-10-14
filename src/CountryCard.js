import React from "react";



const CountryCard = (props) => {
	const countryPopulation = props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return (
		<div
			className="col-md-2 rounded "
			style={{
				backgroundColor: "white",
				margin: "2%",
				marginLeft: "6%",
				color: "black"
			}}
		>
			<img
				src={props.flag}
				style={{
					maxWidth: "100%",
					maxHeight: "100%",
					borderRadius: "5px",
					border: "0.5px solid gray",
				}}
				alt={`flag of ${props.name}`}
			></img>
			<div
				className="card-body"
				style={{  padding: " 0 0" }}
			>
				<h5 style={{ padding: "10%", fontWeight:"bold" }}>
					{props.name}
				</h5>
				<div>Population : {countryPopulation}</div>
				<div>Region : {props.region}</div>

				<div>Capital : {props.capital}</div>
			</div>
		</div>
	);
};

export default CountryCard;

