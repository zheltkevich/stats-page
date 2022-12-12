<template>
    <section class="updates-section">
        <div class="updates-section__container container">
            <h2 class="updates-section__title section-title">
                150+ обновлений CourseEditor
            </h2>
            <div class="updates-section__button-container">
                <ShowVideoButton
                    class="updates-section__show-video-button"
                    type="button"
                    @click="buttonClickHandler" />
            </div>
            <div class="updates-section__background"></div>
        </div>
        <transition name="fade">
            <div
                v-if="showModal"
                class="modal">
                <div
                    v-click-outside="clickOutsideHandler"
                    class="modal__modal container">
                    <iframe
                        class="modal__video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hir_sGOukmI?autoplay=1&amp;loop=1"
                        title="YouTube video player"
                        frameborder="0"
                        :autoplay="true"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import ShowVideoButton from '@components/ui/ShowVideoButton.vue';

export default {
    name: 'UpdatesSection',
    components: {
        ShowVideoButton,
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        buttonClickHandler() {
            this.showModal = !this.showModal;
        },
        clickOutsideHandler() {
            this.showModal = !this.showModal;
        },
    },
    watch: {
        showModal(value) {
            if (value) document.documentElement.style.overflow = 'hidden';
            else document.documentElement.style.overflow = 'auto';
        },
    },
};
</script>

<style lang="scss">
.updates-section {
    display: flex;
    flex-direction: column;

    &__container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-image: url("@images/updates-bubbles.svg");
        background-position: center bottom;
        background-size: contain;
        background-repeat: no-repeat;
    }

    &__title {
        height: 33%;
        margin-bottom: 40px;
    }

    &__button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34%;
    }

    &__show-video-button {
        flex-shrink: 0;
    }

    &__background {
        display: flex;
        flex-shrink: 0;
        width: 100%;
        height: 33%;
        aspect-ratio: 16/5;
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#04061f, 0.8);

    &__modal {
        flex-grow: 1;
        overflow: hidden;
        max-height: 100%;
        padding: 0;
        border-radius: 16px;
        background-color: transparent;
        aspect-ratio: 16/9;
    }

    &__video {
        width: 100%;
        height: 100%;
    }
}
</style>
