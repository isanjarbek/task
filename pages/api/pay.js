const password = "pwd"
const user = "usr"
const payment = ["payme", "click", "zoodpay"]
const min = [100, 500, 50000]
export default function handler(req, res) {
    if (!checkAuth(req.headers.authorization)){
        return res.status(401).json({
            success: false, error: "Unauthorized"
        })
    }
    const data = req.body
    if (!checkData(data)){
        return res.status(400).json({
            success: false, error: "Bad Request"
        })
    }
    if (!checkMin(data.payment, data.amount)) {
        return res.status(400).json({
            success: false, error: "Bad Amount"
        })
    }
    res.status(200).json({ 
        success: true, error: ""
    })
}
function checkAuth(head){
    try {
        const buff = Buffer.from(head.split(' ')[1], 'base64')
        const str = buff.toString('utf-8')
        return (
            str.split(':')[1] === password &&
            str.split(':')[0] === user
        )
    } catch (err) {
        return false
    }
}
function checkData(data){
    try {
        if (payment.indexOf(data?.payment) < 0){
            return false
        }
        if (!(data?.amount / 1)){
            return false
        }
        if (!(data?.firstName?.length) || ( data?.firstName?.length < 1)){
            return false
        }
        if ((!(data?.lastName?.length) || ( data?.lastName?.length < 1)) && data?.payment !== "click"){
            return false
        }
        if ((((data?.phone + '').length !== 9) || ((data?.phone + '').length) !== ((data?.phone / 1) + '').length) && data?.payment !== "payme") {
            return false
        }
        if ((data?.payment === "zoodpay") && (!data?.address || !data?.zipcode)){
            return false
        }
        return true
    } catch (error) {
        return false
    }
}
function checkMin(pay, amount){
    if (min[payment.indexOf(pay)] > amount / 1){
        return false
    }
    return true
}