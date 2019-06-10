<template>
    <div>
    <header id="header">
        <div class="logo">
            <p>Hello!</p>
        </div>
        <nav>
            <ul>
                <template v-if="isAuthenticated">
                    <li><router-link to="/">Main</router-link></li>
                    <li><button @click="logout" class="logout">Logout</button></li>
                </template>

                <template v-else>
                    <li><router-link to="/form">Register</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                </template>
            </ul>
        </nav>
    </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["isAuthenticated"])
    },
    methods: {
        ...mapActions(["logout"])
    }
}
</script>

<style scoped>
#header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #802b00;
    padding: 0 20px;
    margin-bottom: 20px;
}

.logo {
    font-weight: bold;
    color: white;
}

.logo p {
    margin: 0;
}

nav {
    height: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
}

li {
    margin: 0 16px;
}

li a {
    text-decoration: none;
    color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
    color: #fa923f;
}

.logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
}
</style>