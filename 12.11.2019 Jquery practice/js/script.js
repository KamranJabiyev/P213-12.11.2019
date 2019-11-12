$(document).ready(function() {
    //1-ci accordion
    // $(".card-header").click(function() {
    //     $(this).next().slideToggle();
    // })

    //2-ci
    // $(".card-header").click(function() {
    //     if ($(this).next()[0] != $(".active")[0]) {
    //         $(".active").slideUp("slow", function() {
    //             $(this).removeClass("active")
    //         })
    //         $(this).next().slideDown("slow", function() {
    //             $(this).addClass("active")
    //         });
    //     }

    // })

    //3-cu accordion
    // $(".card-header").click(function() {
    //     if ($(this).next()[0] != $(".active")[0]) {
    //         $(".active").slideUp("slow", function() {
    //             $(this).removeClass("active")
    //         })
    //         $(this).next().slideDown("slow", function() {
    //             $(this).addClass("active")
    //         });
    //     } else {
    //         $(".active").slideUp("slow", function() {
    //             $(this).removeClass("active")
    //         })
    //     }

    // })

    //slider
    let count = 0;
    $(".right").click(function() {
        if (count < 3) {
            count++;
            $(".images").animate({
                "margin-left": "-" + 100 * count + "%"
            })
            showHide(count)
        }
        console.log(count)
    })

    $(".left").click(function() {
        if (count > 0) {
            count--;
            $(".images").animate({
                "margin-left": "-" + 100 * count + "%" //"-100%"
            })
            showHide(count)
        }
        console.log(count)
    })

    function showHide(count) {
        switch (count) {
            case 0:
                $(".left").hide()
                break;
            case 3:
                $(".right").hide()
                break;
            default:
                $(".left, .right").show()
                break;
        }
    }
})