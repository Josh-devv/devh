var icon = document.querySelector(".fa-bars")
     var iconP = document.querySelector(".tog")

     icon.addEventListener("click", function () {
          icon.classList.toggle("fa-times")
          iconP.classList.toggle("tog2")
          $(".drops").slideToggle()
     })