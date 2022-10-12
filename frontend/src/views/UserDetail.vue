<template>
    <div class="UserDetail">
        <NavBar></NavBar>
        <template v-if="store.state.userMobile > 576">
            <main class="w-75 mx-auto mb-5 px-lg-5 px-3 row">
                <section class="px-0 col-sm-7">
                    <BigTitleAtomVue class="h1 mb-4" :msg="{msg: 'コメント一覧'}"></BigTitleAtomVue>
                    <ul>
                        <ArticleOrganismsVue v-for="comment in sortComments(store.state.comments)" :key="comment.id" :comment="comment" class="mb-3 px-sm-4 px-3 py-3 card text-right"></ArticleOrganismsVue>
                        <li class="mb-3 px-sm-4 px-3 py-3 card" v-if="store.state.comments.length === 0">
                            <p>コメントはまだありません</p>
                        </li>
                    </ul>
                    <div class="pagination" v-if="store.state.comments.length > perPage">
                        <div class="mx-auto d-inline-block">
                            <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&lt;'}" @click="Down()"></ButtonAtomVue>
                            <ButtonAtomVue v-for="(btn, index) in Math.ceil(store.state.comments.length / perPage)" :key="btn" @click="Display(index + 1)" class="page-item mx-2 btn" :button="{type: 'button', msg: `${index + 1}`}" :class="(index + 1 === count ? 'current' : '')"></ButtonAtomVue>
                            <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&gt;'}" @click="Up(store.state.comments)"></ButtonAtomVue>
                        </div>
                    </div>    
                </section>
                <aside class="user_profile ml-auto mb-md-0 mb-5 px-0 col-sm-4">
                    <div class="user_header" :style="{'background-image': 'url(' + `${store.state.user.background_picture}`}">
                        <UserProfileImageVue :profileImage="{src: `${store.state.user.profile_picture}`, width: 80, height: 80}" alt="" class="d-block user_img rounded-circle"></UserProfileImageVue>
                    </div>
                    <div class="px-lg-4 px-2 pt-3 pb-2 bg-white border-bottom border-left border-right text-right">
                        <div class="text-left">
                            <SmallTitleAtomVue class="h3" :msg="{msg: `${store.state.user.name}`}"></SmallTitleAtomVue>
                            <p class="description mb-2">{{ store.state.user.introduction}}</p>
                        </div>
                        <span>
                            <RouterLinkAtomVue :link="{to: 'userupdate', msg: 'ユーザー情報編集'}" class="text-primary font-xs-small"></RouterLinkAtomVue>
                        </span>
                    </div>
                </aside>
            </main>        
        </template>
        <template v-else>
            <main class="mx-auto mb-5 px-lg-5 px-3 col-sm-10 row">
                <section class="px-0 col-md-7 order-2">
                    <BigTitleAtomVue class="h1 mb-4" :msg="{msg: 'コメント一覧'}"></BigTitleAtomVue>
                    <ul>
                        <ArticleOrganismsVue v-for="comment in sortComments(store.state.comments)" :key="comment.id" :comment="comment" class="mb-3 px-sm-4 px-3 py-3 card text-right"></ArticleOrganismsVue>
                        <li class="mb-3 px-sm-4 px-3 py-3 card" v-if="store.state.comments.length === 0">
                            <p>コメントはまだありません</p>
                        </li>
                    </ul>
                    <div class="pagination" v-if="store.state.comments.length > perPage">
                        <div class="mx-auto d-inline-block">
                            <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&lt;'}" @click="Down()"></ButtonAtomVue>
                            <ButtonAtomVue v-for="(btn, index) in Math.ceil(store.state.comments.length / perPage)" :key="btn" @click="Display(index + 1)" class="page-item mx-2 btn" :button="{type: 'button', msg: `${index + 1}`}" :class="(index + 1 === count ? 'current' : '')"></ButtonAtomVue>
                            <ButtonAtomVue class="btn" :button="{type: 'button', msg: '&gt;'}" @click="Up(store.state.comments)"></ButtonAtomVue>
                        </div>
                    </div>  
                </section>
                <aside class="user_profile ml-auto mb-md-0 mb-5 px-0 col-md-4 order-1 text-right">
                    <div class="user_header" :style="{'background-image': 'url(' + `${store.state.user.background_picture}`}">
                        <p>
                            <UserProfileImageVue :profileImage="{src: `${store.state.user.profile_picture}`, width: 60, height: 60}" alt="" class="d-block user_img rounded-circle"></UserProfileImageVue>
                        </p>
                    </div>
                    <div class="px-4 py-3 pb-2 bg-white border-bottom border-left border-right">                   
                        <div class="mb-3 text-left">
                            <SmallTitleAtomVue class="h3" :msg="{msg: `${store.state.user.name}`}"></SmallTitleAtomVue>
                            <p>{{ store.state.user.introduction }}</p>
                        </div>
                        <span>
                            <RouterLinkAtomVue :link="{to: 'userupdate', msg: 'ユーザー情報編集'}" class="text-primary"></RouterLinkAtomVue>
                        </span>
                    </div>
                </aside>
            </main>            
        </template>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import ArticleOrganismsVue from '@/components/organisms/ArticleOrganisms.vue';
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import SmallTitleAtomVue from '@/components/atoms/SmallTitleAtom.vue';
import RouterLinkAtomVue from '@/components/atoms/RouterLinkAtom.vue';
import UserProfileImageVue from '@/components/atoms/UserProfileImage.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    components: {
        ArticleOrganismsVue,
        BigTitleAtomVue,
        ButtonAtomVue,
        SmallTitleAtomVue,
        RouterLinkAtomVue,
        UserProfileImageVue
    },
    setup() {
        const store = useStore();
        const perPage = 5;
        const count = ref(1);

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        const commentPagination = (comment, count, perPage) => {
            const firstIndex = (count - 1) * perPage;
            const lastIndex = firstIndex + perPage;
            return comment.slice(firstIndex, lastIndex);
        }

        const Up = (data) => {
            if(count.value !== Math.ceil(data.length / perPage)) {
                count.value += 1;
            }
        }

        const Display = (id) => {
            count.value = id
        }

        const Down = () => {
            if(count.value !== 1) {
                count.value-=1;
            }
        }

        const sortComments = (data) => {
            data.sort(function(a,b) {
                if(a.created_at > b.created_at) {
                    return -1;
                } else if(a.created_at < b.created_at) {
                    return 1;
                } else {
                    return 0;
                }
            })
            return commentPagination(data, count.value, perPage);
        }

        onMounted((): void => {
            let id = 1;
            getMobile();
            window.addEventListener('resize', getMobile);
            store.dispatch('getUserComment', id);
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

        return {
            store,
            perPage,
            count,
            sortComments,
            Up,
            Display,
            Down
        }
    },
});
</script>

<style lang="scss" scoped>
.UserDetail {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}
.current {
    background-color: var(--base-color);
    color: #fff;
}
.font-xs-small {
    font-size: .85rem
}
.description {
    font-size: 0.9rem;
    line-height: 1rem;
}
.user_profile {
    z-index: 4;  
    .user_header {
        height: 20% !important;
        background-repeat: no-repeat;
        position: relative;
        background-size: cover;
        background-position: center center;
        object-fit: cover;
        .user_img {
            right: 1rem;
            bottom: -2vh;
            position: absolute;
            z-index: 5;
        }
    }
}


@media screen and (max-width: 900px) {
    .description {
        font-size: 0.75rem
    }
    .font-xs-small {
        font-size: .65rem
    }
    .user_profile {
        .user_header {
            height:15vh;
            position: relative;
            background-size: cover;
            background-position: center center;
            object-fit: cover;
            .user_img {
                width: 60px !important;
                height: 60px !important;
                right: 1rem;
                bottom: -2vh;
                position: absolute;
                z-index: 5;
            }
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 900px) {
    .user_profile {
        .user_header {
            height: 20% !important;
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 796px) {
    .description {
        font-size: 0.8rem !important;
        line-height: 0.8rem;
    }
}


@media screen and (max-width: 576px) {
    .user_profile {
        .user_header {
            height: 30vh !important;
            position: relative;
            background-size: cover;
            background-position: center center;
            object-fit: cover;
            .user_img {
                width: 90px !important;
                height: 90px !important;
                right: 1rem;
                bottom: -2vh;
                position: absolute;
                z-index: 5;
            }
        }
    }
}
</style>