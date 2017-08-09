<template>
  <div id="app">
    <hello></hello>
    <info></info>
    <card></card>
    <photos></photos>
    <photo360></photo360>
    <naver-map></naver-map>
    <comments :commentsRef="commentsRef"></comments>
  </div>
</template>

<script>
import firebase from "firebase";
import Hello from "./components/Hello";
import Info from "./components/Info";
import Card from "./components/Card";
import Photos from "./components/Photos";
import Photo360 from "./components/Photo360";
import NaverMap from "./components/NaverMap";
import Comments from "./components/Comments";

const config = {
    apiKey: "AIzaSyC_j14hQSTTSK34HJ7IgCGFAk46LThlnPo",
    authDomain: "smithoo-cb60c.firebaseapp.com",
    databaseURL: "https://smithoo-cb60c.firebaseio.com",
    projectId: "smithoo-cb60c",
    storageBucket: "smithoo-cb60c.appspot.com",
    messagingSenderId: "297752471122"
};

let firebaseApp = null;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config);
}
const db = firebaseApp.database();
const storage = firebaseApp.storage();
const commentsRef = db.ref("comments");

export default {
	name: "app",
	components: {
		Hello, Info, Card, Photos, Photo360, NaverMap, Comments
	},
	data: function() {
		return {
			commentsRef: commentsRef
		};
	}
}
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
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
