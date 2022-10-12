<template>
    <h4>{{ (msg as Title).msg }}</h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Title {
    msg: string
}

export default defineComponent({
    name: 'ArticleTitleAtom',
    props: {
        msg: {
            type: Object as () => Title
        }
    }
});
</script>