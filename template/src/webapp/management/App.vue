<template>
    <div id="app">
        <TopBar></TopBar>
        <SideBarLeft></SideBarLeft>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TopBar from '../layout/TopBar';
import SideBarLeft from '../layout/SideBarLeft';

export default {
    name: 'App',
    components: {
        TopBar,
        SideBarLeft
    }
};
</script>

<style lang="scss">
    #app {
        color: $body-text;
        font-family: $font-family-body;
        font-size: $base-font-size;
        line-height: $line-height-base;
        font-weight: 400;
        height: 100%;
        min-height: 100vh;
        background-color: $body-background;
        .content-wrapper {
            margin-left: $sidebar-width;
            margin-top: $topbar-height;
            padding: 16px 32px;
        }
    }
</style>
