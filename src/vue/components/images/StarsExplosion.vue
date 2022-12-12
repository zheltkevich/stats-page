<template>
    <svg
        v-for="star in 40"
        :key="star"
        class="star star--1"
        width="39"
        height="38"
        viewBox="0 0 39 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.5001 0L25.1634 12.7051L38.9967 14.1652L28.6635 23.4774L31.5497 37.0848L19.5001 30.135L7.45048 37.0848L10.3366 23.4774L0.00341797 14.1652L13.8368 12.7051L19.5001 0Z"
            fill="#FEC419" />
    </svg>
</template>

<script>
export default {
    name: 'StarsExplosion',
};
</script>

<style lang="scss">
/* stylelint-disable function-no-unknown */
/* stylelint-disable at-rule-no-unknown */
$size: 10%;

@keyframes shoot {
    from {
        transform: translate(0);
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.star {
    position: absolute;
    z-index: 2;
    width: $size;
    height: $size;
    animation: shoot 3s ease-out infinite;
    animation-name: shoot, fade;

    @for $i from 0 to 40 {
        &:nth-child(#{$i + 1}) {
            transform:
                scale(random(3) * 1)
                rotateZ(
                    random(360) * 3deg
                )
                translate(
                    random(100) * 2px,
                    random(100) * 3px
                );
            animation-duration: 2s;
        }
    }
}
</style>
