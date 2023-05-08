const testTime = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); 
    const hour = date.getHours(); 
  
   
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 23) {
      next(); 
    } else {
      res.send('hors time') 
      }
    };

    module.exports = testTime