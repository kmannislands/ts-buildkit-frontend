/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "pb";

export enum NetMode {
  /** UNSET - sandbox */
  UNSET = 0,
  HOST = 1,
  NONE = 2,
  UNRECOGNIZED = -1,
}

export function netModeFromJSON(object: any): NetMode {
  switch (object) {
    case 0:
    case "UNSET":
      return NetMode.UNSET;
    case 1:
    case "HOST":
      return NetMode.HOST;
    case 2:
    case "NONE":
      return NetMode.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NetMode.UNRECOGNIZED;
  }
}

export function netModeToJSON(object: NetMode): string {
  switch (object) {
    case NetMode.UNSET:
      return "UNSET";
    case NetMode.HOST:
      return "HOST";
    case NetMode.NONE:
      return "NONE";
    case NetMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SecurityMode {
  SANDBOX = 0,
  /** INSECURE - privileged mode */
  INSECURE = 1,
  UNRECOGNIZED = -1,
}

export function securityModeFromJSON(object: any): SecurityMode {
  switch (object) {
    case 0:
    case "SANDBOX":
      return SecurityMode.SANDBOX;
    case 1:
    case "INSECURE":
      return SecurityMode.INSECURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SecurityMode.UNRECOGNIZED;
  }
}

export function securityModeToJSON(object: SecurityMode): string {
  switch (object) {
    case SecurityMode.SANDBOX:
      return "SANDBOX";
    case SecurityMode.INSECURE:
      return "INSECURE";
    case SecurityMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** MountType defines a type of a mount from a supported set */
export enum MountType {
  BIND = 0,
  SECRET = 1,
  SSH = 2,
  CACHE = 3,
  TMPFS = 4,
  UNRECOGNIZED = -1,
}

export function mountTypeFromJSON(object: any): MountType {
  switch (object) {
    case 0:
    case "BIND":
      return MountType.BIND;
    case 1:
    case "SECRET":
      return MountType.SECRET;
    case 2:
    case "SSH":
      return MountType.SSH;
    case 3:
    case "CACHE":
      return MountType.CACHE;
    case 4:
    case "TMPFS":
      return MountType.TMPFS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MountType.UNRECOGNIZED;
  }
}

export function mountTypeToJSON(object: MountType): string {
  switch (object) {
    case MountType.BIND:
      return "BIND";
    case MountType.SECRET:
      return "SECRET";
    case MountType.SSH:
      return "SSH";
    case MountType.CACHE:
      return "CACHE";
    case MountType.TMPFS:
      return "TMPFS";
    case MountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** CacheSharingOpt defines different sharing modes for cache mount */
export enum CacheSharingOpt {
  /** SHARED - SHARED cache mount can be used concurrently by multiple writers */
  SHARED = 0,
  /** PRIVATE - PRIVATE creates a new mount if there are multiple writers */
  PRIVATE = 1,
  /** LOCKED - LOCKED pauses second writer until first one releases the mount */
  LOCKED = 2,
  UNRECOGNIZED = -1,
}

export function cacheSharingOptFromJSON(object: any): CacheSharingOpt {
  switch (object) {
    case 0:
    case "SHARED":
      return CacheSharingOpt.SHARED;
    case 1:
    case "PRIVATE":
      return CacheSharingOpt.PRIVATE;
    case 2:
    case "LOCKED":
      return CacheSharingOpt.LOCKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CacheSharingOpt.UNRECOGNIZED;
  }
}

export function cacheSharingOptToJSON(object: CacheSharingOpt): string {
  switch (object) {
    case CacheSharingOpt.SHARED:
      return "SHARED";
    case CacheSharingOpt.PRIVATE:
      return "PRIVATE";
    case CacheSharingOpt.LOCKED:
      return "LOCKED";
    case CacheSharingOpt.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Op represents a vertex of the LLB DAG. */
export interface Op {
  /** inputs is a set of input edges. */
  inputs: Input[];
  exec?: ExecOp | undefined;
  source?: SourceOp | undefined;
  file?: FileOp | undefined;
  build?: BuildOp | undefined;
  merge?: MergeOp | undefined;
  diff?: DiffOp | undefined;
  platform: Platform | undefined;
  constraints: WorkerConstraints | undefined;
}

/** Platform is github.com/opencontainers/image-spec/specs-go/v1.Platform */
export interface Platform {
  Architecture: string;
  OS: string;
  Variant: string;
  /** unused */
  OSVersion: string;
  /** unused */
  OSFeatures: string[];
}

/** Input represents an input edge for an Op. */
export interface Input {
  /** digest of the marshaled input Op */
  digest: string;
  /** output index of the input Op */
  index: number;
}

/** ExecOp executes a command in a container. */
export interface ExecOp {
  meta: Meta | undefined;
  mounts: Mount[];
  network: NetMode;
  security: SecurityMode;
  secretenv: SecretEnv[];
}

/**
 * Meta is a set of arguments for ExecOp.
 * Meta is unrelated to LLB metadata.
 * FIXME: rename (ExecContext? ExecArgs?)
 */
export interface Meta {
  args: string[];
  env: string[];
  cwd: string;
  user: string;
  proxyEnv: ProxyEnv | undefined;
  extraHosts: HostIP[];
  hostname: string;
  ulimit: Ulimit[];
  cgroupParent: string;
  removeMountStubsRecursive: boolean;
}

export interface HostIP {
  Host: string;
  IP: string;
}

export interface Ulimit {
  Name: string;
  Soft: number;
  Hard: number;
}

/** SecretEnv is an environment variable that is backed by a secret. */
export interface SecretEnv {
  ID: string;
  name: string;
  optional: boolean;
}

/** Mount specifies how to mount an input Op as a filesystem. */
export interface Mount {
  input: number;
  selector: string;
  dest: string;
  output: number;
  readonly: boolean;
  mountType: MountType;
  TmpfsOpt: TmpfsOpt | undefined;
  cacheOpt: CacheOpt | undefined;
  secretOpt: SecretOpt | undefined;
  SSHOpt: SSHOpt | undefined;
  resultID: string;
}

/** TmpfsOpt defines options describing tpmfs mounts */
export interface TmpfsOpt {
  /** Specify an upper limit on the size of the filesystem. */
  size: number;
}

/** CacheOpt defines options specific to cache mounts */
export interface CacheOpt {
  /** ID is an optional namespace for the mount */
  ID: string;
  /** Sharing is the sharing mode for the mount */
  sharing: CacheSharingOpt;
}

/** SecretOpt defines options describing secret mounts */
export interface SecretOpt {
  /** ID of secret. Used for quering the value. */
  ID: string;
  /** UID of secret file */
  uid: number;
  /** GID of secret file */
  gid: number;
  /** Mode is the filesystem mode of secret file */
  mode: number;
  /**
   * Optional defines if secret value is required. Error is produced
   * if value is not found and optional is false.
   */
  optional: boolean;
}

/** SSHOpt defines options describing ssh mounts */
export interface SSHOpt {
  /** ID of exposed ssh rule. Used for quering the value. */
  ID: string;
  /** UID of agent socket */
  uid: number;
  /** GID of agent socket */
  gid: number;
  /** Mode is the filesystem mode of agent socket */
  mode: number;
  /**
   * Optional defines if ssh socket is required. Error is produced
   * if client does not expose ssh.
   */
  optional: boolean;
}

/** SourceOp specifies a source such as build contexts and images. */
export interface SourceOp {
  /**
   * TODO: use source type or any type instead of URL protocol.
   * identifier e.g. local://, docker-image://, git://, https://...
   */
  identifier: string;
  /** attrs are defined in attr.go */
  attrs: { [key: string]: string };
}

export interface SourceOp_AttrsEntry {
  key: string;
  value: string;
}

/**
 * BuildOp is used for nested build invocation.
 * BuildOp is experimental and can break without backwards compatibility
 */
export interface BuildOp {
  builder: number;
  inputs: { [key: string]: BuildInput };
  def:
    | Definition
    | undefined;
  /** outputs */
  attrs: { [key: string]: string };
}

export interface BuildOp_InputsEntry {
  key: string;
  value: BuildInput | undefined;
}

export interface BuildOp_AttrsEntry {
  key: string;
  value: string;
}

/** BuildInput is used for BuildOp. */
export interface BuildInput {
  input: number;
}

/** OpMetadata is a per-vertex metadata entry, which can be defined for arbitrary Op vertex and overridable on the run time. */
export interface OpMetadata {
  /** ignore_cache specifies to ignore the cache for this Op. */
  ignoreCache: boolean;
  /** Description can be used for keeping any text fields that builder doesn't parse */
  description: { [key: string]: string };
  /**
   * index 3 reserved for WorkerConstraint in previous versions
   * WorkerConstraint worker_constraint = 3;
   */
  exportCache: ExportCache | undefined;
  caps: { [key: string]: boolean };
  progressGroup: ProgressGroup | undefined;
}

export interface OpMetadata_DescriptionEntry {
  key: string;
  value: string;
}

export interface OpMetadata_CapsEntry {
  key: string;
  value: boolean;
}

/** Source is a source mapping description for a file */
export interface Source {
  locations: { [key: string]: Locations };
  infos: SourceInfo[];
}

export interface Source_LocationsEntry {
  key: string;
  value: Locations | undefined;
}

/** Locations is a list of ranges with a index to its source map. */
export interface Locations {
  locations: Location[];
}

/** Source info contains the shared metadata of a source mapping */
export interface SourceInfo {
  filename: string;
  data: Uint8Array;
  definition: Definition | undefined;
}

/** Location defines list of areas in to source file */
export interface Location {
  sourceIndex: number;
  ranges: Range[];
}

/** Range is an area in the source file */
export interface Range {
  start: Position | undefined;
  end: Position | undefined;
}

/** Position is single location in a source file */
export interface Position {
  line: number;
  character: number;
}

export interface ExportCache {
  Value: boolean;
}

export interface ProgressGroup {
  id: string;
  name: string;
  weak: boolean;
}

export interface ProxyEnv {
  httpProxy: string;
  httpsProxy: string;
  ftpProxy: string;
  noProxy: string;
  allProxy: string;
}

/** WorkerConstraints defines conditions for the worker */
export interface WorkerConstraints {
  /** containerd-style filter */
  filter: string[];
}

/** Definition is the LLB definition structure with per-vertex metadata entries */
export interface Definition {
  /** def is a list of marshaled Op messages */
  def: Uint8Array[];
  /**
   * metadata contains metadata for the each of the Op messages.
   * A key must be an LLB op digest string. Currently, empty string is not expected as a key, but it may change in the future.
   */
  metadata: { [key: string]: OpMetadata };
  /** Source contains the source mapping information for the vertexes in the definition */
  Source: Source | undefined;
}

export interface Definition_MetadataEntry {
  key: string;
  value: OpMetadata | undefined;
}

export interface FileOp {
  actions: FileAction[];
}

export interface FileAction {
  /** could be real input or target (target index + max input index) */
  input: number;
  /** --//-- */
  secondaryInput: number;
  output: number;
  /** FileActionCopy copies files from secondaryInput on top of input */
  copy?:
    | FileActionCopy
    | undefined;
  /** FileActionMkFile creates a new file */
  mkfile?:
    | FileActionMkFile
    | undefined;
  /** FileActionMkDir creates a new directory */
  mkdir?:
    | FileActionMkDir
    | undefined;
  /** FileActionRm removes a file */
  rm?: FileActionRm | undefined;
}

export interface FileActionCopy {
  /** src is the source path */
  src: string;
  /** dest path */
  dest: string;
  /** optional owner override */
  owner:
    | ChownOpt
    | undefined;
  /** optional permission bits override */
  mode: number;
  /** followSymlink resolves symlinks in src */
  followSymlink: boolean;
  /** dirCopyContents only copies contents if src is a directory */
  dirCopyContents: boolean;
  /** attemptUnpackDockerCompatibility detects if src is an archive to unpack it instead */
  attemptUnpackDockerCompatibility: boolean;
  /** createDestPath creates dest path directories if needed */
  createDestPath: boolean;
  /** allowWildcard allows filepath.Match wildcards in src path */
  allowWildcard: boolean;
  /** allowEmptyWildcard doesn't fail the whole copy if wildcard doesn't resolve to files */
  allowEmptyWildcard: boolean;
  /** optional created time override */
  timestamp: number;
  /** include only files/dirs matching at least one of these patterns */
  includePatterns: string[];
  /** exclude files/dir matching any of these patterns (even if they match an include pattern) */
  excludePatterns: string[];
}

export interface FileActionMkFile {
  /** path for the new file */
  path: string;
  /** permission bits */
  mode: number;
  /** data is the new file contents */
  data: Uint8Array;
  /** optional owner for the new file */
  owner:
    | ChownOpt
    | undefined;
  /** optional created time override */
  timestamp: number;
}

export interface FileActionMkDir {
  /** path for the new directory */
  path: string;
  /** permission bits */
  mode: number;
  /** makeParents creates parent directories as well if needed */
  makeParents: boolean;
  /** optional owner for the new directory */
  owner:
    | ChownOpt
    | undefined;
  /** optional created time override */
  timestamp: number;
}

export interface FileActionRm {
  /** path to remove */
  path: string;
  /** allowNotFound doesn't fail the rm if file is not found */
  allowNotFound: boolean;
  /** allowWildcard allows filepath.Match wildcards in path */
  allowWildcard: boolean;
}

export interface ChownOpt {
  user: UserOpt | undefined;
  group: UserOpt | undefined;
}

export interface UserOpt {
  byName?: NamedUserOpt | undefined;
  byID?: number | undefined;
}

export interface NamedUserOpt {
  name: string;
  input: number;
}

export interface MergeInput {
  input: number;
}

export interface MergeOp {
  inputs: MergeInput[];
}

export interface LowerDiffInput {
  input: number;
}

export interface UpperDiffInput {
  input: number;
}

export interface DiffOp {
  lower: LowerDiffInput | undefined;
  upper: UpperDiffInput | undefined;
}

function createBaseOp(): Op {
  return {
    inputs: [],
    exec: undefined,
    source: undefined,
    file: undefined,
    build: undefined,
    merge: undefined,
    diff: undefined,
    platform: undefined,
    constraints: undefined,
  };
}

export const Op = {
  encode(message: Op, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.exec !== undefined) {
      ExecOp.encode(message.exec, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== undefined) {
      SourceOp.encode(message.source, writer.uint32(26).fork()).ldelim();
    }
    if (message.file !== undefined) {
      FileOp.encode(message.file, writer.uint32(34).fork()).ldelim();
    }
    if (message.build !== undefined) {
      BuildOp.encode(message.build, writer.uint32(42).fork()).ldelim();
    }
    if (message.merge !== undefined) {
      MergeOp.encode(message.merge, writer.uint32(50).fork()).ldelim();
    }
    if (message.diff !== undefined) {
      DiffOp.encode(message.diff, writer.uint32(58).fork()).ldelim();
    }
    if (message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(82).fork()).ldelim();
    }
    if (message.constraints !== undefined) {
      WorkerConstraints.encode(message.constraints, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Op {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.exec = ExecOp.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = SourceOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.file = FileOp.decode(reader, reader.uint32());
          break;
        case 5:
          message.build = BuildOp.decode(reader, reader.uint32());
          break;
        case 6:
          message.merge = MergeOp.decode(reader, reader.uint32());
          break;
        case 7:
          message.diff = DiffOp.decode(reader, reader.uint32());
          break;
        case 10:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 11:
          message.constraints = WorkerConstraints.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Op {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromJSON(e)) : [],
      exec: isSet(object.exec) ? ExecOp.fromJSON(object.exec) : undefined,
      source: isSet(object.source) ? SourceOp.fromJSON(object.source) : undefined,
      file: isSet(object.file) ? FileOp.fromJSON(object.file) : undefined,
      build: isSet(object.build) ? BuildOp.fromJSON(object.build) : undefined,
      merge: isSet(object.merge) ? MergeOp.fromJSON(object.merge) : undefined,
      diff: isSet(object.diff) ? DiffOp.fromJSON(object.diff) : undefined,
      platform: isSet(object.platform) ? Platform.fromJSON(object.platform) : undefined,
      constraints: isSet(object.constraints) ? WorkerConstraints.fromJSON(object.constraints) : undefined,
    };
  },

  toJSON(message: Op): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? Input.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }
    message.exec !== undefined && (obj.exec = message.exec ? ExecOp.toJSON(message.exec) : undefined);
    message.source !== undefined && (obj.source = message.source ? SourceOp.toJSON(message.source) : undefined);
    message.file !== undefined && (obj.file = message.file ? FileOp.toJSON(message.file) : undefined);
    message.build !== undefined && (obj.build = message.build ? BuildOp.toJSON(message.build) : undefined);
    message.merge !== undefined && (obj.merge = message.merge ? MergeOp.toJSON(message.merge) : undefined);
    message.diff !== undefined && (obj.diff = message.diff ? DiffOp.toJSON(message.diff) : undefined);
    message.platform !== undefined && (obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined);
    message.constraints !== undefined &&
      (obj.constraints = message.constraints ? WorkerConstraints.toJSON(message.constraints) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Op>, I>>(base?: I): Op {
    return Op.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Op>, I>>(object: I): Op {
    const message = createBaseOp();
    message.inputs = object.inputs?.map((e) => Input.fromPartial(e)) || [];
    message.exec = (object.exec !== undefined && object.exec !== null) ? ExecOp.fromPartial(object.exec) : undefined;
    message.source = (object.source !== undefined && object.source !== null)
      ? SourceOp.fromPartial(object.source)
      : undefined;
    message.file = (object.file !== undefined && object.file !== null) ? FileOp.fromPartial(object.file) : undefined;
    message.build = (object.build !== undefined && object.build !== null)
      ? BuildOp.fromPartial(object.build)
      : undefined;
    message.merge = (object.merge !== undefined && object.merge !== null)
      ? MergeOp.fromPartial(object.merge)
      : undefined;
    message.diff = (object.diff !== undefined && object.diff !== null) ? DiffOp.fromPartial(object.diff) : undefined;
    message.platform = (object.platform !== undefined && object.platform !== null)
      ? Platform.fromPartial(object.platform)
      : undefined;
    message.constraints = (object.constraints !== undefined && object.constraints !== null)
      ? WorkerConstraints.fromPartial(object.constraints)
      : undefined;
    return message;
  },
};

function createBasePlatform(): Platform {
  return { Architecture: "", OS: "", Variant: "", OSVersion: "", OSFeatures: [] };
}

export const Platform = {
  encode(message: Platform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Architecture !== "") {
      writer.uint32(10).string(message.Architecture);
    }
    if (message.OS !== "") {
      writer.uint32(18).string(message.OS);
    }
    if (message.Variant !== "") {
      writer.uint32(26).string(message.Variant);
    }
    if (message.OSVersion !== "") {
      writer.uint32(34).string(message.OSVersion);
    }
    for (const v of message.OSFeatures) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Platform {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlatform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Architecture = reader.string();
          break;
        case 2:
          message.OS = reader.string();
          break;
        case 3:
          message.Variant = reader.string();
          break;
        case 4:
          message.OSVersion = reader.string();
          break;
        case 5:
          message.OSFeatures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Platform {
    return {
      Architecture: isSet(object.Architecture) ? String(object.Architecture) : "",
      OS: isSet(object.OS) ? String(object.OS) : "",
      Variant: isSet(object.Variant) ? String(object.Variant) : "",
      OSVersion: isSet(object.OSVersion) ? String(object.OSVersion) : "",
      OSFeatures: Array.isArray(object?.OSFeatures) ? object.OSFeatures.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Platform): unknown {
    const obj: any = {};
    message.Architecture !== undefined && (obj.Architecture = message.Architecture);
    message.OS !== undefined && (obj.OS = message.OS);
    message.Variant !== undefined && (obj.Variant = message.Variant);
    message.OSVersion !== undefined && (obj.OSVersion = message.OSVersion);
    if (message.OSFeatures) {
      obj.OSFeatures = message.OSFeatures.map((e) => e);
    } else {
      obj.OSFeatures = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Platform>, I>>(base?: I): Platform {
    return Platform.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Platform>, I>>(object: I): Platform {
    const message = createBasePlatform();
    message.Architecture = object.Architecture ?? "";
    message.OS = object.OS ?? "";
    message.Variant = object.Variant ?? "";
    message.OSVersion = object.OSVersion ?? "";
    message.OSFeatures = object.OSFeatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseInput(): Input {
  return { digest: "", index: 0 };
}

export const Input = {
  encode(message: Input, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.digest !== "") {
      writer.uint32(10).string(message.digest);
    }
    if (message.index !== 0) {
      writer.uint32(16).int64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Input {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.string();
          break;
        case 2:
          message.index = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Input {
    return {
      digest: isSet(object.digest) ? String(object.digest) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: Input): unknown {
    const obj: any = {};
    message.digest !== undefined && (obj.digest = message.digest);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  create<I extends Exact<DeepPartial<Input>, I>>(base?: I): Input {
    return Input.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Input>, I>>(object: I): Input {
    const message = createBaseInput();
    message.digest = object.digest ?? "";
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseExecOp(): ExecOp {
  return { meta: undefined, mounts: [], network: 0, security: 0, secretenv: [] };
}

export const ExecOp = {
  encode(message: ExecOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mounts) {
      Mount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.network !== 0) {
      writer.uint32(24).int32(message.network);
    }
    if (message.security !== 0) {
      writer.uint32(32).int32(message.security);
    }
    for (const v of message.secretenv) {
      SecretEnv.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 2:
          message.mounts.push(Mount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.network = reader.int32() as any;
          break;
        case 4:
          message.security = reader.int32() as any;
          break;
        case 5:
          message.secretenv.push(SecretEnv.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecOp {
    return {
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      mounts: Array.isArray(object?.mounts) ? object.mounts.map((e: any) => Mount.fromJSON(e)) : [],
      network: isSet(object.network) ? netModeFromJSON(object.network) : 0,
      security: isSet(object.security) ? securityModeFromJSON(object.security) : 0,
      secretenv: Array.isArray(object?.secretenv) ? object.secretenv.map((e: any) => SecretEnv.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExecOp): unknown {
    const obj: any = {};
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    if (message.mounts) {
      obj.mounts = message.mounts.map((e) => e ? Mount.toJSON(e) : undefined);
    } else {
      obj.mounts = [];
    }
    message.network !== undefined && (obj.network = netModeToJSON(message.network));
    message.security !== undefined && (obj.security = securityModeToJSON(message.security));
    if (message.secretenv) {
      obj.secretenv = message.secretenv.map((e) => e ? SecretEnv.toJSON(e) : undefined);
    } else {
      obj.secretenv = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecOp>, I>>(base?: I): ExecOp {
    return ExecOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecOp>, I>>(object: I): ExecOp {
    const message = createBaseExecOp();
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    message.mounts = object.mounts?.map((e) => Mount.fromPartial(e)) || [];
    message.network = object.network ?? 0;
    message.security = object.security ?? 0;
    message.secretenv = object.secretenv?.map((e) => SecretEnv.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMeta(): Meta {
  return {
    args: [],
    env: [],
    cwd: "",
    user: "",
    proxyEnv: undefined,
    extraHosts: [],
    hostname: "",
    ulimit: [],
    cgroupParent: "",
    removeMountStubsRecursive: false,
  };
}

export const Meta = {
  encode(message: Meta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.env) {
      writer.uint32(18).string(v!);
    }
    if (message.cwd !== "") {
      writer.uint32(26).string(message.cwd);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.proxyEnv !== undefined) {
      ProxyEnv.encode(message.proxyEnv, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.extraHosts) {
      HostIP.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(58).string(message.hostname);
    }
    for (const v of message.ulimit) {
      Ulimit.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.cgroupParent !== "") {
      writer.uint32(82).string(message.cgroupParent);
    }
    if (message.removeMountStubsRecursive === true) {
      writer.uint32(88).bool(message.removeMountStubsRecursive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Meta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        case 2:
          message.env.push(reader.string());
          break;
        case 3:
          message.cwd = reader.string();
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.proxyEnv = ProxyEnv.decode(reader, reader.uint32());
          break;
        case 6:
          message.extraHosts.push(HostIP.decode(reader, reader.uint32()));
          break;
        case 7:
          message.hostname = reader.string();
          break;
        case 9:
          message.ulimit.push(Ulimit.decode(reader, reader.uint32()));
          break;
        case 10:
          message.cgroupParent = reader.string();
          break;
        case 11:
          message.removeMountStubsRecursive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Meta {
    return {
      args: Array.isArray(object?.args) ? object.args.map((e: any) => String(e)) : [],
      env: Array.isArray(object?.env) ? object.env.map((e: any) => String(e)) : [],
      cwd: isSet(object.cwd) ? String(object.cwd) : "",
      user: isSet(object.user) ? String(object.user) : "",
      proxyEnv: isSet(object.proxyEnv) ? ProxyEnv.fromJSON(object.proxyEnv) : undefined,
      extraHosts: Array.isArray(object?.extraHosts) ? object.extraHosts.map((e: any) => HostIP.fromJSON(e)) : [],
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      ulimit: Array.isArray(object?.ulimit) ? object.ulimit.map((e: any) => Ulimit.fromJSON(e)) : [],
      cgroupParent: isSet(object.cgroupParent) ? String(object.cgroupParent) : "",
      removeMountStubsRecursive: isSet(object.removeMountStubsRecursive)
        ? Boolean(object.removeMountStubsRecursive)
        : false,
    };
  },

  toJSON(message: Meta): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    if (message.env) {
      obj.env = message.env.map((e) => e);
    } else {
      obj.env = [];
    }
    message.cwd !== undefined && (obj.cwd = message.cwd);
    message.user !== undefined && (obj.user = message.user);
    message.proxyEnv !== undefined && (obj.proxyEnv = message.proxyEnv ? ProxyEnv.toJSON(message.proxyEnv) : undefined);
    if (message.extraHosts) {
      obj.extraHosts = message.extraHosts.map((e) => e ? HostIP.toJSON(e) : undefined);
    } else {
      obj.extraHosts = [];
    }
    message.hostname !== undefined && (obj.hostname = message.hostname);
    if (message.ulimit) {
      obj.ulimit = message.ulimit.map((e) => e ? Ulimit.toJSON(e) : undefined);
    } else {
      obj.ulimit = [];
    }
    message.cgroupParent !== undefined && (obj.cgroupParent = message.cgroupParent);
    message.removeMountStubsRecursive !== undefined &&
      (obj.removeMountStubsRecursive = message.removeMountStubsRecursive);
    return obj;
  },

  create<I extends Exact<DeepPartial<Meta>, I>>(base?: I): Meta {
    return Meta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Meta>, I>>(object: I): Meta {
    const message = createBaseMeta();
    message.args = object.args?.map((e) => e) || [];
    message.env = object.env?.map((e) => e) || [];
    message.cwd = object.cwd ?? "";
    message.user = object.user ?? "";
    message.proxyEnv = (object.proxyEnv !== undefined && object.proxyEnv !== null)
      ? ProxyEnv.fromPartial(object.proxyEnv)
      : undefined;
    message.extraHosts = object.extraHosts?.map((e) => HostIP.fromPartial(e)) || [];
    message.hostname = object.hostname ?? "";
    message.ulimit = object.ulimit?.map((e) => Ulimit.fromPartial(e)) || [];
    message.cgroupParent = object.cgroupParent ?? "";
    message.removeMountStubsRecursive = object.removeMountStubsRecursive ?? false;
    return message;
  },
};

function createBaseHostIP(): HostIP {
  return { Host: "", IP: "" };
}

export const HostIP = {
  encode(message: HostIP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Host !== "") {
      writer.uint32(10).string(message.Host);
    }
    if (message.IP !== "") {
      writer.uint32(18).string(message.IP);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostIP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostIP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Host = reader.string();
          break;
        case 2:
          message.IP = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostIP {
    return { Host: isSet(object.Host) ? String(object.Host) : "", IP: isSet(object.IP) ? String(object.IP) : "" };
  },

  toJSON(message: HostIP): unknown {
    const obj: any = {};
    message.Host !== undefined && (obj.Host = message.Host);
    message.IP !== undefined && (obj.IP = message.IP);
    return obj;
  },

  create<I extends Exact<DeepPartial<HostIP>, I>>(base?: I): HostIP {
    return HostIP.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HostIP>, I>>(object: I): HostIP {
    const message = createBaseHostIP();
    message.Host = object.Host ?? "";
    message.IP = object.IP ?? "";
    return message;
  },
};

function createBaseUlimit(): Ulimit {
  return { Name: "", Soft: 0, Hard: 0 };
}

export const Ulimit = {
  encode(message: Ulimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Soft !== 0) {
      writer.uint32(16).int64(message.Soft);
    }
    if (message.Hard !== 0) {
      writer.uint32(24).int64(message.Hard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ulimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUlimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;
        case 2:
          message.Soft = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.Hard = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ulimit {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Soft: isSet(object.Soft) ? Number(object.Soft) : 0,
      Hard: isSet(object.Hard) ? Number(object.Hard) : 0,
    };
  },

  toJSON(message: Ulimit): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    message.Soft !== undefined && (obj.Soft = Math.round(message.Soft));
    message.Hard !== undefined && (obj.Hard = Math.round(message.Hard));
    return obj;
  },

  create<I extends Exact<DeepPartial<Ulimit>, I>>(base?: I): Ulimit {
    return Ulimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Ulimit>, I>>(object: I): Ulimit {
    const message = createBaseUlimit();
    message.Name = object.Name ?? "";
    message.Soft = object.Soft ?? 0;
    message.Hard = object.Hard ?? 0;
    return message;
  },
};

function createBaseSecretEnv(): SecretEnv {
  return { ID: "", name: "", optional: false };
}

export const SecretEnv = {
  encode(message: SecretEnv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.optional === true) {
      writer.uint32(24).bool(message.optional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecretEnv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecretEnv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecretEnv {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      name: isSet(object.name) ? String(object.name) : "",
      optional: isSet(object.optional) ? Boolean(object.optional) : false,
    };
  },

  toJSON(message: SecretEnv): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.name !== undefined && (obj.name = message.name);
    message.optional !== undefined && (obj.optional = message.optional);
    return obj;
  },

  create<I extends Exact<DeepPartial<SecretEnv>, I>>(base?: I): SecretEnv {
    return SecretEnv.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SecretEnv>, I>>(object: I): SecretEnv {
    const message = createBaseSecretEnv();
    message.ID = object.ID ?? "";
    message.name = object.name ?? "";
    message.optional = object.optional ?? false;
    return message;
  },
};

function createBaseMount(): Mount {
  return {
    input: 0,
    selector: "",
    dest: "",
    output: 0,
    readonly: false,
    mountType: 0,
    TmpfsOpt: undefined,
    cacheOpt: undefined,
    secretOpt: undefined,
    SSHOpt: undefined,
    resultID: "",
  };
}

export const Mount = {
  encode(message: Mount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    if (message.selector !== "") {
      writer.uint32(18).string(message.selector);
    }
    if (message.dest !== "") {
      writer.uint32(26).string(message.dest);
    }
    if (message.output !== 0) {
      writer.uint32(32).int64(message.output);
    }
    if (message.readonly === true) {
      writer.uint32(40).bool(message.readonly);
    }
    if (message.mountType !== 0) {
      writer.uint32(48).int32(message.mountType);
    }
    if (message.TmpfsOpt !== undefined) {
      TmpfsOpt.encode(message.TmpfsOpt, writer.uint32(154).fork()).ldelim();
    }
    if (message.cacheOpt !== undefined) {
      CacheOpt.encode(message.cacheOpt, writer.uint32(162).fork()).ldelim();
    }
    if (message.secretOpt !== undefined) {
      SecretOpt.encode(message.secretOpt, writer.uint32(170).fork()).ldelim();
    }
    if (message.SSHOpt !== undefined) {
      SSHOpt.encode(message.SSHOpt, writer.uint32(178).fork()).ldelim();
    }
    if (message.resultID !== "") {
      writer.uint32(186).string(message.resultID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selector = reader.string();
          break;
        case 3:
          message.dest = reader.string();
          break;
        case 4:
          message.output = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.readonly = reader.bool();
          break;
        case 6:
          message.mountType = reader.int32() as any;
          break;
        case 19:
          message.TmpfsOpt = TmpfsOpt.decode(reader, reader.uint32());
          break;
        case 20:
          message.cacheOpt = CacheOpt.decode(reader, reader.uint32());
          break;
        case 21:
          message.secretOpt = SecretOpt.decode(reader, reader.uint32());
          break;
        case 22:
          message.SSHOpt = SSHOpt.decode(reader, reader.uint32());
          break;
        case 23:
          message.resultID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mount {
    return {
      input: isSet(object.input) ? Number(object.input) : 0,
      selector: isSet(object.selector) ? String(object.selector) : "",
      dest: isSet(object.dest) ? String(object.dest) : "",
      output: isSet(object.output) ? Number(object.output) : 0,
      readonly: isSet(object.readonly) ? Boolean(object.readonly) : false,
      mountType: isSet(object.mountType) ? mountTypeFromJSON(object.mountType) : 0,
      TmpfsOpt: isSet(object.TmpfsOpt) ? TmpfsOpt.fromJSON(object.TmpfsOpt) : undefined,
      cacheOpt: isSet(object.cacheOpt) ? CacheOpt.fromJSON(object.cacheOpt) : undefined,
      secretOpt: isSet(object.secretOpt) ? SecretOpt.fromJSON(object.secretOpt) : undefined,
      SSHOpt: isSet(object.SSHOpt) ? SSHOpt.fromJSON(object.SSHOpt) : undefined,
      resultID: isSet(object.resultID) ? String(object.resultID) : "",
    };
  },

  toJSON(message: Mount): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    message.selector !== undefined && (obj.selector = message.selector);
    message.dest !== undefined && (obj.dest = message.dest);
    message.output !== undefined && (obj.output = Math.round(message.output));
    message.readonly !== undefined && (obj.readonly = message.readonly);
    message.mountType !== undefined && (obj.mountType = mountTypeToJSON(message.mountType));
    message.TmpfsOpt !== undefined && (obj.TmpfsOpt = message.TmpfsOpt ? TmpfsOpt.toJSON(message.TmpfsOpt) : undefined);
    message.cacheOpt !== undefined && (obj.cacheOpt = message.cacheOpt ? CacheOpt.toJSON(message.cacheOpt) : undefined);
    message.secretOpt !== undefined &&
      (obj.secretOpt = message.secretOpt ? SecretOpt.toJSON(message.secretOpt) : undefined);
    message.SSHOpt !== undefined && (obj.SSHOpt = message.SSHOpt ? SSHOpt.toJSON(message.SSHOpt) : undefined);
    message.resultID !== undefined && (obj.resultID = message.resultID);
    return obj;
  },

  create<I extends Exact<DeepPartial<Mount>, I>>(base?: I): Mount {
    return Mount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Mount>, I>>(object: I): Mount {
    const message = createBaseMount();
    message.input = object.input ?? 0;
    message.selector = object.selector ?? "";
    message.dest = object.dest ?? "";
    message.output = object.output ?? 0;
    message.readonly = object.readonly ?? false;
    message.mountType = object.mountType ?? 0;
    message.TmpfsOpt = (object.TmpfsOpt !== undefined && object.TmpfsOpt !== null)
      ? TmpfsOpt.fromPartial(object.TmpfsOpt)
      : undefined;
    message.cacheOpt = (object.cacheOpt !== undefined && object.cacheOpt !== null)
      ? CacheOpt.fromPartial(object.cacheOpt)
      : undefined;
    message.secretOpt = (object.secretOpt !== undefined && object.secretOpt !== null)
      ? SecretOpt.fromPartial(object.secretOpt)
      : undefined;
    message.SSHOpt = (object.SSHOpt !== undefined && object.SSHOpt !== null)
      ? SSHOpt.fromPartial(object.SSHOpt)
      : undefined;
    message.resultID = object.resultID ?? "";
    return message;
  },
};

function createBaseTmpfsOpt(): TmpfsOpt {
  return { size: 0 };
}

export const TmpfsOpt = {
  encode(message: TmpfsOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.size !== 0) {
      writer.uint32(8).int64(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TmpfsOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTmpfsOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TmpfsOpt {
    return { size: isSet(object.size) ? Number(object.size) : 0 };
  },

  toJSON(message: TmpfsOpt): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  create<I extends Exact<DeepPartial<TmpfsOpt>, I>>(base?: I): TmpfsOpt {
    return TmpfsOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TmpfsOpt>, I>>(object: I): TmpfsOpt {
    const message = createBaseTmpfsOpt();
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseCacheOpt(): CacheOpt {
  return { ID: "", sharing: 0 };
}

export const CacheOpt = {
  encode(message: CacheOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.sharing !== 0) {
      writer.uint32(16).int32(message.sharing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.sharing = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CacheOpt {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      sharing: isSet(object.sharing) ? cacheSharingOptFromJSON(object.sharing) : 0,
    };
  },

  toJSON(message: CacheOpt): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.sharing !== undefined && (obj.sharing = cacheSharingOptToJSON(message.sharing));
    return obj;
  },

  create<I extends Exact<DeepPartial<CacheOpt>, I>>(base?: I): CacheOpt {
    return CacheOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CacheOpt>, I>>(object: I): CacheOpt {
    const message = createBaseCacheOpt();
    message.ID = object.ID ?? "";
    message.sharing = object.sharing ?? 0;
    return message;
  },
};

function createBaseSecretOpt(): SecretOpt {
  return { ID: "", uid: 0, gid: 0, mode: 0, optional: false };
}

export const SecretOpt = {
  encode(message: SecretOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.uid !== 0) {
      writer.uint32(16).uint32(message.uid);
    }
    if (message.gid !== 0) {
      writer.uint32(24).uint32(message.gid);
    }
    if (message.mode !== 0) {
      writer.uint32(32).uint32(message.mode);
    }
    if (message.optional === true) {
      writer.uint32(40).bool(message.optional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecretOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecretOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.uid = reader.uint32();
          break;
        case 3:
          message.gid = reader.uint32();
          break;
        case 4:
          message.mode = reader.uint32();
          break;
        case 5:
          message.optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecretOpt {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      uid: isSet(object.uid) ? Number(object.uid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      optional: isSet(object.optional) ? Boolean(object.optional) : false,
    };
  },

  toJSON(message: SecretOpt): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.uid !== undefined && (obj.uid = Math.round(message.uid));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.optional !== undefined && (obj.optional = message.optional);
    return obj;
  },

  create<I extends Exact<DeepPartial<SecretOpt>, I>>(base?: I): SecretOpt {
    return SecretOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SecretOpt>, I>>(object: I): SecretOpt {
    const message = createBaseSecretOpt();
    message.ID = object.ID ?? "";
    message.uid = object.uid ?? 0;
    message.gid = object.gid ?? 0;
    message.mode = object.mode ?? 0;
    message.optional = object.optional ?? false;
    return message;
  },
};

function createBaseSSHOpt(): SSHOpt {
  return { ID: "", uid: 0, gid: 0, mode: 0, optional: false };
}

export const SSHOpt = {
  encode(message: SSHOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.uid !== 0) {
      writer.uint32(16).uint32(message.uid);
    }
    if (message.gid !== 0) {
      writer.uint32(24).uint32(message.gid);
    }
    if (message.mode !== 0) {
      writer.uint32(32).uint32(message.mode);
    }
    if (message.optional === true) {
      writer.uint32(40).bool(message.optional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSSHOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.uid = reader.uint32();
          break;
        case 3:
          message.gid = reader.uint32();
          break;
        case 4:
          message.mode = reader.uint32();
          break;
        case 5:
          message.optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SSHOpt {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      uid: isSet(object.uid) ? Number(object.uid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      optional: isSet(object.optional) ? Boolean(object.optional) : false,
    };
  },

  toJSON(message: SSHOpt): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.uid !== undefined && (obj.uid = Math.round(message.uid));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.optional !== undefined && (obj.optional = message.optional);
    return obj;
  },

  create<I extends Exact<DeepPartial<SSHOpt>, I>>(base?: I): SSHOpt {
    return SSHOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SSHOpt>, I>>(object: I): SSHOpt {
    const message = createBaseSSHOpt();
    message.ID = object.ID ?? "";
    message.uid = object.uid ?? 0;
    message.gid = object.gid ?? 0;
    message.mode = object.mode ?? 0;
    message.optional = object.optional ?? false;
    return message;
  },
};

function createBaseSourceOp(): SourceOp {
  return { identifier: "", attrs: {} };
}

export const SourceOp = {
  encode(message: SourceOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    Object.entries(message.attrs).forEach(([key, value]) => {
      SourceOp_AttrsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          const entry2 = SourceOp_AttrsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.attrs[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceOp {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      attrs: isObject(object.attrs)
        ? Object.entries(object.attrs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SourceOp): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    obj.attrs = {};
    if (message.attrs) {
      Object.entries(message.attrs).forEach(([k, v]) => {
        obj.attrs[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SourceOp>, I>>(base?: I): SourceOp {
    return SourceOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SourceOp>, I>>(object: I): SourceOp {
    const message = createBaseSourceOp();
    message.identifier = object.identifier ?? "";
    message.attrs = Object.entries(object.attrs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSourceOp_AttrsEntry(): SourceOp_AttrsEntry {
  return { key: "", value: "" };
}

export const SourceOp_AttrsEntry = {
  encode(message: SourceOp_AttrsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceOp_AttrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceOp_AttrsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceOp_AttrsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: SourceOp_AttrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<SourceOp_AttrsEntry>, I>>(base?: I): SourceOp_AttrsEntry {
    return SourceOp_AttrsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SourceOp_AttrsEntry>, I>>(object: I): SourceOp_AttrsEntry {
    const message = createBaseSourceOp_AttrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBuildOp(): BuildOp {
  return { builder: 0, inputs: {}, def: undefined, attrs: {} };
}

export const BuildOp = {
  encode(message: BuildOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.builder !== 0) {
      writer.uint32(8).int64(message.builder);
    }
    Object.entries(message.inputs).forEach(([key, value]) => {
      BuildOp_InputsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.def !== undefined) {
      Definition.encode(message.def, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.attrs).forEach(([key, value]) => {
      BuildOp_AttrsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.builder = longToNumber(reader.int64() as Long);
          break;
        case 2:
          const entry2 = BuildOp_InputsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.inputs[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.def = Definition.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = BuildOp_AttrsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attrs[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildOp {
    return {
      builder: isSet(object.builder) ? Number(object.builder) : 0,
      inputs: isObject(object.inputs)
        ? Object.entries(object.inputs).reduce<{ [key: string]: BuildInput }>((acc, [key, value]) => {
          acc[key] = BuildInput.fromJSON(value);
          return acc;
        }, {})
        : {},
      def: isSet(object.def) ? Definition.fromJSON(object.def) : undefined,
      attrs: isObject(object.attrs)
        ? Object.entries(object.attrs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: BuildOp): unknown {
    const obj: any = {};
    message.builder !== undefined && (obj.builder = Math.round(message.builder));
    obj.inputs = {};
    if (message.inputs) {
      Object.entries(message.inputs).forEach(([k, v]) => {
        obj.inputs[k] = BuildInput.toJSON(v);
      });
    }
    message.def !== undefined && (obj.def = message.def ? Definition.toJSON(message.def) : undefined);
    obj.attrs = {};
    if (message.attrs) {
      Object.entries(message.attrs).forEach(([k, v]) => {
        obj.attrs[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildOp>, I>>(base?: I): BuildOp {
    return BuildOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildOp>, I>>(object: I): BuildOp {
    const message = createBaseBuildOp();
    message.builder = object.builder ?? 0;
    message.inputs = Object.entries(object.inputs ?? {}).reduce<{ [key: string]: BuildInput }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BuildInput.fromPartial(value);
      }
      return acc;
    }, {});
    message.def = (object.def !== undefined && object.def !== null) ? Definition.fromPartial(object.def) : undefined;
    message.attrs = Object.entries(object.attrs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseBuildOp_InputsEntry(): BuildOp_InputsEntry {
  return { key: "", value: undefined };
}

export const BuildOp_InputsEntry = {
  encode(message: BuildOp_InputsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BuildInput.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildOp_InputsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildOp_InputsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BuildInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildOp_InputsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BuildInput.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BuildOp_InputsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? BuildInput.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildOp_InputsEntry>, I>>(base?: I): BuildOp_InputsEntry {
    return BuildOp_InputsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildOp_InputsEntry>, I>>(object: I): BuildOp_InputsEntry {
    const message = createBaseBuildOp_InputsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? BuildInput.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseBuildOp_AttrsEntry(): BuildOp_AttrsEntry {
  return { key: "", value: "" };
}

export const BuildOp_AttrsEntry = {
  encode(message: BuildOp_AttrsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildOp_AttrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildOp_AttrsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildOp_AttrsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: BuildOp_AttrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildOp_AttrsEntry>, I>>(base?: I): BuildOp_AttrsEntry {
    return BuildOp_AttrsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildOp_AttrsEntry>, I>>(object: I): BuildOp_AttrsEntry {
    const message = createBaseBuildOp_AttrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBuildInput(): BuildInput {
  return { input: 0 };
}

export const BuildInput = {
  encode(message: BuildInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildInput {
    return { input: isSet(object.input) ? Number(object.input) : 0 };
  },

  toJSON(message: BuildInput): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInput>, I>>(base?: I): BuildInput {
    return BuildInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildInput>, I>>(object: I): BuildInput {
    const message = createBaseBuildInput();
    message.input = object.input ?? 0;
    return message;
  },
};

function createBaseOpMetadata(): OpMetadata {
  return { ignoreCache: false, description: {}, exportCache: undefined, caps: {}, progressGroup: undefined };
}

export const OpMetadata = {
  encode(message: OpMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ignoreCache === true) {
      writer.uint32(8).bool(message.ignoreCache);
    }
    Object.entries(message.description).forEach(([key, value]) => {
      OpMetadata_DescriptionEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.exportCache !== undefined) {
      ExportCache.encode(message.exportCache, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.caps).forEach(([key, value]) => {
      OpMetadata_CapsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (message.progressGroup !== undefined) {
      ProgressGroup.encode(message.progressGroup, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ignoreCache = reader.bool();
          break;
        case 2:
          const entry2 = OpMetadata_DescriptionEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.description[entry2.key] = entry2.value;
          }
          break;
        case 4:
          message.exportCache = ExportCache.decode(reader, reader.uint32());
          break;
        case 5:
          const entry5 = OpMetadata_CapsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.caps[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.progressGroup = ProgressGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpMetadata {
    return {
      ignoreCache: isSet(object.ignoreCache) ? Boolean(object.ignoreCache) : false,
      description: isObject(object.description)
        ? Object.entries(object.description).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      exportCache: isSet(object.exportCache) ? ExportCache.fromJSON(object.exportCache) : undefined,
      caps: isObject(object.caps)
        ? Object.entries(object.caps).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
          acc[key] = Boolean(value);
          return acc;
        }, {})
        : {},
      progressGroup: isSet(object.progressGroup) ? ProgressGroup.fromJSON(object.progressGroup) : undefined,
    };
  },

  toJSON(message: OpMetadata): unknown {
    const obj: any = {};
    message.ignoreCache !== undefined && (obj.ignoreCache = message.ignoreCache);
    obj.description = {};
    if (message.description) {
      Object.entries(message.description).forEach(([k, v]) => {
        obj.description[k] = v;
      });
    }
    message.exportCache !== undefined &&
      (obj.exportCache = message.exportCache ? ExportCache.toJSON(message.exportCache) : undefined);
    obj.caps = {};
    if (message.caps) {
      Object.entries(message.caps).forEach(([k, v]) => {
        obj.caps[k] = v;
      });
    }
    message.progressGroup !== undefined &&
      (obj.progressGroup = message.progressGroup ? ProgressGroup.toJSON(message.progressGroup) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<OpMetadata>, I>>(base?: I): OpMetadata {
    return OpMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OpMetadata>, I>>(object: I): OpMetadata {
    const message = createBaseOpMetadata();
    message.ignoreCache = object.ignoreCache ?? false;
    message.description = Object.entries(object.description ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.exportCache = (object.exportCache !== undefined && object.exportCache !== null)
      ? ExportCache.fromPartial(object.exportCache)
      : undefined;
    message.caps = Object.entries(object.caps ?? {}).reduce<{ [key: string]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Boolean(value);
      }
      return acc;
    }, {});
    message.progressGroup = (object.progressGroup !== undefined && object.progressGroup !== null)
      ? ProgressGroup.fromPartial(object.progressGroup)
      : undefined;
    return message;
  },
};

function createBaseOpMetadata_DescriptionEntry(): OpMetadata_DescriptionEntry {
  return { key: "", value: "" };
}

export const OpMetadata_DescriptionEntry = {
  encode(message: OpMetadata_DescriptionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpMetadata_DescriptionEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpMetadata_DescriptionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpMetadata_DescriptionEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: OpMetadata_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<OpMetadata_DescriptionEntry>, I>>(base?: I): OpMetadata_DescriptionEntry {
    return OpMetadata_DescriptionEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OpMetadata_DescriptionEntry>, I>>(object: I): OpMetadata_DescriptionEntry {
    const message = createBaseOpMetadata_DescriptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseOpMetadata_CapsEntry(): OpMetadata_CapsEntry {
  return { key: "", value: false };
}

export const OpMetadata_CapsEntry = {
  encode(message: OpMetadata_CapsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpMetadata_CapsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpMetadata_CapsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpMetadata_CapsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false,
    };
  },

  toJSON(message: OpMetadata_CapsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<OpMetadata_CapsEntry>, I>>(base?: I): OpMetadata_CapsEntry {
    return OpMetadata_CapsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OpMetadata_CapsEntry>, I>>(object: I): OpMetadata_CapsEntry {
    const message = createBaseOpMetadata_CapsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseSource(): Source {
  return { locations: {}, infos: [] };
}

export const Source = {
  encode(message: Source, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.locations).forEach(([key, value]) => {
      Source_LocationsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.infos) {
      SourceInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Source {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Source_LocationsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.locations[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.infos.push(SourceInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Source {
    return {
      locations: isObject(object.locations)
        ? Object.entries(object.locations).reduce<{ [key: string]: Locations }>((acc, [key, value]) => {
          acc[key] = Locations.fromJSON(value);
          return acc;
        }, {})
        : {},
      infos: Array.isArray(object?.infos) ? object.infos.map((e: any) => SourceInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: Source): unknown {
    const obj: any = {};
    obj.locations = {};
    if (message.locations) {
      Object.entries(message.locations).forEach(([k, v]) => {
        obj.locations[k] = Locations.toJSON(v);
      });
    }
    if (message.infos) {
      obj.infos = message.infos.map((e) => e ? SourceInfo.toJSON(e) : undefined);
    } else {
      obj.infos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Source>, I>>(base?: I): Source {
    return Source.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Source>, I>>(object: I): Source {
    const message = createBaseSource();
    message.locations = Object.entries(object.locations ?? {}).reduce<{ [key: string]: Locations }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Locations.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.infos = object.infos?.map((e) => SourceInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSource_LocationsEntry(): Source_LocationsEntry {
  return { key: "", value: undefined };
}

export const Source_LocationsEntry = {
  encode(message: Source_LocationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Locations.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Source_LocationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSource_LocationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Locations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Source_LocationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Locations.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Source_LocationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Locations.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Source_LocationsEntry>, I>>(base?: I): Source_LocationsEntry {
    return Source_LocationsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Source_LocationsEntry>, I>>(object: I): Source_LocationsEntry {
    const message = createBaseSource_LocationsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Locations.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLocations(): Locations {
  return { locations: [] };
}

export const Locations = {
  encode(message: Locations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locations) {
      Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Locations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locations.push(Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Locations {
    return {
      locations: Array.isArray(object?.locations) ? object.locations.map((e: any) => Location.fromJSON(e)) : [],
    };
  },

  toJSON(message: Locations): unknown {
    const obj: any = {};
    if (message.locations) {
      obj.locations = message.locations.map((e) => e ? Location.toJSON(e) : undefined);
    } else {
      obj.locations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Locations>, I>>(base?: I): Locations {
    return Locations.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Locations>, I>>(object: I): Locations {
    const message = createBaseLocations();
    message.locations = object.locations?.map((e) => Location.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSourceInfo(): SourceInfo {
  return { filename: "", data: new Uint8Array(), definition: undefined };
}

export const SourceInfo = {
  encode(message: SourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.definition !== undefined) {
      Definition.encode(message.definition, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.definition = Definition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      definition: isSet(object.definition) ? Definition.fromJSON(object.definition) : undefined,
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.definition !== undefined &&
      (obj.definition = message.definition ? Definition.toJSON(message.definition) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SourceInfo>, I>>(base?: I): SourceInfo {
    return SourceInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo>, I>>(object: I): SourceInfo {
    const message = createBaseSourceInfo();
    message.filename = object.filename ?? "";
    message.data = object.data ?? new Uint8Array();
    message.definition = (object.definition !== undefined && object.definition !== null)
      ? Definition.fromPartial(object.definition)
      : undefined;
    return message;
  },
};

function createBaseLocation(): Location {
  return { sourceIndex: 0, ranges: [] };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceIndex !== 0) {
      writer.uint32(8).int32(message.sourceIndex);
    }
    for (const v of message.ranges) {
      Range.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceIndex = reader.int32();
          break;
        case 2:
          message.ranges.push(Range.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    return {
      sourceIndex: isSet(object.sourceIndex) ? Number(object.sourceIndex) : 0,
      ranges: Array.isArray(object?.ranges) ? object.ranges.map((e: any) => Range.fromJSON(e)) : [],
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.sourceIndex !== undefined && (obj.sourceIndex = Math.round(message.sourceIndex));
    if (message.ranges) {
      obj.ranges = message.ranges.map((e) => e ? Range.toJSON(e) : undefined);
    } else {
      obj.ranges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Location>, I>>(base?: I): Location {
    return Location.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.sourceIndex = object.sourceIndex ?? 0;
    message.ranges = object.ranges?.map((e) => Range.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRange(): Range {
  return { start: undefined, end: undefined };
}

export const Range = {
  encode(message: Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      Position.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Position.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Range {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.end = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Range {
    return {
      start: isSet(object.start) ? Position.fromJSON(object.start) : undefined,
      end: isSet(object.end) ? Position.fromJSON(object.end) : undefined,
    };
  },

  toJSON(message: Range): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start ? Position.toJSON(message.start) : undefined);
    message.end !== undefined && (obj.end = message.end ? Position.toJSON(message.end) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Range>, I>>(base?: I): Range {
    return Range.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Range>, I>>(object: I): Range {
    const message = createBaseRange();
    message.start = (object.start !== undefined && object.start !== null)
      ? Position.fromPartial(object.start)
      : undefined;
    message.end = (object.end !== undefined && object.end !== null) ? Position.fromPartial(object.end) : undefined;
    return message;
  },
};

function createBasePosition(): Position {
  return { line: 0, character: 0 };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.line !== 0) {
      writer.uint32(8).int32(message.line);
    }
    if (message.character !== 0) {
      writer.uint32(16).int32(message.character);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.line = reader.int32();
          break;
        case 2:
          message.character = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      line: isSet(object.line) ? Number(object.line) : 0,
      character: isSet(object.character) ? Number(object.character) : 0,
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.character !== undefined && (obj.character = Math.round(message.character));
    return obj;
  },

  create<I extends Exact<DeepPartial<Position>, I>>(base?: I): Position {
    return Position.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.line = object.line ?? 0;
    message.character = object.character ?? 0;
    return message;
  },
};

function createBaseExportCache(): ExportCache {
  return { Value: false };
}

export const ExportCache = {
  encode(message: ExportCache, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value === true) {
      writer.uint32(8).bool(message.Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportCache {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExportCache {
    return { Value: isSet(object.Value) ? Boolean(object.Value) : false };
  },

  toJSON(message: ExportCache): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportCache>, I>>(base?: I): ExportCache {
    return ExportCache.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportCache>, I>>(object: I): ExportCache {
    const message = createBaseExportCache();
    message.Value = object.Value ?? false;
    return message;
  },
};

function createBaseProgressGroup(): ProgressGroup {
  return { id: "", name: "", weak: false };
}

export const ProgressGroup = {
  encode(message: ProgressGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.weak === true) {
      writer.uint32(24).bool(message.weak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProgressGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProgressGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.weak = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProgressGroup {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      weak: isSet(object.weak) ? Boolean(object.weak) : false,
    };
  },

  toJSON(message: ProgressGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.weak !== undefined && (obj.weak = message.weak);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProgressGroup>, I>>(base?: I): ProgressGroup {
    return ProgressGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProgressGroup>, I>>(object: I): ProgressGroup {
    const message = createBaseProgressGroup();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.weak = object.weak ?? false;
    return message;
  },
};

function createBaseProxyEnv(): ProxyEnv {
  return { httpProxy: "", httpsProxy: "", ftpProxy: "", noProxy: "", allProxy: "" };
}

export const ProxyEnv = {
  encode(message: ProxyEnv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpProxy !== "") {
      writer.uint32(10).string(message.httpProxy);
    }
    if (message.httpsProxy !== "") {
      writer.uint32(18).string(message.httpsProxy);
    }
    if (message.ftpProxy !== "") {
      writer.uint32(26).string(message.ftpProxy);
    }
    if (message.noProxy !== "") {
      writer.uint32(34).string(message.noProxy);
    }
    if (message.allProxy !== "") {
      writer.uint32(42).string(message.allProxy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProxyEnv {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProxyEnv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpProxy = reader.string();
          break;
        case 2:
          message.httpsProxy = reader.string();
          break;
        case 3:
          message.ftpProxy = reader.string();
          break;
        case 4:
          message.noProxy = reader.string();
          break;
        case 5:
          message.allProxy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProxyEnv {
    return {
      httpProxy: isSet(object.httpProxy) ? String(object.httpProxy) : "",
      httpsProxy: isSet(object.httpsProxy) ? String(object.httpsProxy) : "",
      ftpProxy: isSet(object.ftpProxy) ? String(object.ftpProxy) : "",
      noProxy: isSet(object.noProxy) ? String(object.noProxy) : "",
      allProxy: isSet(object.allProxy) ? String(object.allProxy) : "",
    };
  },

  toJSON(message: ProxyEnv): unknown {
    const obj: any = {};
    message.httpProxy !== undefined && (obj.httpProxy = message.httpProxy);
    message.httpsProxy !== undefined && (obj.httpsProxy = message.httpsProxy);
    message.ftpProxy !== undefined && (obj.ftpProxy = message.ftpProxy);
    message.noProxy !== undefined && (obj.noProxy = message.noProxy);
    message.allProxy !== undefined && (obj.allProxy = message.allProxy);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProxyEnv>, I>>(base?: I): ProxyEnv {
    return ProxyEnv.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProxyEnv>, I>>(object: I): ProxyEnv {
    const message = createBaseProxyEnv();
    message.httpProxy = object.httpProxy ?? "";
    message.httpsProxy = object.httpsProxy ?? "";
    message.ftpProxy = object.ftpProxy ?? "";
    message.noProxy = object.noProxy ?? "";
    message.allProxy = object.allProxy ?? "";
    return message;
  },
};

function createBaseWorkerConstraints(): WorkerConstraints {
  return { filter: [] };
}

export const WorkerConstraints = {
  encode(message: WorkerConstraints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filter) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerConstraints {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkerConstraints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerConstraints {
    return { filter: Array.isArray(object?.filter) ? object.filter.map((e: any) => String(e)) : [] };
  },

  toJSON(message: WorkerConstraints): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) => e);
    } else {
      obj.filter = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WorkerConstraints>, I>>(base?: I): WorkerConstraints {
    return WorkerConstraints.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WorkerConstraints>, I>>(object: I): WorkerConstraints {
    const message = createBaseWorkerConstraints();
    message.filter = object.filter?.map((e) => e) || [];
    return message;
  },
};

function createBaseDefinition(): Definition {
  return { def: [], metadata: {}, Source: undefined };
}

export const Definition = {
  encode(message: Definition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.def) {
      writer.uint32(10).bytes(v!);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Definition_MetadataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.Source !== undefined) {
      Source.encode(message.Source, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Definition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.def.push(reader.bytes());
          break;
        case 2:
          const entry2 = Definition_MetadataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.Source = Source.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Definition {
    return {
      def: Array.isArray(object?.def) ? object.def.map((e: any) => bytesFromBase64(e)) : [],
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: OpMetadata }>((acc, [key, value]) => {
          acc[key] = OpMetadata.fromJSON(value);
          return acc;
        }, {})
        : {},
      Source: isSet(object.Source) ? Source.fromJSON(object.Source) : undefined,
    };
  },

  toJSON(message: Definition): unknown {
    const obj: any = {};
    if (message.def) {
      obj.def = message.def.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.def = [];
    }
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = OpMetadata.toJSON(v);
      });
    }
    message.Source !== undefined && (obj.Source = message.Source ? Source.toJSON(message.Source) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Definition>, I>>(base?: I): Definition {
    return Definition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Definition>, I>>(object: I): Definition {
    const message = createBaseDefinition();
    message.def = object.def?.map((e) => e) || [];
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: OpMetadata }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = OpMetadata.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.Source = (object.Source !== undefined && object.Source !== null)
      ? Source.fromPartial(object.Source)
      : undefined;
    return message;
  },
};

function createBaseDefinition_MetadataEntry(): Definition_MetadataEntry {
  return { key: "", value: undefined };
}

export const Definition_MetadataEntry = {
  encode(message: Definition_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      OpMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Definition_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = OpMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Definition_MetadataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? OpMetadata.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Definition_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? OpMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Definition_MetadataEntry>, I>>(base?: I): Definition_MetadataEntry {
    return Definition_MetadataEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Definition_MetadataEntry>, I>>(object: I): Definition_MetadataEntry {
    const message = createBaseDefinition_MetadataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? OpMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFileOp(): FileOp {
  return { actions: [] };
}

export const FileOp = {
  encode(message: FileOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      FileAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.actions.push(FileAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileOp {
    return { actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => FileAction.fromJSON(e)) : [] };
  },

  toJSON(message: FileOp): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? FileAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileOp>, I>>(base?: I): FileOp {
    return FileOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileOp>, I>>(object: I): FileOp {
    const message = createBaseFileOp();
    message.actions = object.actions?.map((e) => FileAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileAction(): FileAction {
  return {
    input: 0,
    secondaryInput: 0,
    output: 0,
    copy: undefined,
    mkfile: undefined,
    mkdir: undefined,
    rm: undefined,
  };
}

export const FileAction = {
  encode(message: FileAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    if (message.secondaryInput !== 0) {
      writer.uint32(16).int64(message.secondaryInput);
    }
    if (message.output !== 0) {
      writer.uint32(24).int64(message.output);
    }
    if (message.copy !== undefined) {
      FileActionCopy.encode(message.copy, writer.uint32(34).fork()).ldelim();
    }
    if (message.mkfile !== undefined) {
      FileActionMkFile.encode(message.mkfile, writer.uint32(42).fork()).ldelim();
    }
    if (message.mkdir !== undefined) {
      FileActionMkDir.encode(message.mkdir, writer.uint32(50).fork()).ldelim();
    }
    if (message.rm !== undefined) {
      FileActionRm.encode(message.rm, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.secondaryInput = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.output = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.copy = FileActionCopy.decode(reader, reader.uint32());
          break;
        case 5:
          message.mkfile = FileActionMkFile.decode(reader, reader.uint32());
          break;
        case 6:
          message.mkdir = FileActionMkDir.decode(reader, reader.uint32());
          break;
        case 7:
          message.rm = FileActionRm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileAction {
    return {
      input: isSet(object.input) ? Number(object.input) : 0,
      secondaryInput: isSet(object.secondaryInput) ? Number(object.secondaryInput) : 0,
      output: isSet(object.output) ? Number(object.output) : 0,
      copy: isSet(object.copy) ? FileActionCopy.fromJSON(object.copy) : undefined,
      mkfile: isSet(object.mkfile) ? FileActionMkFile.fromJSON(object.mkfile) : undefined,
      mkdir: isSet(object.mkdir) ? FileActionMkDir.fromJSON(object.mkdir) : undefined,
      rm: isSet(object.rm) ? FileActionRm.fromJSON(object.rm) : undefined,
    };
  },

  toJSON(message: FileAction): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    message.secondaryInput !== undefined && (obj.secondaryInput = Math.round(message.secondaryInput));
    message.output !== undefined && (obj.output = Math.round(message.output));
    message.copy !== undefined && (obj.copy = message.copy ? FileActionCopy.toJSON(message.copy) : undefined);
    message.mkfile !== undefined && (obj.mkfile = message.mkfile ? FileActionMkFile.toJSON(message.mkfile) : undefined);
    message.mkdir !== undefined && (obj.mkdir = message.mkdir ? FileActionMkDir.toJSON(message.mkdir) : undefined);
    message.rm !== undefined && (obj.rm = message.rm ? FileActionRm.toJSON(message.rm) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<FileAction>, I>>(base?: I): FileAction {
    return FileAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileAction>, I>>(object: I): FileAction {
    const message = createBaseFileAction();
    message.input = object.input ?? 0;
    message.secondaryInput = object.secondaryInput ?? 0;
    message.output = object.output ?? 0;
    message.copy = (object.copy !== undefined && object.copy !== null)
      ? FileActionCopy.fromPartial(object.copy)
      : undefined;
    message.mkfile = (object.mkfile !== undefined && object.mkfile !== null)
      ? FileActionMkFile.fromPartial(object.mkfile)
      : undefined;
    message.mkdir = (object.mkdir !== undefined && object.mkdir !== null)
      ? FileActionMkDir.fromPartial(object.mkdir)
      : undefined;
    message.rm = (object.rm !== undefined && object.rm !== null) ? FileActionRm.fromPartial(object.rm) : undefined;
    return message;
  },
};

function createBaseFileActionCopy(): FileActionCopy {
  return {
    src: "",
    dest: "",
    owner: undefined,
    mode: 0,
    followSymlink: false,
    dirCopyContents: false,
    attemptUnpackDockerCompatibility: false,
    createDestPath: false,
    allowWildcard: false,
    allowEmptyWildcard: false,
    timestamp: 0,
    includePatterns: [],
    excludePatterns: [],
  };
}

export const FileActionCopy = {
  encode(message: FileActionCopy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.dest !== "") {
      writer.uint32(18).string(message.dest);
    }
    if (message.owner !== undefined) {
      ChownOpt.encode(message.owner, writer.uint32(26).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(32).int32(message.mode);
    }
    if (message.followSymlink === true) {
      writer.uint32(40).bool(message.followSymlink);
    }
    if (message.dirCopyContents === true) {
      writer.uint32(48).bool(message.dirCopyContents);
    }
    if (message.attemptUnpackDockerCompatibility === true) {
      writer.uint32(56).bool(message.attemptUnpackDockerCompatibility);
    }
    if (message.createDestPath === true) {
      writer.uint32(64).bool(message.createDestPath);
    }
    if (message.allowWildcard === true) {
      writer.uint32(72).bool(message.allowWildcard);
    }
    if (message.allowEmptyWildcard === true) {
      writer.uint32(80).bool(message.allowEmptyWildcard);
    }
    if (message.timestamp !== 0) {
      writer.uint32(88).int64(message.timestamp);
    }
    for (const v of message.includePatterns) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.excludePatterns) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileActionCopy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileActionCopy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 2:
          message.dest = reader.string();
          break;
        case 3:
          message.owner = ChownOpt.decode(reader, reader.uint32());
          break;
        case 4:
          message.mode = reader.int32();
          break;
        case 5:
          message.followSymlink = reader.bool();
          break;
        case 6:
          message.dirCopyContents = reader.bool();
          break;
        case 7:
          message.attemptUnpackDockerCompatibility = reader.bool();
          break;
        case 8:
          message.createDestPath = reader.bool();
          break;
        case 9:
          message.allowWildcard = reader.bool();
          break;
        case 10:
          message.allowEmptyWildcard = reader.bool();
          break;
        case 11:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.includePatterns.push(reader.string());
          break;
        case 13:
          message.excludePatterns.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileActionCopy {
    return {
      src: isSet(object.src) ? String(object.src) : "",
      dest: isSet(object.dest) ? String(object.dest) : "",
      owner: isSet(object.owner) ? ChownOpt.fromJSON(object.owner) : undefined,
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      followSymlink: isSet(object.followSymlink) ? Boolean(object.followSymlink) : false,
      dirCopyContents: isSet(object.dirCopyContents) ? Boolean(object.dirCopyContents) : false,
      attemptUnpackDockerCompatibility: isSet(object.attemptUnpackDockerCompatibility)
        ? Boolean(object.attemptUnpackDockerCompatibility)
        : false,
      createDestPath: isSet(object.createDestPath) ? Boolean(object.createDestPath) : false,
      allowWildcard: isSet(object.allowWildcard) ? Boolean(object.allowWildcard) : false,
      allowEmptyWildcard: isSet(object.allowEmptyWildcard) ? Boolean(object.allowEmptyWildcard) : false,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      includePatterns: Array.isArray(object?.includePatterns) ? object.includePatterns.map((e: any) => String(e)) : [],
      excludePatterns: Array.isArray(object?.excludePatterns) ? object.excludePatterns.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: FileActionCopy): unknown {
    const obj: any = {};
    message.src !== undefined && (obj.src = message.src);
    message.dest !== undefined && (obj.dest = message.dest);
    message.owner !== undefined && (obj.owner = message.owner ? ChownOpt.toJSON(message.owner) : undefined);
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.followSymlink !== undefined && (obj.followSymlink = message.followSymlink);
    message.dirCopyContents !== undefined && (obj.dirCopyContents = message.dirCopyContents);
    message.attemptUnpackDockerCompatibility !== undefined &&
      (obj.attemptUnpackDockerCompatibility = message.attemptUnpackDockerCompatibility);
    message.createDestPath !== undefined && (obj.createDestPath = message.createDestPath);
    message.allowWildcard !== undefined && (obj.allowWildcard = message.allowWildcard);
    message.allowEmptyWildcard !== undefined && (obj.allowEmptyWildcard = message.allowEmptyWildcard);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    if (message.includePatterns) {
      obj.includePatterns = message.includePatterns.map((e) => e);
    } else {
      obj.includePatterns = [];
    }
    if (message.excludePatterns) {
      obj.excludePatterns = message.excludePatterns.map((e) => e);
    } else {
      obj.excludePatterns = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileActionCopy>, I>>(base?: I): FileActionCopy {
    return FileActionCopy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileActionCopy>, I>>(object: I): FileActionCopy {
    const message = createBaseFileActionCopy();
    message.src = object.src ?? "";
    message.dest = object.dest ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? ChownOpt.fromPartial(object.owner)
      : undefined;
    message.mode = object.mode ?? 0;
    message.followSymlink = object.followSymlink ?? false;
    message.dirCopyContents = object.dirCopyContents ?? false;
    message.attemptUnpackDockerCompatibility = object.attemptUnpackDockerCompatibility ?? false;
    message.createDestPath = object.createDestPath ?? false;
    message.allowWildcard = object.allowWildcard ?? false;
    message.allowEmptyWildcard = object.allowEmptyWildcard ?? false;
    message.timestamp = object.timestamp ?? 0;
    message.includePatterns = object.includePatterns?.map((e) => e) || [];
    message.excludePatterns = object.excludePatterns?.map((e) => e) || [];
    return message;
  },
};

function createBaseFileActionMkFile(): FileActionMkFile {
  return { path: "", mode: 0, data: new Uint8Array(), owner: undefined, timestamp: 0 };
}

export const FileActionMkFile = {
  encode(message: FileActionMkFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.owner !== undefined) {
      ChownOpt.encode(message.owner, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileActionMkFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileActionMkFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.mode = reader.int32();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.owner = ChownOpt.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileActionMkFile {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      owner: isSet(object.owner) ? ChownOpt.fromJSON(object.owner) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: FileActionMkFile): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.owner !== undefined && (obj.owner = message.owner ? ChownOpt.toJSON(message.owner) : undefined);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<FileActionMkFile>, I>>(base?: I): FileActionMkFile {
    return FileActionMkFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileActionMkFile>, I>>(object: I): FileActionMkFile {
    const message = createBaseFileActionMkFile();
    message.path = object.path ?? "";
    message.mode = object.mode ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? ChownOpt.fromPartial(object.owner)
      : undefined;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseFileActionMkDir(): FileActionMkDir {
  return { path: "", mode: 0, makeParents: false, owner: undefined, timestamp: 0 };
}

export const FileActionMkDir = {
  encode(message: FileActionMkDir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    if (message.makeParents === true) {
      writer.uint32(24).bool(message.makeParents);
    }
    if (message.owner !== undefined) {
      ChownOpt.encode(message.owner, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileActionMkDir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileActionMkDir();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.mode = reader.int32();
          break;
        case 3:
          message.makeParents = reader.bool();
          break;
        case 4:
          message.owner = ChownOpt.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileActionMkDir {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      makeParents: isSet(object.makeParents) ? Boolean(object.makeParents) : false,
      owner: isSet(object.owner) ? ChownOpt.fromJSON(object.owner) : undefined,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: FileActionMkDir): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.makeParents !== undefined && (obj.makeParents = message.makeParents);
    message.owner !== undefined && (obj.owner = message.owner ? ChownOpt.toJSON(message.owner) : undefined);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<FileActionMkDir>, I>>(base?: I): FileActionMkDir {
    return FileActionMkDir.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileActionMkDir>, I>>(object: I): FileActionMkDir {
    const message = createBaseFileActionMkDir();
    message.path = object.path ?? "";
    message.mode = object.mode ?? 0;
    message.makeParents = object.makeParents ?? false;
    message.owner = (object.owner !== undefined && object.owner !== null)
      ? ChownOpt.fromPartial(object.owner)
      : undefined;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseFileActionRm(): FileActionRm {
  return { path: "", allowNotFound: false, allowWildcard: false };
}

export const FileActionRm = {
  encode(message: FileActionRm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.allowNotFound === true) {
      writer.uint32(16).bool(message.allowNotFound);
    }
    if (message.allowWildcard === true) {
      writer.uint32(24).bool(message.allowWildcard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileActionRm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileActionRm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.allowNotFound = reader.bool();
          break;
        case 3:
          message.allowWildcard = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileActionRm {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      allowNotFound: isSet(object.allowNotFound) ? Boolean(object.allowNotFound) : false,
      allowWildcard: isSet(object.allowWildcard) ? Boolean(object.allowWildcard) : false,
    };
  },

  toJSON(message: FileActionRm): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.allowNotFound !== undefined && (obj.allowNotFound = message.allowNotFound);
    message.allowWildcard !== undefined && (obj.allowWildcard = message.allowWildcard);
    return obj;
  },

  create<I extends Exact<DeepPartial<FileActionRm>, I>>(base?: I): FileActionRm {
    return FileActionRm.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileActionRm>, I>>(object: I): FileActionRm {
    const message = createBaseFileActionRm();
    message.path = object.path ?? "";
    message.allowNotFound = object.allowNotFound ?? false;
    message.allowWildcard = object.allowWildcard ?? false;
    return message;
  },
};

function createBaseChownOpt(): ChownOpt {
  return { user: undefined, group: undefined };
}

export const ChownOpt = {
  encode(message: ChownOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserOpt.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.group !== undefined) {
      UserOpt.encode(message.group, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChownOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChownOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserOpt.decode(reader, reader.uint32());
          break;
        case 2:
          message.group = UserOpt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChownOpt {
    return {
      user: isSet(object.user) ? UserOpt.fromJSON(object.user) : undefined,
      group: isSet(object.group) ? UserOpt.fromJSON(object.group) : undefined,
    };
  },

  toJSON(message: ChownOpt): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? UserOpt.toJSON(message.user) : undefined);
    message.group !== undefined && (obj.group = message.group ? UserOpt.toJSON(message.group) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChownOpt>, I>>(base?: I): ChownOpt {
    return ChownOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChownOpt>, I>>(object: I): ChownOpt {
    const message = createBaseChownOpt();
    message.user = (object.user !== undefined && object.user !== null) ? UserOpt.fromPartial(object.user) : undefined;
    message.group = (object.group !== undefined && object.group !== null)
      ? UserOpt.fromPartial(object.group)
      : undefined;
    return message;
  },
};

function createBaseUserOpt(): UserOpt {
  return { byName: undefined, byID: undefined };
}

export const UserOpt = {
  encode(message: UserOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.byName !== undefined) {
      NamedUserOpt.encode(message.byName, writer.uint32(10).fork()).ldelim();
    }
    if (message.byID !== undefined) {
      writer.uint32(16).uint32(message.byID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byName = NamedUserOpt.decode(reader, reader.uint32());
          break;
        case 2:
          message.byID = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserOpt {
    return {
      byName: isSet(object.byName) ? NamedUserOpt.fromJSON(object.byName) : undefined,
      byID: isSet(object.byID) ? Number(object.byID) : undefined,
    };
  },

  toJSON(message: UserOpt): unknown {
    const obj: any = {};
    message.byName !== undefined && (obj.byName = message.byName ? NamedUserOpt.toJSON(message.byName) : undefined);
    message.byID !== undefined && (obj.byID = Math.round(message.byID));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserOpt>, I>>(base?: I): UserOpt {
    return UserOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserOpt>, I>>(object: I): UserOpt {
    const message = createBaseUserOpt();
    message.byName = (object.byName !== undefined && object.byName !== null)
      ? NamedUserOpt.fromPartial(object.byName)
      : undefined;
    message.byID = object.byID ?? undefined;
    return message;
  },
};

function createBaseNamedUserOpt(): NamedUserOpt {
  return { name: "", input: 0 };
}

export const NamedUserOpt = {
  encode(message: NamedUserOpt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input !== 0) {
      writer.uint32(16).int64(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NamedUserOpt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamedUserOpt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.input = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NamedUserOpt {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      input: isSet(object.input) ? Number(object.input) : 0,
    };
  },

  toJSON(message: NamedUserOpt): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.input !== undefined && (obj.input = Math.round(message.input));
    return obj;
  },

  create<I extends Exact<DeepPartial<NamedUserOpt>, I>>(base?: I): NamedUserOpt {
    return NamedUserOpt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NamedUserOpt>, I>>(object: I): NamedUserOpt {
    const message = createBaseNamedUserOpt();
    message.name = object.name ?? "";
    message.input = object.input ?? 0;
    return message;
  },
};

function createBaseMergeInput(): MergeInput {
  return { input: 0 };
}

export const MergeInput = {
  encode(message: MergeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MergeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMergeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MergeInput {
    return { input: isSet(object.input) ? Number(object.input) : 0 };
  },

  toJSON(message: MergeInput): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    return obj;
  },

  create<I extends Exact<DeepPartial<MergeInput>, I>>(base?: I): MergeInput {
    return MergeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MergeInput>, I>>(object: I): MergeInput {
    const message = createBaseMergeInput();
    message.input = object.input ?? 0;
    return message;
  },
};

function createBaseMergeOp(): MergeOp {
  return { inputs: [] };
}

export const MergeOp = {
  encode(message: MergeOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      MergeInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MergeOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMergeOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(MergeInput.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MergeOp {
    return { inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => MergeInput.fromJSON(e)) : [] };
  },

  toJSON(message: MergeOp): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? MergeInput.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MergeOp>, I>>(base?: I): MergeOp {
    return MergeOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MergeOp>, I>>(object: I): MergeOp {
    const message = createBaseMergeOp();
    message.inputs = object.inputs?.map((e) => MergeInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLowerDiffInput(): LowerDiffInput {
  return { input: 0 };
}

export const LowerDiffInput = {
  encode(message: LowerDiffInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LowerDiffInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLowerDiffInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LowerDiffInput {
    return { input: isSet(object.input) ? Number(object.input) : 0 };
  },

  toJSON(message: LowerDiffInput): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    return obj;
  },

  create<I extends Exact<DeepPartial<LowerDiffInput>, I>>(base?: I): LowerDiffInput {
    return LowerDiffInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LowerDiffInput>, I>>(object: I): LowerDiffInput {
    const message = createBaseLowerDiffInput();
    message.input = object.input ?? 0;
    return message;
  },
};

function createBaseUpperDiffInput(): UpperDiffInput {
  return { input: 0 };
}

export const UpperDiffInput = {
  encode(message: UpperDiffInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== 0) {
      writer.uint32(8).int64(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpperDiffInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpperDiffInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpperDiffInput {
    return { input: isSet(object.input) ? Number(object.input) : 0 };
  },

  toJSON(message: UpperDiffInput): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = Math.round(message.input));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpperDiffInput>, I>>(base?: I): UpperDiffInput {
    return UpperDiffInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpperDiffInput>, I>>(object: I): UpperDiffInput {
    const message = createBaseUpperDiffInput();
    message.input = object.input ?? 0;
    return message;
  },
};

function createBaseDiffOp(): DiffOp {
  return { lower: undefined, upper: undefined };
}

export const DiffOp = {
  encode(message: DiffOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lower !== undefined) {
      LowerDiffInput.encode(message.lower, writer.uint32(10).fork()).ldelim();
    }
    if (message.upper !== undefined) {
      UpperDiffInput.encode(message.upper, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiffOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiffOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lower = LowerDiffInput.decode(reader, reader.uint32());
          break;
        case 2:
          message.upper = UpperDiffInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiffOp {
    return {
      lower: isSet(object.lower) ? LowerDiffInput.fromJSON(object.lower) : undefined,
      upper: isSet(object.upper) ? UpperDiffInput.fromJSON(object.upper) : undefined,
    };
  },

  toJSON(message: DiffOp): unknown {
    const obj: any = {};
    message.lower !== undefined && (obj.lower = message.lower ? LowerDiffInput.toJSON(message.lower) : undefined);
    message.upper !== undefined && (obj.upper = message.upper ? UpperDiffInput.toJSON(message.upper) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DiffOp>, I>>(base?: I): DiffOp {
    return DiffOp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiffOp>, I>>(object: I): DiffOp {
    const message = createBaseDiffOp();
    message.lower = (object.lower !== undefined && object.lower !== null)
      ? LowerDiffInput.fromPartial(object.lower)
      : undefined;
    message.upper = (object.upper !== undefined && object.upper !== null)
      ? UpperDiffInput.fromPartial(object.upper)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
