import { Grid, Slider } from '@material-ui/core';
import {
	PlayCircleOutline,
	PlaylistPlay,
	Repeat,
	Shuffle,
	SkipNext,
	SkipPrevious,
	VolumeDown,
} from '@material-ui/icons';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="albumImage"
					src="https://upload.wikimedia.org/wikipedia/en/1/18/Slipknot_-_We_Are_Not_Your_Kind.png"
					alt="album cover"
				/>
				<div className="songInfo">
					<h4>unsainted</h4>
					<p>Slipknot</p>
				</div>
			</div>
			<div className="footer__center">
				<Shuffle className="icon green" />
				<SkipPrevious className="icon" />
				<PlayCircleOutline fontSize="large" className="icon" />
				<SkipNext className="icon" />
				<Repeat className="icon green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
