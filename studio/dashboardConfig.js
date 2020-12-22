export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fe2863de8a4d53f62fe3f59',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio-fok23dgr',
                  apiId: '3e119ea9-c6df-49f7-8cd8-7940a5bf0a29'
                },
                {
                  buildHookId: '5fe2863d3702e7449de7a150',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-web-r86235t2',
                  apiId: '9e440a6f-1e40-4726-a2c1-4642e385cac8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kzai/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-web-r86235t2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
