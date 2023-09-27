<template>
 
  <div>
    <h1 class="titulo">Generador de Tareas</h1>
   
    <!-- Input para agregar tarea y botón para agregar -->
    <div class="add-task">
      <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Escribe una tarea" />
      <button @click="addTask" class="add-button">Agregar</button>
    </div>

    <!-- Lista de tareas -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <i class="fa-solid fa-circle fa-2xs"></i>
        <span v-if="index !== editingTaskIndex">{{ task }}</span>
        <input v-else v-model="editedTask" @keyup.enter="saveTask(index)" @blur="cancelEditTask" />
        <button @click="editTask(index)" class="editar-button">Editar</button>
        <button @click="deleteTask(index)" class="delete-button">
          <img src="../assets/borrar.jpeg" alt="Eliminar" />
        </button>
      </li>
    </ul>
  </div>

 
</template>
  
<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      editingTaskIndex: -1,
      editedTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask);
        this.newTask = "";
        editingTaskIndex: -1;
      editedTask: "";
      }
    },

    deleteTask(index) {
      {
        this.tasks.splice(index, 1);
      }
    },

    editTask(index) {
      this.editingTaskIndex = index;
      this.editedTask = this.tasks[index];
    },

    saveTask(index) {
      this.tasks[index] = this.editedTask;
      this.editingTaskIndex = -1;
      this.editedTask = "";
    },

    cancelEditTask() {
      this.editingTaskIndex = -1;
      this.editedTask = "";
    },
  },
};
</script>

<style scoped>
.titulo {
  text-align: center;
}


.add-task {
  width: 500px;
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  gap: 20px;
}

input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
}

.add-button {
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
}



li {
  display: flex;
  align-items: center;
  /* Centramos verticalmente */
  margin-bottom: 5px;
  padding: 5px; 
  margin-left: 250px;
  margin-right: 470px;
  gap: 10px;
  font-size: 22px;   
}



img {
  width: 25px;
  height: 25px;
}


.delete-button {
  background-color: transparent;
  /* Fondo transparente */
  color: #dc3545;
  /* Cambiamos el color del contenido a rojo */
  border: none;
  /* Sin borde */
  cursor: pointer;
  padding: 0;
  /* Eliminamos el relleno */
  font-size: 20px;
  /* Tamaño del icono */
  margin-left: 890px;
  /* Añadimos un margen izquierdo para separar el icono de la lista */
  position: absolute;
}

.editar-button {
  /* background-color: transparent; */
  /* Fondo transparente */
  /* color: #dc3545; */
  /* Cambiamos el color del contenido a rojo */
  /* border: none; */
  /* Sin borde */
  cursor: pointer;
  padding: 0;
  /* Eliminamos el relleno */
  font-size: 15px;
  /* Tamaño del icono */
  margin-left: 830px;
  /* Añadimos un margen izquierdo para separar el icono de la lista */
  position: absolute;
}

</style>
  