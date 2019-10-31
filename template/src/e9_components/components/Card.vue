<template>
    <div class="card">
        <a class="card-container" @click="goToState">
            <svg holder class="logo holderjs" :style="{'background-image': logoUrl}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="transparent" stroke-width="10" stroke-linecap="round" class="ng-hide" v-show="showScore" stroke-location="outside"></circle>
            </svg>
            <small v-if="accessors.SubTitle(item) !== 'null'" v-html="accessors.SubTitle(item)"></small>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['allowClick', 'showScore', 'accessors', 'item', 'rNavTo'],
    methods: {
        goToState() {
            if (this.allowClick && this.item && this.item._id && this.rNavTo) {
                let options = {
                    id: this.item._id
                };
                return this.$router.push({path: this.rNavTo, params: options});
            } else {
                return false;
            }
        }
    },
    computed: {
        logoUrl() {
            return 'url(' + this.accessors.LogoUrl(this.item) + ')';
        }
    }
};
</script>

<style scoped lang="scss">
    .card {
        width: 150px;
        float: left;
        margin: 0 40px 48px 0;
        overflow: visible;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
        color: $grey;
        height: 175px;
        position: relative;
        &.inactive {
            -webkit-filter: grayscale(100%);
            /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
        }
        &.single {
            float: none;
            margin-top: 30px;
            margin-bottom: 20px;
            //@include center-block();
        }
        &.module-item-card {
            height: 130px;
            margin-bottom: 0;
            margin-right: 0;
        }
        >.card-container {
            width: 100%;
            .logo {
                @include border-radius(60px);
                //@include center-block();
                @include transition(all 100ms);
                margin-bottom: 10px;
                background-color: #ddd;
                width: 120px;
                height: 120px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                // @include box-shadow(0 1px 4px rgba(0, 0, 0, 0.3));
                // circle {
                //    @include rotate(-90deg);
                //    @include transform-origin(center);
                //    @include transition(all 0.5s);
                //    @include opacity(100);
                //    @include animate(0.4,
                //            fadeIn);
                //}
            }
            strong {
                // @include center-block();
                margin-bottom: 0;
                color: $grey;
                width: 150px;
                line-height: 22px;
                text-align: center;
                i {
                    font-size: 16px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    line-height: 20px;
                }
            }
            small {
                i {
                    margin: 0 5px;
                    line-height: 20px;
                    font-size: 14px;
                }
                span {
                    font-weight: 600;
                    color: #777;
                }
            }
        }
        &:hover {
            >.card-container {
                .logo {
                    // background-size: 140px;
                }
            }
        }
        @media only screen and (min-width: 769px) and (max-width: 1159px) {
            width: 20%;
            margin-right: 0;
            >.card-container {
                .logo {
                    width: 100px;
                    height: 100px;
                    background-size: 100px;
                }
            }
        }
        @media only screen and (min-width: 415px) and (max-width: 767px) {
            width: 25% !important;
            margin-right: 0;
            >.card-container {
                .logo {
                    width: 100px;
                    height: 100px;
                    background-size: 100px;
                }
            }
        }
        @media only screen and (max-width: 414px) {
            width: 50%;
            margin-right: 0;
            >.card-container {
                .logo {
                    width: 100px;
                    height: 100px;
                    background-size: 100px;
                }
            }
        }
    }
</style>