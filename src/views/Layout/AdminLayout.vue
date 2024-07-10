<script setup>
import SideBar from "../../components/@share/SideBar.vue"
import NavBar from "../../components/@share/NavBar.vue"
</script>


<template>
    <div class="w-screen h-screen flex">
        <div class="nav md:w-[250px] sm:w-[60px] w-[0] h-full">
            <SideBar></SideBar>            
        </div>
        <div class="page flex flex-col grow">
            <div class="h-[75px] w-full flex items-center ">
                <NavBar></NavBar>
            </div>
            <div class="grow border border-green-500">
                <slot/>
            </div>
        </div>
    </div>
</template>
