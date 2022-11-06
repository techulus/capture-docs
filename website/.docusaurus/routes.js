import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '328'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '362'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b7b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fa3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '276'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1f6'),
    routes: [
      {
        path: '/docs/advanced-options',
        component: ComponentCreator('/docs/advanced-options', '130'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/batch-image',
        component: ComponentCreator('/docs/batch-image', '298'),
        exact: true,
        sidebar: "apis"
      },
      {
        path: '/docs/batch-pdf',
        component: ComponentCreator('/docs/batch-pdf', 'cd4'),
        exact: true,
        sidebar: "apis"
      },
      {
        path: '/docs/caching',
        component: ComponentCreator('/docs/caching', 'eca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/content-options',
        component: ComponentCreator('/docs/content-options', 'a1c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/get-started',
        component: ComponentCreator('/docs/get-started', '417'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/pdf-options',
        component: ComponentCreator('/docs/pdf-options', 'f62'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/screenshot-options',
        component: ComponentCreator('/docs/screenshot-options', '678'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/slack-integration',
        component: ComponentCreator('/docs/slack-integration', 'c57'),
        exact: true,
        sidebar: "Integrations"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '48f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
