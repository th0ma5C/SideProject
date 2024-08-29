import request from '@/utils/request/requests'
import type * as menuType from './type'

enum API {
    newList_URL = '/api/menu/newCatalog',
    hotList_URL = '/api/menu/hotCatalog',
    graphQL = '/api/graphql'
}

// 首頁菜單圖片
export const reqGetNewMenu = (params?: any) => request.get<any, menuType.MenuItem[]>(API.newList_URL, params);
export const reqGetHotMenu = (params?: any) => request.get<any, menuType.MenuItem[]>(API.hotList_URL, params);

// 菜單頁
export const reqMenu = (params?: any) => request.post<any, menuType.MenuQueryResponse>(API.graphQL, params);

// 商品頁
// export const reqProductByName = (name: string) => request.post(API.graphQL, name);