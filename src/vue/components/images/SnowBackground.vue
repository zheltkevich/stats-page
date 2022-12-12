<template>
    <div class="snow-background">
        <div
            v-for="snowflake in 100"
            :key="snowflake"
            class="snow"></div>
    </div>
</template>

<script>
export default {
    name: 'SnowBackground',
};
</script>

<style lang="scss">
/* stylelint-disable scss/at-function-pattern */
/* stylelint-disable function-no-unknown */
/* stylelint-disable scss/dollar-variable-pattern */
/* stylelint-disable at-rule-no-unknown */
@function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));

    @return $random_range;
}

.snow-background {
    overflow: hidden;
    pointer-events: none;
}

.snow {
    $total: 200;

    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    transition: 1s ease-in-out;
    transition-property: opacity;

    @for $i from 1 through $total {
        $random-x: random(1000000) * 0.0001vw;
        $random-offset: random_range(-100000, 100000) * 0.0001vw;
        $random-x-end: $random-x + $random-offset;
        $random-x-end-yoyo: $random-x + calc($random-offset / 2);
        $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
        $random-yoyo-y: $random-yoyo-time * 100vh;
        $random-scale: random(10000) * 0.0001;
        $fall-duration: random_range(10, 30) * 1s;
        $fall-delay: random(30) * -1s;

        &:nth-child(#{$i}) {
            opacity: random(10000) * 0.0001;
            transform: translate($random-x, -10px) scale($random-scale);
            animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
        }

        /* stylelint-disable-next-line order/order */
        @keyframes fall-#{$i} {
            #{percentage($random-yoyo-time)} {
                transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
            }

            100% {
                transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
            }
        }
    }
}
</style>
