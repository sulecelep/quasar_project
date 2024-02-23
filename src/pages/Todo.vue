<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-secondary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        filled
        bg-color="white"
        placeholder="Görev Ekle"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(item, index) in tasks"
        :key="item.title"
        @click="item.done = !item.done"
        :class="{ 'done bg-blue-1': item.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="item.done"
            class="no-pointer-events"
            clickable
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="item.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon
      name="check"
      size="100px"
      color="secondary"
      />
      <div class="text-h5 text-secondary text-center">
        Görev Yok
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const newTask = ref("");
    const tasks = reactive([
      // {
      //   title: "Get bananas",
      //   done: false,
      // },
      // {
      //   title: "Eat bananas",
      //   done: true,
      // },
      // {
      //   title: "Poo bananas",
      //   done: false,
      // },
    ]);

    const deleteTask = (index) => {
      $q.dialog({
        title: "Onay",
        message: "Silmek istediğinize emin misiniz?",
        cancel: true,
        persistent: true,
        ok: "Tamam",
        cancel: "İptal",
      }).onOk(() => {
        
        tasks.splice(index, 1);
        $q.notify("Görev silindi.");
      });
    };

    const addTask = () => {
      //console.log("newTask",newTask);
      if(newTask.value==="")
      {
        $q.notify("Lütfen bir görev giriniz.");

      }else{
      tasks.push({
        title: newTask.value,
        done: false,
      });
      newTask.value="";
    }
    };

    return {
      tasks,
      deleteTask,
      addTask,
      newTask
    };
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks{
  opacity:0.5;

}
</style>
