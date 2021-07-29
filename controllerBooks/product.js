import Product from '../modelBooks/product';

export const create = (req, res) => {
    // console.log("test")
    let product = new Product(req.body)
    // console.log(req.body)
    product.save((err, data) => {
        // console.log(data)
        if (err) {
            return res.status(400).json({
                error: "failed!"
            })
        }
        res.json(data)
    })
}

export const list = (req, res) => {
    Product.find((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "failed!"
            })
        }
        res.json(data)
    })
}

export const productId = (req, res, next, id) => {
    Product.findById(id).exec((err, data) => {
        if (err || !data) {
            res.status(400).json({
                error: 'failed!'
            })
        }
        req.product = data;
        console.log(req.product)
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.product)
}