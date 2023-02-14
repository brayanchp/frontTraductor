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
                    <!-- <form > -->
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-2 col-form-label">
                        Nombre:
                      </label>
                      <div class="col-sm-10">
                        <input type="text" v-model="buscar" class="form-control" placeholder="Tema a buscar"
                          @keyup.enter="busquedaTema()">
                      </div>
                    </div>
                    <!-- </form> -->
                  </div>
                  <div class="col-4">
                    <button class="btn btn-warning ms-3" @click="busquedaTema()">
                      Buscar
                    </button>
                    <router-link to="/registrartema" class="btn btn-primary ms-3">Agregar Tema</router-link>

                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title">Temas</h5>
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
                      <router-link tag="a" title="Editar Tema"
                        :to="{ name: 'editartema', params: { idtema: t.id_tema } }" class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>


                      </router-link>

                      <button class="btn btn-danger me-2" v-if="t.is_active == 1" @click="desactivarTema(t)">
                        <i class="bi bi-trash"></i>
                      </button>
                      <button class="btn btn-info me-2" v-if="t.is_active == 0" @click="activarTema(t)">
                        <i class="bi bi-arrow-up-circle"></i>
                      </button>
                    </div>
                  </div>


                </li>



              </ul>





            </div>
            <div class="d-flex flex-row justify-content-end me-3">
              <nav aria-label="Page navigation example mt-3">
                <ul class="pagination pagination-lg">
                  <li class="page-item"
                    @click="((paramInicio < pageActual && paramInicio > 0) ? buscaTemas('prev') : '')">
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
      paramFin: '',
      buscar: ''
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

      let filtro = ''

      let descripcion = me.buscar

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
    async desactivarTema(t) {
      let me = this
      swal.fire({
        title: 'Confirmar Operación',
        html: '¿Seguro que desea desactivar el tema: <strong>' + t.nombre + '</strong> ?' +
          '<strong> ',
        // type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Sí, Desactivar',
        cancelButtonText: 'No, Cancelar',
        allowOutsideClick: false,
        // closeOnConfirm: false,
        // closeOnCancel: false
      }).then(async function (result) {
        console.log('esoyacafdsfd');
        if (result.isConfirmed) {
          console.log('esoy acaa');
          let response = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/tema/destroy',
            data: {
              'id': t.id_tema,
              'param': 0,
            }
          })

          if (response.data.estado) {
            setTimeout(function () {
              swal.fire({
                title: 'Inactivado!',
                text: response.data.mensaje,
                icon: 'success'
              }).then(async function () {
                await me.busquedaTema()
              })
            }, 500)
          } else {
            swal.fire('¡Cancelado!', response.data.mensaje, 'error')
          }
        } else {
          swal.fire('¡Cancelado!', 'Operación Cancelada', 'error')
        }
      })
    },

    async activarTema(t) {
      let me = this

      swal.fire({
        title: 'Confirmar Operación',
        html: '¿Seguro que desea activar el Tema: <strong>' + t.nombre + '</strong> ?' +
          '<strong> ',
        // type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Sí, Activar',
        cancelButtonText: 'No, Cancelar',
        allowOutsideClick: false,
        // closeOnConfirm: false,
        // closeOnCancel: false
      }).then(async function (result) {

        if (result.isConfirmed) {

          let response = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/tema/destroy',
            data: {
              'id': t.id_tema,
              'param': 1,
            }
          })

          if (response.data.estado) {
            setTimeout(function () {
              swal.fire({
                title: '¡Activado!',
                text: response.data.mensaje,
                icon: 'success'
              }).then(async function () {
                await me.busquedaTema()
              })
            }, 500)
          } else {
            swal.fire('¡Cancelado!', response.data.mensaje, 'error')
          }
        } else {
          swal.fire('¡Cancelado!', 'Operación Cancelada', 'error')
        }
      })
    }
  },
  async created() {
    let me = this
    window.setTimeout(function () {
      me.cargarDatos()

    }, 1000)
  },

}
</script>

<style>

</style>