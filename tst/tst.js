const checkPhoneNum = function(phoneNum) {
    if (typeof phoneNum == 'number') {
        if(String(phoneNum).length > 5) {
            return true
        } else {
            console.log(phoneNum.length)
            return false
        }
    } else {
        return false
    }
}

console.log(checkPhoneNum(2323423423423))