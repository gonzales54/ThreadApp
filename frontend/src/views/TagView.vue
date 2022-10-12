<template>
    <div class="TagView">
        <NavBar></NavBar>
        <template v-if="store.state.userMobile > 768">
            <main class="w-75 mx-auto mb-5 px-lg-5 px-3">
                <section class="mb-3 row">
                    <div class="px-0 col-sm-8">
                        <BigTitleAtomVue class="h1 m-0 mb-4 text-sm-left text-center" :msg="{msg: `${store.state.tag_name}`}"></BigTitleAtomVue>
                        <ul class="mb-4 d-flex mx-auto">
                            <RouterLinkMoleculesVue @mouseover="isPopularHovering = true" @mouseleave="isPopularHovering = false" :class="[isPopularHovering === true ? 'hovering' : '', this.$route.path.match(/tag_popular_thread/) ? 'hovering': '']" :link="{to: '/tags/' + `${route.params.id}` + '/tag_popular_thread', msg: '人気なスレッド', class: 'popular_thread mr-3 ml-sm-0', link_class: ''}"></RouterLinkMoleculesVue>
                            <RouterLinkMoleculesVue @mouseover="isRecentHovering = true" @mouseleave="isRecentHovering = false" :class="[isRecentHovering=== true ? 'hovering' : '', this.$route.path.match(/tag_recent_thread/) ? 'hovering': '']" :link="{to: '/tags/' + `${route.params.id}` + '/tag_recent_thread', msg: '最近のスレッド', class: 'recent_thread ml-3 mr-sm-0', link_class: ''}"></RouterLinkMoleculesVue>
                        </ul>
                        <ul class="mb-0">
                            <ArticleOrganismsVue class="mb-4 card" v-for="thread in sortTagThread(store.getters.returnThreadData, route.name)" :key="thread.id" :thread="thread"></ArticleOrganismsVue>
                            <li v-if="store.getters.returnThreadData.length === 0" class="mb-3 px-sm-4 px-3 py-5 card">
                                <p class="mb-1 h5">スレッドはまだありません</p>
                                <RouterLinkAtomVue :link="{to: '/user/createthread', msg: 'スレッドを作成'}" class="text-primary" style="text-decoration: underline;"></RouterLinkAtomVue>
                            </li>
                        </ul>                    
                    </div>
                    <SideBarOrganismsVue class="h-auto ml-auto px-0 col-md-3 col-sm d-inline-block" :SideBarItem="{msg: '他のタグ'}"></SideBarOrganismsVue>
                </section>
                <div class="pagination" v-if="store.state.threads.length > perPage">
                    <div class="mx-auto d-inline-block">
                        <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&lt;'}" @click="Down()"></ButtonAtomVue>
                        <ButtonAtomVue v-for="(btn, index) in Math.ceil(store.getters.returnThreadData.length / perPage)" :key="btn" @click="Display(index + 1)" class="mx-2 btn" :button="{type: 'button', msg: `${index + 1}`}" :class="(index + 1 === count ? 'current' : '')"></ButtonAtomVue>
                        <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&gt;'}" @click="Up(store.getters.returnThreadData)"></ButtonAtomVue>
                    </div>
                </div>     
            </main>        
        </template>
        <template v-else>
            <main class="w-100 mx-auto mb-5 px-lg-5 px-3 row">
                <section class="mx-auto px-0 col-sm-10">
                    <div>
                        <BigTitleAtomVue class="h1 m-0 mb-4 text-sm-left text-center" :msg="{msg: '#Tag1'}"></BigTitleAtomVue>
                        <ul class="mb-4 d-flex mx-auto">
                            <RouterLinkMoleculesVue :class="[this.$route.path.match(/tag_popular_thread/) ? 'hovering': '']" :link="{to: '/tags/' + `${route.params.id}` + '/tag_popular_thread', msg: '人気なスレッド', class: 'ml-auto mr-3 ml-sm-0', link_class: ''}"></RouterLinkMoleculesVue>
                            <RouterLinkMoleculesVue :class="[this.$route.path.match(/tag_recent_thread/) ? 'hovering': '']" :link="{to: '/tags/' + `${route.params.id}` + '/tag_recent_thread', msg: '最近のスレッド', class: 'mr-auto ml-3 mr-sm-0', link_class: ''}"></RouterLinkMoleculesVue>
                        </ul>
                        <ul class="mb-0">
                            <ArticleOrganismsVue class="mb-4 card" v-for="thread in sortTagThread(store.getters.returnThreadData, route.name)" :key="thread.id" :thread="thread"></ArticleOrganismsVue>
                            <li v-if="store.getters.returnThreadData.length === 0" class="mb-3 px-sm-4 px-3 py-5 card">
                                <p class="mb-1 h5">スレッドはまだありません</p>
                                <RouterLinkAtomVue :link="{to: '/user/createthread', msg: 'スレッドを作成'}" class="text-primary" style="text-decoration: underline;"></RouterLinkAtomVue>
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="pagination" v-if="store.getters.returnThreadData.length > perPage">
                    <div class="mx-auto d-inline-block">
                        <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&lt;'}" @click="Down()"></ButtonAtomVue>
                        <ButtonAtomVue v-for="(btn, index) in Math.ceil(store.getters.returnThreadData.length / perPage)" :key="btn" @click="Display(index + 1)" class="page-item mx-2 btn" :button="{type: 'button', msg: `${index + 1}`}" :class="(index + 1 === count ? 'current' : '')"></ButtonAtomVue>
                        <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&gt;'}" @click="Up(store.state.threads)"></ButtonAtomVue>
                    </div>
                </div>     
            </main>
        </template>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import ArticleOrganismsVue from '@/components/organisms/ArticleOrganisms.vue';
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import RouterLinkAtomVue from '@/components/atoms/RouterLinkAtom.vue';
import RouterLinkMoleculesVue from '@/components/molecules/RouterLinkMolecules.vue';
import SideBarOrganismsVue from '@/components/organisms/SideBarOrganisms.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
    name: 'TagView',
    components: {
    RouterLinkAtomVue,
    ArticleOrganismsVue,
    BigTitleAtomVue,
    ButtonAtomVue,
    RouterLinkMoleculesVue,
    SideBarOrganismsVue,
},
    setup() {
        const store = useStore()
        const route = useRoute();

        const isPopularHovering = ref(false);
        const isRecentHovering = ref(false);
        const perPage = 5;
        const count = ref(1);

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };
        
        const threadPagination = (thread, count, perPage) => {
            const firstIndex = (count - 1) * perPage;
            const lastIndex = firstIndex + perPage;
            return thread.slice(firstIndex, lastIndex);
        }
    
        const Up = (data) => {
            if(count.value !== Math.ceil(data.length / perPage)) {
                count.value += 1;
            }
        }

        const Display = (id) => {
            count.value = id
            console.log(count.value)
        }

        const Down = () => {
            if(count.value !== 1) {
                count.value-=1;
                console.log(count.value)
            }
        }

        const sortTagThread = (data, path) => {
            let threads = [...data];
            switch(path) {
                case 'tag': 
                    threads = threadPagination(threads, count.value, perPage);
                break;

                case 'tag_popular_thread': 
                    threads.sort(function(a,b) {
                        if(a.comments.length > b.comments.length) {
                            return -1;
                        } else if(a.comments.length < b.comments.length) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    threads = threadPagination(threads, count.value, perPage);
                break;

                default:
                    threads.sort(function(a,b) {
                        if(a.created_at > b.created_at) {
                            return -1;
                        } else if(a.created_at < b.created_at) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    threads = threadPagination(threads, count.value, perPage);
                break;
            }
            return threads;
        }

        onMounted(() => { 
            getMobile();
            store.dispatch('getUser');
            window.addEventListener('resize', getMobile);
            store.dispatch('getTagThread', route.params.id);
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

        onBeforeRouteUpdate((to) => {
            store.dispatch('getTagThread', to.params.id);
        })

        return {
            store,
            route,
            count,
            perPage,
            isPopularHovering,
            isRecentHovering,
            sortTagThread,
            Up,
            Display,
            Down
        }
    },
});
</script>

<style lang="scss" scoped>
.TagView {
    height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}



.description {
    line-height: 1.125rem;
}

.hovering {
    position: relative;
    &::before {
        width: 40%;
        height: 2px;
        display: block;
        background: var(--base-color);
        content: '';
        position: absolute;
        bottom: -5px;
        left: calc(50% - 20%);
    }
}

.current {
    background-color: var(--base-color);
    color: #fff;
}

@media screen and (max-width: 768px) {
    .description {
        font-size: 0.9rem;
        line-height: 1rem;
    }

    small {
        line-height: 1rem;
    }
}

@media screen and (max-width: 768px) {
    .description {
        font-size: 0.9rem;
        line-height: 1rem;
    }

    small {
        line-height: 1rem;
    }
}
</style>