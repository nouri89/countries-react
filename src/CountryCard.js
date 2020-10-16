import React from "react";

const CountryCard = (props ) => {
	
	function handleCountryClick() {
		props.handleCountryClick(props.name);
	 
 }
	
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
				color: "black",
				cursor: "pointer",
			}}
			onClick={handleCountryClick}
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
			<div className="card-body" style={{ padding: " 0 0" }}>
				<h4 style={{ paddingTop: "8%", fontWeight: "bold" }}>{props.name}</h4>
				<div>
					<span>Population :</span> {countryPopulation}
				</div>
				<div>
					<span>Region :</span> {props.region}
				</div>

				<div>
					<span>Capital :</span> {props.capital}
				</div>
			</div>
		</div>
	);
};

export default CountryCard;
