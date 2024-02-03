const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{ 
    res.send('estamos en raiz');

});

router.get('/nosotros', (req, res)=>{
    res.send('estamos en nosotrosss buebos archivo diferente');

});


module.exports = router;
return router  

