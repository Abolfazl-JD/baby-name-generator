<script setup lang="ts">
import { names } from '@/data'
import { Gender, Length, Popularity, OptionType, OptionsState, allOptions } from '@/types'

const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.LONG
})

const computeNames = () => {
  const filteredNames = names.filter(name => name.gender === options.gender)
    .filter(name => name.popularity === options.popularity)
    .filter(name => {
      if (options.length === Length.ALL) return true
      else return name.length === options.length
    })

  selectedNames.value = filteredNames.map(name => name.name)
}

const selectedNames = ref<string[]>([])

const optionsArray : OptionType[] = [
  {
    title: "1) choose a gender",
    category: "gender",
    buttons : [Gender.BOY, Gender.GIRL, Gender.UNISEX]
  },

  {
    title: "2) choose the name's popularity",
    category: "popularity",
    buttons : [Popularity.TRENDY, Popularity.UNIQUE]
  },

  {
    title: "3) choose name's length",
    category: "length",
    buttons : [Length.ALL, Length.SHORT, Length.LONG]
  }
]

const changeCategoryOption = (categoryName : string, buttonName : allOptions) => {
  options[categoryName] = buttonName
}

const removeItem = (item : number) => {
  selectedNames.value.splice(item, 1)
}
</script>

<template>
  <div class="container">
    <h1>Baby name generator</h1>
    <p>Choose your options and click the "find names" button below</p>
    <div class="options-container">

      <Option 
        v-for="option in optionsArray" 
        :key="option.title" 
        :option="option" 
        :categoryOption="options[option.category]"
        @change-category-option="changeCategoryOption" />
      <button class="primary" @click="computeNames">Find names</button>
    </div>
    <div class="cards-container">
      <CardName 
         v-for="(name, index) in selectedNames" 
         :key="name"
         :name="name"
         :index="index"
         @delete-name="removeItem"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0a auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>
