let test = document.getElementById('test')
let thirdBox = document.getElementById('boxThree')
let secondBox = document.getElementById('boxTwo')
let firstBox = document.getElementById('fakeBox')
let box1 = document.getElementById('boxOne')
let box2 = document.getElementById('boxTwo')
let box3 = document.getElementById('boxThree')
let mySearch = document.getElementById('name')
let circles = document.getElementsByClassName('color')
let circle = document.getElementById('fakeCircle')
let myClear = document.getElementById('clear')
let newFlag = document.getElementById('newFlag')
let flagArrs = document.getElementsByClassName('flag')
let flagsBut = document.getElementById('dropdown')
let flagsCont = document.getElementById('content')
let preFlags = document.getElementsByClassName('first')
let colorFlag = document.getElementById('noColorAlert')
let innerText = document.getElementById('text')
let bottList = document.getElementById('listBottom')

let hex = document.getElementById('test')
let nex = document.getElementById('final')

let ok = 180
let not = 0
setInterval(function() {
    // hex.style.transform = 'rotate('+ok+'deg)'
    // nex.style.transform = 'rotate('+not+'deg)'
    ok++
    not++
}, 50);

box1.style.backgroundColor = 'white'
box2.style.backgroundColor = 'white'
box3.style.backgroundColor = 'white'

circles[0].style.backgroundColor = 'rgb(121,108,125)'
circles[1].style.backgroundColor = 'rgb(164,157,167)'
circles[2].style.backgroundColor = 'rgb(103,213,111)'
circles[3].style.backgroundColor = 'rgb(255,61,24)'
circles[4].style.backgroundColor = 'rgb(14,26,51)'

flagArrs[0].style.display = 'none'
flagArrs[1].style.display = 'none'
flagArrs[2].style.display = 'none'
flagArrs[3].style.display = 'none'
flagArrs[4].style.display = 'none'
flagArrs[5].style.display = 'none'
flagArrs[6].style.display = 'none'


let one, two, three
one = '0'
two = '1'
three = '2'

let first, second, third

first = box1.offsetLeft
second = box2.offsetLeft
third = box3.offsetLeft

let colorOne, colorTwo, colorThree

box1.style.order = one
box2.style.order = two
box3.style.order = three

preFlags[0].onclick = function () {
    box1.style.backgroundColor = 'green'
    box2.style.backgroundColor = 'white'
    box3.style.backgroundColor = 'red'
}

preFlags[1].onclick = function () {
    box1.style.backgroundColor = 'red'
    box2.style.backgroundColor = 'yellow'
    box3.style.backgroundColor = 'red'
}

preFlags[2].onclick = function () {
    box1.style.backgroundColor = 'blue'
    box2.style.backgroundColor = 'white'
    box3.style.backgroundColor = 'red'
}

let counter = 0

mySearch.onclick = function () {
    mySearch.value = ''
}

let move, x, y

let temp = [], tempColor

circles[0].addEventListener('mousedown', function (e) {
    noRed()
    tempColor = circles[0].style.backgroundColor
    document.onmousemove = mousehandler
    circle.style.display = 'block'
    circle.style.backgroundColor = circles[0].style.backgroundColor
    circles[0].style.backgroundColor = '#333'
    x = e.clientX - circles[0].offsetLeft
    y = e.clientY - circles[0].offsetTop
    circle.style.left = event.clientX - x + 'px'
    circle.style.top = event.clientY - y + 'px'
    function mousehandler(event) {
        circle.style.left = event.clientX - x + 'px'
        circle.style.top = event.clientY - y + 'px'
    }
})

circles[1].addEventListener('mousedown', function (e) {
    noRed()
    tempColor = circles[1].style.backgroundColor
    document.onmousemove = mousehandler
    circle.style.backgroundColor = tempColor
    circle.style.display = 'block'
    circles[1].style.backgroundColor = '#333'
    x = e.clientX - circles[1].offsetLeft
    y = e.clientY - circles[1].offsetTop
    circle.style.left = event.clientX - x + 'px'
    circle.style.top = event.clientY - y + 'px'
    function mousehandler(event) {
        circle.style.left = event.clientX - x + 'px'
        circle.style.top = event.clientY - y + 'px'
    }
})

circles[2].addEventListener('mousedown', function (e) {
    noRed()
    tempColor = circles[2].style.backgroundColor
    document.onmousemove = mousehandler
    circle.style.backgroundColor = tempColor
    circle.style.display = 'block'
    circles[2].style.backgroundColor = '#333'
    x = e.clientX - circles[2].offsetLeft
    y = e.clientY - circles[2].offsetTop
    circle.style.left = event.clientX - x + 'px'
    circle.style.top = event.clientY - y + 'px'
    function mousehandler(event) {
        circle.style.left = event.clientX - x + 'px'
        circle.style.top = event.clientY - y + 'px'
    }
})

circles[3].addEventListener('mousedown', function (e) {
    noRed()
    tempColor = circles[3].style.backgroundColor
    document.onmousemove = mousehandler
    circle.style.display = 'block'
    circle.style.backgroundColor = tempColor
    circles[3].style.backgroundColor = '#333'
    x = e.clientX - circles[3].offsetLeft
    y = e.clientY - circles[3].offsetTop
    circle.style.left = event.clientX - x + 'px'
    circle.style.top = event.clientY - y + 'px'
    function mousehandler(event) {
        circle.style.left = event.clientX - x + 'px'
        circle.style.top = event.clientY - y + 'px'
    }
})

circles[4].addEventListener('mousedown', function (e) {
    noRed()
    tempColor = circles[4].style.backgroundColor
    document.onmousemove = mousehandler
    circle.style.display = 'block'
    circle.style.backgroundColor = tempColor
    circles[4].style.backgroundColor = '#333'
    x = e.clientX - circles[4].offsetLeft
    y = e.clientY - circles[4].offsetTop
    circle.style.left = event.clientX - x + 'px'
    circle.style.top = event.clientY - y + 'px'
    function mousehandler(event) {
        circle.style.left = event.clientX - x + 'px'
        circle.style.top = event.clientY - y + 'px'
    }
})

let redCirc = function() {
    circles[0].style.border = 'solid red'
        circles[1].style.border = 'solid red'
        circles[2].style.border = 'solid red'
        circles[3].style.border = 'solid red'
        circles[4].style.border = 'solid red'

        circles[0].style.borderWidth = 'thin'
        circles[1].style.borderWidth = 'thin'
        circles[2].style.borderWidth = 'thin'
        circles[3].style.borderWidth = 'thin'
        circles[4].style.borderWidth = 'thin'
        colorFlag.style.display = 'block'
}

let noRed = function() {
    circles[0].style.border = 'none'
        circles[1].style.border = 'none'
        circles[2].style.border = 'none'
        circles[3].style.border = 'none'
        circles[4].style.border = 'none'

        circles[0].style.borderWidth = 'thin'
        circles[1].style.borderWidth = 'thin'
        circles[2].style.borderWidth = 'thin'
        circles[3].style.borderWidth = 'thin'
        circles[4].style.borderWidth = 'thin'
        colorFlag.style.display = 'none'
}

circle.addEventListener('mouseup', function (e) {
    console.log('clientY = ' + e.clientY)
    console.log('box1.offsetTop = ' + box1.offsetTop)
    circle.style.display = 'none'
    if (e.clientX > box1.offsetLeft && e.clientX < box1.offsetLeft + 100
        && e.clientY > box1.offsetTop && e.clientY < box1.offsetTop + 200) {
        box1.style.backgroundColor = tempColor
    } else if (e.clientX > box2.offsetLeft && e.clientX + 40 < box2.offsetLeft + 100
        && e.clientY > box2.offsetTop && e.clientY < box2.offsetTop + 200) {
        box2.style.backgroundColor = tempColor
    } else if (e.clientX > box3.offsetLeft && e.clientX < box3.offsetLeft + 100
        && e.clientY > box3.offsetTop && e.clientY < box3.offsetTop + 200) {
        box3.style.backgroundColor = tempColor
    }
    
    circles[0].style.backgroundColor = 'rgb(121,108,125)'
    circles[1].style.backgroundColor = 'rgb(164,157,167)'
    circles[2].style.backgroundColor = 'rgb(103,213,111)'
    circles[3].style.backgroundColor = 'rgb(255,61,24)'
    circles[4].style.backgroundColor = 'rgb(14,26,51)'
})

one = box1.style.order
two = box2.style.order

box1.addEventListener('mousedown', function (e) {
    colorOne = box1.style.backgroundColor
    firstBox.style.backgroundColor = colorOne
    firstBox.style.height = '210px'
    firstBox.style.width = '110px'
    firstBox.style.marginTop = '45px'
    firstBox.style.display = 'block'
    box1.style.backgroundColor = '#333'
    firstBox.style.left = box1.offsetLeft + 'px'
    firstBox.style.boxShadow = '5px 5px 10px black'
    x = e.clientX - box1.offsetLeft
    document.onmousemove = mousehandler
    function mousehandler(event) {
        /* logic for > or <
        problem is switching them back and forth. can switch while mouse is down,
        but what to do if need switch again..? */
        firstBox.style.left = event.clientX - x + 'px'
        two = 1
        three = 2
        if (firstBox.offsetLeft + 50) {
            box1.style.order = '1'
        }
        if (firstBox.offsetLeft + 50 > box3.offsetLeft) {
            one++
            box1.style.order
        }
        // console.log(firstBox.offsetLeft)
        // if (firstBox.offsetLeft > second) {
        //     box1.style.order = 1
        //     box2.style.order = 0
        // }
    }
})
        console.log(second)

box2.addEventListener('mousedown', function (e) {
    colorTwo = box2.style.backgroundColor
    firstBox.style.backgroundColor = colorTwo
    firstBox.style.display = 'block'
    box2.style.backgroundColor = '#333'
    firstBox.style.left = box2.offsetLeft + 'px'
    move = true
    x = e.clientX - box2.offsetLeft
    document.onmousemove = mousehandler
    function mousehandler(event) {
        firstBox.style.left = event.clientX - x + 'px'
    }
})

box3.addEventListener('mousedown', function (e) {
    colorThree = box3.style.backgroundColor
    firstBox.style.backgroundColor = colorThree
    firstBox.style.display = 'block'
    box3.style.backgroundColor = '#333'
    firstBox.style.left = box3.offsetLeft + 'px'
    move = true
    x = e.clientX - box3.offsetLeft
    document.onmousemove = mousehandler
    function mousehandler(event) {
        firstBox.style.left = event.clientX - x + 'px'
    }
})

box3.addEventListener('touchstart', function (e) {
    colorThree = box3.style.backgroundColor
    firstBox.style.backgroundColor = colorThree
    firstBox.style.display = 'block'
    box3.style.backgroundColor = '#333'
    firstBox.style.left = box3.offsetLeft + 'px'
    x = e.offsetX - box3.offsetLeft
    document.ontouchmove = mousehandler
    function mousemove(event) {
        firstBox.style.left = event.touches[0].clientX - x + 'px'
    }
})

firstBox.addEventListener('touchend', function (e) {
    firstBox.style.display = 'none'
    firstBox.style.backgroundColor = '333'
    box1.style.backgroundColor = colorOne
    box2.style.backgroundColor = colorTwo
    box3.style.backgroundColor = colorThree
})

firstBox.addEventListener('mouseup', function (e) {
    firstBox.style.display = 'none'
    move = false
    firstBox.style.backgroundColor = '333'
    box1.style.backgroundColor = colorOne
    box2.style.backgroundColor = colorTwo
    box3.style.backgroundColor = colorThree
})

myClear.onclick = function () {
    box1.style.backgroundColor = 'white'
    box2.style.backgroundColor = 'white'
    box3.style.backgroundColor = 'white'
}

//function saves a combination of colors
//each array index saves a 3d array of strings which are the colors

let profile = []
let c = 0

//pushes array with 3 color items to profile
newFlag.onclick = function () {
    if (box1.style.backgroundColor == 'white' && box2.style.backgroundColor == 'white'
        && box3.style.backgroundColor == 'white') {
            redCirc()
            return(0)
    }
    temp = []
    if (c < 6) {
        flagArrs[c].style.display = 'block'
    }
    if (mySearch.value == '')
        flagArrs[c].innerHTML = 'entry (' + c + ')'
    else
        flagArrs[c].innerHTML = mySearch.value
    temp.push(box1.style.backgroundColor)
    temp.push(box2.style.backgroundColor)
    temp.push(box3.style.backgroundColor)
    profile.push(temp)
    console.log('profile ' + c + ' = ' + profile[0])
    c++
    mySearch.value = ''
}

flagArrs[0].onclick = function () {
    box1.style.backgroundColor = profile[0][0]
    box2.style.backgroundColor = profile[0][1]
    box3.style.backgroundColor = profile[0][2]
}

flagArrs[1].onclick = function () {
    box1.style.backgroundColor = profile[1][0]
    box2.style.backgroundColor = profile[1][1]
    box3.style.backgroundColor = profile[1][2]
}

mySearch.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        temp = []
        if (c < 6) {
            flagArrs[c].style.display = 'block'
        }
        if (mySearch.value == '')
            flagArrs[c].innerHTML = 'entry (' + c + ')'
        else
            flagArrs[c].innerHTML = mySearch.value
        temp.push(box1.style.backgroundColor)
        temp.push(box2.style.backgroundColor)
        temp.push(box3.style.backgroundColor)
        profile.push(temp)
        c++
    }
})

function bit() {
    flagsCont.style.display = 'block'
    text.style.marginBottom = '10px'
}

function bot() {
        flagsCont.style.display = 'none'
        text.style.marginBottom = '0'
}

flagsBut.onclick = function() {
    flagsCont.style.display = 'block'
}
