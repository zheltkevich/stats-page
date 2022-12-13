<template>
    <div
        class="template-achievement"
        v-bind="templateAchievementData"
        @click="rotateAchievement">
        <div class="template-achievement__wrapper">
            <img
                v-if="!firstCircle"
                class="template-achievement__circle"
                src="@images/achievement-circle-white.svg"
                :alt="achievement.text">
            <img
                v-else
                class="template-achievement__circle"
                src="@images/achievement-circle-blue.svg"
                alt="Эдди">
            <transition name="fade">
                <StarsExplosion v-if="firstCircle && rotated" />
                <div
                    v-else-if="firstCircle && !rotated"
                    class="template-achievement__image template-achievement__image--eddi"></div>
                <div
                    v-else-if="!firstCircle && rotated && index === 1"
                    class="template-achievement__image template-achievement__image--background template-achievement__image--1"></div>
                <div
                    v-else-if="!firstCircle && rotated && index === 2"
                    class="template-achievement__image template-achievement__image--background template-achievement__image--2"></div>
                <div
                    v-else-if="!firstCircle && rotated && index === 3"
                    class="template-achievement__image template-achievement__image--background template-achievement__image--3"></div>
                <span
                    v-else-if="!firstCircle && !rotated"
                    class="template-achievement__counter">{{ counterText }}</span>
            </transition>
        </div>
        <span
            v-if="!firstCircle"
            class="template-achievement__badge">
            <svg
                v-if="index === 1"
                class="template-achievement__badge-svg"
                width="18"
                height="29"
                viewBox="0 0 18 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.7584 26.28V29H2.39844V26.28H8.53844V6.74C8.53844 6.15333 8.55844 5.56 8.59844 4.96L3.49844 9.34C3.3251 9.48667 3.15177 9.58 2.97844 9.62C2.8051 9.64667 2.6451 9.64667 2.49844 9.62C2.35177 9.59333 2.21177 9.54 2.07844 9.46C1.95844 9.38 1.8651 9.29333 1.79844 9.2L0.678438 7.66L9.21844 0.279998H12.1184V26.28H17.7584Z"
                    fill="white" />
            </svg>
            <svg
                v-else-if="index === 2"
                class="template-achievement__badge-svg"
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.1384 25.62C18.5251 25.62 18.8318 25.7333 19.0584 25.96C19.2851 26.1867 19.3984 26.48 19.3984 26.84V29H0.278438V27.78C0.278438 27.5267 0.331771 27.2667 0.438438 27C0.545104 26.7333 0.711771 26.4867 0.938438 26.26L10.1184 17.04C10.8784 16.2667 11.5718 15.5267 12.1984 14.82C12.8251 14.1 13.3584 13.38 13.7984 12.66C14.2384 11.94 14.5784 11.2133 14.8184 10.48C15.0584 9.73333 15.1784 8.94 15.1784 8.1C15.1784 7.26 15.0451 6.52667 14.7784 5.9C14.5118 5.26 14.1451 4.73333 13.6784 4.32C13.2251 3.90666 12.6851 3.6 12.0584 3.4C11.4318 3.18667 10.7584 3.08 10.0384 3.08C9.3051 3.08 8.63177 3.18667 8.01844 3.4C7.4051 3.61333 6.85844 3.91333 6.37844 4.3C5.91177 4.67333 5.51844 5.12 5.19844 5.64C4.87844 6.16 4.65177 6.73333 4.51844 7.36C4.35844 7.82667 4.13844 8.14 3.85844 8.3C3.59177 8.44667 3.21177 8.48667 2.71844 8.42L0.858438 8.1C1.0451 6.79333 1.4051 5.64 1.93844 4.64C2.4851 3.62667 3.1651 2.78 3.97844 2.1C4.8051 1.42 5.7451 0.906666 6.79844 0.559999C7.85177 0.199998 8.99177 0.0199976 10.2184 0.0199976C11.4318 0.0199976 12.5651 0.199998 13.6184 0.559999C14.6718 0.919998 15.5851 1.44666 16.3584 2.14C17.1318 2.82 17.7384 3.65333 18.1784 4.64C18.6184 5.62667 18.8384 6.74667 18.8384 8C18.8384 9.06667 18.6784 10.06 18.3584 10.98C18.0384 11.8867 17.6051 12.7533 17.0584 13.58C16.5118 14.4067 15.8784 15.2133 15.1584 16C14.4518 16.7867 13.6984 17.58 12.8984 18.38L5.33844 26.1C5.87177 25.9533 6.41177 25.84 6.95844 25.76C7.5051 25.6667 8.03177 25.62 8.53844 25.62H18.1384Z"
                    fill="white" />
            </svg>
            <svg
                v-else-if="index === 3"
                class="template-achievement__badge-svg"
                width="20"
                height="30"
                viewBox="0 0 20 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.998438 8.1C1.1851 6.79333 1.5451 5.64 2.07844 4.64C2.61177 3.62667 3.2851 2.78 4.09844 2.1C4.9251 1.42 5.8651 0.906666 6.91844 0.559999C7.9851 0.199998 9.13177 0.0199976 10.3584 0.0199976C11.5718 0.0199976 12.6918 0.193331 13.7184 0.539998C14.7451 0.886665 15.6251 1.38 16.3584 2.02C17.1051 2.66 17.6851 3.43333 18.0984 4.34C18.5118 5.24667 18.7184 6.25333 18.7184 7.36C18.7184 8.26667 18.5984 9.08 18.3584 9.8C18.1318 10.5067 17.7984 11.1267 17.3584 11.66C16.9318 12.1933 16.4118 12.6467 15.7984 13.02C15.1851 13.3933 14.4984 13.7 13.7384 13.94C15.6051 14.42 17.0051 15.2467 17.9384 16.42C18.8851 17.58 19.3584 19.0333 19.3584 20.78C19.3584 22.1 19.1051 23.2867 18.5984 24.34C18.1051 25.3933 17.4251 26.2933 16.5584 27.04C15.6918 27.7733 14.6784 28.34 13.5184 28.74C12.3718 29.1267 11.1384 29.32 9.81844 29.32C8.29844 29.32 6.99844 29.1333 5.91844 28.76C4.83844 28.3733 3.9251 27.8467 3.17844 27.18C2.43177 26.5133 1.81844 25.7267 1.33844 24.82C0.858438 23.9 0.451771 22.9067 0.118438 21.84L1.65844 21.2C2.05844 21.0267 2.4451 20.98 2.81844 21.06C3.2051 21.14 3.4851 21.36 3.65844 21.72C3.83177 22.0933 4.0451 22.54 4.29844 23.06C4.5651 23.58 4.9251 24.08 5.37844 24.56C5.83177 25.04 6.4051 25.4467 7.09844 25.78C7.8051 26.1133 8.69844 26.28 9.77844 26.28C10.7784 26.28 11.6518 26.12 12.3984 25.8C13.1584 25.4667 13.7851 25.04 14.2784 24.52C14.7851 24 15.1651 23.42 15.4184 22.78C15.6718 22.14 15.7984 21.5067 15.7984 20.88C15.7984 20.1067 15.6984 19.4 15.4984 18.76C15.2984 18.12 14.9251 17.5667 14.3784 17.1C13.8318 16.6333 13.0784 16.2667 12.1184 16C11.1718 15.7333 9.95177 15.6 8.45844 15.6V13.02C9.6851 13.0067 10.7251 12.8733 11.5784 12.62C12.4451 12.3667 13.1451 12.02 13.6784 11.58C14.2251 11.14 14.6184 10.6133 14.8584 10C15.1118 9.38667 15.2384 8.70667 15.2384 7.96C15.2384 7.13333 15.1051 6.41333 14.8384 5.8C14.5851 5.18666 14.2318 4.68 13.7784 4.28C13.3251 3.88 12.7851 3.58 12.1584 3.38C11.5451 3.18 10.8784 3.08 10.1584 3.08C9.43844 3.08 8.7651 3.18667 8.13844 3.4C7.5251 3.61333 6.97844 3.91333 6.49844 4.3C6.03177 4.67333 5.63844 5.12 5.31844 5.64C4.99844 6.16 4.77177 6.73333 4.63844 7.36C4.4651 7.82667 4.2451 8.14 3.97844 8.3C3.7251 8.44667 3.35177 8.48667 2.85844 8.42L0.998438 8.1Z"
                    fill="white" />
            </svg>
        </span>
    </div>
</template>

<script>
import { pluralize, maskNumber } from '@utils/utils.js';
import StarsExplosion from '@components/images/StarsExplosion.vue';

export default {
    name: 'TemplateAchievement',
    components: {
        StarsExplosion,
    },
    data() {
        return {
            rotated: false,
        };
    },
    props: {
        achievement: {
            type: Object,
            default: () => ({}),
        },
        index: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        firstCircle() {
            return this.index === 0;
        },
        templateAchievementData() {
            return {
                class: {
                    'rotated': this.rotated,
                    'has-badge': this.hasBadge,
                    'first-circle': this.firstCircle,
                },
            };
        },
        hasBadge() {
            return !this.firstCircle;
        },
        counterText() {
            const counter = maskNumber(this.achievement.value);
            const text = pluralize(this.achievement.value, ['раз', 'раза', 'раз']);

            return `${counter} ${text}`;
        },
    },
    methods: {
        rotateAchievement() {
            this.rotated = !this.rotated;
        },
    },
};
</script>

<style lang="scss">
.template-achievement {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    @media (min-width: $tablet) {
        font-size: 40px;
    }

    &__badge {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22%;
        height: 22%;
        border: 5px solid #525ce2;
        border-radius: 50%;
        background-color: #cd2e4f;
    }

    &__badge-svg {
        width: 45%;
        height: 45%;
    }

    &__wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transition: 0.5s ease;
        transition-property: transform;

        .template-achievement.rotated & {
            transform: rotateY(180deg);
        }
    }

    &__circle {
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;
        height: 100%;
    }

    &__image {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        display: flex;
        overflow: hidden;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background-repeat: no-repeat;
        transform: translate(-50%, -50%);

        &--eddi {
            background-image: url("@images/eddi_star.png");
            background-position-x: 50%;
            background-position-y: 74%;
            background-size: 81%;
        }

        &--1 {
            background-image: url("@images/template-example.png");
        }

        &--2 {
            background-image: url("@images/template-example.png");
        }

        &--3 {
            background-image: url("@images/template-example.png");
        }

        &--background {
            top: unset;
            left: unset;
            width: 80%;
            height: 80%;
            background-color: #cccff9;
            background-position: center;
            background-size: 64%;
            transform: rotateY(180deg);
        }
    }

    &__counter {
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-align: center;
        transform: translate(-50%, -50%);

        @media (min-width: 800px) {
            font-size: 40px;
            line-height: 48px;
        }
    }
}
</style>
