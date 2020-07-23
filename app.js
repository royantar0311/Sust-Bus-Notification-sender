// console.log('here');
//doms
const container = document.querySelector('.container');
const topic = document.querySelector('#topic');
const title = document.querySelector('#title');
const body = document.querySelector('#body');
const email = document.querySelector('#email');
const key = document.querySelector('#key');
const button = document.getElementById('submit');
const log = document.getElementById('log');

//
const url = 'https://fcm.googleapis.com/fcm/send';

//event listeners
button.addEventListener('click',sendNotification);

function sendNotification(e){
    e.preventDefault();
    button.disabled = true;
    topic.disabled = true;
    title.disabled = true;
    body.disabled = true;
    if(topic.value ==='' || title ==='' || body === '' || key.value === ''){
        showError('please enter all the fields correctly')
    }
    else{
         let data = {
            "data": {
                "title": title.value,
                "body": body.value,
                "token": "permission"
            },
            "to": "/topics/" + topic.value,
            "priority": "high"
        }
        send(url,data,key.value,callBack);
    }
}  
function callBack(posts){
    showError(posts);
}
function showError(error){
    log.innerHTML = error;
     setTimeout(() => {
         document.location.reload(true);
     },3000); 
}