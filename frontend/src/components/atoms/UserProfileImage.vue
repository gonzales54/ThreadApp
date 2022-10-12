<template>
    <img :src="(profileImage as ProfileImage).src" alt="" :style="('width: ' + (profileImage as ProfileImage).width + 'px;' + 'height: ' + (profileImage as ProfileImage).height + 'px;')">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ProfileImage {
    src: string,
    width: number,
    height: number
 }

export default defineComponent({
    name: 'UserProfileImage',
    props: {
        profileImage: {
            type: Object as () => ProfileImage
        }
    },
});
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
}
</style>