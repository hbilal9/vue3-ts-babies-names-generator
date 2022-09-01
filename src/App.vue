<script setup lang="ts">
import { reactive, ref } from "vue";
import { optionsTypes, Gender, Religion, Lenght } from "./types/Types";
import { names } from './assets/data'

const options = reactive<optionsTypes>({
  gender: Gender.Male,
  religion: Religion.Muslim,
  length: Lenght.Short,
});

const selectedNames = ref<String[]>([]);

const generateNames = () => {
  const filterNames = names
        .filter(name => {
          if (options.gender === Gender.Both) return true
          else return name.gender === options.gender
        })
        .filter(name => {
          if (options.religion === Religion.Both) return name
          else return name.religion === options.religion
        })
        .filter(name => {
          if (options.length === Lenght.Both) return true
          else return name.length === options.length
        })
    selectedNames.value = filterNames.map(name => name.name);
}
</script>

<template>
  <div class="container">
    <h1>Babies Names Generator</h1>
    <div class="options-container">
      <div class="option-container">
        <h3>Gender</h3>
        <div class="optionbuttons">
          <button
            @click="options.gender = Gender.Male"
            :class="options.gender === Gender.Male && 'active'"
            class="option-button"
          >
            Male
          </button>
          <button
            @click="options.gender = Gender.Female"
            class="option-button"
            :class="options.gender === Gender.Female && 'active'"
          >
            Female
          </button>
          <button
            @click="options.gender = Gender.Both"
            class="option-button"
            :class="options.gender === Gender.Both && 'active'"
          >
            Both
          </button>
        </div>
      </div>
      <div class="option-container">
        <h3>Religion</h3>
        <div class="option-buttons">
          <button
            @click="options.religion = Religion.Muslim"
            class="option-button"
            :class="options.religion === Religion.Muslim && 'active'"
          >
            Muslim
          </button>
          <button
            @click="options.religion = Religion.NonMuslim"
            class="option-button"
            :class="options.religion === Religion.NonMuslim && 'active'"
          >
            Non Muslim
          </button>
          <button
            @click="options.religion = Religion.Both"
            class="option-button"
            :class="options.religion === Religion.Both && 'active'"
          >
            Both
          </button>
        </div>
      </div>
      <div class="option-container">
        <h3>Length</h3>
        <div class="option-buttons">
          <button
            @click="options.length = Lenght.Long"
            class="option-button"
            :class="options.length === Lenght.Long && 'active'"
          >
            Long
          </button>
          <button
            @click="options.length = Lenght.Short"
            class="option-button"
            :class="options.length === Lenght.Short && 'active'"
          >
            Short
          </button>
          <button
            @click="options.length = Lenght.Both"
            class="option-button"
            :class="options.length === Lenght.Both && 'active'"
          >
            Both
          </button>
        </div>
      </div>
      <button @click="generateNames" class="generate-button">Generate</button>

      <div class="card-container">
        <div class="card" v-for="(name, i) in selectedNames" :key="i">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

