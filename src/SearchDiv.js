import React, { useState } from "react";

const SearchDiv = ({ currentSearch }) => {
	const [searchInput, setSearchInput] = useState("");

	function handelSearchInput(event) {
		setSearchInput(event.target.value);
		console.log(event.target.value);
	}
	function handelSubmit(event) {
		event.preventDefault();

		console.log("got here");
		currentSearch(searchInput);
	}
	return (
		<div
			className="searchDiv"
			style={{ display: "flex", padding: "3% 3%", backgroundColor: "blue" }}
		>
			<form onSubmit={handelSubmit}>
				<input
					type="search"
					placeholder="Search for Country..."
					style={{ marginLeft: "4%" }}
					value={searchInput}
					onChange={handelSearchInput}
					id="country"
				></input>
			</form>
			<form style={{ paddingLeft: "70%" }}>
				<select id="" name="">
					<option value="">Filter by Region</option>
					<option value="">Africa</option>
					<option value="">America</option>
					<option value="">Asia</option>
					<option value="">Europe</option>
					<option value="">Ociana</option>
				</select>
			</form>
		</div>
	);
};

export default SearchDiv;
