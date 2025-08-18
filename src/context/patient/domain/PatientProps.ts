import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { PatientAge } from './PatientAge'
import { PatientName } from './PatientName'
import { PatientSymptoms } from './PatientSymptoms'

export interface PatientProps {
    id: Uuid
    name: PatientName
    age: PatientAge
    symptoms: PatientSymptoms
}
