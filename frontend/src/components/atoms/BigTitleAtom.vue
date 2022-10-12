<template>
    <h2>{{ (msg as Title).msg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Title {
    msg: string
}

export default defineComponent({
    props: {
        msg: {
            type: Object as () => Title
        }
    }
});
</script>