const addBtn= document.getElementById("add-btn");
const input=document.getElementById("input");
const list=document.getElementById("list");

addBtn.addEventListener("click",function(){
    if(input.value.trim()===""){
        alert("please enter task");
        return
    }
    //create li element
    const li=document.createElement("li");
    li.textContent=input.value;
    //create complte button
    const comBtn=document.createElement("button");
    comBtn.textContent="Completed";
    comBtn.style.marginLeft="10px";
    comBtn.addEventListener("click",function(){
        li.style.textDecoration="line-through";
        comBtn.disabled=true;

    });
    //create delete button
    const delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.style.marginLeft="5px";
    delBtn.style.marginTop="5px";
    delBtn.addEventListener("click",function(){
        li.remove();

    });

    li.appendChild(comBtn);
    li.appendChild(delBtn);
    //append li to list
    list.appendChild(li);
    input.value="";
});