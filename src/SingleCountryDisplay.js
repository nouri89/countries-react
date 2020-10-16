import React from "react";
import countriesAll from "./countriesAll.json";

const SingleCountryDisplay = (props) => {
	const data = countriesAll;
	const bordersCountries = [];
	props.borders.forEach(border=>bordersCountries.push(data.find(
		(element) => element.alpha3Code === border
	)));

	function handleSingleCountryClick(event) {
			
				props.handleSingleCountryClick(event.target.name);
		
	}
	
	const borderName = bordersCountries.map(element =>  element.name );
	console.log(borderName);

	const countryPopulation = props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return (
		<div>
			<div className="backButtonDiv">
				<button
					type="button"
					class="btn btn-info"
					onClick={props.handleBackButtonClick}
				>
					Back
				</button>
			</div>
			<div className="container">
				<div className="countryImage">
					<img
						src={props.flag}
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							borderRadius: "5px",
							border: "0.5px solid gray",
						}}
						alt={`flag of ${props.name}`}
					/>
				</div>
				<div className="countryInfo">
					<h3
						style={{ marginTop: "30%", marginLeft: "17%", fontWeight: "bold" }}
					>
						{props.name}
					</h3>
					<ul>
						<li>
							<span>Native Name : </span>
							{props.nativeName}
						</li>
						<li>
							<span>Population : </span>
							{countryPopulation}
						</li>
						<li>
							<span>Region :</span> {props.region}
						</li>
						<li>
							<span>Capital :</span> {props.capital}
						</li>

						<li>
							<span>Top Level Domain : </span>
							{props.topLevelDomain}
						</li>
						<li>
							<span>Currency : </span>
							{props.currencies[0].name}
						</li>
						<li>
							<span>Languages : </span>
							{props.languages.map((lang) => lang.name).join(" , ")}
						</li>
					</ul>
					<div className="borderDiv">
						<h5>
							<span>Border countries : </span>
							{borderName.map((element) => (
								<button
									onClick={handleSingleCountryClick}
									type="button"
									class="btn btn-info"
									name={element}
								>
									{element}
								</button>
							))}
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCountryDisplay;
