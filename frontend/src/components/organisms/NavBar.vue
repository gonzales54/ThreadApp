<template>
    <header class="header w-100 mb-5 px-sm-5 px-3">
      <nav class="px-0 py-2 navbar navbar-expand-sm navbar-dark">
        <RouterLinkAtomVue :link="{to: '/', msg: 'Thread App'}" class="navbar-brand h1 mb-0"></RouterLinkAtomVue>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <template v-if="store.state.loginCheck === true">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-md-3">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">ホーム <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ユーザー
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link to="/user/userdetail" class="dropdown-item">ユーザー詳細</router-link>
                  <router-link to="/user/createthread" class="dropdown-item">スレッド作成</router-link>
                  <div class="dropdown-divider"></div>
                  <ButtonAtomVue @click="logout()" :button="{type: 'button', msg: 'ログアウト'}" class="dropdown-item"></ButtonAtomVue>
                </div>
              </li>
            </ul>       
          </div>
        </template>
        <template v-else>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-md-3">
              <li class="nav-item mr-sm-2">
                <RouterLinkAtomVue :link="{to: '/login', msg: 'ログイン'}" class="login nav-link active px-sm-3 py-sm-2"></RouterLinkAtomVue>
              </li>
              <li class="nav-item ml-sm-2">
                <RouterLinkAtomVue :link="{to: '/register', msg: 'ユーザー登録'}" class="register nav-link active px-sm-3 py-sm-2"></RouterLinkAtomVue>
              </li>
            </ul>       
          </div>
        </template>
      </nav>
    </header>
  </template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ButtonAtomVue from '../atoms/ButtonAtom.vue';
import RouterLinkAtomVue from '../atoms/RouterLinkAtom.vue';
  
export default defineComponent({
    name: "HomeView",
    components: {
      ButtonAtomVue,
      RouterLinkAtomVue
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const userMobile = ref(window.innerWidth);

        const getMobile = (): void => {
            userMobile.value = window.innerWidth;
        };

        const logout = () => {
          store.dispatch('logout')
          router.go(0);
          alert('ログアウトしました');
        }

        onMounted((): void => {
            window.addEventListener('resize', getMobile);
        });

        onBeforeUnmount((): void => {
            window.removeEventListener('resize', getMobile);
        });

        return {
            store,
            userMobile,
            logout
        }
    },
});
</script>

<style lang="scss" scoped>
@import '../../assets/base.css';
.header {
    background: var(--base-color);
    font-family: 'Noto Serif JP', serif;
    .navbar {
      .navbar-brand {
          font-family: 'Baskervville', serif;
      }
      .collapse {
          .navbar-nav {
          .nav-item {
              .register {
                color: var(--base-color);
                background: var(--choice-color);;
                font-family: 'Noto Serif JP', serif;
                }
                .login {
                color: var(--choice-color);
                background: var(--sub-color);
                font-family: 'Noto Serif JP', serif;
                }
            }
          }
      }
    }
}
@media screen and (max-width: 800px) {
  .header {
    .navbar {
      .collapse {
        .navbar-nav {
            .nav-item {
              .register {
                  color: var(--base-color);
                  background: var(--choice-color);
                  font-family: 'Noto Serif JP', serif;
              }
              .login {
                  color: var(--choice-color);
                  background: var(--sub-color);;
                  font-family: 'Noto Serif JP', serif;
              }
            }
          }
        }
      }
    }
}
@media screen and (max-width: 575px) {
  .header {
    .navbar {
        .collapse {
        .navbar-nav {
            .nav-item {
            .register {
                color: var(--choice-color);
                background: none;
                font-family: 'Noto Serif JP', serif;
            }
            .login {
                color: var(--choice-color);
                background: none;
                font-family: 'Noto Serif JP', serif;
            }
            }
        }
        }
    }
    }
}
</style>