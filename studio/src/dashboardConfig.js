export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec029b5496fb587401e1d0d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s7ie1zn8',
                  apiId: '0db9c19a-9957-4ab2-91e0-e38c58163fc4'
                },
                {
                  buildHookId: '5ec029b51234053d0e02cf79',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-45ia38es',
                  apiId: '1d6e88c9-3860-4419-88c2-124d2ae9f2a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JonnyGoodwin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-45ia38es.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
