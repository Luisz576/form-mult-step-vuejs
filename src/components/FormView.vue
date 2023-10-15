<script setup lang="ts">
    import StepView from '@/components/StepView.vue'
    import FormComponents from '@/components/FormComponents.vue'
    import { steps } from './steps'
    import { type StepInfo } from '@/components/StepInfo'

    import { ref } from 'vue'

    const current_step = ref(1)

    const funcUpdate = (n: number): undefined => {
        current_step.value = n
    }

    function getStep(n: number): StepInfo{
        for(let s of steps){
            if(s.number == n){
                return s
            }
        }
        return {
            inputs: [],
            number: -1,
            title: "Erro",
            subtitle: "Erro"
        }
    }
</script>

<template>
    <div class="flex">
        <div class="flex-3">
            <StepView :step_func_update="funcUpdate" :step_actived="current_step" :steps="steps"/>
        </div>
        <div class="flex-1"></div>
        <div class="flex-5">
            <FormComponents :form_title="getStep(current_step).title" :form_subtitle="getStep(current_step).subtitle" :inputs="getStep(current_step).inputs"/>
            <button>Sumit</button>
        </div>
    </div>
</template>

<style>
    .flex-1{
        flex: 1;
    }
    .flex-3{
        flex: 3;
    }
    .flex-5{
        flex: 5;
    }
</style>