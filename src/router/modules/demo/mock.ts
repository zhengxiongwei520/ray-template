import { t } from '@/hooks/web/useI18n'
import { LAYOUT } from '@/router/constant'

import type { AppRouteRecordRaw } from '@/router/types'

const mockDemo: AppRouteRecordRaw = {
  path: '/mock-demo',
  component: () => import('@/views/demo/mock-demo/index'),
  meta: {
    i18nKey: t('menu.Mock'),
    icon: 'other',
    order: 3,
    keepAlive: false,
    extra: {
      label: 'usePagination',
    },
  },
}

export default mockDemo
