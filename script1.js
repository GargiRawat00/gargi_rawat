const navDialog=document.getElementById('nav-dialog');
//console.log(navDialog);
function handleClick()
{
    //console.log('toggle triggerd');
    navDialog.classList.toggle('hidden');
}

function handleArrowClick(parent)
{
    const right_arrow=document.querySelector(`.${parent} .right_arrow`);
    const down_arrow=document.querySelector(`.${parent} .down_arrow`);
    const more=document.querySelector(`.${parent} .more`);
    right_arrow.classList.toggle('!hidden');
    down_arrow.classList.toggle('!hidden');
    more.classList.toggle('!hidden');
}