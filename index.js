// A simple implementation of the builder design pattern.

function Builder(init = () => ({}), methods = {}) {
    return {
        init: (...initArgs) => {
            let obj = init(...initArgs);
            const builder = {}
            for (let key in methods) {
                function method(...args) {
                    methods[key](obj, ...args);
                    return builder;
                }
                Object.defineProperty(builder, key, { value: method });
            }
            Object.defineProperty(builder, "build", { value: () => obj });
            return builder;
        }
    }
}

module.exports = Builder;
