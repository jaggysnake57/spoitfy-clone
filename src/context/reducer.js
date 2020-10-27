export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token:
		'BQDlweUqTY5xS7C_e_0IGFhk8lL-LtPTjt06A1sy5cgdlaRhE41wUR288XC_bxi-9n4xgsrjwBM9hKPJRTnFn8_UCQTXZxj-rMCgKMMf8U2WyhDcBcNHsjZjd4op8-ifDdZED_Si295fZP-EzzNS1Aorj2Ij',
};

const reducer = (state, action) => {
	console.log({ action });
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		default:
			return state;
	}
};

export default reducer;
