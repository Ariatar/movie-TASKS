<template>
   <v-content>
      <v-container class="fill-height" fluid>
         <v-layout align-center justify-center>
            <v-flex sm8 md8 xs12>
               <v-card class="elevation-12">
                  <v-window v-model="step">
                     <v-window-item :value="1">
                        <v-layout>
                           <v-flex md8
                              ><v-card-text class="mt-12">
                                 <h1
                                    class="text-center display-2 teal--text text--accent-3"
                                 >
                                    Cinema For Everyone
                                 </h1>
                                 <div class="text-center mt-4">
                                    <v-btn
                                       class="mx-2"
                                       fab
                                       color="black"
                                       outlined
                                    >
                                       <v-icon class="green--text"
                                          >mdi-cellphone-android</v-icon
                                       ></v-btn
                                    >

                                    <v-btn
                                       class="mx-2"
                                       fab
                                       color="black"
                                       outlined
                                    >
                                       <v-icon class="green--text"
                                          >mdi-cash-multiple</v-icon
                                       ></v-btn
                                    >
                                 </div>
                                 <h4 class="text-center mt-4 red--text">
                                    Enter Your name and name of Cinema
                                 </h4>
                                 <v-form>
                                    <v-select
                                       :items="cinemas"
                                       v-model="cinema"
                                       multiple
                                    ></v-select>
                                    <v-text-field
                                       label="titleOfFilm"
                                       name="title"
                                       type="title"
                                       color="teat accent-3"
                                       prepend-icon="mdi-youtube"
                                    ></v-text-field>
                                 </v-form>
                              </v-card-text>
                              <div class="text-center">
                                 <v-btn
                                    class="mb-2"
                                    color="blue accent-3"
                                    rounded
                                    >Buy ticket</v-btn
                                 >
                              </div>
                           </v-flex>
                           <v-flex class="blue art2" md4>
                              <v-card-text class="white--text mt-12">
                                 <div
                                    style="position: relative; top: 30px"
                                    class="mt-12"
                                 >
                                    <h1 class="text-center">
                                       Virtual World
                                    </h1>
                                    <h5 class="text-center">
                                       Enter your personal design and go try
                                       with us
                                    </h5>
                                 </div>
                              </v-card-text>
                              <v-layout justify-center class="text--center ">
                                 <v-btn
                                    rounded
                                    outlined
                                    dark
                                    class="mt-8 btnhover"
                                    @click="step++"
                                 >
                                    Next Step</v-btn
                                 >
                              </v-layout>
                           </v-flex>
                        </v-layout>
                     </v-window-item>
                     <v-window-item :value="2">
                        <v-layout class="blue" row>
                           <v-flex class="bimg" xs12 md4>
                              <v-card-text>
                                 <h1 class="text-center white--text">
                                    Welcome come back to us
                                 </h1>
                                 <h4 class="text-center mt-4 white--text">
                                    Please write your personal info
                                 </h4></v-card-text
                              >

                              <div class="text-center mt-5">
                                 <v-btn @click="step--" rounded outlined dark
                                    >Buy Ticket
                                 </v-btn>
                              </div></v-flex
                           >
                           <v-flex class="white" md8
                              ><v-card-text class="mt-12">
                                 <h1
                                    class="text-center display-2 teal--text text--accent-3"
                                 >
                                    Create new Account
                                 </h1>
                                 <div class="text-center mt-4">
                                    <v-btn
                                       class="mx-2"
                                       fab
                                       color="black"
                                       outlined
                                    >
                                       <v-icon class="green--text"
                                          >mdi-cellphone-android</v-icon
                                       ></v-btn
                                    >

                                    <v-btn
                                       class="mx-2"
                                       fab
                                       color="black"
                                       outlined
                                    >
                                       <v-icon class="green--text"
                                          >mdi-cash-multiple</v-icon
                                       ></v-btn
                                    >
                                 </div>
                                 <h4 class="text-center mt-4">
                                    Personal
                                 </h4>
                                 <v-form
                                    ><v-text-field
                                       label="name"
                                       name="name"
                                       type="text"
                                       color="teat accent-3"
                                       prepend-icon="mdi-name"
                                    ></v-text-field>
                                    <v-text-field
                                       label="surname"
                                       name="surname"
                                       type="text"
                                       color="teat accent-3"
                                       prepend-icon="mdi-surname"
                                    ></v-text-field>
                                    <v-text-field
                                       label="dateOfbirth"
                                       name="dateOfbirth"
                                       type="number"
                                       color="teat accent-3"
                                       prepend-icon="mdi-bird"
                                    ></v-text-field
                                 ></v-form>
                              </v-card-text>
                              <div class="text-center">
                                 <v-btn
                                    class="mb-2"
                                    color="blue accent-3"
                                    rounded
                                    >Register</v-btn
                                 >
                              </div>
                           </v-flex>
                        </v-layout>
                     </v-window-item>
                     <v-window-item :value="3"> </v-window-item>
                  </v-window>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-content>
</template>

<script>
export default {
   data() {
      return {
         step: 1,
         cinema: [],
         cinemas: ["Мост-Кино", "Multiplex", "IMAX Dafi", "Материк-Кино"]
      };
   },
   
};
</script>

<style scoped>
.bimg {
   background: url("../assets/art.png") no-repeat center;
   background-size: cover;
}
.art2 {
   background: url("../assets/art2.jpg") no-repeat;
   background-size: cover;
}
h1:hover {
   opacity: 0.7;
   color: red;
}
.btnhover:hover {
   background-color: red;
   opacity: 0.7;
   width: 150px;
}
</style>
