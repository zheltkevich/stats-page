<template>
    <button
        class="plug-button"
        type="button"
        :class="{ plugged: pluggedIn }"
        v-on="listeners">
        <span class="plug-button__switch">
            <svg
                class="plug-button__plug"
                width="14"
                height="28"
                viewBox="0 0 14 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="white">
                    <path d="M3.5 1.52997C3.5 0.977684 3.94772 0.529968 4.5 0.529968C5.05228 0.529968 5.5 0.977684 5.5 1.52997V3.52985H3.5V1.52997Z" />
                    <path d="M0.5 5.52985C0.5 4.42528 1.39543 3.52985 2.5 3.52985H11.5C12.6046 3.52985 13.5 4.42528 13.5 5.52985V10.2619C13.5 11.0433 13.0449 11.7532 12.3348 12.0793L7.83482 14.1464C7.30489 14.3898 6.69511 14.3898 6.16518 14.1464L1.66518 12.0793C0.955092 11.7532 0.5 11.0433 0.5 10.2619V5.52985Z" />
                    <path d="M8.5 1.52997C8.5 0.977684 8.94772 0.529968 9.5 0.529968C10.0523 0.529968 10.5 0.977684 10.5 1.52997V3.52985H8.5V1.52997Z" />
                    <path d="M8.5 13.8408L7.83482 14.1464C7.30489 14.3898 6.69511 14.3898 6.16518 14.1464L5.5 13.8408V27.5338H8.5V13.8408Z" />
                </g>
            </svg>
            <svg
                class="plug-button__socket"
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="white">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H12.5C13.3284 0 14 0.671573 14 1.5V1.5C14 2.32843 13.3284 3 12.5 3H10.5167C10.5167 3 10.2918 2.48412 9.49905 2.48412C8.70629 2.48412 8.49491 3 8.49491 3H5.47696C5.47696 3 5.24109 2.48412 4.49621 2.48412C3.75134 2.48412 3.51547 3 3.51547 3H1.5C0.671573 3 0 2.32843 0 1.5V1.5Z" />
                </g>
            </svg>
        </span>
    </button>
</template>

<script>
export default {
    name: 'PlugButton',
    data() {
        return {
            pluggedIn: false,
        };
    },
    computed: {
        listeners() {
            return {
                click: this.clickHandler,
                mouseenter: this.mouseenterHandler,
                mouseleave: this.mouseleaveHandler,
            };
        },
    },
    methods: {
        mouseenterHandler() {
            this.$emit('mouseEnter');
        },
        mouseleaveHandler() {
            if (this.pluggedIn) return;

            this.$emit('mouseLeave');
        },
        clickHandler() {
            this.pluggedIn = !this.pluggedIn;
            this.$emit('btnClick');
        },
    },
};
</script>

<style lang="scss">
.plug-button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 8px;
    border: none;
    border-radius: 50%;
    background-color: rgba(#000000, 0.2);
    transition: 0.3s ease;
    transition-property: background-color;

    &:hover,
    &.plugged {
        background-color: #ffffff;
    }

    &__switch {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    &__socket {
        position: absolute;
        top: 0;
        z-index: 1;
        transition: 0.2s ease;
        transition-property: fill;

        .plug-button:hover &,
        .plug-button.plugged & {
            g {
                fill: #332a7a;
            }
        }
    }

    &__plug {
        position: absolute;
        top: 6px;
        z-index: 0;
        transition: 0.2s ease;
        transition-property: top, fill;

        .plug-button:hover &,
        .plug-button.plugged & {
            top: 0;

            g {
                fill: #332a7a;
            }
        }
    }
}
</style>
