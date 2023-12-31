console.log('jsok', Vue);

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            autoPlay: null,
            currentIndex: 0,
            pictures: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
           
        }
    },

    methods:{
        goNext(){
            this.currentIndex++;
            if(this.isLast)
            {this.currentIndex = 0}
            
            
        },
        goPrev(){
            
            if(this.isFirst){
                this.currentIndex = this.pictures.length 
            }
            this.currentIndex--;
        },
        setCurrentIndex(targetIndex){
            this.currentIndex = targetIndex
        },
        stopAutoPlay(){
            clearInterval(this.autoPlay)
        },
        startAutoPlay(){
            this.autoPlay = setInterval(this.goNext, 2000)
        }
    },
    computed:{
        isLast(){
            return this.currentIndex === this.pictures.length 
        },
        isFirst(){
            return this.currentIndex === 0
        }
    },
     
    mounted(){
       this.autoPlay = setInterval(this.goNext, 2000)

    }

})

app.mount('#root');
