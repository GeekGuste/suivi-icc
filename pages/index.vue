<template>
  <main>
      <v-img
              max-height="100"
              max-width="200"
              :src="require('~/assets/image/integrationlogo.png')"
              class="mx-auto mb-4 mt-4"
              ></v-img>
  <v-form v-model="valid">

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Conseiller
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Invité
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" :complete="e1 > 3">
          Appel au salut
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" :complete="e1 > 4">
          Dites nous en plus
        </v-stepper-step>

        <v-divider></v-divider>
        
        <v-stepper-step step="5" :complete="e1 > 5">
          Remarques
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card 
              :loading="loading"
              elevation="4"
              max-width="374"
              class="mx-auto mt-4 mb-4">

              <v-container>
                  <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      label="Nom du conseiller"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Date de la visite"
                      required
                  ></v-text-field>

                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    Suivant
                  </v-btn>
              </v-container>
          </v-card>

        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card 
              :loading="loading"
              elevation="4"
              max-width="374"
              class="mx-auto mt-4 mb-4">

              <v-container>
                  
                  <p>Titre</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      label="M."
                      value="M."
                    ></v-radio>
                    <v-radio
                      label="Mme"
                      value="Mme"
                    ></v-radio>
                  </v-radio-group>

                  <v-text-field
                      label="Email"
                    ></v-text-field>

                  <v-text-field
                      label="Prénom & Nom"
                    ></v-text-field>

                  <v-text-field
                      label="Tél"
                    ></v-text-field>
                  
                  <p>Tranche d'âge</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      label="Moins de 15 ans"
                      value="Moins de 15 ans"
                    ></v-radio>
                    <v-radio
                      label="18 - 24ans"
                      value="18 - 24ans"
                    ></v-radio>
                    <v-radio
                      label="25 - 30ans"
                      value="25 - 30ans"
                    ></v-radio>
                    <v-radio
                      label="31 - 45ans"
                      value="31 - 45ans"
                    ></v-radio>
                  </v-radio-group>
                  
                  <p>Etat Civil</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      label="Célibataire"
                      value="Célibataire"
                    ></v-radio>
                    <v-radio
                      label="Marié(e)"
                      value="Marié(e)"
                    ></v-radio>
                    <v-radio
                      label="En couple/Pacsé"
                      value="En couple/Pacsé"
                    ></v-radio>
                    <v-radio
                      label="Divorcé/Séparé"
                      value="Divorcé/Séparé"
                    ></v-radio>
                    <v-radio
                      label="Veuf"
                      value="Veuf"
                    ></v-radio>
                  </v-radio-group>

                  <v-btn text @click="e1=1">
                    Précédent
                  </v-btn>

                  <v-btn
                    color="primary"
                    @click="e1 = 3"
                  >
                    Suivant
                  </v-btn>

              </v-container>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn text @click="e1 = 2">
            Précédent
          </v-btn>

          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn text
            @click="e1 = 3">
            Précédent
          </v-btn>

          <v-btn
            color="primary"
            @click="e1 = 5"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
          >
            Terminé
          </v-btn>

          <v-btn @click="e1 = 4" text>
            Précédent
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
        
    </v-form>
  </main>
</template>

<script>
  export default {
    layout: 'index',
    data: () => ({
      e1: 1,
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Le nom est obligatoire',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>

<style>
  .red {
    color: red;
  }
</style>