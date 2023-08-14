
<script setup>
import { ref } from 'vue';
// import { Notify  } from 'quasar'
const data = ref([
      ['Frozen Yogurt', 159, 6, 24, 4, 87],
      ['Ice cream sandwich', 237, 9, 37, 4.3, 129],
      ['Eclair', 262, 16, 23, 6, 337],
      ['Cupcake', 305, 3.7, 67, 4.3, 413],
      ['Gingerbread', 356, 16, 49, 3.9, 327]
])
const headers = ref(["Coffee", "Grinder", "Grind setting", "Brewing time [s]",
"Weight result [g]", "taste"])
</script>

<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">
          Coffee grading
        </div>
      </q-card-section>
      <q-markup-table dense>
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in data"
            :key="i"
          >
            <td
              v-for="(item, j) in row"
              :key="`${item}-${i}-${j}`"
              contenteditable
              :class="{ 'text-right': typeof item === 'number' }"
              @blur="edit($event.target, i, j)"
            >
              {{ item }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <q-card-actions>
        <q-btn
          color="primary"
          flat
          label="New entry"
          @click="log"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style>
#app {
  font-family: 'Open Sans', 'Roboto' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
