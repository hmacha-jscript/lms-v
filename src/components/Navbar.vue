<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link :to="{name: 'Home'}">
                    <span class="nav-title">LMS</span>
                </router-link>
                <router-link :to="{name: 'SignIn'}">
                    <span class="nav-title right">{{user.name}}</span>
                    <span class="nav-title right">SignIn</span>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
import SignIn from '@/components/SignIn'
export default {
    name: 'Navbar',
    components: {SignIn},
    data(){
        return {
            user: SignIn.data().user
        }
    },
}
</script>
<style scoped>
.navbar nav {
    padding: 0 20px;
}
</style>
