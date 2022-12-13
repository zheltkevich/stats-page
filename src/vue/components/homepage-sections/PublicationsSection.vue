<template>
    <section class="publications-section">
        <div class="publications-section__container container">
            <h2 class="publications-section__title section-title">
                Публикации
            </h2>
            <div class="publications-section__table publications-table">
                <div class="publications-table__legend">
                    <span class="publications-table__legend-format">Формат</span>
                    <span class="publications-table__legend-counter">Кол-во выгруженных</span>
                </div>
                <div class="publications-table__table">
                    <div
                        v-for="(item, i) in publications"
                        :key="i"
                        class="publications-table__row">
                        <span class="publications-table__row-title">
                            {{ item.text }}
                        </span>
                        <span class="publications-table__row-counter">{{ counterText(item.value) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { pluralize, maskNumber } from '@utils/utils.js';

export default {
    name: 'PublicationsSection',
    data() {
        return {
            publications: this.stats,
        };
    },
    props: {
        stats: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        counterText(value) {
            const counter = maskNumber(value);
            const text = pluralize(value, ['публикация', 'публикации', 'публикаций']);

            return `${counter} ${text}`;
        },
    },
};
</script>

<style lang="scss">
.publications-section {
    display: flex;
    justify-content: center;

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 32px;
        padding-bottom: 0;

        @media (min-width: $tablet) {
            padding-top: 64px;
        }
    }
}

.publications-table {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: $tablet) {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    &__legend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        @media (min-width: $tablet) {
            font-size: 24px;
            line-height: 32px;
        }
    }

    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        padding-bottom: 16px;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        column-gap: 16px;

        @media (min-width: $tablet) {
            padding-top: 32px;
            padding-bottom: 32px;
            font-size: 40px;
            line-height: 48px;
        }

        &:not(:last-child) {
            border-bottom: 1px solid #5c66ed;
        }
    }

    &__row-counter {
        text-align: right;
    }
}
</style>
