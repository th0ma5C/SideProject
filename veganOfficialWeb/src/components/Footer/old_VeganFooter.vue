<template>
    <div class="container">
        <InfoFooter class="InfoFooter"></InfoFooter>
        <MainFooter></MainFooter>
        <div class="footer-logo">
            <span>
                Relation-ship
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import InfoFooter from './InfoFooter.vue';
import MainFooter from './MainFooter.vue';
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap');\
// @font-face {
//     font-family: 'MrDafoe';
//     src: url('@assets/fonts/Mr_Dafoe/MrDafoe-Regular.woff2') format('woff2');
// }

.container {
    background-color: #00430b;
    color: $primaryBacColor;
    position: relative;
    max-height: 920px;
    overflow: hidden;

    // .hr {
    //     width: 1021px;
    //     // margin: 1rem auto;
    //     border: 1px solid $primaryBacColor;
    // }
    .InfoFooter {
        position: relative;

        &::after {
            @include WnH(1201px, 1px);
            position: absolute;
            bottom: 0;
            content: '';
            background-color: $primaryBacColor;
            margin: auto 6rem;
        }
    }

    .footer-logo {
        font-family: 'Mr Dafoe', cursive;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        margin: 0;
        font-size: 33vh;
        white-space: nowrap;
        overflow: hidden;

        // span {}
    }
}
</style>