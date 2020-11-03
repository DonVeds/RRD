// import { renderEntireTree } from "../render";
let store = {

  _state: {
    profilePageData: {
      posts: [
        { id: "1", title: "Hi", text: "Hello to all my friends", likesCount: "12" },
        { id: "2", title: "Weather", text: "Today is really cold", likesCount: "11" },
        { id: "3", title: "test post", text: "post", likesCount: "10" },
        { id: "4", title: "test post", text: "post", likesCount: "10" },
        { id: "5", title: "test post", text: "post", likesCount: "10" }
      ],
      newPostText: ""
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
      return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    let newPost = {
      id: this._state.profilePageData.posts.length + 1,
      text: this._state.profilePageData.newPostText,
      likesCount: 0,
    };
    this._state.profilePageData.posts.push(newPost);
    this._state.profilePageData.newPostText = "";
    debugger
    //Не очищает поле ввода, возможна ошибка в _CallSubscriber
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePageData.newPostText = newText;
    this._callSubscriber(this._state);
  },


  dispatch(action){
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText)
    }
  }


}

export default store;
Window.store = store;