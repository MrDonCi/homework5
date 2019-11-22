var color_list = document.querySelector('ul');
color_list.addEventListener('click', showColor, false);

function showColor(e) {
    var x = e.target;
    console.log(x.nodeName)
    if (x.nodeName.toLowerCase() === 'li') {
        alert('颜色为' + x.innerHTML);
    }
}

let li = document.getElementsByTagName('li');
for (let i = 0; i <= li.length; i++) {
    for (i; i % 2 == 0; i++) {
        li[i].style.cssText = ('color:red');
    }
    for (let j = 0; j <= li.length; j++) {
        for (j; j % 2 == 1; j++) {
            li[j].style.cssText = ('color:green');
        }
    }
}