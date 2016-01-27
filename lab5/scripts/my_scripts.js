$(document).ready(function () {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);
    $("#head").click(function () {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            headclix++;
        }
        else {
            headclix = 0;
            $(this).animate({ left: "0px" }, 500);
        }
    });
    $("#eyes").click(function () {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            eyesclix++;
        }
        else {
            $(this).animate({ left: "0px" }, 500);
            eyesclix = 0;
        }
    });
    $("#nose").click(function () {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            noseclix++;
        }
        else {
            $(this).animate({ left: "0px" }, 500);
            noseclix = 0;
        }
    });
    $("#mouth").click(function () {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            mouthclix++;
        }
        else {
            $(this).animate({ left: "0px" }, 500);
            mouthclix = 0;
        }
    });

});           //end doc.onready function

    function lightning_one(t) {
        $("#lightning1").fadeIn(250).fadeOut(250);
        setTimeout(function () { lightning_one(t) }, t);
    };
    function lightning_two(t) {
        $("#lightning2").fadeIn(250).fadeOut(250);
        setTimeout(function () { lightning_two(t) }, t);
    };
    function lightning_three(t) {
        $("#lightning3").fadeIn(250).fadeOut(250);
        setTimeout(function () { lightning_three(t) }, t);
    };