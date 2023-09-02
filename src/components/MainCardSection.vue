<script>
import TagFashion from "../components/TagFashion.vue";
import TagFood from "../components/TagFood.vue";
import LifeStyle from "../components/LifeStyle.vue";
import TagStories from "../components/TagStories.vue";
import TagTravel from "../components/TagTravel.vue";
import TagCulture from "../components/TagCulture.vue"
import DemoData from "../components/DemoData.vue"
import { store } from "../store.js";
export default {
    components: {
        TagFashion,
        TagFood,
        LifeStyle,
        TagStories,
        TagTravel,
        TagCulture,
        DemoData,
    },
    data() {
        return {
            store,

        }

    },
    methods: {



    },
    mounted() {

    }
}


</script>

<!-- inserisco le immagini con un v-for in modo dinamico, prendendo i dati dallo store, e selezionando solo quelle che mi servono, inoltre ho creato componenti di ogni tag in modo da poter
essere riutilizzati, e li differenzio con una condizione -->
<template>
    <div class="container px-5">
        <div class="row">
            <div class="col-12 p-0">
                <div class="row">
                    <div class="col-3 d-flex flex-column gap-1">
                        <div v-for=" (card, index) in [store.cards[3], store.cards[8]]">

                            <div class="demo-data">
                                <img :src="card.src" alt="">
                                <div class="tag d-flex justify-content-center gap-2"
                                    v-if="card.titolo === 'Fashion Trend Now A Days'">
                                    <TagFashion></TagFashion>
                                    <LifeStyle></LifeStyle>
                                </div>
                                <div class="tag d-flex justify-content-center gap-2"
                                    v-if="card.titolo === 'Traveling Alone Is Awesome'">
                                    <TagStories></TagStories>
                                    <TagTravel></TagTravel>
                                </div>
                                <div class="demo-position text-center">
                                    <DemoData></DemoData>
                                    <h5>{{ card.titolo }}</h5>
                                    <div class="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex">
                        <div v-for="(card, index) in [store.cards[6]]">
                            <div class="demo-data">
                                <img :src="card.src" alt="" class="central-img">
                                <div class="tag d-flex justify-content-center gap-2 ms-5"
                                    v-if="card.titolo === 'Places For A Road Trip'">
                                    <LifeStyle></LifeStyle>
                                    <TagStories></TagStories>
                                    <TagTravel></TagTravel>
                                </div>
                                <div class="demo-position-central text-center">
                                    <DemoData></DemoData>
                                    <h5>{{ card.titolo }}</h5>
                                    <div class="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 gap-1 d-flex flex-column">
                        <div v-for="(card, index) in [store.cards[9], store.cards[10]]" class="">

                            <div class="demo-data">
                                <img :src="card.src" alt="">
                                <div class="tag d-flex justify-content-center gap-2"
                                    v-if="card.titolo === 'Music The Love Of My Life'">
                                    <TagCulture></TagCulture>
                                    <LifeStyle></LifeStyle>
                                </div>
                                <div class="tag d-flex justify-content-center gap-2"
                                    v-if="card.titolo === 'Reason To Visit France'">
                                    <LifeStyle></LifeStyle>
                                    <TagTravel></TagTravel>
                                </div>
                                <div class="demo-position text-center">
                                    <DemoData></DemoData>
                                    <h5>{{ card.titolo }}</h5>
                                    <div class="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    height: 200px;
    border-radius: 10px;
    position: relative;
    filter: brightness(50%);


    &:hover {
        filter: brightness(1);
    }
}

.demo-data {
    position: relative;


}



.central-img {
    width: 620px;
    height: 405px;
}

.demo-position {
    position: absolute;
    bottom: 0;
    color: white;
    left: 10%;
}

.demo-position-central {
    position: absolute;
    bottom: 0;
    color: white;
    left: 30%;
}

.tag {
    position: absolute;
    top: 10px;
    left: 20%;
}
</style>