import type { AppRouteRecordRaw } from '@/router/type'

const iframe: AppRouteRecordRaw = {
  path: '/iframe',
  name: 'IframeDemo',
  component: () => import('@/views/iframe/index'),
  meta: {
    icon: 'rely',
    order: 2,
    noLocalTitle: 'iframe',
  },
}

export default iframe