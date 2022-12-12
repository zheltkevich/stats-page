<template>
    <transition name="fade">
        <router-view :key="$route.path" />
    </transition>
</template>

<script>
export default {
    name: 'App',
};
</script>
