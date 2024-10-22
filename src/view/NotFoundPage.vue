<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
            <span class="text-danger">Oops!</span> Page not found.
        </p>
        <p class="lead">
            The page you’re looking for doesn’t exist.
        </p>
        <router-link to="/" class="btn btn-primary">Go Home</router-link>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage"
};
</script>

<style scoped>
.vh-100 {
    height: 100vh;
}
</style>