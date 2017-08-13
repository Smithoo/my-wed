<template>
	<div id="comments">
		<div class="contents-wrap">
			<section-title :label="label" :icon="icon"></section-title>
			<form class="comment-form" v-on:submit.prevent="pushComment">
				<ul>
					<li>
						<label for="name">Name</label>
						<input type="text" name="name" v-model="name" maxlength="10" />
						<span>이름을 입력해주세요</span>
					</li>
					<li>
						<label for="msg">Message</label>
						<textarea type="text" name="msg" v-model="message" maxlength="100" ref="msg"/>
						<span>메시지를 입력해주세요</span>
					</li>
					<li>
						<input type="submit" value="추가" />
					</li>
				</ul>
			</form>
			<ul class="comment-list">
				<li v-for="comment in comments">
					<div class="comment-header">
						<p class="comment-name">{{comment.name}}</p>
						<p class="comment-date">{{comment.date}}</p>
					</div>
					<div class="comment-body">
						{{comment.message}}
					</div>
					<div class="clr"></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import SectionTitle from "./SectionTitle";

export default {
    name: "comments",
	props: ["commentsRef"],
	components: {SectionTitle},
	firebase: function() {
        return {
            comments: this.commentsRef
        };
    },
    data () {
        return {
			icon: "question_answer",
			label: "방명록",
			name: "",
			message: "",
			date: ""
        };
    },
	watch: {
		message() {
			const textarea = this.$refs.msg;
			this.adjustTextareaHeight(textarea);
		}
	},
    methods: {
        pushComment: function() {
			if (!this.name || !this.message) {
				return;
			}

			var currentdate = new Date();
			var datetime = currentdate.getFullYear() + "-"
				+ (currentdate.getMonth() + 1) + "-"
				+ currentdate.getDate() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
			this.date = datetime;
            this.commentsRef.push({
				name: this.name,
				message: this.message,
				date: this.date
			});
            this.name = "";
            this.message = "";
            this.date = "";
        },
		adjustTextareaHeight(h) {
			h.style.height = "20px";
			h.style.height = (h.scrollHeight)+"px";
		}
    }
}
</script>
<style>
#comments {
	 background-color: #ffe5e5;
}
.comment-form {
    max-width:400px;
    margin:0px auto;
    border-radius:2px;
    padding:20px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.comment-form ul {
    list-style:none;
    padding:0;
    margin:0;
}
.comment-form li {
    display: block;
    padding: 9px;
    border:1px solid #DDDDDD;
	background-color: #ffffff;
    margin-bottom: 25px;
    border-radius: 3px;
}
.comment-form li:last-child{
    border:none;
    margin-bottom: 0px;
    text-align: center;
	background-color: transparent;
}
.comment-form li > label{
    display: block;
    float: left;
    margin-top: -19px;
    background: #FFFFFF;
    height: 14px;
    padding: 2px 5px 2px 5px;
    color: #B9B9B9;
    font-size: 14px;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
	border-top: 1px solid #DDDDDD;
	border-radius: 5px;
}
.comment-form input[type="text"],
.comment-form textarea,
.comment-form select
{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
    display: block;
    outline: none;
    border: none;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    padding: 0;
    font-family: Georgia, "Times New Roman", Times, serif;
	color: #888;
}
.comment-form li > span {
    background: #F1F1F1;
    display: block;
    padding: 3px;
    margin: 0 -9px -9px -9px;
    text-align: center;
    color: #C0C0C0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
}
.comment-form textarea{
    resize:none;
}
.comment-form input[type="submit"],
.comment-form input[type="button"]{
    background: #eacd1f;
    border: none;
    padding: 6px 25px;
    border-bottom: 3px solid #FCE781;
    border-radius: 3px;
    color: #fff;
	font-weight: 600;
	width: 80px;
	height: 35px;
}
.comment-form input[type="submit"]:hover,
.comment-form input[type="button"]:hover{
    background: #F4D862;
    color:#fff;
}
.comment-list {
	margin: 0;
	border: 0;
	padding: 0;
	text-align: left;
}
.comment-list li {
	padding: 10px 20px;
	line-height: 20px;
	min-height: 25px;
}
.comment-list .comment-header {
	float: left;
	width: 30%;
}
.comment-list .comment-name {
	font-weight: 800;
}
.comment-list .comment-date {
	font-size: 6px;
	color: #bbb;
}
.comment-list .comment-body {
	float: left;
	width: 70%;
	border-left: 3px solid #999;
	padding-left: 12px;
	box-sizing: border-box;
}
.comment-list .clr {
	clear: both;
}
</style>
