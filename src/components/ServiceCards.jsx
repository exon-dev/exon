/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServiceCards = (props) => {
	console.log(props);
	return (
		<div className='flex flex-col justify-end bg-darkgray border-lightgray h-full gap-5 p-5'>
			<h2 className='text-3xl font-semibold'>
				{props?.title[0]}
				<br />
				{props?.title[1]}
			</h2>
			<p className=''>{props.description}</p>
		</div>
	);
};

export default ServiceCards;
