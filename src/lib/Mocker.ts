import { Schema } from './Schema'
import { cleanVirtuals } from './utils'

export type PromiseCb = Promise<any> | void
export type IDB = {
    [key: string]: any[]
}
export class Mocker {
    schemas: Schema[] = []
    DB: IDB = {}
    options = {}

    constructor(options = {}) {
        this.options = options
        this.DB = {}
    }

    schema(name: string, schema: {}, options?: {}): Mocker {
        this.schemas.push(new Schema(name, schema, options))
        return this
    }

    reset(): Mocker {
        this.DB = {}
        return this
    }

    restart(): Mocker {
        this.DB = {}
        this.schemas = []
        return this
    }

    build(cb?: ((error: Error | null , _?: any) => void)): Promise<any>
    build(cb?: ((error: Error | null , _?: any) => void)): void
    build(cb?: ((error: Error | null , _?: any) => void)): any {
        try {
            this.schemas.reduce((acc, schema) => {
                let instances

                try {
                    instances = schema.build(acc)
                } catch (e) {
                    throw new Error('Schema: "' + schema.name + '" ' + e)
                }

                // Clean virtuals
                if (schema.virtualPaths.length > 0) {
                    instances.forEach(x =>
                        cleanVirtuals(schema.virtualPaths, x, {
                            strict: true,
                            symbol: ','
                        })
                    )
                }

                // Add to db
                acc[schema.name] = instances

                return acc
            }, this.DB)
        } catch (e) {
            return (cb)
                ? cb(e)
                : Promise.reject(e)
        }

        return (cb)
            ? cb(null, this.DB)
            : Promise.resolve(this.DB)
    }
}
