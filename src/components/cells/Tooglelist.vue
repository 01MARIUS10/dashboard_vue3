<script setup>
import { ref } from "vue";

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: "ToogleLink",
    },
    icon: {
        type: String,
        default: "mdi-vuetify",
    },
    items: {
        type: Array,
        default: [
            {
                title: "child 1",
            },
            {
                title: "child 2",
            },
            {
                title: "child 3",
            },
        ],
    },
});
let emit = defineEmits(["toogleClick"]);
</script>

<template>
    <div :class="props.isOpen ? 'border-r-4 border-green-400' : ''">
        <div
            class="flex items-center justify-between px-[15px] py-[6px] text-gray-300"
            :class="props.isOpen ? 'border-t border-b border-gray-500' : ''"
            @click="emit('toogleClick')"
        >
            <div class="flex items-center gap-[10px]">
                <span
                    class="mdi text-[1.3rem]"
                    :class="props.icon ? props.icon : 'mdi-vuetify'"
                ></span>
                <p>{{ props.label }}</p>
            </div>
            <span
                class="mdi"
                :class="props.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></span>
        </div>
        <div v-show="props.isOpen" class="px-[35px] mt-[10px]">
            <div
                class="boule relative px-[20px] border-l-2 border-gray-500 before:bg-gray-500 text-gray-300"
                v-for="(e, i) in props.items"
                :key="i"
            >
                {{ e.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.boule::before {
    position: absolute;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translate(calc(-50% - 1px), -50%);
}
</style>
