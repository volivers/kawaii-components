module.exports = {
  title: 'Kawaii Components',
  pagePerSection: true,
  sections: [
    {
      name: 'Overview',
      content: 'docs/Overview.md',
      description: 'Welcome'
    },
    {
      name: 'Getting Started',
      content: 'docs/GettingStarted.md'
    },
    {
      name: 'Guidelines',
      components: './src/guidelines/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    },
    {
      name: 'Components',
      components: './src/components/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    }
  ],
  skipComponentsWithoutExample: true,
  serverPort: 3000
};

