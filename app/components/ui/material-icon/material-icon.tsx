import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/hooks/use-render-client';

import { TypeMaterialIcon } from '@/shared/types/icon.types';

type MaterialIconProps = {
  name: TypeMaterialIcon;
};
function MaterialIcon({ name }: MaterialIconProps): JSX.Element | null {
  const { isRenderClient } = useRenderClient();
  const IconComponent = MaterialIcons[name];

  return isRenderClient
    ? <IconComponent /> || <MaterialIcons.MdDragIndicator />
    : null;
}
export default MaterialIcon;
