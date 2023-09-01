<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Hero from "./components/Hero.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        Hero,
    }

}
</script>

<template>
    <header>
        <TheHeader></TheHeader>
        <Hero></Hero>

    </header>
</template>

<style ></style>
