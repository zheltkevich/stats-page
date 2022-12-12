<template>
    <article
        class="feature-card"
        :class="{ active }"
        v-bind="featureCardData">
        <div class="feature-card__info">
            <i
                class="feature-card__icon"
                :class="{ [`feature-card__icon--${index}`]: true }"></i>
            <h3 class="feature-card__title">
                {{ title }}
            </h3>
        </div>
    </article>
</template>

<script>
export default {
    name: 'FeatureCard',
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        index: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            default: 'Title',
        },
    },
    computed: {
        featureCardData() {
            return {
                class: {
                    active: this.active,
                    [`feature-card--${this.index}`]: true,
                },
            };
        },
    },
};
</script>

<style lang="scss">
.feature-card {
    position: relative;
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 8%;
    align-items: flex-end;
    overflow: hidden;
    min-width: 80px;
    height: 424px;
    border-radius: 16px;
    background-color: #00075c;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: flex-grow;

    @media (min-width: $tablet) {
        border-radius: 40px;
    }

    @media (min-width: 1023px) {
        cursor: pointer;
    }

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00075c;
        opacity: 0.5;
        transition: 0.3s ease-in-out;
        transition-property: opacity;
    }

    &:hover {
        &::after {
            opacity: 0.4;
        }
    }

    .swiper-slide-active & {
        &::after {
            opacity: 0.4;
        }
    }

    &.active {
        flex-grow: 1;

        &::after {
            opacity: 0.4;
        }
    }

    &--0 {
        background-image: url("@images/features/feature-0.gif");
    }

    &--1 {
        background-image: url("@images/features/feature-1.gif");
    }

    &--2 {
        background-image: url("@images/features/feature-2.gif");
    }

    &--3 {
        background-image: url("@images/features/feature-3.gif");
    }

    &__info {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        padding: 16px;
        transition: 0.3s ease-in-out;
        transition-property: padding;
    }

    &__icon {
        display: flex;
        flex-shrink: 1;
        width: 40px;
        min-width: 40px;
        max-width: 80px;
        height: 40px;
        min-height: 40px;
        max-height: 80px;
        padding: 16px;
        border-radius: 50%;
        background-color: #525ce2;
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;
        transition: 0.3s ease-in-out;
        transition-property: width, height;

        @media (min-width: $tablet) {
            width: 48px;
            min-width: 48px;
            max-width: 80px;
            height: 48px;
            min-height: 48px;
            max-height: 80px;
        }

        .feature-card.active & {
            width: 80px;
            height: 80px;
        }

        &--0 {
            background-image: url("@icons/features/emoji-smile.svg");
        }

        &--1 {
            background-image: url("@icons/features/emoji-eyes.svg");
        }

        &--2 {
            background-image: url("@icons/features/emoji-hand.svg");
        }

        &--3 {
            background-image: url("@icons/features/emoji-stars.svg");
        }
    }

    &__title {
        margin-left: 8px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        opacity: 0;
        transition: 0.3s ease-in-out;
        transition-property: opacity, transform;
        transform: translateX(5%) translateY(50%) scaleY(0.2);

        @media (min-width: $tablet) {
            margin-left: 16px;
            font-size: 32px;
            white-space: nowrap;
        }

        .feature-card.active &,
        .swiper-slide-active & {
            opacity: 1;
            transform: translateX(0) translateY(0) scaleY(1);
        }
    }
}
</style>
