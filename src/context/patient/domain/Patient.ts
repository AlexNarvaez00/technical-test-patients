import { Entity } from '../../shared/domain/Entity'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { PatientAge } from './PatientAge'
import { PatientName } from './PatientName'
import { PatientPrimitives } from './PatientPrimitives'
import { PatientProps } from './PatientProps'
import { PatientSymptoms } from './PatientSymptoms'

export class Patient extends Entity<PatientProps> {
    private constructor(props: PatientProps) {
        super(props, props.id)
    }

    public get id(): string {
        return this._id.value
    }

    public get age(): number {
        return this.props.age.value
    }

    public get name(): string {
        return this.props.name.value
    }

    public get symptoms(): string {
        return this.props.symptoms.value
    }

    private static create(props: PatientProps): Patient {
        return new Patient(props)
    }

    public static fromPrimitives({
        id,
        age,
        name,
        symptoms,
    }: PatientPrimitives): Patient {
        return new Patient({
            id: id ? new Uuid(id) : Uuid.random(),
            age: new PatientAge(age),
            name: new PatientName(name),
            symptoms: new PatientSymptoms(symptoms),
        })
    }

    public toPrimitives(): PatientPrimitives {
        return {
            id: this.id,
            age: this.age,
            name: this.name,
            symptoms: this.symptoms,
        }
    }
}
