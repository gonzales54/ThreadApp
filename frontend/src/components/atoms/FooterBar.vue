<template>
    <footer class="py-2">
        <p>ThreadApp</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterView'
});
</script>

<style lang="scss">
footer {
    background: var(--base-color);
    p {
        color: white;
        text-align: center;
    }
}
</style>