import React from "react";

const SearchDiv = ({
	handelRegionSearchValue,
	searchValue,
	handelRegionSearch,
}) => {
	return (
		
			<div className="searchDiv">
				<input
					className="searchInput"
					type="text"
					placeholder="&#61442; Search for Country..."
					style={{ marginLeft: "4%", fontSize: "1.5rem" }}
					value={searchValue}
					onChange={handelRegionSearchValue}
					id="country"
				></input>

				<div style={{ paddingLeft: "60%", fontSize: "1.5rem" }}>
					<select id="region" name="regions" onChange={handelRegionSearch}>
						<option value="">Filter by Region</option>
						<option value="Africa">Africa</option>
						<option value="Americas">Americas</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</div>
		
	);
};

export default SearchDiv;
