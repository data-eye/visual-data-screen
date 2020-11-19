<template>
  <div class="home">
    <Loading></Loading>
    <FlyBox></FlyBox>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "../components/Loading";
import FlyBox from "../components/FlyBox";
export default {
  name: "Home",
  components: {
    Loading,
    FlyBox,
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
