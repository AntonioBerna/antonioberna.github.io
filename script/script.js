let textarea = $(".term");
let text = "sh antonio_bernardini.sh";
let i = 0;


function runner() {
    $(".container").hide();

    textarea.append(text.charAt(i));
    i++;
    
    setTimeout(function () {
        if (i < text.length) {
            runner();
        } else {
            textarea.append("<br>")
            i = 0;
            setTimeout(function () {
                setTimeout(function () {
                    $(".load").fadeOut(1000);
                    $(".container").fadeIn(1200);
                }, 250);
            }, 250);
        }
    }, 250);
}

runner();