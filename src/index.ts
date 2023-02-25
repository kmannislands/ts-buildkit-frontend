import { ExecOp } from './moby-buildkit/ops.js';

ExecOp.encode({
    meta: { args: ['pwd'], env: [], cwd: '.'}
} as any);