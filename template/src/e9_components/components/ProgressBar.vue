<template>
    <div class="loader">
        <div class="value" :style="{'width': value + '%'}"></div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: ['value']
};
</script>

<style lang="scss" scoped>
    .loader {
        height: 6px;
        width: 100%;
        background-color: $lighter-grey;
        position:relative;
        border-radius: 6px;
        top: 50%;
        transform: translateY(-50%);
        .value {
            height: inherit;
            position: absolute;
            left: 0;
            background-color: $brand-primary;
            border-radius: 6px;
        }
    }
</style>
