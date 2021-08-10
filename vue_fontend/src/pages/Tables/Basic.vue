<template>
  <v-container id="ListarCategorias" fluid tag="section" >
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6" >
        <font color= "#424661">
          Vista categorias
        </font>
        </h1>

        
    <v-btn  depressed  color="primary" > Nuevo </v-btn>
    <v-spacer></v-spacer>
         

      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
           
    <!--v-btn to="/categorias/crear" fab dark color="#ff5252"><v-icon> mdi-plus</v-icon></v-btn--> 
            
            <v-card-title class="pa-6 pb-3">
              <p>
                <font color= "#192b1b">
          Listado de categorias
        </font>
              </p>
              <v-spacer></v-spacer>
              <!--v-text-field 
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                clearable
                single-line
                hide-details
              ></v-text-field-->
<v-btn  depressed  color="#bfbbbb" @click="downloadPDF" ><v-icon> mdi-file-pdf</v-icon>  </v-btn> 
<v-btn  depressed  color="#4ab058" ><v-icon> mdi-file-excel</v-icon>  </v-btn> 
            </v-card-title>


            <v-simple-table  fixed-header class="elevation-3">       
       <thead>
         <tr>
        <th>Código</th>
        <th>Categoria</th>
        <th>Descripción</th>
        <th>Usuario creación</th>
        <th>Fecha creación</th>
        <th>Usuario modifíca</th>
        <th>Fecha modificación</th>
        <th>Estado</th>
        <th>Acciones</th>
         </tr>
       </thead>
        <tbody>
         <tr v-for="categoria in categorias" :key="categoria.id">
           <td>{{categoria.id}}</td>
           <td>{{categoria.nombre}}</td>
           <td>{{categoria.descripcion}}</td>
           <td>{{categoria.usuarioCreacion}}</td>
           <td>{{categoria.fechaCreacion}}</td>
           <td>{{categoria.usuariomodifica}}</td>
           <td>{{categoria.fechaModifica}}</td>
           <td>{{categoria.estado}}</td>
           <td>
             <v-btn fab small color="primary"><v-icon> mdi-pencil</v-icon></v-btn>
              <v-btn fab small color="red"><v-icon> mdi-delete</v-icon></v-btn>
           
           </td>
         </tr>
         
        </tbody>

            </v-simple-table >
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>



<script>
let url ='http://localhost/msp/categorias.php';
require('datatables.net-buttons/js/dataTables.buttons');
require('datatables.net-buttons/js/buttons.html5');
/*import print from 'datatables.net-buttons/js/buttons.print';
import jszip from 'jszip/dist/jszip';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';*/

import axios from 'axios';
export default {
  name:'ListarCategorias',
  mounted(){
this.obtenerCategorias();
  },
  data(){
    return{
      categorias:null
    }
  },
  methods: {
    obtenerCategorias(){
      
      axios.get(url)
      .then(response => {
        this.categorias = response.data;
      })
      .catch((error)=>{
         console.log(error);

      })
    }
  }
  
}
</script>

