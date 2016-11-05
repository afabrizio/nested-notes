const express = require('express');

const app = express();
app.use(express.static('dist/public'));
app.listen(
  process.env.PORT || 8080,
  () => {
    console.log('server listening on port ' + (process.env.PORT || 8080) )
  }
);
