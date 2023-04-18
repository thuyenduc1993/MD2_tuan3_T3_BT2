function Classify(phoneNumber) {
    var VietTel = [];
    var Mobifone = [];
    var VinaPhone = [];
    for (var i = 0; i < phoneNumber.length; i++) {
        var numberPhone = phoneNumber[i].substring(0, 3);
        if (numberPhone === "098" || numberPhone === "090" || numberPhone === "094") {
            VietTel.push(phoneNumber[i]);
        }
        else if (numberPhone === "090" || numberPhone === "094" || numberPhone === "098") {
            Mobifone.push(phoneNumber[i]);
        }
        else if (numberPhone === "094" || numberPhone === "098" || numberPhone === "090") {
            VinaPhone.push(phoneNumber[i]);
        }
    }
    // return` Viettel ${VietTel}, Mobifone${Mobifone}, VinaPhone${VinaPhone}`;
    console.log(VietTel);
    console.log(Mobifone);
    console.log(VinaPhone);
}
var number = ["0901234566", "0987654321", "0945678999", "0988888888"];
console.log(Classify(number));
