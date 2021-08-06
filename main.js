const SponsorIcon = {
  template: `
  <svg style="color:#ea4aaa;" fill="currentColor" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"></path></svg>
  `
}

new Docute({
  target: '#app',
  title: 'DativeJs',
  editLinkBase: 'https://github.com/Tobithedev/DativeWeb/tree/master/',
  editLinkText: 'Edit this page on GitHub',
  router: {
    mode: 'hash'
  },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  nav: [
    {
      title: 'Home',
      link: '/'
      },
    {
      title: 'GitHub',
      link: 'https://github.com/Tobithedev/DativeJs'
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [
          {
            title: 'Introduction',
            link: '/'
            },
          {
            title: 'Installation',
            link: '/installation'
            },
          {
            title: 'Template',
            link: '/template'
            },
          {
            title: 'Computed Property',
            link: '/computed'
            },
          {
            title: 'List Rendering',
            link: '/listrendering'
          },
          ]
        },
      {
        title: 'Advanced',
        children: [
          {
            title: 'State Management',
            link: '/state-management'
          },
          {
            title: 'Plugin',
            link: '/plugin'
          },
          ]
        },
      {
        title: 'References',
        children: [
          {
            title: 'Options',
            link: '/options'
          },
          ]
        },
      {
        title: 'Credits',
        link: '/credits'
        }
      ],
    overrides: {
        '/': {
          language: 'English'
        },
        '/chinese/': {
          language: 'Chinese',
          editLinkText: '在 GitHub 上编辑此页',
          editLinkBase: 'https://github.com/Tobithedev/DativeWeb/tree/master/',
          nav: [
            {
              title: '家',
              link: '/chinese/'
            },
            {
              title: 'GitHub',
              link: 'https://github.com/Tobithedev/DativeJs'
            },
          ],
          sidebar: [
            {
              title: '指导',
              children: [
                {
                  title: '简介',
                  link: '/chinese/'
                      },
                {
                  title: '安装',
                  link: '/chinese/installation'
                      },
                {
                  title: '模板',
                  link: '/chinese/template'
                      },
                {
                  title: '计算属性',
                  link: '/chinese/computed'
                      },
                {
                  title: '列表渲染',
                  link: '/chinese/listrendering'
                    },
                    ]
                  },
            {
              title: '先进的',
              children: [
                {
                  title: '状态管理',
                  link: '/chinese/state-management'
                    },
                {
                  title: '插件',
                  link: '/chinese/plugin'
                    },
                    ]
                  },
            {
              title: '参考文献',
              children: [
                {
                  title: '选项',
                  link: '/chinese/options'
                    },
                    ]
                  },
            {
              title: '学分',
              link: '/chinese/credits'
                  }
            ],
            
        }
    },
    footer: `
      <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
      &copy; 2021-${new Date().getFullYear()} Developed by <a href="https://tobithedev.github.io" target="_blank">Tobithedev</a>. Released under MIT license.
      </div>
      `,
      banner: {
        template: `
            <div class="docute-banner">
              <note :label="false"
                ><SponsorIcon width="16" height="16" style="position:relative;top:2px;margin-right:8px;" />Sponsor the author on
                <a href="https://github.com/sponsors/DativeJs" target="_blank"
                  >GitHub<ExternalLinkIcon /></a
                > to support DativeJs.</note
              >
            </div>
          `,
        components: {
          SponsorIcon
        }
      }
})
