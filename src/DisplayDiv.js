import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";
import SearchDiv from "./SearchDiv";
import SingleCountryDisplay from "./SingleCountryDisplay";

const DisplayDiv = () => {
	const data = countriesAll;
	const [singleCountryMode, setSingleCountryMode] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [regionSearch, setRegionSearch] = useState("");
	const [countries, setCountries] = useState([]);
	console.log(singleCountryMode);

	function handleCountryClick(countryName) {
		setSingleCountryMode(true);
		setCountries(countriesAll.find((item) => item.name === countryName));
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
		setSingleCountryMode(true);
		setCountries(countriesAll.find((item) => item.name === countryName));
	}

	let searchResult = data.filter((country) => {
		return (
			!searchValue ||
			country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			country.capital.toLowerCase().includes(searchValue.toLowerCase())
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
							flag={country.flag}
							name={country.name}
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
					flag={countries.flag}
					name={countries.name}
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
