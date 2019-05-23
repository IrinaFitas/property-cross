<template>
    <div>
        <h3>Form Registration:</h3>
        <a-form class="form">
            <a-form-item label="First Name:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="first name" />
            </a-form-item>
            

            <a-form-item label="Last Name:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="last name" />
            </a-form-item>

            <a-form-item label="Password:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="password" type="password" />
            </a-form-item>

            <a-form-item label="Confirm password:" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-input placeholder="password" type="password" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit">Register</a-button>
            </a-form-item>
        </a-form>
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
        };
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
        border-radius: 5px;
        border: 1px solid grey;
        margin: 0 auto;
    }
</style>
