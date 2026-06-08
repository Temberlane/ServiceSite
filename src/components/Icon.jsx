import { ICONS } from '../data'

export default function Icon({ name, style, className }) {
  return (
    <span
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  )
}
