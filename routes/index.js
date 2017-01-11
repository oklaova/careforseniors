var express = require('express'),
    router = express.Router();


router.get('*', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


/* frunction to generate checksum
const checksum = (str, algorithm, encoding) =>
{   return crypto.createHash(algorithm || 'md5')
                 .update(str, 'utf8')
                 .digest(encoding || 'hex')
}

router.post('/post-prayer', (req, res) =>
{   var new_post = db.push();
    new_post.set(req.body);
    res.send('Posted');
})
*/


module.exports = router;
