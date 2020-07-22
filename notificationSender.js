function notificationSender(){
    this.http = new XMLHttpRequest();
}

notificationSender.prototype.post= function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    this.http.setRequestHeader('Authorization', 'key=AAAARdR9Avs:APA91bHJPAkbsTVnULi3VlSmz7rQ3n2vdgZSpbpeVEeDQT5b--CD6yAbqt4bZlsuRPwkDkV5J6Vm35s8x-95eGW69MUA0RbCj__YfCtCq0aULuBrItKrpBAvaYYgIa-kYPRgWmbPH1qV');
    let self = this;
    this.http.onload = function(){
        callback(self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}