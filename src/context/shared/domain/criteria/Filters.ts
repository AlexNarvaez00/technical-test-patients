import { Filter, FilterValue } from './Filter'
import type { Operator } from './Operator'

export type FilterValues = [[string, Operator, FilterValue]]
export class Filters {
    private constructor(public readonly filters: Filter[]) {}

    public static fromValues(values: FilterValues) {
        const filters = values.map((filter) => {
            return Filter.fromValues(filter)
        })

        return new Filters(filters)
    }

    public static none() {
        return new Filters([])
    }
}
