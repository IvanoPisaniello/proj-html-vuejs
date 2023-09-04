<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Hero from "./components/Hero.vue";
import MainCardSection from "./components/MainCardSection.vue"
import LifestyleStories from "./components/LifestyleStories.vue";
import Banner from "./components/Banner.vue"
import SecondSlider from "./components/SecondSlider.vue";
import YouTube from "./components/YouTube.vue";
import ContainerCards from "./components/ContainerCards.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        Hero,
        MainCardSection,
        LifestyleStories,
        Banner,
        SecondSlider,
        YouTube,
        ContainerCards,
    }

}
</script>

<template>
    <header>
        <TheHeader></TheHeader>
    </header>
    <Hero></Hero>
    <div class="my-5">
        <MainCardSection></MainCardSection>
    </div>
    <LifestyleStories></LifestyleStories>

    <Banner></Banner>
    <SecondSlider></SecondSlider>
    <YouTube></YouTube>
    <ContainerCards></ContainerCards>
    <footer>
        <TheFooter></TheFooter>
    </footer>
</template>

<style>
body {
    font-family: sans-serif;
}
</style>
