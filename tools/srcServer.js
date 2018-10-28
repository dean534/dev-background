import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const port = 3001;
const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static('src'));
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publishPath,
}));

app.use(webpackHotMiddleware(compiler));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port); // eslint-disable-line
  }
});
