import { ReactNode } from 'react'

interface AccessibilityItemRootProps {
  children: ReactNode
}

export function AccessibilityItemRoot({
  children,
}: AccessibilityItemRootProps) {
  return <li className="accessibility-item">{children}</li>
}
