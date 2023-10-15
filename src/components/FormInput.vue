<script setup lang="ts">
    defineProps({
        input_type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        input_name: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div>
        <label>{{ input_name }}</label>
        <input :type="input_type" :placeholder="placeholder">
    </div>
</template>