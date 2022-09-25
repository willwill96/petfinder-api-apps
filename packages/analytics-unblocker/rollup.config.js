import ts from "@rollup/plugin-typescript";
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'iife',
        },
        plugins: [
            ts(),
            nodeResolve(),
            replace({
                'process.env.NODE_ENV': process.env.NODE_ENV
              })
        ]
    }
]