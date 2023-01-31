<template>
  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Textos</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Textos</li>
          <li class="breadcrumb-item active">Listado de Textos</li>
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
                    <h5 class="card-title">Textos</h5>
                  </div>
                  <div class="col-4">
                    <router-link to="/registrartexto" class="btn btn-primary">Agregar Texto</router-link>
                  </div>
                </div>                
              </div>

              <ul class="list-group">
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-8">
                      Textos
                    </div>
                    <div class="col-4">
                      <button class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button class="btn btn-info me-2">
                        <i class="bi bi-info-circle"></i>
                      </button>
                      <button class="btn btn-danger me-2">
                        <i class="bi bi-trash"></i>
                      </button>
                      <router-link to="registrarevaluacion" class="btn btn-warning" title="Crear Evaluación">
                        <i class="bi bi-bookmark-check" ></i>
                      </router-link>
                    </div>
                  </div>


                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-8">
                      Textos
                    </div>
                    <div class="col-4">
                      <button class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button class="btn btn-info me-2">
                        <i class="bi bi-info-circle"></i>
                      </button>
                      <button class="btn btn-danger me-2">
                        <i class="bi bi-trash"></i>
                      </button>
                      <router-link to="registrarevaluacion" class="btn btn-warning" title="Crear Evaluación">
                        <i class="bi bi-bookmark-check" ></i>
                      </router-link>
                    </div>
                  </div>


                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-8">
                      Textos
                    </div>
                    <div class="col-4">
                      <button class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button class="btn btn-info me-2">
                        <i class="bi bi-info-circle"></i>
                      </button>
                      <button class="btn btn-danger me-2">
                        <i class="bi bi-trash"></i>
                      </button>
                      <router-link to="registrarevaluacion" class="btn btn-warning" title="Crear Evaluación">
                        <i class="bi bi-bookmark-check" ></i>
                      </router-link>
                    </div>
                  </div>


                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-8">
                      Textos
                    </div>
                    <div class="col-4">
                      <button class="btn btn-success me-2">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button class="btn btn-info me-2">
                        <i class="bi bi-info-circle"></i>
                      </button>
                      <button class="btn btn-danger me-2">
                        <i class="bi bi-trash"></i>
                      </button>
                      <router-link to="registrarevaluacion" class="btn btn-warning" title="Crear Evaluación">
                        <i class="bi bi-bookmark-check" ></i>
                      </router-link>
                    </div>
                  </div>


                </li>
              </ul>





            </div>
            <div class="d-flex flex-row justify-content-end me-3">
                <nav aria-label="Page navigation example mt-3">
                  <ul class="pagination pagination-lg">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
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
export default {

}
</script>

<style>

</style>