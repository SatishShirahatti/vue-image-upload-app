const state = {
	token: null
};

const getters = {
	isLoggedIn: state => !!state.token

};

const actions = {
	logOut: ({ commit }) => {
		commit('setToken', null)
	}
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	}
};