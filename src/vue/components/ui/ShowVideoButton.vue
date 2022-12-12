<template>
    <button
        class="show-video-button"
        type="button">
        <span class="show-video-button__background">
            <span
                v-for="(item, i) in 3"
                :key="i"
                class="show-video-button__background-pulse"
                :class="`show-video-button__background-pulse--${i}`">
            </span>
            <svg
                class="show-video-button__icon"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_8744_4892)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3372 9.52052C11.5745 7.56144 13.6068 6.39124 15.4198 7.16666C17.5414 8.07408 22.302 10.2314 28.3424 13.7188C34.3842 17.2071 38.6334 20.2517 40.4792 21.6349C42.056 22.8165 42.0606 25.1607 40.4822 26.3459C38.6532 27.7193 34.4554 30.7275 28.3402 34.2581C22.223 37.7899 17.5177 39.9215 15.415 40.8183C13.6015 41.5915 11.5746 40.4191 11.3377 38.4641C11.061 36.1805 10.5467 30.9947 10.5467 23.9903C10.5467 16.99 11.0604 11.8062 11.3372 9.52052Z"
                        fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_8744_4892">
                        <rect
                            width="48"
                            height="48"
                            fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </span>
    </button>
</template>

<script>
export default {
    name: 'ShowVideoButton',
};
</script>

<style lang="scss">
@keyframes bg {
    0% {
        border-color: #6b75f9;
        opacity: 0;
        transform: scale(1);
    }

    30% {
        opacity: 0.1;
    }

    50% {
        opacity: 0;
        transform: scale(2);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.show-video-button {
    position: relative;
    width: 88px;
    height: 88px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: #525ce2;

    @media (min-width: $tablet) {
        width: 148px;
        height: 148px;
    }

    &::before {
        content: "";
        position: absolute;
        z-index: 0;
        border: 4px solid #6b75f9;
        border-radius: 50%;
        opacity: 0.4;
        pointer-events: none;

        // transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: 0.6s cubic-bezier(0.22, 0.68, 0, 1.71);
        transition-property: transform;
        transform: scale(1);
        inset: 0;
    }

    &:hover {
        &::before {
            transform: scale(1.5);
        }
    }

    &__background {
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #525ce2;
        pointer-events: none;
        transition: 0.4s cubic-bezier(0.22, 0.68, 0, 1.71);
        transition-property: transform, box-shadow;
        transform: scale(1);

        .show-video-button:hover & {
            box-shadow:
                inset 0 0 50px #ffffff,
                inset 20px 0 80px #ff00ff,
                inset -20px 0 80px #00ffff,
                inset 20px 0 300px #ff00ff,
                inset -20px 0 300px #00ffff,
                0 0 50px #ffffff,
                -10px 0 80px #ff00ff,
                10px 0 80px #00ffff;
            transform: scale(1.1);
        }
    }

    &__background-pulse {
        position: absolute;
        z-index: 0;
        display: flex;
        border: 4px solid transparent;
        border-radius: 50%;
        animation: bg 4s ease-in-out infinite;
        inset: 0;

        &--0 {
            animation-delay: 0.3s;
        }

        &--1 {
            animation-delay: 0.6s;
        }

        &--2 {
            animation-delay: 0.9s;
        }

        &--3 {
            animation-delay: 0.12s;
        }

        .show-video-button:hover & {
            animation: none;
        }
    }

    &__icon {
        pointer-events: none;
        transition: 0.5s cubic-bezier(0.22, 0.68, 0, 1.71);
        transition-property: transform;
        transform: scale(1);

        .show-video-button:hover & {
            transform: scale(1.2);
        }
    }
}
</style>
