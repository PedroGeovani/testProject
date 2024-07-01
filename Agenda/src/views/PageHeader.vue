<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name : 'contact',
    data(){
        return{
            title : "Contatos"
        }
    }
}
</script>
<template>
    <div>
        <div class="title_style"> 
            Agenda 
            <img class="image_style" src="../components/icons/icon_calendar.png" />
        </div> 
        <div class="contact_style">
            <RouterLink class="nav" to="/"> Contatos </RouterLink> |
            <RouterLink class="nav" to="AddContanct"> Novo </RouterLink>    
        </div>        
        <div class="box_data"> <RouterView/> </div>                 
    </div>
</template>
<style scoped>
.title_style{
    background: rgb(90 , 90 , 250);
    color: white;
    padding: 20px;   
    padding-left: 30px; 
    font-size: 24px;
    height: 50px;
    border-bottom-left-radius: 30px;
}
.image_style{
    width: 40px;
    height: 40px;
    margin-left: 80%;      
}
.contact_style{
    display: inline-block;
    font-size: 16px;
    color: rgb(90 , 90 , 250);    
    margin: 20px;
    margin-left: 30px;  
    font-weight: 700; 
}
.add_style{
    display: inline-block;
    background: rgb(90 , 90 , 250);
    font-weight: 700;
    color: #ffffff;
    font-size: 24px;
    padding: 5px 25px;
    margin-left: 30px;
    margin-left: 65%; 
    border-radius: 15px;    
}
.nav{
    text-decoration: none;
}

.box_data{
 background: white;
 width: 840px;
 height: 1200px;
 padding: 20px;
 margin-left: 30px;
 border-radius: 15px;
}



</style>
