<script>
export default {

    data() {
        return {

            messageRandom: "05:32 THE BEST HEALTY FOODS IN 2022",
        }
    },

    methods: {
        onPrevClick() {
            if (this.messageRandom === "05:37 HIGYENIC RECEIP TO PREPARE RICE") {
                this.messageRandom = "05:35 THE BEST WINTER OUTFITS"
            } else if (this.messageRandom === "05:35 THE BEST WINTER OUTFITS") {
                this.messageRandom = "05:32 THE BEST HEALTY FOODS IN 2022"
            } else if (this.messageRandom === "05:32 THE BEST HEALTY FOODS IN 2022") {
                this.messageRandom = "05:37 HIGYENIC RECEIP TO PREPARE RICE"
            }


        },

        onNextClick() {
            if (this.messageRandom === "05:32 THE BEST HEALTY FOODS IN 2022") {
                this.messageRandom = "05:35 THE BEST WINTER OUTFITS"
            } else if (this.messageRandom === "05:35 THE BEST WINTER OUTFITS") {
                this.messageRandom = "05:37 HIGYENIC RECEIP TO PREPARE RICE"
            } else if (this.messageRandom === "05:37 HIGYENIC RECEIP TO PREPARE RICE") {
                this.messageRandom = "05:32 THE BEST HEALTY FOODS IN 2022"
            }
        },
        autoMessage() {
            setInterval(() => {
                this.onNextClick();
            }, 3000);
        }


    },
    mounted() {
        this.autoMessage();
    }


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
                            <p>{{ messageRandom }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-8 d-flex justify-content-end p-2 text-light gap-3">
                            <button @click="onPrevClick" class="border-0 bg-transparent text-white"><i
                                    class="fa-solid fa-angle-left"></i></button>
                            <button @click="onNextClick" class="border-0 bg-transparent text-white"><i
                                    class="fa-solid fa-angle-right"></i></button>
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