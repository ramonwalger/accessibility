import { IconProps } from './types'

export default function FontSizeIcon({
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
      viewBox="0 0 47.492 47.492"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d="M19.099,31.127H9.837l-2.303,8.611H0L9.837,7.746h9.597L27.75,34.15l5.434-17.421h6.98l7.328,23.017h-5.757l-1.815-6.263h-6.736l-1.675,6.263l-9.915-0.008L19.099,31.127z M10.893,25.924h7.15l-2.015-6.798l-0.852-3.09l-0.78-3.089H14.3l-0.726,3.117l-0.762,3.142L10.893,25.924z M33.952,29.7h5.2l-1.466-4.944l-0.619-2.247L36.5,20.263h-0.07l-0.528,2.267l-0.554,2.285L33.952,29.7z M30.44,7.746h12l-6,6L30.44,7.746z" />
    </svg>
  )
}