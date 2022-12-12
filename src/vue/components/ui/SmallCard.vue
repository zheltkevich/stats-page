<template>
    <div
        class="small-card"
        :class="[blockType]">
        <span class="small-card__title block-title">
            {{ card.statCount }}
        </span>
        <span class="small-card__description block-text">
            {{ card.statName }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'SmallCard',
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
};
</script>

<style lang="scss">
.small-card {
    display: flex;
    flex-grow: 1;
    flex-basis: 40%;
    flex-direction: column;
    row-gap: 8px;
    padding: 16px;
    border-radius: 16px;
    background-color: #4550ca;

    @media (min-width: $tablet) {
        padding: 32px;
        border-radius: 32px;
    }
}
</style>
