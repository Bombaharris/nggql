import {mapSchema, MapperKind, getDirective} from "@graphql-tools/utils";

export function upperDirective(directiveName) {
    return {
        upperDirectiveTypeDefs: `directive @${directiveName} on FIELD_DEFINITION`,
        upperDirectiveTransformer: (schema) =>
            mapSchema(schema, {
                [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
                    const fieldDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
                    if (fieldDirective) {
                        const { resolve = defaultFieldResolver } = fieldConfig;
                        fieldConfig.resolve = async (source, args, context, info) => {
                            const result = await resolve(source, args, context, info);
                            if (typeof result === "string") {
                                return result.toUpperCase();
                            }
                            return result;
                        };
                    }
                    return fieldConfig;
                },
            }),
    };
}