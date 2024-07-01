<script lang="ts">
import Api from '../services/api'
import { type User } from '../services/types'

export default {
    name : "Contact",
    data() {
        return{           
            listUser: {} as User
        }
    },//data    
    mounted(){
      Api
      .get("./users")
      .then(response => (this.listUser = response.data[Number(this.$route.params.id)]))
    }
}
</script>

<template >  
  <div>
    <div>Nome: {{listUser.name }}</div>
    <div>Endereço: {{listUser.address }}</div>
    <div>Telefone: {{listUser.phone }}</div>
    <div>Cidade: {{listUser.city }}</div>
    <div>Email: {{listUser.e_mail }}</div>
  </div>

  <!--div>
    <div>Nome: {{listUser[Number($route.params.id)].name }}</div>
    <div>Endereço: {{listUser[Number($route.params.id)].address }}</div>
    <div>Telefone: {{listUser[Number($route.params.id)].phone }}</div>
    <div>Cidade: {{listUser[Number($route.params.id)].city }}</div>
    <div>Email: {{listUser[Number($route.params.id)].e_mail }}</div>
  </div-->
 
</template>


<style scoped>
.box_data{
background: white;
width: 840px;
padding: 20px;
margin-left: 30px;
border-radius: 15px;
}
.item{
  margin-left: 130px;
}
.subtitle_text{    
  font-size: 28px;  
  font-weight: 600;  
  color: rgb(90, 90, 255);
}
.background_itens{
  background: rgb(255, 255, 255);
  border: 3px;
  margin-left: 20px;
  border-color: rgb(0, 4, 245);
  border-radius: 15px;
}
.collumn{ 
  margin-left: 40px;
  columns: 2; 
  margin-bottom: 10px;
  width: 870px; 
}
</style>