<template>
  <div id="app">
    <hello></hello>
    <info></info>
    <card></card>
	<kakao-link></kakao-link>
    <photos></photos>
    <photo360></photo360>
    <naver-map></naver-map>
    <comments :commentsRef="commentsRef"></comments>
  </div>
</template>

<script>
import config from "./assets/config";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import Hello from "./components/Hello";
import Info from "./components/Info";
import KakaoLink from "./components/KakaoLink";
import Card from "./components/Card";
import Photos from "./components/Photos";
import Photo360 from "./components/Photo360";
import NaverMap from "./components/NaverMap";
import Comments from "./components/Comments";

let firebaseApp = null;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config.firebaseConfig);
}
const db = firebaseApp.database();
const storage = firebaseApp.storage();
const commentsRef = db.ref("comments");

export default {
	name: "app",
	components: {
		Hello, Info, KakaoLink, Card, Photos, Photo360, NaverMap, Comments
	},
	data() {
		return {
			commentsRef: commentsRef
		};
	}
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/jejugothic.css);
body {
    margin: 0;
	border: 0;
	padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
