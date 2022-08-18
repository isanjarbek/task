export default function handler(req, res) {
    res.status(200).json([
        {payment: "payme", min: 100, require: ["amount", "firstName", "lastName"]},
        {payment: "click", min: 500, require: ["amount", "firstName", "phone", ]},
        {payment: "zoodpay", min: 50000, require: ["amount", "firstName", "lastName", "phone", "address", "zipcode"]},
    ])
}
  