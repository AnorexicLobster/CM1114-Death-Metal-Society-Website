var counter = 2;
function login(){
if(counter % 2 == 0){
    alert('You Have Logged In!');
} else {
    alert('You Have Logged Out!');
}

counter +=1;
}


var acc = document.getElementsByClassName("albums");
                    var i;

                    for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function() {
                        this.classList.toggle("toggle");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                            panel.style.maxHeight = null;
                        } else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
                    });
                    }