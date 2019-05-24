<template>
    <header id="header">
        <div class="logo">
            <p>Hello!</p>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/form">Register</router-link>
                </li>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/main">Main</router-link>
                </li>
                <li>
                    <button @click="onLogout" class="logout">Logout</button>
                </li>
            </ul>
        </nav>
		<router-view></router-view>
    </header>
</template>

<style scoped>
#header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #802b00;
    padding: 0 20px;
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