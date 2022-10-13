<template>
  <div class="main-loader d-flex justify-content-center align-items-center">

    <!-- <rotate-square2></rotate-square2> -->
    <circle-2></circle-2>
    

  </div>
</template>

<script>
import {RotateSquare2, Circle2} from 'vue-loading-spinner'

export default {
  components: {
      RotateSquare2,
      Circle2
    }
}
</script>

