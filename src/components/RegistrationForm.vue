<template>
    <div>
        <h3>Form Registration:</h3>
        <a-form class="form" @submit.prevent="send" novalidate="true">
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
import { requiredFieldMessage } from "./../utils/functions.js";
import { checkEmail } from "./../utils/functions.js";
import { mapActions } from "vuex";

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
        ...mapActions(["register"]),
        validate() {
            if (!this.user.name) {
                this.errors.push(requiredFieldMessage("name"));
            }

            if (!this.user.lastName) {
                this.errors.push(requiredFieldMessage("last name"));
            }            
            this.validateEmail();
            this.validatePass();
            this.validateConfirmPass();

            
            return this.errors.length;
            
        },
        validatePass() {
            if (!this.user.password) {
                this.errors.push(requiredFieldMessage("password"));
            }
            if (this.user.password && this.user.password.length < 6) {
                this.errors.push("The password should have 6 characters.");
            } 
        },
        validateConfirmPass() {
            if (!this.user.confirmPassword) {
                this.errors.push(requiredFieldMessage("confirmPassword"));
            }

            if (this.user.password !== this.user.confirmPassword) {
                this.errors.push("The passwords don`t match.");
            }
        },
        validateEmail() {
            if (!this.user.email) {
                this.errors.push(requiredFieldMessage("email"));
            } else if (!checkEmail(this.user.email)) {
                this.errors.push("Your email is not correct.");
            }
        },
        send() {
            if (!this.validate()) {
                this.register(this.user);
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
    .form,
    .error-box {
        width: 50%;
        border-radius: 7px;
        box-shadow: 3px 2px 3px 0 var(--main-color);
        margin: 0 auto;
        padding: 15px;
    } 
    .form {        
        padding: 15px;        
        border: 1px solid var(--main-color);      
    }

    .error-box {
        border: 1px solid red;        
        margin-top: 20px;
    }
</style>
