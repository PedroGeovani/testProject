<script lang="ts">
import Api from '../services/api'
import { type User } from '../services/types'

export default {
    name : "Contact",
    data() {
        return{
            listUser : [] as User[],
        }
    },//data
    mounted(){
      Api
      .get("./users")
      .then(response => (this.listUser = response.data))
    }
}
</script>
<template > 
  <div v-for="(user,index) in listUser" :key="index">
    <a> {{user.name}} </a> 
    <router-link class="routelink" :to="{name: 'DetailContact',params:{id:index} }" > Detalhes </router-link>
  </div> 
</template>


<style scoped>

.routelink{ 
    display: inline-block;
    margin-left: 40px;
    margin-bottom: 2px;
    padding: 3px 20px;
    border-radius: 20px;
    font-size: 16px;  
    font-weight: 600;  
    color: rgb(90, 90, 255);
    text-decoration: solid;
    border-style: outset;
}
</style>