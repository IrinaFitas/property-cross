<template>
    <div>
        <h3>Form Registration:</h3>
        <a-form class="form" @submit="validateAndSend" method="POST" novalidate="true">
            <a-form-item label="First Name:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="first name" v-model="user.name" />
            </a-form-item>            

            <a-form-item label="Last Name:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="last name" v-model="user.lastName" />
            </a-form-item>

            <a-form-item label="Email:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="email" type="email" v-model="user.email" />
            </a-form-item>

            <a-form-item label="Password:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="password" type="password" v-model="user.password" />
            </a-form-item>

            <a-form-item label="Confirm password:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="password" type="password" v-model="user.confirmPassword" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit">Register</a-button>
            </a-form-item>
        </a-form>
        <p>{{ user.name }}</p>
        <p>{{ user.lastName}}</p>
        <p>{{ user.email}}</p>
        <p>{{ user.password }}</p>
        <p>{{ user.confirmPassword }}</p>
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
    </div>
</template>

<script>
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
                name: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            errors: []
        };
    },
    methods: {
        validateAndSend(e) {
            e.preventDefault();
            if (!this.user.name) {
                this.errors.push("Input your name, please");
            }

            if (!this.user.lastName) {
                this.errors.push("Input your last name, please");
            }

            if (!this.user.email) {
                this.errors.push("Input your email, please");
            }

            if (!this.user.password) {
                this.errors.push("Input your  password, please");
            }

            if (!this.user.confirmPassword) {
                this.errors.push("Input your  confirmPassword, please");
            }
        }
    }
}
</script>


<style scoped>
    h3 {
        font-weight: bold;
        margin-bottom: 15px;
        font-size: 20px;
    }
    .form {
        width: 50%;
        padding: 15px;
        border-radius: 7px;
        border: 1px solid var(--main-color);
        box-shadow: 3px 2px 3px 0 var(--main-color);
        margin: 0 auto;
    }
</style>
