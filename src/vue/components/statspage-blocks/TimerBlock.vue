<template>
    <article class="timer-block">
        <h2 class="timer-block__title block-title">
            Скоро праздник!
        </h2>
        <p class="timer-block__description block-text">
            До нового года осталось совсем немного:
        </p>
        <div class="timer-block__timer">
            <div class="timer-block__counter-wrapper">
                <span class="timer-block__counter timer-block__counter--days">{{ displayDays }}</span>
                <span class="timer-block__counter-text">{{ daysText }}</span>
            </div>
            <div class="timer-block__delimeter"></div>
            <div class="timer-block__counter-wrapper">
                <span class="timer-block__counter timer-block__counter--hours">{{ displayHours }}</span>
                <span class="timer-block__counter-text">{{ hoursText }}</span>
            </div>
            <div class="timer-block__delimeter"></div>
            <div class="timer-block__counter-wrapper">
                <span class="timer-block__counter timer-block__counter--minutes">{{ displayMinutes }}</span>
                <span class="timer-block__counter-text">{{ minutesText }}</span>
            </div>
        </div>
    </article>
</template>

<script>
import { pluralize } from '@utils/utils.js';

export default {
    name: 'TimerBlock',
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            finalTime: [2022, 11, 31, 24],
        };
    },
    computed: {
        seconds: () => 1000,
        minutes() {
            return this.seconds * 60;
        },
        hours() {
            return this.minutes * 60;
        },
        days() {
            return this.hours * 24;
        },
        daysText() {
            return pluralize(this.displayDays, ['день', 'дня', 'дней']);
        },
        hoursText() {
            return pluralize(this.displayHours, ['час', 'часа', 'часов']);
        },
        minutesText() {
            return pluralize(this.displayMinutes, ['минута', 'минуты', 'минут']);
        },
    },
    methods: {
        formatNum(number) {
            return number < 10 ? `0${number}` : number;
        },
        showRemaining() {
            const interval = 1000;
            // eslint-disable-next-line max-statements
            const timer = setInterval(() => {
                const currentTime = new Date();
                const finalTime = new Date(...this.finalTime);
                const disatance = finalTime.getTime() - currentTime.getTime();

                if (disatance < 0) {
                    clearInterval(timer);

                    return;
                }

                const days = Math.floor((disatance / this.days));
                const hours = Math.floor((disatance % this.days) / this.hours);
                const minutes = Math.floor((disatance % this.hours) / this.minutes);

                this.displayDays = this.formatNum(days);
                this.displayHours = this.formatNum(hours);
                this.displayMinutes = this.formatNum(minutes);
            }, interval);
        },
    },
    created() {
        this.showRemaining();
    },
};
</script>

<style lang="scss">
.timer-block {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 32px;
    border-radius: 32px;
    background-color: #616bf2;

    &__title {
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;

        @media (min-width: $tablet) {
            font-size: 32px;
            line-height: 40px;
        }

        @media (min-width: $desktop) {
            font-size: 40px;
            line-height: 48px;
        }
    }

    &__description {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
    }

    &__timer {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }

    &__delimeter {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 64px;
        background-image: url("@images/timer-delimeter.svg");
        background-position: center;
        background-repeat: no-repeat;

        @media (min-width: $desktop) {
            width: 20px;
            height: 66px;
        }
    }

    &__counter-wrapper {
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-direction: column;
        row-gap: 8px;
        justify-content: center;
    }

    &__counter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        padding-top: 20px;
        padding-right: 16px;
        padding-bottom: 16px;
        padding-left: 16px;
        border-radius: 16px;
        background-color: #525ce2;
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;

        @media (min-width: $tablet) {
            width: 62px;
            height: 62px;
            font-size: 32px;
            line-height: 40px;
        }

        @media (min-width: $desktop) {
            width: 66px;
            height: 66px;
            font-size: 40px;
            line-height: 48px;
        }
    }

    &__counter-text {
        display: flex;
        justify-content: center;
        font-size: 16px;
        line-height: 24px;
        text-align: center;

        @media (min-width: $tablet) {
            font-size: 18px;
            line-height: 28px;
        }

        @media (min-width: $desktop) {
            font-size: 20px;
            line-height: 32px;
        }
    }
}
</style>


