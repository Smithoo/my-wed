<template>
    <div id="main">
        <hello></hello>
        <info></info>
		<names></names>
		<card></card>
        <photos :storageRef="storageRef"></photos>
        <photo360></photo360>
		<how-to-come></how-to-come>
        <kakao-link></kakao-link>
        <comments :commentsRef="commentsRef"></comments>
    </div>
</template>
<script>
import Hello from "./Hello";
import Info from "./Info";
import Names from "./Names";
import Card from "./Card";
import KakaoLink from "./KakaoLink";
import Photos from "./Photos";
import Photo360 from "./Photo360";
import HowToCome from "./HowToCome";
import Comments from "./Comments";

export default {
    name: "main",
    props: ["storageRef", "commentsRef"],
    components: {
		Hello, Info, Names, Card, KakaoLink, Photos, Photo360, HowToCome, Comments
	}
}
</script>
<style scoped>
</style>
