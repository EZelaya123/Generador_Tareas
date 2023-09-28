(function(){"use strict";var t={1099:function(t,e,n){n(682);var i=n(144),a=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"titulo"},[t._v("Generador de Tareas")]),e("div",{staticClass:"add-task"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],attrs:{type:"text",placeholder:"Escribe una tarea"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),e("button",{staticClass:"add-button",on:{click:t.addTask}},[t._v("Agregar")])]),e("ul",t._l(t.tasks,(function(i,a){return e("li",{key:a},[e("i",{staticClass:"fa-solid fa-circle fa-2xs"}),a!==t.editingTaskIndex?e("span",[t._v(t._s(i))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTask,expression:"editedTask"}],domProps:{value:t.editedTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTask(a)},blur:t.cancelEditTask,input:function(e){e.target.composing||(t.editedTask=e.target.value)}}}),e("button",{staticClass:"editar-button",on:{click:function(e){return t.editTask(a)}}},[t._v("Editar")]),e("button",{staticClass:"delete-button",on:{click:function(e){return t.deleteTask(a)}}},[e("img",{attrs:{src:n(8589),alt:"Eliminar"}})])])})),0)])},s=[],r=(n(7658),{data(){return{newTask:"",tasks:[],editingTaskIndex:-1,editedTask:""}},methods:{addTask(){""!==this.newTask.trim()&&(this.tasks.push(this.newTask),this.newTask="")},deleteTask(t){this.tasks.splice(t,1)},editTask(t){this.editingTaskIndex=t,this.editedTask=this.tasks[t]},saveTask(t){this.tasks[t]=this.editedTask,this.editingTaskIndex=-1,this.editedTask=""},cancelEditTask(){this.editingTaskIndex=-1,this.editedTask=""}}}),o=r,u=n(1001),d=(0,u.Z)(o,a,s,!1,null,"f932a1ea",null),c=d.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(c)}).$mount("#app")},8589:function(t,e,n){t.exports=n.p+"img/borrar.56bf903f.jpeg"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],s=t[c][2];for(var o=!0,u=0;u<i.length;u++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(o=!1,s<r&&(r=s));if(o){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,a,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/GENERADOR_TAREAS/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,r=i[0],o=i[1],u=i[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(u)var c=u(n)}for(e&&e(i);d<r.length;d++)s=r[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},i=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1099)}));i=n.O(i)})();
//# sourceMappingURL=app.df3af1e7.js.map