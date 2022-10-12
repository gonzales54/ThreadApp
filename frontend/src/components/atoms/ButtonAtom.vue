<template>
    <template v-if="(button as ButtonType).type === 'button'">
        <button :type='(button as ButtonType).type' class="shadow-none">{{ (button as ButtonType).msg }}</button>
    </template>
    <template v-else>
        <button :type='(button as ButtonType).type' class="btn-color shadow-none">{{ (button as ButtonType).msg }}</button>
    </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ButtonType {
    type: "button" | "submit" | "reset" | undefined,
    msg: string,
}

export default defineComponent({
    props: {
        button: {
            type: Object as () => ButtonType
        }
    }
});
</script>

<style lang="scss" scoped>
@import '../../assets/base.css';
.btn-color {
    color: white;
    background: var(--base-color);
}
</style>