import 'bootstrap';

$(document).ready(function () {
    console.log('Webpack loaded!');
    $("body").scrollspy({target: ".dotted-scrollspy"}), $(function () {
        $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html")
    }), $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide")
    }), (new WOW).init();
});