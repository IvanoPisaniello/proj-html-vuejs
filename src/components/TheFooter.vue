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
    <div class="footer-container">
        <div class="container">
            <div class="row p-5 border-bottom">
                <div class="col-2 text-white">
                    <h5>Get Started</h5>
                    <ul class="list-unstyled" v-for="link in store.getStartedLinks">
                        <li class="">{{ link.name }}</li>
                    </ul>
                </div>
                <div class="col-2 text-white">
                    <h5>ABOUT</h5>
                    <ul class="list-unstyled" v-for="link in store.aboutLinks">
                        <li>{{ link.name }}</li>
                    </ul>
                </div>
                <div class="col-2 text-white">
                    <h5>FEATURES</h5>
                    <ul class="list-unstyled" v-for="link in store.featuresLinks">
                        <li>{{ link.name }}</li>
                    </ul>
                </div>
                <div class="col-2 text-white">
                    <h5>QUICK LINKS</h5>
                    <ul class="list-unstyled" v-for="link in store.quickLinks">
                        <li>{{ link.name }}</li>
                    </ul>
                </div>
                <div class="col-4">
                    <h5 class="text-white">SUBSCRIVE TO NEWSLETTER</h5>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <button class="btn btn-secondary">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <img src="../assets/anime-whitelogo.png" alt="" class="mt-4">
                <p class="text-white mt-4">Anime Tech, Theme by HasnainDEV</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    border-top: 5px solid #333333;
    height: 400px;
    background-color: #BF1E2E;
}

input {
    margin-top: 30px;
    width: 330px;
    height: 50px;

}

button {
    height: 50px;
    width: 330px;
}

img {
    height: 60px;
    width: 200px;
}

li:hover {
    color: #333333;
}
</style>