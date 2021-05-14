function addName(){
    const main=document.querySelector('main');
    const name=document.createElement('h3');
    const content=document.querySelector('#shoppingItem').value;
    //name.textContent=content;
    //main.appendChild(name);

    const item=document.createElement('input');
    item.setAttribute('type','checkbox');
    item.setAttribute('value',content);
    const label=document.createElement('label');
    label.setAttribute('for',content);
    label.textContent=`${content}    `;
    label.setAttribute('id',content);
    main.appendChild(item);
    main.appendChild(label);

    input.value='';
    input.focus();
    

};

document.addEventListener('change',()=>
{
    const main=document.querySelector('main');

    let itemsCheck=document.querySelectorAll('input[type="checkbox"]');
    
    let removeId;
    let delItem;

    for (let i of itemsCheck){
        i.addEventListener('change',(event)=>
        {   
            if (event.target.checked){
                removeId=event.target.value;
                console.log(removeId);
                main.removeChild(i);
                delItem=document.getElementById(`${removeId}`);
                console.log(delItem);
                main.removeChild(delItem);
            }
        });
    }

    //main.removeChild(itemsCheck.querySelector(`#${delItem}`));
    //main.removeChild(itemsCheck.querySelector(`#${removeId}`))
});