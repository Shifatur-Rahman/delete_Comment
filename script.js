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

    if(WriteComment.value != ''){
        let para = document.createElement('p');
        NewComment.appendChild(para);
        para.innerHTML = WriteComment.value;
        // console.log(WriteComment.value);
        // console.log(para.innerHTML);
        WriteComment.value=''; 
arr.push(para.innerHTML);
return arr;

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
            arr[i].style.display = "none";
            arr[i].parentElement.remove();
    //     arr.pop();
    //    break;
      
            }
        }
       
    } else{
       alert('There have no elements')
    }
    RemoveComment.value ='';
}

DelBtn.addEventListener('click', delFun);

















