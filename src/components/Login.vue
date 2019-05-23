<template>
    <a-form class="form" novalidate="true">
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
    }
}
</script>

