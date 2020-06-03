import { renderEntireTree } from "../render";

let state = {
  profilePageData: {
    posts: [
      { id: "1", title: "Hi", text: "Hello to all my friends", likesCount: "12" },
      { id: "2", title: "Weather", text: "Today is really cold", likesCount: "11" },
      { id: "3", title: "test post", text: "post", likesCount: "10" },
      { id: "4", title: "test post", text: "post", likesCount: "10" },
      { id: "5", title: "test post", text: "post", likesCount: "10" }
    ],
    newPostText: "Какой хороший пост"
  },
  messagesPageData: {
    dialogs: [
      { id: "1", name: "Misha" },
      { id: "2", name: "Masha" },
      { id: "3", name: "Mosha" },
      { id: "4", name: "Musha" },
      { id: "5", name: "Mesha" }
    ],
    messages: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How are you?" },
      { id: "3", message: "What a good day" },
      { id: "4", message: "We are near shipyard" },
      { id: "5", message: "Karamba" }
    ]
  }
};

export let addPost = () => {
  let newPost = {
    id: state.profilePageData.posts.length + 1, 
    text: state.profilePageData.newPostText,
    likesCount: 0
  };
  state.profilePageData.posts.push(newPost);
  state.profilePageData.newPostText = "";
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePageData.newPostText = newText;
  renderEntireTree(state);
};

export default state