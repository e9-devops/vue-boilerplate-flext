import axios from 'axios';
import VueCookies from 'vue-cookies';

let $http;
export default {
    init() {
        $http = axios.create({
            baseURL: window.endpoint
        });
        let token = VueCookies.get('token');
        let user = localStorage.getItem('user');
        $http.defaults.headers.common['Content-Type'] = 'application/json';
        $http.defaults.headers.get['Accepts'] = 'application/json';
        if (!token && user) {
            localStorage.removeItem('user');
        }
        $http.interceptors.request.use(
            (config) => {
                config.headers['Authorization'] = 'bearer ' + VueCookies.get('token');
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        $http.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response && error.response.status) {
                    switch (error.response.status) {
                    case 403: {
                        this.$store.dispatch('logout');
                        window.location.href = '/index.html';
                        break;
                    }
                    }
                }
                return Promise.reject(error.response);
            }
        );
        return $http;
    },
    query(resource, params) {
        return $http.get(`${resource}`, {
            params: params
        }).catch(error => {
            console.error(error);
        });
    },
    get(resource, id = '') {
        return $http.get(`${resource}/${id}`).catch(error => {
            console.error(error);
        });
    },
    post(resource, params) {
        return $http.post(`${resource}`, params).catch(error => {
            console.error(error);
        });
    },
    update(resource, id, params) {
        return $http.put(`${resource}/${id}`, params).catch(error => {
            console.error(error);
        });
    },
    put(resource, params) {
        return $http.put(`${resource}`, params).catch(error => {
            console.error(error);
        });
    },
    delete(resource, id) {
        return $http.delete(`${resource}/${id}`).catch(error => {
            console.error(error);
        });
    }
};
