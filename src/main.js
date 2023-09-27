import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import Tareas from './components/Tareas'


Vue.config.productionTip = false

new Vue({
  render: h => h(Tareas),
}).$mount('#app')







