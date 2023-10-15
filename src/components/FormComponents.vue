<script setup lang="ts">
    import FormInput from './FormInput.vue'
    import { type Input } from '@/components/StepInfo'

    defineProps({
        form_title: {
            type: String,
            required: true
        },
        form_subtitle: {
            type: String,
            required: true
        },
        inputs: {
            type: Array<Input>,
            required: true
        }
    })
</script>

<template>
    <h2>{{ form_title }}</h2>
    <h4>{{ form_subtitle }}</h4>
    <div>
        <FormInput :class="console.log(inputs)" v-for="input in inputs" :input_type="input.type" :input_name="input.name" :placeholder="input.placeholder"/>
    </div>
</template>