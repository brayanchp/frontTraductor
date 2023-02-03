<template>
  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Temas</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Temas</li>
          <li class="breadcrumb-item active">Listado de Temas</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Temas</h5>
                  </div>
                  <div class="col-4">
                    <router-link to="/registrartema" class="btn btn-primary">Agregar Tema</router-link>
                  </div>
                </div>
              </div>



              <ul class="list-group">
                <li class="list-group-item" v-for="(t, index) in temas" :key="t.id_tema">
                  <div class="row">
                    <div class="col-8">
                      {{ t.nombre }}
                    </div>
                    <div class="col-4">
                      <router-link tag="a" title="Editar Tema" :to="{ name: 'editartema', params: { idtema: t.id_tema } }"
                        class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>


                      </router-link>

                      <button class="btn btn-danger me-2">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>


                </li>



              </ul>





            </div>
            <div class="d-flex flex-row justify-content-end me-3">
              <nav aria-label="Page navigation example mt-3">
                <ul class="pagination pagination-lg">
                  <li class="page-item" @click="((paramInicio < pageActual && paramInicio > 0) ? buscaTemas('prev') : '')">
                    <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item" v-for="op in opciones" :key="op.opc"
                    :class="(op.opc == pageActual ? 'page-item active' : 'page-item')"
                    @click="(op.opc != pageActual ? buscaTemas(op.opc) : '')">
                    <a class="page-link" href="javascript:void(0);" v-text="op.opc"></a>
                  </li>
                  <li class="page-item" @click="((paramFin > pageActual && paramFin > 0) ? buscaTemas('next') : '')">
                    <a class="page-link" href="javascript:void(0);" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);" aria-label="total" >
                        <strong>TOTAL: </strong><span v-text="total"></span>
                    </a>
                  </li>
              
              <li class="page-item" @click="((paramInicio < pageActual && paramInicio > 0)?buscaAseguradora('prev'):'')">
                     <a class="page-link" href="javascript:void(0);" aria-label="Previous">«</a>
              </li>
             
              <li v-for="op in opciones" :key="op.opc" :class="(op.opc==pageActual?'page-item active':'page-item')" @click="(op.opc!=pageActual?buscaAseguradora(op.opc):'')" >
                    <a class="page-link" href="javascript:void(0);" v-text="op.opc"></a>
             </li>
             
               <li class="page-item" @click="((paramFin > pageActual && paramFin >0)?buscaAseguradora('next'):'')">
                      <a class="page-link" href="javascript:void(0);" aria-label="Next">»</a>
                </li>
            </ul>
          </nav> -->
          </div>



        </div>


      </div>
    </section>

  </main><!-- End #main -->
</template>

<script>
import axios from 'axios'
// import { useAuthStore } from '../../stores/user';
import { mapState, mapActions } from "pinia"
import { useAuthStore } from "../../stores/user"
export default {
  name: "ListadoTemas",
  data() {
    return {
      filas: 6,
      pageActual: 1,
      opciones: [],
      temas: [],
      total: '',
      inicio: '',
      fin: '',
      paramInicio: '',
      paramFin: ''
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    buscaTemas(attr) {
      let me = this
      if (attr == 'next') {
        me.pageActual = me.pageActual + 1
      } else {
        if (attr == 'prev') {
          me.pageActual = me.pageActual - 1
        } else {
          me.pageActual = attr
        }
      }
      me.busquedaTema();
    },
    async busquedaTema() {
      let me = this

      // let filtro = document.getElementById('filtro-aseguradora').value
      let filtro = ''
      // let descripcion = document.getElementById('descripcion-aseguradora').value
      let descripcion = ''
      // me.filas = document.getElementById('cantidad-aseguradora').value
      me.filas = 1

      try {
        let respuesta = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/temas/buscar',
          data: {
            'filtro': filtro,
            'descripcion': descripcion,
            'filas': me.filas,
            'page': me.pageActual
          }

        });

        console.log(respuesta.status)
        me.temas = respuesta.data.temas
        me.total = respuesta.data.cantidad
        me.pageActual = respuesta.data.page
        me.opciones = respuesta.data.paginador
        me.inicio = respuesta.data.inicio
        me.fin = respuesta.data.fin
        me.paramInicio = respuesta.data.paramInicio
        me.paramFin = respuesta.data.paramFin
      } catch (error) {
        if (error.response.status == 401 || error.response.status == 419) {
          this.logout()
          location.href = '/'

        }
      }



    },
    async cargarDatos() {
      let me = this
      me.busquedaTema();
    },
  },
  async created() {
    let me = this
    window.setTimeout(function () {
      me.cargarDatos()

    }, 1000)
  },
  // async cre() {
  //   console.log('llegamos')
  //     //  this.validarSesion()
  //     //  document.getElementById('filtro-aseguradora').value='nombre'
  //     //  document.getElementById('descripcion-aseguradora').value=''
  //     //  document.getElementById('cantidad-aseguradora').value='10'
  //      this.pageActual=1
  //     // let e = document.getElementById('sec-lista-aseguradora')
  //     // e.classList.remove('ocultar')

  //     let me = this
  //     window.setTimeout( function () {
  //       me.cargarDatos()

  //     }, 1000)

  //  },
}
</script>

<style>

</style>