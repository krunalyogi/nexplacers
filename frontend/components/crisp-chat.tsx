'use client'

import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    if (!window.$crisp) {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = 'd7fe6568-a6a8-46f0-bc00-39ac2619ca54'

      const script = document.createElement('script')
      script.src = 'https://client.crisp.chat/l.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return null
}
