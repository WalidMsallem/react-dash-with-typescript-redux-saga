const URL = {
  baseApiUrl: () => 'http://localhost:5000',
  user: {
    auth: '/auth',
    me: '/myinfo',
  },
  charts: {
    fetchBandWith: `/bandwidth`,
  },
}

export default URL
