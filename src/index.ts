import {
  ExecOp,
  NetMode,
  ProxyEnv,
  SecurityMode,
} from "./moby-buildkit/ops.js";
import protobuf from "protobufjs/minimal.js";
import fs from "node:fs/promises";

const msgWriter = new protobuf.Writer();

const proxyEnv: ProxyEnv = {
  httpProxy: "",
  httpsProxy: "",
  ftpProxy: "",
  noProxy: "",
  allProxy: "",
};

const testExecOp = {
  meta: {
    args: ["pwd"],
    env: [],
    cwd: ".",
    user: "root",
    proxyEnv,
    extraHosts: [],
    hostname: "",
    ulimit: [],
    cgroupParent: "",
    removeMountStubsRecursive: false,
  },
  mounts: [],
  network: NetMode.UNSET,
  security: SecurityMode.SANDBOX,
  secretenv: [],
};

ExecOp.encode(testExecOp, msgWriter);

const encoded = msgWriter.finish();

await fs.writeFile("./llb-test.bin", encoded);

console.log("Encoded msg", encoded);

const readBack = ExecOp.decode(encoded);

console.log("Decoded back to", readBack);
