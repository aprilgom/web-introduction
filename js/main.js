const nameinput = document.getElementById("name_input")

const checkbox = [
    document.getElementById("checkbox1"),
    document.getElementById("checkbox2"),
    document.getElementById("checkbox3"),
    document.getElementById("checkbox4"),
    document.getElementById("checkbox5")
]

function countCheckBox() {
    let count = 0;
    for(i=0;i<checkbox.length;i++) {
        if(checkbox[i].checked === true) {
            count++;
        }
    }
    return count
}

function movieTasteAlert(e) {
    let name = nameinput.value
    let count = countCheckBox()
    alert(name+"님, 저와 " +count+"개의 취향이 같으시네요!")
    //image.src = "https://modo-phinf.pstatic.net/20150909_274/14417864035347ytm6_JPEG/mosa0iXzdV.jpeg?type=w720"
}

const button = document.getElementById("register_button")
button.addEventListener("click",movieTasteAlert)
