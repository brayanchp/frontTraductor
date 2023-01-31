<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Temas</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Inicio</a></li>
          <li class="breadcrumb-item">Temas</li>
          <li class="breadcrumb-item active">Registro de Temas</li>
        </ol>
      </nav>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Registro de Temas</h5>

        <!-- Multi Columns Form -->
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputName5">
          </div>

          <div class="col-12">
            <label for="inputAddress5" class="form-label">Descripción</label>
            <textarea class="form-control" placeholder="Descripción.." id="floatingTextarea" style="height: 100px;resize: none;"></textarea>
          </div>
          



          <div class="text-center">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="reset" class="btn btn-secondary">Cancelar</button>
          </div>
        </form><!-- End Multi Columns Form -->

      </div>
    </div>
  </main>
</template>
 
<script>
export default {

}
</script>

<style>

</style>