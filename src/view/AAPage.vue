<template>
    <div>
        <div class="container">
            <h1>AA Page</h1>
            <p>This is the content of AA page.</p>
            <form id="bookingForm" @submit.prevent="submitForm" class="needs-validation" novalidate autocomplete="off">
                <div class="col-12 col-md-6">
                    <FormInputComponent label="User" :value="inputUser" @input="inputUser = $event.target.value"
                        id="inputUser" name="inputUser" type="text" placeholder="Your name" required />

                </div>
                <button class="btn btn-primary btn-block col-lg-2" type="submit">to B</button>
            </form>
        </div>
    </div>
</template>

<script>
import FormInputComponent from '@/components/FormInputComponent.vue';
export default {
    name: 'AAPage',
    data() {
        return {
            inputUser: '',
        }
    },
    components: {
        FormInputComponent,
    },
    methods: {
        submitForm() {
            const form = document.getElementById('bookingForm');
            if (form.checkValidity() === false) {
                form.classList.add('was-validated');
                const invalidElements = form.querySelectorAll(':invalid');
                invalidElements.forEach(element => {
                    element.dispatchEvent(new Event('invalid', { bubbles: true }));
                });
            } else {
                console.log('Input User:', this.inputUser);
                this.$router.push({ path: '/bb', query: { inputUser: this.inputUser } });
            }
        }
    },
};
</script>
