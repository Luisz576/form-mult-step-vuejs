<script setup lang="ts">
    import StepTile from '@/components/StepTile.vue'
    import type { StepInfo } from '@/components/StepInfo'

    defineProps({
        step_actived: {
            type: Number,
            required: true
        },
        steps: {
            type: Array<StepInfo>,
            required: true
        },
        step_func_update: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div class="bg-step-view rounded-lg px-8 py-4">
        <StepTile v-for="step in steps"  :func-update="step_func_update" :step_actived="step_actived == step.number" :step_number="step.number" :step_title="step.title"/>
    </div>
</template>

<style scoped>
    .bg-step-view{
        background-image: url('../../public/images/bg-sidebar-desktop.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>