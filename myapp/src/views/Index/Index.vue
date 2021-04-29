<template>
    <div>
        
        <router-view/>
        <footers />
    </div>
</template>

<script>
import footers from '@/components/footer/Advertisement';
export default {
    components:{
        footers,
    }
}
</script>

<style>

</style>