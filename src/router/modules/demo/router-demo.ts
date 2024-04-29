import { t } from '@/hooks/web/useI18n'
import { LAYOUT } from '@/router/constant'

import type { AppRouteRecordRaw } from '@/router/types'

const routerDemo: AppRouteRecordRaw = {
  path: '/router-demo',
  component: LAYOUT,
  meta: {
    i18nKey: t('menu.RouterDemo'),
    icon: 'other',
    order: 3,
  },
  children: [
    {
      path: 'router-demo-home',
      component: () =>
        import('@/views/demo/router-demo/router-demo-home/index'),
      meta: {
        noLocalTitle: '人员信息(平级模式)',
      },
    },
    {
      path: 'router-demo-detail',
      component: () =>
        import('@/views/demo/router-demo/router-demo-detail/index'),
      meta: {
        noLocalTitle: '信息详情',
        sameLevel: true,
      },
    },
  ],
}

export default routerDemo
