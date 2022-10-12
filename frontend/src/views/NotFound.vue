<template>
    <div class="NotFound">
        <NavBar></NavBar>
        <main class="w-75 h-100 mx-auto mb-5 p-5 text-center bg-white">
            <h1 class="h1">404 NotFound</h1>
            <RouterLinkAtomVue :link="{to: '/', msg: 'タグ一覧に戻る'}" class="text-primary" style="text-decoration: underline;"></RouterLinkAtomVue>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import RouterLinkAtomVue from '@/components/atoms/RouterLinkAtom.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NotFound',
    components: {
        RouterLinkAtomVue
    }
});
</script>

<style lang="scss" scoped>
.NotFound {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}
</style>