import useSWR from 'swr'
import PersonComponent from '../components/Person'
import type { Person } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<Person[]>('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <div>
      <h1>This is api service for Sow-SDK (Blockchain Name Service)</h1>
    </div>
  )
}
