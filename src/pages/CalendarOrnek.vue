<template>
  <div style="max-width: 800px; width: 100%">
    
    <q-calendar-month
    v-model="selectedDate"
      view="month"
      locale="tr"
      
    ></q-calendar-month>
  </div>
</template>
<style src="@quasar/quasar-ui-qcalendar/dist/index.css"></style>
<script setup>

import {QCalendarMonth} from "@quasar/quasar-ui-qcalendar/src/QCalendarMonth"
//import "@quasar/quasar-ui-qcalendar/src/css/q-calendar.sass"
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'


const selectedDate = "";
// const agenda= reactive( {
//         // value represents day of the week
//         1: [
//           {
//             time: '08:00',
//             avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
//             desc: 'Meeting with CEO'
//           },
//           {
//             time: '08:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar.png',
//             desc: 'Meeting with HR'
//           },
//           {
//             time: '10:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
//             desc: 'Meeting with Karen'
//           }
//         ],
//         2: [
//           {
//             time: '11:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
//             desc: 'Meeting with Alisha'
//           },
//           {
//             time: '17:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
//             desc: 'Meeting with Sarah'
//           }
//         ],
//         3: [
//           {
//             time: '08:00',
//             desc: 'Stand-up SCRUM',
//             avatar: 'https://cdn.quasar.dev/img/material.png'
//           },
//           {
//             time: '09:00',
//             avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
//           },
//           {
//             time: '10:00',
//             desc: 'Sprint planning',
//             avatar: 'https://cdn.quasar.dev/img/material.png'
//           },
//           {
//             time: '13:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar1.jpg'
//           }
//         ],
//         4: [
//           {
//             time: '09:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'
//           },
//           {
//             time: '10:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
//           },
//           {
//             time: '13:00',
//             avatar: 'https://cdn.quasar.dev/img/material.png'
//           }
//         ],
//         5: [
//           {
//             time: '08:00',
//             avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
//           },
//           {
//             time: '09:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
//           },
//           {
//             time: '09:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'
//           },
//           {
//             time: '10:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'
//           },
//           {
//             time: '11:30',
//             avatar: 'https://cdn.quasar.dev/img/material.png'
//           },
//           {
//             time: '13:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'
//           },
//           {
//             time: '13:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'
//           },
//           {
//             time: '14:00',
//             avatar: 'https://cdn.quasar.dev/img/linux-avatar.png'
//           },
//           {
//             time: '14:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar.png'
//           },
//           {
//             time: '15:00',
//             avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
//           },
//           {
//             time: '15:30',
//             avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
//           },
//           {
//             time: '16:00',
//             avatar: 'https://cdn.quasar.dev/img/avatar6.jpg'
//           }
//         ]
//       });
// const themesList = computed(() => {
//   const list = [];
//   Object.keys(this.themes).forEach((theme) => {
//     list.push({
//       label: theme,
//       value: { ...this.themes[theme] },
//     });
//   });
//   return list;
// });

// const getAgenda = (day) => {
//   return agenda[parseInt(day.weekday, 10)];
// };
</script>
