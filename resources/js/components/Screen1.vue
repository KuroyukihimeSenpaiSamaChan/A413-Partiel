<template>
    <div id="screen1">
        <div class="d-flex align-items-center justify-content-center">
            <div class="text-center">
                <h1>GRAND BARBECUE</h1>
                <h2>ANNUEL</h2>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="btn-group" role="group">
                <button class="btn btn-light shadow-sm mr-3 text-uppercase" @click.prevent="goToSoft">Boisson<br>sans alcool</button>
                <button class="btn btn-light shadow-sm text-uppercase" @click.prevent="goToAlcohol">Boisson<br>alcoolisé</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToAlcohol() {
            this.$router.push('/alcohol')
        },
        goToSoft() {
            this.$router.push('/soft')
        }
    }
}
</script>
<style lang="scss">
#screen1 {
    h1 {
        color: #6c5aa7;
        font-weight: 800;
        font-family: 'Roboto Condensed', 'Roboto', sans-serif;
    }
    .btn-light {
        color: #6c5aa7;
        font-weight: 600;
        height: 150px;
        width: 150px;
    }
    h2 {
        letter-spacing: 0.3rem;
    }
    .full-height {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
