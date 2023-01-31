<script setup>
import axios from "axios";



import {
  useTokenClient
} from "vue3-google-signin";

axios.defaults.withCredentials=true
const establecssr =async() =>{
  await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
}
const handleOnSuccess = async (response2) => {

  //  axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(async response => {
    // console.log(response)
  await establecssr()
   let confe= document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    console.log(confe)
    // let consulta = await axios({
    //   method: 'post',
    //   url: 'http://127.0.0.1:8000/login',
    //   data: {
    //     token: response2.access_token
        

    //   }
      let consulta =await axios.post('http://127.0.0.1:8000/login',{token:response2.access_token})

    // })

    if (consulta.data.estado) {
      // this.$swal('Hello Vue world!!!');

      Swal.fire(
        'Éxito!',
        'Te logueaste!',
        'success'
      )



    } else {
      // this.$swal('Error!!!');
      Swal.fire(
        'Error!',
        'Ocurrió un error!' + consulta.data.mensaje,
        'error'
      )
    }

  // });



};

const handleOnError = (errorResponse) => {
  console.log("Error: ", errorResponse);
  Swal.fire(
    'Error!',
    'Ocurrió un error!',
    'error'
  )
};

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});

const prueba =async ()=>{
  // e.preventDefault();
  
  let res= await axios.get('http://127.0.0.1:8000/api/user')
  console.log(res)
}
</script>

<template>
  <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">

                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">App Traductor</h5>

                  </div>
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Ingresa con tu cuenta de Google</h5>

                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-12">
                      <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-center">

                      <button class="btn btn-success" type="button" :disabled="!isReady" @click="() => login()">Login
                        with Google</button>
                        <button type="button" @click="prueba()">dsfds</button>
                    </div>
                    <div class="col-12">

                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">

                Desarrollado por <a href="#">BChp</a>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
</template>
