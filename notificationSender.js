function send(url, data, key, callBack){
    console.log('send');
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=' + key
        }
    }

    fetch(url,options)
        .then(res => {
            if(!res.ok && res.status !== 200){
                console.log('here');
                 throw Error(res.status + ' request unsuccessful');
            }
            return res.text();
        })
        .then(res => callBack('message sent succesfully <br>' + res))
        .catch(err => callBack(err));
}