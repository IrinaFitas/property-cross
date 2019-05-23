<template>
    <a-form class="form" novalidate="true" @submit="login">
        <a-form-item label="Email:" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input placeholder="email" type="email" v-model="user.email" />
        </a-form-item>

        <a-form-item label="Password:" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input placeholder="password" type="password" v-model="user.password" />
        </a-form-item>

        <a-form-item>
                <a-button type="primary" html-type="submit">Login</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import axios from "axios-jsonp-pro";
import { API_KEY } from "./../utils/constants.js";
import { BASE_AUTH_URL } from "./../utils/constants.js";

export default {
    data() {
        return {
            labelCol: {
                xs: { span: 34 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 34 },
                sm: { span: 12 },
            },
            user: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            axios.post(`${BASE_AUTH_URL}verifyPassword?key=${API_KEY}`, {
                email: this.user.email,
                password: this.user.password,
                returnSecureToken: true
            }).then( res => console.log(res))
            .catch( error => console.log(error));
        }
    }
}
</script>

