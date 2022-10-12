<template>
    <h3>{{ (msg as Message).msg }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Message {
    msg: string
}

export default defineComponent({
    props: {
        msg: {
            type: Object as () => Message,
        }
    },
});
</script>