<template>
    <p>{{ CommentTime(time) }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['time'],

    setup() {
        const CommentTime = (Comment_time: Date) => {
            Comment_time = new Date(Comment_time);
            let year = String(Comment_time.getFullYear());
            let month = String(Comment_time.getMonth() + 1);
            let day = String(Comment_time.getDate());
            let hour = String(Comment_time.getHours() + 9);
            if(Number(hour) > 24) {
                hour = String(Number(hour) - 24);
            }
            let minute = String(Comment_time.getMinutes());
            let second = String(Comment_time.getSeconds());

            month = ('0' + month).slice(-2);
            day = ('0' + day).slice(-2);
            hour = ('0' + hour).slice(-2);
            minute = ('0' + minute).slice(-2);
            second = ('0' + second).slice(-2);

            let format_string = 'YYYY-MM-DD hh:mm:ss';
            format_string = format_string.replace(/YYYY/g, year);
            format_string = format_string.replace(/MM/g, month);
            format_string = format_string.replace(/DD/g, day);
            format_string = format_string.replace(/hh/g, hour);
            format_string = format_string.replace(/mm/g, minute);
            format_string = format_string.replace(/ss/g, second);
            
            return format_string;
        };

        return {
            CommentTime
        }
    }
});
</script>