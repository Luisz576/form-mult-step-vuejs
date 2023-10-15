<script setup lang="ts">
    defineProps({
        step_actived: {
            type: Boolean,
            required: true
        },
        step_number: {
            type: Number,
            required: true
        },
        step_title: {
            type: String,
            required: true
        },
        funcUpdate: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div class="flex">
        <div class="step-icon " @click="() => {
            funcUpdate(step_number)
        }">
            <div :class="step_actived ? 'bg-blue-300' : 'bg-transparent'" class="inline-block h-12 w-12 rounded-full ring-2 ring-white">
                <span :class="step_actived ? 'text-blue-950' : 'text-white'" class="font-bold text-lg">{{ step_number }}</span>
            </div>
        </div>
        <div class="mx-2 step-content">
            <h3>STEP {{ step_number }}</h3>
            <p>{{ step_title }}</p>
        </div>
    </div>
</template>

<style scoped>
    .step-icon{
        flex: 1;
    }
    .step-content{
        flex: 4;
    }
</style>