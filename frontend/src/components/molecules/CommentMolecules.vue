<template>
    <template v-if="this.$route.name.match(/home|popular|tag|recent|userdetail/)">
        <li>
            <h4 :class="(comments as Comment).user_style">{{ (comments as Comment).index }} <span class="text-success">{{ (comments as Comment).user_name }} </span> <DisplayTimeAtomVue class="d-inline-block" :time="(comments as Comment).created_at"></DisplayTimeAtomVue></h4>
            <p :class="(comments as Comment).comment_style">{{ (comments as Comment).comment }}</p>
        </li>
    </template>
    <template v-else>
        <li>
            <h4 :class="(comments as Comment).user_style">{{ (comments as Comment).index }} <p class="mx-2 d-inline-block" v-if="$route.name === 'thread_detail'"><UserProfileImageVue :profileImage="{src: (comments as Comment).src, width: (comments as Comment).width, height: (comments as Comment).height}"></UserProfileImageVue></p> <span class="text-success">{{ (comments as Comment).user_name }} </span> <DisplayTimeAtomVue class="d-inline-block" :time="(comments as Comment).created_at"></DisplayTimeAtomVue></h4>
            <p :class="[(comments as Comment).comment_style, Boolean(parseInt((comments as any).bold)) === true ? 'bold-text' : '', Boolean(parseInt((comments as any).italic)) === true ? 'italic-text' : '', Boolean(parseInt((comments as any).underline)) === true ? 'underline-text': '']">{{ (comments as Comment).comment }}</p>
        </li>        
    </template>

</template>

<script lang="ts">
import DisplayTimeAtomVue from '../atoms/DisplayTimeAtom.vue';
import UserProfileImageVue from '../atoms/UserProfileImage.vue';
import { defineComponent } from 'vue';

interface Comment {
    index: number,
    user_name: string,
    created_at: Date,
    comment: string,
    user_style: string,
    comment_style: string,
    src: string,
    width: number,
    height: number,
    bold: boolean|number,
    italic: boolean|number,
    underline: boolean|number
}

export default defineComponent({
    name: 'CommentMolecules',
    components: {
        DisplayTimeAtomVue,
        UserProfileImageVue
    },
    props: {
        comments: {
            type: Object as () => Comment
        }
    },
});
</script>

<style lang="scss" scoped>
.bold-text {
    font-weight: bold;
}
.italic-text {
    font-style: italic;
}
.underline-text {
    text-decoration: underline;
}
</style>

