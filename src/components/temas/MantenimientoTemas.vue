<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Temas</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Temas</li>
          <li class="breadcrumb-item active">{{ accion }} de Temas</li>
        </ol>
      </nav>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ accion }} de Temas</h5>

        <!-- Multi Columns Form -->
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre">
          </div>

          <div class="col-12">
            <label for="inputAddress5" class="form-label">Descripción</label>
            <textarea class="form-control" placeholder="Descripción.." id="descripcion"
              style="height: 100px;resize: none;"></textarea>
          </div>




          <div class="text-center">
            <button type="button" class="btn btn-primary" @click="guardar()">Guardar</button>
            <button type="reset" class="btn btn-secondary" @click="this.$router.replace(url);
            ">Cancelar</button>
          </div>
        </form><!-- End Multi Columns Form -->

      </div>
    </div>
  </main>
</template>
 
<script>
import axios from 'axios'

import { mapState, mapActions } from "pinia"
import { useAuthStore } from "../../stores/user"

export default {
  name: 'MantenimientoTemas',
  data() {
    return {
      url: '/temas',
      id: 0,
      accion: 'Registro'
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async cargarDatos() {
      let me=this
      this.id = this.$route.params.idtema == undefined ? 0 : this.$route.params.idtema;
      if (this.id != 0) {
        console.log('ingresa a editar')
        try {
          let respuesta = await axios.get("http://127.0.0.1:8000/api/tema/" + this.id);
          console.log(respuesta)
          if ((respuesta.data.estado = true)) {
            this.accion = "Edición";
            document.getElementById("nombre").value =
              respuesta.data.tema.nombre;
            document.getElementById("descripcion").value =
              respuesta.data.tema.descripcion;
          } else {
            this.$router.replace(me.url);
          }
        } catch (error) {
         
          if (error.response.status == 401 || error.response.status == 419) {
            this.logout()
            location.href = '/'

          }
        }

      } else {
        this.accion = "Registro";
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
      }
    },
    async guardar() {
      let nombre=document.getElementById("nombre").value
      let descripcion=document.getElementById("descripcion").value
      let mensaje=""


      if(nombre=="" || nombre.trim()==''){
        mensaje="Ingrese un nombre<br>";
      }

      if(descripcion=='' || descripcion.trim()==''){
        mensaje+="Ingrese una descripción"
      }
      
      if(mensaje!=''){
        Swal.fire("Error!",mensaje,'error')
        return false
      }

      try {
        let respuesta= await axios({
          method:'post',
          url:'http://127.0.0.1:8000/api/tema/store',
          data:{
            id:this.id,
            nombre:nombre.trim().toUpperCase(),
            descripcion:descripcion.trim().toUpperCase()
          }
        })
        
        if(respuesta.data.estado){
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Exito",
            html: respuesta.data.mensaje,
            showConfirmButton: false,
            timer: 2500,
          });
           this.$router.replace(this.url)
          // window.setTimeout(function() {
             
          //   }, 2000);
        }else{
          Swal.fire("Error!",respuesta.data.mensaje,'error')
        }
      } catch (error) {
        if (error.response.status == 401 || error.response.status == 419) {
            this.logout()
            location.href = '/'

          }
      }
    }
  },
  mounted: async function () {
    let me = this;
    me.cargarDatos();
  },
}
</script>

<style>

</style>