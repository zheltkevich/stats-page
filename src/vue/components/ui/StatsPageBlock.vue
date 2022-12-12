<template>
    <article
        class="stats-page-block"
        :class="[block.type]">
        <header class="stats-page-block__header">
            <h2 class="stats-page-block__title block-title">
                {{ block.title }}
            </h2>
            <div class="stats-page-block__icon"></div>
        </header>
        <div class="stats-page-block__cards">
            <component
                :is="card.component"
                v-for="(card, i) in block.items"
                :key="i"
                :card="card"
                :blockType="block.type" />
        </div>
    </article>
</template>

<script>
import LargeCard from '@components/ui/LargeCard.vue';
import SmallCard from '@components/ui/SmallCard.vue';

export default {
    name: 'StatsPageBlock',
    components: {
        LargeCard,
        SmallCard,
    },
    props: {
        block: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style lang="scss">
.stats-page-block {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: $tablet) {
        gap: 16px;
    }

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
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;

        @media (min-width: $tablet) {
            width: 72px;
            height: 72px;
        }

        .stats-page-block.courses & {
            background-image: url("@icons/icon-fire.svg");
        }

        .stats-page-block.content & {
            background-image: url("@icons/icon-hourglass.svg");
        }

        .stats-page-block.templates & {
            background-image: url("@icons/icon-heart.svg");
        }
    }

    &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        @media (min-width: $tablet) {
            gap: 16px;
        }
    }
}
</style>
