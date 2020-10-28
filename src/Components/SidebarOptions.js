import React from 'react';
import '../css/SidebarOptions.css';

const SidebarOptions = ({ title, Icon }) => {
	return (
		<div className="sidebarOptions">
			{Icon && <Icon className="icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
};

export default SidebarOptions;
