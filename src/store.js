import { reactive } from "vue";
export const store = reactive({
    cards: [{
        src: 'src/assets/healthy-foods.webp',
        titolo: "The Best Healty foods in 2022",
        date: "december 26, 2022",
        shortTitle: "FOOD",
    },
    {
        src: 'src/assets/winter.webp',
        titolo: "The Best Winter Outfit",
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
        date: "december 26, 2022",
        shortTitle: "FASHION",
    },
    {
        src: 'src/assets/rice-ball.webp',
        titolo: "Igienic Receipe To Prepare Rice",
        date: "december 26, 2022",

    },
    {
        src: 'src/assets/success-story.webp',
        titolo: "The Best Success Stories",
        date: "december 26, 2022",
        shortTitle: "CULTURE",

    },
    {
        src: 'src/assets/best-places.webp',
        titolo: "Places For A Road Trip",
        date: "december 26, 2022",
        shortTitle: "TRAVEL",

    },
    {
        src: 'src/assets/meal-time-150x150.webp',
        titolo: "The Best Time To Have A Meal",
        date: "december 26, 2022",

    },
    {
        src: 'src/assets/travel-alone.webp',
        titolo: "Traveling Alone Is Awesome",
        date: "december 26, 2022",
        shortTitle: "STORIES",
    },
    {
        src: 'src/assets/music-love.webp',
        titolo: "Music The Love Of My Life",
        date: "december 26, 2022",

    },
    {
        src: 'src/assets/visit-france.webp',
        titolo: "Reason To Visit France",
        date: "december 26, 2022",
        shortTitle: "LIFESTYLE",
    },
    ],
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
            icon: 'fa-solid fa-suitcase',
            hover: true,
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

    playlist: [
        {
            src: 'src/assets/first-image.jpeg',
            videotitle: "Sword Of The Stranger Fight Scene",
            id: 1,
        },
        {
            src: 'src/assets/second-image.jpeg',
            videotitle: "Sun's Out, Guns Out",
            id: 2,
        },
        {
            src: 'src/assets/third-image.jpeg',
            videotitle: "Top 10 Vinland Saga Moments",
            id: 3,

        },
        {
            src: 'src/assets/fourth-image.jpeg',
            videotitle: "Everytyme Sukuna Apperars",
            id: 4,
        },
        {
            src: 'src/assets/fifth-image.jpeg',
            videotitle: "Wizard King (Julius) Vs Licht...",
            id: 5,

        },
        {
            src: 'src/assets/sixth-image.jpeg',
            videotitle: "Vinland Saga | SHATTERED",
            id: 6,
        },
        {
            src: 'src/assets/seventh-image.jpeg',
            videotitle: "Konan Arranges",
            id: 7,
        },

    ],

    getStartedLinks: [
        { name: "Resources" },
        { name: "Tutorials" },
        { name: "Examples" },
        { name: "Docs" },

    ],
    aboutLinks: [
        { name: "Stories" },
        { name: "Community" },
        { name: "Blog" },
        { name: "Brand Assets" },

    ],
    featuresLinks: [
        { name: "Overview" },
        { name: "Design" },
        { name: "Code" },
        { name: "Collaborate" },

    ],
    quickLinks: [
        { name: "Stories" },
        { name: "Community" },
        { name: "Blog" },
        { name: "Brand Assets" },

    ],
})