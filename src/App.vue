<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import config from "./assets/config";

export default {
	name: "app",
	mounted() {
		Kakao.init(config.kakaoAppKey);
	}
}
</script>
<style>
@import url(https://fonts.googleapis.com/earlyaccess/jejugothic.css);
html,body{position:relative;width:100%;height:100%}
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
    max-width: 500px;
    margin: auto;
	padding-top: 24px;
    padding-bottom: 24px;
	box-sizing: border-box;
}
</style>
