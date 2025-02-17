$(function(){
    const images = document.querySelectorAll('img')
    const title = document.querySelector('.article__title')
    images?.forEach((image, index)=> {
      if(image.alt !== "") return
 
      if(title?.textContent) return image.alt = `${title.textContent.trim()}-${index}`
      
      image.alt = image.src
    })
})()