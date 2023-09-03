<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,


        }
    },
}
</script>


<template>
    <div class="row py-5 px-3">
        <div class="col-2"
            v-for="(img, index) in [store.cards[3], store.cards[5], store.cards[0], store.cards[10], store.cards[8], store.cards[6]]">
            <div class="position-relative my-card">
                <img :src="img.src" alt="" class="rounded-2 imgs-row">

                <h5 class="short-title">{{ img.shortTitle }}</h5>
                <div class="overlay d-flex justify-content-center align-items-center">
                    <div class="inner-overlay d-flex justify-content-center align-items-end text-white">
                        <p>3 post</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.imgs-row {
    width: 280px;
    height: auto;
    filter: brightness(50%);
    transform: translate3d(-70px, 0, 0);
    max-width: none;
    display: block;








}

// .col-2 {
//     max-width: 240px;
//     position: relative;
//     overflow: hidden;


// }



.my-card {
    height: 100%;
    max-width: 210px;
    // max-width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 5px;


}


.short-title {
    position: absolute;
    top: 40%;
    left: 30%;
    color: white;
    z-index: 999;
}

.overlay {
    background-color: rgba(225, 8, 8, 0.406);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;

    .inner-overlay {
        height: 120px;
        width: 120px;
        border: 2px white solid;
    }

    opacity: 0;
}

.my-card:hover>.overlay {
    opacity: 1;
    transition: all .5s linear;
    // transform: translate3d(20px, 0, 0);

}

.my-card:hover>.imgs-row {
    transform: translate3d(-40px, 0, 0);
    transition: transform .2s;
}
</style>