const service = require('./service')

exports.generateQR = async function(req,res) {
    try {
        const {data} = req.body
        const qrCodeText = service.formatData(data)
        const qrCodeBuffer = await service.generateQRCode(qrCodeText)
        res.setHeader('Content-Disposition','attachment ;filename=qrcode.png')
        res.type('image/png').send(qrCodeBuffer)
    } catch (error) {
        console.log(`Error in generating QR code ${error}`);
        res.status(500).send({error : "Internal Server Error"})
    }
}