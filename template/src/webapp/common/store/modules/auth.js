import VueCookies from 'vue-cookies';

const LOGOUT = 'LOGOUT';
export const authModule = {
    state: {
        isAuth: !!VueCookies.get('token'),
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
    },
    mutations: {
        [LOGOUT](state) {
            localStorage.removeItem('user');
            VueCookies.remove('token');
            state.isAuth = false;
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isAuth;
        },
        getUser(state) {
            return state.user;
        },
        getClaims(state) {
            let claims = state.user.Claims.split('|');
            let claimsObj = {};
            claims.forEach(claim => {
                let keyValues = claim.split(':');
                claimsObj[keyValues[0]] = keyValues[1];
            });
            return claimsObj;
        }
    }
};
