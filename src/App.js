import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import './css/App.css';
import Player from './Components/Player';
import { useDataLayerValue } from './context/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});
		}
		if (token) {
			spotify.setAccessToken(token);
			spotify
				.getMe()
				.then((user) => {
					dispatch({
						type: 'SET_USER',
						user,
					});
				})
				.catch((error) => {
					alert(error.response.message);
				});
		}
	}, [token]);

	return (
		<div className="App">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
