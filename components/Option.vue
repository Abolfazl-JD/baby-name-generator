<script setup lang="ts">
import { OptionType, allOptions } from '@/types'

interface PropsType {
    option: OptionType,
    categoryOption: allOptions
}
interface EmitType {
    (e : "changeCategoryOption", categoryName : string, buttonName : allOptions ) : void
}

const props = defineProps<PropsType>()
const emit = defineEmits<EmitType>()

const optionClasses = (buttonName: allOptions, index: number) => {
    const classNames : string[] = []
    if (props.categoryOption === buttonName) classNames.push('option-active')
    
    if (index === 0) classNames.push('option-left')
    else if (index === props.option.buttons.length - 1) classNames.push('option-right')
    return classNames.join(" ")
}
</script>

<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-buttons">
            <button
                v-for="(buttonName, index) in option.buttons"
                :key="buttonName" 
                class="option" 
                :class="optionClasses(buttonName, index)"
                @click="emit('changeCategoryOption', option.category, buttonName)"
            >
                {{ buttonName }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>