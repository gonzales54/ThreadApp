<template>
    <div class="LoginView">
        <NavBar></NavBar>
        <main class="mb-5 px-sm-5 px-3 pt-4 overflow-hidden">
            <template v-if="store.state.userMobile > 768">
                <div class="w-50 mt-5 mx-auto px-sm-4 px-4 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ログイン'}"></BigTitleAtomVue>
                    <form class="text-left" @submit.prevent="login()">
                        <div class="form-group">
                            <label for="thread_title">Eメール</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="email" placeholder="Eメールを入力してください" autocomplete="on" required />
                        </div>
                        <div class="form-group">
                            <label for="genre">パスワード</label>
                            <input type="password" id="password" class="form-control" name="password" v-model="password" placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg :'ログイン'}"></ButtonAtomVue>
                    </form>
                </div>   
            </template>

            <template v-else>
                <div class="w-100 mt-5 mx-auto px-sm-4 px-3 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ログイン'}"></BigTitleAtomVue>
                    <form class="text-left" @submit.prevent="login()">
                        <div class="form-group">
                            <label for="thread_title">Eメール</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="email" placeholder="Eメールを入力してください" autocomplete="on" required />
                        </div>
                        <div class="form-group">
                            <label for="genre">パスワード</label>
                            <input type="password" id="password" class="form-control" name="password" v-model="password" placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg :'ログイン'}"></ButtonAtomVue>
                    </form>
                </div>   
            </template>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'LoginView',
    components: {
        BigTitleAtomVue,
        ButtonAtomVue
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const email = ref<string>('');
        const password = ref<string>('');
        const getUserMessage = ref<string>('');
        const error = ref<string>('');
        const userMobile = ref(window.innerWidth);

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        onMounted((): void => {
            getMobile();
            window.addEventListener('resize', getMobile);
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

         const login = (): void => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/api/login', {
                        email: email.value,
                        password: password.value,
                    })
                    .then(async (res) => {
                        if(res.data.status_code === 200) {
                            router.push('/')
                            await store.dispatch('getUser')
                        } else {
                            getUserMessage.value = 'ログインに失敗しました。'
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        getUserMessage.value = 'ログインに失敗しました。'
                    })
                })
        }

        return {
            store,
            email,
            password,
            error,
            getUserMessage,
            userMobile,
            login,
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
</style>