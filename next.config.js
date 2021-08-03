module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['.'],
      prependData: `@import "assets/_media-queries.scss";`, // https://stackoverflow.com/questions/60951575/next-js-using-sass-variables-from-global-scss
    }
  }
  return defaultConfig
}
