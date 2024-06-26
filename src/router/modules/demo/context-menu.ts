import { t } from '@/hooks/web/useI18n'

import type { AppRouteRecordRaw } from '@/router/types'

const contextMenu: AppRouteRecordRaw = {
  path: '/context-menu',
  component: () => import('@/views/demo/context-menu/index'),
  meta: {
    i18nKey: t('menu.ContextMenu'),
    icon: 'other',
    order: 2,
  },
}

export default contextMenu
