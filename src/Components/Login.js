import React from 'react';
import '../css/Login.css';
import { loginUrl } from '../spotify';

const Login = () => {
	return (
		<div className="login">
			<img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
				alt="spotify-logo"
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
