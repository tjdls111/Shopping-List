const main=document.querySelector('main');
const content=document.querySelector('.shoppingItem');
const add_btn=document.querySelector('.button');

function addName() {
    console.log(content);

    const name=content.value;
    if (name===''){
        content.focus();
        return;
    }

    const itemRow=document.createElement('div');
    itemRow.setAttribute('class','item_row');

    const delBtn=document.createElement('input');
    delBtn.setAttribute('type','checkbox');
    delBtn.setAttribute('class','checkbox');
    delBtn.setAttribute('value',name);
    
    const label=document.createElement('label');
    label.setAttribute('for',name);
    label.textContent=`${content.value}    `;
    label.setAttribute('id',name);
    
    itemRow.appendChild(delBtn);
    itemRow.appendChild(label);
    main.appendChild(itemRow);

    content.scrollIntoView({block:"center"});
    content.value='';
    content.focus();
    

}

content.addEventListener('keypress',(event)=>{
    if (event.key==='Enter'){
        addName();
    }

});

main.addEventListener('click', (event)=>{
    if (event.target.className=='checkbox'){    
        main.removeChild(event.target.parentElement);
    }

});
