var myvalue =[ 0x4FF371A4,0x4FF376B8,0x4FF378EC]
function gen(value){
    let index=0
    return{
        next:function() {
            if(index<value.length){
                return{
                    value:value[index++]
                }
            }else{
                return{
                    //nothing
                }
            }
            
        }
    }

}
function converToDecimal(value) {
let dec = value.toString(16).toUpperCase()
let valueDEcimal = parseInt(dec,16)

var minus = 0x4db00000
let dec2 = minus.toString(16)
let MinusDecimal = parseInt(dec2,16)

//calculating decimal number
let result = valueDEcimal - MinusDecimal
return result;
}
let obj = gen(myvalue)
for (let index = 0; index < myvalue.length; index++) {
   // const element = array[index];
    let numeric = obj.next().value
   // console.log(numeric)
    let result = Number(converToDecimal(numeric)).toString(16).toUpperCase()
    console.log("steps remaining",index)
    console.log("0x"+result)
}


