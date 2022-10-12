<template>
    <div class="UserUpdate">
        <NavBar></NavBar>
        <main class="mb-5 px-sm-5 px-3 pt-1 overflow-hidden">
            <template v-if="store.state.userMobile > 768">
                <div class="w-50 mx-auto px-sm-4 py-sm-4  bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ユーザー情報編集'}"></BigTitleAtomVue>
                    <form method="post" enctype="multipart/form-data" class="mb-3 text-left">
                        <div class="form-group">
                            <label for="thread_title">ユーザー名</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="name" autocomplete="on" placeholder="ユーザー名を入力してください"/>
                        </div>
                        <div class="form-group">
                            <label for="genre">自己紹介</label>
                            <textarea name="introduction" id="introduction" class="form-control shadow-none" v-model="introduction" cols="30" rows="4" placeholder="自己紹介を入力してください"></textarea>
                        </div>
                        <div class="image-form-group d-flex form-group">
                            <div class="w-50 px-1">
                                プロフィール画像
                                <img :src="`${fileProfilePath}`" class="w-100 mt-1 mb-3 image-preview border">
                                <label class="w-100 px-1 py-2 text-center">
                                    <input type="file" name="" id="" ref="fileProfileImage" @change="changeFile">ファイル選択
                                </label>
                                <p>{{ profileMsg }}</p>
                            </div>
                            <div class="w-50 px-1">
                                背景画像
                                <img :src="`${fileBackgroundPath}`" class="w-100 mt-1 mb-3 image-preview border">
                                <label class="w-100 px-1 py-2 text-center d-block">
                                    <input type="file" name="" id="" ref="fileBackgroundImage" @change="changeFile">ファイル選択
                                </label>
                                <p>{{ backgroundMsg }}</p>
                            </div>
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg :'更新'}" @click="upDate"></ButtonAtomVue>
                    </form>
                    <RouterLinkAtomVue :link="{to: '/', msg: 'ホームに戻る'}" class="text-primary" style="text-decoration: underline"></RouterLinkAtomVue>
                </div>       
            </template>

            <template v-else>
                <div class="w-100 mt-5 mx-auto px-sm-4 px-3 py-sm-4 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ユーザー情報編集'}"></BigTitleAtomVue>
                    <form method="post" enctype="multipart/form-data" class="mb-3 text-left">
                        <div class="form-group">
                            <label for="thread_title">ユーザー名</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="name" autocomplete="on" placeholder="ユーザー名を入力してください" />
                        </div>
                        <div class="form-group">
                            <label for="thread_title">自己紹介</label>
                            <textarea name="introduction" id="introduction" class="form-control shadow-none" v-model="introduction" cols="30" rows="6" placeholder="自己紹介を入力してください"></textarea>
                        </div>
                        <div class="image-form-group d-flex form-group">
                            <div class="w-50 px-1">
                                プロフィール画像
                                <img :src="`${fileProfilePath}`" class="w-100 mt-1 mb-3 image-preview border">
                                <label class="w-100 px-1 py-2 text-center">
                                    <input type="file" name="" id="" ref="fileProfileImage" @change="changeFile">ファイル選択
                                </label>
                                <p>{{ profileMsg }}</p>
                            </div>
                            <div class="w-50 px-1">
                                背景画像
                                <img :src="`${fileBackgroundPath}`" class="w-100 mt-1 mb-3 image-preview border">
                                <label class="w-100 px-1 py-2 text-center d-block">
                                    <input type="file" name="" id="" ref="fileBackgroundImage" @change="changeFile">ファイル選択
                                </label>
                                <p>{{ backgroundMsg }}</p>
                            </div>
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg :'更新'}" @click="upDate"></ButtonAtomVue>
                    </form>
                    <RouterLinkAtomVue :link="{to: '/', msg: 'ホームに戻る'}" class="text-primary" style="text-decoration: underline"></RouterLinkAtomVue>
                </div>     
            </template>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>
<script lang="ts">
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import RouterLinkAtomVue from '@/components/atoms/RouterLinkAtom.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LoginView',
    components: {
        BigTitleAtomVue,
        ButtonAtomVue,
        RouterLinkAtomVue
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const name = ref<string>('');
        const introduction = ref<string>('');
        const fileProfileImage = ref(null);
        const fileBackgroundImage = ref(null);
        const profileMsg = ref('選択されていません');
        const backgroundMsg = ref('選択されていません');
        const fileProfilePath = ref(store.state.user.profile_picture);
        const fileBackgroundPath = ref(store.state.user.background_picture);

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        const upDate = (e) => {
            e.preventDefault()
            if(name.value === '') {
                name.value = store.state.user.name;
            } 
            
            if(introduction.value === '') {
                introduction.value = store.state.user.introduction ;
            } 
            
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('introduction', introduction.value);
            if(fileProfileImage.value.files.length !== 0) {
                formData.append('profile', fileProfileImage.value.files[0]);
            } else {
                formData.append('profile', '');
            }
            if(fileBackgroundImage.value.files.length !== 0) {
                formData.append('background', fileBackgroundImage.value.files[0]);
            } else {
                formData.append('background', '');
            }
            
            store.dispatch('updateUser', {id: store.state.user.id, formData});
            router.go(-1);
        }

        const changeFile = (): void => {
            if(fileProfileImage.value.files.length !== 0) {
                let file = fileProfileImage.value.files[0];
                fileProfilePath.value = URL.createObjectURL(file);
                profileMsg.value = file.name;
            }
            if(fileBackgroundImage.value.files.length !== 0) {
                let file = fileBackgroundImage.value.files[0];
                fileBackgroundPath.value = URL.createObjectURL(file);
                backgroundMsg.value = file.name;
            }
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
            name,
            introduction,
            fileProfileImage,
            fileBackgroundImage,
            profileMsg,
            backgroundMsg,
            fileProfilePath,
            fileBackgroundPath,
            upDate,
            changeFile
        }
    },
});
</script>

<style lang="scss">
.LoginView {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }

}
.image-form-group {
    div {
        label {
            color: #fff;
            background: var(--base-color);
            input[type="file"] {
                display: none;
            }            
        }

        .image-preview {
            height: 12.5vh;
        }   
        p {
            table-layout: fixed;
            word-wrap: break-word;
        }
    }
 
}

@media screen and (max-width: 768px) {
    .image-preview {
        height: 7vh;
    }
}
</style>