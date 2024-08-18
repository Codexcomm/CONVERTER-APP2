
let num = Number(prompt("Enter any number: \n1. Convert Celcius to Fahrenheit\n2. Convert Kilogram to Gram\n3. Convert Gram to Kilogram\n4. Convert Fahrenheit to Celsius"))

switch(num){

    case 1:
        let fahrenheit = Number(prompt("Please enter any number to convert Celcius to Fahrenheit"))

        let cal = fahrenheit * 1.8
        let total = cal + 32
        alert(total + " Fahrenheit")
        break;

        case 2:
            let gram = Number(prompt("Please enter any number to convert Kilogram to Gram"))

            let cal2 = gram * 1000
            alert(cal2 + " Gram")
            break;

            case 3:
                let kilo = Number(prompt("Please enter any number to convert Gram to Kilogram"))

                let cal3 = kilo / 1000
                alert(cal3 + " Kilogram")
                break;

                case 4:
                    let celsius = Number(prompt("Please enter any number to convert Fahrenheit to Celsius"))

                    let cal4 = celsius - 32
                    let total2 = (cal4 / 1.8).toFixed(2)
                    alert(total2 + " Celsius")
                    break;

                    default:
                        alert("Please enter a number that is displayed on the screen")
}