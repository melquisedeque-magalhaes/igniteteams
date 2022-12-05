import * as IconsPhosphor from 'phosphor-react-native'

interface IconProps {
  name: keyof typeof IconsPhosphor
  color: string
}

export function Icon({ name, color }: IconProps) {
  if(!name){
    return <></>
  }

  const IconComponent = (IconsPhosphor as any)[name] as React.FC<React.SVGAttributes<SVGElement>>

  if(IconComponent){
    return <IconComponent color={color} />
  }

  return <></>
}