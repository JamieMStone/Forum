let comments = [];
let posts = [];

class User {
    constructor(username){
        this.username = username;
    }

    getPosts(){
        for (let value of posts){
            if (value.author == this.username){
                console.log(value);
            }
        }
    }
}
class Forum {
    constructor(title){
        this.title = title;
        
    }

    getPosts(){
        for (let value of posts){
            if (value.forum.title == this.title){
                console.log(value);
            }
        }
    }

}

class Post{
    constructor(forum, title, date, author, text){
        this.forum = forum;
        this.title = title;
        this.date = date;
        this.author = author.username;
        this.text = text;
        posts.push(this);
    }

    getComments(){
        for (let value of comments) {
            if (value.post.title == this.title){
                console.log(value);
            }
        }
    }
}

class Comment {
    constructor(post, date, author, text){
        this.post = post;
        this.date = date;
        this.author = author.username;
        this.text = text;

        comments.push(this);
    }
}

let Garden = new Forum("Gardening");
let Jamie = new User("JamieS13")


let Tree = new Post(Garden, "Birch", "3rd of May", Jamie, "This is a birch tree");

let comment1 = new Comment(Flower, "2nd of May", Jamie, "Nice");
let comment2 = new Comment(Flower, "2nd of May", Jamie, "Bad");
let comment3 = new Comment(Tree, "2nd of May", Jamie, "Not nice");


console.log(Flower.getComments());
console.log("Break")
console.log(Jamie.getPosts());

module.exports = {User, Forum, Comment, Post};