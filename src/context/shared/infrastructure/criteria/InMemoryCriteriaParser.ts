import { Criteria } from '../../domain/criteria/Criteria'
import { Filter } from '../../domain/criteria/Filter'
import { Operator } from '../../domain/criteria/Operator'
import { Operators } from '../../domain/criteria/Operators'
import { ToPrimitives } from '../../domain/ToPrimitives'

type Values<T> = ToPrimitives<T>[]
type Converter = <T>(filter: Filter, values: Values<T>) => Values<T>

export class InMemoryCriteriaParser {
    private readonly transformers = new Map<Operator, Converter>([
        [Operators.EQ, this.filterEqual],
        [Operators.LT, this.filterLeesThan],
        [Operators.GT, this.filterGreaterThan],
        [Operators.EQ, this.filterEqual],
        [Operators.CONTAINS, this.filterContains],
    ])

    public parse<T>(criteria: Criteria, values: ToPrimitives<T>[]): Values<T> {
        const {
            filters: { filters },
            skip,
            limit,
        } = criteria

        filters.forEach((filter: Filter) => {
            const transformer = this.transformers.get(filter.operator)
            if (transformer) {
                values = transformer(filter, values)
            } else {
                throw new Error(`Operator ${filter.operator} not supported`)
            }
        })

        return values.slice(skip ?? 0, (skip ?? 0) + (limit ?? values.length))
    }

    private filterContains<T>(filter: Filter, values: Values<T>): Values<T> {
        const { field, value } = filter
        return values.filter((item) =>
            String(item[field as keyof typeof item]).includes(value as string)
        )
    }

    private filterEqual<T>(filter: Filter, values: Values<T>): Values<T> {
        const { field, value } = filter
        return values.filter(
            (item) => item[field as keyof typeof item] === value
        )
    }

    private filterGreaterThan<T>(filter: Filter, values: Values<T>): Values<T> {
        const { field, value } = filter
        return values.filter(
            (item) => Number(item[field as keyof typeof item]) > Number(value)
        )
    }

    private filterLeesThan<T>(filter: Filter, values: Values<T>): Values<T> {
        const { field, value } = filter
        return values.filter(
            (item) => Number(item[field as keyof typeof item]) < Number(value)
        )
    }
}
