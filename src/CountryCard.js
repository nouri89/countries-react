import React from "react";

//	className="col-md-3 sm-6 border"

/*
<div>
						<h5>Population :</h5> {props.population}
					</div>
					<div>
						<h5>Region :</h5> {props.region}
					</div>
					<div>
						<h>Capital :</h> {props.capital}
					</div>
				</div>
*/
/*	style={{
				backgroundColor: "green",
				width: "25%",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "row",
			}} //"#F3F3F3" }}*/

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

/*
return (
		<div
            className="col-md-3 sm-6 border"
            style={{ backgroundColor: "green" ,width:"100%"}} //"#F3F3F3" }}
        >
                <div className="card">
			        <div className="card-header">
                        <img src={props.flag} style={{width:"100%"}} alt={`flag of ${props.name}`}></img>
                   </div>
			       <div className="card-body">
                        <h2>{props.name} </h2>
                        <div>Population : {props.population}</div>
                        <div>Region : {props.region}</div>
                        <div>Capital : {props.capital}</div>
                  </div>
            </div>  
        </div>
*/
