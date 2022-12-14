<template>
    <button
        class="share-button"
        type="button"
        @click="shareHandler">
        <svg
            class="share-button__icon"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.4855 1.98832C11.587 0.92815 12.6938 0.0557901 13.8095 0.691577C16.1294 2.05047 18.3192 3.59783 20.4362 5.25415C23.0483 7.31684 25.1471 9.26291 26.6316 10.8167C27.2767 11.492 27.2158 12.5602 26.5995 13.2051C25.138 14.734 23.5643 16.1564 21.9404 17.5096C19.3558 19.6252 16.6806 21.6762 13.7671 23.3204C12.7784 23.878 11.7083 23.2403 11.5173 22.2522L11.4954 22.1015L11.192 17.3362C8.77111 17.3871 6.42667 18.2194 4.55159 19.7664L4.19884 20.0632C4.14129 20.1104 4.08438 20.1566 4.0281 20.2016L3.69807 20.4578C3.64435 20.4981 3.59128 20.5372 3.53885 20.5751L3.23216 20.7873C3.13257 20.8529 3.03562 20.9134 2.94137 20.9683L2.66674 21.1167C1.37884 21.7522 0.666687 21.1899 0.666687 18.6668C0.666687 12.7946 4.99363 7.57005 10.8422 6.77759L11.188 6.73611L11.4855 1.98832ZM14.0306 3.95382L13.7752 8.58295C13.7571 8.90984 13.5044 9.17527 13.1788 9.20928L11.3636 9.39896C7.27691 9.88656 4.03513 13.0816 3.43362 17.2578C5.41997 15.7943 7.7798 14.9038 10.2805 14.7079L10.8088 14.677L13.0814 14.629C13.4408 14.6215 13.7415 14.9002 13.7611 15.2591L14.0236 20.0531C16.1612 18.6916 18.1988 17.1258 20.2423 15.4536C21.5619 14.3535 22.8348 13.205 24.0522 11.993L23.7083 11.6527L22.9671 10.9414C21.8023 9.84541 20.4009 8.62432 18.7882 7.35063C17.2339 6.13479 15.657 4.99368 14.0306 3.95382Z"
                fill="white" />
        </svg>
        <span class="share-button__text">Поделиться</span>
    </button>
</template>

<script>
export default {
    name: 'ShareButton',
    props: {
        shareUrl: {
            type: String,
            default: '', // TODO вставить валидную ссылку
        },
    },
    methods: {
        shareHandler() {
            if (navigator.share) {
                navigator
                    .share({
                        title: 'Итоги года вместе с Course Editor 2022',
                        text: 'Course Editor подводит итоги 2022 года вместе с вами. Спасибо за этот чудесный год. Пусть следующий будет еще лучше ❤️',
                        url: this.shareUrl,
                    })
                    .then()
                    .catch(error => console.error('Не удалось поделиться', error));
            }
        },
    },
};
</script>

<style lang="scss">
.share-button {
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 14px;
    line-height: 16px;
    column-gap: 8px;

    @media (min-width: $tablet) {
        font-size: 24px;
        line-height: 32px;
        column-gap: 16px;
    }

    &__icon {
        width: 24px;
        height: 24px;

        @media (min-width: $tablet) {
            width: 32px;
            height: 32px;
        }
    }

    &__text {
        color: #ffffff;
        font: inherit;
    }
}
</style>
