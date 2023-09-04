<script>
import OffCanvas from "./OffCanvas.vue"
import { store } from "../store.js";

export default {
    components: {
        OffCanvas,
    },
    data() {
        return {
            store,
            firstShow: false,
            secondShow: false,
            dropDown: false,
            overlay: false,

        }
    },

    methods: {
        firstOnHover() {
            this.firstShow = true;
        },
        resetFirstShow() {
            this.firstShow = false;
        },
        secondOnHover() {
            this.secondShow = true;
        },
        resetSecondShow() {
            this.secondShow = false;
        }, pagesOver() {
            this.dropDown = true;
        },
        resetPages() {
            this.dropDown = false;
        },
        onGlassClick() {
            this.overlay = true;
        },
        onQuitClick() {
            this.overlay = false;
        }

    }

}
</script>

<template>
    <div class="my-nav ">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <OffCanvas></OffCanvas>
                </div>
                <div class="col-8">
                    <div>
                        <!-- sto facendo delle condizioni per beccare gli elementi dinamici e farli visualizzare solo all'hover -->
                        <ul class="d-flex justify-content-center align-items-center gap-3">
                            <li v-for="link in store.links" class="list-unstyled pt-2">
                                <button class="btn" type="button"
                                    @mouseover="link.name === 'LIFESTILES' ? firstOnHover() : (link.name === 'STORIES' ? secondOnHover() : (link.name === 'PAGES' ? pagesOver() : ''))"
                                    @mouseleave="link.name === 'LIFESTILES' ? resetFirstShow() : (link.name === 'STORIES' ? resetSecondShow() : (link.name === 'PAGES' ? resetPages() : ''))">
                                    <a href="" class=""><i :class="link.icon"></i>
                                        {{ link.name }}</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-2 fs-2 text-secondary d-flex justify-content-end p-2">
                    <button class="border-0 bg-transparent" @click="onGlassClick">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div class="row d--flex justify-content-center drop-down-img-one" v-if="firstShow === true">
                <div class="card text-start d-inline-flex "
                    v-for="(card, index) in [store.cards[2], store.cards[5], store.cards[7], store.cards[9]]">
                    <img class="card-img-top" :src="card.src" alt="Title">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ card.titolo }}</h5>
                    </div>
                </div>
            </div>
            <div class="row d--flex justify-content-center drop-down-img-second" v-if="secondShow === true">
                <div class="card text-start d-inline-flex "
                    v-for="(card, index) in [store.cards[3], store.cards[6], store.cards[10], store.cards[1]]">
                    <img class="card-img-top" :src="card.src" alt="Title">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ card.titolo }}</h5>
                    </div>
                </div>
            </div>
            <div class="dropdown" v-if="dropDown === true">
                <ul class="list-unstyled">
                    <li class="">Search Results</li>
                    <li class="">Category Archive</li>
                    <li class="">Autor Archive</li>
                    <li class="">Date Archive</li>
                    <li class="">Error 404</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="overlay d-flex justify-content-between align-items-center p-5" v-if="overlay === true">
        <div class="mb-3">
            <input type="" class=" bg-transparent p-2" id="" aria-describedby="emailHelp">

        </div>
        <button class="bg-transparent border-0" @click="onQuitClick">
            <h2 class="btn-close text-white"><i class="fa-regular fa-rectangle-xmark"></i></h2>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: $color-primary;
}

.my-nav {
    border-bottom: .5px solid grey;
}


.card-img-top {
    width: 300px;
    height: 200px;
}

.card {
    width: 330px;
}

.drop-down-img-one {
    position: fixed;
    z-index: 999;

}

.drop-down-img-second {
    position: fixed;
    z-index: 999;

}

.dropdown {
    position: absolute;
    left: 60%;
    z-index: 999;
    background-color: white;
    border-radius: 5px;
    padding: 1rem;
}

.overlay {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.837);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
}

input {
    width: 1200px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}

.btn-close {}
</style>