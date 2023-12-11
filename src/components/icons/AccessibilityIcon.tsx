import { IconProps } from './types'

export default function AccessibilityIcon({
  color = 'currentColor',
  size = 24,
  ...props
}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="adjust"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 510 510"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d="M255,0c28.05,0,51,22.95,51,51s-22.95,51-51,51s-51-22.95-51-51S226.95,0,255,0z M484.5,178.5h-153V510h-51V357h-51v153h-51V178.5h-153v-51h459V178.5z" />
    </svg>
  )
}
