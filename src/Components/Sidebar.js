import { Home, LibraryMusic, Search } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import '../css/Sidebar.css';
import SidebarOptions from './SidebarOptions';

const Sidebar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img
				className="logo"
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt=""
			/>
			<SidebarOptions title={'Home'} Icon={Home} />
			<SidebarOptions title={'Search'} Icon={Search} />
			<SidebarOptions title={'Your Library'} Icon={LibraryMusic} />
			<br />
			<strong className="title">PLAYLISTS</strong>
			<hr />
			{playlists?.items?.length ? (
				playlists.items.map((list) => (
					<SidebarOptions title={list.name} key={list.id} />
				))
			) : (
				<p>no playlists found</p>
			)}
		</div>
	);
};

export default Sidebar;
