<template>
    <section class="features-section">
        <div class="features-section__container container">
            <h2 class="features-section__title section-title">
                Новые фичи
            </h2>
            <div class="features-section__cards-wrapper">
                <FeatureCard
                    v-for="(card, i) in featureCards"
                    :key="i"
                    :index="i"
                    :title="card.title"
                    :active="currentOpenedCardIndex === i"
                    class="features-section__card"
                    @click="cardClickHandler(i)" />
            </div>
            <div class="features-section__slider-wrapper">
                <FeaturesSlider :cards="featureCards" />
            </div>
        </div>
    </section>
</template>

<script>
import FeatureCard from '@components/ui/FeatureCard.vue';
import FeaturesSlider from '@components/ui/FeaturesSlider.vue';


const FEATURE_CARDS = [
    {
        title: 'Сделай красиво',
    },
    {
        title: 'Маркеры и подсказки',
    },
    {
        title: 'Загрузка шрифтов',
    },
    {
        title: 'Блок-схема',
    },
];

export default {
    name: 'FeaturesSection',
    components: {
        FeatureCard,
        FeaturesSlider,
    },
    data() {
        return {
            currentOpenedCardIndex: 0,
            featureCards: FEATURE_CARDS,
        };
    },
    methods: {
        cardClickHandler(index) {
            this.currentOpenedCardIndex = index;
        },
    },
};
</script>

<style lang="scss">
.features-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 10px;

    &__container {
        overflow: hidden;
        padding: 24px;
        border-radius: 24px;
        background-color: #232754;

        @media (min-width: $tablet) {
            padding: 48px;
            border-radius: 64px;
        }
    }

    &__cards-wrapper {
        display: none;
        column-gap: 8px;

        @media (min-width: $desktop-s) {
            display: flex;
        }
    }

    &__slider-wrapper {
        display: none;

        @media (max-width: 1023px) {
            display: block;
        }
    }
}
</style>
