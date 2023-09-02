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
                this.activeIndex = this.store.cards.length - 3; // Ritorna all'ultimo elemento quando si è alla prima
            }
        },

        nextSlide() {
            if (this.activeIndex < this.store.cards.length - 3) { // meno quattro perchè così rimangono sempre 4 all'ultima tornata del carousel
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
            <div class="slider-container d-flex justify-content-center pt-5 gap-1 p-3">
                <!-- se modififico index < activeIndex + 4 modifico anche il numero di card sempre attive -->
                <div class="card slide border-0" v-for="(card, index) in  store.cards "
                    v-show="index >= activeIndex && index < activeIndex + 3">
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
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eaque quidem
                            distinctio totam.
                            Laudantium culpa fugiat qui. Nemo aspernatur officiis..</p>
                        <button class="btn btn-danger text-white rounded-4 px-5">
                            <p class="m-0">Read More</p>
                        </button>
                    </div>
                </div>


            </div>
            <div class="d-flex gap-3">
                <button @click="prevSlide" class="btn btn-left border rounded-5 bg-secondary text-white btn-direction"><i
                        class="fa-solid fa-angle-right"></i></button>
                <button @click="nextSlide" class="btn btn-right border rounded-5 bg-secondary text-white btn-direction"><i
                        class="fa-solid fa-angle-left"></i></button>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.lorem {
    font-size: .8rem;
}

.slider {
    position: relative;


    img {
        width: 400px;
        height: 250px;

    }

    .card {
        width: 400px;
    }

    .card-body {
        width: 400px;
        background-color: #F3F3F3;
    }

    .btn-direction {
        position: absolute;
        top: 0;
        right: 100px;




    }


    .btn-left {}

    .btn-right {
        margin-right: 50px;
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