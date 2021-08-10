<template>
  <div class="card">
    <div class="card-header">
      Listar Categorias
      <button class="btn btn-success btn-sm" type="button">Crear</button>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-hover table-bordered" id="sampleTable">
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
             <v-btn fab small color="light-blue"><v-icon> mdi-pencil</v-icon></v-btn>
              <v-btn fab small color="blue-grey darken-4"><v-icon> mdi-delete</v-icon></v-btn>
           
           </td>
         </tr>
         
        </tbody>
        </table>

      </div>
    </div>
  </div>
</template>


<script>
//import datatable from 'datatables.net-bs4'
import axios from 'axios'
export default {
  mounted() {
    this.getCategory()
  },
  data(){
    return {
      categorias:[]
    }
  },

  methods:{
    tabla(){
      this.$nextTick(()=>{
        ('#sampleTable').Datatable();
      });
    },
    getCategory(){
      axios.get('http://localhost/msp/categorias.php').then(res=>{
        this.categorias = res.data
        this.tabla()
      });
    }
  }
}
</script>
<!--template>

  <v-container id="ListarCategorias" fluid tag="section"  >
    <v-btn to="/categorias/crear" fab dark color="#ff5252"><v-icon> mdi-plus</v-icon></v-btn>

    <base-material-card
      icon="mdi-clipboard-text"
      title="Categorias"
      class="px-5 py-3"
    >
    
     <v-simple-table fixed-header class="elevation-3">
         
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
             <v-btn fab small color="light-blue"><v-icon> mdi-pencil</v-icon></v-btn>
              <v-btn fab small color="blue-grey darken-4"><v-icon> mdi-delete</v-icon></v-btn>
           
           </td>
         </tr>
         
        </tbody>
       </v-simple-table>        
    </base-material-card>
  </v-container>
</template-->



<!--script>

let url ='http://localhost/msp/categorias.php';
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
</script-->