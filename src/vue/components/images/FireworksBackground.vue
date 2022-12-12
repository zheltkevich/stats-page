<template>
    <div class="fireworks">
        <div
            v-for="(firework, i) in 8"
            :key="i"
            :id="`firework${i}`"
            class="firework">
            <div
                v-for="explosion in 12"
                :key="explosion"
                class="explosion">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FireworksBackground',
};
</script>

<style lang="scss">
// stylelint-disable no-duplicate-selectors
// stylelint-disable selector-max-id
@keyframes explosion {
    0% {
        top: 100%;
    }

    33%,
    90% {
        top: -50%;
    }

    100% {
        opacity: 0;
    }
}

#firework0 {
    top: 31%;
    left: 66%;
    transform: scale(0.6);
}

#firework1 {
    top: 22%;
    left: 54%;
    transform: scale(1);
}

#firework2 {
    top: 37%;
    left: 40%;
    transform: scale(0.7);
}

#firework3 {
    top: 40%;
    left: 56%;
    transform: scale(0.4);
}

#firework4 {
    top: 31%;
    left: 49%;
    transform: scale(0.3);
}

#firework5 {
    top: 26%;
    left: 36%;
    transform: scale(0.6);
}

#firework6 {
    top: 33%;
    left: 82%;
    transform: scale(0.9);
}

#firework7 {
    top: 33%;
    left: 18%;
    transform: scale(0.9);
}

#firework0 .explosion::before {
    animation: explosion 2s 0.4s ease-in-out infinite;
}

#firework1 .explosion::before {
    animation: explosion 2s 1s ease-in-out infinite;
}

#firework2 .explosion::before {
    animation: explosion 2s 0.6s ease-in-out infinite;
}

#firework3 .explosion::before {
    animation: explosion 2s 0.4s ease-in-out infinite;
}

#firework4 .explosion::before {
    animation: explosion 2s 0.3s ease-in-out infinite;
}

#firework5 .explosion::before {
    animation: explosion 2s 0.5s ease-in-out infinite;
}

#firework6 .explosion::before {
    animation: explosion 2s 0.9s ease-in-out infinite;
}

#firework7 .explosion::before {
    animation: explosion 2s 0.7s ease-in-out infinite;
}

#firework5,
#firework0,
#firework6 {
    .explosion::before {
        content: "";
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        height: 40px;
        background-color: #f93232;
    }
}

#firework1 {
    .explosion::before {
        content: "";
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        height: 40px;
        background-color: #f93232;
    }
}

#firework7 {
    .explosion::before {
        content: "";
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        height: 40px;
        background-color: #f93232;
    }
}

#firework2,
#firework3,
#firework4 {
    .explosion::before {
        content: "";
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        height: 40px;
        background-color: #424eff;
    }
}

.fireworks {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
}

.firework {
    position: absolute;
}

.explosion {
    position: absolute;
    bottom: 0;
    left: -2px;
    overflow: hidden;
    width: 4px;
    height: 80px;
    transform-origin: 50% 100%;
}

.explosion:nth-child(1) {
    transform: rotate(0deg) translateY(-15px);
}

.explosion:nth-child(2) {
    transform: rotate(30deg) translateY(-15px);
}

.explosion:nth-child(3) {
    transform: rotate(60deg) translateY(-15px);
}

.explosion:nth-child(4) {
    transform: rotate(90deg) translateY(-15px);
}

.explosion:nth-child(5) {
    transform: rotate(120deg) translateY(-15px);
}

.explosion:nth-child(6) {
    transform: rotate(150deg) translateY(-15px);
}

.explosion:nth-child(7) {
    transform: rotate(180deg) translateY(-15px);
}

.explosion:nth-child(8) {
    transform: rotate(210deg) translateY(-15px);
}

.explosion:nth-child(9) {
    transform: rotate(240deg) translateY(-15px);
}

.explosion:nth-child(10) {
    transform: rotate(270deg) translateY(-15px);
}

.explosion:nth-child(11) {
    transform: rotate(300deg) translateY(-15px);
}

.explosion:nth-child(12) {
    transform: rotate(330deg) translateY(-15px);
}
</style>
