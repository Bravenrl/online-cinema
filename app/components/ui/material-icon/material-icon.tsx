import { TypeMaterialIcon } from "@/shared/types/icon.types"
import * as MaterialIcons from 'react-icons/md';

type MaterialIconProps = {
    name: TypeMaterialIcon
}
function MaterialIcon({name}: MaterialIconProps):JSX.Element {
    const IconComponent = MaterialIcons[name];

  return <IconComponent/> || <MaterialIcons.MdDragIndicator/>
}
export default MaterialIcon