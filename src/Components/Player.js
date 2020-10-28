import React from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import '../css/Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';
import loading from '../images/loading.svg';

const Player = ({ spotify }) => {
	const [{ user, playlists }, dispatch] = useDataLayerValue();
	const skip = false;
	if (user && playlists) {
		return (
			<div className="player">
				<div className="player__body">
					<Sidebar />
					<Body spotify={spotify} />
				</div>
				<Footer />
			</div>
		);
	} else {
		return (
			<div className="loading">
				<div className="loading__container">
					<img src={loading} alt="" />
					<h1>loading</h1>
				</div>
			</div>
		);
	}
};

export default Player;
