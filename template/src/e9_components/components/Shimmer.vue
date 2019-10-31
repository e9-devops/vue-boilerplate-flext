<template>
    <div v-if="value" class="shimmer" :style="getMinHeight">
        <slot name="pre"></slot>
        <div v-for="(n,index) in repeatCount" :key="index" class="shimmer-item">
            <slot name="body"></slot>
        </div>
        <slot name="post"></slot>
    </div>
</template>

<script>
export default {
    name: 'Shimmer',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        repeatCount: {
            type: Number,
            default: 1
        },
        minHeight: {
            type: Number,
            required: true
        }
    },
    computed: {
        getMinHeight() {
            return {
                'min-height': this.minHeight + 'px'
            };
        }
    }
};
</script>

<style lang="scss">
    .shimmer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        .shimmer-item {
            display: inline-block;
            margin-right: 16px;
        }
        .animated-background {
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeHolderShimmer;
            animation-timing-function: linear;
            background: #f6f7f8;
            background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            background-size: 800px 104px;
            height: 100%;
            position: relative;
            z-index: 100;
        }
    }
    @keyframes placeHolderShimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
</style>
