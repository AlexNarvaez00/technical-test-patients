import { ToPrimitives } from '../../shared/domain/ToPrimitives'
import { PatientProps } from './PatientProps'

export interface PatientPrimitives extends ToPrimitives<PatientProps> {
    id?: string
}
