<template>
    <section class="results-section">
        <div class="results-section__container container">
            <h2 class="results-section__title section-title">
                Как прошел&nbsp;год
            </h2>
            <div class="results-section__cards-wrapper">
                <div class="results-section__minicards-wrapper">
                    <div
                        v-for="(minicard, i) in minicards"
                        :key="i"
                        class="results-section__results-minicard results-minicard">
                        <span class="results-minicard__result-counter">{{ maskNumber(minicard.value) }}</span>
                        <span class="results-minicard__text">{{ minicard.text }}</span>
                    </div>
                </div>
                <div class="results-section__results-card results-card">
                    <div class="results-card__main-section">
                        <p class="results-card__text">
                            Загружено {{ dataStats.value }} TB данных
                        </p>
                        <div class="results-card__bg-image"></div>
                    </div>
                    <div class="results-card__stats-section">
                        <div
                            v-for="(item, i) in otherStats"
                            :key="i"
                            class="results-card__result">
                            <i
                                class="results-card__icon"
                                :class="[item.type]">
                            </i>
                            <div class="results-card__result-info-wrapper">
                                <span class="results-card__result-counter">{{ maskNumber(item.value) }}</span>
                                <span class="results-card__result-text">{{ item.text }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { maskNumber } from '@utils/utils.js';

export default {
    name: 'ResultsSection',
    props: {
        stats: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        minicards() {
            const minicards = [];

            this.stats.forEach(item => {
                if (item.component === 'minicard') minicards.push({ ...item });
            });

            return minicards;
        },
        otherStats() {
            const otherStats = [];

            this.stats.forEach(item => {
                if (item.component !== 'minicard' && item.type !== 'data') otherStats.push(item);
            });

            return { ...otherStats };
        },
        dataStats() {
            const dataStats = this.stats.find(item => item.type === 'data');

            return { ...dataStats };
        },
    },
    methods: {
        maskNumber(number) {
            return maskNumber(number);
        },
    },
};
</script>

<style lang="scss">
.results-section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__container {
        padding-bottom: 48px;

        @media (min-width: $tablet) {
            padding-bottom: 64px;
        }
    }

    &__cards-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media (min-width: $tablet) {
            gap: 16px;
        }
    }

    &__minicards-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        order: 2;

        @media (min-width: $tablet) {
            gap: 16px;
            order: 1;
        }
    }
}

.results-minicard {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 30%;
    flex-direction: column;
    gap: 8px;
    min-width: min-content;
    padding: 16px;
    border-radius: 16px;
    background-color: #232754;

    @media (min-width: $tablet) {
        padding: 32px;
        border-radius: 24px;
    }

    &__result-counter {
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;

        @media (min-width: $tablet) {
            font-size: 40px;
            line-height: 48px;
        }
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        @media (min-width: $tablet) {
            font-size: 20px;
            line-height: 32px;
        }
    }
}

.results-card {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    flex-direction: column;
    order: 1;
    padding-right: 24px;
    padding-left: 24px;
    border-radius: 16px;
    background-color: #525ce2;

    @media (min-width: $tablet) {
        flex-direction: row;
        gap: 40px;
        justify-content: space-between;
        order: 2;
        padding-right: 48px;
        padding-left: 48px;
        border-radius: 32px;
    }

    &__main-section {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding-top: 24px;

        @media (min-width: $tablet) {
            gap: 16px;
            padding-top: 40px;
        }
    }

    &__stats-section {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        gap: 24px;
        padding-top: 24px;
        padding-bottom: 24px;

        @media (min-width: $tablet) {
            gap: 40px;
            padding-top: 40px;
            padding-bottom: 40px;
        }
    }

    &__text {
        font-weight: 700;
        font-size: 22px;
        line-height: 32px;

        @media (min-width: $tablet) {
            font-size: 32px;
            line-height: 48px;
        }
    }

    &__bg-image {
        display: flex;
        flex-grow: 1;
        background-image: url("@images/eddi_ng.png");
        background-position: center bottom;
        background-size: contain;
        background-repeat: no-repeat;
    }

    &__result {
        display: flex;
        gap: 16px;
    }

    &__result-info-wrapper {
        display: flex;
        flex-direction: column;
    }

    &__icon {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #636ce4;
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;

        @media (min-width: $tablet) {
            width: 64px;
            height: 64px;
        }

        &.images {
            background-image: url("@icons/icon-image.svg");
        }

        &.video {
            background-image: url("@icons/icon-video.svg");
        }

        &.tests {
            background-image: url("@icons/icon-test.svg");
        }
    }

    &__result-counter {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;

        @media (min-width: $tablet) {
            font-size: 24px;
            line-height: 32px;
        }
    }

    &__result-text {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;

        @media (min-width: $tablet) {
            font-size: 20px;
            line-height: 32px;
        }
    }
}
</style>
