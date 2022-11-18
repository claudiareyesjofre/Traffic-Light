import React, { useState } from "react";





export const Home = () => {
	const [selectedColor, setselectedColor]= useState({red:"light red", yellow:"light yellow",green:"light green"});
	return(
		<div className="traffic-light">

			<div  className= {selectedColor.red} onClick ={()=> setselectedColor({red:"light red glow", yellow:"light yellow",green:"light green"}) }></div>
			<div  className={selectedColor.yellow} onClick ={()=> setselectedColor({red:"light red ", yellow:"light yellow glow",green:"light green"}) }></div>
			<div  className= {selectedColor.green} onClick ={()=> setselectedColor({red:"light red ", yellow:"light yellow ",green:"light green glow"}) }></div>
			
		</div>
	);
};

export default Home;
