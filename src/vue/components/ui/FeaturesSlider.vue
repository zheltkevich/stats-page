<template>
    <Swiper
        class="features-slider"
        v-bind="sliderOptions"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <SwiperSlide
            v-for="(card, i) in cards"
            :key="i"
            class="features-slider__slide">
            <FeatureCard
                :key="i"
                class="features-slider__card"
                :index="i"
                :title="card.title"
                :active="currentOpenedCardIndex === i" />
        </SwiperSlide>
    </Swiper>
</template>

<script>
import FeatureCard from '@components/ui/FeatureCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

export default {
    name: 'FeaturesSlider',
    components: {
        Swiper,
        SwiperSlide,
        FeatureCard,
    },
    props: {
        cards: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        sliderOptions() {
            return {
                slidesPerView: 1,
                spaceBetween: 8,
                pagination: { clickable: true },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 8,
                    },
                    660: {
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 2,
                    },
                },
            };
        },
    },
    setup() {
        const onSwiper = _swiper => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination],
        };
    },
};
</script>

<style lang="scss">
.features-slider {
    height: 100%;

    &.swiper {
        overflow: visible;
    }
}
</style>
