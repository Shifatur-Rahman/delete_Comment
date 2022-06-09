//  main div
let MainBox = document.getElementById('box');
// add comment
let WriteComment = document.getElementById('writeComment');
let AddBtn = document.getElementById('addComment');
//  Delete Comment
let RemoveComment = document.getElementById('cancelComment');
let DelBtn = document.getElementById('deleteComment');
// New Comment Div
let NewComment = document.getElementById('newComment');





let i,j,arr=[];



//    Add comment Function

let addFun=()=>{
    let para = document.createElement('p');
    NewComment.appendChild(para);
    if(WriteComment.value != ''){
        
       
        para.innerHTML = WriteComment.value;
        para.style.backgroundColor = '#747d8c';
        para.style.borderRadius = '5px';
        para.style.padding = '10px';
        para.style.color = '#ffffff';
        
        WriteComment.value=''; 
        // return para;
arr.push(para);
return [arr,para];
 
}
   
    else{
        alert('Pls fill the comment')
    }   
   
}

AddBtn.addEventListener('click', addFun);


let delFun =()=>{
    if(NewComment.innerHTML != ''){
        if(RemoveComment.value == 'delete'){
             for(i=0;i<arr.length;i++){
             arr[i].style.display = 'none';
             arr[i].parentElement.remove();
            // arr.shift();
            console.log(arr[i]);
             }   
             }
       
    }   else{
            alert('There have no elements');
    }
    RemoveComment.value ='';
}

DelBtn.addEventListener('click', delFun);




