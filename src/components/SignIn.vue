<template>
    <div class="container">
        <h2 class="center-align indigo-text">
            SignIn
        </h2>
        <div v-if="feedback" class="red-text">{{feedback}}</div>
        <form @submit.prevent="verifyUser">
            <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" v-model="user.name">
            </div>
             <div class="field">
                    <label for="password">Password:</label>
                    <input type="password" name="password" v-model="user.password">
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email>" v-model="user.email">
            </div>
            <div class="field center-align">
                <button class="btn pink">SignIn</button>
            </div>
        </form>
        <div v-for="(user,index) in users" :key="index">{{user.name}}</div>
    </div>
</template>
<script>
import db from '@/firebase/firebase';

export default {
    name: 'SignIn',
    data(){
        return {
            users: [],
            user: {name: null,password: null,email: null},
            feedback: null
        }
    },
    methods: {
        verifyUser(){
            let email = this.user.email;
            let usr = this.users.find(user=>user.email===email);
            if(usr){
                if(usr.name !== this.user.name || usr.password !== this.user.password ){
                    this.feedback = "Credentails are not matching!!!"
                } else {
                    db.collection('users').doc(usr.id).update({login: true}).then(()=>{
                        this.feedback = null
                        this.$router.push({name: 'Home'})
                    })
                }
            } else {
                this.feedback = "Credentials are not matching!!"
            }
        }
    },

    created(){
        db.collection('users').get().then((docs) => {
            docs.forEach(doc=>{
               this.users.push({...doc.data(), id: doc.id})
            })
        }).catch((err) => {
            
        });
    }
}
</script>
<style>

</style>