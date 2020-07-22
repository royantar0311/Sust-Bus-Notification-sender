// console.log('here');
//doms
const container = document.querySelector('.container');
const topic = document.querySelector('#topic');
const title = document.querySelector('#title');
const body = document.querySelector('#body');
const email = document.querySelector('#email');
const button = document.getElementById('submit');

//event listeners
button.addEventListener('click',sendNotification);


function sendNotification(e){
    e.preventDefault();
    button.disabled = true;
    topic.disabled = true;
    title.disabled = true;
    body.disabled = true;
    if(topic.value ==='' || title ==='' || body === ''){
        showError('please enter all the fields correctly')
    }
    else{
        const notification = new notificationSender();
        let data = {
            "data": {
                "title": title.value,
                "body": body.value,
                "token": "permission"
            },
            "to": "/topics/" + topic.value,
            "priority": "high"
        }
        notification.post('https://fcm.googleapis.com/fcm/send',data,ok);
    }
}  

function ok(posts){
    if(posts === null){
        showError('something went wrong');
    }
    showError(posts);
}
function showError(error){
    console.log('showError')
    const errorDiv = document.createElement('div');
    errorDiv.className = 'log';
    errorDiv.appendChild(document.createTextNode(error));
    container.insertBefore(errorDiv,footer);
     setTimeout(() => {
         document.location.reload(true);
     },3000); 
}




/*<div id="authresult" class="card">
<p>sorry</p>
</div>`**/