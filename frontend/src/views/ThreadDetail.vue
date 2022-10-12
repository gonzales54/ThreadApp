<template>
    <div class="ThreadDetail">
        <NavBar></NavBar>
        <template v-if="store.state.userMobile > 768">
            <main class="w-75 mx-auto mb-5 px-lg-5 px-3 row overflow-hidden">
                <section class="pt-4 px-4 col-sm-8 bg-white">
                    <BigTitleAtomVue class="h1 mb-2 text-sm-left text-center" :msg="{msg: store.state.threadTitle}"></BigTitleAtomVue>
                    <p class="mb-3">{{ store.state.threadDescription }}</p>
                    <div class="row"></div>
                    <form class="mb-3 py-sm-3" v-if="store.state.loginCheck === true" @submit.prevent="createComment()">
                        <div class="form-group mb-0">
                            <!--<p class="text-danger mb-1">{{ err }}</p>-->
                            <textarea name="comment" id="comment" class="form-control shadow-none" cols="30" rows="6" v-model="comment" placeholder="コメント入力" required></textarea>
                            <div class="px-2 py-1 form-menu d-flex justify-content-between">
                                <ul class="d-flex">
                                    <li class="mr-3">
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addBoldActiveClass" :class='{activeBold: isBoldActiveClass}' :button="{type: 'button', msg: 'B'}"></ButtonAtomVue>
                                    </li>
                                    <li class="mr-3">
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addItalicActiveClass" :class='{activeItalic: isItalicActiveClass}' :button="{type: 'button', msg: 'i'}"></ButtonAtomVue>
                                    </li>
                                    <li class="mr-0">                               
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addUnderlineActiveClass" :class='{activeUnderline: isUnderlineActiveClass}' :button="{type: 'button', msg: 'u'}"></ButtonAtomVue>
                                    </li>
                                </ul>
                                <ButtonAtomVue class="btn d-block comment-btn" :button="{type: 'submit', msg: 'コメント'}"></ButtonAtomVue>
                            </div>
                        </div>
                    </form>
                    <div class="">
                        <ul class="mb-sm-0 mb-5 px-sm-3 py-sm-3 px-4 py-3 bg-white" v-if="store.state.comments.length !== 0">
                            <CommentMoleculesVue class="mb-sm-3 mb-4" v-for="(comment, index) in store.state.comments" :key="comment.id" :comments="{index: index + 1, user_name: comment.user_name, created_at: new Date(comment.created_at), comment: comment.comment, user_style: 'h6 mb-1', comment_style: 'h4', src: comment.src, width: 30, height: 30, bold: comment.bold, italic: comment.italic, underline: comment.underline}"></CommentMoleculesVue>
                        </ul>
                        <ul v-else class="w-100">
                            <li class="mb-sm-3 mb-4 h4">コメントはまだありません</li>
                        </ul>
                    </div>
                </section>
                <SideBarOrganismsVue class="h-auto ml-auto px-0 col-md-3 col-sm d-inline-block" :SideBarItem="{msg: 'タグ一覧'}"></SideBarOrganismsVue>
            </main>        
        </template>
        <template v-else>
            <main class="mx-auto mb-5 px-lg-5 px-sm-3 px-3 row overflow-hidden">
                <section class="mx-auto pt-4 px-sm-4 px-3 col-sm-10 bg-white">
                    <BigTitleAtomVue class="h1 mb-2 text-sm-left text-center" :msg="{msg: this.$store.state.threadTitle}"></BigTitleAtomVue>
                    <p class="mb-4">{{ store.state.threadDescription }}</p>
                    <div class="row"></div>
                    <form class="mb-3 py-sm-3" v-if="store.state.loginCheck === true" @submit.prevent="createComment()">
                        <div class="form-group mb-0">
                            <textarea name="comment" id="comment" class="form-control shadow-none" cols="30" rows="6" v-model="comment" placeholder="コメント入力" required></textarea>
                            <div class="p-2 form-menu d-flex justify-content-between">
                                <ul class="d-flex">
                                    <li class="mr-3">
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addBoldActiveClass" :class='{activeBold: isBoldActiveClass}' :button="{type: 'button', msg: 'B'}"></ButtonAtomVue>
                                    </li>
                                    <li class="mr-3">
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addItalicActiveClass" :class='{activeItalic: isItalicActiveClass}' :button="{type: 'button', msg: 'i'}"></ButtonAtomVue>
                                    </li>
                                    <li class="mr-0">                               
                                        <ButtonAtomVue class="my-auto btn d-block add-btn shadow-none" @click="addUnderlineActiveClass" :class='{activeUnderline: isUnderlineActiveClass}' :button="{type: 'button', msg: 'u'}"></ButtonAtomVue>
                                    </li>
                                </ul>
                                <ButtonAtomVue class="btn d-block comment-btn" :button="{type: 'submit', msg: 'コメント'}"></ButtonAtomVue>
                            </div>
                        </div>
                    </form>
                    <div class="">
                        <ul class="mb-0 px-md-4 py-sm-3 px-0 py-3 bg-white" v-if="store.state.comments.length !== 0">
                            <CommentMoleculesVue class="mb-sm-3 mb-4" v-for="(comment, index) in store.state.comments" :key="comment.id" :comments="{index: index + 1, user_name: comment.user_name, created_at: new Date(comment.created_at), comment: comment.comment, user_style: 'h6 mb-1', comment_style: 'h4', src: comment.src, width: 30, height: 30, bold: comment.bold, italic: comment.italic, underline: comment.underline}"></CommentMoleculesVue>
                        </ul>
                        <ul v-else class="w-100">
                            <li class="mb-sm-3 mb-4 h4">コメントはまだありません</li>
                        </ul>
                    </div>
                </section>
            </main>            
        </template>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import CommentMoleculesVue from '@/components/molecules/CommentMolecules.vue';
import SideBarOrganismsVue from '@/components/organisms/SideBarOrganisms.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    components: {
        BigTitleAtomVue,
        ButtonAtomVue,
        CommentMoleculesVue,
        SideBarOrganismsVue
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const comment = ref<string>('');
        const isBoldActiveClass = ref<boolean>(false);
        const isItalicActiveClass = ref<boolean>(false);
        const isUnderlineActiveClass = ref<boolean>(false);

        const addBoldActiveClass = (): void => {
            isBoldActiveClass.value = !isBoldActiveClass.value
        };
        const addItalicActiveClass = (): void => {
            isItalicActiveClass.value = !isItalicActiveClass.value
        };
        const addUnderlineActiveClass = (): void => {
            isUnderlineActiveClass.value = !isUnderlineActiveClass.value
        };

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        const createComment = (): void => {
            store.dispatch('createComment', {id: route.params.id, index: store.state.comments.length + 1, thread_title: store.state.threadTitle, user_id: store.state.user.id, user_name: store.state.user.name, comment: comment.value, src: store.state.user.profile_picture, bold: isBoldActiveClass.value , italic: isItalicActiveClass.value, underline: isUnderlineActiveClass.value})
            comment.value = '';
            isBoldActiveClass.value = false;
            isItalicActiveClass.value = false;
            isUnderlineActiveClass.value = false;
            store.dispatch('getThreadDetail', route.params.id);
        }

        onMounted(async() => {
            getMobile();
            store.dispatch('getUser');
            window.addEventListener('resize', getMobile);
            await store.dispatch('getThreadDetail', route.params.id);
            if(store.state.threadTitle.length === 0) {
                router.push('/');
            }
            (window as any).Echo.channel('comment-channel')
                .listen('CommentAdded', () => {
                    store.dispatch('getThreadDetail', route.params.id);
                })
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

        return {
            store,
            comment,
            isBoldActiveClass,
            isItalicActiveClass,
            isUnderlineActiveClass,
            addBoldActiveClass,
            addItalicActiveClass,
            addUnderlineActiveClass,
            createComment
        }
    },
});
</script>

<style lang="scss" scoped>
@import '../assets/base.css';
.ThreadDetail {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}
.comment-btn {
    color: white;
    background: var(--base-color);
}
.form-menu{
    background: var(--accent-color);
}
.description {
    font-size: .85rem;
    line-height: 1.125rem;
}
.add-btn{
    width: 38px;
}
.activeBold, .activeItalic, .activeUnderline{
    color: white;
    background: var(--base-color);
}
</style>