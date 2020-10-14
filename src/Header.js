import React from "react";

const Header = () => {
	function handelClick() {
		
	}
	return (
		<div style={{ width: "100%", padding: "2% 0  2% 10%", display: "flex" }}>
			<h3 style={{fontWeight:"bolder"}}>Where in the world?</h3>
			<div onClick={handelClick}
				style={{
					
					display: "flex",
					paddingLeft: "60%",
				}}
			>
				<i
					className="fa fa-moon-o"
					style={{ fontSize: "30px" ,paddingRight:"10px" }}
				></i>
				<h4 style={{fontWeight:"bold"}} >
				Dark Mode
				</h4>
			</div>
		</div>
	);
};

export default Header;
