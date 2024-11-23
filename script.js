const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// إضافة رسالة إلى صندوق الدردشة
function addMessageToChat(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // تمرير تلقائي للأسفل
}

// عند الضغط على زر الإرسال
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessageToChat(message);
    messageInput.value = ''; // تفريغ حقل الإدخال
  }
});

// إرسال الرسالة عند الضغط على Enter
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const message = messageInput.value.trim();
    if (message) {
      addMessageToChat(message);
      messageInput.value = ''; // تفريغ حقل الإدخال
    }
  }
});