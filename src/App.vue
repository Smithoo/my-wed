<template>
  <div id="app">
    <hello></hello>
    <info></info>
    <card></card>
	<kakao-link></kakao-link>
    <photos :photoRef="photoRef"></photos>
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

export default {
	name: "app",
	components: {
		Hello, Info, KakaoLink, Card, Photos, Photo360, NaverMap, Comments
	},
	data() {
		return {
            photoRef: storage.ref(),
			commentsRef: db.ref("comments")
		};
	}
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/jejugothic.css);
html,body{width:100%;height:100%}
html{overflow-y:scroll; font-size:10px; font:inherit;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,form,fieldset,p,button{margin:0;padding:0;border:0;}
body{background-color:#fff;*word-break:break-all;-ms-word-break:break-all;line-height:1}
header,aside,article,nav,main,section,details,figcaption,figure,footer,hgroup,menu{display:block;}
img,fieldset,iframe{border:0 none}
input,select,button{vertical-align:middle;outline:none}
input:focus,select:focus,textarea:focus,button:focus{outline:none}
img{vertical-align:top}
label,button{cursor:pointer; font-family: inherit;}
button{margin:0;padding:0;background-color: transparent;}
a{text-decoration:none;color:#000}
button *{position:relative}
option{padding-right:6px}
legend{*width:0}
table{border-collapse:collapse;border-spacing:0}
ol,ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}
iframe{vertical-align:top}
#app {
  text-align: center;
}
.contents-wrap {
    width: 100%;
    max-width: 600px;
    margin: auto;
    margin-bottom: 20px;
}
</style>
