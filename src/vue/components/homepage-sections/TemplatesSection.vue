<template>
    <section class="templates-section">
        <div class="templates-section__container container">
            <h2 class="templates-section__title section-title">
                Топ шаблонов
            </h2>
            <div class="templates-section__achievements">
                <Swiper
                    class="templates-section__achievements-slider achievements-slider"
                    v-bind="sliderOptions"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange">
                    <SwiperSlide
                        v-for="(achievement, i) in achievements"
                        :key="i"
                        class="achievements-slider__slide">
                        <TemplateAchievement
                            class="achievements-slider__template-achievement"
                            :index="i"
                            :achievement="achievement"
                            :counter="achievement.counter" />
                        <h3 class="achievements-slider__slide-title">
                            {{ achievement.text }}
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import TemplateAchievement from '@components/ui/TemplateAchievement.vue';

export default {
    name: 'TemplatesSection',
    components: {
        Swiper,
        SwiperSlide,
        TemplateAchievement,
    },
    data() {
        return {
            achievements: this.stats,
        };
    },
    props: {
        stats: {
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
                    376: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,
                    },
                    430: {
                        slidesPerView: 1.6,
                        spaceBetween: 24,
                    },
                    600: {
                        slidesPerView: 2.2,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 24,
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
.templates-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #525ce2;

    @media (min-width: $tablet) {
        border-radius: 32px;
    }

    &__container {
        padding-top: 32px;
        padding-bottom: 32px;

        @media (min-width: $tablet) {
            padding-top: 80px;
            padding-bottom: 80px;
        }
    }

    &__title {
        margin-bottom: 24px;

        @media (min-width: $tablet) {
            margin-bottom: 48px;
        }
    }

    &__achievements {
        padding-right: 8px;
        padding-left: 8px;

        @media (min-width: $tablet) {
            padding-right: 0;
            padding-left: 0;
        }
    }
}

.achievements-slider {
    counter-reset: section;

    &.swiper {
        overflow: visible;
    }

    &__slide {
        width: 400px;

        .template-achievement.first-circle {
            +.achievements-slider__slide-title {
                opacity: 0.4;
            }
        }
    }

    &__slide-title {
        margin-top: 8px;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;

        @media (min-width: $tablet) {
            margin-top: 32px;
            font-size: 40px;
            line-height: 1;
        }
    }
}
</style>
