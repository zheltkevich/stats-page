<template>
    <div
        class="large-card"
        :class="[blockType, card.class]">
        <h3 class="large-card__title block-title">
            {{ computedTitle }}
        </h3>
        <p class="large-card__description block-text">
            {{ computedDescription }}
        </p>
        <div class="large-card__bg-image"></div>
    </div>
</template>

<script>
import { maskNumber, pluralize } from '@utils/utils.js';

export default {
    name: 'LargeCard',
    props: {
        card: {
            type: Object,
            default: () => ({}),
        },
        blockType: {
            type: String,
            default: '',
        },
    },
    computed: {
        computedTitle() {
            switch (this.blockType) {
                case 'courses':
                    return `Состоим на\u00A0${this.card.statCount}%\u00A0из\u00A0вас`;
                case 'content':
                    return `${maskNumber(this.card.statCount)} ${pluralize(this.card.statCount, ['символ', 'символа', 'символов'])}`;
                case 'templates':
                    return this.computedTemplatesCardTitle;
                default:
                    return 'Title';
            }
        },
        computedTemplatesCardTitle() {
            switch (this.card.class) {
                case 'top-template':
                    return `Использован ${maskNumber(this.card.statCount)}\u00A0${pluralize(this.card.statCount, ['раз', 'раза', 'раз'])}`;
                case 'summ-templates':
                    return `${maskNumber(this.card.statCount)} ${pluralize(this.card.statCount, ['шаблон', 'шаблона', 'шаблонов'])}`;
                default:
                    return 'Title';
            }
        },
        computedDescription() {
            switch (this.blockType) {
                case 'courses':
                    return `Созданные вами курсы составляют ${this.card.statCount}%\u00A0от\u00A0всех курсов CoursEditor`;
                case 'content':
                    return 'напечатано вашими руками';
                case 'templates':
                    return this.computedTemplatesCardDescription;
                default:
                    return 'Title';
            }
        },
        computedTemplatesCardDescription() {
            switch (this.card.class) {
                case 'top-template':
                    return this.card.statName;
                case 'summ-templates':
                    return 'использовано в\u00A0ваших курсах';
                default:
                    return 'Title';
            }
        },
    },
};
</script>

<style lang="scss">
.large-card {
    position: relative;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    row-gap: 8px;
    align-items: flex-start;
    overflow: hidden;
    padding: 16px;
    border-radius: 16px;
    background-color: #4550ca;
    background-position: 100% 100%;
    background-size: 30%;
    background-repeat: no-repeat;

    @media (min-width: $tablet) {
        padding: 32px;
        border-radius: 32px;
    }

    &__title,
    &__description {
        max-width: 80%;
    }

    &__title {
        .large-card.top-template & {
            order: 2;
        }
    }

    &__description {
        .large-card.top-template & {
            display: flex;
            align-items: center;
            order: 1;
            padding: 8px 16px;
            border-radius: 55px;
            background-color: #616bf2;
            column-gap: 8px;

            &::before {
                content: "";
                display: flex;
                flex-shrink: 0;
                width: 32px;
                height: 32px;
                background-image: url("@icons/icon-medal.svg");
                background-position: center;
                background-size: 90%;
                background-repeat: no-repeat;
            }
        }
    }

    &.top-template {
        row-gap: 8px;

        @media (min-width: $tablet) {
            row-gap: 24px;
        }
    }

    &__bg-image {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40%;
        height: 80px;
        background-position: bottom right;
        background-size: contain;
        background-repeat: no-repeat;

        @media (min-width: $tablet) {
            height: 120px;
        }

        .large-card.top-template & {
            background-image: url("@images/hand-with-heart.svg");
        }

        .large-card.summ-templates & {
            background-image: url("@images/cool-hand.svg");
        }

        .stats-page-block.courses & {
            background-image: url("@images/clapping-hands.svg");
        }

        .stats-page-block.content & {
            background-image: url("@images/stars-hand.svg");
        }
    }
}
</style>
