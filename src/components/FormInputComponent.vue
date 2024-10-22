<template>
    <div class="form-group">
        <label :for="id">{{ label }}</label>
        <input :type="type" class="form-control" :id="id" :name="name" :placeholder="placeholder"
            :pattern="computedPattern" :title="computedTitle" v-bind="$attrs" @input="handleInput"
            @invalid="showValidationMessage" :readonly="readonly" :value="modelValue" />
        <div class="invalid-feedback">{{ validationMessage }}</div>
    </div>
</template>

<script>
export default {
    name: 'FormInputComponent',
    props: {
        label: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        hint: {
            type: String,
            default: ''
        },
        readonly: {
            type: Boolean,
            default: false
        },
        modelValue: String,
    },
    data() {
        return {
            validationMessage: ''
        };
    },
    computed: {
        computedPattern() {
            if (this.type === 'email') {
                return '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
            } else if (this.type === 'tel') {
                return '\\d*';
            } else if (this.type === 'date') {
                return '\\d{4}-\\d{2}-\\d{2}';
            } else {
                return '.*';
            }
        },
        computedTitle() {
            if (this.type === 'email') {
                return 'Please enter a valid email address';
            } else if (this.type === 'tel') {
                return 'Please enter a valid phone number';
            } else if (this.type === 'date') {
                return 'Please enter a valid date in the format YYYY/MM/DD';
            } else {
                return 'Please enter a valid value';
            }
        }
    },
    methods: {
        showValidationMessage(event) {
            const input = event.target;
            input.classList.add('is-invalid');
            this.validationMessage = this.computedTitle;
        },
        clearValidationMessage(event) {
            const input = event.target;
            input.classList.remove('is-invalid');
            this.validationMessage = '';
        },
        handleInput(event) {
            const input = event.target;
            this.clearValidationMessage(event);
            if (this.type === 'date') {
                const value = input.value;
                const datePattern = /^\d{4}-\d{2}-\d{2}$/;
                if (!datePattern.test(value)) {
                    this.validationMessage = 'Please enter a valid date in the format YYYY-MM-DD';
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                    this.validationMessage = '';
                }
            } else {
                input.classList.remove('is-invalid');
            }
            this.$emit('update:modelValue', input.value);
        }
    }
};
</script>

<style scoped>
.form-group {
    margin-bottom: 15px;
}

.invalid-feedback {
    display: none;
}

input.is-invalid+.invalid-feedback {
    display: block;
}
</style>
