<template>
    <div id="error-msg">
        <h1 v-if="error.statusCode === 404">Sorry, we could not find that page :(</h1>
        <h1 v-else> Something went wrong: {{error.statusCode}} </h1>
        <img id="not-found-icon" src="~/assets/404.png" alt="not-found-error-code" />
        <br/>
        <b-button pill variant="outline-secondary">
            <nuxt-link to="/"><h1>Back to Home</h1></nuxt-link>
        </b-button>
        
    </div>
</template>

<script>
export default {
    layout: 'error',
    props: ['error']
}
</script>

<style scoped>
#error-msg {
    width: 50vw;
    margin: auto;
    text-align: center;
    height: 100vh;
    font-size: 1rem;
}

#not-found-icon {
    width: 50vw;
}

#error-msg a {
    text-decoration: none;
    color: var(--kenepa-green-alt);
}

#error-msg h1 {
    font-size: 1rem;
}

@media only screen and (min-width: 1080px) {
    #error-msg h1 {
        font-size: 2rem;
    }
}
</style>