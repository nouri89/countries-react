import React, { useState } from "react";
import data from "./allCountries.json";
import CountryCard from "./CountryCard";
import SearchDiv from "./SearchDiv";
import SingleCountryDisplay from "./SingleCountryDisplay";

const DisplayDiv = () => {
	
	const [singleCountryMode, setSingleCountryMode] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [regionSearch, setRegionSearch] = useState("");
	const [countries, setCountries] = useState([]);
	console.log(countries);

	function handleCountryClick(countryName) {
		
		console.log(countryName)
		setSingleCountryMode(true);
		setCountries(data.find((item) => item.name.common === countryName));
		
	}

	function handelRegionSearchValue(event) {
		setSearchValue(event.target.value);
	}

	function handelRegionSearch(event) {
		setRegionSearch(event.target.value);
	}
	function handleBackButtonClick() {
		setSingleCountryMode(false);
	}

	function handleSingleCountryClick(countryName) {
		console.log("clicked here 3")
		console.log(countryName)
		 setCountries(data.find((item) => item.name === countryName));
		
		 setSingleCountryMode(true);
		
		 console.log(countries);
	}

	let searchResult = data.filter((country) => {
		return (
			!searchValue ||
			country.name.common.toLowerCase().includes(searchValue.toLowerCase()) 
			// ||
			// country.capital.includes(searchValue.toLowerCase())
		);
	});

	let searchRegionResult = searchResult.filter((country) => {
		return (
			!regionSearch ||
			country.region.toLowerCase().includes(regionSearch.toLowerCase())
		);
	});
	if (!singleCountryMode) {
		return (
			<div>
				<SearchDiv
					handelRegionSearchValue={handelRegionSearchValue}
					searchValue={searchValue}
					handelRegionSearch={handelRegionSearch}
				/>
				<div className="row" style={{ backgroundColor: "#F3F3F3" }}>
					{searchRegionResult.map((country, index) => (
						<CountryCard
							key={index}
							flag={country.flags.svg}
							name={country.name.common}
							population={country.population}
							region={country.region}
							capital={country.capital}
							handleCountryClick={handleCountryClick}
						/>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div>
				 <SingleCountryDisplay
				
					key={countries.id}
					flag={countries.flags.svg}
					name={countries.name.common}
					population={countries.population}
					region={countries.region}
					capital={countries.capital}
					nativeName={countries.nativeName}
					topLevelDomain={countries.topLevelDomain}
					currencies={countries.currencies}
					languages={countries.languages}
					borders={countries.borders}
					handleBackButtonClick={handleBackButtonClick}
					handleSingleCountryClick={handleSingleCountryClick}
				/> 
			</div>
		);
	}
};

export default DisplayDiv;
