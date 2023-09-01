<script>
import OffCanvas from "./OffCanvas.vue"
export default {
    components: {
        OffCanvas,
    },
    data() {
        return {
            links: [

                {
                    name: "HOME",
                    icon: 'fa-solid fa-house'
                },
                {
                    name: "ABOUT US",
                    icon: 'fa-solid fa-user'
                },
                {
                    name: "LIFESTILES",
                    icon: 'fa-solid fa-suitcase'
                },
                {
                    name: "STORIES",
                    icon: 'fa-solid fa-book-open-reader'
                },
                {
                    name: "PAGES",
                    icon: 'fa-solid fa-book'
                },
                {
                    name: "CONTACT US",
                    icon: 'fa-solid fa-envelope'
                },
            ],

        }
    },

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
                        <ul class="d-flex justify-content-center align-items-center gap-4">
                            <li v-for="link in links" class="list-unstyled">
                                <button class="btn">
                                    <a href="" class=""><i :class="link.icon"></i>
                                        {{ link.name }}</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-2 fs-2 text-secondary d-flex justify-content-end p-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: red;
}

.my-nav {
    border-bottom: .5px solid grey;
}


@media (min-width: 768px) {
    .carousel-inner {
        display: flex;
    }

    .carousel-item {
        margin-right: 0;
        flex: 0 0 33.333333%;
        display: block;
    }
}
</style>