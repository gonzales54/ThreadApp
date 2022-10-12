<template>
    <template v-if="this.$route.name.match(/home|tag|popular_thread|recent_thread/)">
        <li>
            <div class="mb-2 pt-3 px-sm-4 px-3 d-flex justify-content-between">
                <p class="mb-0 d-inline-block">作成者 {{ `${(thread as Thread).user_name}` }}</p>
                <p class="text-danger" v-if="store.state.loginCheck === true && (thread as Thread).user_id === store.state.user.id" @click="deleteThread((thread as Thread).id)" style="font-size: .85rem; cursor: pointer;">スレッドを削除する</p>
            </div>
            <router-link :to="'/thread/' + `${(thread as Thread).id}`">
                <article class="px-sm-4 px-3 pt-0 pb-3 card-body text-right">
                    <div class="text-left">
                        <div class="mb-0 d-flex justify-content-between">
                            <ArticleTitleAtomVue class="mb-0 h3 card-title" :msg="{msg: `${(thread as Thread).thread_title}`}"></ArticleTitleAtomVue>
                            <div class="d-flex">
                                <p class="mr-1">
                                    <img src="/app/comments.png">
                                </p>
                                <span class="h5 mb-0">{{ (thread as Thread).comments.length }}</span>
                            </div>
                        </div>
                        <RouterLinkAtomVue class="mb-2 d-inline-block card-subtitle text-primary" :link="{to: '/tags/' + `${(thread as Thread).tag_id}`, msg: `${(thread as Thread).tag}`}"></RouterLinkAtomVue>
                        <p class="mb-3 description">{{ description(`${ (thread as Thread).thread_description }`) }}<RouterLinkAtomVue v-if="(thread as Thread).thread_description.length > 95" class="text-danger" :link="{to: 'thread/' +`${(thread as Thread).id}`, msg: '続きを見る'}"></RouterLinkAtomVue></p>
                        <ul class="mb-2" v-if="(thread as Thread).comments.length > 0">
                            <CommentMoleculesVue class="mb-2" v-for="(comment, index) in getComment((thread as Thread).comments)" :key="comment.id" :comments="{index: index+1, user_name: (comment as Comment).user_name, created_at: new Date((comment as Comment).created_at), comment: (comment as Comment).comment, user_style: 'mb-0', comment_style: 'mb-0 h6', src: 'hans-ott-AxSaRriVy0E-unsplash.jpg', width: 0, height: 0, bold: 0, italic: 0, underline: 0}"></CommentMoleculesVue>
                        </ul>
                        <ul class="mb-0" v-else>
                            <li class="mb-2">コメントはまだありません</li>
                        </ul>
                    </div>
                    <DisplayTimeAtomVue class="ml-auto d-inline-block" :time="new Date(`${(thread as Thread).created_at}`)" style="font-size: 0.9rem"></DisplayTimeAtomVue>
                </article>
            </router-link>
        </li>    
    </template>
    <template v-else>
        <li>
            <article>
                <router-link :to="'/thread/' + `${(comment as Comment).thread_id}`">
                    <div class="text-left">
                        <div class="mb-2 d-flex justify-content-between border-bottom">
                            <ArticleTitleAtomVue class="mb-0 h3 card-title" :msg="{msg: `${(comment as Comment).thread_title}`}"></ArticleTitleAtomVue>
                        </div>
                        <ul class="mb-0">
                            <CommentMoleculesVue :comments="{index: (comment as Comment).index, user_name: (comment as Comment).user_name, created_at: new Date((comment as Comment).created_at), comment: (comment as Comment).comment, user_style: 'mb-0', comment_style: 'mb-0 h6', src: (comment as Comment).src, width: 0, height: 0, bold: 0, italic: 0, underline: 0}"></CommentMoleculesVue>
                        </ul>
                    </div>                        
                </router-link>
            </article>            
        </li>
    </template>
</template>

<script lang="ts">
import axios from 'axios';
import ArticleTitleAtomVue from '../atoms/ArticleTitleAtom.vue';
import CommentMoleculesVue from '../molecules/CommentMolecules.vue';
import DisplayTimeAtomVue from '../atoms/DisplayTimeAtom.vue';
import RouterLinkAtomVue from '../atoms/RouterLinkAtom.vue';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

interface Thread {
  id: number,
  user_id: number,
  user_name: string,
  thread_title: string,
  thread_description: string,
  tag_id: number,
  tag: string,
  comments: Comment[],
  created_at: Date,
  updated_at: Date,
  bold: boolean|number,
  italic: boolean|number,
  underline: boolean|number
}

interface Comment {
  id: number,
  user_id: number,
  user_name: string,
  index: number,
  thread_id: number,
  thread_title: string,
  comment: string,
  bold: string|boolean,
  italic: string|boolean,
  underline: string|boolean,
  src: string
  created_at: Date,
  updated_at: Date
}


export default defineComponent({
    name: 'ThreadArticle',
    components: {
        ArticleTitleAtomVue,
        CommentMoleculesVue,
        DisplayTimeAtomVue,
        RouterLinkAtomVue
    },
    props: {
        thread: {
            type: Object as () => Thread|null|string
        },
        comment: {
            type: Object as () => Comment
        }
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const description = (msg: string):string => {
            const count = msg.length;
            if(count >= 95) {
                return msg.substring(0, 95) + '...';
            } else {
                return msg
            }
        };

        const getComment = (data: Comment[]): Comment[] => {
            if(data.length > 2) {
                return data.slice(data.length - 3, data.length)
            } else {
                return data;
            }
        };

        const deleteThread = (id: number): void => {
            axios.delete('/api/delete/' + id, {
                params: {
                    id: id,
                    user_id: 1,
                }
            })
            .then(() => {
                router.push('/');
                store.dispatch('getThreads');
                store.dispatch('getTags', {id: 0, path: route.name});
            })
        };

        return {
            store,
            route,
            description,
            getComment,
            deleteThread
        }
    }
});
</script>