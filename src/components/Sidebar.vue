<template>
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>                    
                </router-link>

            </li><!-- End Dashboard Nav -->



            <li class="nav-heading">Secciones</li>

            <li class="nav-item">
                <router-link to="/temas" class="nav-link collapsed">
                        <i class="bi bi-person"></i>
                        <span>Temas</span>                    
                </router-link>
                

                
            </li><!-- End Profile Page Nav -->

            <li class="nav-item">
                <router-link to="/textos" class="nav-link collapsed">
                    <i class="bi bi-question-circle"></i>
                    <span>Textos</span>
                </router-link>
            </li><!-- End F.A.Q Page Nav -->

            <li class="nav-item">
                <router-link to="/evaluaciones" class="nav-link collapsed">
                    <i class="bi bi-envelope"></i>
                    <span>Evaluaciones</span>
                </router-link>
            </li><!-- End Contact Page Nav -->









        </ul>

    </aside><!-- End Sidebar-->
</template>