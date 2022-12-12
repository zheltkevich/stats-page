<template>
    <article class="share-block">
        <h2 class="share-block__title block-title">
            {{ userName }},
        </h2>
        <p class="share-block__description block-text">
            Вместе мы провели отличный год! Поделитесь статистикой и удивите своих друзей!
        </p>
        <ShareButton class="share-block__share-button" />
    </article>
</template>

<script>
import ShareButton from '@components/ui/ShareButton.vue';

export default {
    name: 'ShareBlock',
    components: {
        ShareButton,
    },
    props: {
        userName: {
            type: String,
            default: 'Username',
        },
    },
};
</script>

<style lang="scss">
.share-block {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 16px;
    border-radius: 16px;
    background-color: #616bf2;

    @media (min-width: $tablet) {
        padding: 32px;
        border-radius: 32px;
    }

    &__share-button {
        margin-top: auto;
        font-size: 18px;
        line-height: 24px;

        @media (min-width: $tablet) {
            font-size: 20px;
            line-height: 28px;
        }

        @media (min-width: $desktop) {
            font-size: 24px;
            line-height: 32px;
        }
    }
}
</style>
