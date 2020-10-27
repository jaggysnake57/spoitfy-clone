import React from 'react';
import '../css/SidebarOptions.css';

const SidebarOptions = ({ title, Icon }) => {
	return (
		<div className="sidebarOptions">
			<p>{title}</p>
		</div>
	);
};

export default SidebarOptions;
