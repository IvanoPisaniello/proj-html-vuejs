<script>
import NavBanner from "./NavBanner.vue"
export default {
    components: {
        NavBanner,
    }

}


</script>

<template>
    <NavBanner></NavBanner>
    <div class="banner-logo">
        <div class="container">
            <div class="row">
                <div class="col-5 p-3">
                    <img src="../assets/anime-logo-300x89.webp" alt="" class="logo">
                </div>
                <div class="col-7 pt-3">
                    <img src="../assets/page-banner-1-768x71.webp" alt="" class="rounded-2 banner">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.banner-logo {
    height: 120px;


    .logo {
        height: 80px;
    }

    .banner {
        height: 70px;
    }

}
</style>