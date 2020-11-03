<template>
    <div>
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
    import firebase from 'firebase'
    require('firebase/auth');

    export default {
        data() {
            return {
                email: "",
                password: "",
                error: ""
            }
        },
        methods: {
            async pressed() {
                console.log("hello");
                
                try {
                    const data = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);

                    console.log(data);

                    this.$router.replace({name: "Secret"});
                    
                } catch (error) {
                    console.log(error);
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>