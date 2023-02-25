import { pb } from './ops.js';

const metaPayload: pb.IExecOp = { meta: { foo: 1 } as any };

const error = pb.ExecOp.verify(metaPayload);

if (error) {
    throw new Error(error);
}