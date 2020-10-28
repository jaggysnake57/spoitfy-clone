import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import '../css/Header.css';

const Header = ({ spotify }) => {
	const [{ user }, dispatch] = useDataLayerValue();
	return (
		<div className="header">
			<div className="header__left">
				<Search />
				<input
					type="text"
					placeholder="Search for Artists, Songs or Albums"
				/>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
