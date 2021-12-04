function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}
function itemDone(e){
    //Remove item from the list
    var target, elParent, elGrandparent;
    target = getTarget(e);
    if (target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (target.nodeName.toLowerCase() == "em"){
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    // pervent the link from takling you elsewhere
    if (e.preventDefault){
        e.preventDefault();
    }else {
        e.returnValue = false;
    }
}

//set up event Listeners to call itemDone () on Click
var el = document.getElementsById('shoppingList');//Get shopping List
if (el.addEventListener){
    el.addEventListener('click', function (e){
        itemDone(e);
    },false);
}else{
    el.attachEvent('onclick', function (e){
        itemDone(e);
    });
}
