<template>
    <header class="app-header">
        <router-link
            class="app-header__logo-wrapper"
            :to="{ name: 'home' }"
            @click="logoClickHandler">
            <img
                class="app-header__logo"
                src="@images/courseditor-logo-white.svg"
                alt="Логотип КурсЭдитор">
            <svg
                class="app-header__logo-hat"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.1892 11.9124C18.1892 12.3445 18.5395 12.6948 18.9716 12.6948C19.4037 12.6948 19.7539 12.3445 19.7539 11.9124V10.4039L20.7566 11.531C21.0438 11.8538 21.5383 11.8827 21.8611 11.5955C22.184 11.3083 22.2128 10.8138 21.9256 10.4909L20.7147 9.12975H22.5367C22.9688 9.12975 23.3191 8.77947 23.3191 8.34738C23.3191 7.91529 22.9688 7.56501 22.5367 7.56501H20.8604L22.0457 6.37974C22.3512 6.07421 22.3512 5.57884 22.0457 5.27331C21.7401 4.96777 21.2448 4.96777 20.9392 5.27331L19.7539 6.45859V4.78237C19.7539 4.35028 19.4037 4 18.9716 4C18.5395 4 18.1892 4.35028 18.1892 4.78237V6.2909L17.1865 5.16381C16.8993 4.84098 16.4048 4.81209 16.082 5.09929C15.7591 5.38648 15.7303 5.88101 16.0174 6.20384L16.8241 7.1106C14.1848 6.18924 11.3588 6.07142 7.98242 7.91718C5.29103 9.38848 3.87176 13.3263 3.4011 15.494C2.05125 15.6385 1 16.7811 1 18.1693C1 19.6554 2.2047 20.8601 3.69076 20.8601H17.1105C18.5966 20.8601 19.8013 19.6554 19.8013 18.1693C19.8013 16.7782 18.7456 15.6336 17.3916 15.4931C16.1174 13.9001 16.0883 12.6204 16.6549 11.6236C16.7828 11.5892 16.9036 11.5218 17.004 11.4214L18.1892 10.2362V11.9124Z"
                    fill="#A5A5A5" />
                <path
                    d="M6.98242 6.77389C4.10281 8.34808 2.67947 12.7458 2.31616 14.7781H16.7577C13.0111 10.6568 17.4049 8.51096 19.7891 7.86381C15.9403 5.68396 12.0915 3.98094 6.98242 6.77389Z"
                    fill="#FF0000" />
                <rect
                    y="14.3353"
                    width="18.8013"
                    height="5.38152"
                    rx="2.69076"
                    fill="white" />
                <rect
                    x="15.6666"
                    y="3.43599"
                    width="8.69478"
                    height="1.56474"
                    rx="0.782368"
                    transform="rotate(48.343 15.6666 3.43599)"
                    fill="white" />
                <rect
                    x="21.599"
                    y="4.68324"
                    width="8.69478"
                    height="1.56474"
                    rx="0.782368"
                    transform="rotate(135 21.599 4.68324)"
                    fill="white" />
                <rect
                    x="22.319"
                    y="7.98647"
                    width="8.69478"
                    height="1.56474"
                    rx="0.782368"
                    transform="rotate(-180 22.319 7.98647)"
                    fill="white" />
                <rect
                    x="17.1893"
                    y="11.5515"
                    width="8.69478"
                    height="1.56474"
                    rx="0.782368"
                    transform="rotate(-90 17.1893 11.5515)"
                    fill="white" />
            </svg>
        </router-link>
        <router-link
            class="app-header__personal-stats-link"
            :to="headerLinkRoute">
            <svg
                class="app-header__personal-stats-link-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M35.15 23.25L31.2667 24.2833L27.9333 22.4V17.6L31.2667 15.7167L35.15 16.75L36.0167 13.5333L33.0667 12.75L33.8333 9.8L30.6167 8.93333L29.5833 12.8167L26.25 14.7L22.1667 12.3V8.53333L25.0167 5.68333L22.65 3.33333L20.5 5.48333L18.35 3.33333L15.9833 5.68333L18.8333 8.53333V12.3L14.6667 14.7L11.3333 12.8167L10.3667 8.93333L7.16667 9.8L7.95 12.75L5 13.5333L5.86667 16.75L9.75 15.7167L13.0833 17.6V22.4167L9.75 24.3L5.86667 23.2667L5 26.4833L7.95 27.2667L7.16667 30.2L10.3833 31.0667L11.4167 27.1833L14.75 25.3L18.8333 27.7V31.4667L15.9833 34.3167L18.35 36.6667L20.5 34.5167L22.65 36.6667L25 34.3167L22.1667 31.4667V27.7L26.3333 25.2833L29.6667 27.1667L30.7 31.05L33.8333 30.2L33.05 27.25L36 26.4667L35.15 23.25ZM16.3333 17.6L20.5 15.1833L24.6667 17.6V22.4L20.5 24.8167L16.3333 22.4V17.6Z"
                    fill="white" />
            </svg>
            <span class="app-header__personal-stats-link-text">{{ headerLinkText }}</span>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    computed: {
        currentRoute() {
            return this.$route.name;
        },
        headerLinkRoute() {
            if (this.currentRoute === 'home') return { name: 'personal' };

            return { name: 'home' };
        },
        headerLinkText() {
            if (this.currentRoute === 'home') return 'Ваша статистика';

            return 'Итоги 2022';

        },
    },
    methods: {
        logoClickHandler() {
            this.$emit('clickLogo');
        },
    },
};
</script>

<style lang="scss">
.app-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 16px 10px;
    column-gap: 16px;

    @media (min-width: $tablet) {
        padding: 28px 32px;
    }

    &__logo-wrapper {
        position: relative;
        display: flex;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    &__logo {
        display: flex;
        width: 100px;

        @media (min-width: $tablet) {
            width: auto;
        }
    }

    &__logo-hat {
        position: absolute;
        top: -1px;
        right: -3px;
        width: 12px;
        height: 12px;

        @media (min-width: $tablet) {
            top: -10px;
            right: -6px;
            width: auto;
            height: auto;
        }
    }

    &__personal-stats-link {
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

        &:hover {
            .app-header__personal-stats-link-icon {
                transform: rotate(45deg);
            }
        }
    }

    &__personal-stats-link-icon {
        width: 16px;
        transition: 0.2s ease-in-out;
        transition-property: transform;
        transform: rotate(0);

        @media (min-width: $tablet) {
            width: auto;
        }
    }
}
</style>
