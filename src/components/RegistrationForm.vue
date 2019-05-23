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

        <div class="error-box" v-if="this.errors.length">
            <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
        </div>
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
                this.errors.push("Input your name, please.");
            }

            if (!this.user.lastName) {
                this.errors.push("Input your last name, please.");
            }            
            this.validateEmail();
            this.validatePass();
            this.validateConfirmPass();

            if (!this.errors.length) {
                return true;
            }
        },
        validatePass() {
            if (!this.user.password) {
                this.errors.push("Input your  password, please.");
            }
            if (this.user.password && this.user.password.length < 6) {
                this.errors.push("The password should have 6 characters.");
            } 
        },
        validateConfirmPass() {
            if (!this.user.confirmPassword) {
                this.errors.push("Input your  confirmPassword, please.");
            }

            if (this.user.password !== this.user.confirmPassword) {
                this.errors.push("The passwords don`t match.");
            }
        },
        validateEmail() {
            if (!this.user.email) {
                this.errors.push("Input your email, please.");
            } else if (!this.checkEmail(this.user.email)) {
                this.errors.push("Your email is not correct.");
            }
        },
        checkEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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

    .error-box {
        border: 1px solid red;
        border-radius: 7px;
        box-shadow: 3px 2px 3px 0 var(--main-color);
        width: 50%;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
