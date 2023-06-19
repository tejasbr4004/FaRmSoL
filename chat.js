import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyCR5e3NbIzIlyCSXLhAXkuxq8l-qJsWQ98",
    authDomain: "justchat-f4b89.firebaseapp.com",
    projectId: "justchat-f4b89",
    storageBucket: "justchat-f4b89.appspot.com",
    messagingSenderId: "867822878147",
    appId: "1:867822878147:web:d09bca015c7acd646a1176"
  };


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

class MEME_CHAT{


    
    // Home() is used to create the home page
    home(){
      // First clear the body before adding in
      // a title and the join form
      document.body.innerHTML = ''
      this.create_title()
      this.create_join_form()
    }
    // chat() is used to create the chat page
    chat(){
      this.create_title()
      this.create_chat()
    }
    // create_title() is used to create the title
    create_title(){
      // This is the title creator. 🎉
      var title_container = document.createElement('div')
      title_container.setAttribute('id', 'title_container')
      var title_inner_container = document.createElement('div')
      title_inner_container.setAttribute('id', 'title_inner_container')

      var title = document.createElement('h1')
      title.setAttribute('id', 'title')
      title.textContent = 'AGRO_CHAT'

      title_inner_container.append(title)
      title_container.append(title_inner_container)
      document.body.append(title_container)
    }
    // create_join_form() creates the join form
    create_join_form(){
      // YOU MUST HAVE (PARENT = THIS). OR NOT. I'M NOT YOUR BOSS!😂
      var parent = this;

      var join_container = document.createElement('div')
      join_container.setAttribute('id', 'join_container')
      var join_inner_container = document.createElement('div')
      join_inner_container.setAttribute('id', 'join_inner_container')

      var join_button_container = document.createElement('div')
      join_button_container.setAttribute('id', 'join_button_container')

      var join_button = document.createElement('button')
      join_button.setAttribute('id', 'join_button')
      join_button.innerHTML = 'Join <i class="fa-solid fa-right-to-bracket"></i>'

      var join_input_container = document.createElement('div')
      join_input_container.setAttribute('id', 'join_input_container')

      var join_input = document.createElement('input')
      join_input.setAttribute('id', 'join_input')
      join_input.setAttribute('maxlength', 15)
      join_input.placeholder = 'User_Name'
      // Every time we type into the join_input
      join_input.onkeyup  = function(){
        // If the input we have is longer that 0 letters
        if(join_input.value.length > 0){
          // Make the button light up
          join_button.classList.add('enabled')
          // Allow the user to click the button
          join_button.onclick = function(){
            // Save the name to local storage. Passing in
            // the join_input.value
            parent.save_name(join_input.value)
            // Remove the join_container. So the site doesn't look weird.
            join_container.remove()
            // parent = this. But it is not the join_button
            // It is (MEME_CHAT = this).
            parent.create_chat()
          }
        }else{
          // If the join_input is empty then turn off the
          // join button
          join_button.classList.remove('enabled')
        }
      }

      // Append everything to the body
      join_button_container.append(join_button)
      join_input_container.append(join_input)
      join_inner_container.append(join_input_container, join_button_container)
      join_container.append(join_inner_container)
      document.body.append(join_container)
    }
    // create_load() creates a loading circle that is used in the chat container
    create_load(container_id){
      // YOU ALSO MUST HAVE (PARENT = THIS). BUT IT'S WHATEVER THO.
      var parent = this;

      // This is a loading function. Something cool to have.
      var container = document.getElementById(container_id)
      container.innerHTML = ''

      var loader_container = document.createElement('div')
      loader_container.setAttribute('class', 'loader_container')

      var loader = document.createElement('div')
      loader.setAttribute('class', 'loader')

      loader_container.append(loader)
      container.append(loader_container)

    }
    // create_chat() creates the chat container and stuff
    create_chat(){
      // Again! You need to have (parent = this)
      var parent = this;
      // GET THAT MEMECHAT HEADER OUTTA HERE
      var title_container = document.getElementById('title_container')
      var title = document.getElementById('title')
      title_container.classList.add('chat_title_container')
      // Make the title smaller by making it 'chat_title'
      title.classList.add('chat_title')

      var chat_container = document.createElement('div')
      chat_container.setAttribute('id', 'chat_container')

      var chat_inner_container = document.createElement('div')
      chat_inner_container.setAttribute('id', 'chat_inner_container')

      var chat_content_container = document.createElement('div')
      chat_content_container.setAttribute('id', 'chat_content_container')

      var chat_input_container = document.createElement('div')
      chat_input_container.setAttribute('id', 'chat_input_container')

      var chat_input_send = document.createElement('button')
      chat_input_send.setAttribute('id', 'chat_input_send')
      chat_input_send.setAttribute('disabled', true)
      chat_input_send.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`

      var chat_input = document.createElement('input')
      chat_input.setAttribute('id', 'chat_input')
      // Only a max message length of 1000
      chat_input.setAttribute('maxlength', 1000)
      // Get the name of the user
      chat_input.placeholder = `${parent.get_name()}_ Ask your Queries`
      chat_input.onkeyup  = function(){
        if(chat_input.value.length > 0){
          chat_input_send.removeAttribute('disabled')
          chat_input_send.classList.add('enabled')
          chat_input_send.onclick = function(){
            chat_input_send.setAttribute('disabled', true)
            chat_input_send.classList.remove('enabled')
            if(chat_input.value.length <= 0){
              return
            }
            // Enable the loading circle in the 'chat_content_container'
            parent.create_load('chat_content_container')
            // Send the message. Pass in the chat_input.value
            parent.send_message(chat_input.value)
            // Clear the chat input box
            chat_input.value = ''
            // Focus on the input just after
            chat_input.focus()
          }
        }else{
          chat_input_send.classList.remove('enabled')
        }
      }

      var chat_logout_container = document.createElement('div')
      chat_logout_container.setAttribute('id', 'chat_logout_container')

      var chat_logout = document.createElement('button')
      chat_logout.setAttribute('id', 'chat_logout')
      chat_logout.textContent = `${parent.get_name()} • logout`
      // "Logout" is really just deleting the name from the localStorage
      chat_logout.onclick = function(){
        localStorage.clear()
        // Go back to home page
        parent.home()
      }

      chat_logout_container.append(chat_logout)
      chat_input_container.append(chat_input, chat_input_send)
      chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container)
      chat_container.append(chat_inner_container)
      document.body.append(chat_container)
      // After creating the chat. We immediatly create a loading circle in the 'chat_content_container'
      parent.create_load('chat_content_container')
      // then we "refresh" and get the chat data from Firebase
      parent.refresh_chat()
    }  

   
//   create_chat() {
//     var parent = this;
//     var title_container = document.getElementById('title_container');
//     var title = document.getElementById('title');
//     title_container.classList.add('chat_title_container');
//     title.classList.add('chat_title');

//     var chat_container = document.createElement('div');
//     chat_container.setAttribute('id', 'chat_container');

//     var chat_inner_container = document.createElement('div');
//     chat_inner_container.setAttribute('id', 'chat_inner_container');

//     var chat_content_container = document.createElement('div');
//     chat_content_container.setAttribute('id', 'chat_content_container');

//     var chat_input_container = document.createElement('div');
//     chat_input_container.setAttribute('id', 'chat_input_container');

//     var chat_input_send = document.createElement('button');
//     chat_input_send.setAttribute('id', 'chat_input_send');
//     chat_input_send.setAttribute('disabled', true);
//     chat_input_send.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;

//     var chat_input = document.createElement('input');
//     chat_input.setAttribute('id', 'chat_input');
//     chat_input.setAttribute('maxlength', 1000);
//     chat_input.placeholder = `${parent.get_name()}. Say something...`;

//     chat_input.onkeyup = function () {
//       if (chat_input.value.length > 0) {
//         chat_input_send.removeAttribute('disabled');
//         chat_input_send.classList.add('enabled');
//         chat_input_send.onclick = function () {
//           chat_input_send.setAttribute('disabled', true);
//           chat_input_send.classList.remove('enabled');
//           if (chat_input.value.length <= 0) {
//             return;
//           }
//           parent.create_load('chat_content_container');
//           parent.send_message(chat_input.value);
//           chat_input.value = '';
//           chat_input.focus();
//         };
//       } else {
//         chat_input_send.classList.remove('enabled');
//       }
//     };

//     var chat_logout_container = document.createElement('div');
//     chat_logout_container.setAttribute('id', 'chat_logout_container');

//     var chat_logout = document.createElement('button');
//     chat_logout.setAttribute('id', 'chat_logout');
//     chat_logout.textContent = `${parent.get_name()} • logout`;
//     chat_logout.onclick = function () {
//       localStorage.clear();
//       parent.home();
//     };

//     chat_logout_container.append(chat_logout);
//     chat_input_container.append(chat_input, chat_input_send);
//     chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container);
//     chat_container.append(chat_inner_container);
//     document.body.append(chat_container);

//     // Display "user entered the conversation" message
//     const userEnteredMessage = document.createElement('div');
//     userEnteredMessage.classList.add('message', 'user-entered');
//     userEnteredMessage.textContent = `${parent.get_name()} entered the conversation`;
//     chat_content_container.appendChild(userEnteredMessage);

//     parent.refresh_chat();
//   }
    

    // Save name. It literally saves the name to localStorage
    save_name(name){
      // Save name to localStorage
      localStorage.setItem('name', name)
    }
    // Sends message/saves the message to firebase database
    send_message(message){
      const parent = this
      // if the local storage name is null and there is no message
      // then return/don't send the message. The user is somehow hacking
      // to send messages. Or they just deleted the
      // localstorage themselves. But hacking sounds cooler!!
      if(parent.get_name() == null && message == null){
        return
      }

      // Get the firebase database value
      const dbRef = ref(db, 'chats/');

get(dbRef)
  .then((snapshot) => {
    const index = snapshot.size + 1;
    return set(ref(db, `chats/message_${index}`), {
      name: parent.get_name(),
      message: message,
      index: index,
    });
  })
  .then(() => {
    // After we send the chat, refresh to get the new messages
    parent.refresh_chat();
  })
  .catch((error) => {
    // Handle any errors that occurred during the process
    console.error(error);
  });
    }
    // Get name. Gets the username from localStorage
    get_name(){
      // Get the name from localstorage
      if(localStorage.getItem('name') != null){
        return localStorage.getItem('name')
      }else{
        this.home()
        return null
      }
    }
    // Refresh chat gets the message/chat data from firebase
    // refresh_chat() {
    //     const chat_content_container = document.getElementById('chat_content_container');
    //     chat_content_container.innerHTML = '';
      
    //     const currentUserName = this.get_name();
    //     if (!currentUserName) {
    //       return;
    //     }
      
    //     const dbRef = ref(db, 'chats/');
      
    //     get(dbRef).then((snapshot) => {
    //       const messagesObject = snapshot.val();
    //       if (!messagesObject || Object.keys(messagesObject).length === 0) {
    //         return;
    //       }
      
    //       const messages = Object.values(messagesObject);
    //       const ordered = messages.sort((a, b) => a.index - b.index);
      
    //       let isCurrentUserFound = false;
    //       ordered.forEach((data) => {
    //         if (isCurrentUserFound || data.name === currentUserName) {
    //           isCurrentUserFound = true;
    //           const name = data.name;
    //           const message = data.message;
      
    //           const message_container = document.createElement('div');
    //           message_container.setAttribute('class', 'message_container');
      
    //           const message_inner_container = document.createElement('div');
    //           message_inner_container.setAttribute('class', 'message_inner_container');
      
    //           const message_user_container = document.createElement('div');
    //           message_user_container.setAttribute('class', 'message_user_container');
      
    //           const message_user = document.createElement('p');
    //           message_user.setAttribute('class', 'message_user');
    //           message_user.textContent = `${name}`;
      
    //           const message_content_container = document.createElement('div');
    //           message_content_container.setAttribute('class', 'message_content_container');
      
    //           const message_content = document.createElement('p');
    //           message_content.setAttribute('class', 'message_content');
    //           message_content.textContent = `${message}`;
      
    //           message_user_container.append(message_user);
    //           message_content_container.append(message_content);
    //           message_inner_container.append(message_user_container, message_content_container);
    //           message_container.append(message_inner_container);
      
    //           chat_content_container.append(message_container);
    //         }
    //       });
      
    //       // Go to the recent message at the bottom of the container
    //       chat_content_container.scrollTop = chat_content_container.scrollHeight;
    //     });
    //   }

       // Refresh chat gets the message/chat data from firebase
    //    refresh_chat() {
    //     const chat_content_container = document.getElementById('chat_content_container');
    
    //     // Get the chats from firebase
    //     get(ref(db, 'chats/'))
    //       .then((snapshot) => {
    //         // When we get the data clear chat_content_container
    //         chat_content_container.innerHTML = '';
    //         const messagesObject = snapshot.val();
    
    //         // if there are no messages in the chat. Return. Don't load anything
    //         if (!messagesObject || Object.keys(messagesObject).length === 0) {
    //           return;
    //         }
    
    //         // Convert the message object values to an array.
    //         const messages = Object.values(messagesObject);
    //         const ordered = messages.sort((a, b) => a.index - b.index);
    
            

    //         // Now we're done. Simply display the ordered messages
    //         ordered.forEach((data) => {
    //           const name = data.name;
    //           const message = data.message;
    
    //           const message_container = document.createElement('div');
    //           message_container.setAttribute('class', 'message_container');
    
    //           const message_inner_container = document.createElement('div');
    //           message_inner_container.setAttribute('class', 'message_inner_container');
    
    //           const message_user_container = document.createElement('div');
    //           message_user_container.setAttribute('class', 'message_user_container');
    
    //           const message_user = document.createElement('p');
    //           message_user.setAttribute('class', 'message_user');
    //           message_user.textContent = `${name}`;
    
    //           const message_content_container = document.createElement('div');
    //           message_content_container.setAttribute('class', 'message_content_container');
    
    //           const message_content = document.createElement('p');
    //           message_content.setAttribute('class', 'message_content');
    //           message_content.textContent = `${message}`;
    
    //           message_user_container.append(message_user);
    //           message_content_container.append(message_content);
    //           message_inner_container.append(message_user_container, message_content_container);
    //           message_container.append(message_inner_container);
    
    //           chat_content_container.append(message_container);
    //         });
    
    //         // Go to the recent message at the bottom of the container
    //         chat_content_container.scrollTop = chat_content_container.scrollHeight;
    //       })

    // }
    
    
    // refresh_chat() {
    //     const chat_content_container = document.getElementById('chat_content_container');
      
    //     // Get the chats from firebase
    //     get(ref(db, 'chats/')).then((snapshot) => {
    //       // When we get the data clear chat_content_container
    //       chat_content_container.innerHTML = '';
    //       const messagesObject = snapshot.val();
      
    //       // if there are no messages in the chat, return. Don't load anything
    //       if (!messagesObject || Object.keys(messagesObject).length === 0) {
    //         return;
    //       }
      
    //       // Convert the message object values to an array
    //       const messages = Object.values(messagesObject);
    //       const ordered = messages.sort((a, b) => a.index - b.index);
      
    //       // Track the users who have already entered the conversation
    //       const enteredUsers = [];
      
    //       // Iterate through the ordered messages
    //       ordered.forEach((data) => {
    //         const name = data.name;
    //         const message = data.message;
      
    //         if (!enteredUsers.includes(name)) {
    //           // Add user entered message for new users
    //           const userEnteredMessage = document.createElement('div');
    //           userEnteredMessage.setAttribute('class', 'user_entered_message');
    //           userEnteredMessage.textContent = `${name} entered the conversation`;
      
    //           chat_content_container.append(userEnteredMessage);
      
    //           enteredUsers.push(name);
    //         }
      
    //         const message_container = document.createElement('div');
    //         message_container.setAttribute('class', 'message_container');
      
    //         const message_inner_container = document.createElement('div');
    //         message_inner_container.setAttribute('class', 'message_inner_container');
      
    //         const message_user_container = document.createElement('div');
    //         message_user_container.setAttribute('class', 'message_user_container');
      
    //         const message_user = document.createElement('p');
    //         message_user.setAttribute('class', 'message_user');
    //         message_user.textContent = `${name}`;
      
    //         const message_content_container = document.createElement('div');
    //         message_content_container.setAttribute('class', 'message_content_container');
      
    //         const message_content = document.createElement('p');
    //         message_content.setAttribute('class', 'message_content');
    //         message_content.textContent = `${message}`;
      
    //         message_user_container.append(message_user);
    //         message_content_container.append(message_content);
    //         message_inner_container.append(message_user_container, message_content_container);
    //         message_container.append(message_inner_container);
      
    //         chat_content_container.append(message_container);
    //       });
      
    //       // Go to the recent message at the bottom of the container
    //       chat_content_container.scrollTop = chat_content_container.scrollHeight;
    //     });
    //   }
      
      
    refresh_chat() {
        const chat_content_container = document.getElementById('chat_content_container');
      
        // Get the chats from firebase
        get(ref(db, 'chats/')).then((snapshot) => {
          // When we get the data, clear chat_content_container
          chat_content_container.innerHTML = '';
          const messagesObject = snapshot.val();
      
          // if there are no messages in the chat, return. Don't load anything
          if (!messagesObject || Object.keys(messagesObject).length === 0) {
            return;
          }
      
          // Convert the message object values to an array
          const messages = Object.values(messagesObject);
          const ordered = messages.sort((a, b) => a.index - b.index);
      
          // Track the users who have already entered the conversation
          const enteredUsers = [];
      
          // Iterate through the ordered messages
          ordered.forEach((data) => {
            const name = data.name;
            const message = data.message;
      
            if (!enteredUsers.includes(name)) {
              // Add user entered message for new users
              const userEnteredMessage = document.createElement('div');
              userEnteredMessage.setAttribute('class', 'user_entered_message');
              userEnteredMessage.textContent = `${name} entered the conversation`;
      
              chat_content_container.append(userEnteredMessage);
      
              enteredUsers.push(name);
            }
      
            const message_container = document.createElement('div');
            message_container.setAttribute('class', 'message_container');
      
            const message_inner_container = document.createElement('div');
            message_inner_container.setAttribute('class', 'message_inner_container');
      
            const message_user_container = document.createElement('div');
            message_user_container.setAttribute('class', 'message_user_container');
      
            const message_user = document.createElement('p');
            message_user.setAttribute('class', 'message_user');
            message_user.textContent = `${name}`;
      
            const message_content_container = document.createElement('div');
            message_content_container.setAttribute('class', 'message_content_container');
      
            const message_content = document.createElement('p');
            message_content.setAttribute('class', 'message_content');
            message_content.textContent = `${message}`;
      
            message_user_container.append(message_user);
            message_content_container.append(message_content);
            message_inner_container.append(message_user_container, message_content_container);
            message_container.append(message_inner_container);
      
            chat_content_container.append(message_container);
          });
      
          // Go to the recent message at the bottom of the container
          chat_content_container.scrollTop = chat_content_container.scrollHeight;
      
          // Apply alternating sides for user chats after the messages are rendered
          const chat_messages = chat_content_container.getElementsByClassName('message_container');
      
          for (let i = 0; i < chat_messages.length; i++) {
            const message_container = chat_messages[i];
      
            if (i % 2 === 0) {
              message_container.classList.add('message_container_left');
            } else {
              message_container.classList.add('message_container_right');
            }
          }
        });
      }
      
      
      
}
  // So we've "built" our app. Let's make it work!!
  var apps = new MEME_CHAT()
  // If we have a name stored in localStorage.
  // Then use that name. Otherwise , if not.
  // Go to home.
  if(apps.get_name() != null){
    apps.chat()
  }

