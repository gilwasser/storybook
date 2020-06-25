import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FnParam } from '@angular/compiler/src/output/output_ast';

export interface TextButton {
    text: string,
    icon?: IconName,
    onClick:FnParam
}