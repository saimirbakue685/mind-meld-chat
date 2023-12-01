/* filename: sophisticated_code.js */ 

// This code implements a complex solution for a social media website where users can post messages, follow other users, and view their timelines.

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.following = [];
    this.posts = [];
  }
  
  follow(user) {
    this.following.push(user);
  }
  
  post(message) {
    const post = new Post(this.username, message);
    this.posts.push(post);
  }
  
  getTimeline() {
    let timeline = [];
    for (let i = 0; i < this.posts.length; i++) {
      timeline.push(this.posts[i]);
    }
    for (let i = 0; i < this.following.length; i++) {
      const user = this.following[i];
      for (let j = 0; j < user.posts.length; j++) {
        timeline.push(user.posts[j]);
      }
    }
    timeline.sort((a, b) => b.timestamp - a.timestamp);
    return timeline.map(post => post.message);
  }
}

class Post {
  constructor(author, message) {
    this.author = author;
    this.message = message;
    this.timestamp = new Date().getTime();
  }
}

// Usage

const john = new User("John Doe", "john@example.com");
const jane = new User("Jane Smith", "jane@example.com");
const sarah = new User("Sarah Johnson", "sarah@example.com");

john.follow(jane);
john.follow(sarah);

jane.post("Hello, World!");
sarah.post("I love coding!");

john.getTimeline(); // Returns ["I love coding!", "Hello, World!"]