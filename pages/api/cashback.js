export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ valor: 33.40 }))
}