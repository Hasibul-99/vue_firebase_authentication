<template>
    <div>
        Logged in
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>

        <div>
            <button @click="signout">Sign out</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/auth');

    export default {
        data() {
            return {
                loggedIn: false
            }
        },
        methods: {
            async signout() {
                try {
                    const data = await firebase.auth().signOut();

                    console.log(data);

                    this.$router.replace({name: "Login"})
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mounted() {
            firebase.auth().onAuthStateChanged(user => {
                console.log(user);
                if(user) this.loggedIn = true;
                else this.loggedIn = false;
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>