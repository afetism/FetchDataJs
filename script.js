const items=document.getElementById('items');
const OpenCloseHiddenDiv=(hiddenDiv)=>
{
    if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
}
const createItem=(data)=>
{
  const li=document.createElement('li');
  const divTitle=document.createElement('div');
  const hiddenDiv=document.createElement('div');

  divTitle.innerText=data.name;
  hiddenDiv.innerText=`Username: ${data.username}
                      Email: ${data.email}`
  hiddenDiv.style.display = 'none'
  li.append(divTitle);
  li.append(hiddenDiv);
  items.append(li);

  li.onclick=()=>
  {
       OpenCloseHiddenDiv(hiddenDiv);
  }

}
const getData=async ()=>
{
    const url="https://jsonplaceholder.typicode.com/users";
    const response=await fetch(url);
    const data=await response.json();
    data.forEach(user=>createItem(user));
        
    
}

getData();