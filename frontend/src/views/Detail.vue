<template>
    <div class="row">
        <Datablock/>
        <Description/>
    </div>
</template>

<script>
import Description from '../components/Description.vue'
import Datablock from '../components/Datablock.vue'
    export default {
        name: "Detail",
        components: {
            Description,
        Datablock
        }
    }
</script>

<style lang="scss" scoped>

</style>