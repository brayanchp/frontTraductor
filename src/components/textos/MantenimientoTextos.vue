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
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputName5">
          </div>
          <div class="col-md-12">
            <label for="inputName5" class="form-label">Tema</label>
            <input type="text" class="form-control" id="inputName5">
          </div>
          <div class="col-md-12">
            <label for="" class="form-label">Texto</label>
            <editor api-key="9yhy9gm06h7vyik6ogqd4birrzsxj2shg3w82dk0gey4zb2l" :init="{
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
import Editor from '@tinymce/tinymce-vue';
export default {
  name: 'MantenimientoTextos',
  components: {
    'editor': Editor
  }
}
</script>

<style>

</style>