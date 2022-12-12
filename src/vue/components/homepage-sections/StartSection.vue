<template>
    <section
        class="start-section"
        :class="{ 'second-screen': changeScreen }">
        <SnowBackground class="start-section__snow-background" />
        <AppHeader
            class="start-section__header"
            @clickLogo="logoClickHandler" />
        <transition
            name="fade-down"
            mode="out-in">
            <div
                v-if="changeScreen"
                class="start-section__section-content">
                <transition
                    name="fade-down"
                    mode="out-in">
                    <div
                        v-if="showTwoYearsImage"
                        class="start-section__two-years-wrapper">
                        <FireworksBackground />
                        <div class="start-section__two-years-image-wrapper">
                            <svg
                                class="start-section__two-years-image"
                                width="558"
                                height="181"
                                viewBox="0 0 558 181"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M50.4422 0.899991C56.6422 0.899991 62.3755 1.83332 67.6422 3.69999C72.9089 5.49999 77.4755 8.13333 81.3422 11.6C85.2089 15 88.2422 19.2 90.4422 24.2C92.6422 29.1333 93.7422 34.7333 93.7422 41C93.7422 46.3333 92.9422 51.3 91.3422 55.9C89.8089 60.4333 87.6755 64.7667 84.9422 68.9C82.2755 73.0333 79.1422 77.0667 75.5422 81C72.0089 84.9333 68.2422 88.9 64.2422 92.9L27.3422 130.5C30.0755 129.767 32.8422 129.167 35.6422 128.7C38.4422 128.233 41.1089 128 43.6422 128H89.8422C91.9089 128 93.5422 128.6 94.7422 129.8C95.9422 131 96.5422 132.567 96.5422 134.5V146H0.342188V139.5C0.342188 138.167 0.608855 136.8 1.14219 135.4C1.74219 133.933 2.64219 132.633 3.84219 131.5L49.3422 85.7C53.1422 81.8333 56.5755 78.1333 59.6422 74.6C62.7089 71.0667 65.3422 67.5333 67.5422 64C69.7422 60.4667 71.4089 56.9 72.5422 53.3C73.7422 49.6333 74.3422 45.7333 74.3422 41.6C74.3422 37.5333 73.7089 33.9667 72.4422 30.9C71.1755 27.8333 69.4089 25.2667 67.1422 23.2C64.9422 21.1333 62.3089 19.6 59.2422 18.6C56.1755 17.6 52.8755 17.1 49.3422 17.1C45.8089 17.1 42.5755 17.6333 39.6422 18.7C36.7089 19.7 34.0755 21.1333 31.7422 23C29.4755 24.8 27.5422 26.9667 25.9422 29.5C24.4089 31.9667 23.3089 34.7 22.6422 37.7C21.7755 40.1667 20.6089 41.8333 19.1422 42.7C17.7422 43.5 15.7422 43.7 13.1422 43.3L3.14219 41.5C4.14219 34.9 5.97552 29.0667 8.64219 24C11.3755 18.9333 14.8089 14.7 18.9422 11.3C23.0755 7.83333 27.8089 5.23333 33.1422 3.49999C38.4755 1.76666 44.2422 0.899991 50.4422 0.899991ZM238.139 44.5V58.9H190.839V146H171.839V44.5H238.139ZM292.869 42.9C300.335 42.9 307.069 44.1333 313.069 46.6C319.069 49 324.169 52.4667 328.369 57C332.569 61.5333 335.802 67.0333 338.069 73.5C340.335 79.9 341.469 87.1 341.469 95.1C341.469 103.1 340.335 110.333 338.069 116.8C335.802 123.267 332.569 128.767 328.369 133.3C324.169 137.833 319.069 141.333 313.069 143.8C307.069 146.2 300.335 147.4 292.869 147.4C285.402 147.4 278.635 146.2 272.569 143.8C266.569 141.333 261.435 137.833 257.169 133.3C252.969 128.767 249.735 123.267 247.469 116.8C245.202 110.333 244.069 103.1 244.069 95.1C244.069 87.1 245.202 79.9 247.469 73.5C249.735 67.0333 252.969 61.5333 257.169 57C261.435 52.4667 266.569 49 272.569 46.6C278.635 44.1333 285.402 42.9 292.869 42.9ZM292.869 132.6C302.602 132.6 309.869 129.333 314.669 122.8C319.469 116.267 321.869 107.067 321.869 95.2C321.869 83.4 319.469 74.2 314.669 67.6C309.869 61 302.602 57.7 292.869 57.7C283.002 57.7 275.635 61 270.769 67.6C265.969 74.2 263.569 83.4 263.569 95.2C263.569 107.067 265.969 116.267 270.769 122.8C275.635 129.333 283.002 132.6 292.869 132.6ZM447.63 44.5V131.6H466.23V174.9C466.23 176.7 465.73 178.133 464.73 179.2C463.73 180.267 462.396 180.8 460.73 180.8H449.03V146H365.33V175.3C365.33 176.7 364.896 177.967 364.03 179.1C363.163 180.233 361.863 180.8 360.13 180.8H348.13V132.2H351.43H352.43H380.73C378.263 135.6 375.696 138.033 373.03 139.5C370.43 140.9 367.863 141.7 365.33 141.9V146H348.13V132.2H352.43C354.696 132.133 356.93 131.667 359.13 130.8C361.33 129.867 363.43 128.267 365.43 126C367.496 123.667 369.43 120.467 371.23 116.4C373.03 112.333 374.663 107.067 376.13 100.6C377.663 94.0667 378.963 86.2333 380.03 77.1C381.163 67.9 382.063 57.0333 382.73 44.5H447.63ZM398.23 59.4C397.563 69.4 396.663 78.3333 395.53 86.2C394.396 94 393.063 100.867 391.53 106.8C389.996 112.667 388.296 117.7 386.43 121.9C384.63 126.033 382.73 129.467 380.73 132.2H429.23V59.4H398.23ZM365.33 132.2V141.9C365.063 141.967 364.796 142 364.53 142C364.33 142 364.13 142 363.93 142H350.93L348.43 132.2H365.33ZM548.653 146C546.786 146 545.353 145.7 544.353 145.1C543.353 144.5 542.553 143.333 541.953 141.6L539.853 132.5C537.253 134.9 534.686 137.067 532.153 139C529.62 140.867 526.953 142.433 524.153 143.7C521.42 144.967 518.486 145.933 515.353 146.6C512.22 147.267 508.72 147.6 504.853 147.6C500.853 147.6 497.12 147.067 493.653 146C490.186 144.867 487.153 143.167 484.553 140.9C482.02 138.633 479.986 135.833 478.453 132.5C476.986 129.1 476.253 125.1 476.253 120.5C476.253 116.5 477.32 112.667 479.453 109C481.653 105.333 485.186 102.067 490.053 99.2C494.986 96.2667 501.386 93.8667 509.253 92C517.186 90.1333 526.92 89.0667 538.453 88.8V81.2C538.453 73.5333 536.786 67.7667 533.453 63.9C530.186 59.9667 525.353 58 518.953 58C514.62 58 510.986 58.5667 508.053 59.7C505.186 60.7667 502.686 61.9667 500.553 63.3C498.486 64.5667 496.653 65.7333 495.053 66.8C493.453 67.8667 491.853 68.4 490.253 68.4C488.92 68.4 487.786 68.0667 486.853 67.4C485.986 66.6667 485.22 65.8333 484.553 64.9L481.153 58.7C486.82 53.3667 492.92 49.3667 499.453 46.7C506.053 44.0333 513.32 42.7 521.253 42.7C526.986 42.7 532.086 43.6333 536.553 45.5C541.02 47.3667 544.753 50 547.753 53.4C550.82 56.7333 553.12 60.7667 554.653 65.5C556.253 70.2333 557.053 75.4667 557.053 81.2V146H548.653ZM510.553 134.3C513.553 134.3 516.32 134 518.853 133.4C521.453 132.8 523.853 131.933 526.053 130.8C528.32 129.667 530.453 128.3 532.453 126.7C534.453 125.033 536.453 123.167 538.453 121.1V100.7C530.453 100.967 523.653 101.6 518.053 102.6C512.453 103.6 507.886 104.9 504.353 106.5C500.886 108.1 498.353 110.033 496.753 112.3C495.153 114.5 494.353 116.933 494.353 119.6C494.353 122.2 494.753 124.433 495.553 126.3C496.42 128.167 497.586 129.7 499.053 130.9C500.52 132.033 502.22 132.9 504.153 133.5C506.153 134.033 508.286 134.3 510.553 134.3Z"
                                    fill="url(#paint0_linear_8616_582)" />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_8616_582"
                                        x1="-27"
                                        y1="146"
                                        x2="570"
                                        y2="-19.5"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#8E96FF" />
                                        <stop
                                            offset="1"
                                            stop-color="#535EF2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p class="start-section__two-years-text">
                            мы вместе с вами!
                        </p>
                        <div class="start-section__scroll-pointer"></div>
                    </div>
                </transition>
            </div>

            <div
                v-else
                class="start-section__section-content">
                <main class="start-section__main">
                    <div class="start-section__images">
                        <div class="start-section__bg-year"></div>
                        <FireworksBackground v-if="showFireworks" />
                        <ImageChristmasTree
                            class="start-section__image--tree"
                            :electricity="plugInSocket"
                            :switchedOn="switchedOn" />
                    </div>
                    <PlugButton
                        class="start-section__plug-button"
                        @btnClick="plugButtonClickHandler"
                        @mouseEnter="plugButtonMouseenterHandler"
                        @mouseLeave="plugButtonMouseleaveHandler" />
                </main>
                <footer class="start-section__footer">
                    <transition
                        name="fade-down"
                        mode="out-in">
                        <div
                            v-if="changeText"
                            class="start-section__footer-wrapper">
                            <h1 class="start-section__title">
                                С наступающим!
                            </h1>
                            <p class="start-section__description">
                                Загрузка...
                            </p>
                        </div>
                        <div
                            v-else
                            class="start-section__footer-wrapper">
                            <h1 class="start-section__title">
                                Зажгите ёлку
                            </h1>
                            <p class="start-section__description">
                                Возможно вы уже зажгли ёлку, но не нашу
                            </p>
                        </div>
                    </transition>
                </footer>
            </div>
        </transition>
    </section>
</template>

<script>
import AppHeader from '@components/ui/AppHeader.vue';
import PlugButton from '@components/ui/PlugButton.vue';
import ImageChristmasTree from '@components/images/ImageChristmasTree.vue';
import SnowBackground from '@components/images/SnowBackground.vue';
import FireworksBackground from '@components/images/FireworksBackground.vue';
import PreferenceKeeper from '@utils/preferenceKeeper/preferenceKeeper.js';

const delayBeforeChangeText = 1000;
const delayBeforeChangeScreen = 2800;
const delayBeforeShowTwoYearsImage = 3400;

export default {
    name: 'StartSection',
    components: {
        AppHeader,
        ImageChristmasTree,
        PlugButton,
        SnowBackground,
        FireworksBackground,
    },
    data() {
        return {
            plugInSocket: false,
            switchedOn: false,
            changeScreen: false,
            changeText: false,
            showTwoYearsImage: false,
            christmasTreeWasFired: false,
            showFireworks: false,
        };
    },
    methods: {
        plugButtonMouseenterHandler() {
            this.plugInSocket = true;
        },
        plugButtonMouseleaveHandler() {
            this.plugInSocket = false;
        },
        plugButtonClickHandler() {
            this.switchedOn = true;

            setTimeout(() => {
                this.changeText = !this.changeText;
                this.showFireworks = !this.showFireworks;
            }, delayBeforeChangeText);
            setTimeout(() => {
                this.changeScreen = !this.changeScreen;
            }, delayBeforeChangeScreen);
            setTimeout(() => {
                this.showTwoYearsImage = !this.showTwoYearsImage;
                this.enableScroll();
                this.keepPreference();
            }, delayBeforeShowTwoYearsImage);
        },
        disableScroll() {
            document.documentElement.style.overflow = 'hidden';
        },
        enableScroll() {
            document.documentElement.style.overflow = 'auto';
        },
        keepPreference() {
            PreferenceKeeper.setItem('christmasTreeWasFired', true);
            this.christmasTreeWasFired = PreferenceKeeper.getItem('christmasTreeWasFired');
        },
        removePreference() {
            PreferenceKeeper.setItem('christmasTreeWasFired', false);
            this.christmasTreeWasFired = PreferenceKeeper.getItem('christmasTreeWasFired');
        },
        logoClickHandler() {
            if (this.$route.name === 'home' && this.christmasTreeWasFired) {
                this.removePreference();
                location.reload();
            }
        },
    },
    created() {
        this.christmasTreeWasFired = PreferenceKeeper.getItem('christmasTreeWasFired');

        // eslint-disable-next-line no-negated-condition
        if (!this.christmasTreeWasFired) {
            this.removePreference();
            this.disableScroll();
        } else {
            this.changeScreen = true;
            this.showTwoYearsImage = true;
        }
    },
};
</script>

<style lang="scss">
@keyframes scrollPointer {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(18px);
    }

    100% {
        transform: translateY(0);
    }
}

.start-section {
    --header-height: 72px;
    --main-height: calc(100vh - var(--header-height) - var(--footer-height));
    --footer-height: 120px;
    --plug-button-size: 40px;

    position: relative;
    height: 100vh;
    background-image: linear-gradient(180deg, #020133 0%, #433791 100%);

    @media (min-width: $tablet) {
        --header-height: 96px;
        --footer-height: 160px;
    }

    &__header {
        height: var(--header-height);
    }

    &__section-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--header-height));
    }

    &__main {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        align-items: center;
        justify-content: center;
        height: var(--main-height);

        @media (min-width: $tablet) {
            row-gap: 0;
        }
    }

    &__plug-button {
        width: var(--plug-button-size);
        height: var(--plug-button-size);
    }

    &__footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: var(--footer-height);
        padding-top: 16px;
        padding-right: 10px;
        padding-bottom: 16px;
        padding-left: 10px;

        @media (min-width: $tablet) {
            padding-top: 16px;
            padding-bottom: 48px;
        }
    }

    &__footer-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: center;
        text-align: center;

        @media (min-width: $tablet) {
            row-gap: 0;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;

        @media (min-width: $tablet) {
            font-size: 64px;
            line-height: 72px;
        }
    }

    &__description {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }

    &__images {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100% - var(--plug-button-size));
    }

    &__image {
        &--tree {
            z-index: 1;

            @media (min-width: $tablet) {
                width: 80%;
                max-width: 80%;
                height: 80%;
                max-height: 80%;
            }
        }
    }

    &__bg-year {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        width: 100%;
        max-width: 90%;
        height: 100%;
        background-image: url("@images/year-2023.svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateX(-50%) translateY(-60%);

        @media (min-width: $tablet) {
            width: 90%;
            max-width: 60%;
            height: 100%;
            max-height: 70%;
        }
    }

    &__two-years-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        align-self: center;
        justify-content: center;
        width: 80%;
        height: 100%;

        @media (min-width: $tablet) {
            gap: 32px;
        }
    }

    &__snow-background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: 2s ease-in;
        transition-property: opacity;

        .start-section.second-screen & {
            opacity: 1;
        }
    }

    &__two-years-image-wrapper {
        position: relative;
        z-index: 1;
        max-width: 90%;
        max-height: 30%;
    }

    &__two-years-image {
        width: 100%;
        height: 100%;
        max-height: 100%;
    }

    &__two-years-text {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-align: center;

        @media (min-width: $tablet) {
            font-size: 32px;
            line-height: 48px;
        }
    }

    &__scroll-pointer {
        position: absolute;
        bottom: 48px;
        left: 50%;
        display: flex;
        justify-content: center;
        width: 16px;
        height: 48px;
        padding-top: 2px;
        padding-bottom: 2px;
        border: 2px solid #ffffff;
        border-radius: 16px;
        opacity: 0.6;
        transform: translateX(-50%);

        &::after {
            content: "";
            width: 8px;
            height: 22px;
            border-radius: 16px;
            background-color: #ffffff;
            animation: scrollPointer 2s 1s ease-in-out infinite;
        }
    }
}
</style>
