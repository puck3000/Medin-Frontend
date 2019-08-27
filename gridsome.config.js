// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Medin Biel Bienne',
  plugins: [{
    use: 'gridsome-source-graphql',
    options: {
      url: 'https://medinbackend.daniellerch.ch/api',
      fieldName: 'medin',
      typeName: 'medinTypes',
      headers: {
        Authorization: `Bearer gWrFJln9LH9o67J8XmJwBscsa2ij0ORuX5LUEUUhX3w8l52USH8dDS913l7b0B_P`,
      },
    },
  }, ]
};