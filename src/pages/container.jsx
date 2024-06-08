/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Container = ({ children }) => {
	return (
		<div className='xxxs:px-10 xxs:px-12 sm:px-14 md:px-32 lg:px-40 xl:px-72 3xl:px-96'>
			<div className='flex flex-col h-full'>{children}</div>
		</div>
	);
};

export default Container;
