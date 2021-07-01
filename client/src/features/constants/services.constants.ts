const URL = {
  baseApiUrl: () => 'http://localhost:5000',
  user: {
    auth: '/auth',
    me: '/myinfo',
    logout:'/logout'
  },
  charts: {
    fetchBandWith: `/bandwidth`,
    fetchConcurrent: `/audience`,
    fetchAggregatedStatsByCountries :'/countries'
  },
}

export default URL
