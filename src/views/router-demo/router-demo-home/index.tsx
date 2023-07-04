/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-06-30
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import { NSpace, NDataTable, NButton } from 'naive-ui'

import { useVueRouter } from '@/router/helper/useVueRouter'

import type { DataTableColumns } from 'naive-ui'

export interface RowData {
  key: string | number
  name: string
  phone: string
  address: string
}

const RouterDemoHome = defineComponent({
  name: 'RouterDemoHome',
  setup() {
    const { router } = useVueRouter()

    const columns: DataTableColumns<RowData> = [
      {
        title: '姓名',
        key: 'name',
      },
      {
        title: '地址',
        key: 'address',
      },
      {
        title: '联系方式',
        key: 'phone',
      },
      {
        title: '操作',
        key: '',
        render: (row) => {
          return (
            <NSpace align="center">
              <NButton
                type="info"
                text
                size="tiny"
                onClick={() => {
                  router.push({
                    path: '/router-demo/router-demo-detail',
                    query: {
                      row: JSON.stringify(row),
                    },
                  })
                }}
              >
                详情
              </NButton>
            </NSpace>
          )
        },
      },
    ]
    const dataSource: RowData[] = []

    for (let i = 0; i < 10; i++) {
      dataSource.push({
        name: '张三',
        address: 'New York No. 1 Lake Park',
        phone: '010-121212',
        key: i,
      })
    }

    return {
      dataSource,
      columns,
    }
  },
  render() {
    return (
      <NSpace wrapItem={false}>
        <NDataTable columns={this.columns} data={this.dataSource} />
      </NSpace>
    )
  },
})

export default RouterDemoHome