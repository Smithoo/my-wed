<template>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-4">
            <div class="box">
              <form id="form" class="form-inline" v-on:submit.prevent="addBook">
                <label for="bookTitle" class="label">책 제목</label>
                <p class="control"><input type="text" id="bookTitle" class="input" v-model="newBook.title" placeholder="제목을 입력하세요"></p>
                <label for="bookAuthor" class="label">저자</label>
                <p class="control"><input type="text" id="bookAuthor" class="input" v-model="newBook.author" placeholder="저자를 입력하세요"></p>
                <label for="bookUrl" class="label">링크</label>
                <p class="control"><input type="text" id="bookUrl" class="input" v-model="newBook.url"></p>
                <input type="submit" class="button is-primary is-medium is-fullwidth" value="책 추가">
              </form>
            </div>
          </div>
          <div class="column">
              <table class="table is-bordered">
                <thead>
                <tr>
                  <th>제목</th>
                  <th>저자</th>
                  <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="book in booksRef">
                  <td><a>{{book.url}} /// {{book.author}} /// {{book.title}}</a></td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    name: "books",
	props: ["books"],
	firebase: function() {
        return {
            booksRef: this.books
        }
    },
    data () {
        return {
            newBook: {
                title: '',
                author: '',
                url: 'http://'
            }
        }
    },
    computed: {
        validation: function () {
            return {
                title: !!this.newBook.title.trim(),
                author: !!this.newBook.author.trim()
                // url:
            }
        },
        isValid: function () {
            var validation = this.validation
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        }
    },
    methods: {
        addBook: function () {
            if (this.isValid) {
                this.books.push(this.newBook);
                this.newBook.title = '';
                this.newBook.author = '';
                this.newBook.url = 'http://';
            }
        },
        removeBook: function (book) {
            this.books.child(book['.key']).remove();
        }
    }
}
</script>

<style scope>
  .control:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
