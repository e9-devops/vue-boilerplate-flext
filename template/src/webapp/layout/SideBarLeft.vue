<template>
    <div class="sidebar">
        <ul class="menu">
            <router-link tag="li" :to="route.path" active-class="active" v-for="(route,key) in routes" :key="key">
                <a class="profile">
                    <i class="material-icons">\{{ route.meta.icon || 'No icon' }}</i>
                    <span v-text="route.name"></span>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideBarLeft',
    data() {
        return {
            routes: []
        };
    },
    created() {
        for (let i = 0; i < this.$router.options.routes.length; i++) {
            if (this.$router.options.routes[i].meta && this.$router.options.routes[i].meta.isSideBar) {
                this.routes.push(this.$router.options.routes[i]);
                if (this.$router.options.routes[i].children) {
                    this.routes = [...this.routes, ...this.$router.options.routes[i].children.filter(route => route.meta && route.meta.isSideBar)];
                }
            } else if (this.$router.options.routes[i].children) {
                this.routes = [...this.routes, ...this.$router.options.routes[i].children.filter(route => route.meta && route.meta.isSideBar)];
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: $sidebar-width;
    top: 80px;
    height: calc(100% - 80px);
    border-right: 1px solid $lighter-grey;
    background-color: $white;
    .menu {
        @include list-unstyled();
        margin: 0;
        width: 100%;

        li {
            width: 100%;
            height: 80px;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                background-color: $lighter-grey;
            }
            a {
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                height: 100%;
                i,
                span {
                    color: $light-grey;
                }
            }

            &.active {
                background-color: mix($black, $brand-primary, 10%);
                box-shadow: 0 1px 4px 0 mix($white, $brand-primary, 20%);
                a > i,
                span {
                    color: $white;
                }
            }
        }
    }
}
</style>
