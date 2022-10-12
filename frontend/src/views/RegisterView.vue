<template>
    <div class="RegisterView">
        <NavBar></NavBar>
        <main class="mb-5 px-sm-5 px-3 pt-4 overflow-hidden">
            <template v-if="store.state.userMobile > 768">
                <div class="w-50 mt-5 mx-auto px-sm-4 px-3 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ユーザー登録'}"></BigTitleAtomVue>
                    <form class="text-left" @submit.prevent="registerUser()">
                        <div class="form-group">
                            <label for="user_name">ユーザー名</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="name" autocomplete="on" placeholder="ユーザー名を入力してください" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Eメール</label>
                            <input type="email" name="email" id="email" class="form-control" v-model="email" autocomplete="on" placeholder="Eメールを入力してください" required />
                        </div>
                        <div class="form-group">
                            <label for="password">パスワード</label>
                            <input type="password" id="password" class="form-control" name="password" v-model="password" placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">パスワード(再入力)</label>
                            <input type="password" id="password_confirmation" class="form-control" name="password_confirmation" v-model="password_confirmation"  placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg: '登録'}"></ButtonAtomVue>
                    </form>
                </div>                
            </template>
            <template v-else>
                <div class="w-100 mt-5 mx-auto px-sm-4 px-3 py-sm-5 py-4 bg-white text-center align-items-center border">
                    <BigTitleAtomVue class="h2 mb-4 d-inline-block" :msg="{msg:'ユーザー登録'}"></BigTitleAtomVue>
                    <form class="text-left" @submit.prevent="registerUser()">
                        <div class="form-group">
                            <label for="thread_title">ユーザー名</label>
                            <input type="text" name="name" id="name" class="form-control" v-model="name" placeholder="ユーザー名を入力してください" autocomplete="on"  required />
                        </div>
                        <div class="form-group">
                            <label for="thread_title">Eメール</label>
                            <input type="email" name="email" id="email" class="form-control" v-model="email" placeholder="Eメールを入力してください" autocomplete="on" required />
                        </div>
                        <div class="form-group">
                            <label for="genre">パスワード</label>
                            <input type="password" id="password" class="form-control" name="password" v-model="password" placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <div class="form-group">
                            <label for="genre">パスワード(再入力)</label>
                            <input type="password" id="password_confirmation" class="form-control" name="password_confirmation" v-model="password_confirmation" placeholder="パスワードを入力してください" autocomplete="on" required />
                        </div>
                        <ButtonAtomVue class="btn btn-block" :button="{type: 'submit', msg: '登録'}"></ButtonAtomVue>
                    </form>
                </div>                
            </template>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import BigTitleAtomVue from '@/components/atoms/BigTitleAtom.vue';
import ButtonAtomVue from '@/components/atoms/ButtonAtom.vue';
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        BigTitleAtomVue,
        ButtonAtomVue
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const name = ref<string>('');
        const email = ref<string>('');
        const password = ref<string>('');
        const password_confirmation = ref<string>('');

        const getMobile = (): void => {
            store.commit('setUserMobile', window.innerWidth);
        };

        const registerUser = () => {
            axios.post('/api/register', {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value
            })
            .then((res) => {
                console.log(res.data.status_code)
                if(res.data.status_code === 200) {
                    router.push('/login')
                }
            })
            .catch((err) => {
                console.log(err)
            })
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
            email,
            password,
            password_confirmation,
            registerUser
        }
    },
});
</script>

<style lang="scss">
.RegisterView {
    min-height: 100vh;
    main {
        min-height: calc(100vh - calc(56px + 40px + calc(3rem + 3rem)));
    }
}
</style>