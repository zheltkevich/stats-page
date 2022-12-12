<template>
    <section class="final-section">
        <div class="final-section__container container">
            <router-link
                class="final-section__personal-stats-link"
                :to="{
                    name: 'personal',
                }">
                <span class="final-section__personal-stats-link-icon"></span>
                <span class="final-section__personal-stats-link-text">Ваша статистика за&nbsp;2022&nbsp;год&nbsp;→</span>
            </router-link>
            <div class="final-section__content-wrapper">
                <h2 class="final-section__title">
                    <span>Спасибо за этот</span>
                    <span class="final-section__bordered-text">чудесный год.</span>
                </h2>
                <div class="final-section__content">
                    <p class="final-section__text">
                        <span>Пусть следующий будет еще</span>
                        <span class="final-section__bordered-text">лучше!</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FinalSection',
};
</script>

<style lang="scss">
.final-section {
    display: flex;
    flex-direction: column;
    background-color: #525ce2;

    &__container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        row-gap: 24px;
        padding-top: 48px;
        padding-bottom: 0;

        @media (min-width: $tablet) {
            padding-top: 80px;
        }
    }

    &__personal-stats-link {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: 16px;
        background-color: #000000;
        color: #ffffff;
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        text-decoration: none;
        column-gap: 24px;

        @media (min-width: $tablet) {
            padding: 24px 40px;
            border-radius: 100px;
            font-size: 40px;
            line-height: 48px;
        }
    }

    &__personal-stats-link-icon {
        display: flex;
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        background-image: url("@icons/icon-ribbon.svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        @media (min-width: $tablet) {
            width: 48px;
            height: 48px;
        }
    }

    &__content-wrapper {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        row-gap: 8px;
        background-image: url("@images/eddi_final.png");
        background-position: 90% 100%;
        background-size: 35%;
        background-repeat: no-repeat;
        font-weight: 500;
        font-size: 35px;
        line-height: 48px;

        @media (min-width: $tablet) {
            row-gap: 16px;
            background-position: 100% 97%;
            background-size: 30%;
            font-size: 96px;
            line-height: 120px;
        }

        @media (min-width: 800px) {
            background-position: 95% 100%;
            background-size: 35%;
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: flex-start;
        justify-content: flex-start;
        font: inherit;

        @media (min-width: $tablet) {
            row-gap: 16px;
        }
    }

    &__content {
        width: auto;
        max-width: 350px;
        padding-bottom: 32px;

        @media (min-width: $tablet) {
            max-width: unset;
            padding-bottom: 64px;
        }
    }

    &__text {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: flex-start;

        @media (min-width: $tablet) {
            row-gap: 16px;
        }
    }

    &__bordered-text {
        padding: 8px 16px;
        border: 1px solid #ffffff;
        border-radius: 110px;

        @media (min-width: $tablet) {
            padding: 24px 40px;
        }
    }

    &__footer {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px solid #6b75f9;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        @media (min-width: $tablet) {
            padding-top: 32px;
            padding-bottom: 32px;
            font-size: 24px;
            line-height: 32px;
        }
    }
}
</style>
