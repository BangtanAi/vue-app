<template>
<div>
  <div class="buttons">
  <button @click="this.$router.push('/one')">1</button>
  <button @click="this.$router.push('/two')">2</button>
  <button @click="this.$router.push('/three')">3</button>
</div>
  <router-view/>
</div>

</template>

<script>
import ButtonOne from './views/ButtonOne.vue';

export default({
  components: {
    'button-one': ButtonOne
  } 
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: auto;

}
button{
  padding: 20px 30px; 
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
</style>
