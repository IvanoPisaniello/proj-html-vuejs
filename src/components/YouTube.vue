<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
            videoUrl: "https://www.youtube.com/embed/videoseries?si=NQmtNw2yjvPzPn6K&amp;list=PLtdSPZNWT1AtIxKATlVokOQz3Ms76V_O6",
        }
    },

    methods: {
        onItemClick(item) {
            // passando come argomento l'id degli item, in base al cambiamento dell'id inserisco il link da cambiare al click
            if (item === 1) {
                this.videoUrl = "https://www.youtube.com/embed/ebHd_3QJNBA?si=fX67WRxeci7wptVt";
            } else if (item === 2) {
                this.videoUrl = "https://www.youtube.com/embed/zlwQERpksnw?si=l7po8vnmLUlRTY0_";
            } else if (item === 3) {
                this.videoUrl = "https://www.youtube.com/embed/NV6dOfZTI5w?si=qn50lGcfkPlm20Gp";
            } else if (item === 4) {
                this.videoUrl = "https://www.youtube.com/embed/8x-RuYLJXrw?si=wDXw8AJxuAp5rSIv";

            } else if (item === 5) {
                this.videoUrl = "https://www.youtube.com/embed/H5qupR6YQpQ?si=Q-yK6js1pWrREgua";
            }
            else if (item === 6) {
                this.videoUrl = "https://www.youtube.com/embed/ICt1jYfucec?si=20YcyhizCp37JJ_j";
            }
            else if (item === 7) {
                this.videoUrl = "https://www.youtube.com/embed/CkC5CtabT1Y?si=ogLgeU9QpV_40fqW";

            }
        }


        // onItemClick(item) {
        //     this.videoUrl = "https://www.youtube.com/embed/videoseries?si=NQmtNw2yjvPzPn6K&amp;list=PLtdSPZNWT1AtIxKATlVokOQz3Ms76V_O6";
        // },

        // onItemClick(item) {
        //     this.videoUrl = "https://www.youtube.com/embed/zlwQERpksnw?si=l7po8vnmLUlRTY0_";
        // }

    }

}
</script>

<template>
    <div class="container px-5">
        <div class="row">
            <div class="col-8">
                <div class="video-box">
                    <!-- cambio il codice a partire da embed/ dinamicamente al click degli item della lista -->
                    <iframe width="850" height="515" :src="videoUrl" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-4">
                <div class="header-playlist d-flex text-white p-3 gap-3">
                    <i class="fa-solid fa-play fs-1"></i>
                    <div class="d-flex flex-column">
                        <h5>Video Playlist</h5>
                        <p>1/7 Videos</p>
                    </div>
                </div>
                <div class="playlist-container">

                    <ul>
                        <li v-for="video in store.playlist" @click="onItemClick(video.id)" class="list-unstyled my-4">
                            <button class="border-0 bg-white">
                                <div class="d-flex gap-3">
                                    <p class="mt-3 border p-1 rounded-2 text-white list-num">{{ video.id }}</p>
                                    <img :src="video.src" alt="" class="video-img">
                                    <p class="video-title pt-4">{{ video.videotitle }}</p>


                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.video-title {
    font-size: .8rem;
}

.playlist-container {
    height: 430px;
    overflow: auto;

    p:hover {
        color: red;
    }
}

.video-img {
    height: 70px;
    width: 100px;
    border-radius: 10px;
}

.header-playlist {
    height: 80px;
    background-color: grey;
    position: relative;
    z-index: 999;
    margin-left: 18px;
    background-color: #333333;

    p {
        font-size: .8rem;
    }
}

.list-num {
    height: 30px;
    width: 30px;
    background-color: #333333;

    &:hover {
        background-color: red;
    }


}
</style>