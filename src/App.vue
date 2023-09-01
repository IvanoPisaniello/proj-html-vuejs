<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import Hero from "./components/Hero.vue";
import MainCardSection from "./components/MainCardSection.vue"


export default {
    components: {
        TheHeader,
        TheFooter,
        Hero,
        MainCardSection,
    }

}
</script>

<template>
    <header>
        <TheHeader></TheHeader>
        <Hero></Hero>
        <div class="mt-5">
            <MainCardSection></MainCardSection>
        </div>

    </header>
</template>

<style ></style>
