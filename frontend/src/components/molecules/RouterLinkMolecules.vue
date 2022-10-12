<template>
    <li :class="(link as LinkType).class">
        <RouterLinkAtomVue :link=link :class="(link as LinkType).link_class"></RouterLinkAtomVue>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RouterLinkAtomVue from '../atoms/RouterLinkAtom.vue';

interface LinkType {
    to: string,
    msg: string,
    class: string,
    link_class: string
}

export default defineComponent({
    name: 'RouterLinkMolecules',
    components: {
        RouterLinkAtomVue
    },
    props: {
        link: {
            type: Object as () => LinkType
        }
    },
});
</script>
