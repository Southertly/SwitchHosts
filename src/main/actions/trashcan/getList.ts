/**
 * @author: oldj
 * @homepage: https://oldj.net
 */

import { swhdb } from '@main/data'
import { IHostsListObject } from '@root/common/data'

export default async (): Promise<IHostsListObject[]> => {
  return await swhdb.list.trashcan.all()
}
