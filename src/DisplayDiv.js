import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";
import SearchDiv from "./SearchDiv";


const DisplayDiv = () => {
	const data = countriesAll;
	
	const [searchValue, setSearchValue] = useState("");
	const [regionSearch, setRegionSearch] = useState("");

	console.log(searchValue);
	function handelRegionSearchValue(event) {
		setSearchValue(event.target.value);
	}

	function handelRegionSearch(event) {
		setRegionSearch(event.target.value);
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
					/>
				))}
			</div>
		</div>
	);
};

export default DisplayDiv;
