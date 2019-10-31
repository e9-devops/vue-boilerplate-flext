<template>
    <div class="pos-fixed">
        <div class="container-fluid">
            <div class="nav row">
                <div class="col-sm-2">
                    <div class="logo-wrapper">
                        <router-link tag="a" to="/dashboard">
                            <img src="@/assets/images/logo.png" alt="logo" class="logo">
                        </router-link>
                    </div>
                </div>
                <div class="col-sm-10">
                    <ul class="menu">
                        <li class="profile-wrapper">
                            <a class="profile">
                                <img class="picture" src="@/assets/images/profile.jpg" alt="profile" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="material-icons">notifications_none</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
};
</script>

<style lang="scss" scoped>
    .pos-fixed {
        position: fixed;
        height: $topbar-height;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
    }
    .container-fluid {
        background-color: $white;
        border-bottom: 1px solid $lighter-grey;
        position: relative;
        top: -1px;
    }
    .nav {
        height: $topbar-height;
        padding: 0 16px;
        .logo-wrapper {
            width: 100px;
            height: 60px;
            line-height: 80px;
            .logo {
                max-width: 100%;
                max-height: 100%
            }
        }

        ul.menu {
            @include list-unstyled();
            margin: 0;
            display: flex;
            flex-direction: row-reverse;

            li {
                margin-right: 40px;
                line-height: 80px;
                color: $white;
                font-size: 16px;
                font-family: $font-family-heading;
                font-weight: 400;
                position: relative;

                i {
                    color: $light-grey;
                    font-size: 36px;
                    position: absolute;
                    top: 24px;
                    right: 0;
                }

                a {
                    color: $white;
                }
                &.profile-wrapper {
                    text-align: right;
                    position: relative;

                    .profile {
                        cursor: pointer !important;
                        display: inline-block;
                        vertical-align: middle;
                        .picture {
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            border: 2px solid $brand-primary;
                        }
                    }
                }
            }
        }
    }
</style>
