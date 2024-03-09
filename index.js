module.exports = {
    calc: function(num1, opr, num2){
        switch (opr){
            case '+':
                return num1 + num2
            case '-':
                return num1 - num1
            case '*':
                return num1 * num1
            case "/":
                if (num2 != 0){
                    return num1 / num2
                }else{
                    return "We cannot divide by 0"
                }
            default: {
                return "Invalid operation"
            }
        }
    }
}