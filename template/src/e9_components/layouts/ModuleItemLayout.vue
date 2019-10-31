<template>
    <div>
        <div class="mb16 back" v-if="rData && rData.Name">
            <i class="material-icons">arrow_back</i>
            <h3 class="section-title mb0" v-text="rData.Name"></h3>
        </div>
        <b-nav tabs>
            <b-nav-item v-for="(tab,key) in tabs" :to="tab.path" exact :key="key" exact-active-class="active">
                \{{ tab.name }}
            </b-nav-item>
        </b-nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ModuleItemLayout',
    props: {
        tabs: {
            type: Array,
            required: true
        },
        rData: {
            type: [Object, Array, String],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
    .back {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        i{
            margin-right: 16px;
            font-size: 32px;
            font-weight: 600;
        }
    }
    .nav {
        .nav-item {
            margin: 0 16px 0 0 !important;
        }
    }
</style>
