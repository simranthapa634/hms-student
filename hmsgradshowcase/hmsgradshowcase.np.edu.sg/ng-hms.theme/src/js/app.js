$(document).ready(function () {
    $(".view-profile").on("click", function (e) {
        e.preventDefault();
        $(this).parentsUntil("author").children(".popup-overlay").addClass("opened");
    });
    $(".close-popup").click(function () {
        $(this).parentsUntil("author").children(".popup-overlay").removeClass("opened");
    });
    $(".nav-search").on("click", function (e) {
        e.preventDefault();
        $(".search-page").addClass("show");
    });
    $(".search-close").click(function () {
        $(".search-page").removeClass("show");
    });

    $('#lightgallery').lightGallery();
});

