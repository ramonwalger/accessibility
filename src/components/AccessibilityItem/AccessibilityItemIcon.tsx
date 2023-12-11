import { ElementType } from 'react'
interface AccessibilityItemIconProps {
  icon: ElementType
}

export function AccessibilityItemIcon({
  icon: Icon,
}: AccessibilityItemIconProps) {
  return <Icon />
}
