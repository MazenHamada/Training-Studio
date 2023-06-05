function changeColor()
{
    let color = document.getElementById("ColorInputColor").value;
    document.getElementById("ColorInputText").value = color;
    document.body.style.background = color;
    // document.getElementById("testplace").style.backgroundColor = color;
}