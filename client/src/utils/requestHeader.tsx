export const requestHeader = (options: object): object => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
    ...options,
  },
})

export const requestHeaderWithoutToken = (): object => ({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
export const getToken = (): string | null => localStorage.getItem('token')
