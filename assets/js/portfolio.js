
const closeLightbox = document.querySelector(".close-lightbox")
      lightbox = document.querySelector(".lightbox"),
      lightboxImage = lightbox.querySelector("img"),
      nextSlide = document.querySelector(".next-slide"),
      prevSlide = document.querySelector(".prev-slide")

//close by clicking ouside the image
    /*lightbox.addEventListener("click", function () {
        if (event.target != lightboxImage ) {
            lightbox.classList.remove("show")
        lightbox.classList.add("hide")
        }
    })*/

    closeLightbox.addEventListener("click", function () {
        lightbox.classList.remove("show")
        lightbox.classList.add("hide")
    })

const gallery = document.querySelector(".portfolio-gallery")
const galleryItem = gallery.querySelectorAll(".item")

galleryItem.forEach( function (element) {
    element.querySelector(".overlay").addEventListener("click", function () {
        lightbox.classList.remove("hide")
        lightbox.classList.add("show")
        lightboxImage.src = element.querySelector("img").getAttribute("src") 
    })
}) 


// Slide switch

const   portfolioItems = document.querySelector(".portfolio-gallery").children,
        totalPortfolioItem = portfolioItems.length

        let itemIndex = 0

        for (let i=0; i < totalPortfolioItem;i++){
            portfolioItems[itemIndex].addEventListener("click", function(){
                itemIndex=i
                changeItem()
            })
        }

        function next(){
            if(itemIndex == totalPortfolioItem - 1){
                itemIndex = 0
            }
            else{
                itemIndex++
            }
            changeItem()
            console.log(imgSrc)
        }

        function prev(){
            if(itemIndex == 0){
                itemIndex = totalPortfolioItem - 1
            }
            else{
                itemIndex--
            }
            changeItem()
            console.log(imgSrc)
        }



        function changeItem(){
            imgSrc = portfolioItems[itemIndex].querySelector(".gallery img").getAttribute("src")
            lightboxImage.src = imgSrc
        }
