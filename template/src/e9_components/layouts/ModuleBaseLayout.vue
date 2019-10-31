<template>
    <div class="pt16">
        <div class="row">
            <div class="col-sm-6">
                <h3 class="section-title mb16" v-if="$route.meta.isSideBar && !$route.meta.isHide" v-text="$route.name"></h3>
            </div>
            <div class="col-sm-6">
                <router-view name="options" class="float-right"></router-view>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Layout'
};
</script>

<style scoped>
</style>
