
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/chart', component: () => import('pages/Chart.vue') },
      { path: '/calendar', component: () => import('pages/Calendar.vue') },
      { path: '/cl', component: () => import('pages/CalendarOrnek.vue') },
      { path: '/calendarMonth', component: () => import('pages/CalendarMonth.vue') },
      { path: '/calendarEvent', component: () => import('pages/CalendarEvent.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
