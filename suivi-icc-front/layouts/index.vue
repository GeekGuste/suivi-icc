<template>
<v-app>
    <v-container fluid>
        <v-app-bar
        color="deep-purple darken-3"
        dark
        rounded
        dense>
        
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Bienvenue à Impact Centre Chrétien</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </template>
                <v-card>
                <v-list-item-group>
                    <v-list-item v-if="$auth.loggedIn">
                        <v-list-item-title @click="$auth.logout()">
                                Se déconnecter
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-else>
                        <v-list-item-title>
                        <NuxtLink to="/login">
                            Se connecter
                        </NuxtLink>
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                </v-card>
            </v-menu>

            

        </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
        absolute
        temporary
          >
          <v-list
              nav
              dense
          >
              <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
              >
              <v-list-item @click="$router.push('/')">
                  <v-list-item-title>Formulaire</v-list-item-title>
              </v-list-item>

              <v-list-item>
                  <v-list-item-title>Utilisateurs</v-list-item-title>
              </v-list-item>

              <v-list-item>
                  <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                  <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
              </v-list-item-group>
          </v-list>
          </v-navigation-drawer>
        <v-main>
            <Nuxt />
        </v-main>
    </v-container>
</v-app>
</template>

<script>
  export default {
      data: () => ({
          drawer: false,
        group: null,
    }),

    watch: {
        group () {
            this.drawer = false
      },
    },
  }
</script>