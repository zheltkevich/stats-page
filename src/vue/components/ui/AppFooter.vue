<template>
    <footer class="app-footer">
        <div class="app-footer__container container">
            <span class="app-footer__logo-wrapper">
                © 2022 Course Editor
            </span>
            <ShareButton />
        </div>
    </footer>
</template>

<script>
import ShareButton from '@components/ui/ShareButton.vue';

export default {
    name: 'AppFooter',
    components: {
        ShareButton,
    },
};
</script>

<style lang="scss">
.app-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #6b75f9;
    background-color: #525ce2;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    @media (min-width: $tablet) {
        padding-top: 32px;
        padding-bottom: 32px;
        font-size: 24px;
        line-height: 32px;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0;
        padding-bottom: 0;
    }
}
</style>
