<template>
    <div id="main">
        <hello></hello>
        <info></info>
        <card></card>
        <kakao-link></kakao-link>
        <photos :storageRef="storageRef"></photos>
        <photo360></photo360>
        <naver-map></naver-map>
        <comments :commentsRef="commentsRef"></comments>
    </div>
</template>
<script>
import Hello from "./Hello";
import Info from "./Info";
import KakaoLink from "./KakaoLink";
import Card from "./Card";
import Photos from "./Photos";
import Photo360 from "./Photo360";
import NaverMap from "./NaverMap";
import Comments from "./Comments";

export default {
    name: "main",
    props: ["storageRef", "commentsRef"],
    components: {
		Hello, Info, KakaoLink, Card, Photos, Photo360, NaverMap, Comments
	},
    data: () => ({

    })
}
</script>
<style scoped>
</style>
