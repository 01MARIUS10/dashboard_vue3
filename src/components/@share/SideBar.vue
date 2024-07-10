<script setup>
import { onMounted, reactive, ref } from "vue";
import Tooglelist from "../cells/Tooglelist.vue";

onMounted(() => {
    console.log("nav mounted");
});

let activeToogle = ref(0);
let handleToogleNavigation = (i) => {
    if (activeToogle.value == i) {
        activeToogle.value = 0;
    } else {
        activeToogle.value = i;
    }
};

let Menus = reactive({
    home: [
        {
            title: "home 1",
        },
        {
            title: "home 2",
        },
    ],
    form: [
        {
            title: "form 1",
        },
        {
            title: "form 2",
        },
    ],
    table: [
        {
            title: "table 1",
        },
        {
            title: "table 2",
        },
    ],
    layout: [
        {
            title: "layout 1",
        },
        {
            title: "layout 2",
        },
    ],
});
</script>

<template>
    <div class="w-full h-full bg-[#2A3F54] text-white">
        <div class="nav-title flex justify-between items-center p-5">
            <img src="/assets/icons/boxes.svg" alt="" class="w-[40px]" />
            <span class="text-lg">Gentelella Alela!</span>
        </div>

        <div class="profil flex justify-between items-center p-5">
            <div class="profil-image">
                <img
                    src="/assets/images/img.jpg"
                    alt=""
                    class="w-[50px] border-4 border-white rounded-full"
                />
            </div>
            <div class="profil-name">
                <p class="text-sm text-gray-500">Welcome ,</p>
                <p class="text-sm">Razafitsalama Marius</p>
            </div>
        </div>
        <div class="section-general">
            <Tooglelist
                label="Home"
                icon="mdi-home"
                :items="Menus.home"
                :isOpen="activeToogle == 1"
                @toogleClick="handleToogleNavigation(1)"
            ></Tooglelist>
            <Tooglelist
                label="Form"
                icon="mdi-form-select"
                :items="Menus.form"
                :isOpen="activeToogle == 2"
                @toogleClick="handleToogleNavigation(2)"
            ></Tooglelist>
            <Tooglelist
                label="Table"
                icon="mdi-table"
                :items="Menus.table"
                :isOpen="activeToogle == 3"
                @toogleClick="handleToogleNavigation(3)"
            ></Tooglelist>
            <Tooglelist
                label="Layout"
                icon="mdi-page-layout-body"
                :items="Menus.layout"
                :isOpen="activeToogle == 4"
                @toogleClick="handleToogleNavigation(4)"
            ></Tooglelist>
        </div>
        <div class="section-liveOn"></div>
    </div>
</template>
