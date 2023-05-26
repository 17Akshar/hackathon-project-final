typeOfIngredients = ['Rice','Wheat','Apple','Milk','Roti','Dal','Mango'];
window.onload = ()=>{
    let btn = ''
    typeOfIngredients.forEach((ele)=>{
        console.log(ele)
        btn +=`<button onclick="GetData('${ele}')" class="py-2 px-4 mt-4 ml-4 bg-gradient-to-br from-lime-300 to-green-500  text-lime-900 font-sans font-semibold text-sm  active:shadow-none focus:text-white mr-2">${ele}</button>`
    })
    var pill = document.getElementById('pills')
    pill.innerHTML = btn

}

async function GetData(item){
    let html = ' '
    console.log(item)
   const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDudSArNs7nQYy40lP1YcX_SjI0jBh7dGk&part=snippet&topicId=/m/02wbm&type=video&channelId=UCmoX4QULJ9MB00xW4coMiOw&schannelType=how&q=what+we+can+made+from+${item}`)
   const jsonData =await response.json()
   console.log(jsonData)
   jsonData.items.forEach((ele)=>{
    html += `<iframe width="300" height="200" class="mt-4 w-full" src="https://www.youtube.com/embed/${ele.id.videoId}"></iframe>`
   })
   var out = document.getElementById("output");
   out.innerHTML = html
}
async function Search(){
    var item = document.getElementById('default-search').value;
    if(item == ""||item == null){
        Toastify({
            text: "Enter the valid input",
            duration: 1000,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to bottom,red,crimson)",
              color:'white',
            },
          }).showToast();
    }
    else{
        console.log(item)
        let html = ' '
    console.log(item)
   const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDudSArNs7nQYy40lP1YcX_SjI0jBh7dGk&part=snippet&topicId=/m/02wbm&type=video&channelId=UCmoX4QULJ9MB00xW4coMiOw&schannelType=how&q=what+we+can+made+from+${item}`)
   const jsonData =await response.json()
   console.log(jsonData)
   jsonData.items.forEach((ele)=>{
    html += `<iframe width="300" height="200" class="mt-4 w-full" src="https://www.youtube.com/embed/${ele.id.videoId}"></iframe>`
   })
   var out = document.getElementById("output");
   out.innerHTML = html
    }
}
function BackToHome(){
    console.log('NAVIGATE TO HOME PAGE')
}