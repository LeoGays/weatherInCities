document.getElementById("next").style.display = "none";
document.getElementById("final").style.display = "none";
var array = {
    q1: undefined,
    q2: undefined,
    q3: undefined,
    q4: undefined
}

var count = 0;


start.addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("next").style.display = "block";
    document.getElementById("test1").style.display = "block";
    count++;
})

next.addEventListener("click", function () {


    if (count != 4) {
        document.getElementById("next").style.display = "block";
        document.getElementById("test" + count).style.display = "none";

        var rad = document.getElementsByName("q" + count);
        for (let i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                array["q"+ count] = rad[i].value;
            }
        }
        count++;
        document.getElementById("test" + count).style.display = "block";
    } else {
        document.getElementById("next").style.display = "none";
        document.getElementById("test4").style.display = "none";

        var rad = document.getElementsByName("q" + count);
        for (let i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                array["q"+ count] = rad[i].value;
            }
        }

        document.getElementById("final").style.display = "block";
    }

})