<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <button class=" border-0 bg-white text-secondary fs-2" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i class="fa-solid fa-bars"></i>
    </button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header justify-content-end">
            <!-- <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> -->
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column align-items-center">
            <img src="../assets/anime-logo-300x89.webp" alt="" class="logo">
            <div class="text-center mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quae nesciunt similique esse veniam, in
                harum tempora, placeat modi dignissimos
            </div>
            <div class="d-flex flex-column align-items-center">
                <div class="d-flex gap-2 mt-4">
                    <div class="img-container" v-for="(img, index) in [store.cards[8], store.cards[3], store.cards[6]]">
                        <img :src="img.src" alt="" class="imgs">
                    </div>
                </div>
                <div class="text-center mt-3">
                    <p><i class="fa-solid fa-clock text-danger"></i> Sun - Sat : 9.00 AM - 18:00 PM</p>
                    <p><i class="fa-solid fa-envelope text-danger"></i> contact@domain.com</p>
                    <p><i class="fa-solid fa-phone text-danger"></i> (+82) 8123 456 789</p>
                </div>
                <div class="d-flex align-items-center ms-5">
                    <div class="col-4 d-flex p-1 gap-3 justify-content-center">
                        <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 text-white bg-danger "><i
                                class="fa-brands fa-facebook-f"></i></button>
                        <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-white bg-danger "><i
                                class="fa-brands fa-twitter"></i></button>
                        <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-white bg-danger "><i
                                class="fa-brands fa-instagram"></i></button>
                        <button class="btn btn-outline-secondary  rounded-5 border-0 pt-1 px-2 text-white bg-danger "><i
                                class="fa-brands fa-youtube"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.offcanvas {
    width: 600px;
}

.imgs {
    height: 100px;
}
</style>