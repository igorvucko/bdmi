<template>
    <div class="form">
        <form @submit.prevent="submitForm" class="form-container">
            <h1 class="form-title">{{ title }}</h1>
            <div class="form-field">
                <label for="username" class="form-label">Username:</label>
                <input type="text" id="username" v-model="username" class="form-input" placeholder="Enter your username" />
            </div>
            <div class="form-field">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" v-model="password" class="form-input"
                    placeholder="Enter your password" />
            </div>
            <div v-if="isRegistration" class="form-field">
                <label for="confirmPassword" class="form-label">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-input"
                    placeholder="Confirm your password" />
            </div>
            <div class="form-buttons">
                <CustomButton type="submit">{{ buttonLabel }}</CustomButton>
            </div>
            <div v-if="errorMessage" class="form-error">
                {{ errorMessage }}
            </div>
        </form>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
    components: {
        CustomButton,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        isRegistration: {
            type: Boolean,
            default: false,
        },
        buttonLabel: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
        };
    },
    methods: {
        submitForm() {
            if (this.username && this.password) {
                if (this.isRegistration) {
                    if (this.password !== this.confirmPassword) {
                        this.errorMessage = 'Passwords do not match!';
                        return;
                    }
                    this.$emit('submit', {
                        username: this.username,
                        password: this.password,
                    });
                } else {
                    this.$emit('submit', {
                        username: this.username,
                        password: this.password,
                    });
                }
            } else {
                this.errorMessage = 'Please fill in all fields!';
            }
        },
    },
};
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-container {
    width: 400px;
    padding: 2rem;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
}

.form-field {
    margin-bottom: 1.5rem;
}

.form-label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

.form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.form-buttons {
    display: flex;
    justify-content: center;
}

.form-error {
    color: red;
    text-align: center;
    margin-top: 0.5rem;
}
</style>
