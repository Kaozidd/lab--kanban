const btns = document.querySelectorAll("button")
const btnsArr = [...btns]
const posts = document.querySelectorAll("#content div")
const postsArr = [...posts]
for (let i=0; i<btnsArr.length; i++){
  btnsArr[i].addEventListener('click', switchPost)
}
function switchPost(evt){
  for (let i=0; i<postsArr.length; i++){
    postsArr[i].classList.add("hide")
    postsArr[i].classList.remove("show")
  }
  postsArr[parseInt(evt.target.id)].classList.remove("hide")
  postsArr[parseInt(evt.target.id)].classList.add("show")
}