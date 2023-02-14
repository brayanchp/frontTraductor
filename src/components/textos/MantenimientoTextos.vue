<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Textos</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Textos</li>
          <li class="breadcrumb-item active">Registro de Textos</li>
        </ol>
      </nav>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Registro de Textos</h5>

        <!-- Multi Columns Form -->
        <form class="row g-3" autocomplete="off">
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Título</label>
            <input type="text" class="form-control" id="nombre" name="nombre" autocomplete="off">
          </div>
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Tema</label>
            <vue3-simple-typeahead ref="inputtema" id="typeahead_id_temas" placeholder="Tema a buscar..."
              class="form-control" :items="temas" :minInputLength="2" :itemProjection="(item) => {return item.nombre;}"
              @selectItem="seleccionartema($event)" @onInput="buscarTemas($event)" 
              @keyup.delete="deleteTema()"
              >
            </vue3-simple-typeahead>
            <input type="hidden" name="id_tema" id="id_tema" :value="select!=null?select.id_tema:''">
          </div>
          <div class="col-md-12">
            <label for="" class="form-label">Texto</label>
            <editor v-model="texto" api-key="9yhy9gm06h7vyik6ogqd4birrzsxj2shg3w82dk0gey4zb2l" :init="{
              height: 500,
              menubar: false,
              plugins: [
            
                'advlist',
                'lists',
                'image',
                'autolink',
                'code',
                'imagetools',
                'link',
                'media',
                'quickbars'
                // autolink lists link image charmap print preview anchor'
                // 'searchreplace visualblocks code fullscreen',
                // 'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                                               alignleft aligncenter alignright alignjustify | \
                                               bullist numlist outdent indent | removeformat | help|  link image | code typography| \
                                                quickimage'
            }" />
          </div>




          <div class="text-center">
            <button type="button" class="btn btn-primary" @click="guardar">Guardar</button>
            <button type="reset" class="btn btn-secondary" @click="this.$router.replace(url);">Cancelar</button>
          </div>
        </form><!-- End Multi Columns Form -->

      </div>
    </div>
  </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import axios from 'axios';
import { mapState, mapActions } from "pinia"
import { useAuthStore } from "../../stores/user"

export default {
  name: 'MantenimientoTextos',
  data() {
    return {
      texto: '',
      temas: [],
      select:null,
      id:0,
      url:'/textos'
    }
  },
  components: {
    'editor': Editor
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async cargarDatos() {
      let me=this
      this.id = this.$route.params.idtexto == undefined ? 0 : this.$route.params.idtexto;
      if (this.id != 0) {

        try {
          let respuesta = await axios.get("http://127.0.0.1:8000/api/textos/" + this.id);

          if ((respuesta.data.estado = true)) {
            this.accion = "Edición";
            document.getElementById("nombre").value =
              respuesta.data.texto.titulo;
              me.$refs.inputtema.input=respuesta.data.texto.nombre
              me.texto=respuesta.data.texto.contenido
              me.select={id_tema:respuesta.data.texto.id_tema}
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
      let nombre = document.getElementById('nombre').value.trim()
      let id_tema=document.getElementById('id_tema').value

      if(nombre==''){
        Swal.fire("Error!","Ingresa el título del texto","error")
      }
      
      if(id_tema==''){
        Swal.fire('Error!',"Seleccione un tema","error")
      }

      if(this.texto==''){
        Swal.fire('Error!',"Ingrese contenido del texto","error")
      }


      try {
        let respuesta= await axios({
          method:'post',
          url:'http://127.0.0.1:8000/api/textos/store',
          data:{
            id:this.id,
            id_tema:id_tema,
            contenido:this.texto,
            nombre:nombre
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

    },
    async buscarTemas() {

      let me = this
      let query = me.$refs.inputtema.getInput().value
      try {
        let response = await axios({
          method:'POST',
          url:'http://127.0.0.1:8000/api/buscartemas',
          data:{
            querytemas:query
          }
        })    
         
        me.temas=response.data.temas
        
      } catch (error) {
        if (error.response.status == 401 || error.response.status == 419) {
          this.logout()
          location.href = '/'

        }
      }
    },
    seleccionartema(event){
      let me=this
      console.log(event)
      me.select=event
    },
    deleteTema(){
      let me=this
      me.select=null
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