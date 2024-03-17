/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-11-22
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import { modalProps } from 'naive-ui'

const props = {
  ...modalProps,
  /**
   *
   * @description
   * 是否记住上一次的位置。
   *
   * @default true
   */
  memo: {
    type: Boolean,
    default: true,
  },
  /**
   *
   * @description
   * 是否全屏。
   *
   * @default false
   */
  fullscreen: {
    type: Boolean,
    default: false,
  },
  /**
   *
   * @description
   * preset 空时宽度设置。
   *
   * @default 600
   */
  width: {
    type: [String, Number],
    default: 600,
  },
  /**
   *
   * @description
   * preset 为 card 时宽度设置。
   *
   * @default 600
   */
  cardWidth: {
    type: [String, Number],
    default: 600,
  },
  /**
   *
   * @description
   * preset 为 dialog 时宽度设置。
   *
   * @default 446
   */
  dialogWidth: {
    type: [String, Number],
    default: 446,
  },
  /**
   *
   * @description
   * 是否启用拖拽。
   * 当启用拖拽时，可以通过拖拽 header 部分控制模态框。
   *
   * @default false
   */
  dad: {
    type: Boolean,
    default: false,
  },
}

export default props
