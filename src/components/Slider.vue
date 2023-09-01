<script>
import TagFashion from "../components/TagFashion.vue";
import TagFood from "../components/TagFood.vue";
export default {
    components: {
        TagFashion,
        TagFood,
    },
    data() {
        return {

            activeIndex: 0,
            cards: [
                {
                    src: 'src/assets/healthy-foods.webp',
                    titolo: "The Best Healty foods in 2022",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/winter.webp',
                    titolo: "The Best The Best Winter Outfit",
                    date: "december 26, 2022",
                },
                {
                    src: 'src/assets/photographers-mistakes.webp',
                    titolo: "Beginner Photographer's Mistakes",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/anime-fashion.webp',
                    titolo: "Fashion Trend Now A Days",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/rice-ball.webp',
                    titolo: "Igienic Receipe To Prepare Rice",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/success-story.webp',
                    titolo: "The Best Success Stories",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/anime-fashion.webp',
                    titolo: "Fashion Trend Now A Days",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/rice-ball.webp',
                    titolo: "Igienic Receipe To Prepare Rice",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/anime-fashion.webp',
                    titolo: "The Best Success Stories",
                    date: "december 26, 2022"
                },
                {
                    src: 'src/assets/success-story.webp',
                    titolo: "The Best Success Stories",
                    date: "december 26, 2022"
                },

            ]
        }
    },
    methods: {
        prevSlide() {
            if (this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.cards.length - 1; // Ritorna all'ultimo elemento quando si è alla prima
            }
        },

        nextSlide() {
            if (this.activeIndex < this.cards.length - 4) { // meno quattro perchè così rimangono sempre 4 all'ultima tornata del carousel
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
            <div class="slider-container d-flex justify-content-center pt-5 gap-2 p-3">
                <!-- se modififico index < activeIndex + 4 modifico anche il numero di card sempre attive -->
                <div class="card slide border-0" v-for="(card, index) in  cards "
                    v-show="index >= activeIndex && index < activeIndex + 4">
                    <img :src="card.src" class="card-img-top" alt="...">
                    <div class="tag-fashion" v-if="card.titolo === 'Fashion Trend Now A Days'">
                        <TagFashion></TagFashion>

                    </div>
                    <div class="tag-food" v-if="card.titolo === 'The Best Healty foods in 2022'">
                        <TagFood></TagFood>
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

    .card {
        width: 400px
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


}
</style>