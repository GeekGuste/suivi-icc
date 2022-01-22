<template>
<!-- Other stuff -->
   <div class="authentication-buttons">
      <div v-if="$auth.loggedIn">
         {{ $auth.user.email }}
         <v-btn @click="$auth.logout()" to="/logout" class="logout-btn">
           Se déconnecter 
         </v-btn>
      </div>
      <div v-else>
         <v-btn icon to="/login" class="login-btn">
            <v-icon>mdi-login</v-icon>
         </v-btn>
         <v-btn icon to="/register" class="register-btn">
            <v-icon>mdi-account-key-outline</v-icon>
         </v-btn>
      </div>
   </div>
<!-- Other stuff -->
</template>

<script>
export default {
  // Some more stuff
}
</script>