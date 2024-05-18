const sendButton = document.getElementById('send');
const messageInput = document.getElementById('message');
const chatHistory = document.getElementById('chat-history');
const imageUploadButton = document.getElementById('uploadImageButton');
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('imageUpload');


async function getImgResponse(){
 const formData = new FormData();
 formData.append('image', fileInput.files[0]);

 const response = await fetch('http://127.0.0.1:5000/upload', {
    method: "POST",
    body: formData
   });
   const data = response.text();
    
   return data;

  };
async function getChatResponse(msg){
 const formData = new FormData();
 formData.append("message", msg);

 const response = await fetch('http://127.0.0.1:5000/message', { method: "POST", body: formData });
 // const data = await response.json();
 const data = response;
 console.log(data);
 return data.text();
}

async function sendMessage(message){

 

 // generate the response
 if (fileInput.files && fileInput.files.length > 0){
  messageInput.value = "";
 const chatMessage = document.createElement('div');
 chatMessage.classList.add('chat-message','user-message');
 const messageText = document.createElement('p');
 messageText.classList.add('message-text');
 messageText.textContent = "image selected";
 chatMessage.appendChild(messageText);
 chatHistory.appendChild(chatMessage);
 chatHistory.scrollTop = chatHistory.scrollHeight;

 //placeholder for before ai response

 const botMessagePlaceholder = document.createElement('div');
 botMessagePlaceholder.classList.add('chat-message', 'bot-message', 'message-placeholder')
 let placeholderText = document.createElement('p');
 placeholderText.textContent = 'Waiting for Tutor...';
 placeholderText.classList.add('bot-message','message-text')
 botMessagePlaceholder.appendChild(placeholderText);
 chatHistory.appendChild(botMessagePlaceholder);
 chatHistory.scrollTop = chatHistory.scrollHeight;
  let answer2 = await getImgResponse();


    placeholderText.textContent = answer2;

  

 } else {
  messageInput.value = "";
 const chatMessage = document.createElement('div');
 chatMessage.classList.add('chat-message','user-message');
 const messageText = document.createElement('p');
 messageText.classList.add('message-text');
 messageText.textContent = message;
 chatMessage.appendChild(messageText);
 chatHistory.appendChild(chatMessage);
 chatHistory.scrollTop = chatHistory.scrollHeight;

 //placeholder for before ai response

 const botMessagePlaceholder = document.createElement('div');
 botMessagePlaceholder.classList.add('chat-message', 'bot-message', 'message-placeholder')
 let placeholderText = document.createElement('p');
 placeholderText.textContent = 'Waiting for AI...';
 placeholderText.classList.add('bot-message','message-text')
 botMessagePlaceholder.appendChild(placeholderText);
 chatHistory.appendChild(botMessagePlaceholder);
 chatHistory.scrollTop = chatHistory.scrollHeight;
  let answer
  answer = await getChatResponse(message)

  
    placeholderText.textContent = answer;
  
  
 }



}


messageInput.addEventListener('keyup', async (event) => {
 if (event.key === 'Enter') {
  await sendMessage(messageInput.value);
 }
});

sendButton.addEventListener('click', async () => {
 await sendMessage(messageInput.value);
});

imageUploadButton.addEventListener('click', () => {
 fileInput.click();
  
});

fileInput.addEventListener("submit", function (event) { 
    event.preventDefault() 
 })
 
 fileInput.addEventListener('change', () => {
   if (fileInput.files.length > 0) {
    imageUploadButton.style.backgroundColor = 'green'; // Change to your desired color
   } else {
    imageUploadButton.style.backgroundColor = 'initial'; // Reset to original color
   }
  });

