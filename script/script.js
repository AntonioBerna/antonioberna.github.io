let textarea = $(".term");
let text = "sh berna.sh";
let i = 0;

function runner() {
    $(".container").hide();
    
    setTimeout(function () {
        if (i < text.length) {
            textarea.append(text.charAt(i));
            i++;
            runner();
        } else {
            // textarea.append("<br>");
            i = 0;
            $(".load").fadeOut(1000);
            $(".container").fadeIn(1200);
        }
    }, 300);
}

runner();