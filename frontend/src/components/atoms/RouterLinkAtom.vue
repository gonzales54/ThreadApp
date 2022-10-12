<template>
    <router-link :to="(link as LinkType).to">{{ (link as LinkType).msg }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface LinkType {
    to: string,
    msg: string
}

export default defineComponent({
    name: 'RouterLinkAtom',
    props:  {
        link: {
            type: Object as () => LinkType
        }
    }
});
</script>