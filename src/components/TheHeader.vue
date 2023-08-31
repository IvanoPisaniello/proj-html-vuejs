<script>
import NavBanner from "./NavBanner.vue";
import Navbar from "./Navbar.vue";
export default {
    components: {
        NavBanner,
        Navbar,
    },



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
                    <img src="../assets/header-banner.webp" alt="" class="rounded-2 banner">
                </div>
            </div>
        </div>
    </div>
    <Navbar></Navbar>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.banner-logo {
    height: 120px;
    border-bottom: .3px solid #545454;

    .logo {
        height: 80px;
    }

    .banner {
        height: 90px;
    }

}
</style>