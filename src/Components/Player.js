import React from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import '../css/Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Player = () => {
	const [{ user }, dispatch] = useDataLayerValue();

	if (user) {
		return (
			<div className="player">
				<div className="player__body">
					<Sidebar />
					<Body />
				</div>
				<Footer />
			</div>
		);
	} else {
		return <h1>loading</h1>;
	}
};

export default Player;
