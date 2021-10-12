<template>
   

    <div class="card-container">
        <div class="card-top">
            <div class="card-header">
                <img src="https://ucef3692e7f40cacfa2799070e39.previews.dropboxusercontent.com/p/orig/ABX_agg07CqnU-wUSOSXJrQ9wB8pQ1EWMrxKmtRhvCgIrKRoNf1BlUhaQKhq7WC_XEXhW6VqfzE38tWbYOMMqEad1V12AR6VsUfyytTT-x-uRxnBWQD8Q50gscNJQg8z8PXpCg4bQILXAst0rE7PHyg09AJurhhV-GemfblxRmwng1pG7snOffG4_UJN_J573sHZq2G3BbpiiH6j1BSstTXANkBfh6fNMEQHN5hRj_vMIWXbyCQsxnJ2Nrq2zlfv_cQHt6xCbA81Qz_aZNDPh_qmni_3Na75HJrrhD5TAIuYqLmyPsvN7w_Oxx0AjC0w7n_qAQUXRmsSmAHFzWRMQPf0TX6OYRoO3scc3IBQ7l0RJQ/p.svg?fv_content=true&size_mode=5" alt="" class="icon-ar">
                <h1 class="card-title">Basecamp </h1>
                <img src="https://uc23628f575d60158bc15bb8a2cc.previews.dropboxusercontent.com/p/orig/ABX8AmpliuXBWg4CEiUXr7_bBICSf9Jul_ljqOiTWCFyljTFDN4N-hKLyu0IhSdBBwe2qkoiclJn2kJ2tjcTmQXm6Tg9q8m9X4eYwhj9AKk_E59ZnRAGlbB6WOpjzvfDOOwKUYGRFy317gs2wE_2k8iigX3aqe0OLcg9tX14Zk4wvc43DIUs1LucfvLL6m0PjD7AeDIB3xG_NZ50v448w8F4qJbJdlTH6CtZZtv_AdrqRoTwuSlqPa8izsCtapmNcSlNBInDHDwlrlc169Xt6vwEQ-SqoTXazg0L9xYajtXF3sV7rpclsNUyhMXxkIduSyRaEYQfycyVlA8w_n1HOcI-Woa-XSsomj8Red6IgFXuOQ/p.svg?fv_content=true&size_mode=5" class="icon-fog">
                <p class="card-par">Selecione uma pergunta</p>
            </div>
            
           
            <transition-group> 
            
            </transition-group>
        </div>
        <div class="card-list">
            <ul>
                <li class="icon-1">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[0].title}}</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[1].title}}</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[2].title}}</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[3].title}}</a>  
                </li>
            </ul>
            <ul>
                <li class="icon-2">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[4].title}}</a>  
                </li>
            </ul>
            <ul>
                <li class="icon-2">
                    <a v-for="faq in $basecampFaq" :key="faq">{{faq.questions[5].title}}</a>  
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    
    export default {
        created(){
            this.$store.dispatch('fetchFaq')
        },
        computed: {
            $allFaq(){
                return this.$store.getters.$allFaq
            },
            $basecampFaq(){
                return this.$store.getters.$basecampFaq
            },
             $basecampFaqTwo(){
                return this.$store.getters.$basecampFaqTwo
            },
             $basecampFaqThree(){
                return this.$store.getters.$$basecampFaqThree
            },
             $basecampFaqFour(){
                return this.$store.getters.$basecampFaqFour
            },
            
            
        }
    }
</script>

<style >
    a{
    cursor: pointer;
}
ul{
    padding-left: vh;  
    list-style: none;   
    
}

li{
    
    padding: 2vh;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Lato';
    
    
}


ul:hover{
   background: #42d1d62f;
}
.icon-1,.icon-2{
    display: flex;
   
    
}
.icon-1 img,.icon-2 img{
    padding-right: 4vh;
    width: 3vh;
}

.card-container{
    position: absolute;
    left: 45%;
    top: 25%;
    width: 23rem;
    height: 36rem;
    border-radius: 40px;
    background-color: #454545;
    background-image: linear-gradient(19deg, #454545 0%, #000000 100%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.card-top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    padding-left: 2rem;

}
.card-title{
    color: #fff;
    font-size: 1.3rem;
    font-weight: 900;
    font-family: 'Lato';
}
.card-par{
    
    margin-left: 5vh;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Lato';

}
.card-header{
    display: flex;
    flex-wrap: wrap;
    
    
}

.icon-ar{
    margin-right: 3vh ;
    
}
.icon-fog{
    margin-left:10vh ;
    width: 30px;
}
</style>