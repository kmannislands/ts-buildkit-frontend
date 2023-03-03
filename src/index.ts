import {
  NetMode,
  Op,
  Platform,
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

const platform: Platform = {
  Architecture: "amd64",
  OS: "linux",
  Variant: "alpine",
  OSVersion: "",
  OSFeatures: [],
};

Op.encode(
  {
    inputs: [],
    exec: testExecOp,
    platform,
    constraints: {
      filter: [],
    },
  },
  msgWriter
);

const encoded = msgWriter.finish();

await fs.writeFile("./llb-test.bin", encoded);

console.log("Encoded msg", encoded);

const readBack = Op.decode(encoded);

console.log("Decoded back to", readBack);
