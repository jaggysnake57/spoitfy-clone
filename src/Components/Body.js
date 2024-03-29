import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import '../css/Body.css';
import Header from './Header';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discover_weekly?.images[0]?.url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{discover_weekly?.name}</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className="songs">
				<div className="icons">
					<PlayCircleFilled className="shuffle" />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>
				{/* songs */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
