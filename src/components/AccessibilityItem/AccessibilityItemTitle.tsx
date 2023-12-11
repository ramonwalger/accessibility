interface AccessibilityItemTitleProps {
  title: string
}

export function AccessibilityItemTitle({ title }: AccessibilityItemTitleProps) {
  return <span className="accessibility-item__title">{title}</span>
}
