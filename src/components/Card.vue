<template>
    <div class="card-container">
        <div class="card-top">
            <img :src="image"/>
            <h1 class="card-title"> {{ askFrequent}}</h1>
            <p class="card-par">Escolha a categoria desejada</p>

            <transition-group> 
            
            </transition-group>
        </div>
        <div class="card-list">
            <ul>
                <li class="icon-1">
                    <img src="https://uca04c57742184ff7affb0a0cf64.previews.dropboxusercontent.com/p/orig/ABWGs3p2gSb-Z8iPk-WrjbeO6IQn3hiNPLDm7pX37KVhPHCRlxfHN_CCP1aZEhuo0CrYFQthfEOSj1DyktfaWFFDucRFbxWXUFG0zh1VUOq1GyapOJnbpVjNS4churbCwBvq29lPgs4Y9bQQ-qCsoRv_xQNzd-_joiC-_lbdDInnDAHMzSlxkahoUAlPlj7xeEd5YLfv2hfhb5wfoC0rDluB76ZcPODty1r95BQZgiWmWA04_1XCFHU7q3JW5Kx-jtrZystRBH9za4cxNcqx5ABx4jeyvT9Gs6QAdvzZeErvABjYcrqjejUG2wrEHvjkcjb9ImU36t_wSJBhc1faNEwRBtBnaY_7wpcw76Ns8xwjNA/p.svg?fv_content=true&size_mode=5" alt="" srcset=""><a>Basecamp</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <img src="https://uce43a40f5bb21a9c182f96ae54a.previews.dropboxusercontent.com/p/orig/ABUdotElEjy0-yeIVUw69mcshSIy1vzw3h7TBux6bnF_bv6AfPYABJ-wPT4pAQBEuhr829xkloyeihQq-gEonoK6Lj_27mT-fxUV7nsZs4E34pNY1EbcRR9Cwf1qZZE3XUxYBNM9whCO8UwIO4il1FOXLgUDbRyXu8gD6yN2l4ILcNJuKEjH16tPVsko6MNajd5kbPQcFl6YTXhliE5eNd1rm-g6_GcuM48cvQiO821qhKMISdHxrlGZM7KPbqy9Sq3_NXuIp8nzHlKSC417PFJy_NGGhmqqLrC-bWTBosAwBQK7RkW32rfcQxChxh0WTULIUw9IDePyWkFCzcE3EbNjuJFG3V5liUc3iaNpKKcO_A/p.svg?fv_content=true&size_mode=5" alt=""><a>Bootcamp</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <img src="https://ucb02962c4f1bdc0c47148179bd9.previews.dropboxusercontent.com/p/orig/ABWlG1C4h7eNXr-3m028EhIGoYGlj-pljz_O4CxhMictBMhFvV1V6fanYC5v5LioqBaRTmYwH2dbtv0LKpGI4xLkrGHxmrtwuqH87BeEC7FoArU95IpE3pwORQ-Xrlo8As82ILMZP__lmQfVUjB3sEenvHJsovINrdUIAulW3cD1poxPHfaRHZQ-pwqabrVZsQUqybty4bLMOJLKAODE_mBvRQae4t8ycrYAXIxF_Dt9k2-k20S1OjnBzgg_4_WTGcTl20KWFn4zg3ZwZJsc5Al177mtFUOuaHhDwhWls16f86F69xAfwyIAJQzZjVLfh0ckT4p5kmSvjWlX6Cz1NUMrD2yswdtCJO6vdso2sUthnQ/p.svg?fv_content=true&size_mode=5" alt="" srcset=""><a>Cataline</a>  
                </li>
            </ul>
             <ul>
                <li class="icon-2">
                    <img src="https://uc86db08c6ef6e2ef0944299d8e6.previews.dropboxusercontent.com/p/orig/ABVpWMqkuNd74NEJtGZrhhzdVOPLFTO3Jtxr83CGrsUL83oA6xrXFGDT6r6KFv8Q-xoxS61OnVs33WHoEH9F6FDy2pEqH6iaRs3tKohZXL63q0FttCA8bcGIvp9r7mL4GAioc6WGN-RG4XmxehSIM8q_ih6sYosrhXJA1vnzIgP6BWSEPnJ59DZRAi1uEKgb2B7daj0NUkKDEt5DBoLOafc9uf5ZJZQlAsTgs8lIiqFj-vGi-6TVpy333kWzBkG9JnfaHyASd_l78xoN5RTOkwmy75ufEtD60DEZobXt-ip3zYxLslwv4Rf0znAXoP2DRtqY0fYPRMIMJeZhbELVyqSsY2Az78VbhvgWNVTpVqGnQQ/p.svg?fv_content=true&size_mode=5" alt="" srcset=""><a>Parcerias</a>  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import image from '../assets/astronaut.svg'
    
    export default {
        data(){
            return{
                image,
                askFrequent: "Perguntas frequentes",
                show:true

            }
        }
    }
</script>

<style scoped>
a{
    cursor: pointer;
}
ul{
    padding-left: 2vh;  
    list-style: none;   
    
}

li{
    
    padding: 2vh;
    color: #fff;
    font-size: 1.3rem;
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
    padding-top: 21vh;
    position: absolute;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: 'Lato';

}

</style>