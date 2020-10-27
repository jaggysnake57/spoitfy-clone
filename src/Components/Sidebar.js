import React from 'react';
import '../css/Sidebar.css';
import SidebarOptions from './SidebarOptions';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<img
				className="logo"
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt=""
			/>
			<SidebarOptions title={'Some'} />
			<SidebarOptions title={'Search'} />
			<SidebarOptions title={'Your Library'} />
		</div>
	);
};

export default Sidebar;
