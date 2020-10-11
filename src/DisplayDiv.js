import React, { useState } from "react";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";
import SearchDiv from "./SearchDiv";

const DisplayDiv = () => {
	const data = countriesAll;
	const [currentCountries, setCurrentCountries] = useState(data);
	const search = (searchVal) => {
		console.log(searchVal + "searchVal");
		console.log(currentCountries);

		const searchResult = currentCountries.filter(
			(country) =>
				country.name.toLowerCase() === searchVal.toLowerCase() ||
				country.capital.toLowerCase() === searchVal.toLowerCase()
		);
		setCurrentCountries(searchResult);
		console.log(" the search word is" + searchResult.length);
	};

	return (
		<div>
			<SearchDiv currentSearch={search} />
			<div className="row" style={{ backgroundColor: "#F3F3F3" }}>
				{currentCountries.map((country, index) => (
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
