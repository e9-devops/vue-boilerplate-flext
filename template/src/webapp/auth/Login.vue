<template>
    <div class="container-fluid">
        <div class="row d-flex h-100">
            <div class="col-md-6 justify-content-center align-self-center pl0">
                <div class="login-box">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" />
                    </div>
                    <h2 class="mt72 light brand-secondary">Login to App</h2>
                    <div class="form-group mt40">
                        <label for="email">EMAIL ADDRESS</label>
                        <input id="email" class="form-control login-input" type="email" name="email" v-model="email" />
                    </div>
                    <div class="form-group">
                        <label for="password">PASSWORD</label>
                        <input id="password" class="form-control login-input" type="password" name="password" v-model="password" />
                    </div>
                    <div class="float-right mb32">
                        <a class="brand-primary bold">Forgot Password?</a>
                    </div>
                    <button :disabled="isNotProceedable" type="button" class="btn btn-primary btn-full" @click="login">Login</button>
                    <p class="mt16 error text-left" v-if="errMessage" v-text="errMessage"></p>
                </div>
            </div>
            <div class="col-md-6 pr0">
                <div class="landing-image-wrapper">
                    <div class="landing-image background-image-holder"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            errMessage: '',
            isLoading: false
        };
    },
    methods: {
        async login() {
            this.errMessage = '';
            this.isLoading = true;
            try {
                let result = await axios.post(window.endpoint + 'api/auth/login',{
                    email: this.email,
                    password: this.password
                });
                if (result.data) {
                    let tokens = [];
                    let tokenInfo = result.data;
                    tokens = tokenInfo.Claims.split('|');
                    let userType = [];
                    for (let i = 0; i < tokens.length; i++) {
                        let token = tokens[i];
                        if (token.split(':')[0] === 'Staff' || token.split(':')[0] === 'Tenant' || token.split(':')[0] === 'Client') {
                            userType.push(token.split(':')[0]);
                        }
                    }
                    let destination;
                    if (userType.indexOf('Staff') > -1) {
                        tokenInfo.UserType = 'Staff';
                        destination = './management/index.html';
                    } else if (userType.indexOf('Tenant') > -1) {
                        tokenInfo.UserType = 'Tenant';
                        destination = './tenant/index.html';
                    }
                    this.$cookies.set('token', tokenInfo.TokenString);
                    delete tokenInfo.TokenString;
                    localStorage.setItem('user', JSON.stringify(tokenInfo));
                    location.href = destination;
                }
            } catch (err) {
                this.isLoading = false;
                this.errMessage = err.response && err.response.data && err.response.data.message ? err.response.data.message : 'There was an error logging into the system. Please contact the administrator';
            }
        }
    },
    computed: {
        isNotProceedable() {
            // eslint-disable-next-line
                return this.isLoading || !/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(this.email) || !this.password
        }
    }
};
</script>

<style lang="scss" scoped>
    .login-box {
        padding: 0 185px;
        letter-spacing: 0.5px;
        font-family: $font-family-body;
    }

    .logo {
        img {
            display: block;
            margin: 0 auto;
        }
    }

    .landing-image-wrapper {
        height: 100vh;
        position: relative;

        .landing-image {
            background-image: url('../../assets/images/landing-image.jpg');
        }
    }
</style>
