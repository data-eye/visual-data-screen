<template>
  <div class="container">
    <loading v-if="!ready">loading...</loading>
    <container :options="{ width: 3840, height: 2160 }" v-else></container>
  </div>
</template>

<script>
import { ref } from "vue";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
export default {
  name: "Screen",
  components: {
    Loading,
    Container,
  },
  setup() {
    // const context = getCurrentInstance().ctx;
    const ready = ref(true);
    return {
      ready,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  // background-color: rgb(50, 47, 48);
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
}
</style>
