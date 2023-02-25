import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pb. */
export namespace pb {

    /** Properties of an Op. */
    interface IOp {

        /** Op inputs */
        inputs?: (pb.IInput[]|null);

        /** Op exec */
        exec?: (pb.IExecOp|null);

        /** Op source */
        source?: (pb.ISourceOp|null);

        /** Op file */
        file?: (pb.IFileOp|null);

        /** Op build */
        build?: (pb.IBuildOp|null);

        /** Op merge */
        merge?: (pb.IMergeOp|null);

        /** Op diff */
        diff?: (pb.IDiffOp|null);

        /** Op platform */
        platform?: (pb.IPlatform|null);

        /** Op constraints */
        constraints?: (pb.IWorkerConstraints|null);
    }

    /** Represents an Op. */
    class Op implements IOp {

        /**
         * Constructs a new Op.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IOp);

        /** Op inputs. */
        public inputs: pb.IInput[];

        /** Op exec. */
        public exec?: (pb.IExecOp|null);

        /** Op source. */
        public source?: (pb.ISourceOp|null);

        /** Op file. */
        public file?: (pb.IFileOp|null);

        /** Op build. */
        public build?: (pb.IBuildOp|null);

        /** Op merge. */
        public merge?: (pb.IMergeOp|null);

        /** Op diff. */
        public diff?: (pb.IDiffOp|null);

        /** Op platform. */
        public platform?: (pb.IPlatform|null);

        /** Op constraints. */
        public constraints?: (pb.IWorkerConstraints|null);

        /** Op op. */
        public op?: ("exec"|"source"|"file"|"build"|"merge"|"diff");

        /**
         * Creates a new Op instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Op instance
         */
        public static create(properties?: pb.IOp): pb.Op;

        /**
         * Encodes the specified Op message. Does not implicitly {@link pb.Op.verify|verify} messages.
         * @param message Op message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Op message, length delimited. Does not implicitly {@link pb.Op.verify|verify} messages.
         * @param message Op message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Op message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Op
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Op;

        /**
         * Decodes an Op message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Op
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Op;

        /**
         * Verifies an Op message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Op message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Op
         */
        public static fromObject(object: { [k: string]: any }): pb.Op;

        /**
         * Creates a plain object from an Op message. Also converts values to other types if specified.
         * @param message Op
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Op, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Op to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Op
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Platform. */
    interface IPlatform {

        /** Platform Architecture */
        Architecture?: (string|null);

        /** Platform OS */
        OS?: (string|null);

        /** Platform Variant */
        Variant?: (string|null);

        /** Platform OSVersion */
        OSVersion?: (string|null);

        /** Platform OSFeatures */
        OSFeatures?: (string[]|null);
    }

    /** Represents a Platform. */
    class Platform implements IPlatform {

        /**
         * Constructs a new Platform.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlatform);

        /** Platform Architecture. */
        public Architecture: string;

        /** Platform OS. */
        public OS: string;

        /** Platform Variant. */
        public Variant: string;

        /** Platform OSVersion. */
        public OSVersion: string;

        /** Platform OSFeatures. */
        public OSFeatures: string[];

        /**
         * Creates a new Platform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Platform instance
         */
        public static create(properties?: pb.IPlatform): pb.Platform;

        /**
         * Encodes the specified Platform message. Does not implicitly {@link pb.Platform.verify|verify} messages.
         * @param message Platform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlatform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Platform message, length delimited. Does not implicitly {@link pb.Platform.verify|verify} messages.
         * @param message Platform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlatform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Platform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Platform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Platform;

        /**
         * Decodes a Platform message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Platform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Platform;

        /**
         * Verifies a Platform message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Platform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Platform
         */
        public static fromObject(object: { [k: string]: any }): pb.Platform;

        /**
         * Creates a plain object from a Platform message. Also converts values to other types if specified.
         * @param message Platform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Platform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Platform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Platform
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Input. */
    interface IInput {

        /** Input digest */
        digest?: (string|null);

        /** Input index */
        index?: (number|Long|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IInput);

        /** Input digest. */
        public digest: string;

        /** Input index. */
        public index: (number|Long);

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: pb.IInput): pb.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): pb.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Input
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExecOp. */
    interface IExecOp {

        /** ExecOp meta */
        meta?: (pb.IMeta|null);

        /** ExecOp mounts */
        mounts?: (pb.IMount[]|null);

        /** ExecOp network */
        network?: (pb.NetMode|null);

        /** ExecOp security */
        security?: (pb.SecurityMode|null);

        /** ExecOp secretenv */
        secretenv?: (pb.ISecretEnv[]|null);
    }

    /** Represents an ExecOp. */
    class ExecOp implements IExecOp {

        /**
         * Constructs a new ExecOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IExecOp);

        /** ExecOp meta. */
        public meta?: (pb.IMeta|null);

        /** ExecOp mounts. */
        public mounts: pb.IMount[];

        /** ExecOp network. */
        public network: pb.NetMode;

        /** ExecOp security. */
        public security: pb.SecurityMode;

        /** ExecOp secretenv. */
        public secretenv: pb.ISecretEnv[];

        /**
         * Creates a new ExecOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecOp instance
         */
        public static create(properties?: pb.IExecOp): pb.ExecOp;

        /**
         * Encodes the specified ExecOp message. Does not implicitly {@link pb.ExecOp.verify|verify} messages.
         * @param message ExecOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IExecOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecOp message, length delimited. Does not implicitly {@link pb.ExecOp.verify|verify} messages.
         * @param message ExecOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IExecOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ExecOp;

        /**
         * Decodes an ExecOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ExecOp;

        /**
         * Verifies an ExecOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecOp
         */
        public static fromObject(object: { [k: string]: any }): pb.ExecOp;

        /**
         * Creates a plain object from an ExecOp message. Also converts values to other types if specified.
         * @param message ExecOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ExecOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExecOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Meta. */
    interface IMeta {

        /** Meta args */
        args?: (string[]|null);

        /** Meta env */
        env?: (string[]|null);

        /** Meta cwd */
        cwd?: (string|null);

        /** Meta user */
        user?: (string|null);

        /** Meta proxyEnv */
        proxyEnv?: (pb.IProxyEnv|null);

        /** Meta extraHosts */
        extraHosts?: (pb.IHostIP[]|null);

        /** Meta hostname */
        hostname?: (string|null);

        /** Meta ulimit */
        ulimit?: (pb.IUlimit[]|null);

        /** Meta cgroupParent */
        cgroupParent?: (string|null);

        /** Meta removeMountStubsRecursive */
        removeMountStubsRecursive?: (boolean|null);
    }

    /** Represents a Meta. */
    class Meta implements IMeta {

        /**
         * Constructs a new Meta.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMeta);

        /** Meta args. */
        public args: string[];

        /** Meta env. */
        public env: string[];

        /** Meta cwd. */
        public cwd: string;

        /** Meta user. */
        public user: string;

        /** Meta proxyEnv. */
        public proxyEnv?: (pb.IProxyEnv|null);

        /** Meta extraHosts. */
        public extraHosts: pb.IHostIP[];

        /** Meta hostname. */
        public hostname: string;

        /** Meta ulimit. */
        public ulimit: pb.IUlimit[];

        /** Meta cgroupParent. */
        public cgroupParent: string;

        /** Meta removeMountStubsRecursive. */
        public removeMountStubsRecursive: boolean;

        /**
         * Creates a new Meta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Meta instance
         */
        public static create(properties?: pb.IMeta): pb.Meta;

        /**
         * Encodes the specified Meta message. Does not implicitly {@link pb.Meta.verify|verify} messages.
         * @param message Meta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Meta message, length delimited. Does not implicitly {@link pb.Meta.verify|verify} messages.
         * @param message Meta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Meta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Meta;

        /**
         * Decodes a Meta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Meta;

        /**
         * Verifies a Meta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Meta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Meta
         */
        public static fromObject(object: { [k: string]: any }): pb.Meta;

        /**
         * Creates a plain object from a Meta message. Also converts values to other types if specified.
         * @param message Meta
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Meta to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Meta
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HostIP. */
    interface IHostIP {

        /** HostIP Host */
        Host?: (string|null);

        /** HostIP IP */
        IP?: (string|null);
    }

    /** Represents a HostIP. */
    class HostIP implements IHostIP {

        /**
         * Constructs a new HostIP.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IHostIP);

        /** HostIP Host. */
        public Host: string;

        /** HostIP IP. */
        public IP: string;

        /**
         * Creates a new HostIP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostIP instance
         */
        public static create(properties?: pb.IHostIP): pb.HostIP;

        /**
         * Encodes the specified HostIP message. Does not implicitly {@link pb.HostIP.verify|verify} messages.
         * @param message HostIP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IHostIP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HostIP message, length delimited. Does not implicitly {@link pb.HostIP.verify|verify} messages.
         * @param message HostIP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IHostIP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostIP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostIP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.HostIP;

        /**
         * Decodes a HostIP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HostIP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.HostIP;

        /**
         * Verifies a HostIP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HostIP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostIP
         */
        public static fromObject(object: { [k: string]: any }): pb.HostIP;

        /**
         * Creates a plain object from a HostIP message. Also converts values to other types if specified.
         * @param message HostIP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.HostIP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostIP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HostIP
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Ulimit. */
    interface IUlimit {

        /** Ulimit Name */
        Name?: (string|null);

        /** Ulimit Soft */
        Soft?: (number|Long|null);

        /** Ulimit Hard */
        Hard?: (number|Long|null);
    }

    /** Represents an Ulimit. */
    class Ulimit implements IUlimit {

        /**
         * Constructs a new Ulimit.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUlimit);

        /** Ulimit Name. */
        public Name: string;

        /** Ulimit Soft. */
        public Soft: (number|Long);

        /** Ulimit Hard. */
        public Hard: (number|Long);

        /**
         * Creates a new Ulimit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ulimit instance
         */
        public static create(properties?: pb.IUlimit): pb.Ulimit;

        /**
         * Encodes the specified Ulimit message. Does not implicitly {@link pb.Ulimit.verify|verify} messages.
         * @param message Ulimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUlimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ulimit message, length delimited. Does not implicitly {@link pb.Ulimit.verify|verify} messages.
         * @param message Ulimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUlimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ulimit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ulimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Ulimit;

        /**
         * Decodes an Ulimit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ulimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Ulimit;

        /**
         * Verifies an Ulimit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ulimit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ulimit
         */
        public static fromObject(object: { [k: string]: any }): pb.Ulimit;

        /**
         * Creates a plain object from an Ulimit message. Also converts values to other types if specified.
         * @param message Ulimit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Ulimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ulimit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ulimit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** NetMode enum. */
    enum NetMode {
        UNSET = 0,
        HOST = 1,
        NONE = 2
    }

    /** SecurityMode enum. */
    enum SecurityMode {
        SANDBOX = 0,
        INSECURE = 1
    }

    /** Properties of a SecretEnv. */
    interface ISecretEnv {

        /** SecretEnv ID */
        ID?: (string|null);

        /** SecretEnv name */
        name?: (string|null);

        /** SecretEnv optional */
        optional?: (boolean|null);
    }

    /** Represents a SecretEnv. */
    class SecretEnv implements ISecretEnv {

        /**
         * Constructs a new SecretEnv.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISecretEnv);

        /** SecretEnv ID. */
        public ID: string;

        /** SecretEnv name. */
        public name: string;

        /** SecretEnv optional. */
        public optional: boolean;

        /**
         * Creates a new SecretEnv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecretEnv instance
         */
        public static create(properties?: pb.ISecretEnv): pb.SecretEnv;

        /**
         * Encodes the specified SecretEnv message. Does not implicitly {@link pb.SecretEnv.verify|verify} messages.
         * @param message SecretEnv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISecretEnv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecretEnv message, length delimited. Does not implicitly {@link pb.SecretEnv.verify|verify} messages.
         * @param message SecretEnv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISecretEnv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecretEnv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecretEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SecretEnv;

        /**
         * Decodes a SecretEnv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecretEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SecretEnv;

        /**
         * Verifies a SecretEnv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecretEnv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecretEnv
         */
        public static fromObject(object: { [k: string]: any }): pb.SecretEnv;

        /**
         * Creates a plain object from a SecretEnv message. Also converts values to other types if specified.
         * @param message SecretEnv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SecretEnv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecretEnv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SecretEnv
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Mount. */
    interface IMount {

        /** Mount input */
        input?: (number|Long|null);

        /** Mount selector */
        selector?: (string|null);

        /** Mount dest */
        dest?: (string|null);

        /** Mount output */
        output?: (number|Long|null);

        /** Mount readonly */
        readonly?: (boolean|null);

        /** Mount mountType */
        mountType?: (pb.MountType|null);

        /** Mount TmpfsOpt */
        TmpfsOpt?: (pb.ITmpfsOpt|null);

        /** Mount cacheOpt */
        cacheOpt?: (pb.ICacheOpt|null);

        /** Mount secretOpt */
        secretOpt?: (pb.ISecretOpt|null);

        /** Mount SSHOpt */
        SSHOpt?: (pb.ISSHOpt|null);

        /** Mount resultID */
        resultID?: (string|null);
    }

    /** Represents a Mount. */
    class Mount implements IMount {

        /**
         * Constructs a new Mount.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMount);

        /** Mount input. */
        public input: (number|Long);

        /** Mount selector. */
        public selector: string;

        /** Mount dest. */
        public dest: string;

        /** Mount output. */
        public output: (number|Long);

        /** Mount readonly. */
        public readonly: boolean;

        /** Mount mountType. */
        public mountType: pb.MountType;

        /** Mount TmpfsOpt. */
        public TmpfsOpt?: (pb.ITmpfsOpt|null);

        /** Mount cacheOpt. */
        public cacheOpt?: (pb.ICacheOpt|null);

        /** Mount secretOpt. */
        public secretOpt?: (pb.ISecretOpt|null);

        /** Mount SSHOpt. */
        public SSHOpt?: (pb.ISSHOpt|null);

        /** Mount resultID. */
        public resultID: string;

        /**
         * Creates a new Mount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mount instance
         */
        public static create(properties?: pb.IMount): pb.Mount;

        /**
         * Encodes the specified Mount message. Does not implicitly {@link pb.Mount.verify|verify} messages.
         * @param message Mount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mount message, length delimited. Does not implicitly {@link pb.Mount.verify|verify} messages.
         * @param message Mount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Mount;

        /**
         * Decodes a Mount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Mount;

        /**
         * Verifies a Mount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mount
         */
        public static fromObject(object: { [k: string]: any }): pb.Mount;

        /**
         * Creates a plain object from a Mount message. Also converts values to other types if specified.
         * @param message Mount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Mount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Mount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** MountType enum. */
    enum MountType {
        BIND = 0,
        SECRET = 1,
        SSH = 2,
        CACHE = 3,
        TMPFS = 4
    }

    /** Properties of a TmpfsOpt. */
    interface ITmpfsOpt {

        /** TmpfsOpt size */
        size?: (number|Long|null);
    }

    /** Represents a TmpfsOpt. */
    class TmpfsOpt implements ITmpfsOpt {

        /**
         * Constructs a new TmpfsOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITmpfsOpt);

        /** TmpfsOpt size. */
        public size: (number|Long);

        /**
         * Creates a new TmpfsOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TmpfsOpt instance
         */
        public static create(properties?: pb.ITmpfsOpt): pb.TmpfsOpt;

        /**
         * Encodes the specified TmpfsOpt message. Does not implicitly {@link pb.TmpfsOpt.verify|verify} messages.
         * @param message TmpfsOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITmpfsOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TmpfsOpt message, length delimited. Does not implicitly {@link pb.TmpfsOpt.verify|verify} messages.
         * @param message TmpfsOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITmpfsOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TmpfsOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TmpfsOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TmpfsOpt;

        /**
         * Decodes a TmpfsOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TmpfsOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TmpfsOpt;

        /**
         * Verifies a TmpfsOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TmpfsOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TmpfsOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.TmpfsOpt;

        /**
         * Creates a plain object from a TmpfsOpt message. Also converts values to other types if specified.
         * @param message TmpfsOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TmpfsOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TmpfsOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TmpfsOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CacheOpt. */
    interface ICacheOpt {

        /** CacheOpt ID */
        ID?: (string|null);

        /** CacheOpt sharing */
        sharing?: (pb.CacheSharingOpt|null);
    }

    /** Represents a CacheOpt. */
    class CacheOpt implements ICacheOpt {

        /**
         * Constructs a new CacheOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICacheOpt);

        /** CacheOpt ID. */
        public ID: string;

        /** CacheOpt sharing. */
        public sharing: pb.CacheSharingOpt;

        /**
         * Creates a new CacheOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CacheOpt instance
         */
        public static create(properties?: pb.ICacheOpt): pb.CacheOpt;

        /**
         * Encodes the specified CacheOpt message. Does not implicitly {@link pb.CacheOpt.verify|verify} messages.
         * @param message CacheOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICacheOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CacheOpt message, length delimited. Does not implicitly {@link pb.CacheOpt.verify|verify} messages.
         * @param message CacheOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ICacheOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CacheOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CacheOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CacheOpt;

        /**
         * Decodes a CacheOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CacheOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.CacheOpt;

        /**
         * Verifies a CacheOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CacheOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CacheOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.CacheOpt;

        /**
         * Creates a plain object from a CacheOpt message. Also converts values to other types if specified.
         * @param message CacheOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.CacheOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CacheOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CacheOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** CacheSharingOpt enum. */
    enum CacheSharingOpt {
        SHARED = 0,
        PRIVATE = 1,
        LOCKED = 2
    }

    /** Properties of a SecretOpt. */
    interface ISecretOpt {

        /** SecretOpt ID */
        ID?: (string|null);

        /** SecretOpt uid */
        uid?: (number|null);

        /** SecretOpt gid */
        gid?: (number|null);

        /** SecretOpt mode */
        mode?: (number|null);

        /** SecretOpt optional */
        optional?: (boolean|null);
    }

    /** Represents a SecretOpt. */
    class SecretOpt implements ISecretOpt {

        /**
         * Constructs a new SecretOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISecretOpt);

        /** SecretOpt ID. */
        public ID: string;

        /** SecretOpt uid. */
        public uid: number;

        /** SecretOpt gid. */
        public gid: number;

        /** SecretOpt mode. */
        public mode: number;

        /** SecretOpt optional. */
        public optional: boolean;

        /**
         * Creates a new SecretOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecretOpt instance
         */
        public static create(properties?: pb.ISecretOpt): pb.SecretOpt;

        /**
         * Encodes the specified SecretOpt message. Does not implicitly {@link pb.SecretOpt.verify|verify} messages.
         * @param message SecretOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISecretOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecretOpt message, length delimited. Does not implicitly {@link pb.SecretOpt.verify|verify} messages.
         * @param message SecretOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISecretOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecretOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecretOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SecretOpt;

        /**
         * Decodes a SecretOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecretOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SecretOpt;

        /**
         * Verifies a SecretOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecretOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecretOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.SecretOpt;

        /**
         * Creates a plain object from a SecretOpt message. Also converts values to other types if specified.
         * @param message SecretOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SecretOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecretOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SecretOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SSHOpt. */
    interface ISSHOpt {

        /** SSHOpt ID */
        ID?: (string|null);

        /** SSHOpt uid */
        uid?: (number|null);

        /** SSHOpt gid */
        gid?: (number|null);

        /** SSHOpt mode */
        mode?: (number|null);

        /** SSHOpt optional */
        optional?: (boolean|null);
    }

    /** Represents a SSHOpt. */
    class SSHOpt implements ISSHOpt {

        /**
         * Constructs a new SSHOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISSHOpt);

        /** SSHOpt ID. */
        public ID: string;

        /** SSHOpt uid. */
        public uid: number;

        /** SSHOpt gid. */
        public gid: number;

        /** SSHOpt mode. */
        public mode: number;

        /** SSHOpt optional. */
        public optional: boolean;

        /**
         * Creates a new SSHOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SSHOpt instance
         */
        public static create(properties?: pb.ISSHOpt): pb.SSHOpt;

        /**
         * Encodes the specified SSHOpt message. Does not implicitly {@link pb.SSHOpt.verify|verify} messages.
         * @param message SSHOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISSHOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SSHOpt message, length delimited. Does not implicitly {@link pb.SSHOpt.verify|verify} messages.
         * @param message SSHOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISSHOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSHOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SSHOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SSHOpt;

        /**
         * Decodes a SSHOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SSHOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SSHOpt;

        /**
         * Verifies a SSHOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SSHOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SSHOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.SSHOpt;

        /**
         * Creates a plain object from a SSHOpt message. Also converts values to other types if specified.
         * @param message SSHOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SSHOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SSHOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SSHOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SourceOp. */
    interface ISourceOp {

        /** SourceOp identifier */
        identifier?: (string|null);

        /** SourceOp attrs */
        attrs?: ({ [k: string]: string }|null);
    }

    /** Represents a SourceOp. */
    class SourceOp implements ISourceOp {

        /**
         * Constructs a new SourceOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISourceOp);

        /** SourceOp identifier. */
        public identifier: string;

        /** SourceOp attrs. */
        public attrs: { [k: string]: string };

        /**
         * Creates a new SourceOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceOp instance
         */
        public static create(properties?: pb.ISourceOp): pb.SourceOp;

        /**
         * Encodes the specified SourceOp message. Does not implicitly {@link pb.SourceOp.verify|verify} messages.
         * @param message SourceOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISourceOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceOp message, length delimited. Does not implicitly {@link pb.SourceOp.verify|verify} messages.
         * @param message SourceOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISourceOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SourceOp;

        /**
         * Decodes a SourceOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SourceOp;

        /**
         * Verifies a SourceOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceOp
         */
        public static fromObject(object: { [k: string]: any }): pb.SourceOp;

        /**
         * Creates a plain object from a SourceOp message. Also converts values to other types if specified.
         * @param message SourceOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SourceOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SourceOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuildOp. */
    interface IBuildOp {

        /** BuildOp builder */
        builder?: (number|Long|null);

        /** BuildOp inputs */
        inputs?: ({ [k: string]: pb.IBuildInput }|null);

        /** BuildOp def */
        def?: (pb.IDefinition|null);

        /** BuildOp attrs */
        attrs?: ({ [k: string]: string }|null);
    }

    /** Represents a BuildOp. */
    class BuildOp implements IBuildOp {

        /**
         * Constructs a new BuildOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuildOp);

        /** BuildOp builder. */
        public builder: (number|Long);

        /** BuildOp inputs. */
        public inputs: { [k: string]: pb.IBuildInput };

        /** BuildOp def. */
        public def?: (pb.IDefinition|null);

        /** BuildOp attrs. */
        public attrs: { [k: string]: string };

        /**
         * Creates a new BuildOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuildOp instance
         */
        public static create(properties?: pb.IBuildOp): pb.BuildOp;

        /**
         * Encodes the specified BuildOp message. Does not implicitly {@link pb.BuildOp.verify|verify} messages.
         * @param message BuildOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuildOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuildOp message, length delimited. Does not implicitly {@link pb.BuildOp.verify|verify} messages.
         * @param message BuildOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IBuildOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuildOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuildOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuildOp;

        /**
         * Decodes a BuildOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuildOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.BuildOp;

        /**
         * Verifies a BuildOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuildOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildOp
         */
        public static fromObject(object: { [k: string]: any }): pb.BuildOp;

        /**
         * Creates a plain object from a BuildOp message. Also converts values to other types if specified.
         * @param message BuildOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.BuildOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuildOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BuildInput. */
    interface IBuildInput {

        /** BuildInput input */
        input?: (number|Long|null);
    }

    /** Represents a BuildInput. */
    class BuildInput implements IBuildInput {

        /**
         * Constructs a new BuildInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuildInput);

        /** BuildInput input. */
        public input: (number|Long);

        /**
         * Creates a new BuildInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuildInput instance
         */
        public static create(properties?: pb.IBuildInput): pb.BuildInput;

        /**
         * Encodes the specified BuildInput message. Does not implicitly {@link pb.BuildInput.verify|verify} messages.
         * @param message BuildInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuildInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuildInput message, length delimited. Does not implicitly {@link pb.BuildInput.verify|verify} messages.
         * @param message BuildInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IBuildInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuildInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuildInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuildInput;

        /**
         * Decodes a BuildInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuildInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.BuildInput;

        /**
         * Verifies a BuildInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuildInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildInput
         */
        public static fromObject(object: { [k: string]: any }): pb.BuildInput;

        /**
         * Creates a plain object from a BuildInput message. Also converts values to other types if specified.
         * @param message BuildInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.BuildInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BuildInput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OpMetadata. */
    interface IOpMetadata {

        /** OpMetadata ignoreCache */
        ignoreCache?: (boolean|null);

        /** OpMetadata description */
        description?: ({ [k: string]: string }|null);

        /** OpMetadata exportCache */
        exportCache?: (pb.IExportCache|null);

        /** OpMetadata caps */
        caps?: ({ [k: string]: boolean }|null);

        /** OpMetadata progressGroup */
        progressGroup?: (pb.IProgressGroup|null);
    }

    /** Represents an OpMetadata. */
    class OpMetadata implements IOpMetadata {

        /**
         * Constructs a new OpMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IOpMetadata);

        /** OpMetadata ignoreCache. */
        public ignoreCache: boolean;

        /** OpMetadata description. */
        public description: { [k: string]: string };

        /** OpMetadata exportCache. */
        public exportCache?: (pb.IExportCache|null);

        /** OpMetadata caps. */
        public caps: { [k: string]: boolean };

        /** OpMetadata progressGroup. */
        public progressGroup?: (pb.IProgressGroup|null);

        /**
         * Creates a new OpMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpMetadata instance
         */
        public static create(properties?: pb.IOpMetadata): pb.OpMetadata;

        /**
         * Encodes the specified OpMetadata message. Does not implicitly {@link pb.OpMetadata.verify|verify} messages.
         * @param message OpMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IOpMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpMetadata message, length delimited. Does not implicitly {@link pb.OpMetadata.verify|verify} messages.
         * @param message OpMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IOpMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.OpMetadata;

        /**
         * Decodes an OpMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.OpMetadata;

        /**
         * Verifies an OpMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpMetadata
         */
        public static fromObject(object: { [k: string]: any }): pb.OpMetadata;

        /**
         * Creates a plain object from an OpMetadata message. Also converts values to other types if specified.
         * @param message OpMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.OpMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OpMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Source. */
    interface ISource {

        /** Source locations */
        locations?: ({ [k: string]: pb.ILocations }|null);

        /** Source infos */
        infos?: (pb.ISourceInfo[]|null);
    }

    /** Represents a Source. */
    class Source implements ISource {

        /**
         * Constructs a new Source.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISource);

        /** Source locations. */
        public locations: { [k: string]: pb.ILocations };

        /** Source infos. */
        public infos: pb.ISourceInfo[];

        /**
         * Creates a new Source instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Source instance
         */
        public static create(properties?: pb.ISource): pb.Source;

        /**
         * Encodes the specified Source message. Does not implicitly {@link pb.Source.verify|verify} messages.
         * @param message Source message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link pb.Source.verify|verify} messages.
         * @param message Source message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Source message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Source;

        /**
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Source;

        /**
         * Verifies a Source message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Source
         */
        public static fromObject(object: { [k: string]: any }): pb.Source;

        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @param message Source
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Source to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Source
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Locations. */
    interface ILocations {

        /** Locations locations */
        locations?: (pb.ILocation[]|null);
    }

    /** Represents a Locations. */
    class Locations implements ILocations {

        /**
         * Constructs a new Locations.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILocations);

        /** Locations locations. */
        public locations: pb.ILocation[];

        /**
         * Creates a new Locations instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Locations instance
         */
        public static create(properties?: pb.ILocations): pb.Locations;

        /**
         * Encodes the specified Locations message. Does not implicitly {@link pb.Locations.verify|verify} messages.
         * @param message Locations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILocations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Locations message, length delimited. Does not implicitly {@link pb.Locations.verify|verify} messages.
         * @param message Locations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILocations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Locations message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Locations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Locations;

        /**
         * Decodes a Locations message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Locations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Locations;

        /**
         * Verifies a Locations message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Locations message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Locations
         */
        public static fromObject(object: { [k: string]: any }): pb.Locations;

        /**
         * Creates a plain object from a Locations message. Also converts values to other types if specified.
         * @param message Locations
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Locations, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Locations to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Locations
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SourceInfo. */
    interface ISourceInfo {

        /** SourceInfo filename */
        filename?: (string|null);

        /** SourceInfo data */
        data?: (Uint8Array|null);

        /** SourceInfo definition */
        definition?: (pb.IDefinition|null);
    }

    /** Represents a SourceInfo. */
    class SourceInfo implements ISourceInfo {

        /**
         * Constructs a new SourceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISourceInfo);

        /** SourceInfo filename. */
        public filename: string;

        /** SourceInfo data. */
        public data: Uint8Array;

        /** SourceInfo definition. */
        public definition?: (pb.IDefinition|null);

        /**
         * Creates a new SourceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SourceInfo instance
         */
        public static create(properties?: pb.ISourceInfo): pb.SourceInfo;

        /**
         * Encodes the specified SourceInfo message. Does not implicitly {@link pb.SourceInfo.verify|verify} messages.
         * @param message SourceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SourceInfo message, length delimited. Does not implicitly {@link pb.SourceInfo.verify|verify} messages.
         * @param message SourceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SourceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SourceInfo;

        /**
         * Decodes a SourceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SourceInfo;

        /**
         * Verifies a SourceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SourceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SourceInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.SourceInfo;

        /**
         * Creates a plain object from a SourceInfo message. Also converts values to other types if specified.
         * @param message SourceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SourceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SourceInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location sourceIndex */
        sourceIndex?: (number|null);

        /** Location ranges */
        ranges?: (pb.IRange[]|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILocation);

        /** Location sourceIndex. */
        public sourceIndex: number;

        /** Location ranges. */
        public ranges: pb.IRange[];

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: pb.ILocation): pb.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): pb.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Location
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Range. */
    interface IRange {

        /** Range start */
        start?: (pb.IPosition|null);

        /** Range end */
        end?: (pb.IPosition|null);
    }

    /** Represents a Range. */
    class Range implements IRange {

        /**
         * Constructs a new Range.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRange);

        /** Range start. */
        public start?: (pb.IPosition|null);

        /** Range end. */
        public end?: (pb.IPosition|null);

        /**
         * Creates a new Range instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Range instance
         */
        public static create(properties?: pb.IRange): pb.Range;

        /**
         * Encodes the specified Range message. Does not implicitly {@link pb.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link pb.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Range;

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Range;

        /**
         * Verifies a Range message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Range
         */
        public static fromObject(object: { [k: string]: any }): pb.Range;

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @param message Range
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Range to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Range
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position line */
        line?: (number|null);

        /** Position character */
        character?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPosition);

        /** Position line. */
        public line: number;

        /** Position character. */
        public character: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: pb.IPosition): pb.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): pb.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExportCache. */
    interface IExportCache {

        /** ExportCache Value */
        Value?: (boolean|null);
    }

    /** Represents an ExportCache. */
    class ExportCache implements IExportCache {

        /**
         * Constructs a new ExportCache.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IExportCache);

        /** ExportCache Value. */
        public Value: boolean;

        /**
         * Creates a new ExportCache instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExportCache instance
         */
        public static create(properties?: pb.IExportCache): pb.ExportCache;

        /**
         * Encodes the specified ExportCache message. Does not implicitly {@link pb.ExportCache.verify|verify} messages.
         * @param message ExportCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IExportCache, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExportCache message, length delimited. Does not implicitly {@link pb.ExportCache.verify|verify} messages.
         * @param message ExportCache message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IExportCache, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExportCache message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExportCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ExportCache;

        /**
         * Decodes an ExportCache message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExportCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ExportCache;

        /**
         * Verifies an ExportCache message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExportCache message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExportCache
         */
        public static fromObject(object: { [k: string]: any }): pb.ExportCache;

        /**
         * Creates a plain object from an ExportCache message. Also converts values to other types if specified.
         * @param message ExportCache
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ExportCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExportCache to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExportCache
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProgressGroup. */
    interface IProgressGroup {

        /** ProgressGroup id */
        id?: (string|null);

        /** ProgressGroup name */
        name?: (string|null);

        /** ProgressGroup weak */
        weak?: (boolean|null);
    }

    /** Represents a ProgressGroup. */
    class ProgressGroup implements IProgressGroup {

        /**
         * Constructs a new ProgressGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IProgressGroup);

        /** ProgressGroup id. */
        public id: string;

        /** ProgressGroup name. */
        public name: string;

        /** ProgressGroup weak. */
        public weak: boolean;

        /**
         * Creates a new ProgressGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProgressGroup instance
         */
        public static create(properties?: pb.IProgressGroup): pb.ProgressGroup;

        /**
         * Encodes the specified ProgressGroup message. Does not implicitly {@link pb.ProgressGroup.verify|verify} messages.
         * @param message ProgressGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IProgressGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProgressGroup message, length delimited. Does not implicitly {@link pb.ProgressGroup.verify|verify} messages.
         * @param message ProgressGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IProgressGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProgressGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProgressGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ProgressGroup;

        /**
         * Decodes a ProgressGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProgressGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ProgressGroup;

        /**
         * Verifies a ProgressGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProgressGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProgressGroup
         */
        public static fromObject(object: { [k: string]: any }): pb.ProgressGroup;

        /**
         * Creates a plain object from a ProgressGroup message. Also converts values to other types if specified.
         * @param message ProgressGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ProgressGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProgressGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProgressGroup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProxyEnv. */
    interface IProxyEnv {

        /** ProxyEnv httpProxy */
        httpProxy?: (string|null);

        /** ProxyEnv httpsProxy */
        httpsProxy?: (string|null);

        /** ProxyEnv ftpProxy */
        ftpProxy?: (string|null);

        /** ProxyEnv noProxy */
        noProxy?: (string|null);

        /** ProxyEnv allProxy */
        allProxy?: (string|null);
    }

    /** Represents a ProxyEnv. */
    class ProxyEnv implements IProxyEnv {

        /**
         * Constructs a new ProxyEnv.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IProxyEnv);

        /** ProxyEnv httpProxy. */
        public httpProxy: string;

        /** ProxyEnv httpsProxy. */
        public httpsProxy: string;

        /** ProxyEnv ftpProxy. */
        public ftpProxy: string;

        /** ProxyEnv noProxy. */
        public noProxy: string;

        /** ProxyEnv allProxy. */
        public allProxy: string;

        /**
         * Creates a new ProxyEnv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProxyEnv instance
         */
        public static create(properties?: pb.IProxyEnv): pb.ProxyEnv;

        /**
         * Encodes the specified ProxyEnv message. Does not implicitly {@link pb.ProxyEnv.verify|verify} messages.
         * @param message ProxyEnv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IProxyEnv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProxyEnv message, length delimited. Does not implicitly {@link pb.ProxyEnv.verify|verify} messages.
         * @param message ProxyEnv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IProxyEnv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProxyEnv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProxyEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ProxyEnv;

        /**
         * Decodes a ProxyEnv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProxyEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ProxyEnv;

        /**
         * Verifies a ProxyEnv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProxyEnv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProxyEnv
         */
        public static fromObject(object: { [k: string]: any }): pb.ProxyEnv;

        /**
         * Creates a plain object from a ProxyEnv message. Also converts values to other types if specified.
         * @param message ProxyEnv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ProxyEnv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProxyEnv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProxyEnv
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WorkerConstraints. */
    interface IWorkerConstraints {

        /** WorkerConstraints filter */
        filter?: (string[]|null);
    }

    /** Represents a WorkerConstraints. */
    class WorkerConstraints implements IWorkerConstraints {

        /**
         * Constructs a new WorkerConstraints.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IWorkerConstraints);

        /** WorkerConstraints filter. */
        public filter: string[];

        /**
         * Creates a new WorkerConstraints instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkerConstraints instance
         */
        public static create(properties?: pb.IWorkerConstraints): pb.WorkerConstraints;

        /**
         * Encodes the specified WorkerConstraints message. Does not implicitly {@link pb.WorkerConstraints.verify|verify} messages.
         * @param message WorkerConstraints message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IWorkerConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkerConstraints message, length delimited. Does not implicitly {@link pb.WorkerConstraints.verify|verify} messages.
         * @param message WorkerConstraints message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IWorkerConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkerConstraints message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorkerConstraints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.WorkerConstraints;

        /**
         * Decodes a WorkerConstraints message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorkerConstraints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.WorkerConstraints;

        /**
         * Verifies a WorkerConstraints message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkerConstraints message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorkerConstraints
         */
        public static fromObject(object: { [k: string]: any }): pb.WorkerConstraints;

        /**
         * Creates a plain object from a WorkerConstraints message. Also converts values to other types if specified.
         * @param message WorkerConstraints
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.WorkerConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkerConstraints to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WorkerConstraints
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Definition. */
    interface IDefinition {

        /** Definition def */
        def?: (Uint8Array[]|null);

        /** Definition metadata */
        metadata?: ({ [k: string]: pb.IOpMetadata }|null);

        /** Definition Source */
        Source?: (pb.ISource|null);
    }

    /** Represents a Definition. */
    class Definition implements IDefinition {

        /**
         * Constructs a new Definition.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDefinition);

        /** Definition def. */
        public def: Uint8Array[];

        /** Definition metadata. */
        public metadata: { [k: string]: pb.IOpMetadata };

        /** Definition Source. */
        public Source?: (pb.ISource|null);

        /**
         * Creates a new Definition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Definition instance
         */
        public static create(properties?: pb.IDefinition): pb.Definition;

        /**
         * Encodes the specified Definition message. Does not implicitly {@link pb.Definition.verify|verify} messages.
         * @param message Definition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Definition message, length delimited. Does not implicitly {@link pb.Definition.verify|verify} messages.
         * @param message Definition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Definition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Definition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Definition;

        /**
         * Decodes a Definition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Definition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Definition;

        /**
         * Verifies a Definition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Definition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Definition
         */
        public static fromObject(object: { [k: string]: any }): pb.Definition;

        /**
         * Creates a plain object from a Definition message. Also converts values to other types if specified.
         * @param message Definition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Definition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Definition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Definition
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileOp. */
    interface IFileOp {

        /** FileOp actions */
        actions?: (pb.IFileAction[]|null);
    }

    /** Represents a FileOp. */
    class FileOp implements IFileOp {

        /**
         * Constructs a new FileOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileOp);

        /** FileOp actions. */
        public actions: pb.IFileAction[];

        /**
         * Creates a new FileOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileOp instance
         */
        public static create(properties?: pb.IFileOp): pb.FileOp;

        /**
         * Encodes the specified FileOp message. Does not implicitly {@link pb.FileOp.verify|verify} messages.
         * @param message FileOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileOp message, length delimited. Does not implicitly {@link pb.FileOp.verify|verify} messages.
         * @param message FileOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileOp;

        /**
         * Decodes a FileOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileOp;

        /**
         * Verifies a FileOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileOp
         */
        public static fromObject(object: { [k: string]: any }): pb.FileOp;

        /**
         * Creates a plain object from a FileOp message. Also converts values to other types if specified.
         * @param message FileOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileAction. */
    interface IFileAction {

        /** FileAction input */
        input?: (number|Long|null);

        /** FileAction secondaryInput */
        secondaryInput?: (number|Long|null);

        /** FileAction output */
        output?: (number|Long|null);

        /** FileAction copy */
        copy?: (pb.IFileActionCopy|null);

        /** FileAction mkfile */
        mkfile?: (pb.IFileActionMkFile|null);

        /** FileAction mkdir */
        mkdir?: (pb.IFileActionMkDir|null);

        /** FileAction rm */
        rm?: (pb.IFileActionRm|null);
    }

    /** Represents a FileAction. */
    class FileAction implements IFileAction {

        /**
         * Constructs a new FileAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileAction);

        /** FileAction input. */
        public input: (number|Long);

        /** FileAction secondaryInput. */
        public secondaryInput: (number|Long);

        /** FileAction output. */
        public output: (number|Long);

        /** FileAction copy. */
        public copy?: (pb.IFileActionCopy|null);

        /** FileAction mkfile. */
        public mkfile?: (pb.IFileActionMkFile|null);

        /** FileAction mkdir. */
        public mkdir?: (pb.IFileActionMkDir|null);

        /** FileAction rm. */
        public rm?: (pb.IFileActionRm|null);

        /** FileAction action. */
        public action?: ("copy"|"mkfile"|"mkdir"|"rm");

        /**
         * Creates a new FileAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAction instance
         */
        public static create(properties?: pb.IFileAction): pb.FileAction;

        /**
         * Encodes the specified FileAction message. Does not implicitly {@link pb.FileAction.verify|verify} messages.
         * @param message FileAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAction message, length delimited. Does not implicitly {@link pb.FileAction.verify|verify} messages.
         * @param message FileAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileAction;

        /**
         * Decodes a FileAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileAction;

        /**
         * Verifies a FileAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAction
         */
        public static fromObject(object: { [k: string]: any }): pb.FileAction;

        /**
         * Creates a plain object from a FileAction message. Also converts values to other types if specified.
         * @param message FileAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileActionCopy. */
    interface IFileActionCopy {

        /** FileActionCopy src */
        src?: (string|null);

        /** FileActionCopy dest */
        dest?: (string|null);

        /** FileActionCopy owner */
        owner?: (pb.IChownOpt|null);

        /** FileActionCopy mode */
        mode?: (number|null);

        /** FileActionCopy followSymlink */
        followSymlink?: (boolean|null);

        /** FileActionCopy dirCopyContents */
        dirCopyContents?: (boolean|null);

        /** FileActionCopy attemptUnpackDockerCompatibility */
        attemptUnpackDockerCompatibility?: (boolean|null);

        /** FileActionCopy createDestPath */
        createDestPath?: (boolean|null);

        /** FileActionCopy allowWildcard */
        allowWildcard?: (boolean|null);

        /** FileActionCopy allowEmptyWildcard */
        allowEmptyWildcard?: (boolean|null);

        /** FileActionCopy timestamp */
        timestamp?: (number|Long|null);

        /** FileActionCopy includePatterns */
        includePatterns?: (string[]|null);

        /** FileActionCopy excludePatterns */
        excludePatterns?: (string[]|null);
    }

    /** Represents a FileActionCopy. */
    class FileActionCopy implements IFileActionCopy {

        /**
         * Constructs a new FileActionCopy.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileActionCopy);

        /** FileActionCopy src. */
        public src: string;

        /** FileActionCopy dest. */
        public dest: string;

        /** FileActionCopy owner. */
        public owner?: (pb.IChownOpt|null);

        /** FileActionCopy mode. */
        public mode: number;

        /** FileActionCopy followSymlink. */
        public followSymlink: boolean;

        /** FileActionCopy dirCopyContents. */
        public dirCopyContents: boolean;

        /** FileActionCopy attemptUnpackDockerCompatibility. */
        public attemptUnpackDockerCompatibility: boolean;

        /** FileActionCopy createDestPath. */
        public createDestPath: boolean;

        /** FileActionCopy allowWildcard. */
        public allowWildcard: boolean;

        /** FileActionCopy allowEmptyWildcard. */
        public allowEmptyWildcard: boolean;

        /** FileActionCopy timestamp. */
        public timestamp: (number|Long);

        /** FileActionCopy includePatterns. */
        public includePatterns: string[];

        /** FileActionCopy excludePatterns. */
        public excludePatterns: string[];

        /**
         * Creates a new FileActionCopy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileActionCopy instance
         */
        public static create(properties?: pb.IFileActionCopy): pb.FileActionCopy;

        /**
         * Encodes the specified FileActionCopy message. Does not implicitly {@link pb.FileActionCopy.verify|verify} messages.
         * @param message FileActionCopy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileActionCopy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileActionCopy message, length delimited. Does not implicitly {@link pb.FileActionCopy.verify|verify} messages.
         * @param message FileActionCopy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileActionCopy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileActionCopy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileActionCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileActionCopy;

        /**
         * Decodes a FileActionCopy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileActionCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileActionCopy;

        /**
         * Verifies a FileActionCopy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileActionCopy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileActionCopy
         */
        public static fromObject(object: { [k: string]: any }): pb.FileActionCopy;

        /**
         * Creates a plain object from a FileActionCopy message. Also converts values to other types if specified.
         * @param message FileActionCopy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileActionCopy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileActionCopy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileActionCopy
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileActionMkFile. */
    interface IFileActionMkFile {

        /** FileActionMkFile path */
        path?: (string|null);

        /** FileActionMkFile mode */
        mode?: (number|null);

        /** FileActionMkFile data */
        data?: (Uint8Array|null);

        /** FileActionMkFile owner */
        owner?: (pb.IChownOpt|null);

        /** FileActionMkFile timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a FileActionMkFile. */
    class FileActionMkFile implements IFileActionMkFile {

        /**
         * Constructs a new FileActionMkFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileActionMkFile);

        /** FileActionMkFile path. */
        public path: string;

        /** FileActionMkFile mode. */
        public mode: number;

        /** FileActionMkFile data. */
        public data: Uint8Array;

        /** FileActionMkFile owner. */
        public owner?: (pb.IChownOpt|null);

        /** FileActionMkFile timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new FileActionMkFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileActionMkFile instance
         */
        public static create(properties?: pb.IFileActionMkFile): pb.FileActionMkFile;

        /**
         * Encodes the specified FileActionMkFile message. Does not implicitly {@link pb.FileActionMkFile.verify|verify} messages.
         * @param message FileActionMkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileActionMkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileActionMkFile message, length delimited. Does not implicitly {@link pb.FileActionMkFile.verify|verify} messages.
         * @param message FileActionMkFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileActionMkFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileActionMkFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileActionMkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileActionMkFile;

        /**
         * Decodes a FileActionMkFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileActionMkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileActionMkFile;

        /**
         * Verifies a FileActionMkFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileActionMkFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileActionMkFile
         */
        public static fromObject(object: { [k: string]: any }): pb.FileActionMkFile;

        /**
         * Creates a plain object from a FileActionMkFile message. Also converts values to other types if specified.
         * @param message FileActionMkFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileActionMkFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileActionMkFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileActionMkFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileActionMkDir. */
    interface IFileActionMkDir {

        /** FileActionMkDir path */
        path?: (string|null);

        /** FileActionMkDir mode */
        mode?: (number|null);

        /** FileActionMkDir makeParents */
        makeParents?: (boolean|null);

        /** FileActionMkDir owner */
        owner?: (pb.IChownOpt|null);

        /** FileActionMkDir timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a FileActionMkDir. */
    class FileActionMkDir implements IFileActionMkDir {

        /**
         * Constructs a new FileActionMkDir.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileActionMkDir);

        /** FileActionMkDir path. */
        public path: string;

        /** FileActionMkDir mode. */
        public mode: number;

        /** FileActionMkDir makeParents. */
        public makeParents: boolean;

        /** FileActionMkDir owner. */
        public owner?: (pb.IChownOpt|null);

        /** FileActionMkDir timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new FileActionMkDir instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileActionMkDir instance
         */
        public static create(properties?: pb.IFileActionMkDir): pb.FileActionMkDir;

        /**
         * Encodes the specified FileActionMkDir message. Does not implicitly {@link pb.FileActionMkDir.verify|verify} messages.
         * @param message FileActionMkDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileActionMkDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileActionMkDir message, length delimited. Does not implicitly {@link pb.FileActionMkDir.verify|verify} messages.
         * @param message FileActionMkDir message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileActionMkDir, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileActionMkDir message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileActionMkDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileActionMkDir;

        /**
         * Decodes a FileActionMkDir message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileActionMkDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileActionMkDir;

        /**
         * Verifies a FileActionMkDir message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileActionMkDir message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileActionMkDir
         */
        public static fromObject(object: { [k: string]: any }): pb.FileActionMkDir;

        /**
         * Creates a plain object from a FileActionMkDir message. Also converts values to other types if specified.
         * @param message FileActionMkDir
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileActionMkDir, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileActionMkDir to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileActionMkDir
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileActionRm. */
    interface IFileActionRm {

        /** FileActionRm path */
        path?: (string|null);

        /** FileActionRm allowNotFound */
        allowNotFound?: (boolean|null);

        /** FileActionRm allowWildcard */
        allowWildcard?: (boolean|null);
    }

    /** Represents a FileActionRm. */
    class FileActionRm implements IFileActionRm {

        /**
         * Constructs a new FileActionRm.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFileActionRm);

        /** FileActionRm path. */
        public path: string;

        /** FileActionRm allowNotFound. */
        public allowNotFound: boolean;

        /** FileActionRm allowWildcard. */
        public allowWildcard: boolean;

        /**
         * Creates a new FileActionRm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileActionRm instance
         */
        public static create(properties?: pb.IFileActionRm): pb.FileActionRm;

        /**
         * Encodes the specified FileActionRm message. Does not implicitly {@link pb.FileActionRm.verify|verify} messages.
         * @param message FileActionRm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFileActionRm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileActionRm message, length delimited. Does not implicitly {@link pb.FileActionRm.verify|verify} messages.
         * @param message FileActionRm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFileActionRm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileActionRm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileActionRm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FileActionRm;

        /**
         * Decodes a FileActionRm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileActionRm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FileActionRm;

        /**
         * Verifies a FileActionRm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileActionRm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileActionRm
         */
        public static fromObject(object: { [k: string]: any }): pb.FileActionRm;

        /**
         * Creates a plain object from a FileActionRm message. Also converts values to other types if specified.
         * @param message FileActionRm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FileActionRm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileActionRm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileActionRm
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChownOpt. */
    interface IChownOpt {

        /** ChownOpt user */
        user?: (pb.IUserOpt|null);

        /** ChownOpt group */
        group?: (pb.IUserOpt|null);
    }

    /** Represents a ChownOpt. */
    class ChownOpt implements IChownOpt {

        /**
         * Constructs a new ChownOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChownOpt);

        /** ChownOpt user. */
        public user?: (pb.IUserOpt|null);

        /** ChownOpt group. */
        public group?: (pb.IUserOpt|null);

        /**
         * Creates a new ChownOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChownOpt instance
         */
        public static create(properties?: pb.IChownOpt): pb.ChownOpt;

        /**
         * Encodes the specified ChownOpt message. Does not implicitly {@link pb.ChownOpt.verify|verify} messages.
         * @param message ChownOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChownOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChownOpt message, length delimited. Does not implicitly {@link pb.ChownOpt.verify|verify} messages.
         * @param message ChownOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChownOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChownOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChownOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChownOpt;

        /**
         * Decodes a ChownOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChownOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChownOpt;

        /**
         * Verifies a ChownOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChownOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChownOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.ChownOpt;

        /**
         * Creates a plain object from a ChownOpt message. Also converts values to other types if specified.
         * @param message ChownOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChownOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChownOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChownOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserOpt. */
    interface IUserOpt {

        /** UserOpt byName */
        byName?: (pb.INamedUserOpt|null);

        /** UserOpt byID */
        byID?: (number|null);
    }

    /** Represents a UserOpt. */
    class UserOpt implements IUserOpt {

        /**
         * Constructs a new UserOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserOpt);

        /** UserOpt byName. */
        public byName?: (pb.INamedUserOpt|null);

        /** UserOpt byID. */
        public byID?: (number|null);

        /** UserOpt user. */
        public user?: ("byName"|"byID");

        /**
         * Creates a new UserOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserOpt instance
         */
        public static create(properties?: pb.IUserOpt): pb.UserOpt;

        /**
         * Encodes the specified UserOpt message. Does not implicitly {@link pb.UserOpt.verify|verify} messages.
         * @param message UserOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserOpt message, length delimited. Does not implicitly {@link pb.UserOpt.verify|verify} messages.
         * @param message UserOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUserOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserOpt;

        /**
         * Decodes a UserOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UserOpt;

        /**
         * Verifies a UserOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.UserOpt;

        /**
         * Creates a plain object from a UserOpt message. Also converts values to other types if specified.
         * @param message UserOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UserOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NamedUserOpt. */
    interface INamedUserOpt {

        /** NamedUserOpt name */
        name?: (string|null);

        /** NamedUserOpt input */
        input?: (number|Long|null);
    }

    /** Represents a NamedUserOpt. */
    class NamedUserOpt implements INamedUserOpt {

        /**
         * Constructs a new NamedUserOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INamedUserOpt);

        /** NamedUserOpt name. */
        public name: string;

        /** NamedUserOpt input. */
        public input: (number|Long);

        /**
         * Creates a new NamedUserOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NamedUserOpt instance
         */
        public static create(properties?: pb.INamedUserOpt): pb.NamedUserOpt;

        /**
         * Encodes the specified NamedUserOpt message. Does not implicitly {@link pb.NamedUserOpt.verify|verify} messages.
         * @param message NamedUserOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INamedUserOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NamedUserOpt message, length delimited. Does not implicitly {@link pb.NamedUserOpt.verify|verify} messages.
         * @param message NamedUserOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.INamedUserOpt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NamedUserOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NamedUserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.NamedUserOpt;

        /**
         * Decodes a NamedUserOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NamedUserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.NamedUserOpt;

        /**
         * Verifies a NamedUserOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NamedUserOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NamedUserOpt
         */
        public static fromObject(object: { [k: string]: any }): pb.NamedUserOpt;

        /**
         * Creates a plain object from a NamedUserOpt message. Also converts values to other types if specified.
         * @param message NamedUserOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.NamedUserOpt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NamedUserOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NamedUserOpt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MergeInput. */
    interface IMergeInput {

        /** MergeInput input */
        input?: (number|Long|null);
    }

    /** Represents a MergeInput. */
    class MergeInput implements IMergeInput {

        /**
         * Constructs a new MergeInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMergeInput);

        /** MergeInput input. */
        public input: (number|Long);

        /**
         * Creates a new MergeInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MergeInput instance
         */
        public static create(properties?: pb.IMergeInput): pb.MergeInput;

        /**
         * Encodes the specified MergeInput message. Does not implicitly {@link pb.MergeInput.verify|verify} messages.
         * @param message MergeInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMergeInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MergeInput message, length delimited. Does not implicitly {@link pb.MergeInput.verify|verify} messages.
         * @param message MergeInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMergeInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MergeInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MergeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MergeInput;

        /**
         * Decodes a MergeInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MergeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MergeInput;

        /**
         * Verifies a MergeInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MergeInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MergeInput
         */
        public static fromObject(object: { [k: string]: any }): pb.MergeInput;

        /**
         * Creates a plain object from a MergeInput message. Also converts values to other types if specified.
         * @param message MergeInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MergeInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MergeInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MergeInput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MergeOp. */
    interface IMergeOp {

        /** MergeOp inputs */
        inputs?: (pb.IMergeInput[]|null);
    }

    /** Represents a MergeOp. */
    class MergeOp implements IMergeOp {

        /**
         * Constructs a new MergeOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMergeOp);

        /** MergeOp inputs. */
        public inputs: pb.IMergeInput[];

        /**
         * Creates a new MergeOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MergeOp instance
         */
        public static create(properties?: pb.IMergeOp): pb.MergeOp;

        /**
         * Encodes the specified MergeOp message. Does not implicitly {@link pb.MergeOp.verify|verify} messages.
         * @param message MergeOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMergeOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MergeOp message, length delimited. Does not implicitly {@link pb.MergeOp.verify|verify} messages.
         * @param message MergeOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMergeOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MergeOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MergeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MergeOp;

        /**
         * Decodes a MergeOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MergeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MergeOp;

        /**
         * Verifies a MergeOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MergeOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MergeOp
         */
        public static fromObject(object: { [k: string]: any }): pb.MergeOp;

        /**
         * Creates a plain object from a MergeOp message. Also converts values to other types if specified.
         * @param message MergeOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MergeOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MergeOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MergeOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LowerDiffInput. */
    interface ILowerDiffInput {

        /** LowerDiffInput input */
        input?: (number|Long|null);
    }

    /** Represents a LowerDiffInput. */
    class LowerDiffInput implements ILowerDiffInput {

        /**
         * Constructs a new LowerDiffInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILowerDiffInput);

        /** LowerDiffInput input. */
        public input: (number|Long);

        /**
         * Creates a new LowerDiffInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LowerDiffInput instance
         */
        public static create(properties?: pb.ILowerDiffInput): pb.LowerDiffInput;

        /**
         * Encodes the specified LowerDiffInput message. Does not implicitly {@link pb.LowerDiffInput.verify|verify} messages.
         * @param message LowerDiffInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILowerDiffInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LowerDiffInput message, length delimited. Does not implicitly {@link pb.LowerDiffInput.verify|verify} messages.
         * @param message LowerDiffInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILowerDiffInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LowerDiffInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LowerDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LowerDiffInput;

        /**
         * Decodes a LowerDiffInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LowerDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LowerDiffInput;

        /**
         * Verifies a LowerDiffInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LowerDiffInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LowerDiffInput
         */
        public static fromObject(object: { [k: string]: any }): pb.LowerDiffInput;

        /**
         * Creates a plain object from a LowerDiffInput message. Also converts values to other types if specified.
         * @param message LowerDiffInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LowerDiffInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LowerDiffInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LowerDiffInput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpperDiffInput. */
    interface IUpperDiffInput {

        /** UpperDiffInput input */
        input?: (number|Long|null);
    }

    /** Represents an UpperDiffInput. */
    class UpperDiffInput implements IUpperDiffInput {

        /**
         * Constructs a new UpperDiffInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpperDiffInput);

        /** UpperDiffInput input. */
        public input: (number|Long);

        /**
         * Creates a new UpperDiffInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpperDiffInput instance
         */
        public static create(properties?: pb.IUpperDiffInput): pb.UpperDiffInput;

        /**
         * Encodes the specified UpperDiffInput message. Does not implicitly {@link pb.UpperDiffInput.verify|verify} messages.
         * @param message UpperDiffInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpperDiffInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpperDiffInput message, length delimited. Does not implicitly {@link pb.UpperDiffInput.verify|verify} messages.
         * @param message UpperDiffInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpperDiffInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpperDiffInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpperDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpperDiffInput;

        /**
         * Decodes an UpperDiffInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpperDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpperDiffInput;

        /**
         * Verifies an UpperDiffInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpperDiffInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpperDiffInput
         */
        public static fromObject(object: { [k: string]: any }): pb.UpperDiffInput;

        /**
         * Creates a plain object from an UpperDiffInput message. Also converts values to other types if specified.
         * @param message UpperDiffInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpperDiffInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpperDiffInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpperDiffInput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiffOp. */
    interface IDiffOp {

        /** DiffOp lower */
        lower?: (pb.ILowerDiffInput|null);

        /** DiffOp upper */
        upper?: (pb.IUpperDiffInput|null);
    }

    /** Represents a DiffOp. */
    class DiffOp implements IDiffOp {

        /**
         * Constructs a new DiffOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiffOp);

        /** DiffOp lower. */
        public lower?: (pb.ILowerDiffInput|null);

        /** DiffOp upper. */
        public upper?: (pb.IUpperDiffInput|null);

        /**
         * Creates a new DiffOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiffOp instance
         */
        public static create(properties?: pb.IDiffOp): pb.DiffOp;

        /**
         * Encodes the specified DiffOp message. Does not implicitly {@link pb.DiffOp.verify|verify} messages.
         * @param message DiffOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiffOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiffOp message, length delimited. Does not implicitly {@link pb.DiffOp.verify|verify} messages.
         * @param message DiffOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDiffOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiffOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiffOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiffOp;

        /**
         * Decodes a DiffOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiffOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DiffOp;

        /**
         * Verifies a DiffOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiffOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiffOp
         */
        public static fromObject(object: { [k: string]: any }): pb.DiffOp;

        /**
         * Creates a plain object from a DiffOp message. Also converts values to other types if specified.
         * @param message DiffOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DiffOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiffOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiffOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
