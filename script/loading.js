function onReady(callback){
    var intervalID = window.setInterval(function(){
        if(document.getElementsByTagName('body')[0] !== undefined){
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible){
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function(){
    setVisible('.page', true);
    setVisible('#loading', false);
});