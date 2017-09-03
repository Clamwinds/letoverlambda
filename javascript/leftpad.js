module.exports = leftpad;

function leftpad (str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}

//a = leftpad("cheese", 7, "waffle")
//console.log(a)

function ispositive(integer){
    if (integer > 0){
        return "positive"
    }
    else{
        return "negative integer"
    }
}

b = ispositive(5)
console.log(b)


