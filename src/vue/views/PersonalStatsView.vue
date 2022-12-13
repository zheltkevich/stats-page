<template>
    <div class="personal-stats-view">
        <AppHeader class="personal-stats-view__header" />
        <main class="personal-stats-view__main">
            <aside class="personal-stats-view__aside">
                <TimerBlock class="personal-stats-view__timer-block" />
            </aside>
            <div class="personal-stats-view__content">
                <h1 class="personal-stats-view__title section-title">
                    Статистика за&nbsp;2022&nbsp;год
                </h1>
                <ShareBlock
                    class="personal-stats-view__share-block personal-stats-view__share-block--mobile"
                    :userName="personalStats.userName" />
                <StatsPageBlock
                    v-for="(item, i) in personalStats.stats"
                    :key="i"
                    :block="item" />
                <article class="personal-stats-view__congratulatory-block congratulatory-block">
                    <header class="congratulatory-block__header">
                        <h2 class="congratulatory-block__title block-title">
                            С наступающим!
                        </h2>
                        <div class="congratulatory-block__icon"></div>
                    </header>
                    <router-link
                        :to="{ name: 'home' }"
                        class="congratulatory-block__card">
                        <SnowBackground class="congratulatory-block__snow-background" />
                        <h3 class="congratulatory-block__card-title block-title">
                            Увидимся в&nbsp;новом году!
                        </h3>
                        <span class="congratulatory-block__link">
                            <svg
                                class="congratulatory-block__link-icon"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.15 23.25L31.2667 24.2833L27.9333 22.4V17.6L31.2667 15.7167L35.15 16.75L36.0167 13.5333L33.0667 12.75L33.8333 9.8L30.6167 8.93333L29.5833 12.8167L26.25 14.7L22.1667 12.3V8.53333L25.0167 5.68333L22.65 3.33333L20.5 5.48333L18.35 3.33333L15.9833 5.68333L18.8333 8.53333V12.3L14.6667 14.7L11.3333 12.8167L10.3667 8.93333L7.16667 9.8L7.95 12.75L5 13.5333L5.86667 16.75L9.75 15.7167L13.0833 17.6V22.4167L9.75 24.3L5.86667 23.2667L5 26.4833L7.95 27.2667L7.16667 30.2L10.3833 31.0667L11.4167 27.1833L14.75 25.3L18.8333 27.7V31.4667L15.9833 34.3167L18.35 36.6667L20.5 34.5167L22.65 36.6667L25 34.3167L22.1667 31.4667V27.7L26.3333 25.2833L29.6667 27.1667L30.7 31.05L33.8333 30.2L33.05 27.25L36 26.4667L35.15 23.25ZM16.3333 17.6L20.5 15.1833L24.6667 17.6V22.4L20.5 24.8167L16.3333 22.4V17.6Z"
                                    fill="white" />
                            </svg>
                            <span class="congratulatory-block__link-text">Итоги 2022</span>
                        </span>
                    </router-link>
                </article>
            </div>
            <aside class="personal-stats-view__aside">
                <ShareBlock
                    class="personal-stats-view__share-block personal-stats-view__share-block--desktop"
                    :userName="personalStats.userName" />
            </aside>
        </main>
        <AppFooter class="personal-stats-view__footer" />
    </div>
</template>

<script>
import AppHeader from '@components/ui/AppHeader.vue';
import AppFooter from '@components/ui/AppFooter.vue';
import TimerBlock from '@components/statspage-blocks/TimerBlock.vue';
import ShareBlock from '@components/statspage-blocks/ShareBlock.vue';
import StatsPageBlock from '@components/ui/StatsPageBlock.vue';
import SnowBackground from '@components/images/SnowBackground.vue';

const PERSONAL_STATS = {
    userName: 'Константин',
    stats: [
        {
            type: 'courses',
            title: 'Курсы',
            items: [
                {
                    component: 'LargeCard',
                    statName: null,
                    statCount: 10,
                },
                {
                    component: 'SmallCard',
                    statName: 'создано курсов',
                    statCount: 15,
                },
                {
                    component: 'SmallCard',
                    statName: 'создано лонгридов',
                    statCount: 134,
                },
            ],
        },
        {
            type: 'content',
            title: 'Контент',
            items: [
                {
                    component: 'LargeCard',
                    statName: null,
                    statCount: 156123518,
                },
                {
                    component: 'SmallCard',
                    statName: 'загружено картинок',
                    statCount: 233,
                },
                {
                    component: 'SmallCard',
                    statName: 'загружено видео',
                    statCount: 94,
                },
            ],
        },
        {
            type: 'templates',
            title: 'Шаблоны',
            items: [
                {
                    component: 'LargeCard',
                    statName: 'картинка+текст',
                    statCount: 822,
                    class: 'top-template',
                },
                {
                    component: 'SmallCard',
                    statName: 'заголовок+текст',
                    statCount: 416,
                },
                {
                    component: 'SmallCard',
                    statName: 'тестирование',
                    statCount: 272,
                },
                {
                    component: 'SmallCard',
                    statName: 'цитата',
                    statCount: 157,
                },
                {
                    component: 'SmallCard',
                    statName: 'видео',
                    statCount: 94,
                },
                {
                    component: 'LargeCard',
                    statName: null,
                    statCount: 1769,
                    class: 'summ-templates',
                },
            ],
        },
    ],
};


export default {
    name: 'PersonalStatsView',
    components: {
        AppHeader,
        TimerBlock,
        ShareBlock,
        StatsPageBlock,
        AppFooter,
        SnowBackground,
    },
    data() {
        return {
            personalStats: PERSONAL_STATS,
        };
    },
    created() {
        document.documentElement.style.overflow = 'auto';
    },
    mounted() {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    },
};
</script>

<style lang="scss">
.personal-stats-view {
    min-height: 100vh;
    background-color: #525ce2;

    &__main {
        display: flex;
        max-width: 750px;
        margin-right: auto;
        margin-left: auto;
        padding-top: 32px;
        padding-right: 10px;
        padding-bottom: 64px;
        padding-left: 10px;
        column-gap: 24px;

        @media (min-width: $tablet) {
            padding-top: 64px;
            padding-right: 32px;
            padding-left: 32px;
        }

        @media (min-width: $desktop-s) {
            max-width: 1344px;
            padding-right: 32px;
            padding-bottom: 128px;
            padding-left: 32px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        row-gap: 24px;

        @media (min-width: $tablet) {
            row-gap: 32px;
        }
    }

    &__title {
        display: flex;
        margin-bottom: 0;
        font-size: 35px;
        line-height: 48px;
        text-align: center;

        @media (min-width: $tablet) {
            font-size: 48px;
            line-height: 60px;
        }

        @media (min-width: $desktop) {
            font-size: 96px;
            line-height: 120px;
        }
    }

    &__aside {
        display: none;
        flex-shrink: 0;

        @media (min-width: $tablet) {
            flex-basis: 280px;
            max-width: 280px;
        }

        @media (min-width: $desktop-s) {
            display: flex;
        }

        @media (min-width: $desktop) {
            flex-basis: 302px;
            max-width: 302px;
        }
    }

    &__timer-block,
    &__share-block {
        position: static;
        top: 32px;
        display: flex;
        align-self: flex-start;
        max-width: 100%;

        @media (min-width: $desktop-s) {
            position: sticky;
            min-height: 370px;
        }
    }

    &__timer-block {
        display: none;

        @media (min-width: $desktop-s) {
            display: flex;
        }
    }

    &__share-block {
        &--mobile {
            @media (min-width: $desktop-s) {
                display: none;
            }
        }

        &--desktop {
            display: none;

            @media (min-width: $desktop-s) {
                display: flex;
            }
        }
    }

    &__congratulatory-block {
        max-width: 100%;
    }
}

.congratulatory-block {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 8px;
        padding-right: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        border-radius: 16px;
        background-color: #616bf2;
        column-gap: 16px;

        @media (min-width: $tablet) {
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            border-radius: 32px;
        }
    }

    &__icon {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #525ce2;
        background-image: url("@icons/icon-partying-face.svg");
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;

        @media (min-width: $tablet) {
            width: 72px;
            height: 72px;
        }
    }

    &__card {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        justify-content: space-between;
        width: 100%;
        padding: 16px;
        border-radius: 16px;
        background-color: #181b44;
        background-image: url("@images/christmas-tree.svg");
        background-position: 95% 100%;
        background-size: 26%;
        background-repeat: no-repeat;
        color: #ffffff;
        text-decoration: none;
        aspect-ratio: 16/9;

        @media (min-width: $tablet) {
            padding: 32px;
            border-radius: 32px;
        }

        &:hover {
            .congratulatory-block__link-icon {
                transform: rotate(45deg);
            }
        }
    }

    &__snow-background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    &__card-title {
        max-width: 70%;
    }

    &__link-icon {
        width: 24px;
        transition: 0.2s ease-in-out;
        transition-property: transform;

        @media (min-width: $tablet) {
            width: 40px;
        }
    }

    &__link {
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
        column-gap: 8px;

        @media (min-width: $tablet) {
            font-size: 24px;
            line-height: 32px;
            column-gap: 16px;
        }
    }
}
</style>
