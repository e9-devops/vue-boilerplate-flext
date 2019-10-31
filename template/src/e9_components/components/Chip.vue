<template>
    <div class="chip" :class="cssClass">
        <slot name="pre"></slot>
        \{{ text }} <i v-if="!hideRemove" class="material-icons" @click="$emit('removed', value)">cancel</i>
        <slot name="post"></slot>
    </div>
</template>

<script>
export default {
    name: 'Chip',
    props: {
        text: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        hideRemove: {
            type: Boolean,
            default: false
        },
        cssClass: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
    .chip {
        border-radius: 16px;
        border: 1px solid $light-grey;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        width: auto;
        padding: 4px 8px 4px 12px;
        background-color: $lighter-grey;
        margin-right: 8px;
        i {
            font-size: 20px;
            margin-left: 8px;
            cursor: pointer;
        }
    }
</style>
