import { t } from '@/hooks/web/useI18n'
import { LAYOUT } from '@/router/constant'

import type { AppRouteRecordRaw } from '@/router/types'

const echart: AppRouteRecordRaw = {
  path: '/echart',
  component: () => import('@/views/demo/echart/index'),
  meta: {
    i18nKey: t('menu.Echart'),
    icon: 'echart',
    order: 1,
    extra: {
      label: 'useChart',
    },
  },
}

export default echart
