<template>
<div id="screen3">
    <div class="d-flex align-items-center justify-content-center">
        <div class="text-center">
            <h1>GRAND BARBECUE</h1>
            <h2>ANNUEL</h2>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="soft col mb-4" v-for="soft in softs" :key="soft.id">
                <button  class="btn btn-light shadow-sm" @click.prevent="setSoft(soft.id)">{{ soft.name }}</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch('loadSofts')
    },
    computed: {
        ...mapGetters({
            'softs': 'softs'
        })
    },
    methods: {
        setSoft(soft) {
            this.$store.commit('setSoft', soft)
            this.$store.dispatch('sendToRobot')
            this.$router.push('/thank-you')
        },
    }
}
</script>
<style lang="scss">
#screen3 {
    h1 {
        color: #6c5aa7;
        font-weight: 800;
        font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    }

    h2 {
        letter-spacing: 0.3rem;
    }
    .soft {
        max-width: 150px;
        height: 120px;
    }

    .btn-light {
        height: 120px;
        width: 120px;
        color: #6c5aa7;
        font-weight: 600;
    }
}
</style>
