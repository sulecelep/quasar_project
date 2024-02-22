<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <q-item
      v-for="(item,index) in tasks"
      :key="item.title"
      @click="item.done = !item.done"
      :class="{'done bg-blue-1':item.done}"
      clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="item.done" class="no-pointer-events" clickable color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="item.done" side>
            <q-btn @click.stop="deleteTask(index)" flat round dense color="primary" icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const tasks = ref([
      {
        title: "Muz Getir",
        done: false,
      },
      {
        title: "Muz Ye",
        done: true,
      },
      {
        title: "Çilek Getir",
        done: false,
      },
    ]);

    const deleteTask =(index)=>{

      tasks.splice(index,1);

    }




    return {
      tasks,
      deleteTask,
    }

    
  },


  
});
</script>

<style lang="scss">

.done{
  .q-item__label{
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
