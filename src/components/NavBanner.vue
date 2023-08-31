<script>
export default {






}
</script>


<template>
    <div class="banner-nav">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-5">
                            <div class="update  ps-5 text-center d-flex justify-content-between align-items-center">
                                <strong>
                                    <p class="text-white pt-3">NEWS UPDATES</p>
                                </strong>
                                <img src="../assets/meal-time-150x150.webp" alt="">
                            </div>
                        </div>
                        <div class="col-7 d-flex  pt-1 text-light gap-2">
                            <p>5:32</p>
                            <p>IGIENIC RECEIP TO PREPARE RICE</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-8 d-flex justify-content-end p-2 text-light gap-3">
                            <i class="fa-solid fa-angle-left"></i>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div class="col-4 d-flex p-1 gap-1 justify-content-end">
                            <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 text-danger bg-white "><i
                                    class="fa-brands fa-facebook-f"></i></button>
                            <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-danger bg-white "><i
                                    class="fa-brands fa-twitter"></i></button>
                            <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-danger bg-white "><i
                                    class="fa-brands fa-instagram"></i></button>
                            <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-danger bg-white "><i
                                    class="fa-brands fa-youtube"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/9huKfEmwduk" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe> -->
        <!-- il codice da embed in poi è il cambio di video -->
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.banner-nav {
    height: 40px;
    background-color: $color-primary;

    .update {
        background-color: #545454;
        height: 40px;

    }

    img {
        height: 40px;
    }

    .fa-solid {
        font-size: 1.5rem;

    }

    .fa-brands {
        font-size: .9rem;
        padding-top: 0px;


    }

    button {
        height: 32px;
        width: 32px;


    }

}
</style>