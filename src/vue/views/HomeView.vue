<template>
    <div class="homeview">
        <StartSection class="homeview__section" />
        <component
            :is="component.name"
            v-for="(component, i) in totalStats"
            :key="i"
            :stats="component.items" />
        <FeaturesSection class="homeview__section" />
        <UpdatesSection class="homeview__section" />
        <FinalSection class="homeview__section" />
        <AppFooter />
    </div>
</template>

<script>
import StartSection from '@components/homepage-sections/StartSection.vue';
import ResultsSection from '@components/homepage-sections/ResultsSection.vue';
import TemplatesSection from '@components/homepage-sections/TemplatesSection.vue';
import PublicationsSection from '@components/homepage-sections/PublicationsSection.vue';
import FeaturesSection from '@components/homepage-sections/FeaturesSection.vue';
import UpdatesSection from '@components/homepage-sections/UpdatesSection.vue';
import FinalSection from '@components/homepage-sections/FinalSection.vue';
import AppFooter from '@components/ui/AppFooter.vue';

const TOTAL_STATS = {
    stats: [
        {
            name: 'ResultsSection',
            items: [
                {
                    type: 'courses',
                    text: 'собранно курсов',
                    value: 4521,
                    component: 'minicard',
                },
                {
                    type: 'longreads',
                    text: 'создано лонгридов',
                    value: 37162,
                    component: 'minicard',
                },
                {
                    type: 'templates',
                    text: 'применено шаблонов',
                    value: 124521,
                    component: 'minicard',
                },
                {
                    type: 'data',
                    value: 120,
                },
                {
                    type: 'images',
                    text: 'загружено картинок',
                    value: 14521,
                },
                {
                    type: 'video',
                    text: 'загружено видео',
                    value: 6982,
                },
                {
                    type: 'tests',
                    text: 'создано тестов',
                    value: 402,
                },
            ],
        },
        {
            name: 'TemplatesSection',
            items: [
                {
                    text: 'Лучшие из лучших',
                    value: '',
                },
                {
                    text: 'Картинка + Текст',
                    value: 1202,
                },
                {
                    text: 'Заголовок + Текст',
                    value: 2511,
                },
                {
                    text: 'Видео',
                    value: 709,
                },
            ],
        },
        {
            name: 'PublicationsSection',
            items: [
                {
                    text: 'SCORM 2004',
                    value: 572,
                },
                {
                    text: 'xAPI',
                    value: 315,
                },
                {
                    text: 'SCORM 1.2',
                    value: 298,
                },
                {
                    text: 'CMI5',
                    value: 132,
                },
                {
                    text: 'SCORM CAN 1.2',
                    value: 92,
                },
            ],
        },
    ],
};

export default {
    name: 'HomeView',
    components: {
        StartSection,
        ResultsSection,
        TemplatesSection,
        PublicationsSection,
        FeaturesSection,
        UpdatesSection,
        FinalSection,
        AppFooter,
    },
    data() {
        return {
            totalStats: TOTAL_STATS.stats,
        };
    },
};
</script>

<style lang="scss">
.homeview {
    &__section {
        overflow: hidden;
    }
}
</style>
