$(".menu-btn").on("click", () => {
    $(".navbar").css({
        height: document.querySelector(".navbar").scrollHeight + "px"
    })
    $(".close-btn").css({
        display: "block"
    })
    $(".menu-btn").css({
        display: "none"
    })
})

$(".close-btn").on("click", () => {
    $(".navbar").css({
        height: "0px"
    })
    $(".close-btn").css({
        display: "none"
    })
    $(".menu-btn").css({
        display: "block"
    })
})