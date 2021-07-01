/**
 * User selectors
 */

import { createSelector } from 'reselect'

export const selectisAuthenticated = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.local.isAuthenticated,
)

export const selectisUserInfo = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.data.userInfo,
)
export const selectLoginError = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.local.errors.loginUser,
)
export const selectLoginLogin = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.local.loading.loginUser,
)
