module.exports = {
    validateCurrencyLength: (currency) => {
        if(currency.length !== 3){
            return false
        }else{
            return true
        }
    },
    validateCurrencyCaps: (currency) => {
        for(let i = 0; i < currency.length; i ++){
            if(currency.charCodeAt(i) > 90){
                return false
            }
        }
        return true
    },
    validateImgUrl: (img) => {
        // Full Disclaimer this is not my regex - found at https://www.regextester.com/94502
        return img.split(img.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm)).length === 2
    },
    validateNameLength: (name) => {
        return name.length < 100
    }
}