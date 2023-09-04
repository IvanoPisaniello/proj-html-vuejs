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

<template>
    <div class="container px-5">
        <div class="row ">
            <strong>
                <h5> LIFESTYLE & STORIES</h5>
            </strong>
            <div class="d-flex py-1 gap-2 justify-content-end">
                <button class=" bg-secondary rounded-3 border-0 text-white">

                    <p>ALL</p>

                </button><button class=" bg-secondary rounded-3 border-0 text-white">

                    <p>LIFESTYLE</p>

                </button><button class=" bg-secondary rounded-3 border-0 text-white">

                    <p>STORIES</p>

                </button>
            </div>

            <div class="col-7 position-relative">

                <div v-for="(card, index) in [store.cards[5]]" class="mt-0">
                    <div class="demo-data">
                        <img :src="card.src" alt="" class="central-img rounded-3">
                        <div class="tag d-flex gap-2 ms-5">
                            <TagCulture></TagCulture>
                        </div>
                        <div class="demo-left text-white">
                            <DemoData></DemoData>
                            <h5>{{ card.titolo }}</h5>
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5">


                <div v-for=" ( card, index ) in  [store.cards[8], store.cards[3], store.cards[6]] " class="">

                    <div class="demo-data d-flex gap-1 mb-2 position-relative">
                        <img :src="card.src" alt="" class="img-right rounded-3">
                        <div class="tag-right d-flex justify-content-center gap-2"
                            v-if="card.titolo === 'Traveling Alone Is Awesome'">
                            <TagStories></TagStories>


                        </div>
                        <div class="tag-right d-flex justify-content-center gap-2"
                            v-if="card.titolo === 'Fashion Trend Now A Days'">
                            <TagFashion></TagFashion>

                        </div>
                        <div class="tag-right d-flex justify-content-center gap-2"
                            v-if="card.titolo === 'Places For A Road Trip'">
                            <LifeStyle></LifeStyle>
                        </div>
                        <div class="demo-position text-center mt-5">
                            <DemoData></DemoData>
                            <h5>{{ card.titolo }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.central-img {
    height: 470px;
    filter: brightness(50%);


    &:hover {
        filter: brightness(1);


    }
}

.tag {
    position: absolute;
    top: 50px;

}

.demo-left {
    position: absolute;
    bottom: 20px;
    left: 30px;
}


.img-right {
    height: 150px;
    position: relative;
    filter: brightness(50%);

    &:hover {
        filter: brightness(1);
    }
}

button {
    height: 30px;
}

.tag-right {
    position: absolute;
    left: 10px;
    top: 10px;
}
</style>