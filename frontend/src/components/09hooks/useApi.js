import useSWR from 'swr'
import api from '../08services/api'

export const useApi = url => {
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url)
    return response.data
  })
  return { data, error }
}
