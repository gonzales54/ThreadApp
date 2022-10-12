<template>
    <aside>
        <div class="p-0 text-left">
            <SmallTitleAtomVue class="h4 mb-sm-4 mb-3" :msg="{msg: ((SideBarItem as SideType).msg)}"></SmallTitleAtomVue>
            <ul class="list-group">
                <RouterLinkMoleculesVue v-for="tag in store.state.tags" :key="tag.id" :link="{to: `/tags/${tag.id}`, msg: `${tag.tag}`, class: 'p-0 py-1 list-group-item', link_class: 'px-4 py-2 d-block'}"></RouterLinkMoleculesVue>
                <li v-if="store.state.tags.length === 0" class="px-4 py-2 list-group-item">他のタグはまだありません</li>
            </ul>
        </div>
    </aside>
</template>

<script lang="ts">
import SmallTitleAtomVue from '../atoms/SmallTitleAtom.vue';
import RouterLinkMoleculesVue from '../molecules/RouterLinkMolecules.vue';
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

interface SideType {
    msg: string
}

export default defineComponent({
    name: 'SideBar',
    props: {
        SideBarItem: {
            type: Object as () => SideType
        }
    },
    components: {
        SmallTitleAtomVue,
        RouterLinkMoleculesVue
    },
    setup() {
        const store = useStore();
        const route = useRoute();

        const getTag = (id, path): void => {
            store.dispatch('getTags', {id: id, path: path});
        }

        onMounted(() => {
            getTag(route.params.id, route.name);
        })

        onBeforeRouteUpdate((to) => {
            getTag(to.params.id, to.name);
        })

        return {
            store,
            route
        }
    },
});
</script>