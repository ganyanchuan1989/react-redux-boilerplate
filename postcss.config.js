module.exports = {
  parser: 'postcss-less',
  plugins: {
		'postcss-nested':{},
		'postcss-import': {path: ['./src']},
    'postcss-cssnext': {},
		'cssnano': {},
		'autoprefixer':{},
  }
}
