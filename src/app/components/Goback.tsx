
import {  useRouter} from 'next/navigation'

import {  Button,} from 'antd';

export default function Page() {
  const router = useRouter()

  return (
    <div style={{position: 'absolute',
      top: '180px',
      left: '0',
    }}>
      
      <Button type="primary" onClick={() => router.back()}>
      go back
    </Button>

    </div>

  )
}