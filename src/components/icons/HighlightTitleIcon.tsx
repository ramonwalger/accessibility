import { IconProps } from './types'

export default function HighlightTitleIcon({
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
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      {...props}
    >
      <path d="M490.667,0H21.333C9.536,0,0,9.557,0,21.333v469.333C0,502.443,9.536,512,21.333,512h469.333 c11.797,0,21.333-9.557,21.333-21.333V21.333C512,9.557,502.464,0,490.667,0z M362.667,426.667H149.333 c-11.797,0-21.333-9.557-21.333-21.333S137.536,384,149.333,384h213.333c11.797,0,21.333,9.557,21.333,21.333 S374.464,426.667,362.667,426.667z M384,149.333c0,11.776-9.536,21.333-21.333,21.333s-21.333-9.557-21.333-21.333V128h-64 v170.667h21.333c11.797,0,21.333,9.557,21.333,21.333s-9.536,21.333-21.333,21.333h-85.333C201.536,341.333,192,331.776,192,320 s9.536-21.333,21.333-21.333h21.333V128h-64v21.333c0,11.776-9.536,21.333-21.333,21.333c-11.797,0-21.333-9.557-21.333-21.333 v-42.667c0-11.776,9.536-21.333,21.333-21.333h213.333c11.797,0,21.333,9.557,21.333,21.333V149.333z" />
    </svg>
  )
}
