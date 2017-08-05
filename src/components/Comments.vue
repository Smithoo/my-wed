<template>
	<section id="comments">
		<form v-on:submit.prevent="pushComment">
		  <h2>방명록</h2>
		  <p>
			  <input type="text" v-model="newComment.name" placeholder="이름을 입력하세요" />
		  </p>
		  <p>
			  <textarea type="text" v-model="newComment.message" placeholder="메시지를 입력하세요" />
		  </p>
		  <input type="submit" value="추가" />
		</form>
		<ul class="commentList">
			<li v-for="comment in comments">
				이름: {{comment.name}}
				<br>
				메시지: {{comment.message}}
			</li>
		</ul>
	</section>
</template>
<script>
export default {
    name: "comments",
	props: ["commentsRef"],
	firebase: function() {
        return {
            comments: this.commentsRef
        };
    },
    data () {
        return {
            newComment: {
                name: "",
                message: "",
                date: ""
            }
        }
    },
    computed: {
    },
    methods: {
        pushComment: function() {
			var currentdate = new Date();
			var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
			this.newComment.date = datetime;
            this.commentsRef.push(this.newComment);
            this.newComment.name = "";
            this.newComment.message = "";
            this.newComment.date = "";
        },
        removeBook: function(book) {
            // this.books.child(book['.key']).remove();
        }
    }
}
</script>
<style>
.commentList {
	margin: 0;
	border: 0;
	padding: 0;
	text-align: left;
	margin-top: 30px;
	list-style: none;
}
.commentList li {
	padding: 10px;
	border: #111 solid 1px;
	line-height: 20px;
}
</style>
