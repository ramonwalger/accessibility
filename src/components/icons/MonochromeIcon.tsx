import { IconProps } from './types'

export default function MonochromeIcon({
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
      viewBox="0 0 412.16 412.16"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d="M326.72,120.747L206.08,0L85.44,120.747c-66.667,66.667-66.667,174.72,0,241.387c33.28,33.28,77.013,50.027,120.64,50.027 s87.36-16.64,120.64-50.027C393.387,295.467,393.387,187.413,326.72,120.747z M206.08,369.387 c-34.24,0-66.347-13.333-90.453-37.547c-24.213-24.107-37.547-56.213-37.547-90.453s13.333-66.347,37.547-90.56l90.453-90.453 V369.387z" />
    </svg>
  )
}
