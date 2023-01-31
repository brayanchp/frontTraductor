<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Evaluación</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Evaluación</li>
          <li class="breadcrumb-item active">Registro de Evaluación</li>
        </ol>
      </nav>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Evaluación del Texto: "Nombre del Texto"</h5>

        <!-- Default Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
              role="tab" aria-controls="home" aria-selected="true">Configuración</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
              role="tab" aria-controls="profile" aria-selected="false">Preguntas</button>
          </li>

        </ul>
        <div class="tab-content pt-2" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <form class="row g-3">
              <div class="col-md-12">
                <label for="inputName5" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputName5">
              </div>

              <div class="col-4">
                <label for="inputAddress5" class="form-label">Sistema de Calificación</label>
                <select name="" class="form-select" id="">
                  <option value="">Decimal</option>
                  <option value="">Vigesimal</option>
                  <option value="">Centesimal</option>
                </select>
              </div>
              <div class="col-4">
                <label for="inputAddress5" class="form-label">Hora de inicio</label>
                <input type="time" name="" class="form-control" id="">
              </div>
              <div class="col-4">
                <label for="inputAddress5" class="form-label">Hora de fin</label>
                <input type="time" name="" class="form-control" id="">

              </div>
              <div class="col-4">
                <label for="inputAddress5" class="form-label">Tipo de Examen</label>

                <select name="" class="form-select" v-model="tipoExamen" id="">
                  <option value="">--Seleccione--</option>
                  <option value="Pr">Privado</option>
                  <option value="Pu">Público</option>
                </select>
              </div>
              <div class="col-12" v-if="tipoExamen == 'Pr'">
                <label for="inputAddress5" class="form-label">Ingrese correos que tendrán acceso a este examen</label>
                <input type="text" name="" class="form-control" id="">

              </div>
              <div class="col-12" v-if="tipoExamen == 'Pr'">
                <ul class="list-group">
                  <li class="list-group-item">a@unprg.edu.pe</li>
                  <li class="list-group-item">b@unprg.edu.pe</li>
                  <li class="list-group-item">juan@gmail.com</li>
                  <li class="list-group-item">c@gmail.com</li>
                  <li class="list-group-item">cr@unprg.edu.pe</li>
                </ul>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-primary">Siguiente</button>
                <button type="reset" class="btn btn-secondary">Cancelar</button>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <form action="" class="row g-3">
              <div class="col-md-6 col-sm-12 ">
                <label for="" class="form-label">Texto</label>
                <editor :disabled=true api-key="9yhy9gm06h7vyik6ogqd4birrzsxj2shg3w82dk0gey4zb2l"
                  initial-value='Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.'
                  :init="{
                    height: 500,
                    menubar: false,
                    plugins: [
                  
                      'advlist',
                      'lists',
                      'image',
                      'autolink',
                      'code'
                      // autolink lists link image charmap print preview anchor'
                      // 'searchreplace visualblocks code fullscreen',
                      // 'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | \
                                                                                             alignleft aligncenter alignright alignjustify | \
                                                                                             bullist numlist outdent indent | removeformat | help|  link image | code typography'
                  }" />
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="row">
                  <div class="col-sm-6">

                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#basicModal">Agregar Pregunta</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <label for="" class="form-label">1.- Título Pregunta1 (Tipo de Pregunta)</label>
                  </div>
                  <div class="col-sm-12">
                    Respuesta: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellat dolorem odio
                    quod hic dolor quae laboriosam repellendus accusamus aliquid.
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <label for="" class="form-label">2.- Título Pregunta1 (Tipo de Pregunta)</label>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck" checked>
                      <label class="form-check-label" for="gridCheck">
                        Opción 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck">
                      <label class="form-check-label" for="gridCheck">
                        Opción 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck">
                      <label class="form-check-label" for="gridCheck">
                        Opción 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck">
                      <label class="form-check-label" for="gridCheck">
                        Opción 1
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div><!-- End Default Tabs -->

      </div>
    </div>
    <div class="modal fade" id="basicModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar Pregunta</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="row g3">
              <div class="col-md-12">
                <label for="inputName5" class="form-label">Título</label>
                <input type="text" class="form-control" id="inputName5">
              </div>
              <div class="col-md-12">
                <label for="inputName5" class="form-label">Tipo de Pregunta</label>
                <select name="" class="form-select" id="">
                  <option value="">--Seleccione--</option>
                  <option value="">Abierta</option>
                  <option value="">Cerrada</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  name: "MantenimientoEvaluaciones",
  data() {
    return {
      tipoExamen: ''
    }
  },
  components: {
    'editor': Editor
  },
  methods: {

  },
}
</script>

<style>

</style>