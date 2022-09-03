// Constructor Functions:
// We are going to use a consructor function to create a post object. 
// But this constructor function is different. 
let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}