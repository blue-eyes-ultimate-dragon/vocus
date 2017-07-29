/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

// ----------------------

const Html = ({ head, html, scripts, window, css }) => (
  <html lang="en" prefix="og: http://ogp.me/ns#">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous" />
      {head.meta.toComponent()}
      <link rel="stylesheet" href={css} />
      {head.title.toComponent()}
    </head>
    <body>
      <div
        id="main"
        dangerouslySetInnerHTML={{ __html: html }} />
      <script
        dangerouslySetInnerHTML={{
          __html: Object.keys(window).reduce(
            (out, key) => out += `window.${key}=${JSON.stringify(window[key])};`,
          ''),
        }} />
      {scripts.map(src => <script key={src} src={src} />)}
    </body>
  </html>
);

Html.propTypes = {
  head: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
  window: PropTypes.object.isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
  css: PropTypes.string.isRequired,
};

export default Html;
