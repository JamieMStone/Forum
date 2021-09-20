const {
    User,
    Comment,
    Forum,
    Post
} = require("./Classes.js");


test("New User", () => {
    let Jamie = new User("JamieS");
    expect(Jamie.username).toBe("JamieS");
});

test("New Forum", () => {
    let Garden = new Forum("Garden");
    expect(Garden.title).toBe("Garden");
});

test("New Post", () => {
    let Jamie = new User("JamieS");
    let Garden = new Forum("Garden");
    let Flower = new Post(Garden, "Rose", "Today", Jamie, "This is a rose");
    expect(Flower.title).toBe("Rose");
});

test("New Comment", () => {
    let Jamie = new User("JamieS");
    let Garden = new Forum("Garden");
    let Flower = new Post(Garden, "Rose", "Today", Jamie, "This is a rose");
    let Comment1 = new Comment(Flower, "Today", Jamie, "Nice");
    expect(Comment1.text).toBe("Nice");
});