<script>
import TagFashion from "../components/TagFashion.vue";
import TagFood from "../components/TagFood.vue";
import LifeStyle from "../components/LifeStyle.vue"
import { store } from "../store.js";
export default {
    components: {
        TagFashion,
        TagFood,
        LifeStyle,
    },
    data() {
        return {
            store,
            activeIndex: 0,

        }
    },
    methods: {
        prevSlide() {
            if (this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.store.cards.length - 4; // Ritorna all'ultimo elemento quando si è alla prima
            }
        },

        nextSlide() {
            if (this.activeIndex < this.store.cards.length - 4) { // meno quattro perchè così rimangono sempre 4 all'ultima tornata del carousel
                this.activeIndex++;
            } else {
                this.activeIndex = 0; // Torna al primo elemento quando si raggiunge l'ultimo
            }
        },

        autoSlide() {
            setInterval(() => {

                this.nextSlide();

            }, 4000);

        }




    },

    mounted() {
        this.autoSlide();

    },
    computed: {

    },



}
</script>

<template>
    <div class="slider-container">
        <div class="slider">
            <div class="slider-container d-flex justify-content-center pt-5 gap-5 p-3">
                <!-- se modififico index < activeIndex + 4 modifico anche il numero di card sempre attive -->
                <div class="card slide border-0" v-for="(card, index) in  store.cards "
                    v-show="index >= activeIndex && index < activeIndex + 4">
                    <img :src="card.src" class="card-img-top" alt="...">
                    <div class="tag-fashion"
                        v-if="card.titolo === 'Fashion Trend Now A Days' || card.titolo === 'The Best Success Stories' || card.titolo === 'Beginner Photographer\'s Mistakes'">
                        <TagFashion></TagFashion>

                    </div>
                    <div class="tag-food"
                        v-if="card.titolo === 'The Best Healty foods in 2022' || card.titolo === 'The Best Time To Have A Meal' || card.titolo === 'Igienic Receipe To Prepare Rice'">
                        <TagFood></TagFood>
                    </div>
                    <div class="tag-lifestyle"
                        v-if="card.titolo === 'The Best Winter Outfit' || card.titolo === 'Places For A Road Trip' || card.titolo === 'Music The Love Of My Life'">
                        <div class="life-fashion d-flex gap-1">
                            <LifeStyle></LifeStyle>


                            <TagFashion></TagFashion>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ card.titolo }}</h5>
                        <p class="card-text">{{ card.date }}</p>
                    </div>
                </div>


            </div>
            <button @click="prevSlide" class="btn btn-left border rounded-5 bg-white text-danger"><i
                    class="fa-solid fa-angle-left"></i></button>
            <button @click="nextSlide" class="btn btn-right border rounded-5 bg-white text-danger"><i
                    class="fa-solid fa-angle-right"></i></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slider-container {
    background-color: #F3F3F3;
}

.slider {
    position: relative;

    img {
        width: 350px;
        height: 250px;

    }

    .card-body {
        width: 350px;
        background-color: white;
    }

    .btn {
        position: absolute;
    }


    .btn-left {
        top: 35%;
        left: 2%;
    }

    .btn-right {
        top: 35%;
        right: 2%;
    }

    .tag-fashion {
        position: absolute;
        top: 5%;
        left: 40%;

    }

    .tag-food {
        position: absolute;
        top: 5%;
        left: 40%;

    }

    .tag-lifestyle {
        position: absolute;
        top: 5%;
        left: 20%;

    }



}
</style>