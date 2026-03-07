export const codeString = `import { useState } from 'react'
import { Switch } from '@headlessui/react'

export function NotificationExample() {
  const [enabled, setEnabled] = useState(true)

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="notifications">
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  )
}

`;