<template>
    <div class="CreateThread">
        <NavBar></NavBar>
        <main class="mb-5 px-sm-5 px-3 pt-4">
            <template v-if="store.state.userMobile > 768">
                <section class="w-50 mt-4 mx-auto px-sm-4 px-4 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg: 'スレッド作成'}"></BigTitleAtomVue>
                    <form class="mb-3 text-left" @submit.prevent="createThread()">
                        <div class="form-group">
                            <label for="thread_title">スレッドのタイトル</label>
                            <input type="text" id="thread_title" name="thread_title" class="form-control" v-model="title" placeholder="スレッドのタイトルを入力してください" required/>
                        </div>
                        <div class="form-group">
                            <label for="tag">タグ付け(#をつけて一つのみ指定してください。)</label>
                            <input type="text" id="tag" name="tag" class="form-control" v-model="tag" placeholder="タグを入力してください" required/>
                        </div>
                        <div class="form-group">
                            <label for="thread_description">スレッドの説明</label>
                            <textarea name="thread_description" id="thread_description" class="w-100 form-control" rows="4" v-model="description" placeholder="スレッドの説明を入力してください"></textarea>
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg: '作成'}"></ButtonAtomVue>
                    </form>
                    <RouterLinkAtomVue :link="{to: '/', msg: 'ホームに戻る'}" class="text-primary" style="text-decoration: underline"></RouterLinkAtomVue>
                </section>
            </template>

            <template v-else>
                <section class="w-100 mt-4 mx-auto px-sm-4 px-3 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg: 'スレッド作成'}"></BigTitleAtomVue>
                    <form class="mb-3 text-left" @submit.prevent="createThread()">
                        <div class="form-group">
                            <label for="thread_title">スレッドのタイトル</label>
                            <input type="text" id="thread_title" name="thread_title" class="form-control" v-model="title" placeholder="スレッドのタイトルを入力してください" required/>
                        </div>
                        <div class="form-group">
                            <label for="tag">タグ付け</label>
                            <input type="text" id="tag" name="tag" class="form-control" v-model="tag" placeholder="ジャンルを入力してください" required >
                        </div>
                        <div class="form-group">
                            <label for="thread_description">スレッドの説明</label>
                            <textarea name="thread_description" id="thread_description" class="w-100 form-control" rows="4" v-model="description" placeholder="スレッドの説明を入力してください"></textarea>
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg: '作成'}"></ButtonAtomVue>
                    </form>
                    <RouterLinkAtomVue :link="{to: '/', msg: 'ホームに戻る'}" class="text-primary" style="text-decoration: underline"></RouterLinkAtomVue>
                </section>  
            </template>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import RouterLinkAtomVue from '@/components/atoms/RouterLinkAtom.vue';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    components: {
        BigTitleAtomVue,
        ButtonAtomVue,
        RouterLinkAtomVue
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const title = ref<string>('');
        const description = ref<string>('');
        const tag = ref<string>('');

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        const createThread = (): void => {
            store.dispatch('createThread', {id: store.state.user.id, name: store.state.user.name, description: description.value, title: title.value, tag: tag.value});
            router.push('/');
        }

        onMounted((): void => {
            getMobile();
            window.addEventListener('resize', getMobile);
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

        return {
            store,
            title,
            tag,
            description,
            createThread
        }
    },
});
</script>

<style lang="scss">
.CreateThread {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}
</style>