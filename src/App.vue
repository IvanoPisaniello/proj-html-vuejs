<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Hero from "./components/Hero.vue";
import MainCardSection from "./components/MainCardSection.vue"
import LifestyleStories from "./components/LifestyleStories.vue";


export default {
    components: {
        TheHeader,
        TheFooter,
        Hero,
        MainCardSection,
        LifestyleStories,
    }

}
</script>

<template>
    <header>
        <TheHeader></TheHeader>
        <Hero></Hero>
        <div class="my-5">
            <MainCardSection></MainCardSection>
        </div>
        <LifestyleStories></LifestyleStories>

    </header>
</template>

<style ></style>
