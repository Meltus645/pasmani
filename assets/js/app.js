    const openBtn =document.querySelector('.bars');
    const closeBtn =document.querySelector('.close');
    const togglable =document.querySelector('.nav-links');
    closeBtn.addEventListener('click', function(){
        alert()
        close(togglable);
    });
    openBtn.addEventListener('click', function(){
        open(togglable);
        alert() 
    });
function close(elem){
    //close if open
    if(elem.style.display== 'block'){
        elem.style.display ='none';
    }
    else{
        elem.style.display =null;
    }
}
function open (elem){
    //open if closed
    if(elem.style.display == 'none'){
        elem.style.display ='block';
    }
    else{
        elem.style.display =null;
    }
}