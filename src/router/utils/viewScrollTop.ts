import { getElement } from '@/utils/element'
import { viewScrollContainerId } from '@/appConfig/routerConfig'

import type { RouteLocationNormalized } from 'vue-router'

/**
 *
 * 切换路由时, 手动将容器区域回归默认值
 *
 * 由于官方不支持这个方法了, 所以自己手写了一个
 * 如果需要忽略恢复默认位置, 仅需要在 meta 中配置 ignoreResetScroll 属性即可
 *
 * 找到滚动元素容器的写法有点丑陋, 暂时也想不到啥好方法解决, 就凑合一下吧
 */
const scrollViewToTop = (route: RouteLocationNormalized) => {
  const { meta } = route

  /** 这个 id 是注入在 layout 中 */
  if (!meta?.ignoreResetScroll) {
    const scrollViewRoot = getElement(`#${viewScrollContainerId}`)?.[0]

    if (scrollViewRoot && typeof scrollViewRoot.scroll) {
      /** 找到 NLayoutContent 组件滚动元素 */
      const scrollView = scrollViewRoot?.firstElementChild
        ?.firstChild as HTMLElement

      scrollView?.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
}

export default scrollViewToTop