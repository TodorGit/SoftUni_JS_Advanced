function lockedProfile() {
    
    let buttons = Array.from(document.getElementsByTagName('button'));

    for( btn of buttons){
        btn.addEventListener('click', showInfo)
    }

    function showInfo(e){

        let button = e.target;
        let parent = button.parentNode;
        let moreInfo = parent.getElementsByTagName('div')[0];
        let status  = parent.querySelector('input[type="radio"]:checked').value;
        
        
        if(status === 'unlock'){
            if(button.textContent === 'Show more'){
                moreInfo.style.display = 'inline-block'
                button.textContent = 'Hide it'
            }else if (button.textContent === 'Hide it'){
                moreInfo.style.display = 'none';
                button.textContent = 'Show more'
            }
        }
    }
    
}