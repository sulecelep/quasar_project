<template>
  <div class="subcontent">
    <navigation-bar :today="onToday" :prev="onPrev" :next="onNext" />
    <!-- <q-btn flat dense label="Today" class="q-mx-md" @click="setToday"></q-btn>
    <q-btn flat dense round icon="keyboard_arrow_left" @click="onPrev"></q-btn>
    <q-btn flat dense round icon="keyboard_arrow_right" @click="onNext"></q-btn> -->
    <div class="row justify-center">
      <div style="display: flex; max-width: 800px; width: 100%">
        <q-calendar-month
          ref="calendar"
          v-model="selectedDate"
          locale="tr"
          animated
          bordered
          focusable
          hoverable
          no-active-date
          :day-min-height="60"
          :day-height="0"
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-day="onClickDay"
          @click-workweek="onClickWorkweek"
          @click-head-workweek="onClickHeadWorkweek"
          @click-head-day="onClickHeadDay"
        >
          <template #day="{ scope: { timestamp } }">
            <template
              v-for="event in eventsMap[timestamp.date]"
              :key="event.id"
            >
              <div
                :class="badgeClasses(event, 'day')"
                :style="badgeStyles(event, 'day')"
                class="my-event"
              >
                <div class="title q-calendar__ellipsis">
                  {{ event.title + (event.time ? " - " + event.time : "") }}
                  <q-tooltip>{{ event.details }}</q-tooltip>
                </div>
              </div>
            </template>
          </template>
        </q-calendar-month>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  QCalendarMonth,
  next,
  prev,
  moveToToday,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
} from "@quasar/quasar-ui-qcalendar/src/index.js";

 import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
 import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
 import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
import { computed, ref } from "vue";
import NavigationBar from "./NavigationBar.vue";
const calendar = ref();


// The function below is used to set up our demo data
const CURRENT_DAY = new Date();
const ay= today().split('-')[1];
console.log("ay", today().split('-')[1]); //today()'den gelen bugünün tarihinden ayı çekiyorum
function getCurrentDay(day) {
  
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
};

const selectedDate = ref('');
const events = [
  {
    id: 1,
    title: "1st of the Month",
    details: "Everything is funny as long as it is happening to someone else",
    date: getCurrentDay(1),
    bgcolor: "orange",
  },
  {
    id: 2,
    title: "Sisters Birthday",
    details: "Buy a nice present",
    date: getCurrentDay(4),
    bgcolor: "green",
    icon: "fas fa-birthday-cake",
  },
  {
    id: 3,
    title: "Meeting",
    details: "Time to pitch my idea to the company",
    date: getCurrentDay(10),
    time: "10:00",
    duration: 120,
    bgcolor: "red",
    icon: "fas fa-handshake",
  },
  {
    id: 4,
    title: "Lunch",
    details: "Company is paying!",
    date: getCurrentDay(10),
    time: "11:30",
    duration: 90,
    bgcolor: "teal",
    icon: "fas fa-hamburger",
  },
  {
    id: 5,
    title: "Visit mom",
    details: "Always a nice chat with mom",
    date: getCurrentDay(20),
    time: "17:00",
    duration: 90,
    bgcolor: "grey",
    icon: "fas fa-car",
  },
  {
    id: 6,
    title: "Conference",
    details: "Teaching Javascript 101",
    date: getCurrentDay(22),
    time: "08:00",
    duration: 540,
    bgcolor: "blue",
    icon: "fas fa-chalkboard-teacher",
  },
  {
    id: 7,
    title: "Girlfriend",
    details: "Meet GF for dinner at Swanky Restaurant",
    date: getCurrentDay(22),
    time: "19:00",
    duration: 180,
    bgcolor: "teal",
    icon: "fas fa-utensils",
  },
  {
    id: 8,
    title: "Rowing",
    details: "Stay in shape!",
    date: getCurrentDay(27),
    bgcolor: "purple",
    icon: "rowing",
    days: 2,
  },
  {
    id: 9,
    title: "Fishing",
    details: "Time for some weekend R&R",
    date: getCurrentDay(27),
    bgcolor: "purple",
    icon: "fas fa-fish",
    days: 2,
  },
  {
    id: 10,
    title: "Vacation",
    details:
      "Trails and hikes, going camping! Don't forget to bring bear spray!",
    date: getCurrentDay(29),
    bgcolor: "purple",
    icon: "fas fa-plane",
    days: 5,
  },
];

const eventsMap = computed(() => {
  const map = {};
  if (events.length > 0) {
    events.forEach((event) => {
      (map[event.date] = map[event.date] || []).push(event);
      if (event.days !== undefined) {
        let timestamp = parseTimestamp(event.date);
        let days = event.days;
        // add a new event for each day
        // skip 1st one which would have been done above
        do {
          timestamp = addToDate(timestamp, { day: 1 });
          if (!map[timestamp.date]) {
            map[timestamp.date] = [];
          }
          map[timestamp.date].push(event);
          // already accounted for 1st day
        } while (--days > 1);
      }
    });
  }
  console.log(map);
  return map;
});

const badgeClasses = (event, type) => {
  return {
    [`text-white bg-${event.bgcolor}`]: true,
    "rounded-border": true,
  };
};

const badgeStyles = (day, event) => {
  const s = {};
  // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
  // s.top = 0
  // s.bottom = 0
  // s.width = (event.days * this.parsedCellWidth) + '%'
  return s;
};
// onToday onPrev ve onNext düzenlenecek
const onToday = () => {
  //selectedDate.value=today();
  moveToToday();

  
};
const onPrev = () => {
  prev();

  // const date= today();
  // const split = today().split("-")[1];
  // const newDate =date.split("-")[1]= date.split("-")[0]+"-0"+(parseInt(split)+1).toString()+"-"+date.split("-")[2];
  // console.log("newDate", newDate);
  // selectedDate.value=newDate;
};
const onNext = () => {

  next();
};
const onMoved = (data) => {
  console.log("onMoved", data);
};
const onChange = (data) => {
  console.log("onChange", data);
};
const onClickDate = (data) => {
  console.log("onClickDate", data);
};
const onClickDay = (data) => {
  console.log("onClickDay", data);
};
const onClickWorkweek = (data) => {
  console.log("onClickWorkweek", data);
};
const onClickHeadDay = (data) => {
  console.log("onClickHeadDay", data);
};
const onClickHeadWorkweek = (data) => {
  console.log("onClickHeadWorkweek", data);
};
</script>

<style lang="sass" scoped>
.my-event
  position: relative
  font-size: 12px
  width: 100%
  margin: 1px 0 0 0
  justify-content: center
  text-overflow: ellipsis
  overflow: hidden
  cursor: pointer

.title
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100%

.text-white
  color: white

.bg-blue
  background: blue

.bg-green
  background: green

.bg-orange
  background: orange

.bg-red
  background: red

.bg-teal
  background: teal

.bg-grey
  background: grey

.bg-purple
  background: purple

.rounded-border
  border-radius: 2px
</style>
