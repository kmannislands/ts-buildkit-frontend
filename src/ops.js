/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const pb = $root.pb = (() => {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    const pb = {};

    pb.Op = (function() {

        /**
         * Properties of an Op.
         * @memberof pb
         * @interface IOp
         * @property {Array.<pb.IInput>|null} [inputs] Op inputs
         * @property {pb.IExecOp|null} [exec] Op exec
         * @property {pb.ISourceOp|null} [source] Op source
         * @property {pb.IFileOp|null} [file] Op file
         * @property {pb.IBuildOp|null} [build] Op build
         * @property {pb.IMergeOp|null} [merge] Op merge
         * @property {pb.IDiffOp|null} [diff] Op diff
         * @property {pb.IPlatform|null} [platform] Op platform
         * @property {pb.IWorkerConstraints|null} [constraints] Op constraints
         */

        /**
         * Constructs a new Op.
         * @memberof pb
         * @classdesc Represents an Op.
         * @implements IOp
         * @constructor
         * @param {pb.IOp=} [properties] Properties to set
         */
        function Op(properties) {
            this.inputs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Op inputs.
         * @member {Array.<pb.IInput>} inputs
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.inputs = $util.emptyArray;

        /**
         * Op exec.
         * @member {pb.IExecOp|null|undefined} exec
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.exec = null;

        /**
         * Op source.
         * @member {pb.ISourceOp|null|undefined} source
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.source = null;

        /**
         * Op file.
         * @member {pb.IFileOp|null|undefined} file
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.file = null;

        /**
         * Op build.
         * @member {pb.IBuildOp|null|undefined} build
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.build = null;

        /**
         * Op merge.
         * @member {pb.IMergeOp|null|undefined} merge
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.merge = null;

        /**
         * Op diff.
         * @member {pb.IDiffOp|null|undefined} diff
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.diff = null;

        /**
         * Op platform.
         * @member {pb.IPlatform|null|undefined} platform
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.platform = null;

        /**
         * Op constraints.
         * @member {pb.IWorkerConstraints|null|undefined} constraints
         * @memberof pb.Op
         * @instance
         */
        Op.prototype.constraints = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Op op.
         * @member {"exec"|"source"|"file"|"build"|"merge"|"diff"|undefined} op
         * @memberof pb.Op
         * @instance
         */
        Object.defineProperty(Op.prototype, "op", {
            get: $util.oneOfGetter($oneOfFields = ["exec", "source", "file", "build", "merge", "diff"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Op instance using the specified properties.
         * @function create
         * @memberof pb.Op
         * @static
         * @param {pb.IOp=} [properties] Properties to set
         * @returns {pb.Op} Op instance
         */
        Op.create = function create(properties) {
            return new Op(properties);
        };

        /**
         * Encodes the specified Op message. Does not implicitly {@link pb.Op.verify|verify} messages.
         * @function encode
         * @memberof pb.Op
         * @static
         * @param {pb.IOp} message Op message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Op.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inputs != null && message.inputs.length)
                for (let i = 0; i < message.inputs.length; ++i)
                    $root.pb.Input.encode(message.inputs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.exec != null && Object.hasOwnProperty.call(message, "exec"))
                $root.pb.ExecOp.encode(message.exec, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.pb.SourceOp.encode(message.source, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.pb.FileOp.encode(message.file, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.build != null && Object.hasOwnProperty.call(message, "build"))
                $root.pb.BuildOp.encode(message.build, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.merge != null && Object.hasOwnProperty.call(message, "merge"))
                $root.pb.MergeOp.encode(message.merge, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.diff != null && Object.hasOwnProperty.call(message, "diff"))
                $root.pb.DiffOp.encode(message.diff, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                $root.pb.Platform.encode(message.platform, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.constraints != null && Object.hasOwnProperty.call(message, "constraints"))
                $root.pb.WorkerConstraints.encode(message.constraints, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Op message, length delimited. Does not implicitly {@link pb.Op.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Op
         * @static
         * @param {pb.IOp} message Op message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Op.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Op message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Op
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Op} Op
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Op.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Op();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.pb.Input.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.exec = $root.pb.ExecOp.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.source = $root.pb.SourceOp.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.file = $root.pb.FileOp.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.build = $root.pb.BuildOp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.merge = $root.pb.MergeOp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.diff = $root.pb.DiffOp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.platform = $root.pb.Platform.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.constraints = $root.pb.WorkerConstraints.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Op message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Op
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Op} Op
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Op.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Op message.
         * @function verify
         * @memberof pb.Op
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Op.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                if (!Array.isArray(message.inputs))
                    return "inputs: array expected";
                for (let i = 0; i < message.inputs.length; ++i) {
                    let error = $root.pb.Input.verify(message.inputs[i]);
                    if (error)
                        return "inputs." + error;
                }
            }
            if (message.exec != null && message.hasOwnProperty("exec")) {
                properties.op = 1;
                {
                    let error = $root.pb.ExecOp.verify(message.exec);
                    if (error)
                        return "exec." + error;
                }
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    let error = $root.pb.SourceOp.verify(message.source);
                    if (error)
                        return "source." + error;
                }
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    let error = $root.pb.FileOp.verify(message.file);
                    if (error)
                        return "file." + error;
                }
            }
            if (message.build != null && message.hasOwnProperty("build")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    let error = $root.pb.BuildOp.verify(message.build);
                    if (error)
                        return "build." + error;
                }
            }
            if (message.merge != null && message.hasOwnProperty("merge")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    let error = $root.pb.MergeOp.verify(message.merge);
                    if (error)
                        return "merge." + error;
                }
            }
            if (message.diff != null && message.hasOwnProperty("diff")) {
                if (properties.op === 1)
                    return "op: multiple values";
                properties.op = 1;
                {
                    let error = $root.pb.DiffOp.verify(message.diff);
                    if (error)
                        return "diff." + error;
                }
            }
            if (message.platform != null && message.hasOwnProperty("platform")) {
                let error = $root.pb.Platform.verify(message.platform);
                if (error)
                    return "platform." + error;
            }
            if (message.constraints != null && message.hasOwnProperty("constraints")) {
                let error = $root.pb.WorkerConstraints.verify(message.constraints);
                if (error)
                    return "constraints." + error;
            }
            return null;
        };

        /**
         * Creates an Op message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Op
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Op} Op
         */
        Op.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Op)
                return object;
            let message = new $root.pb.Op();
            if (object.inputs) {
                if (!Array.isArray(object.inputs))
                    throw TypeError(".pb.Op.inputs: array expected");
                message.inputs = [];
                for (let i = 0; i < object.inputs.length; ++i) {
                    if (typeof object.inputs[i] !== "object")
                        throw TypeError(".pb.Op.inputs: object expected");
                    message.inputs[i] = $root.pb.Input.fromObject(object.inputs[i]);
                }
            }
            if (object.exec != null) {
                if (typeof object.exec !== "object")
                    throw TypeError(".pb.Op.exec: object expected");
                message.exec = $root.pb.ExecOp.fromObject(object.exec);
            }
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".pb.Op.source: object expected");
                message.source = $root.pb.SourceOp.fromObject(object.source);
            }
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".pb.Op.file: object expected");
                message.file = $root.pb.FileOp.fromObject(object.file);
            }
            if (object.build != null) {
                if (typeof object.build !== "object")
                    throw TypeError(".pb.Op.build: object expected");
                message.build = $root.pb.BuildOp.fromObject(object.build);
            }
            if (object.merge != null) {
                if (typeof object.merge !== "object")
                    throw TypeError(".pb.Op.merge: object expected");
                message.merge = $root.pb.MergeOp.fromObject(object.merge);
            }
            if (object.diff != null) {
                if (typeof object.diff !== "object")
                    throw TypeError(".pb.Op.diff: object expected");
                message.diff = $root.pb.DiffOp.fromObject(object.diff);
            }
            if (object.platform != null) {
                if (typeof object.platform !== "object")
                    throw TypeError(".pb.Op.platform: object expected");
                message.platform = $root.pb.Platform.fromObject(object.platform);
            }
            if (object.constraints != null) {
                if (typeof object.constraints !== "object")
                    throw TypeError(".pb.Op.constraints: object expected");
                message.constraints = $root.pb.WorkerConstraints.fromObject(object.constraints);
            }
            return message;
        };

        /**
         * Creates a plain object from an Op message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Op
         * @static
         * @param {pb.Op} message Op
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Op.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.inputs = [];
            if (options.defaults) {
                object.platform = null;
                object.constraints = null;
            }
            if (message.inputs && message.inputs.length) {
                object.inputs = [];
                for (let j = 0; j < message.inputs.length; ++j)
                    object.inputs[j] = $root.pb.Input.toObject(message.inputs[j], options);
            }
            if (message.exec != null && message.hasOwnProperty("exec")) {
                object.exec = $root.pb.ExecOp.toObject(message.exec, options);
                if (options.oneofs)
                    object.op = "exec";
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                object.source = $root.pb.SourceOp.toObject(message.source, options);
                if (options.oneofs)
                    object.op = "source";
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                object.file = $root.pb.FileOp.toObject(message.file, options);
                if (options.oneofs)
                    object.op = "file";
            }
            if (message.build != null && message.hasOwnProperty("build")) {
                object.build = $root.pb.BuildOp.toObject(message.build, options);
                if (options.oneofs)
                    object.op = "build";
            }
            if (message.merge != null && message.hasOwnProperty("merge")) {
                object.merge = $root.pb.MergeOp.toObject(message.merge, options);
                if (options.oneofs)
                    object.op = "merge";
            }
            if (message.diff != null && message.hasOwnProperty("diff")) {
                object.diff = $root.pb.DiffOp.toObject(message.diff, options);
                if (options.oneofs)
                    object.op = "diff";
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = $root.pb.Platform.toObject(message.platform, options);
            if (message.constraints != null && message.hasOwnProperty("constraints"))
                object.constraints = $root.pb.WorkerConstraints.toObject(message.constraints, options);
            return object;
        };

        /**
         * Converts this Op to JSON.
         * @function toJSON
         * @memberof pb.Op
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Op.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Op
         * @function getTypeUrl
         * @memberof pb.Op
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Op.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Op";
        };

        return Op;
    })();

    pb.Platform = (function() {

        /**
         * Properties of a Platform.
         * @memberof pb
         * @interface IPlatform
         * @property {string|null} [Architecture] Platform Architecture
         * @property {string|null} [OS] Platform OS
         * @property {string|null} [Variant] Platform Variant
         * @property {string|null} [OSVersion] Platform OSVersion
         * @property {Array.<string>|null} [OSFeatures] Platform OSFeatures
         */

        /**
         * Constructs a new Platform.
         * @memberof pb
         * @classdesc Represents a Platform.
         * @implements IPlatform
         * @constructor
         * @param {pb.IPlatform=} [properties] Properties to set
         */
        function Platform(properties) {
            this.OSFeatures = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Platform Architecture.
         * @member {string} Architecture
         * @memberof pb.Platform
         * @instance
         */
        Platform.prototype.Architecture = "";

        /**
         * Platform OS.
         * @member {string} OS
         * @memberof pb.Platform
         * @instance
         */
        Platform.prototype.OS = "";

        /**
         * Platform Variant.
         * @member {string} Variant
         * @memberof pb.Platform
         * @instance
         */
        Platform.prototype.Variant = "";

        /**
         * Platform OSVersion.
         * @member {string} OSVersion
         * @memberof pb.Platform
         * @instance
         */
        Platform.prototype.OSVersion = "";

        /**
         * Platform OSFeatures.
         * @member {Array.<string>} OSFeatures
         * @memberof pb.Platform
         * @instance
         */
        Platform.prototype.OSFeatures = $util.emptyArray;

        /**
         * Creates a new Platform instance using the specified properties.
         * @function create
         * @memberof pb.Platform
         * @static
         * @param {pb.IPlatform=} [properties] Properties to set
         * @returns {pb.Platform} Platform instance
         */
        Platform.create = function create(properties) {
            return new Platform(properties);
        };

        /**
         * Encodes the specified Platform message. Does not implicitly {@link pb.Platform.verify|verify} messages.
         * @function encode
         * @memberof pb.Platform
         * @static
         * @param {pb.IPlatform} message Platform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Platform.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Architecture != null && Object.hasOwnProperty.call(message, "Architecture"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Architecture);
            if (message.OS != null && Object.hasOwnProperty.call(message, "OS"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.OS);
            if (message.Variant != null && Object.hasOwnProperty.call(message, "Variant"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Variant);
            if (message.OSVersion != null && Object.hasOwnProperty.call(message, "OSVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.OSVersion);
            if (message.OSFeatures != null && message.OSFeatures.length)
                for (let i = 0; i < message.OSFeatures.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.OSFeatures[i]);
            return writer;
        };

        /**
         * Encodes the specified Platform message, length delimited. Does not implicitly {@link pb.Platform.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Platform
         * @static
         * @param {pb.IPlatform} message Platform message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Platform.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Platform message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Platform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Platform} Platform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Platform.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Platform();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Architecture = reader.string();
                        break;
                    }
                case 2: {
                        message.OS = reader.string();
                        break;
                    }
                case 3: {
                        message.Variant = reader.string();
                        break;
                    }
                case 4: {
                        message.OSVersion = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.OSFeatures && message.OSFeatures.length))
                            message.OSFeatures = [];
                        message.OSFeatures.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Platform message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Platform
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Platform} Platform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Platform.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Platform message.
         * @function verify
         * @memberof pb.Platform
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Platform.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Architecture != null && message.hasOwnProperty("Architecture"))
                if (!$util.isString(message.Architecture))
                    return "Architecture: string expected";
            if (message.OS != null && message.hasOwnProperty("OS"))
                if (!$util.isString(message.OS))
                    return "OS: string expected";
            if (message.Variant != null && message.hasOwnProperty("Variant"))
                if (!$util.isString(message.Variant))
                    return "Variant: string expected";
            if (message.OSVersion != null && message.hasOwnProperty("OSVersion"))
                if (!$util.isString(message.OSVersion))
                    return "OSVersion: string expected";
            if (message.OSFeatures != null && message.hasOwnProperty("OSFeatures")) {
                if (!Array.isArray(message.OSFeatures))
                    return "OSFeatures: array expected";
                for (let i = 0; i < message.OSFeatures.length; ++i)
                    if (!$util.isString(message.OSFeatures[i]))
                        return "OSFeatures: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Platform message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Platform
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Platform} Platform
         */
        Platform.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Platform)
                return object;
            let message = new $root.pb.Platform();
            if (object.Architecture != null)
                message.Architecture = String(object.Architecture);
            if (object.OS != null)
                message.OS = String(object.OS);
            if (object.Variant != null)
                message.Variant = String(object.Variant);
            if (object.OSVersion != null)
                message.OSVersion = String(object.OSVersion);
            if (object.OSFeatures) {
                if (!Array.isArray(object.OSFeatures))
                    throw TypeError(".pb.Platform.OSFeatures: array expected");
                message.OSFeatures = [];
                for (let i = 0; i < object.OSFeatures.length; ++i)
                    message.OSFeatures[i] = String(object.OSFeatures[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Platform message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Platform
         * @static
         * @param {pb.Platform} message Platform
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Platform.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.OSFeatures = [];
            if (options.defaults) {
                object.Architecture = "";
                object.OS = "";
                object.Variant = "";
                object.OSVersion = "";
            }
            if (message.Architecture != null && message.hasOwnProperty("Architecture"))
                object.Architecture = message.Architecture;
            if (message.OS != null && message.hasOwnProperty("OS"))
                object.OS = message.OS;
            if (message.Variant != null && message.hasOwnProperty("Variant"))
                object.Variant = message.Variant;
            if (message.OSVersion != null && message.hasOwnProperty("OSVersion"))
                object.OSVersion = message.OSVersion;
            if (message.OSFeatures && message.OSFeatures.length) {
                object.OSFeatures = [];
                for (let j = 0; j < message.OSFeatures.length; ++j)
                    object.OSFeatures[j] = message.OSFeatures[j];
            }
            return object;
        };

        /**
         * Converts this Platform to JSON.
         * @function toJSON
         * @memberof pb.Platform
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Platform.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Platform
         * @function getTypeUrl
         * @memberof pb.Platform
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Platform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Platform";
        };

        return Platform;
    })();

    pb.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof pb
         * @interface IInput
         * @property {string|null} [digest] Input digest
         * @property {number|Long|null} [index] Input index
         */

        /**
         * Constructs a new Input.
         * @memberof pb
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {pb.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input digest.
         * @member {string} digest
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.digest = "";

        /**
         * Input index.
         * @member {number|Long} index
         * @memberof pb.Input
         * @instance
         */
        Input.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof pb.Input
         * @static
         * @param {pb.IInput=} [properties] Properties to set
         * @returns {pb.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encode
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.digest);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link pb.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Input
         * @static
         * @param {pb.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Input();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.digest = reader.string();
                        break;
                    }
                case 2: {
                        message.index = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                    return "index: integer|Long expected";
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Input)
                return object;
            let message = new $root.pb.Input();
            if (object.digest != null)
                message.digest = String(object.digest);
            if (object.index != null)
                if ($util.Long)
                    (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                else if (typeof object.index === "string")
                    message.index = parseInt(object.index, 10);
                else if (typeof object.index === "number")
                    message.index = object.index;
                else if (typeof object.index === "object")
                    message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Input
         * @static
         * @param {pb.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.digest = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index = options.longs === String ? "0" : 0;
            }
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            if (message.index != null && message.hasOwnProperty("index"))
                if (typeof message.index === "number")
                    object.index = options.longs === String ? String(message.index) : message.index;
                else
                    object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof pb.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof pb.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Input";
        };

        return Input;
    })();

    pb.ExecOp = (function() {

        /**
         * Properties of an ExecOp.
         * @memberof pb
         * @interface IExecOp
         * @property {pb.IMeta|null} [meta] ExecOp meta
         * @property {Array.<pb.IMount>|null} [mounts] ExecOp mounts
         * @property {pb.NetMode|null} [network] ExecOp network
         * @property {pb.SecurityMode|null} [security] ExecOp security
         * @property {Array.<pb.ISecretEnv>|null} [secretenv] ExecOp secretenv
         */

        /**
         * Constructs a new ExecOp.
         * @memberof pb
         * @classdesc Represents an ExecOp.
         * @implements IExecOp
         * @constructor
         * @param {pb.IExecOp=} [properties] Properties to set
         */
        function ExecOp(properties) {
            this.mounts = [];
            this.secretenv = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecOp meta.
         * @member {pb.IMeta|null|undefined} meta
         * @memberof pb.ExecOp
         * @instance
         */
        ExecOp.prototype.meta = null;

        /**
         * ExecOp mounts.
         * @member {Array.<pb.IMount>} mounts
         * @memberof pb.ExecOp
         * @instance
         */
        ExecOp.prototype.mounts = $util.emptyArray;

        /**
         * ExecOp network.
         * @member {pb.NetMode} network
         * @memberof pb.ExecOp
         * @instance
         */
        ExecOp.prototype.network = 0;

        /**
         * ExecOp security.
         * @member {pb.SecurityMode} security
         * @memberof pb.ExecOp
         * @instance
         */
        ExecOp.prototype.security = 0;

        /**
         * ExecOp secretenv.
         * @member {Array.<pb.ISecretEnv>} secretenv
         * @memberof pb.ExecOp
         * @instance
         */
        ExecOp.prototype.secretenv = $util.emptyArray;

        /**
         * Creates a new ExecOp instance using the specified properties.
         * @function create
         * @memberof pb.ExecOp
         * @static
         * @param {pb.IExecOp=} [properties] Properties to set
         * @returns {pb.ExecOp} ExecOp instance
         */
        ExecOp.create = function create(properties) {
            return new ExecOp(properties);
        };

        /**
         * Encodes the specified ExecOp message. Does not implicitly {@link pb.ExecOp.verify|verify} messages.
         * @function encode
         * @memberof pb.ExecOp
         * @static
         * @param {pb.IExecOp} message ExecOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                $root.pb.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mounts != null && message.mounts.length)
                for (let i = 0; i < message.mounts.length; ++i)
                    $root.pb.Mount.encode(message.mounts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.network != null && Object.hasOwnProperty.call(message, "network"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.network);
            if (message.security != null && Object.hasOwnProperty.call(message, "security"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.security);
            if (message.secretenv != null && message.secretenv.length)
                for (let i = 0; i < message.secretenv.length; ++i)
                    $root.pb.SecretEnv.encode(message.secretenv[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExecOp message, length delimited. Does not implicitly {@link pb.ExecOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ExecOp
         * @static
         * @param {pb.IExecOp} message ExecOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ExecOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ExecOp} ExecOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ExecOp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.meta = $root.pb.Meta.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.mounts && message.mounts.length))
                            message.mounts = [];
                        message.mounts.push($root.pb.Mount.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.network = reader.int32();
                        break;
                    }
                case 4: {
                        message.security = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.secretenv && message.secretenv.length))
                            message.secretenv = [];
                        message.secretenv.push($root.pb.SecretEnv.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ExecOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ExecOp} ExecOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecOp message.
         * @function verify
         * @memberof pb.ExecOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.meta != null && message.hasOwnProperty("meta")) {
                let error = $root.pb.Meta.verify(message.meta);
                if (error)
                    return "meta." + error;
            }
            if (message.mounts != null && message.hasOwnProperty("mounts")) {
                if (!Array.isArray(message.mounts))
                    return "mounts: array expected";
                for (let i = 0; i < message.mounts.length; ++i) {
                    let error = $root.pb.Mount.verify(message.mounts[i]);
                    if (error)
                        return "mounts." + error;
                }
            }
            if (message.network != null && message.hasOwnProperty("network"))
                switch (message.network) {
                default:
                    return "network: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.security != null && message.hasOwnProperty("security"))
                switch (message.security) {
                default:
                    return "security: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.secretenv != null && message.hasOwnProperty("secretenv")) {
                if (!Array.isArray(message.secretenv))
                    return "secretenv: array expected";
                for (let i = 0; i < message.secretenv.length; ++i) {
                    let error = $root.pb.SecretEnv.verify(message.secretenv[i]);
                    if (error)
                        return "secretenv." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ExecOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ExecOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ExecOp} ExecOp
         */
        ExecOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ExecOp)
                return object;
            let message = new $root.pb.ExecOp();
            if (object.meta != null) {
                if (typeof object.meta !== "object")
                    throw TypeError(".pb.ExecOp.meta: object expected");
                message.meta = $root.pb.Meta.fromObject(object.meta);
            }
            if (object.mounts) {
                if (!Array.isArray(object.mounts))
                    throw TypeError(".pb.ExecOp.mounts: array expected");
                message.mounts = [];
                for (let i = 0; i < object.mounts.length; ++i) {
                    if (typeof object.mounts[i] !== "object")
                        throw TypeError(".pb.ExecOp.mounts: object expected");
                    message.mounts[i] = $root.pb.Mount.fromObject(object.mounts[i]);
                }
            }
            switch (object.network) {
            default:
                if (typeof object.network === "number") {
                    message.network = object.network;
                    break;
                }
                break;
            case "UNSET":
            case 0:
                message.network = 0;
                break;
            case "HOST":
            case 1:
                message.network = 1;
                break;
            case "NONE":
            case 2:
                message.network = 2;
                break;
            }
            switch (object.security) {
            default:
                if (typeof object.security === "number") {
                    message.security = object.security;
                    break;
                }
                break;
            case "SANDBOX":
            case 0:
                message.security = 0;
                break;
            case "INSECURE":
            case 1:
                message.security = 1;
                break;
            }
            if (object.secretenv) {
                if (!Array.isArray(object.secretenv))
                    throw TypeError(".pb.ExecOp.secretenv: array expected");
                message.secretenv = [];
                for (let i = 0; i < object.secretenv.length; ++i) {
                    if (typeof object.secretenv[i] !== "object")
                        throw TypeError(".pb.ExecOp.secretenv: object expected");
                    message.secretenv[i] = $root.pb.SecretEnv.fromObject(object.secretenv[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ExecOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ExecOp
         * @static
         * @param {pb.ExecOp} message ExecOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.mounts = [];
                object.secretenv = [];
            }
            if (options.defaults) {
                object.meta = null;
                object.network = options.enums === String ? "UNSET" : 0;
                object.security = options.enums === String ? "SANDBOX" : 0;
            }
            if (message.meta != null && message.hasOwnProperty("meta"))
                object.meta = $root.pb.Meta.toObject(message.meta, options);
            if (message.mounts && message.mounts.length) {
                object.mounts = [];
                for (let j = 0; j < message.mounts.length; ++j)
                    object.mounts[j] = $root.pb.Mount.toObject(message.mounts[j], options);
            }
            if (message.network != null && message.hasOwnProperty("network"))
                object.network = options.enums === String ? $root.pb.NetMode[message.network] === undefined ? message.network : $root.pb.NetMode[message.network] : message.network;
            if (message.security != null && message.hasOwnProperty("security"))
                object.security = options.enums === String ? $root.pb.SecurityMode[message.security] === undefined ? message.security : $root.pb.SecurityMode[message.security] : message.security;
            if (message.secretenv && message.secretenv.length) {
                object.secretenv = [];
                for (let j = 0; j < message.secretenv.length; ++j)
                    object.secretenv[j] = $root.pb.SecretEnv.toObject(message.secretenv[j], options);
            }
            return object;
        };

        /**
         * Converts this ExecOp to JSON.
         * @function toJSON
         * @memberof pb.ExecOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExecOp
         * @function getTypeUrl
         * @memberof pb.ExecOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ExecOp";
        };

        return ExecOp;
    })();

    pb.Meta = (function() {

        /**
         * Properties of a Meta.
         * @memberof pb
         * @interface IMeta
         * @property {Array.<string>|null} [args] Meta args
         * @property {Array.<string>|null} [env] Meta env
         * @property {string|null} [cwd] Meta cwd
         * @property {string|null} [user] Meta user
         * @property {pb.IProxyEnv|null} [proxyEnv] Meta proxyEnv
         * @property {Array.<pb.IHostIP>|null} [extraHosts] Meta extraHosts
         * @property {string|null} [hostname] Meta hostname
         * @property {Array.<pb.IUlimit>|null} [ulimit] Meta ulimit
         * @property {string|null} [cgroupParent] Meta cgroupParent
         * @property {boolean|null} [removeMountStubsRecursive] Meta removeMountStubsRecursive
         */

        /**
         * Constructs a new Meta.
         * @memberof pb
         * @classdesc Represents a Meta.
         * @implements IMeta
         * @constructor
         * @param {pb.IMeta=} [properties] Properties to set
         */
        function Meta(properties) {
            this.args = [];
            this.env = [];
            this.extraHosts = [];
            this.ulimit = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Meta args.
         * @member {Array.<string>} args
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.args = $util.emptyArray;

        /**
         * Meta env.
         * @member {Array.<string>} env
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.env = $util.emptyArray;

        /**
         * Meta cwd.
         * @member {string} cwd
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.cwd = "";

        /**
         * Meta user.
         * @member {string} user
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.user = "";

        /**
         * Meta proxyEnv.
         * @member {pb.IProxyEnv|null|undefined} proxyEnv
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.proxyEnv = null;

        /**
         * Meta extraHosts.
         * @member {Array.<pb.IHostIP>} extraHosts
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.extraHosts = $util.emptyArray;

        /**
         * Meta hostname.
         * @member {string} hostname
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.hostname = "";

        /**
         * Meta ulimit.
         * @member {Array.<pb.IUlimit>} ulimit
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.ulimit = $util.emptyArray;

        /**
         * Meta cgroupParent.
         * @member {string} cgroupParent
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.cgroupParent = "";

        /**
         * Meta removeMountStubsRecursive.
         * @member {boolean} removeMountStubsRecursive
         * @memberof pb.Meta
         * @instance
         */
        Meta.prototype.removeMountStubsRecursive = false;

        /**
         * Creates a new Meta instance using the specified properties.
         * @function create
         * @memberof pb.Meta
         * @static
         * @param {pb.IMeta=} [properties] Properties to set
         * @returns {pb.Meta} Meta instance
         */
        Meta.create = function create(properties) {
            return new Meta(properties);
        };

        /**
         * Encodes the specified Meta message. Does not implicitly {@link pb.Meta.verify|verify} messages.
         * @function encode
         * @memberof pb.Meta
         * @static
         * @param {pb.IMeta} message Meta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meta.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.args != null && message.args.length)
                for (let i = 0; i < message.args.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.args[i]);
            if (message.env != null && message.env.length)
                for (let i = 0; i < message.env.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.env[i]);
            if (message.cwd != null && Object.hasOwnProperty.call(message, "cwd"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cwd);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.user);
            if (message.proxyEnv != null && Object.hasOwnProperty.call(message, "proxyEnv"))
                $root.pb.ProxyEnv.encode(message.proxyEnv, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.extraHosts != null && message.extraHosts.length)
                for (let i = 0; i < message.extraHosts.length; ++i)
                    $root.pb.HostIP.encode(message.extraHosts[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.hostname);
            if (message.ulimit != null && message.ulimit.length)
                for (let i = 0; i < message.ulimit.length; ++i)
                    $root.pb.Ulimit.encode(message.ulimit[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.cgroupParent != null && Object.hasOwnProperty.call(message, "cgroupParent"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.cgroupParent);
            if (message.removeMountStubsRecursive != null && Object.hasOwnProperty.call(message, "removeMountStubsRecursive"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.removeMountStubsRecursive);
            return writer;
        };

        /**
         * Encodes the specified Meta message, length delimited. Does not implicitly {@link pb.Meta.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Meta
         * @static
         * @param {pb.IMeta} message Meta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Meta.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Meta message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Meta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Meta} Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meta.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Meta();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.env && message.env.length))
                            message.env = [];
                        message.env.push(reader.string());
                        break;
                    }
                case 3: {
                        message.cwd = reader.string();
                        break;
                    }
                case 4: {
                        message.user = reader.string();
                        break;
                    }
                case 5: {
                        message.proxyEnv = $root.pb.ProxyEnv.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        if (!(message.extraHosts && message.extraHosts.length))
                            message.extraHosts = [];
                        message.extraHosts.push($root.pb.HostIP.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.hostname = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.ulimit && message.ulimit.length))
                            message.ulimit = [];
                        message.ulimit.push($root.pb.Ulimit.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        message.cgroupParent = reader.string();
                        break;
                    }
                case 11: {
                        message.removeMountStubsRecursive = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Meta message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Meta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Meta} Meta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Meta.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Meta message.
         * @function verify
         * @memberof pb.Meta
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Meta.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.args != null && message.hasOwnProperty("args")) {
                if (!Array.isArray(message.args))
                    return "args: array expected";
                for (let i = 0; i < message.args.length; ++i)
                    if (!$util.isString(message.args[i]))
                        return "args: string[] expected";
            }
            if (message.env != null && message.hasOwnProperty("env")) {
                if (!Array.isArray(message.env))
                    return "env: array expected";
                for (let i = 0; i < message.env.length; ++i)
                    if (!$util.isString(message.env[i]))
                        return "env: string[] expected";
            }
            if (message.cwd != null && message.hasOwnProperty("cwd"))
                if (!$util.isString(message.cwd))
                    return "cwd: string expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.proxyEnv != null && message.hasOwnProperty("proxyEnv")) {
                let error = $root.pb.ProxyEnv.verify(message.proxyEnv);
                if (error)
                    return "proxyEnv." + error;
            }
            if (message.extraHosts != null && message.hasOwnProperty("extraHosts")) {
                if (!Array.isArray(message.extraHosts))
                    return "extraHosts: array expected";
                for (let i = 0; i < message.extraHosts.length; ++i) {
                    let error = $root.pb.HostIP.verify(message.extraHosts[i]);
                    if (error)
                        return "extraHosts." + error;
                }
            }
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.ulimit != null && message.hasOwnProperty("ulimit")) {
                if (!Array.isArray(message.ulimit))
                    return "ulimit: array expected";
                for (let i = 0; i < message.ulimit.length; ++i) {
                    let error = $root.pb.Ulimit.verify(message.ulimit[i]);
                    if (error)
                        return "ulimit." + error;
                }
            }
            if (message.cgroupParent != null && message.hasOwnProperty("cgroupParent"))
                if (!$util.isString(message.cgroupParent))
                    return "cgroupParent: string expected";
            if (message.removeMountStubsRecursive != null && message.hasOwnProperty("removeMountStubsRecursive"))
                if (typeof message.removeMountStubsRecursive !== "boolean")
                    return "removeMountStubsRecursive: boolean expected";
            return null;
        };

        /**
         * Creates a Meta message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Meta
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Meta} Meta
         */
        Meta.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Meta)
                return object;
            let message = new $root.pb.Meta();
            if (object.args) {
                if (!Array.isArray(object.args))
                    throw TypeError(".pb.Meta.args: array expected");
                message.args = [];
                for (let i = 0; i < object.args.length; ++i)
                    message.args[i] = String(object.args[i]);
            }
            if (object.env) {
                if (!Array.isArray(object.env))
                    throw TypeError(".pb.Meta.env: array expected");
                message.env = [];
                for (let i = 0; i < object.env.length; ++i)
                    message.env[i] = String(object.env[i]);
            }
            if (object.cwd != null)
                message.cwd = String(object.cwd);
            if (object.user != null)
                message.user = String(object.user);
            if (object.proxyEnv != null) {
                if (typeof object.proxyEnv !== "object")
                    throw TypeError(".pb.Meta.proxyEnv: object expected");
                message.proxyEnv = $root.pb.ProxyEnv.fromObject(object.proxyEnv);
            }
            if (object.extraHosts) {
                if (!Array.isArray(object.extraHosts))
                    throw TypeError(".pb.Meta.extraHosts: array expected");
                message.extraHosts = [];
                for (let i = 0; i < object.extraHosts.length; ++i) {
                    if (typeof object.extraHosts[i] !== "object")
                        throw TypeError(".pb.Meta.extraHosts: object expected");
                    message.extraHosts[i] = $root.pb.HostIP.fromObject(object.extraHosts[i]);
                }
            }
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.ulimit) {
                if (!Array.isArray(object.ulimit))
                    throw TypeError(".pb.Meta.ulimit: array expected");
                message.ulimit = [];
                for (let i = 0; i < object.ulimit.length; ++i) {
                    if (typeof object.ulimit[i] !== "object")
                        throw TypeError(".pb.Meta.ulimit: object expected");
                    message.ulimit[i] = $root.pb.Ulimit.fromObject(object.ulimit[i]);
                }
            }
            if (object.cgroupParent != null)
                message.cgroupParent = String(object.cgroupParent);
            if (object.removeMountStubsRecursive != null)
                message.removeMountStubsRecursive = Boolean(object.removeMountStubsRecursive);
            return message;
        };

        /**
         * Creates a plain object from a Meta message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Meta
         * @static
         * @param {pb.Meta} message Meta
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Meta.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.args = [];
                object.env = [];
                object.extraHosts = [];
                object.ulimit = [];
            }
            if (options.defaults) {
                object.cwd = "";
                object.user = "";
                object.proxyEnv = null;
                object.hostname = "";
                object.cgroupParent = "";
                object.removeMountStubsRecursive = false;
            }
            if (message.args && message.args.length) {
                object.args = [];
                for (let j = 0; j < message.args.length; ++j)
                    object.args[j] = message.args[j];
            }
            if (message.env && message.env.length) {
                object.env = [];
                for (let j = 0; j < message.env.length; ++j)
                    object.env[j] = message.env[j];
            }
            if (message.cwd != null && message.hasOwnProperty("cwd"))
                object.cwd = message.cwd;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.proxyEnv != null && message.hasOwnProperty("proxyEnv"))
                object.proxyEnv = $root.pb.ProxyEnv.toObject(message.proxyEnv, options);
            if (message.extraHosts && message.extraHosts.length) {
                object.extraHosts = [];
                for (let j = 0; j < message.extraHosts.length; ++j)
                    object.extraHosts[j] = $root.pb.HostIP.toObject(message.extraHosts[j], options);
            }
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.ulimit && message.ulimit.length) {
                object.ulimit = [];
                for (let j = 0; j < message.ulimit.length; ++j)
                    object.ulimit[j] = $root.pb.Ulimit.toObject(message.ulimit[j], options);
            }
            if (message.cgroupParent != null && message.hasOwnProperty("cgroupParent"))
                object.cgroupParent = message.cgroupParent;
            if (message.removeMountStubsRecursive != null && message.hasOwnProperty("removeMountStubsRecursive"))
                object.removeMountStubsRecursive = message.removeMountStubsRecursive;
            return object;
        };

        /**
         * Converts this Meta to JSON.
         * @function toJSON
         * @memberof pb.Meta
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Meta.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Meta
         * @function getTypeUrl
         * @memberof pb.Meta
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Meta";
        };

        return Meta;
    })();

    pb.HostIP = (function() {

        /**
         * Properties of a HostIP.
         * @memberof pb
         * @interface IHostIP
         * @property {string|null} [Host] HostIP Host
         * @property {string|null} [IP] HostIP IP
         */

        /**
         * Constructs a new HostIP.
         * @memberof pb
         * @classdesc Represents a HostIP.
         * @implements IHostIP
         * @constructor
         * @param {pb.IHostIP=} [properties] Properties to set
         */
        function HostIP(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HostIP Host.
         * @member {string} Host
         * @memberof pb.HostIP
         * @instance
         */
        HostIP.prototype.Host = "";

        /**
         * HostIP IP.
         * @member {string} IP
         * @memberof pb.HostIP
         * @instance
         */
        HostIP.prototype.IP = "";

        /**
         * Creates a new HostIP instance using the specified properties.
         * @function create
         * @memberof pb.HostIP
         * @static
         * @param {pb.IHostIP=} [properties] Properties to set
         * @returns {pb.HostIP} HostIP instance
         */
        HostIP.create = function create(properties) {
            return new HostIP(properties);
        };

        /**
         * Encodes the specified HostIP message. Does not implicitly {@link pb.HostIP.verify|verify} messages.
         * @function encode
         * @memberof pb.HostIP
         * @static
         * @param {pb.IHostIP} message HostIP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostIP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Host != null && Object.hasOwnProperty.call(message, "Host"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Host);
            if (message.IP != null && Object.hasOwnProperty.call(message, "IP"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.IP);
            return writer;
        };

        /**
         * Encodes the specified HostIP message, length delimited. Does not implicitly {@link pb.HostIP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.HostIP
         * @static
         * @param {pb.IHostIP} message HostIP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostIP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HostIP message from the specified reader or buffer.
         * @function decode
         * @memberof pb.HostIP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.HostIP} HostIP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostIP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.HostIP();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Host = reader.string();
                        break;
                    }
                case 2: {
                        message.IP = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HostIP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.HostIP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.HostIP} HostIP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostIP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HostIP message.
         * @function verify
         * @memberof pb.HostIP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HostIP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Host != null && message.hasOwnProperty("Host"))
                if (!$util.isString(message.Host))
                    return "Host: string expected";
            if (message.IP != null && message.hasOwnProperty("IP"))
                if (!$util.isString(message.IP))
                    return "IP: string expected";
            return null;
        };

        /**
         * Creates a HostIP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.HostIP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.HostIP} HostIP
         */
        HostIP.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.HostIP)
                return object;
            let message = new $root.pb.HostIP();
            if (object.Host != null)
                message.Host = String(object.Host);
            if (object.IP != null)
                message.IP = String(object.IP);
            return message;
        };

        /**
         * Creates a plain object from a HostIP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.HostIP
         * @static
         * @param {pb.HostIP} message HostIP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HostIP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Host = "";
                object.IP = "";
            }
            if (message.Host != null && message.hasOwnProperty("Host"))
                object.Host = message.Host;
            if (message.IP != null && message.hasOwnProperty("IP"))
                object.IP = message.IP;
            return object;
        };

        /**
         * Converts this HostIP to JSON.
         * @function toJSON
         * @memberof pb.HostIP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HostIP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HostIP
         * @function getTypeUrl
         * @memberof pb.HostIP
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HostIP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.HostIP";
        };

        return HostIP;
    })();

    pb.Ulimit = (function() {

        /**
         * Properties of an Ulimit.
         * @memberof pb
         * @interface IUlimit
         * @property {string|null} [Name] Ulimit Name
         * @property {number|Long|null} [Soft] Ulimit Soft
         * @property {number|Long|null} [Hard] Ulimit Hard
         */

        /**
         * Constructs a new Ulimit.
         * @memberof pb
         * @classdesc Represents an Ulimit.
         * @implements IUlimit
         * @constructor
         * @param {pb.IUlimit=} [properties] Properties to set
         */
        function Ulimit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ulimit Name.
         * @member {string} Name
         * @memberof pb.Ulimit
         * @instance
         */
        Ulimit.prototype.Name = "";

        /**
         * Ulimit Soft.
         * @member {number|Long} Soft
         * @memberof pb.Ulimit
         * @instance
         */
        Ulimit.prototype.Soft = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ulimit Hard.
         * @member {number|Long} Hard
         * @memberof pb.Ulimit
         * @instance
         */
        Ulimit.prototype.Hard = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Ulimit instance using the specified properties.
         * @function create
         * @memberof pb.Ulimit
         * @static
         * @param {pb.IUlimit=} [properties] Properties to set
         * @returns {pb.Ulimit} Ulimit instance
         */
        Ulimit.create = function create(properties) {
            return new Ulimit(properties);
        };

        /**
         * Encodes the specified Ulimit message. Does not implicitly {@link pb.Ulimit.verify|verify} messages.
         * @function encode
         * @memberof pb.Ulimit
         * @static
         * @param {pb.IUlimit} message Ulimit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ulimit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Soft != null && Object.hasOwnProperty.call(message, "Soft"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Soft);
            if (message.Hard != null && Object.hasOwnProperty.call(message, "Hard"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Hard);
            return writer;
        };

        /**
         * Encodes the specified Ulimit message, length delimited. Does not implicitly {@link pb.Ulimit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Ulimit
         * @static
         * @param {pb.IUlimit} message Ulimit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ulimit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ulimit message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Ulimit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Ulimit} Ulimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ulimit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Ulimit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Name = reader.string();
                        break;
                    }
                case 2: {
                        message.Soft = reader.int64();
                        break;
                    }
                case 3: {
                        message.Hard = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ulimit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Ulimit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Ulimit} Ulimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ulimit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ulimit message.
         * @function verify
         * @memberof pb.Ulimit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ulimit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Soft != null && message.hasOwnProperty("Soft"))
                if (!$util.isInteger(message.Soft) && !(message.Soft && $util.isInteger(message.Soft.low) && $util.isInteger(message.Soft.high)))
                    return "Soft: integer|Long expected";
            if (message.Hard != null && message.hasOwnProperty("Hard"))
                if (!$util.isInteger(message.Hard) && !(message.Hard && $util.isInteger(message.Hard.low) && $util.isInteger(message.Hard.high)))
                    return "Hard: integer|Long expected";
            return null;
        };

        /**
         * Creates an Ulimit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Ulimit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Ulimit} Ulimit
         */
        Ulimit.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Ulimit)
                return object;
            let message = new $root.pb.Ulimit();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Soft != null)
                if ($util.Long)
                    (message.Soft = $util.Long.fromValue(object.Soft)).unsigned = false;
                else if (typeof object.Soft === "string")
                    message.Soft = parseInt(object.Soft, 10);
                else if (typeof object.Soft === "number")
                    message.Soft = object.Soft;
                else if (typeof object.Soft === "object")
                    message.Soft = new $util.LongBits(object.Soft.low >>> 0, object.Soft.high >>> 0).toNumber();
            if (object.Hard != null)
                if ($util.Long)
                    (message.Hard = $util.Long.fromValue(object.Hard)).unsigned = false;
                else if (typeof object.Hard === "string")
                    message.Hard = parseInt(object.Hard, 10);
                else if (typeof object.Hard === "number")
                    message.Hard = object.Hard;
                else if (typeof object.Hard === "object")
                    message.Hard = new $util.LongBits(object.Hard.low >>> 0, object.Hard.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Ulimit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Ulimit
         * @static
         * @param {pb.Ulimit} message Ulimit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ulimit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Name = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Soft = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Soft = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.Hard = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Hard = options.longs === String ? "0" : 0;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Soft != null && message.hasOwnProperty("Soft"))
                if (typeof message.Soft === "number")
                    object.Soft = options.longs === String ? String(message.Soft) : message.Soft;
                else
                    object.Soft = options.longs === String ? $util.Long.prototype.toString.call(message.Soft) : options.longs === Number ? new $util.LongBits(message.Soft.low >>> 0, message.Soft.high >>> 0).toNumber() : message.Soft;
            if (message.Hard != null && message.hasOwnProperty("Hard"))
                if (typeof message.Hard === "number")
                    object.Hard = options.longs === String ? String(message.Hard) : message.Hard;
                else
                    object.Hard = options.longs === String ? $util.Long.prototype.toString.call(message.Hard) : options.longs === Number ? new $util.LongBits(message.Hard.low >>> 0, message.Hard.high >>> 0).toNumber() : message.Hard;
            return object;
        };

        /**
         * Converts this Ulimit to JSON.
         * @function toJSON
         * @memberof pb.Ulimit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ulimit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ulimit
         * @function getTypeUrl
         * @memberof pb.Ulimit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ulimit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Ulimit";
        };

        return Ulimit;
    })();

    /**
     * NetMode enum.
     * @name pb.NetMode
     * @enum {number}
     * @property {number} UNSET=0 UNSET value
     * @property {number} HOST=1 HOST value
     * @property {number} NONE=2 NONE value
     */
    pb.NetMode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSET"] = 0;
        values[valuesById[1] = "HOST"] = 1;
        values[valuesById[2] = "NONE"] = 2;
        return values;
    })();

    /**
     * SecurityMode enum.
     * @name pb.SecurityMode
     * @enum {number}
     * @property {number} SANDBOX=0 SANDBOX value
     * @property {number} INSECURE=1 INSECURE value
     */
    pb.SecurityMode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SANDBOX"] = 0;
        values[valuesById[1] = "INSECURE"] = 1;
        return values;
    })();

    pb.SecretEnv = (function() {

        /**
         * Properties of a SecretEnv.
         * @memberof pb
         * @interface ISecretEnv
         * @property {string|null} [ID] SecretEnv ID
         * @property {string|null} [name] SecretEnv name
         * @property {boolean|null} [optional] SecretEnv optional
         */

        /**
         * Constructs a new SecretEnv.
         * @memberof pb
         * @classdesc Represents a SecretEnv.
         * @implements ISecretEnv
         * @constructor
         * @param {pb.ISecretEnv=} [properties] Properties to set
         */
        function SecretEnv(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SecretEnv ID.
         * @member {string} ID
         * @memberof pb.SecretEnv
         * @instance
         */
        SecretEnv.prototype.ID = "";

        /**
         * SecretEnv name.
         * @member {string} name
         * @memberof pb.SecretEnv
         * @instance
         */
        SecretEnv.prototype.name = "";

        /**
         * SecretEnv optional.
         * @member {boolean} optional
         * @memberof pb.SecretEnv
         * @instance
         */
        SecretEnv.prototype.optional = false;

        /**
         * Creates a new SecretEnv instance using the specified properties.
         * @function create
         * @memberof pb.SecretEnv
         * @static
         * @param {pb.ISecretEnv=} [properties] Properties to set
         * @returns {pb.SecretEnv} SecretEnv instance
         */
        SecretEnv.create = function create(properties) {
            return new SecretEnv(properties);
        };

        /**
         * Encodes the specified SecretEnv message. Does not implicitly {@link pb.SecretEnv.verify|verify} messages.
         * @function encode
         * @memberof pb.SecretEnv
         * @static
         * @param {pb.ISecretEnv} message SecretEnv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretEnv.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ID);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.optional != null && Object.hasOwnProperty.call(message, "optional"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.optional);
            return writer;
        };

        /**
         * Encodes the specified SecretEnv message, length delimited. Does not implicitly {@link pb.SecretEnv.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SecretEnv
         * @static
         * @param {pb.ISecretEnv} message SecretEnv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretEnv.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SecretEnv message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SecretEnv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SecretEnv} SecretEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretEnv.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SecretEnv();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.optional = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SecretEnv message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SecretEnv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SecretEnv} SecretEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretEnv.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SecretEnv message.
         * @function verify
         * @memberof pb.SecretEnv
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SecretEnv.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isString(message.ID))
                    return "ID: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.optional != null && message.hasOwnProperty("optional"))
                if (typeof message.optional !== "boolean")
                    return "optional: boolean expected";
            return null;
        };

        /**
         * Creates a SecretEnv message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SecretEnv
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SecretEnv} SecretEnv
         */
        SecretEnv.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SecretEnv)
                return object;
            let message = new $root.pb.SecretEnv();
            if (object.ID != null)
                message.ID = String(object.ID);
            if (object.name != null)
                message.name = String(object.name);
            if (object.optional != null)
                message.optional = Boolean(object.optional);
            return message;
        };

        /**
         * Creates a plain object from a SecretEnv message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SecretEnv
         * @static
         * @param {pb.SecretEnv} message SecretEnv
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SecretEnv.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ID = "";
                object.name = "";
                object.optional = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.optional != null && message.hasOwnProperty("optional"))
                object.optional = message.optional;
            return object;
        };

        /**
         * Converts this SecretEnv to JSON.
         * @function toJSON
         * @memberof pb.SecretEnv
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SecretEnv.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SecretEnv
         * @function getTypeUrl
         * @memberof pb.SecretEnv
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SecretEnv.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SecretEnv";
        };

        return SecretEnv;
    })();

    pb.Mount = (function() {

        /**
         * Properties of a Mount.
         * @memberof pb
         * @interface IMount
         * @property {number|Long|null} [input] Mount input
         * @property {string|null} [selector] Mount selector
         * @property {string|null} [dest] Mount dest
         * @property {number|Long|null} [output] Mount output
         * @property {boolean|null} [readonly] Mount readonly
         * @property {pb.MountType|null} [mountType] Mount mountType
         * @property {pb.ITmpfsOpt|null} [TmpfsOpt] Mount TmpfsOpt
         * @property {pb.ICacheOpt|null} [cacheOpt] Mount cacheOpt
         * @property {pb.ISecretOpt|null} [secretOpt] Mount secretOpt
         * @property {pb.ISSHOpt|null} [SSHOpt] Mount SSHOpt
         * @property {string|null} [resultID] Mount resultID
         */

        /**
         * Constructs a new Mount.
         * @memberof pb
         * @classdesc Represents a Mount.
         * @implements IMount
         * @constructor
         * @param {pb.IMount=} [properties] Properties to set
         */
        function Mount(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mount input.
         * @member {number|Long} input
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Mount selector.
         * @member {string} selector
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.selector = "";

        /**
         * Mount dest.
         * @member {string} dest
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.dest = "";

        /**
         * Mount output.
         * @member {number|Long} output
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.output = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Mount readonly.
         * @member {boolean} readonly
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.readonly = false;

        /**
         * Mount mountType.
         * @member {pb.MountType} mountType
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.mountType = 0;

        /**
         * Mount TmpfsOpt.
         * @member {pb.ITmpfsOpt|null|undefined} TmpfsOpt
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.TmpfsOpt = null;

        /**
         * Mount cacheOpt.
         * @member {pb.ICacheOpt|null|undefined} cacheOpt
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.cacheOpt = null;

        /**
         * Mount secretOpt.
         * @member {pb.ISecretOpt|null|undefined} secretOpt
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.secretOpt = null;

        /**
         * Mount SSHOpt.
         * @member {pb.ISSHOpt|null|undefined} SSHOpt
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.SSHOpt = null;

        /**
         * Mount resultID.
         * @member {string} resultID
         * @memberof pb.Mount
         * @instance
         */
        Mount.prototype.resultID = "";

        /**
         * Creates a new Mount instance using the specified properties.
         * @function create
         * @memberof pb.Mount
         * @static
         * @param {pb.IMount=} [properties] Properties to set
         * @returns {pb.Mount} Mount instance
         */
        Mount.create = function create(properties) {
            return new Mount(properties);
        };

        /**
         * Encodes the specified Mount message. Does not implicitly {@link pb.Mount.verify|verify} messages.
         * @function encode
         * @memberof pb.Mount
         * @static
         * @param {pb.IMount} message Mount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.selector);
            if (message.dest != null && Object.hasOwnProperty.call(message, "dest"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.dest);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.output);
            if (message.readonly != null && Object.hasOwnProperty.call(message, "readonly"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.readonly);
            if (message.mountType != null && Object.hasOwnProperty.call(message, "mountType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.mountType);
            if (message.TmpfsOpt != null && Object.hasOwnProperty.call(message, "TmpfsOpt"))
                $root.pb.TmpfsOpt.encode(message.TmpfsOpt, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.cacheOpt != null && Object.hasOwnProperty.call(message, "cacheOpt"))
                $root.pb.CacheOpt.encode(message.cacheOpt, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.secretOpt != null && Object.hasOwnProperty.call(message, "secretOpt"))
                $root.pb.SecretOpt.encode(message.secretOpt, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.SSHOpt != null && Object.hasOwnProperty.call(message, "SSHOpt"))
                $root.pb.SSHOpt.encode(message.SSHOpt, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.resultID != null && Object.hasOwnProperty.call(message, "resultID"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.resultID);
            return writer;
        };

        /**
         * Encodes the specified Mount message, length delimited. Does not implicitly {@link pb.Mount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Mount
         * @static
         * @param {pb.IMount} message Mount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mount message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Mount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Mount} Mount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Mount();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                case 2: {
                        message.selector = reader.string();
                        break;
                    }
                case 3: {
                        message.dest = reader.string();
                        break;
                    }
                case 4: {
                        message.output = reader.int64();
                        break;
                    }
                case 5: {
                        message.readonly = reader.bool();
                        break;
                    }
                case 6: {
                        message.mountType = reader.int32();
                        break;
                    }
                case 19: {
                        message.TmpfsOpt = $root.pb.TmpfsOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.cacheOpt = $root.pb.CacheOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.secretOpt = $root.pb.SecretOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.SSHOpt = $root.pb.SSHOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.resultID = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Mount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Mount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Mount} Mount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mount message.
         * @function verify
         * @memberof pb.Mount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            if (message.selector != null && message.hasOwnProperty("selector"))
                if (!$util.isString(message.selector))
                    return "selector: string expected";
            if (message.dest != null && message.hasOwnProperty("dest"))
                if (!$util.isString(message.dest))
                    return "dest: string expected";
            if (message.output != null && message.hasOwnProperty("output"))
                if (!$util.isInteger(message.output) && !(message.output && $util.isInteger(message.output.low) && $util.isInteger(message.output.high)))
                    return "output: integer|Long expected";
            if (message.readonly != null && message.hasOwnProperty("readonly"))
                if (typeof message.readonly !== "boolean")
                    return "readonly: boolean expected";
            if (message.mountType != null && message.hasOwnProperty("mountType"))
                switch (message.mountType) {
                default:
                    return "mountType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.TmpfsOpt != null && message.hasOwnProperty("TmpfsOpt")) {
                let error = $root.pb.TmpfsOpt.verify(message.TmpfsOpt);
                if (error)
                    return "TmpfsOpt." + error;
            }
            if (message.cacheOpt != null && message.hasOwnProperty("cacheOpt")) {
                let error = $root.pb.CacheOpt.verify(message.cacheOpt);
                if (error)
                    return "cacheOpt." + error;
            }
            if (message.secretOpt != null && message.hasOwnProperty("secretOpt")) {
                let error = $root.pb.SecretOpt.verify(message.secretOpt);
                if (error)
                    return "secretOpt." + error;
            }
            if (message.SSHOpt != null && message.hasOwnProperty("SSHOpt")) {
                let error = $root.pb.SSHOpt.verify(message.SSHOpt);
                if (error)
                    return "SSHOpt." + error;
            }
            if (message.resultID != null && message.hasOwnProperty("resultID"))
                if (!$util.isString(message.resultID))
                    return "resultID: string expected";
            return null;
        };

        /**
         * Creates a Mount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Mount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Mount} Mount
         */
        Mount.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Mount)
                return object;
            let message = new $root.pb.Mount();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            if (object.selector != null)
                message.selector = String(object.selector);
            if (object.dest != null)
                message.dest = String(object.dest);
            if (object.output != null)
                if ($util.Long)
                    (message.output = $util.Long.fromValue(object.output)).unsigned = false;
                else if (typeof object.output === "string")
                    message.output = parseInt(object.output, 10);
                else if (typeof object.output === "number")
                    message.output = object.output;
                else if (typeof object.output === "object")
                    message.output = new $util.LongBits(object.output.low >>> 0, object.output.high >>> 0).toNumber();
            if (object.readonly != null)
                message.readonly = Boolean(object.readonly);
            switch (object.mountType) {
            default:
                if (typeof object.mountType === "number") {
                    message.mountType = object.mountType;
                    break;
                }
                break;
            case "BIND":
            case 0:
                message.mountType = 0;
                break;
            case "SECRET":
            case 1:
                message.mountType = 1;
                break;
            case "SSH":
            case 2:
                message.mountType = 2;
                break;
            case "CACHE":
            case 3:
                message.mountType = 3;
                break;
            case "TMPFS":
            case 4:
                message.mountType = 4;
                break;
            }
            if (object.TmpfsOpt != null) {
                if (typeof object.TmpfsOpt !== "object")
                    throw TypeError(".pb.Mount.TmpfsOpt: object expected");
                message.TmpfsOpt = $root.pb.TmpfsOpt.fromObject(object.TmpfsOpt);
            }
            if (object.cacheOpt != null) {
                if (typeof object.cacheOpt !== "object")
                    throw TypeError(".pb.Mount.cacheOpt: object expected");
                message.cacheOpt = $root.pb.CacheOpt.fromObject(object.cacheOpt);
            }
            if (object.secretOpt != null) {
                if (typeof object.secretOpt !== "object")
                    throw TypeError(".pb.Mount.secretOpt: object expected");
                message.secretOpt = $root.pb.SecretOpt.fromObject(object.secretOpt);
            }
            if (object.SSHOpt != null) {
                if (typeof object.SSHOpt !== "object")
                    throw TypeError(".pb.Mount.SSHOpt: object expected");
                message.SSHOpt = $root.pb.SSHOpt.fromObject(object.SSHOpt);
            }
            if (object.resultID != null)
                message.resultID = String(object.resultID);
            return message;
        };

        /**
         * Creates a plain object from a Mount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Mount
         * @static
         * @param {pb.Mount} message Mount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
                object.selector = "";
                object.dest = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.output = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.output = options.longs === String ? "0" : 0;
                object.readonly = false;
                object.mountType = options.enums === String ? "BIND" : 0;
                object.TmpfsOpt = null;
                object.cacheOpt = null;
                object.secretOpt = null;
                object.SSHOpt = null;
                object.resultID = "";
            }
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            if (message.selector != null && message.hasOwnProperty("selector"))
                object.selector = message.selector;
            if (message.dest != null && message.hasOwnProperty("dest"))
                object.dest = message.dest;
            if (message.output != null && message.hasOwnProperty("output"))
                if (typeof message.output === "number")
                    object.output = options.longs === String ? String(message.output) : message.output;
                else
                    object.output = options.longs === String ? $util.Long.prototype.toString.call(message.output) : options.longs === Number ? new $util.LongBits(message.output.low >>> 0, message.output.high >>> 0).toNumber() : message.output;
            if (message.readonly != null && message.hasOwnProperty("readonly"))
                object.readonly = message.readonly;
            if (message.mountType != null && message.hasOwnProperty("mountType"))
                object.mountType = options.enums === String ? $root.pb.MountType[message.mountType] === undefined ? message.mountType : $root.pb.MountType[message.mountType] : message.mountType;
            if (message.TmpfsOpt != null && message.hasOwnProperty("TmpfsOpt"))
                object.TmpfsOpt = $root.pb.TmpfsOpt.toObject(message.TmpfsOpt, options);
            if (message.cacheOpt != null && message.hasOwnProperty("cacheOpt"))
                object.cacheOpt = $root.pb.CacheOpt.toObject(message.cacheOpt, options);
            if (message.secretOpt != null && message.hasOwnProperty("secretOpt"))
                object.secretOpt = $root.pb.SecretOpt.toObject(message.secretOpt, options);
            if (message.SSHOpt != null && message.hasOwnProperty("SSHOpt"))
                object.SSHOpt = $root.pb.SSHOpt.toObject(message.SSHOpt, options);
            if (message.resultID != null && message.hasOwnProperty("resultID"))
                object.resultID = message.resultID;
            return object;
        };

        /**
         * Converts this Mount to JSON.
         * @function toJSON
         * @memberof pb.Mount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Mount
         * @function getTypeUrl
         * @memberof pb.Mount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Mount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Mount";
        };

        return Mount;
    })();

    /**
     * MountType enum.
     * @name pb.MountType
     * @enum {number}
     * @property {number} BIND=0 BIND value
     * @property {number} SECRET=1 SECRET value
     * @property {number} SSH=2 SSH value
     * @property {number} CACHE=3 CACHE value
     * @property {number} TMPFS=4 TMPFS value
     */
    pb.MountType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BIND"] = 0;
        values[valuesById[1] = "SECRET"] = 1;
        values[valuesById[2] = "SSH"] = 2;
        values[valuesById[3] = "CACHE"] = 3;
        values[valuesById[4] = "TMPFS"] = 4;
        return values;
    })();

    pb.TmpfsOpt = (function() {

        /**
         * Properties of a TmpfsOpt.
         * @memberof pb
         * @interface ITmpfsOpt
         * @property {number|Long|null} [size] TmpfsOpt size
         */

        /**
         * Constructs a new TmpfsOpt.
         * @memberof pb
         * @classdesc Represents a TmpfsOpt.
         * @implements ITmpfsOpt
         * @constructor
         * @param {pb.ITmpfsOpt=} [properties] Properties to set
         */
        function TmpfsOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TmpfsOpt size.
         * @member {number|Long} size
         * @memberof pb.TmpfsOpt
         * @instance
         */
        TmpfsOpt.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TmpfsOpt instance using the specified properties.
         * @function create
         * @memberof pb.TmpfsOpt
         * @static
         * @param {pb.ITmpfsOpt=} [properties] Properties to set
         * @returns {pb.TmpfsOpt} TmpfsOpt instance
         */
        TmpfsOpt.create = function create(properties) {
            return new TmpfsOpt(properties);
        };

        /**
         * Encodes the specified TmpfsOpt message. Does not implicitly {@link pb.TmpfsOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.TmpfsOpt
         * @static
         * @param {pb.ITmpfsOpt} message TmpfsOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TmpfsOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.size);
            return writer;
        };

        /**
         * Encodes the specified TmpfsOpt message, length delimited. Does not implicitly {@link pb.TmpfsOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.TmpfsOpt
         * @static
         * @param {pb.ITmpfsOpt} message TmpfsOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TmpfsOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TmpfsOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.TmpfsOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.TmpfsOpt} TmpfsOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TmpfsOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.TmpfsOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.size = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TmpfsOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.TmpfsOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.TmpfsOpt} TmpfsOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TmpfsOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TmpfsOpt message.
         * @function verify
         * @memberof pb.TmpfsOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TmpfsOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            return null;
        };

        /**
         * Creates a TmpfsOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.TmpfsOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.TmpfsOpt} TmpfsOpt
         */
        TmpfsOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.TmpfsOpt)
                return object;
            let message = new $root.pb.TmpfsOpt();
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TmpfsOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.TmpfsOpt
         * @static
         * @param {pb.TmpfsOpt} message TmpfsOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TmpfsOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
            return object;
        };

        /**
         * Converts this TmpfsOpt to JSON.
         * @function toJSON
         * @memberof pb.TmpfsOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TmpfsOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TmpfsOpt
         * @function getTypeUrl
         * @memberof pb.TmpfsOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TmpfsOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.TmpfsOpt";
        };

        return TmpfsOpt;
    })();

    pb.CacheOpt = (function() {

        /**
         * Properties of a CacheOpt.
         * @memberof pb
         * @interface ICacheOpt
         * @property {string|null} [ID] CacheOpt ID
         * @property {pb.CacheSharingOpt|null} [sharing] CacheOpt sharing
         */

        /**
         * Constructs a new CacheOpt.
         * @memberof pb
         * @classdesc Represents a CacheOpt.
         * @implements ICacheOpt
         * @constructor
         * @param {pb.ICacheOpt=} [properties] Properties to set
         */
        function CacheOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CacheOpt ID.
         * @member {string} ID
         * @memberof pb.CacheOpt
         * @instance
         */
        CacheOpt.prototype.ID = "";

        /**
         * CacheOpt sharing.
         * @member {pb.CacheSharingOpt} sharing
         * @memberof pb.CacheOpt
         * @instance
         */
        CacheOpt.prototype.sharing = 0;

        /**
         * Creates a new CacheOpt instance using the specified properties.
         * @function create
         * @memberof pb.CacheOpt
         * @static
         * @param {pb.ICacheOpt=} [properties] Properties to set
         * @returns {pb.CacheOpt} CacheOpt instance
         */
        CacheOpt.create = function create(properties) {
            return new CacheOpt(properties);
        };

        /**
         * Encodes the specified CacheOpt message. Does not implicitly {@link pb.CacheOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.CacheOpt
         * @static
         * @param {pb.ICacheOpt} message CacheOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ID);
            if (message.sharing != null && Object.hasOwnProperty.call(message, "sharing"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sharing);
            return writer;
        };

        /**
         * Encodes the specified CacheOpt message, length delimited. Does not implicitly {@link pb.CacheOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.CacheOpt
         * @static
         * @param {pb.ICacheOpt} message CacheOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CacheOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.CacheOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.CacheOpt} CacheOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.CacheOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.string();
                        break;
                    }
                case 2: {
                        message.sharing = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CacheOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.CacheOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.CacheOpt} CacheOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CacheOpt message.
         * @function verify
         * @memberof pb.CacheOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CacheOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isString(message.ID))
                    return "ID: string expected";
            if (message.sharing != null && message.hasOwnProperty("sharing"))
                switch (message.sharing) {
                default:
                    return "sharing: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CacheOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.CacheOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.CacheOpt} CacheOpt
         */
        CacheOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.CacheOpt)
                return object;
            let message = new $root.pb.CacheOpt();
            if (object.ID != null)
                message.ID = String(object.ID);
            switch (object.sharing) {
            default:
                if (typeof object.sharing === "number") {
                    message.sharing = object.sharing;
                    break;
                }
                break;
            case "SHARED":
            case 0:
                message.sharing = 0;
                break;
            case "PRIVATE":
            case 1:
                message.sharing = 1;
                break;
            case "LOCKED":
            case 2:
                message.sharing = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CacheOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.CacheOpt
         * @static
         * @param {pb.CacheOpt} message CacheOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CacheOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ID = "";
                object.sharing = options.enums === String ? "SHARED" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.sharing != null && message.hasOwnProperty("sharing"))
                object.sharing = options.enums === String ? $root.pb.CacheSharingOpt[message.sharing] === undefined ? message.sharing : $root.pb.CacheSharingOpt[message.sharing] : message.sharing;
            return object;
        };

        /**
         * Converts this CacheOpt to JSON.
         * @function toJSON
         * @memberof pb.CacheOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CacheOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CacheOpt
         * @function getTypeUrl
         * @memberof pb.CacheOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CacheOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.CacheOpt";
        };

        return CacheOpt;
    })();

    /**
     * CacheSharingOpt enum.
     * @name pb.CacheSharingOpt
     * @enum {number}
     * @property {number} SHARED=0 SHARED value
     * @property {number} PRIVATE=1 PRIVATE value
     * @property {number} LOCKED=2 LOCKED value
     */
    pb.CacheSharingOpt = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SHARED"] = 0;
        values[valuesById[1] = "PRIVATE"] = 1;
        values[valuesById[2] = "LOCKED"] = 2;
        return values;
    })();

    pb.SecretOpt = (function() {

        /**
         * Properties of a SecretOpt.
         * @memberof pb
         * @interface ISecretOpt
         * @property {string|null} [ID] SecretOpt ID
         * @property {number|null} [uid] SecretOpt uid
         * @property {number|null} [gid] SecretOpt gid
         * @property {number|null} [mode] SecretOpt mode
         * @property {boolean|null} [optional] SecretOpt optional
         */

        /**
         * Constructs a new SecretOpt.
         * @memberof pb
         * @classdesc Represents a SecretOpt.
         * @implements ISecretOpt
         * @constructor
         * @param {pb.ISecretOpt=} [properties] Properties to set
         */
        function SecretOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SecretOpt ID.
         * @member {string} ID
         * @memberof pb.SecretOpt
         * @instance
         */
        SecretOpt.prototype.ID = "";

        /**
         * SecretOpt uid.
         * @member {number} uid
         * @memberof pb.SecretOpt
         * @instance
         */
        SecretOpt.prototype.uid = 0;

        /**
         * SecretOpt gid.
         * @member {number} gid
         * @memberof pb.SecretOpt
         * @instance
         */
        SecretOpt.prototype.gid = 0;

        /**
         * SecretOpt mode.
         * @member {number} mode
         * @memberof pb.SecretOpt
         * @instance
         */
        SecretOpt.prototype.mode = 0;

        /**
         * SecretOpt optional.
         * @member {boolean} optional
         * @memberof pb.SecretOpt
         * @instance
         */
        SecretOpt.prototype.optional = false;

        /**
         * Creates a new SecretOpt instance using the specified properties.
         * @function create
         * @memberof pb.SecretOpt
         * @static
         * @param {pb.ISecretOpt=} [properties] Properties to set
         * @returns {pb.SecretOpt} SecretOpt instance
         */
        SecretOpt.create = function create(properties) {
            return new SecretOpt(properties);
        };

        /**
         * Encodes the specified SecretOpt message. Does not implicitly {@link pb.SecretOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.SecretOpt
         * @static
         * @param {pb.ISecretOpt} message SecretOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ID);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.gid);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.mode);
            if (message.optional != null && Object.hasOwnProperty.call(message, "optional"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.optional);
            return writer;
        };

        /**
         * Encodes the specified SecretOpt message, length delimited. Does not implicitly {@link pb.SecretOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SecretOpt
         * @static
         * @param {pb.ISecretOpt} message SecretOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SecretOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SecretOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SecretOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SecretOpt} SecretOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SecretOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.gid = reader.uint32();
                        break;
                    }
                case 4: {
                        message.mode = reader.uint32();
                        break;
                    }
                case 5: {
                        message.optional = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SecretOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SecretOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SecretOpt} SecretOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SecretOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SecretOpt message.
         * @function verify
         * @memberof pb.SecretOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SecretOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isString(message.ID))
                    return "ID: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isInteger(message.gid))
                    return "gid: integer expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.optional != null && message.hasOwnProperty("optional"))
                if (typeof message.optional !== "boolean")
                    return "optional: boolean expected";
            return null;
        };

        /**
         * Creates a SecretOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SecretOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SecretOpt} SecretOpt
         */
        SecretOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SecretOpt)
                return object;
            let message = new $root.pb.SecretOpt();
            if (object.ID != null)
                message.ID = String(object.ID);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.gid != null)
                message.gid = object.gid >>> 0;
            if (object.mode != null)
                message.mode = object.mode >>> 0;
            if (object.optional != null)
                message.optional = Boolean(object.optional);
            return message;
        };

        /**
         * Creates a plain object from a SecretOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SecretOpt
         * @static
         * @param {pb.SecretOpt} message SecretOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SecretOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ID = "";
                object.uid = 0;
                object.gid = 0;
                object.mode = 0;
                object.optional = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.gid != null && message.hasOwnProperty("gid"))
                object.gid = message.gid;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.optional != null && message.hasOwnProperty("optional"))
                object.optional = message.optional;
            return object;
        };

        /**
         * Converts this SecretOpt to JSON.
         * @function toJSON
         * @memberof pb.SecretOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SecretOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SecretOpt
         * @function getTypeUrl
         * @memberof pb.SecretOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SecretOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SecretOpt";
        };

        return SecretOpt;
    })();

    pb.SSHOpt = (function() {

        /**
         * Properties of a SSHOpt.
         * @memberof pb
         * @interface ISSHOpt
         * @property {string|null} [ID] SSHOpt ID
         * @property {number|null} [uid] SSHOpt uid
         * @property {number|null} [gid] SSHOpt gid
         * @property {number|null} [mode] SSHOpt mode
         * @property {boolean|null} [optional] SSHOpt optional
         */

        /**
         * Constructs a new SSHOpt.
         * @memberof pb
         * @classdesc Represents a SSHOpt.
         * @implements ISSHOpt
         * @constructor
         * @param {pb.ISSHOpt=} [properties] Properties to set
         */
        function SSHOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SSHOpt ID.
         * @member {string} ID
         * @memberof pb.SSHOpt
         * @instance
         */
        SSHOpt.prototype.ID = "";

        /**
         * SSHOpt uid.
         * @member {number} uid
         * @memberof pb.SSHOpt
         * @instance
         */
        SSHOpt.prototype.uid = 0;

        /**
         * SSHOpt gid.
         * @member {number} gid
         * @memberof pb.SSHOpt
         * @instance
         */
        SSHOpt.prototype.gid = 0;

        /**
         * SSHOpt mode.
         * @member {number} mode
         * @memberof pb.SSHOpt
         * @instance
         */
        SSHOpt.prototype.mode = 0;

        /**
         * SSHOpt optional.
         * @member {boolean} optional
         * @memberof pb.SSHOpt
         * @instance
         */
        SSHOpt.prototype.optional = false;

        /**
         * Creates a new SSHOpt instance using the specified properties.
         * @function create
         * @memberof pb.SSHOpt
         * @static
         * @param {pb.ISSHOpt=} [properties] Properties to set
         * @returns {pb.SSHOpt} SSHOpt instance
         */
        SSHOpt.create = function create(properties) {
            return new SSHOpt(properties);
        };

        /**
         * Encodes the specified SSHOpt message. Does not implicitly {@link pb.SSHOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.SSHOpt
         * @static
         * @param {pb.ISSHOpt} message SSHOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSHOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ID);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.gid != null && Object.hasOwnProperty.call(message, "gid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.gid);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.mode);
            if (message.optional != null && Object.hasOwnProperty.call(message, "optional"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.optional);
            return writer;
        };

        /**
         * Encodes the specified SSHOpt message, length delimited. Does not implicitly {@link pb.SSHOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SSHOpt
         * @static
         * @param {pb.ISSHOpt} message SSHOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSHOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SSHOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SSHOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SSHOpt} SSHOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSHOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SSHOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ID = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.uint32();
                        break;
                    }
                case 3: {
                        message.gid = reader.uint32();
                        break;
                    }
                case 4: {
                        message.mode = reader.uint32();
                        break;
                    }
                case 5: {
                        message.optional = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SSHOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SSHOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SSHOpt} SSHOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSHOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SSHOpt message.
         * @function verify
         * @memberof pb.SSHOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SSHOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isString(message.ID))
                    return "ID: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isInteger(message.gid))
                    return "gid: integer expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.optional != null && message.hasOwnProperty("optional"))
                if (typeof message.optional !== "boolean")
                    return "optional: boolean expected";
            return null;
        };

        /**
         * Creates a SSHOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SSHOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SSHOpt} SSHOpt
         */
        SSHOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SSHOpt)
                return object;
            let message = new $root.pb.SSHOpt();
            if (object.ID != null)
                message.ID = String(object.ID);
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.gid != null)
                message.gid = object.gid >>> 0;
            if (object.mode != null)
                message.mode = object.mode >>> 0;
            if (object.optional != null)
                message.optional = Boolean(object.optional);
            return message;
        };

        /**
         * Creates a plain object from a SSHOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SSHOpt
         * @static
         * @param {pb.SSHOpt} message SSHOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SSHOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ID = "";
                object.uid = 0;
                object.gid = 0;
                object.mode = 0;
                object.optional = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.gid != null && message.hasOwnProperty("gid"))
                object.gid = message.gid;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.optional != null && message.hasOwnProperty("optional"))
                object.optional = message.optional;
            return object;
        };

        /**
         * Converts this SSHOpt to JSON.
         * @function toJSON
         * @memberof pb.SSHOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SSHOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SSHOpt
         * @function getTypeUrl
         * @memberof pb.SSHOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SSHOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SSHOpt";
        };

        return SSHOpt;
    })();

    pb.SourceOp = (function() {

        /**
         * Properties of a SourceOp.
         * @memberof pb
         * @interface ISourceOp
         * @property {string|null} [identifier] SourceOp identifier
         * @property {Object.<string,string>|null} [attrs] SourceOp attrs
         */

        /**
         * Constructs a new SourceOp.
         * @memberof pb
         * @classdesc Represents a SourceOp.
         * @implements ISourceOp
         * @constructor
         * @param {pb.ISourceOp=} [properties] Properties to set
         */
        function SourceOp(properties) {
            this.attrs = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceOp identifier.
         * @member {string} identifier
         * @memberof pb.SourceOp
         * @instance
         */
        SourceOp.prototype.identifier = "";

        /**
         * SourceOp attrs.
         * @member {Object.<string,string>} attrs
         * @memberof pb.SourceOp
         * @instance
         */
        SourceOp.prototype.attrs = $util.emptyObject;

        /**
         * Creates a new SourceOp instance using the specified properties.
         * @function create
         * @memberof pb.SourceOp
         * @static
         * @param {pb.ISourceOp=} [properties] Properties to set
         * @returns {pb.SourceOp} SourceOp instance
         */
        SourceOp.create = function create(properties) {
            return new SourceOp(properties);
        };

        /**
         * Encodes the specified SourceOp message. Does not implicitly {@link pb.SourceOp.verify|verify} messages.
         * @function encode
         * @memberof pb.SourceOp
         * @static
         * @param {pb.ISourceOp} message SourceOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
            if (message.attrs != null && Object.hasOwnProperty.call(message, "attrs"))
                for (let keys = Object.keys(message.attrs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attrs[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SourceOp message, length delimited. Does not implicitly {@link pb.SourceOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SourceOp
         * @static
         * @param {pb.ISourceOp} message SourceOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SourceOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SourceOp} SourceOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SourceOp(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.identifier = reader.string();
                        break;
                    }
                case 2: {
                        if (message.attrs === $util.emptyObject)
                            message.attrs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.attrs[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SourceOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SourceOp} SourceOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceOp message.
         * @function verify
         * @memberof pb.SourceOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                if (!$util.isString(message.identifier))
                    return "identifier: string expected";
            if (message.attrs != null && message.hasOwnProperty("attrs")) {
                if (!$util.isObject(message.attrs))
                    return "attrs: object expected";
                let key = Object.keys(message.attrs);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.attrs[key[i]]))
                        return "attrs: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a SourceOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SourceOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SourceOp} SourceOp
         */
        SourceOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SourceOp)
                return object;
            let message = new $root.pb.SourceOp();
            if (object.identifier != null)
                message.identifier = String(object.identifier);
            if (object.attrs) {
                if (typeof object.attrs !== "object")
                    throw TypeError(".pb.SourceOp.attrs: object expected");
                message.attrs = {};
                for (let keys = Object.keys(object.attrs), i = 0; i < keys.length; ++i)
                    message.attrs[keys[i]] = String(object.attrs[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SourceOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SourceOp
         * @static
         * @param {pb.SourceOp} message SourceOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.attrs = {};
            if (options.defaults)
                object.identifier = "";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                object.identifier = message.identifier;
            let keys2;
            if (message.attrs && (keys2 = Object.keys(message.attrs)).length) {
                object.attrs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.attrs[keys2[j]] = message.attrs[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this SourceOp to JSON.
         * @function toJSON
         * @memberof pb.SourceOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SourceOp
         * @function getTypeUrl
         * @memberof pb.SourceOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SourceOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SourceOp";
        };

        return SourceOp;
    })();

    pb.BuildOp = (function() {

        /**
         * Properties of a BuildOp.
         * @memberof pb
         * @interface IBuildOp
         * @property {number|Long|null} [builder] BuildOp builder
         * @property {Object.<string,pb.IBuildInput>|null} [inputs] BuildOp inputs
         * @property {pb.IDefinition|null} [def] BuildOp def
         * @property {Object.<string,string>|null} [attrs] BuildOp attrs
         */

        /**
         * Constructs a new BuildOp.
         * @memberof pb
         * @classdesc Represents a BuildOp.
         * @implements IBuildOp
         * @constructor
         * @param {pb.IBuildOp=} [properties] Properties to set
         */
        function BuildOp(properties) {
            this.inputs = {};
            this.attrs = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildOp builder.
         * @member {number|Long} builder
         * @memberof pb.BuildOp
         * @instance
         */
        BuildOp.prototype.builder = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BuildOp inputs.
         * @member {Object.<string,pb.IBuildInput>} inputs
         * @memberof pb.BuildOp
         * @instance
         */
        BuildOp.prototype.inputs = $util.emptyObject;

        /**
         * BuildOp def.
         * @member {pb.IDefinition|null|undefined} def
         * @memberof pb.BuildOp
         * @instance
         */
        BuildOp.prototype.def = null;

        /**
         * BuildOp attrs.
         * @member {Object.<string,string>} attrs
         * @memberof pb.BuildOp
         * @instance
         */
        BuildOp.prototype.attrs = $util.emptyObject;

        /**
         * Creates a new BuildOp instance using the specified properties.
         * @function create
         * @memberof pb.BuildOp
         * @static
         * @param {pb.IBuildOp=} [properties] Properties to set
         * @returns {pb.BuildOp} BuildOp instance
         */
        BuildOp.create = function create(properties) {
            return new BuildOp(properties);
        };

        /**
         * Encodes the specified BuildOp message. Does not implicitly {@link pb.BuildOp.verify|verify} messages.
         * @function encode
         * @memberof pb.BuildOp
         * @static
         * @param {pb.IBuildOp} message BuildOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.builder != null && Object.hasOwnProperty.call(message, "builder"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.builder);
            if (message.inputs != null && Object.hasOwnProperty.call(message, "inputs"))
                for (let keys = Object.keys(message.inputs), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.BuildInput.encode(message.inputs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.def != null && Object.hasOwnProperty.call(message, "def"))
                $root.pb.Definition.encode(message.def, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.attrs != null && Object.hasOwnProperty.call(message, "attrs"))
                for (let keys = Object.keys(message.attrs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attrs[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BuildOp message, length delimited. Does not implicitly {@link pb.BuildOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.BuildOp
         * @static
         * @param {pb.IBuildOp} message BuildOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuildOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BuildOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.BuildOp} BuildOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.BuildOp(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.builder = reader.int64();
                        break;
                    }
                case 2: {
                        if (message.inputs === $util.emptyObject)
                            message.inputs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.pb.BuildInput.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.inputs[key] = value;
                        break;
                    }
                case 3: {
                        message.def = $root.pb.Definition.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (message.attrs === $util.emptyObject)
                            message.attrs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.attrs[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuildOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.BuildOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.BuildOp} BuildOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuildOp message.
         * @function verify
         * @memberof pb.BuildOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuildOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.builder != null && message.hasOwnProperty("builder"))
                if (!$util.isInteger(message.builder) && !(message.builder && $util.isInteger(message.builder.low) && $util.isInteger(message.builder.high)))
                    return "builder: integer|Long expected";
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                if (!$util.isObject(message.inputs))
                    return "inputs: object expected";
                let key = Object.keys(message.inputs);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.pb.BuildInput.verify(message.inputs[key[i]]);
                    if (error)
                        return "inputs." + error;
                }
            }
            if (message.def != null && message.hasOwnProperty("def")) {
                let error = $root.pb.Definition.verify(message.def);
                if (error)
                    return "def." + error;
            }
            if (message.attrs != null && message.hasOwnProperty("attrs")) {
                if (!$util.isObject(message.attrs))
                    return "attrs: object expected";
                let key = Object.keys(message.attrs);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.attrs[key[i]]))
                        return "attrs: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a BuildOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.BuildOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.BuildOp} BuildOp
         */
        BuildOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.BuildOp)
                return object;
            let message = new $root.pb.BuildOp();
            if (object.builder != null)
                if ($util.Long)
                    (message.builder = $util.Long.fromValue(object.builder)).unsigned = false;
                else if (typeof object.builder === "string")
                    message.builder = parseInt(object.builder, 10);
                else if (typeof object.builder === "number")
                    message.builder = object.builder;
                else if (typeof object.builder === "object")
                    message.builder = new $util.LongBits(object.builder.low >>> 0, object.builder.high >>> 0).toNumber();
            if (object.inputs) {
                if (typeof object.inputs !== "object")
                    throw TypeError(".pb.BuildOp.inputs: object expected");
                message.inputs = {};
                for (let keys = Object.keys(object.inputs), i = 0; i < keys.length; ++i) {
                    if (typeof object.inputs[keys[i]] !== "object")
                        throw TypeError(".pb.BuildOp.inputs: object expected");
                    message.inputs[keys[i]] = $root.pb.BuildInput.fromObject(object.inputs[keys[i]]);
                }
            }
            if (object.def != null) {
                if (typeof object.def !== "object")
                    throw TypeError(".pb.BuildOp.def: object expected");
                message.def = $root.pb.Definition.fromObject(object.def);
            }
            if (object.attrs) {
                if (typeof object.attrs !== "object")
                    throw TypeError(".pb.BuildOp.attrs: object expected");
                message.attrs = {};
                for (let keys = Object.keys(object.attrs), i = 0; i < keys.length; ++i)
                    message.attrs[keys[i]] = String(object.attrs[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BuildOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.BuildOp
         * @static
         * @param {pb.BuildOp} message BuildOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults) {
                object.inputs = {};
                object.attrs = {};
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.builder = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.builder = options.longs === String ? "0" : 0;
                object.def = null;
            }
            if (message.builder != null && message.hasOwnProperty("builder"))
                if (typeof message.builder === "number")
                    object.builder = options.longs === String ? String(message.builder) : message.builder;
                else
                    object.builder = options.longs === String ? $util.Long.prototype.toString.call(message.builder) : options.longs === Number ? new $util.LongBits(message.builder.low >>> 0, message.builder.high >>> 0).toNumber() : message.builder;
            let keys2;
            if (message.inputs && (keys2 = Object.keys(message.inputs)).length) {
                object.inputs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.inputs[keys2[j]] = $root.pb.BuildInput.toObject(message.inputs[keys2[j]], options);
            }
            if (message.def != null && message.hasOwnProperty("def"))
                object.def = $root.pb.Definition.toObject(message.def, options);
            if (message.attrs && (keys2 = Object.keys(message.attrs)).length) {
                object.attrs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.attrs[keys2[j]] = message.attrs[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this BuildOp to JSON.
         * @function toJSON
         * @memberof pb.BuildOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuildOp
         * @function getTypeUrl
         * @memberof pb.BuildOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuildOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.BuildOp";
        };

        return BuildOp;
    })();

    pb.BuildInput = (function() {

        /**
         * Properties of a BuildInput.
         * @memberof pb
         * @interface IBuildInput
         * @property {number|Long|null} [input] BuildInput input
         */

        /**
         * Constructs a new BuildInput.
         * @memberof pb
         * @classdesc Represents a BuildInput.
         * @implements IBuildInput
         * @constructor
         * @param {pb.IBuildInput=} [properties] Properties to set
         */
        function BuildInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildInput input.
         * @member {number|Long} input
         * @memberof pb.BuildInput
         * @instance
         */
        BuildInput.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BuildInput instance using the specified properties.
         * @function create
         * @memberof pb.BuildInput
         * @static
         * @param {pb.IBuildInput=} [properties] Properties to set
         * @returns {pb.BuildInput} BuildInput instance
         */
        BuildInput.create = function create(properties) {
            return new BuildInput(properties);
        };

        /**
         * Encodes the specified BuildInput message. Does not implicitly {@link pb.BuildInput.verify|verify} messages.
         * @function encode
         * @memberof pb.BuildInput
         * @static
         * @param {pb.IBuildInput} message BuildInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            return writer;
        };

        /**
         * Encodes the specified BuildInput message, length delimited. Does not implicitly {@link pb.BuildInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.BuildInput
         * @static
         * @param {pb.IBuildInput} message BuildInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuildInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.BuildInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.BuildInput} BuildInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.BuildInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuildInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.BuildInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.BuildInput} BuildInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuildInput message.
         * @function verify
         * @memberof pb.BuildInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuildInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            return null;
        };

        /**
         * Creates a BuildInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.BuildInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.BuildInput} BuildInput
         */
        BuildInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.BuildInput)
                return object;
            let message = new $root.pb.BuildInput();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BuildInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.BuildInput
         * @static
         * @param {pb.BuildInput} message BuildInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            return object;
        };

        /**
         * Converts this BuildInput to JSON.
         * @function toJSON
         * @memberof pb.BuildInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BuildInput
         * @function getTypeUrl
         * @memberof pb.BuildInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BuildInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.BuildInput";
        };

        return BuildInput;
    })();

    pb.OpMetadata = (function() {

        /**
         * Properties of an OpMetadata.
         * @memberof pb
         * @interface IOpMetadata
         * @property {boolean|null} [ignoreCache] OpMetadata ignoreCache
         * @property {Object.<string,string>|null} [description] OpMetadata description
         * @property {pb.IExportCache|null} [exportCache] OpMetadata exportCache
         * @property {Object.<string,boolean>|null} [caps] OpMetadata caps
         * @property {pb.IProgressGroup|null} [progressGroup] OpMetadata progressGroup
         */

        /**
         * Constructs a new OpMetadata.
         * @memberof pb
         * @classdesc Represents an OpMetadata.
         * @implements IOpMetadata
         * @constructor
         * @param {pb.IOpMetadata=} [properties] Properties to set
         */
        function OpMetadata(properties) {
            this.description = {};
            this.caps = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpMetadata ignoreCache.
         * @member {boolean} ignoreCache
         * @memberof pb.OpMetadata
         * @instance
         */
        OpMetadata.prototype.ignoreCache = false;

        /**
         * OpMetadata description.
         * @member {Object.<string,string>} description
         * @memberof pb.OpMetadata
         * @instance
         */
        OpMetadata.prototype.description = $util.emptyObject;

        /**
         * OpMetadata exportCache.
         * @member {pb.IExportCache|null|undefined} exportCache
         * @memberof pb.OpMetadata
         * @instance
         */
        OpMetadata.prototype.exportCache = null;

        /**
         * OpMetadata caps.
         * @member {Object.<string,boolean>} caps
         * @memberof pb.OpMetadata
         * @instance
         */
        OpMetadata.prototype.caps = $util.emptyObject;

        /**
         * OpMetadata progressGroup.
         * @member {pb.IProgressGroup|null|undefined} progressGroup
         * @memberof pb.OpMetadata
         * @instance
         */
        OpMetadata.prototype.progressGroup = null;

        /**
         * Creates a new OpMetadata instance using the specified properties.
         * @function create
         * @memberof pb.OpMetadata
         * @static
         * @param {pb.IOpMetadata=} [properties] Properties to set
         * @returns {pb.OpMetadata} OpMetadata instance
         */
        OpMetadata.create = function create(properties) {
            return new OpMetadata(properties);
        };

        /**
         * Encodes the specified OpMetadata message. Does not implicitly {@link pb.OpMetadata.verify|verify} messages.
         * @function encode
         * @memberof pb.OpMetadata
         * @static
         * @param {pb.IOpMetadata} message OpMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ignoreCache != null && Object.hasOwnProperty.call(message, "ignoreCache"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ignoreCache);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                for (let keys = Object.keys(message.description), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.description[keys[i]]).ldelim();
            if (message.exportCache != null && Object.hasOwnProperty.call(message, "exportCache"))
                $root.pb.ExportCache.encode(message.exportCache, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.caps != null && Object.hasOwnProperty.call(message, "caps"))
                for (let keys = Object.keys(message.caps), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.caps[keys[i]]).ldelim();
            if (message.progressGroup != null && Object.hasOwnProperty.call(message, "progressGroup"))
                $root.pb.ProgressGroup.encode(message.progressGroup, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OpMetadata message, length delimited. Does not implicitly {@link pb.OpMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.OpMetadata
         * @static
         * @param {pb.IOpMetadata} message OpMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof pb.OpMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.OpMetadata} OpMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.OpMetadata(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ignoreCache = reader.bool();
                        break;
                    }
                case 2: {
                        if (message.description === $util.emptyObject)
                            message.description = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.description[key] = value;
                        break;
                    }
                case 4: {
                        message.exportCache = $root.pb.ExportCache.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (message.caps === $util.emptyObject)
                            message.caps = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = false;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.bool();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.caps[key] = value;
                        break;
                    }
                case 6: {
                        message.progressGroup = $root.pb.ProgressGroup.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.OpMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.OpMetadata} OpMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpMetadata message.
         * @function verify
         * @memberof pb.OpMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ignoreCache != null && message.hasOwnProperty("ignoreCache"))
                if (typeof message.ignoreCache !== "boolean")
                    return "ignoreCache: boolean expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                if (!$util.isObject(message.description))
                    return "description: object expected";
                let key = Object.keys(message.description);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.description[key[i]]))
                        return "description: string{k:string} expected";
            }
            if (message.exportCache != null && message.hasOwnProperty("exportCache")) {
                let error = $root.pb.ExportCache.verify(message.exportCache);
                if (error)
                    return "exportCache." + error;
            }
            if (message.caps != null && message.hasOwnProperty("caps")) {
                if (!$util.isObject(message.caps))
                    return "caps: object expected";
                let key = Object.keys(message.caps);
                for (let i = 0; i < key.length; ++i)
                    if (typeof message.caps[key[i]] !== "boolean")
                        return "caps: boolean{k:string} expected";
            }
            if (message.progressGroup != null && message.hasOwnProperty("progressGroup")) {
                let error = $root.pb.ProgressGroup.verify(message.progressGroup);
                if (error)
                    return "progressGroup." + error;
            }
            return null;
        };

        /**
         * Creates an OpMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.OpMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.OpMetadata} OpMetadata
         */
        OpMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.OpMetadata)
                return object;
            let message = new $root.pb.OpMetadata();
            if (object.ignoreCache != null)
                message.ignoreCache = Boolean(object.ignoreCache);
            if (object.description) {
                if (typeof object.description !== "object")
                    throw TypeError(".pb.OpMetadata.description: object expected");
                message.description = {};
                for (let keys = Object.keys(object.description), i = 0; i < keys.length; ++i)
                    message.description[keys[i]] = String(object.description[keys[i]]);
            }
            if (object.exportCache != null) {
                if (typeof object.exportCache !== "object")
                    throw TypeError(".pb.OpMetadata.exportCache: object expected");
                message.exportCache = $root.pb.ExportCache.fromObject(object.exportCache);
            }
            if (object.caps) {
                if (typeof object.caps !== "object")
                    throw TypeError(".pb.OpMetadata.caps: object expected");
                message.caps = {};
                for (let keys = Object.keys(object.caps), i = 0; i < keys.length; ++i)
                    message.caps[keys[i]] = Boolean(object.caps[keys[i]]);
            }
            if (object.progressGroup != null) {
                if (typeof object.progressGroup !== "object")
                    throw TypeError(".pb.OpMetadata.progressGroup: object expected");
                message.progressGroup = $root.pb.ProgressGroup.fromObject(object.progressGroup);
            }
            return message;
        };

        /**
         * Creates a plain object from an OpMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.OpMetadata
         * @static
         * @param {pb.OpMetadata} message OpMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults) {
                object.description = {};
                object.caps = {};
            }
            if (options.defaults) {
                object.ignoreCache = false;
                object.exportCache = null;
                object.progressGroup = null;
            }
            if (message.ignoreCache != null && message.hasOwnProperty("ignoreCache"))
                object.ignoreCache = message.ignoreCache;
            let keys2;
            if (message.description && (keys2 = Object.keys(message.description)).length) {
                object.description = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.description[keys2[j]] = message.description[keys2[j]];
            }
            if (message.exportCache != null && message.hasOwnProperty("exportCache"))
                object.exportCache = $root.pb.ExportCache.toObject(message.exportCache, options);
            if (message.caps && (keys2 = Object.keys(message.caps)).length) {
                object.caps = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.caps[keys2[j]] = message.caps[keys2[j]];
            }
            if (message.progressGroup != null && message.hasOwnProperty("progressGroup"))
                object.progressGroup = $root.pb.ProgressGroup.toObject(message.progressGroup, options);
            return object;
        };

        /**
         * Converts this OpMetadata to JSON.
         * @function toJSON
         * @memberof pb.OpMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OpMetadata
         * @function getTypeUrl
         * @memberof pb.OpMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OpMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.OpMetadata";
        };

        return OpMetadata;
    })();

    pb.Source = (function() {

        /**
         * Properties of a Source.
         * @memberof pb
         * @interface ISource
         * @property {Object.<string,pb.ILocations>|null} [locations] Source locations
         * @property {Array.<pb.ISourceInfo>|null} [infos] Source infos
         */

        /**
         * Constructs a new Source.
         * @memberof pb
         * @classdesc Represents a Source.
         * @implements ISource
         * @constructor
         * @param {pb.ISource=} [properties] Properties to set
         */
        function Source(properties) {
            this.locations = {};
            this.infos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Source locations.
         * @member {Object.<string,pb.ILocations>} locations
         * @memberof pb.Source
         * @instance
         */
        Source.prototype.locations = $util.emptyObject;

        /**
         * Source infos.
         * @member {Array.<pb.ISourceInfo>} infos
         * @memberof pb.Source
         * @instance
         */
        Source.prototype.infos = $util.emptyArray;

        /**
         * Creates a new Source instance using the specified properties.
         * @function create
         * @memberof pb.Source
         * @static
         * @param {pb.ISource=} [properties] Properties to set
         * @returns {pb.Source} Source instance
         */
        Source.create = function create(properties) {
            return new Source(properties);
        };

        /**
         * Encodes the specified Source message. Does not implicitly {@link pb.Source.verify|verify} messages.
         * @function encode
         * @memberof pb.Source
         * @static
         * @param {pb.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locations != null && Object.hasOwnProperty.call(message, "locations"))
                for (let keys = Object.keys(message.locations), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.Locations.encode(message.locations[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.infos != null && message.infos.length)
                for (let i = 0; i < message.infos.length; ++i)
                    $root.pb.SourceInfo.encode(message.infos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link pb.Source.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Source
         * @static
         * @param {pb.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Source message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Source(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.locations === $util.emptyObject)
                            message.locations = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.pb.Locations.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.locations[key] = value;
                        break;
                    }
                case 2: {
                        if (!(message.infos && message.infos.length))
                            message.infos = [];
                        message.infos.push($root.pb.SourceInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Source message.
         * @function verify
         * @memberof pb.Source
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Source.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locations != null && message.hasOwnProperty("locations")) {
                if (!$util.isObject(message.locations))
                    return "locations: object expected";
                let key = Object.keys(message.locations);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.pb.Locations.verify(message.locations[key[i]]);
                    if (error)
                        return "locations." + error;
                }
            }
            if (message.infos != null && message.hasOwnProperty("infos")) {
                if (!Array.isArray(message.infos))
                    return "infos: array expected";
                for (let i = 0; i < message.infos.length; ++i) {
                    let error = $root.pb.SourceInfo.verify(message.infos[i]);
                    if (error)
                        return "infos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Source
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Source} Source
         */
        Source.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Source)
                return object;
            let message = new $root.pb.Source();
            if (object.locations) {
                if (typeof object.locations !== "object")
                    throw TypeError(".pb.Source.locations: object expected");
                message.locations = {};
                for (let keys = Object.keys(object.locations), i = 0; i < keys.length; ++i) {
                    if (typeof object.locations[keys[i]] !== "object")
                        throw TypeError(".pb.Source.locations: object expected");
                    message.locations[keys[i]] = $root.pb.Locations.fromObject(object.locations[keys[i]]);
                }
            }
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".pb.Source.infos: array expected");
                message.infos = [];
                for (let i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".pb.Source.infos: object expected");
                    message.infos[i] = $root.pb.SourceInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Source
         * @static
         * @param {pb.Source} message Source
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Source.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (options.objects || options.defaults)
                object.locations = {};
            let keys2;
            if (message.locations && (keys2 = Object.keys(message.locations)).length) {
                object.locations = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.locations[keys2[j]] = $root.pb.Locations.toObject(message.locations[keys2[j]], options);
            }
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (let j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.pb.SourceInfo.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this Source to JSON.
         * @function toJSON
         * @memberof pb.Source
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Source.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Source
         * @function getTypeUrl
         * @memberof pb.Source
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Source.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Source";
        };

        return Source;
    })();

    pb.Locations = (function() {

        /**
         * Properties of a Locations.
         * @memberof pb
         * @interface ILocations
         * @property {Array.<pb.ILocation>|null} [locations] Locations locations
         */

        /**
         * Constructs a new Locations.
         * @memberof pb
         * @classdesc Represents a Locations.
         * @implements ILocations
         * @constructor
         * @param {pb.ILocations=} [properties] Properties to set
         */
        function Locations(properties) {
            this.locations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Locations locations.
         * @member {Array.<pb.ILocation>} locations
         * @memberof pb.Locations
         * @instance
         */
        Locations.prototype.locations = $util.emptyArray;

        /**
         * Creates a new Locations instance using the specified properties.
         * @function create
         * @memberof pb.Locations
         * @static
         * @param {pb.ILocations=} [properties] Properties to set
         * @returns {pb.Locations} Locations instance
         */
        Locations.create = function create(properties) {
            return new Locations(properties);
        };

        /**
         * Encodes the specified Locations message. Does not implicitly {@link pb.Locations.verify|verify} messages.
         * @function encode
         * @memberof pb.Locations
         * @static
         * @param {pb.ILocations} message Locations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Locations.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locations != null && message.locations.length)
                for (let i = 0; i < message.locations.length; ++i)
                    $root.pb.Location.encode(message.locations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Locations message, length delimited. Does not implicitly {@link pb.Locations.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Locations
         * @static
         * @param {pb.ILocations} message Locations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Locations.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Locations message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Locations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Locations} Locations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Locations.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Locations();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.locations && message.locations.length))
                            message.locations = [];
                        message.locations.push($root.pb.Location.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Locations message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Locations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Locations} Locations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Locations.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Locations message.
         * @function verify
         * @memberof pb.Locations
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Locations.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.locations != null && message.hasOwnProperty("locations")) {
                if (!Array.isArray(message.locations))
                    return "locations: array expected";
                for (let i = 0; i < message.locations.length; ++i) {
                    let error = $root.pb.Location.verify(message.locations[i]);
                    if (error)
                        return "locations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Locations message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Locations
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Locations} Locations
         */
        Locations.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Locations)
                return object;
            let message = new $root.pb.Locations();
            if (object.locations) {
                if (!Array.isArray(object.locations))
                    throw TypeError(".pb.Locations.locations: array expected");
                message.locations = [];
                for (let i = 0; i < object.locations.length; ++i) {
                    if (typeof object.locations[i] !== "object")
                        throw TypeError(".pb.Locations.locations: object expected");
                    message.locations[i] = $root.pb.Location.fromObject(object.locations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Locations message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Locations
         * @static
         * @param {pb.Locations} message Locations
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Locations.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.locations = [];
            if (message.locations && message.locations.length) {
                object.locations = [];
                for (let j = 0; j < message.locations.length; ++j)
                    object.locations[j] = $root.pb.Location.toObject(message.locations[j], options);
            }
            return object;
        };

        /**
         * Converts this Locations to JSON.
         * @function toJSON
         * @memberof pb.Locations
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Locations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Locations
         * @function getTypeUrl
         * @memberof pb.Locations
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Locations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Locations";
        };

        return Locations;
    })();

    pb.SourceInfo = (function() {

        /**
         * Properties of a SourceInfo.
         * @memberof pb
         * @interface ISourceInfo
         * @property {string|null} [filename] SourceInfo filename
         * @property {Uint8Array|null} [data] SourceInfo data
         * @property {pb.IDefinition|null} [definition] SourceInfo definition
         */

        /**
         * Constructs a new SourceInfo.
         * @memberof pb
         * @classdesc Represents a SourceInfo.
         * @implements ISourceInfo
         * @constructor
         * @param {pb.ISourceInfo=} [properties] Properties to set
         */
        function SourceInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SourceInfo filename.
         * @member {string} filename
         * @memberof pb.SourceInfo
         * @instance
         */
        SourceInfo.prototype.filename = "";

        /**
         * SourceInfo data.
         * @member {Uint8Array} data
         * @memberof pb.SourceInfo
         * @instance
         */
        SourceInfo.prototype.data = $util.newBuffer([]);

        /**
         * SourceInfo definition.
         * @member {pb.IDefinition|null|undefined} definition
         * @memberof pb.SourceInfo
         * @instance
         */
        SourceInfo.prototype.definition = null;

        /**
         * Creates a new SourceInfo instance using the specified properties.
         * @function create
         * @memberof pb.SourceInfo
         * @static
         * @param {pb.ISourceInfo=} [properties] Properties to set
         * @returns {pb.SourceInfo} SourceInfo instance
         */
        SourceInfo.create = function create(properties) {
            return new SourceInfo(properties);
        };

        /**
         * Encodes the specified SourceInfo message. Does not implicitly {@link pb.SourceInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.SourceInfo
         * @static
         * @param {pb.ISourceInfo} message SourceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.definition != null && Object.hasOwnProperty.call(message, "definition"))
                $root.pb.Definition.encode(message.definition, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SourceInfo message, length delimited. Does not implicitly {@link pb.SourceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SourceInfo
         * @static
         * @param {pb.ISourceInfo} message SourceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SourceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SourceInfo} SourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SourceInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.filename = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.definition = $root.pb.Definition.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SourceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SourceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SourceInfo} SourceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceInfo message.
         * @function verify
         * @memberof pb.SourceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.definition != null && message.hasOwnProperty("definition")) {
                let error = $root.pb.Definition.verify(message.definition);
                if (error)
                    return "definition." + error;
            }
            return null;
        };

        /**
         * Creates a SourceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SourceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SourceInfo} SourceInfo
         */
        SourceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SourceInfo)
                return object;
            let message = new $root.pb.SourceInfo();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.definition != null) {
                if (typeof object.definition !== "object")
                    throw TypeError(".pb.SourceInfo.definition: object expected");
                message.definition = $root.pb.Definition.fromObject(object.definition);
            }
            return message;
        };

        /**
         * Creates a plain object from a SourceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SourceInfo
         * @static
         * @param {pb.SourceInfo} message SourceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.filename = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.definition = null;
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.definition != null && message.hasOwnProperty("definition"))
                object.definition = $root.pb.Definition.toObject(message.definition, options);
            return object;
        };

        /**
         * Converts this SourceInfo to JSON.
         * @function toJSON
         * @memberof pb.SourceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SourceInfo
         * @function getTypeUrl
         * @memberof pb.SourceInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SourceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.SourceInfo";
        };

        return SourceInfo;
    })();

    pb.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof pb
         * @interface ILocation
         * @property {number|null} [sourceIndex] Location sourceIndex
         * @property {Array.<pb.IRange>|null} [ranges] Location ranges
         */

        /**
         * Constructs a new Location.
         * @memberof pb
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {pb.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            this.ranges = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location sourceIndex.
         * @member {number} sourceIndex
         * @memberof pb.Location
         * @instance
         */
        Location.prototype.sourceIndex = 0;

        /**
         * Location ranges.
         * @member {Array.<pb.IRange>} ranges
         * @memberof pb.Location
         * @instance
         */
        Location.prototype.ranges = $util.emptyArray;

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation=} [properties] Properties to set
         * @returns {pb.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @function encode
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceIndex != null && Object.hasOwnProperty.call(message, "sourceIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceIndex);
            if (message.ranges != null && message.ranges.length)
                for (let i = 0; i < message.ranges.length; ++i)
                    $root.pb.Range.encode(message.ranges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link pb.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Location
         * @static
         * @param {pb.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Location();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceIndex = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.ranges && message.ranges.length))
                            message.ranges = [];
                        message.ranges.push($root.pb.Range.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof pb.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceIndex != null && message.hasOwnProperty("sourceIndex"))
                if (!$util.isInteger(message.sourceIndex))
                    return "sourceIndex: integer expected";
            if (message.ranges != null && message.hasOwnProperty("ranges")) {
                if (!Array.isArray(message.ranges))
                    return "ranges: array expected";
                for (let i = 0; i < message.ranges.length; ++i) {
                    let error = $root.pb.Range.verify(message.ranges[i]);
                    if (error)
                        return "ranges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Location)
                return object;
            let message = new $root.pb.Location();
            if (object.sourceIndex != null)
                message.sourceIndex = object.sourceIndex | 0;
            if (object.ranges) {
                if (!Array.isArray(object.ranges))
                    throw TypeError(".pb.Location.ranges: array expected");
                message.ranges = [];
                for (let i = 0; i < object.ranges.length; ++i) {
                    if (typeof object.ranges[i] !== "object")
                        throw TypeError(".pb.Location.ranges: object expected");
                    message.ranges[i] = $root.pb.Range.fromObject(object.ranges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Location
         * @static
         * @param {pb.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ranges = [];
            if (options.defaults)
                object.sourceIndex = 0;
            if (message.sourceIndex != null && message.hasOwnProperty("sourceIndex"))
                object.sourceIndex = message.sourceIndex;
            if (message.ranges && message.ranges.length) {
                object.ranges = [];
                for (let j = 0; j < message.ranges.length; ++j)
                    object.ranges[j] = $root.pb.Range.toObject(message.ranges[j], options);
            }
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof pb.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Location
         * @function getTypeUrl
         * @memberof pb.Location
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Location";
        };

        return Location;
    })();

    pb.Range = (function() {

        /**
         * Properties of a Range.
         * @memberof pb
         * @interface IRange
         * @property {pb.IPosition|null} [start] Range start
         * @property {pb.IPosition|null} [end] Range end
         */

        /**
         * Constructs a new Range.
         * @memberof pb
         * @classdesc Represents a Range.
         * @implements IRange
         * @constructor
         * @param {pb.IRange=} [properties] Properties to set
         */
        function Range(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Range start.
         * @member {pb.IPosition|null|undefined} start
         * @memberof pb.Range
         * @instance
         */
        Range.prototype.start = null;

        /**
         * Range end.
         * @member {pb.IPosition|null|undefined} end
         * @memberof pb.Range
         * @instance
         */
        Range.prototype.end = null;

        /**
         * Creates a new Range instance using the specified properties.
         * @function create
         * @memberof pb.Range
         * @static
         * @param {pb.IRange=} [properties] Properties to set
         * @returns {pb.Range} Range instance
         */
        Range.create = function create(properties) {
            return new Range(properties);
        };

        /**
         * Encodes the specified Range message. Does not implicitly {@link pb.Range.verify|verify} messages.
         * @function encode
         * @memberof pb.Range
         * @static
         * @param {pb.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                $root.pb.Position.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.pb.Position.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link pb.Range.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Range
         * @static
         * @param {pb.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Range();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = $root.pb.Position.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.end = $root.pb.Position.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Range message.
         * @function verify
         * @memberof pb.Range
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Range.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start")) {
                let error = $root.pb.Position.verify(message.start);
                if (error)
                    return "start." + error;
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                let error = $root.pb.Position.verify(message.end);
                if (error)
                    return "end." + error;
            }
            return null;
        };

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Range
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Range} Range
         */
        Range.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Range)
                return object;
            let message = new $root.pb.Range();
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".pb.Range.start: object expected");
                message.start = $root.pb.Position.fromObject(object.start);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".pb.Range.end: object expected");
                message.end = $root.pb.Position.fromObject(object.end);
            }
            return message;
        };

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Range
         * @static
         * @param {pb.Range} message Range
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Range.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.start = null;
                object.end = null;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = $root.pb.Position.toObject(message.start, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.pb.Position.toObject(message.end, options);
            return object;
        };

        /**
         * Converts this Range to JSON.
         * @function toJSON
         * @memberof pb.Range
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Range.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Range
         * @function getTypeUrl
         * @memberof pb.Range
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Range.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Range";
        };

        return Range;
    })();

    pb.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof pb
         * @interface IPosition
         * @property {number|null} [line] Position line
         * @property {number|null} [character] Position character
         */

        /**
         * Constructs a new Position.
         * @memberof pb
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {pb.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position line.
         * @member {number} line
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.line = 0;

        /**
         * Position character.
         * @member {number} character
         * @memberof pb.Position
         * @instance
         */
        Position.prototype.character = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition=} [properties] Properties to set
         * @returns {pb.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @function encode
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.line);
            if (message.character != null && Object.hasOwnProperty.call(message, "character"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.character);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Position
         * @static
         * @param {pb.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.line = reader.int32();
                        break;
                    }
                case 2: {
                        message.character = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof pb.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.character != null && message.hasOwnProperty("character"))
                if (!$util.isInteger(message.character))
                    return "character: integer expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Position)
                return object;
            let message = new $root.pb.Position();
            if (object.line != null)
                message.line = object.line | 0;
            if (object.character != null)
                message.character = object.character | 0;
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Position
         * @static
         * @param {pb.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.line = 0;
                object.character = 0;
            }
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.character != null && message.hasOwnProperty("character"))
                object.character = message.character;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof pb.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Position
         * @function getTypeUrl
         * @memberof pb.Position
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Position";
        };

        return Position;
    })();

    pb.ExportCache = (function() {

        /**
         * Properties of an ExportCache.
         * @memberof pb
         * @interface IExportCache
         * @property {boolean|null} [Value] ExportCache Value
         */

        /**
         * Constructs a new ExportCache.
         * @memberof pb
         * @classdesc Represents an ExportCache.
         * @implements IExportCache
         * @constructor
         * @param {pb.IExportCache=} [properties] Properties to set
         */
        function ExportCache(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExportCache Value.
         * @member {boolean} Value
         * @memberof pb.ExportCache
         * @instance
         */
        ExportCache.prototype.Value = false;

        /**
         * Creates a new ExportCache instance using the specified properties.
         * @function create
         * @memberof pb.ExportCache
         * @static
         * @param {pb.IExportCache=} [properties] Properties to set
         * @returns {pb.ExportCache} ExportCache instance
         */
        ExportCache.create = function create(properties) {
            return new ExportCache(properties);
        };

        /**
         * Encodes the specified ExportCache message. Does not implicitly {@link pb.ExportCache.verify|verify} messages.
         * @function encode
         * @memberof pb.ExportCache
         * @static
         * @param {pb.IExportCache} message ExportCache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportCache.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Value);
            return writer;
        };

        /**
         * Encodes the specified ExportCache message, length delimited. Does not implicitly {@link pb.ExportCache.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ExportCache
         * @static
         * @param {pb.IExportCache} message ExportCache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExportCache.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExportCache message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ExportCache
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ExportCache} ExportCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportCache.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ExportCache();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Value = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExportCache message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ExportCache
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ExportCache} ExportCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExportCache.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExportCache message.
         * @function verify
         * @memberof pb.ExportCache
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExportCache.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (typeof message.Value !== "boolean")
                    return "Value: boolean expected";
            return null;
        };

        /**
         * Creates an ExportCache message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ExportCache
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ExportCache} ExportCache
         */
        ExportCache.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ExportCache)
                return object;
            let message = new $root.pb.ExportCache();
            if (object.Value != null)
                message.Value = Boolean(object.Value);
            return message;
        };

        /**
         * Creates a plain object from an ExportCache message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ExportCache
         * @static
         * @param {pb.ExportCache} message ExportCache
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExportCache.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.Value = false;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this ExportCache to JSON.
         * @function toJSON
         * @memberof pb.ExportCache
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExportCache.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExportCache
         * @function getTypeUrl
         * @memberof pb.ExportCache
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExportCache.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ExportCache";
        };

        return ExportCache;
    })();

    pb.ProgressGroup = (function() {

        /**
         * Properties of a ProgressGroup.
         * @memberof pb
         * @interface IProgressGroup
         * @property {string|null} [id] ProgressGroup id
         * @property {string|null} [name] ProgressGroup name
         * @property {boolean|null} [weak] ProgressGroup weak
         */

        /**
         * Constructs a new ProgressGroup.
         * @memberof pb
         * @classdesc Represents a ProgressGroup.
         * @implements IProgressGroup
         * @constructor
         * @param {pb.IProgressGroup=} [properties] Properties to set
         */
        function ProgressGroup(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProgressGroup id.
         * @member {string} id
         * @memberof pb.ProgressGroup
         * @instance
         */
        ProgressGroup.prototype.id = "";

        /**
         * ProgressGroup name.
         * @member {string} name
         * @memberof pb.ProgressGroup
         * @instance
         */
        ProgressGroup.prototype.name = "";

        /**
         * ProgressGroup weak.
         * @member {boolean} weak
         * @memberof pb.ProgressGroup
         * @instance
         */
        ProgressGroup.prototype.weak = false;

        /**
         * Creates a new ProgressGroup instance using the specified properties.
         * @function create
         * @memberof pb.ProgressGroup
         * @static
         * @param {pb.IProgressGroup=} [properties] Properties to set
         * @returns {pb.ProgressGroup} ProgressGroup instance
         */
        ProgressGroup.create = function create(properties) {
            return new ProgressGroup(properties);
        };

        /**
         * Encodes the specified ProgressGroup message. Does not implicitly {@link pb.ProgressGroup.verify|verify} messages.
         * @function encode
         * @memberof pb.ProgressGroup
         * @static
         * @param {pb.IProgressGroup} message ProgressGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProgressGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.weak);
            return writer;
        };

        /**
         * Encodes the specified ProgressGroup message, length delimited. Does not implicitly {@link pb.ProgressGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ProgressGroup
         * @static
         * @param {pb.IProgressGroup} message ProgressGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProgressGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProgressGroup message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ProgressGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ProgressGroup} ProgressGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProgressGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ProgressGroup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.weak = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProgressGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ProgressGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ProgressGroup} ProgressGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProgressGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProgressGroup message.
         * @function verify
         * @memberof pb.ProgressGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProgressGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.weak != null && message.hasOwnProperty("weak"))
                if (typeof message.weak !== "boolean")
                    return "weak: boolean expected";
            return null;
        };

        /**
         * Creates a ProgressGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ProgressGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ProgressGroup} ProgressGroup
         */
        ProgressGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ProgressGroup)
                return object;
            let message = new $root.pb.ProgressGroup();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.weak != null)
                message.weak = Boolean(object.weak);
            return message;
        };

        /**
         * Creates a plain object from a ProgressGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ProgressGroup
         * @static
         * @param {pb.ProgressGroup} message ProgressGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProgressGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.weak = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.weak != null && message.hasOwnProperty("weak"))
                object.weak = message.weak;
            return object;
        };

        /**
         * Converts this ProgressGroup to JSON.
         * @function toJSON
         * @memberof pb.ProgressGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProgressGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProgressGroup
         * @function getTypeUrl
         * @memberof pb.ProgressGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProgressGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ProgressGroup";
        };

        return ProgressGroup;
    })();

    pb.ProxyEnv = (function() {

        /**
         * Properties of a ProxyEnv.
         * @memberof pb
         * @interface IProxyEnv
         * @property {string|null} [httpProxy] ProxyEnv httpProxy
         * @property {string|null} [httpsProxy] ProxyEnv httpsProxy
         * @property {string|null} [ftpProxy] ProxyEnv ftpProxy
         * @property {string|null} [noProxy] ProxyEnv noProxy
         * @property {string|null} [allProxy] ProxyEnv allProxy
         */

        /**
         * Constructs a new ProxyEnv.
         * @memberof pb
         * @classdesc Represents a ProxyEnv.
         * @implements IProxyEnv
         * @constructor
         * @param {pb.IProxyEnv=} [properties] Properties to set
         */
        function ProxyEnv(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProxyEnv httpProxy.
         * @member {string} httpProxy
         * @memberof pb.ProxyEnv
         * @instance
         */
        ProxyEnv.prototype.httpProxy = "";

        /**
         * ProxyEnv httpsProxy.
         * @member {string} httpsProxy
         * @memberof pb.ProxyEnv
         * @instance
         */
        ProxyEnv.prototype.httpsProxy = "";

        /**
         * ProxyEnv ftpProxy.
         * @member {string} ftpProxy
         * @memberof pb.ProxyEnv
         * @instance
         */
        ProxyEnv.prototype.ftpProxy = "";

        /**
         * ProxyEnv noProxy.
         * @member {string} noProxy
         * @memberof pb.ProxyEnv
         * @instance
         */
        ProxyEnv.prototype.noProxy = "";

        /**
         * ProxyEnv allProxy.
         * @member {string} allProxy
         * @memberof pb.ProxyEnv
         * @instance
         */
        ProxyEnv.prototype.allProxy = "";

        /**
         * Creates a new ProxyEnv instance using the specified properties.
         * @function create
         * @memberof pb.ProxyEnv
         * @static
         * @param {pb.IProxyEnv=} [properties] Properties to set
         * @returns {pb.ProxyEnv} ProxyEnv instance
         */
        ProxyEnv.create = function create(properties) {
            return new ProxyEnv(properties);
        };

        /**
         * Encodes the specified ProxyEnv message. Does not implicitly {@link pb.ProxyEnv.verify|verify} messages.
         * @function encode
         * @memberof pb.ProxyEnv
         * @static
         * @param {pb.IProxyEnv} message ProxyEnv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyEnv.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.httpProxy != null && Object.hasOwnProperty.call(message, "httpProxy"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.httpProxy);
            if (message.httpsProxy != null && Object.hasOwnProperty.call(message, "httpsProxy"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.httpsProxy);
            if (message.ftpProxy != null && Object.hasOwnProperty.call(message, "ftpProxy"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ftpProxy);
            if (message.noProxy != null && Object.hasOwnProperty.call(message, "noProxy"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.noProxy);
            if (message.allProxy != null && Object.hasOwnProperty.call(message, "allProxy"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.allProxy);
            return writer;
        };

        /**
         * Encodes the specified ProxyEnv message, length delimited. Does not implicitly {@link pb.ProxyEnv.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ProxyEnv
         * @static
         * @param {pb.IProxyEnv} message ProxyEnv message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyEnv.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProxyEnv message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ProxyEnv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ProxyEnv} ProxyEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyEnv.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ProxyEnv();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.httpProxy = reader.string();
                        break;
                    }
                case 2: {
                        message.httpsProxy = reader.string();
                        break;
                    }
                case 3: {
                        message.ftpProxy = reader.string();
                        break;
                    }
                case 4: {
                        message.noProxy = reader.string();
                        break;
                    }
                case 5: {
                        message.allProxy = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProxyEnv message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ProxyEnv
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ProxyEnv} ProxyEnv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyEnv.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProxyEnv message.
         * @function verify
         * @memberof pb.ProxyEnv
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProxyEnv.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.httpProxy != null && message.hasOwnProperty("httpProxy"))
                if (!$util.isString(message.httpProxy))
                    return "httpProxy: string expected";
            if (message.httpsProxy != null && message.hasOwnProperty("httpsProxy"))
                if (!$util.isString(message.httpsProxy))
                    return "httpsProxy: string expected";
            if (message.ftpProxy != null && message.hasOwnProperty("ftpProxy"))
                if (!$util.isString(message.ftpProxy))
                    return "ftpProxy: string expected";
            if (message.noProxy != null && message.hasOwnProperty("noProxy"))
                if (!$util.isString(message.noProxy))
                    return "noProxy: string expected";
            if (message.allProxy != null && message.hasOwnProperty("allProxy"))
                if (!$util.isString(message.allProxy))
                    return "allProxy: string expected";
            return null;
        };

        /**
         * Creates a ProxyEnv message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ProxyEnv
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ProxyEnv} ProxyEnv
         */
        ProxyEnv.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ProxyEnv)
                return object;
            let message = new $root.pb.ProxyEnv();
            if (object.httpProxy != null)
                message.httpProxy = String(object.httpProxy);
            if (object.httpsProxy != null)
                message.httpsProxy = String(object.httpsProxy);
            if (object.ftpProxy != null)
                message.ftpProxy = String(object.ftpProxy);
            if (object.noProxy != null)
                message.noProxy = String(object.noProxy);
            if (object.allProxy != null)
                message.allProxy = String(object.allProxy);
            return message;
        };

        /**
         * Creates a plain object from a ProxyEnv message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ProxyEnv
         * @static
         * @param {pb.ProxyEnv} message ProxyEnv
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProxyEnv.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.httpProxy = "";
                object.httpsProxy = "";
                object.ftpProxy = "";
                object.noProxy = "";
                object.allProxy = "";
            }
            if (message.httpProxy != null && message.hasOwnProperty("httpProxy"))
                object.httpProxy = message.httpProxy;
            if (message.httpsProxy != null && message.hasOwnProperty("httpsProxy"))
                object.httpsProxy = message.httpsProxy;
            if (message.ftpProxy != null && message.hasOwnProperty("ftpProxy"))
                object.ftpProxy = message.ftpProxy;
            if (message.noProxy != null && message.hasOwnProperty("noProxy"))
                object.noProxy = message.noProxy;
            if (message.allProxy != null && message.hasOwnProperty("allProxy"))
                object.allProxy = message.allProxy;
            return object;
        };

        /**
         * Converts this ProxyEnv to JSON.
         * @function toJSON
         * @memberof pb.ProxyEnv
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProxyEnv.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProxyEnv
         * @function getTypeUrl
         * @memberof pb.ProxyEnv
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProxyEnv.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ProxyEnv";
        };

        return ProxyEnv;
    })();

    pb.WorkerConstraints = (function() {

        /**
         * Properties of a WorkerConstraints.
         * @memberof pb
         * @interface IWorkerConstraints
         * @property {Array.<string>|null} [filter] WorkerConstraints filter
         */

        /**
         * Constructs a new WorkerConstraints.
         * @memberof pb
         * @classdesc Represents a WorkerConstraints.
         * @implements IWorkerConstraints
         * @constructor
         * @param {pb.IWorkerConstraints=} [properties] Properties to set
         */
        function WorkerConstraints(properties) {
            this.filter = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkerConstraints filter.
         * @member {Array.<string>} filter
         * @memberof pb.WorkerConstraints
         * @instance
         */
        WorkerConstraints.prototype.filter = $util.emptyArray;

        /**
         * Creates a new WorkerConstraints instance using the specified properties.
         * @function create
         * @memberof pb.WorkerConstraints
         * @static
         * @param {pb.IWorkerConstraints=} [properties] Properties to set
         * @returns {pb.WorkerConstraints} WorkerConstraints instance
         */
        WorkerConstraints.create = function create(properties) {
            return new WorkerConstraints(properties);
        };

        /**
         * Encodes the specified WorkerConstraints message. Does not implicitly {@link pb.WorkerConstraints.verify|verify} messages.
         * @function encode
         * @memberof pb.WorkerConstraints
         * @static
         * @param {pb.IWorkerConstraints} message WorkerConstraints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerConstraints.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filter != null && message.filter.length)
                for (let i = 0; i < message.filter.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filter[i]);
            return writer;
        };

        /**
         * Encodes the specified WorkerConstraints message, length delimited. Does not implicitly {@link pb.WorkerConstraints.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.WorkerConstraints
         * @static
         * @param {pb.IWorkerConstraints} message WorkerConstraints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkerConstraints.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkerConstraints message from the specified reader or buffer.
         * @function decode
         * @memberof pb.WorkerConstraints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.WorkerConstraints} WorkerConstraints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerConstraints.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.WorkerConstraints();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.filter && message.filter.length))
                            message.filter = [];
                        message.filter.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorkerConstraints message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.WorkerConstraints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.WorkerConstraints} WorkerConstraints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkerConstraints.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkerConstraints message.
         * @function verify
         * @memberof pb.WorkerConstraints
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkerConstraints.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filter != null && message.hasOwnProperty("filter")) {
                if (!Array.isArray(message.filter))
                    return "filter: array expected";
                for (let i = 0; i < message.filter.length; ++i)
                    if (!$util.isString(message.filter[i]))
                        return "filter: string[] expected";
            }
            return null;
        };

        /**
         * Creates a WorkerConstraints message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.WorkerConstraints
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.WorkerConstraints} WorkerConstraints
         */
        WorkerConstraints.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.WorkerConstraints)
                return object;
            let message = new $root.pb.WorkerConstraints();
            if (object.filter) {
                if (!Array.isArray(object.filter))
                    throw TypeError(".pb.WorkerConstraints.filter: array expected");
                message.filter = [];
                for (let i = 0; i < object.filter.length; ++i)
                    message.filter[i] = String(object.filter[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a WorkerConstraints message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.WorkerConstraints
         * @static
         * @param {pb.WorkerConstraints} message WorkerConstraints
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkerConstraints.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.filter = [];
            if (message.filter && message.filter.length) {
                object.filter = [];
                for (let j = 0; j < message.filter.length; ++j)
                    object.filter[j] = message.filter[j];
            }
            return object;
        };

        /**
         * Converts this WorkerConstraints to JSON.
         * @function toJSON
         * @memberof pb.WorkerConstraints
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkerConstraints.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorkerConstraints
         * @function getTypeUrl
         * @memberof pb.WorkerConstraints
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorkerConstraints.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.WorkerConstraints";
        };

        return WorkerConstraints;
    })();

    pb.Definition = (function() {

        /**
         * Properties of a Definition.
         * @memberof pb
         * @interface IDefinition
         * @property {Array.<Uint8Array>|null} [def] Definition def
         * @property {Object.<string,pb.IOpMetadata>|null} [metadata] Definition metadata
         * @property {pb.ISource|null} [Source] Definition Source
         */

        /**
         * Constructs a new Definition.
         * @memberof pb
         * @classdesc Represents a Definition.
         * @implements IDefinition
         * @constructor
         * @param {pb.IDefinition=} [properties] Properties to set
         */
        function Definition(properties) {
            this.def = [];
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Definition def.
         * @member {Array.<Uint8Array>} def
         * @memberof pb.Definition
         * @instance
         */
        Definition.prototype.def = $util.emptyArray;

        /**
         * Definition metadata.
         * @member {Object.<string,pb.IOpMetadata>} metadata
         * @memberof pb.Definition
         * @instance
         */
        Definition.prototype.metadata = $util.emptyObject;

        /**
         * Definition Source.
         * @member {pb.ISource|null|undefined} Source
         * @memberof pb.Definition
         * @instance
         */
        Definition.prototype.Source = null;

        /**
         * Creates a new Definition instance using the specified properties.
         * @function create
         * @memberof pb.Definition
         * @static
         * @param {pb.IDefinition=} [properties] Properties to set
         * @returns {pb.Definition} Definition instance
         */
        Definition.create = function create(properties) {
            return new Definition(properties);
        };

        /**
         * Encodes the specified Definition message. Does not implicitly {@link pb.Definition.verify|verify} messages.
         * @function encode
         * @memberof pb.Definition
         * @static
         * @param {pb.IDefinition} message Definition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Definition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.def != null && message.def.length)
                for (let i = 0; i < message.def.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.def[i]);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.OpMetadata.encode(message.metadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.Source != null && Object.hasOwnProperty.call(message, "Source"))
                $root.pb.Source.encode(message.Source, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Definition message, length delimited. Does not implicitly {@link pb.Definition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Definition
         * @static
         * @param {pb.IDefinition} message Definition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Definition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Definition message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Definition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Definition} Definition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Definition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Definition(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.def && message.def.length))
                            message.def = [];
                        message.def.push(reader.bytes());
                        break;
                    }
                case 2: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.pb.OpMetadata.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                case 3: {
                        message.Source = $root.pb.Source.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Definition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Definition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Definition} Definition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Definition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Definition message.
         * @function verify
         * @memberof pb.Definition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Definition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.def != null && message.hasOwnProperty("def")) {
                if (!Array.isArray(message.def))
                    return "def: array expected";
                for (let i = 0; i < message.def.length; ++i)
                    if (!(message.def[i] && typeof message.def[i].length === "number" || $util.isString(message.def[i])))
                        return "def: buffer[] expected";
            }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i) {
                    let error = $root.pb.OpMetadata.verify(message.metadata[key[i]]);
                    if (error)
                        return "metadata." + error;
                }
            }
            if (message.Source != null && message.hasOwnProperty("Source")) {
                let error = $root.pb.Source.verify(message.Source);
                if (error)
                    return "Source." + error;
            }
            return null;
        };

        /**
         * Creates a Definition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Definition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Definition} Definition
         */
        Definition.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Definition)
                return object;
            let message = new $root.pb.Definition();
            if (object.def) {
                if (!Array.isArray(object.def))
                    throw TypeError(".pb.Definition.def: array expected");
                message.def = [];
                for (let i = 0; i < object.def.length; ++i)
                    if (typeof object.def[i] === "string")
                        $util.base64.decode(object.def[i], message.def[i] = $util.newBuffer($util.base64.length(object.def[i])), 0);
                    else if (object.def[i].length >= 0)
                        message.def[i] = object.def[i];
            }
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".pb.Definition.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i) {
                    if (typeof object.metadata[keys[i]] !== "object")
                        throw TypeError(".pb.Definition.metadata: object expected");
                    message.metadata[keys[i]] = $root.pb.OpMetadata.fromObject(object.metadata[keys[i]]);
                }
            }
            if (object.Source != null) {
                if (typeof object.Source !== "object")
                    throw TypeError(".pb.Definition.Source: object expected");
                message.Source = $root.pb.Source.fromObject(object.Source);
            }
            return message;
        };

        /**
         * Creates a plain object from a Definition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Definition
         * @static
         * @param {pb.Definition} message Definition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Definition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.def = [];
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults)
                object.Source = null;
            if (message.def && message.def.length) {
                object.def = [];
                for (let j = 0; j < message.def.length; ++j)
                    object.def[j] = options.bytes === String ? $util.base64.encode(message.def[j], 0, message.def[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.def[j]) : message.def[j];
            }
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = $root.pb.OpMetadata.toObject(message.metadata[keys2[j]], options);
            }
            if (message.Source != null && message.hasOwnProperty("Source"))
                object.Source = $root.pb.Source.toObject(message.Source, options);
            return object;
        };

        /**
         * Converts this Definition to JSON.
         * @function toJSON
         * @memberof pb.Definition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Definition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Definition
         * @function getTypeUrl
         * @memberof pb.Definition
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Definition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Definition";
        };

        return Definition;
    })();

    pb.FileOp = (function() {

        /**
         * Properties of a FileOp.
         * @memberof pb
         * @interface IFileOp
         * @property {Array.<pb.IFileAction>|null} [actions] FileOp actions
         */

        /**
         * Constructs a new FileOp.
         * @memberof pb
         * @classdesc Represents a FileOp.
         * @implements IFileOp
         * @constructor
         * @param {pb.IFileOp=} [properties] Properties to set
         */
        function FileOp(properties) {
            this.actions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileOp actions.
         * @member {Array.<pb.IFileAction>} actions
         * @memberof pb.FileOp
         * @instance
         */
        FileOp.prototype.actions = $util.emptyArray;

        /**
         * Creates a new FileOp instance using the specified properties.
         * @function create
         * @memberof pb.FileOp
         * @static
         * @param {pb.IFileOp=} [properties] Properties to set
         * @returns {pb.FileOp} FileOp instance
         */
        FileOp.create = function create(properties) {
            return new FileOp(properties);
        };

        /**
         * Encodes the specified FileOp message. Does not implicitly {@link pb.FileOp.verify|verify} messages.
         * @function encode
         * @memberof pb.FileOp
         * @static
         * @param {pb.IFileOp} message FileOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.actions != null && message.actions.length)
                for (let i = 0; i < message.actions.length; ++i)
                    $root.pb.FileAction.encode(message.actions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileOp message, length delimited. Does not implicitly {@link pb.FileOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileOp
         * @static
         * @param {pb.IFileOp} message FileOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileOp} FileOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileOp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.actions && message.actions.length))
                            message.actions = [];
                        message.actions.push($root.pb.FileAction.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileOp} FileOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileOp message.
         * @function verify
         * @memberof pb.FileOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.actions != null && message.hasOwnProperty("actions")) {
                if (!Array.isArray(message.actions))
                    return "actions: array expected";
                for (let i = 0; i < message.actions.length; ++i) {
                    let error = $root.pb.FileAction.verify(message.actions[i]);
                    if (error)
                        return "actions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FileOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileOp} FileOp
         */
        FileOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileOp)
                return object;
            let message = new $root.pb.FileOp();
            if (object.actions) {
                if (!Array.isArray(object.actions))
                    throw TypeError(".pb.FileOp.actions: array expected");
                message.actions = [];
                for (let i = 0; i < object.actions.length; ++i) {
                    if (typeof object.actions[i] !== "object")
                        throw TypeError(".pb.FileOp.actions: object expected");
                    message.actions[i] = $root.pb.FileAction.fromObject(object.actions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FileOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileOp
         * @static
         * @param {pb.FileOp} message FileOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.actions = [];
            if (message.actions && message.actions.length) {
                object.actions = [];
                for (let j = 0; j < message.actions.length; ++j)
                    object.actions[j] = $root.pb.FileAction.toObject(message.actions[j], options);
            }
            return object;
        };

        /**
         * Converts this FileOp to JSON.
         * @function toJSON
         * @memberof pb.FileOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileOp
         * @function getTypeUrl
         * @memberof pb.FileOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileOp";
        };

        return FileOp;
    })();

    pb.FileAction = (function() {

        /**
         * Properties of a FileAction.
         * @memberof pb
         * @interface IFileAction
         * @property {number|Long|null} [input] FileAction input
         * @property {number|Long|null} [secondaryInput] FileAction secondaryInput
         * @property {number|Long|null} [output] FileAction output
         * @property {pb.IFileActionCopy|null} [copy] FileAction copy
         * @property {pb.IFileActionMkFile|null} [mkfile] FileAction mkfile
         * @property {pb.IFileActionMkDir|null} [mkdir] FileAction mkdir
         * @property {pb.IFileActionRm|null} [rm] FileAction rm
         */

        /**
         * Constructs a new FileAction.
         * @memberof pb
         * @classdesc Represents a FileAction.
         * @implements IFileAction
         * @constructor
         * @param {pb.IFileAction=} [properties] Properties to set
         */
        function FileAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileAction input.
         * @member {number|Long} input
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileAction secondaryInput.
         * @member {number|Long} secondaryInput
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.secondaryInput = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileAction output.
         * @member {number|Long} output
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.output = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileAction copy.
         * @member {pb.IFileActionCopy|null|undefined} copy
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.copy = null;

        /**
         * FileAction mkfile.
         * @member {pb.IFileActionMkFile|null|undefined} mkfile
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.mkfile = null;

        /**
         * FileAction mkdir.
         * @member {pb.IFileActionMkDir|null|undefined} mkdir
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.mkdir = null;

        /**
         * FileAction rm.
         * @member {pb.IFileActionRm|null|undefined} rm
         * @memberof pb.FileAction
         * @instance
         */
        FileAction.prototype.rm = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FileAction action.
         * @member {"copy"|"mkfile"|"mkdir"|"rm"|undefined} action
         * @memberof pb.FileAction
         * @instance
         */
        Object.defineProperty(FileAction.prototype, "action", {
            get: $util.oneOfGetter($oneOfFields = ["copy", "mkfile", "mkdir", "rm"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FileAction instance using the specified properties.
         * @function create
         * @memberof pb.FileAction
         * @static
         * @param {pb.IFileAction=} [properties] Properties to set
         * @returns {pb.FileAction} FileAction instance
         */
        FileAction.create = function create(properties) {
            return new FileAction(properties);
        };

        /**
         * Encodes the specified FileAction message. Does not implicitly {@link pb.FileAction.verify|verify} messages.
         * @function encode
         * @memberof pb.FileAction
         * @static
         * @param {pb.IFileAction} message FileAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            if (message.secondaryInput != null && Object.hasOwnProperty.call(message, "secondaryInput"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.secondaryInput);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.output);
            if (message.copy != null && Object.hasOwnProperty.call(message, "copy"))
                $root.pb.FileActionCopy.encode(message.copy, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.mkfile != null && Object.hasOwnProperty.call(message, "mkfile"))
                $root.pb.FileActionMkFile.encode(message.mkfile, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.mkdir != null && Object.hasOwnProperty.call(message, "mkdir"))
                $root.pb.FileActionMkDir.encode(message.mkdir, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.rm != null && Object.hasOwnProperty.call(message, "rm"))
                $root.pb.FileActionRm.encode(message.rm, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FileAction message, length delimited. Does not implicitly {@link pb.FileAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileAction
         * @static
         * @param {pb.IFileAction} message FileAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileAction message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileAction} FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                case 2: {
                        message.secondaryInput = reader.int64();
                        break;
                    }
                case 3: {
                        message.output = reader.int64();
                        break;
                    }
                case 4: {
                        message.copy = $root.pb.FileActionCopy.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.mkfile = $root.pb.FileActionMkFile.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.mkdir = $root.pb.FileActionMkDir.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.rm = $root.pb.FileActionRm.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileAction} FileAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileAction message.
         * @function verify
         * @memberof pb.FileAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            if (message.secondaryInput != null && message.hasOwnProperty("secondaryInput"))
                if (!$util.isInteger(message.secondaryInput) && !(message.secondaryInput && $util.isInteger(message.secondaryInput.low) && $util.isInteger(message.secondaryInput.high)))
                    return "secondaryInput: integer|Long expected";
            if (message.output != null && message.hasOwnProperty("output"))
                if (!$util.isInteger(message.output) && !(message.output && $util.isInteger(message.output.low) && $util.isInteger(message.output.high)))
                    return "output: integer|Long expected";
            if (message.copy != null && message.hasOwnProperty("copy")) {
                properties.action = 1;
                {
                    let error = $root.pb.FileActionCopy.verify(message.copy);
                    if (error)
                        return "copy." + error;
                }
            }
            if (message.mkfile != null && message.hasOwnProperty("mkfile")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.pb.FileActionMkFile.verify(message.mkfile);
                    if (error)
                        return "mkfile." + error;
                }
            }
            if (message.mkdir != null && message.hasOwnProperty("mkdir")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.pb.FileActionMkDir.verify(message.mkdir);
                    if (error)
                        return "mkdir." + error;
                }
            }
            if (message.rm != null && message.hasOwnProperty("rm")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.pb.FileActionRm.verify(message.rm);
                    if (error)
                        return "rm." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FileAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileAction} FileAction
         */
        FileAction.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileAction)
                return object;
            let message = new $root.pb.FileAction();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            if (object.secondaryInput != null)
                if ($util.Long)
                    (message.secondaryInput = $util.Long.fromValue(object.secondaryInput)).unsigned = false;
                else if (typeof object.secondaryInput === "string")
                    message.secondaryInput = parseInt(object.secondaryInput, 10);
                else if (typeof object.secondaryInput === "number")
                    message.secondaryInput = object.secondaryInput;
                else if (typeof object.secondaryInput === "object")
                    message.secondaryInput = new $util.LongBits(object.secondaryInput.low >>> 0, object.secondaryInput.high >>> 0).toNumber();
            if (object.output != null)
                if ($util.Long)
                    (message.output = $util.Long.fromValue(object.output)).unsigned = false;
                else if (typeof object.output === "string")
                    message.output = parseInt(object.output, 10);
                else if (typeof object.output === "number")
                    message.output = object.output;
                else if (typeof object.output === "object")
                    message.output = new $util.LongBits(object.output.low >>> 0, object.output.high >>> 0).toNumber();
            if (object.copy != null) {
                if (typeof object.copy !== "object")
                    throw TypeError(".pb.FileAction.copy: object expected");
                message.copy = $root.pb.FileActionCopy.fromObject(object.copy);
            }
            if (object.mkfile != null) {
                if (typeof object.mkfile !== "object")
                    throw TypeError(".pb.FileAction.mkfile: object expected");
                message.mkfile = $root.pb.FileActionMkFile.fromObject(object.mkfile);
            }
            if (object.mkdir != null) {
                if (typeof object.mkdir !== "object")
                    throw TypeError(".pb.FileAction.mkdir: object expected");
                message.mkdir = $root.pb.FileActionMkDir.fromObject(object.mkdir);
            }
            if (object.rm != null) {
                if (typeof object.rm !== "object")
                    throw TypeError(".pb.FileAction.rm: object expected");
                message.rm = $root.pb.FileActionRm.fromObject(object.rm);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileAction
         * @static
         * @param {pb.FileAction} message FileAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.secondaryInput = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.secondaryInput = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.output = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.output = options.longs === String ? "0" : 0;
            }
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            if (message.secondaryInput != null && message.hasOwnProperty("secondaryInput"))
                if (typeof message.secondaryInput === "number")
                    object.secondaryInput = options.longs === String ? String(message.secondaryInput) : message.secondaryInput;
                else
                    object.secondaryInput = options.longs === String ? $util.Long.prototype.toString.call(message.secondaryInput) : options.longs === Number ? new $util.LongBits(message.secondaryInput.low >>> 0, message.secondaryInput.high >>> 0).toNumber() : message.secondaryInput;
            if (message.output != null && message.hasOwnProperty("output"))
                if (typeof message.output === "number")
                    object.output = options.longs === String ? String(message.output) : message.output;
                else
                    object.output = options.longs === String ? $util.Long.prototype.toString.call(message.output) : options.longs === Number ? new $util.LongBits(message.output.low >>> 0, message.output.high >>> 0).toNumber() : message.output;
            if (message.copy != null && message.hasOwnProperty("copy")) {
                object.copy = $root.pb.FileActionCopy.toObject(message.copy, options);
                if (options.oneofs)
                    object.action = "copy";
            }
            if (message.mkfile != null && message.hasOwnProperty("mkfile")) {
                object.mkfile = $root.pb.FileActionMkFile.toObject(message.mkfile, options);
                if (options.oneofs)
                    object.action = "mkfile";
            }
            if (message.mkdir != null && message.hasOwnProperty("mkdir")) {
                object.mkdir = $root.pb.FileActionMkDir.toObject(message.mkdir, options);
                if (options.oneofs)
                    object.action = "mkdir";
            }
            if (message.rm != null && message.hasOwnProperty("rm")) {
                object.rm = $root.pb.FileActionRm.toObject(message.rm, options);
                if (options.oneofs)
                    object.action = "rm";
            }
            return object;
        };

        /**
         * Converts this FileAction to JSON.
         * @function toJSON
         * @memberof pb.FileAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileAction
         * @function getTypeUrl
         * @memberof pb.FileAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileAction";
        };

        return FileAction;
    })();

    pb.FileActionCopy = (function() {

        /**
         * Properties of a FileActionCopy.
         * @memberof pb
         * @interface IFileActionCopy
         * @property {string|null} [src] FileActionCopy src
         * @property {string|null} [dest] FileActionCopy dest
         * @property {pb.IChownOpt|null} [owner] FileActionCopy owner
         * @property {number|null} [mode] FileActionCopy mode
         * @property {boolean|null} [followSymlink] FileActionCopy followSymlink
         * @property {boolean|null} [dirCopyContents] FileActionCopy dirCopyContents
         * @property {boolean|null} [attemptUnpackDockerCompatibility] FileActionCopy attemptUnpackDockerCompatibility
         * @property {boolean|null} [createDestPath] FileActionCopy createDestPath
         * @property {boolean|null} [allowWildcard] FileActionCopy allowWildcard
         * @property {boolean|null} [allowEmptyWildcard] FileActionCopy allowEmptyWildcard
         * @property {number|Long|null} [timestamp] FileActionCopy timestamp
         * @property {Array.<string>|null} [includePatterns] FileActionCopy includePatterns
         * @property {Array.<string>|null} [excludePatterns] FileActionCopy excludePatterns
         */

        /**
         * Constructs a new FileActionCopy.
         * @memberof pb
         * @classdesc Represents a FileActionCopy.
         * @implements IFileActionCopy
         * @constructor
         * @param {pb.IFileActionCopy=} [properties] Properties to set
         */
        function FileActionCopy(properties) {
            this.includePatterns = [];
            this.excludePatterns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileActionCopy src.
         * @member {string} src
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.src = "";

        /**
         * FileActionCopy dest.
         * @member {string} dest
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.dest = "";

        /**
         * FileActionCopy owner.
         * @member {pb.IChownOpt|null|undefined} owner
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.owner = null;

        /**
         * FileActionCopy mode.
         * @member {number} mode
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.mode = 0;

        /**
         * FileActionCopy followSymlink.
         * @member {boolean} followSymlink
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.followSymlink = false;

        /**
         * FileActionCopy dirCopyContents.
         * @member {boolean} dirCopyContents
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.dirCopyContents = false;

        /**
         * FileActionCopy attemptUnpackDockerCompatibility.
         * @member {boolean} attemptUnpackDockerCompatibility
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.attemptUnpackDockerCompatibility = false;

        /**
         * FileActionCopy createDestPath.
         * @member {boolean} createDestPath
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.createDestPath = false;

        /**
         * FileActionCopy allowWildcard.
         * @member {boolean} allowWildcard
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.allowWildcard = false;

        /**
         * FileActionCopy allowEmptyWildcard.
         * @member {boolean} allowEmptyWildcard
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.allowEmptyWildcard = false;

        /**
         * FileActionCopy timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileActionCopy includePatterns.
         * @member {Array.<string>} includePatterns
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.includePatterns = $util.emptyArray;

        /**
         * FileActionCopy excludePatterns.
         * @member {Array.<string>} excludePatterns
         * @memberof pb.FileActionCopy
         * @instance
         */
        FileActionCopy.prototype.excludePatterns = $util.emptyArray;

        /**
         * Creates a new FileActionCopy instance using the specified properties.
         * @function create
         * @memberof pb.FileActionCopy
         * @static
         * @param {pb.IFileActionCopy=} [properties] Properties to set
         * @returns {pb.FileActionCopy} FileActionCopy instance
         */
        FileActionCopy.create = function create(properties) {
            return new FileActionCopy(properties);
        };

        /**
         * Encodes the specified FileActionCopy message. Does not implicitly {@link pb.FileActionCopy.verify|verify} messages.
         * @function encode
         * @memberof pb.FileActionCopy
         * @static
         * @param {pb.IFileActionCopy} message FileActionCopy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionCopy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.src);
            if (message.dest != null && Object.hasOwnProperty.call(message, "dest"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dest);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                $root.pb.ChownOpt.encode(message.owner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mode);
            if (message.followSymlink != null && Object.hasOwnProperty.call(message, "followSymlink"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.followSymlink);
            if (message.dirCopyContents != null && Object.hasOwnProperty.call(message, "dirCopyContents"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.dirCopyContents);
            if (message.attemptUnpackDockerCompatibility != null && Object.hasOwnProperty.call(message, "attemptUnpackDockerCompatibility"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.attemptUnpackDockerCompatibility);
            if (message.createDestPath != null && Object.hasOwnProperty.call(message, "createDestPath"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.createDestPath);
            if (message.allowWildcard != null && Object.hasOwnProperty.call(message, "allowWildcard"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.allowWildcard);
            if (message.allowEmptyWildcard != null && Object.hasOwnProperty.call(message, "allowEmptyWildcard"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.allowEmptyWildcard);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.timestamp);
            if (message.includePatterns != null && message.includePatterns.length)
                for (let i = 0; i < message.includePatterns.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.includePatterns[i]);
            if (message.excludePatterns != null && message.excludePatterns.length)
                for (let i = 0; i < message.excludePatterns.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.excludePatterns[i]);
            return writer;
        };

        /**
         * Encodes the specified FileActionCopy message, length delimited. Does not implicitly {@link pb.FileActionCopy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileActionCopy
         * @static
         * @param {pb.IFileActionCopy} message FileActionCopy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionCopy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileActionCopy message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileActionCopy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileActionCopy} FileActionCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionCopy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileActionCopy();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.src = reader.string();
                        break;
                    }
                case 2: {
                        message.dest = reader.string();
                        break;
                    }
                case 3: {
                        message.owner = $root.pb.ChownOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.mode = reader.int32();
                        break;
                    }
                case 5: {
                        message.followSymlink = reader.bool();
                        break;
                    }
                case 6: {
                        message.dirCopyContents = reader.bool();
                        break;
                    }
                case 7: {
                        message.attemptUnpackDockerCompatibility = reader.bool();
                        break;
                    }
                case 8: {
                        message.createDestPath = reader.bool();
                        break;
                    }
                case 9: {
                        message.allowWildcard = reader.bool();
                        break;
                    }
                case 10: {
                        message.allowEmptyWildcard = reader.bool();
                        break;
                    }
                case 11: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 12: {
                        if (!(message.includePatterns && message.includePatterns.length))
                            message.includePatterns = [];
                        message.includePatterns.push(reader.string());
                        break;
                    }
                case 13: {
                        if (!(message.excludePatterns && message.excludePatterns.length))
                            message.excludePatterns = [];
                        message.excludePatterns.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileActionCopy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileActionCopy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileActionCopy} FileActionCopy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionCopy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileActionCopy message.
         * @function verify
         * @memberof pb.FileActionCopy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileActionCopy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!$util.isString(message.src))
                    return "src: string expected";
            if (message.dest != null && message.hasOwnProperty("dest"))
                if (!$util.isString(message.dest))
                    return "dest: string expected";
            if (message.owner != null && message.hasOwnProperty("owner")) {
                let error = $root.pb.ChownOpt.verify(message.owner);
                if (error)
                    return "owner." + error;
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.followSymlink != null && message.hasOwnProperty("followSymlink"))
                if (typeof message.followSymlink !== "boolean")
                    return "followSymlink: boolean expected";
            if (message.dirCopyContents != null && message.hasOwnProperty("dirCopyContents"))
                if (typeof message.dirCopyContents !== "boolean")
                    return "dirCopyContents: boolean expected";
            if (message.attemptUnpackDockerCompatibility != null && message.hasOwnProperty("attemptUnpackDockerCompatibility"))
                if (typeof message.attemptUnpackDockerCompatibility !== "boolean")
                    return "attemptUnpackDockerCompatibility: boolean expected";
            if (message.createDestPath != null && message.hasOwnProperty("createDestPath"))
                if (typeof message.createDestPath !== "boolean")
                    return "createDestPath: boolean expected";
            if (message.allowWildcard != null && message.hasOwnProperty("allowWildcard"))
                if (typeof message.allowWildcard !== "boolean")
                    return "allowWildcard: boolean expected";
            if (message.allowEmptyWildcard != null && message.hasOwnProperty("allowEmptyWildcard"))
                if (typeof message.allowEmptyWildcard !== "boolean")
                    return "allowEmptyWildcard: boolean expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.includePatterns != null && message.hasOwnProperty("includePatterns")) {
                if (!Array.isArray(message.includePatterns))
                    return "includePatterns: array expected";
                for (let i = 0; i < message.includePatterns.length; ++i)
                    if (!$util.isString(message.includePatterns[i]))
                        return "includePatterns: string[] expected";
            }
            if (message.excludePatterns != null && message.hasOwnProperty("excludePatterns")) {
                if (!Array.isArray(message.excludePatterns))
                    return "excludePatterns: array expected";
                for (let i = 0; i < message.excludePatterns.length; ++i)
                    if (!$util.isString(message.excludePatterns[i]))
                        return "excludePatterns: string[] expected";
            }
            return null;
        };

        /**
         * Creates a FileActionCopy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileActionCopy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileActionCopy} FileActionCopy
         */
        FileActionCopy.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileActionCopy)
                return object;
            let message = new $root.pb.FileActionCopy();
            if (object.src != null)
                message.src = String(object.src);
            if (object.dest != null)
                message.dest = String(object.dest);
            if (object.owner != null) {
                if (typeof object.owner !== "object")
                    throw TypeError(".pb.FileActionCopy.owner: object expected");
                message.owner = $root.pb.ChownOpt.fromObject(object.owner);
            }
            if (object.mode != null)
                message.mode = object.mode | 0;
            if (object.followSymlink != null)
                message.followSymlink = Boolean(object.followSymlink);
            if (object.dirCopyContents != null)
                message.dirCopyContents = Boolean(object.dirCopyContents);
            if (object.attemptUnpackDockerCompatibility != null)
                message.attemptUnpackDockerCompatibility = Boolean(object.attemptUnpackDockerCompatibility);
            if (object.createDestPath != null)
                message.createDestPath = Boolean(object.createDestPath);
            if (object.allowWildcard != null)
                message.allowWildcard = Boolean(object.allowWildcard);
            if (object.allowEmptyWildcard != null)
                message.allowEmptyWildcard = Boolean(object.allowEmptyWildcard);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.includePatterns) {
                if (!Array.isArray(object.includePatterns))
                    throw TypeError(".pb.FileActionCopy.includePatterns: array expected");
                message.includePatterns = [];
                for (let i = 0; i < object.includePatterns.length; ++i)
                    message.includePatterns[i] = String(object.includePatterns[i]);
            }
            if (object.excludePatterns) {
                if (!Array.isArray(object.excludePatterns))
                    throw TypeError(".pb.FileActionCopy.excludePatterns: array expected");
                message.excludePatterns = [];
                for (let i = 0; i < object.excludePatterns.length; ++i)
                    message.excludePatterns[i] = String(object.excludePatterns[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileActionCopy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileActionCopy
         * @static
         * @param {pb.FileActionCopy} message FileActionCopy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileActionCopy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.includePatterns = [];
                object.excludePatterns = [];
            }
            if (options.defaults) {
                object.src = "";
                object.dest = "";
                object.owner = null;
                object.mode = 0;
                object.followSymlink = false;
                object.dirCopyContents = false;
                object.attemptUnpackDockerCompatibility = false;
                object.createDestPath = false;
                object.allowWildcard = false;
                object.allowEmptyWildcard = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = message.src;
            if (message.dest != null && message.hasOwnProperty("dest"))
                object.dest = message.dest;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = $root.pb.ChownOpt.toObject(message.owner, options);
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.followSymlink != null && message.hasOwnProperty("followSymlink"))
                object.followSymlink = message.followSymlink;
            if (message.dirCopyContents != null && message.hasOwnProperty("dirCopyContents"))
                object.dirCopyContents = message.dirCopyContents;
            if (message.attemptUnpackDockerCompatibility != null && message.hasOwnProperty("attemptUnpackDockerCompatibility"))
                object.attemptUnpackDockerCompatibility = message.attemptUnpackDockerCompatibility;
            if (message.createDestPath != null && message.hasOwnProperty("createDestPath"))
                object.createDestPath = message.createDestPath;
            if (message.allowWildcard != null && message.hasOwnProperty("allowWildcard"))
                object.allowWildcard = message.allowWildcard;
            if (message.allowEmptyWildcard != null && message.hasOwnProperty("allowEmptyWildcard"))
                object.allowEmptyWildcard = message.allowEmptyWildcard;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.includePatterns && message.includePatterns.length) {
                object.includePatterns = [];
                for (let j = 0; j < message.includePatterns.length; ++j)
                    object.includePatterns[j] = message.includePatterns[j];
            }
            if (message.excludePatterns && message.excludePatterns.length) {
                object.excludePatterns = [];
                for (let j = 0; j < message.excludePatterns.length; ++j)
                    object.excludePatterns[j] = message.excludePatterns[j];
            }
            return object;
        };

        /**
         * Converts this FileActionCopy to JSON.
         * @function toJSON
         * @memberof pb.FileActionCopy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileActionCopy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileActionCopy
         * @function getTypeUrl
         * @memberof pb.FileActionCopy
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileActionCopy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileActionCopy";
        };

        return FileActionCopy;
    })();

    pb.FileActionMkFile = (function() {

        /**
         * Properties of a FileActionMkFile.
         * @memberof pb
         * @interface IFileActionMkFile
         * @property {string|null} [path] FileActionMkFile path
         * @property {number|null} [mode] FileActionMkFile mode
         * @property {Uint8Array|null} [data] FileActionMkFile data
         * @property {pb.IChownOpt|null} [owner] FileActionMkFile owner
         * @property {number|Long|null} [timestamp] FileActionMkFile timestamp
         */

        /**
         * Constructs a new FileActionMkFile.
         * @memberof pb
         * @classdesc Represents a FileActionMkFile.
         * @implements IFileActionMkFile
         * @constructor
         * @param {pb.IFileActionMkFile=} [properties] Properties to set
         */
        function FileActionMkFile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileActionMkFile path.
         * @member {string} path
         * @memberof pb.FileActionMkFile
         * @instance
         */
        FileActionMkFile.prototype.path = "";

        /**
         * FileActionMkFile mode.
         * @member {number} mode
         * @memberof pb.FileActionMkFile
         * @instance
         */
        FileActionMkFile.prototype.mode = 0;

        /**
         * FileActionMkFile data.
         * @member {Uint8Array} data
         * @memberof pb.FileActionMkFile
         * @instance
         */
        FileActionMkFile.prototype.data = $util.newBuffer([]);

        /**
         * FileActionMkFile owner.
         * @member {pb.IChownOpt|null|undefined} owner
         * @memberof pb.FileActionMkFile
         * @instance
         */
        FileActionMkFile.prototype.owner = null;

        /**
         * FileActionMkFile timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.FileActionMkFile
         * @instance
         */
        FileActionMkFile.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FileActionMkFile instance using the specified properties.
         * @function create
         * @memberof pb.FileActionMkFile
         * @static
         * @param {pb.IFileActionMkFile=} [properties] Properties to set
         * @returns {pb.FileActionMkFile} FileActionMkFile instance
         */
        FileActionMkFile.create = function create(properties) {
            return new FileActionMkFile(properties);
        };

        /**
         * Encodes the specified FileActionMkFile message. Does not implicitly {@link pb.FileActionMkFile.verify|verify} messages.
         * @function encode
         * @memberof pb.FileActionMkFile
         * @static
         * @param {pb.IFileActionMkFile} message FileActionMkFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionMkFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                $root.pb.ChownOpt.encode(message.owner, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified FileActionMkFile message, length delimited. Does not implicitly {@link pb.FileActionMkFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileActionMkFile
         * @static
         * @param {pb.IFileActionMkFile} message FileActionMkFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionMkFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileActionMkFile message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileActionMkFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileActionMkFile} FileActionMkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionMkFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileActionMkFile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.mode = reader.int32();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
                        break;
                    }
                case 4: {
                        message.owner = $root.pb.ChownOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileActionMkFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileActionMkFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileActionMkFile} FileActionMkFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionMkFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileActionMkFile message.
         * @function verify
         * @memberof pb.FileActionMkFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileActionMkFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.owner != null && message.hasOwnProperty("owner")) {
                let error = $root.pb.ChownOpt.verify(message.owner);
                if (error)
                    return "owner." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a FileActionMkFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileActionMkFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileActionMkFile} FileActionMkFile
         */
        FileActionMkFile.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileActionMkFile)
                return object;
            let message = new $root.pb.FileActionMkFile();
            if (object.path != null)
                message.path = String(object.path);
            if (object.mode != null)
                message.mode = object.mode | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.owner != null) {
                if (typeof object.owner !== "object")
                    throw TypeError(".pb.FileActionMkFile.owner: object expected");
                message.owner = $root.pb.ChownOpt.fromObject(object.owner);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FileActionMkFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileActionMkFile
         * @static
         * @param {pb.FileActionMkFile} message FileActionMkFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileActionMkFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.path = "";
                object.mode = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.owner = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = $root.pb.ChownOpt.toObject(message.owner, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this FileActionMkFile to JSON.
         * @function toJSON
         * @memberof pb.FileActionMkFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileActionMkFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileActionMkFile
         * @function getTypeUrl
         * @memberof pb.FileActionMkFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileActionMkFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileActionMkFile";
        };

        return FileActionMkFile;
    })();

    pb.FileActionMkDir = (function() {

        /**
         * Properties of a FileActionMkDir.
         * @memberof pb
         * @interface IFileActionMkDir
         * @property {string|null} [path] FileActionMkDir path
         * @property {number|null} [mode] FileActionMkDir mode
         * @property {boolean|null} [makeParents] FileActionMkDir makeParents
         * @property {pb.IChownOpt|null} [owner] FileActionMkDir owner
         * @property {number|Long|null} [timestamp] FileActionMkDir timestamp
         */

        /**
         * Constructs a new FileActionMkDir.
         * @memberof pb
         * @classdesc Represents a FileActionMkDir.
         * @implements IFileActionMkDir
         * @constructor
         * @param {pb.IFileActionMkDir=} [properties] Properties to set
         */
        function FileActionMkDir(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileActionMkDir path.
         * @member {string} path
         * @memberof pb.FileActionMkDir
         * @instance
         */
        FileActionMkDir.prototype.path = "";

        /**
         * FileActionMkDir mode.
         * @member {number} mode
         * @memberof pb.FileActionMkDir
         * @instance
         */
        FileActionMkDir.prototype.mode = 0;

        /**
         * FileActionMkDir makeParents.
         * @member {boolean} makeParents
         * @memberof pb.FileActionMkDir
         * @instance
         */
        FileActionMkDir.prototype.makeParents = false;

        /**
         * FileActionMkDir owner.
         * @member {pb.IChownOpt|null|undefined} owner
         * @memberof pb.FileActionMkDir
         * @instance
         */
        FileActionMkDir.prototype.owner = null;

        /**
         * FileActionMkDir timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.FileActionMkDir
         * @instance
         */
        FileActionMkDir.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FileActionMkDir instance using the specified properties.
         * @function create
         * @memberof pb.FileActionMkDir
         * @static
         * @param {pb.IFileActionMkDir=} [properties] Properties to set
         * @returns {pb.FileActionMkDir} FileActionMkDir instance
         */
        FileActionMkDir.create = function create(properties) {
            return new FileActionMkDir(properties);
        };

        /**
         * Encodes the specified FileActionMkDir message. Does not implicitly {@link pb.FileActionMkDir.verify|verify} messages.
         * @function encode
         * @memberof pb.FileActionMkDir
         * @static
         * @param {pb.IFileActionMkDir} message FileActionMkDir message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionMkDir.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
            if (message.makeParents != null && Object.hasOwnProperty.call(message, "makeParents"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.makeParents);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                $root.pb.ChownOpt.encode(message.owner, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified FileActionMkDir message, length delimited. Does not implicitly {@link pb.FileActionMkDir.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileActionMkDir
         * @static
         * @param {pb.IFileActionMkDir} message FileActionMkDir message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionMkDir.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileActionMkDir message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileActionMkDir
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileActionMkDir} FileActionMkDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionMkDir.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileActionMkDir();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.mode = reader.int32();
                        break;
                    }
                case 3: {
                        message.makeParents = reader.bool();
                        break;
                    }
                case 4: {
                        message.owner = $root.pb.ChownOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileActionMkDir message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileActionMkDir
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileActionMkDir} FileActionMkDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionMkDir.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileActionMkDir message.
         * @function verify
         * @memberof pb.FileActionMkDir
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileActionMkDir.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.makeParents != null && message.hasOwnProperty("makeParents"))
                if (typeof message.makeParents !== "boolean")
                    return "makeParents: boolean expected";
            if (message.owner != null && message.hasOwnProperty("owner")) {
                let error = $root.pb.ChownOpt.verify(message.owner);
                if (error)
                    return "owner." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a FileActionMkDir message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileActionMkDir
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileActionMkDir} FileActionMkDir
         */
        FileActionMkDir.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileActionMkDir)
                return object;
            let message = new $root.pb.FileActionMkDir();
            if (object.path != null)
                message.path = String(object.path);
            if (object.mode != null)
                message.mode = object.mode | 0;
            if (object.makeParents != null)
                message.makeParents = Boolean(object.makeParents);
            if (object.owner != null) {
                if (typeof object.owner !== "object")
                    throw TypeError(".pb.FileActionMkDir.owner: object expected");
                message.owner = $root.pb.ChownOpt.fromObject(object.owner);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FileActionMkDir message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileActionMkDir
         * @static
         * @param {pb.FileActionMkDir} message FileActionMkDir
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileActionMkDir.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.path = "";
                object.mode = 0;
                object.makeParents = false;
                object.owner = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.makeParents != null && message.hasOwnProperty("makeParents"))
                object.makeParents = message.makeParents;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = $root.pb.ChownOpt.toObject(message.owner, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this FileActionMkDir to JSON.
         * @function toJSON
         * @memberof pb.FileActionMkDir
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileActionMkDir.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileActionMkDir
         * @function getTypeUrl
         * @memberof pb.FileActionMkDir
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileActionMkDir.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileActionMkDir";
        };

        return FileActionMkDir;
    })();

    pb.FileActionRm = (function() {

        /**
         * Properties of a FileActionRm.
         * @memberof pb
         * @interface IFileActionRm
         * @property {string|null} [path] FileActionRm path
         * @property {boolean|null} [allowNotFound] FileActionRm allowNotFound
         * @property {boolean|null} [allowWildcard] FileActionRm allowWildcard
         */

        /**
         * Constructs a new FileActionRm.
         * @memberof pb
         * @classdesc Represents a FileActionRm.
         * @implements IFileActionRm
         * @constructor
         * @param {pb.IFileActionRm=} [properties] Properties to set
         */
        function FileActionRm(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileActionRm path.
         * @member {string} path
         * @memberof pb.FileActionRm
         * @instance
         */
        FileActionRm.prototype.path = "";

        /**
         * FileActionRm allowNotFound.
         * @member {boolean} allowNotFound
         * @memberof pb.FileActionRm
         * @instance
         */
        FileActionRm.prototype.allowNotFound = false;

        /**
         * FileActionRm allowWildcard.
         * @member {boolean} allowWildcard
         * @memberof pb.FileActionRm
         * @instance
         */
        FileActionRm.prototype.allowWildcard = false;

        /**
         * Creates a new FileActionRm instance using the specified properties.
         * @function create
         * @memberof pb.FileActionRm
         * @static
         * @param {pb.IFileActionRm=} [properties] Properties to set
         * @returns {pb.FileActionRm} FileActionRm instance
         */
        FileActionRm.create = function create(properties) {
            return new FileActionRm(properties);
        };

        /**
         * Encodes the specified FileActionRm message. Does not implicitly {@link pb.FileActionRm.verify|verify} messages.
         * @function encode
         * @memberof pb.FileActionRm
         * @static
         * @param {pb.IFileActionRm} message FileActionRm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionRm.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.allowNotFound != null && Object.hasOwnProperty.call(message, "allowNotFound"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowNotFound);
            if (message.allowWildcard != null && Object.hasOwnProperty.call(message, "allowWildcard"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.allowWildcard);
            return writer;
        };

        /**
         * Encodes the specified FileActionRm message, length delimited. Does not implicitly {@link pb.FileActionRm.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FileActionRm
         * @static
         * @param {pb.IFileActionRm} message FileActionRm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileActionRm.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileActionRm message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FileActionRm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FileActionRm} FileActionRm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionRm.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FileActionRm();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.allowNotFound = reader.bool();
                        break;
                    }
                case 3: {
                        message.allowWildcard = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileActionRm message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FileActionRm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FileActionRm} FileActionRm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileActionRm.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileActionRm message.
         * @function verify
         * @memberof pb.FileActionRm
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileActionRm.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.allowNotFound != null && message.hasOwnProperty("allowNotFound"))
                if (typeof message.allowNotFound !== "boolean")
                    return "allowNotFound: boolean expected";
            if (message.allowWildcard != null && message.hasOwnProperty("allowWildcard"))
                if (typeof message.allowWildcard !== "boolean")
                    return "allowWildcard: boolean expected";
            return null;
        };

        /**
         * Creates a FileActionRm message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FileActionRm
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FileActionRm} FileActionRm
         */
        FileActionRm.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FileActionRm)
                return object;
            let message = new $root.pb.FileActionRm();
            if (object.path != null)
                message.path = String(object.path);
            if (object.allowNotFound != null)
                message.allowNotFound = Boolean(object.allowNotFound);
            if (object.allowWildcard != null)
                message.allowWildcard = Boolean(object.allowWildcard);
            return message;
        };

        /**
         * Creates a plain object from a FileActionRm message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FileActionRm
         * @static
         * @param {pb.FileActionRm} message FileActionRm
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileActionRm.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.path = "";
                object.allowNotFound = false;
                object.allowWildcard = false;
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.allowNotFound != null && message.hasOwnProperty("allowNotFound"))
                object.allowNotFound = message.allowNotFound;
            if (message.allowWildcard != null && message.hasOwnProperty("allowWildcard"))
                object.allowWildcard = message.allowWildcard;
            return object;
        };

        /**
         * Converts this FileActionRm to JSON.
         * @function toJSON
         * @memberof pb.FileActionRm
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileActionRm.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileActionRm
         * @function getTypeUrl
         * @memberof pb.FileActionRm
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileActionRm.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FileActionRm";
        };

        return FileActionRm;
    })();

    pb.ChownOpt = (function() {

        /**
         * Properties of a ChownOpt.
         * @memberof pb
         * @interface IChownOpt
         * @property {pb.IUserOpt|null} [user] ChownOpt user
         * @property {pb.IUserOpt|null} [group] ChownOpt group
         */

        /**
         * Constructs a new ChownOpt.
         * @memberof pb
         * @classdesc Represents a ChownOpt.
         * @implements IChownOpt
         * @constructor
         * @param {pb.IChownOpt=} [properties] Properties to set
         */
        function ChownOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChownOpt user.
         * @member {pb.IUserOpt|null|undefined} user
         * @memberof pb.ChownOpt
         * @instance
         */
        ChownOpt.prototype.user = null;

        /**
         * ChownOpt group.
         * @member {pb.IUserOpt|null|undefined} group
         * @memberof pb.ChownOpt
         * @instance
         */
        ChownOpt.prototype.group = null;

        /**
         * Creates a new ChownOpt instance using the specified properties.
         * @function create
         * @memberof pb.ChownOpt
         * @static
         * @param {pb.IChownOpt=} [properties] Properties to set
         * @returns {pb.ChownOpt} ChownOpt instance
         */
        ChownOpt.create = function create(properties) {
            return new ChownOpt(properties);
        };

        /**
         * Encodes the specified ChownOpt message. Does not implicitly {@link pb.ChownOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.ChownOpt
         * @static
         * @param {pb.IChownOpt} message ChownOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChownOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.pb.UserOpt.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.pb.UserOpt.encode(message.group, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChownOpt message, length delimited. Does not implicitly {@link pb.ChownOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChownOpt
         * @static
         * @param {pb.IChownOpt} message ChownOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChownOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChownOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChownOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChownOpt} ChownOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChownOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChownOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.pb.UserOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.group = $root.pb.UserOpt.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChownOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChownOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChownOpt} ChownOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChownOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChownOpt message.
         * @function verify
         * @memberof pb.ChownOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChownOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.pb.UserOpt.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                let error = $root.pb.UserOpt.verify(message.group);
                if (error)
                    return "group." + error;
            }
            return null;
        };

        /**
         * Creates a ChownOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChownOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChownOpt} ChownOpt
         */
        ChownOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChownOpt)
                return object;
            let message = new $root.pb.ChownOpt();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".pb.ChownOpt.user: object expected");
                message.user = $root.pb.UserOpt.fromObject(object.user);
            }
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".pb.ChownOpt.group: object expected");
                message.group = $root.pb.UserOpt.fromObject(object.group);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChownOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChownOpt
         * @static
         * @param {pb.ChownOpt} message ChownOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChownOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.user = null;
                object.group = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.pb.UserOpt.toObject(message.user, options);
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = $root.pb.UserOpt.toObject(message.group, options);
            return object;
        };

        /**
         * Converts this ChownOpt to JSON.
         * @function toJSON
         * @memberof pb.ChownOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChownOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChownOpt
         * @function getTypeUrl
         * @memberof pb.ChownOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChownOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.ChownOpt";
        };

        return ChownOpt;
    })();

    pb.UserOpt = (function() {

        /**
         * Properties of a UserOpt.
         * @memberof pb
         * @interface IUserOpt
         * @property {pb.INamedUserOpt|null} [byName] UserOpt byName
         * @property {number|null} [byID] UserOpt byID
         */

        /**
         * Constructs a new UserOpt.
         * @memberof pb
         * @classdesc Represents a UserOpt.
         * @implements IUserOpt
         * @constructor
         * @param {pb.IUserOpt=} [properties] Properties to set
         */
        function UserOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOpt byName.
         * @member {pb.INamedUserOpt|null|undefined} byName
         * @memberof pb.UserOpt
         * @instance
         */
        UserOpt.prototype.byName = null;

        /**
         * UserOpt byID.
         * @member {number|null|undefined} byID
         * @memberof pb.UserOpt
         * @instance
         */
        UserOpt.prototype.byID = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * UserOpt user.
         * @member {"byName"|"byID"|undefined} user
         * @memberof pb.UserOpt
         * @instance
         */
        Object.defineProperty(UserOpt.prototype, "user", {
            get: $util.oneOfGetter($oneOfFields = ["byName", "byID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserOpt instance using the specified properties.
         * @function create
         * @memberof pb.UserOpt
         * @static
         * @param {pb.IUserOpt=} [properties] Properties to set
         * @returns {pb.UserOpt} UserOpt instance
         */
        UserOpt.create = function create(properties) {
            return new UserOpt(properties);
        };

        /**
         * Encodes the specified UserOpt message. Does not implicitly {@link pb.UserOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.UserOpt
         * @static
         * @param {pb.IUserOpt} message UserOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.byName != null && Object.hasOwnProperty.call(message, "byName"))
                $root.pb.NamedUserOpt.encode(message.byName, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.byID != null && Object.hasOwnProperty.call(message, "byID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.byID);
            return writer;
        };

        /**
         * Encodes the specified UserOpt message, length delimited. Does not implicitly {@link pb.UserOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UserOpt
         * @static
         * @param {pb.IUserOpt} message UserOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UserOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UserOpt} UserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UserOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.byName = $root.pb.NamedUserOpt.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.byID = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UserOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UserOpt} UserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOpt message.
         * @function verify
         * @memberof pb.UserOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.byName != null && message.hasOwnProperty("byName")) {
                properties.user = 1;
                {
                    let error = $root.pb.NamedUserOpt.verify(message.byName);
                    if (error)
                        return "byName." + error;
                }
            }
            if (message.byID != null && message.hasOwnProperty("byID")) {
                if (properties.user === 1)
                    return "user: multiple values";
                properties.user = 1;
                if (!$util.isInteger(message.byID))
                    return "byID: integer expected";
            }
            return null;
        };

        /**
         * Creates a UserOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UserOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UserOpt} UserOpt
         */
        UserOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UserOpt)
                return object;
            let message = new $root.pb.UserOpt();
            if (object.byName != null) {
                if (typeof object.byName !== "object")
                    throw TypeError(".pb.UserOpt.byName: object expected");
                message.byName = $root.pb.NamedUserOpt.fromObject(object.byName);
            }
            if (object.byID != null)
                message.byID = object.byID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UserOpt
         * @static
         * @param {pb.UserOpt} message UserOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.byName != null && message.hasOwnProperty("byName")) {
                object.byName = $root.pb.NamedUserOpt.toObject(message.byName, options);
                if (options.oneofs)
                    object.user = "byName";
            }
            if (message.byID != null && message.hasOwnProperty("byID")) {
                object.byID = message.byID;
                if (options.oneofs)
                    object.user = "byID";
            }
            return object;
        };

        /**
         * Converts this UserOpt to JSON.
         * @function toJSON
         * @memberof pb.UserOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserOpt
         * @function getTypeUrl
         * @memberof pb.UserOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UserOpt";
        };

        return UserOpt;
    })();

    pb.NamedUserOpt = (function() {

        /**
         * Properties of a NamedUserOpt.
         * @memberof pb
         * @interface INamedUserOpt
         * @property {string|null} [name] NamedUserOpt name
         * @property {number|Long|null} [input] NamedUserOpt input
         */

        /**
         * Constructs a new NamedUserOpt.
         * @memberof pb
         * @classdesc Represents a NamedUserOpt.
         * @implements INamedUserOpt
         * @constructor
         * @param {pb.INamedUserOpt=} [properties] Properties to set
         */
        function NamedUserOpt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NamedUserOpt name.
         * @member {string} name
         * @memberof pb.NamedUserOpt
         * @instance
         */
        NamedUserOpt.prototype.name = "";

        /**
         * NamedUserOpt input.
         * @member {number|Long} input
         * @memberof pb.NamedUserOpt
         * @instance
         */
        NamedUserOpt.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NamedUserOpt instance using the specified properties.
         * @function create
         * @memberof pb.NamedUserOpt
         * @static
         * @param {pb.INamedUserOpt=} [properties] Properties to set
         * @returns {pb.NamedUserOpt} NamedUserOpt instance
         */
        NamedUserOpt.create = function create(properties) {
            return new NamedUserOpt(properties);
        };

        /**
         * Encodes the specified NamedUserOpt message. Does not implicitly {@link pb.NamedUserOpt.verify|verify} messages.
         * @function encode
         * @memberof pb.NamedUserOpt
         * @static
         * @param {pb.INamedUserOpt} message NamedUserOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NamedUserOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.input);
            return writer;
        };

        /**
         * Encodes the specified NamedUserOpt message, length delimited. Does not implicitly {@link pb.NamedUserOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.NamedUserOpt
         * @static
         * @param {pb.INamedUserOpt} message NamedUserOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NamedUserOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NamedUserOpt message from the specified reader or buffer.
         * @function decode
         * @memberof pb.NamedUserOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.NamedUserOpt} NamedUserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NamedUserOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.NamedUserOpt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.input = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NamedUserOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.NamedUserOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.NamedUserOpt} NamedUserOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NamedUserOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NamedUserOpt message.
         * @function verify
         * @memberof pb.NamedUserOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NamedUserOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            return null;
        };

        /**
         * Creates a NamedUserOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.NamedUserOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.NamedUserOpt} NamedUserOpt
         */
        NamedUserOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.NamedUserOpt)
                return object;
            let message = new $root.pb.NamedUserOpt();
            if (object.name != null)
                message.name = String(object.name);
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a NamedUserOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.NamedUserOpt
         * @static
         * @param {pb.NamedUserOpt} message NamedUserOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NamedUserOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            return object;
        };

        /**
         * Converts this NamedUserOpt to JSON.
         * @function toJSON
         * @memberof pb.NamedUserOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NamedUserOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NamedUserOpt
         * @function getTypeUrl
         * @memberof pb.NamedUserOpt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NamedUserOpt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.NamedUserOpt";
        };

        return NamedUserOpt;
    })();

    pb.MergeInput = (function() {

        /**
         * Properties of a MergeInput.
         * @memberof pb
         * @interface IMergeInput
         * @property {number|Long|null} [input] MergeInput input
         */

        /**
         * Constructs a new MergeInput.
         * @memberof pb
         * @classdesc Represents a MergeInput.
         * @implements IMergeInput
         * @constructor
         * @param {pb.IMergeInput=} [properties] Properties to set
         */
        function MergeInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MergeInput input.
         * @member {number|Long} input
         * @memberof pb.MergeInput
         * @instance
         */
        MergeInput.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MergeInput instance using the specified properties.
         * @function create
         * @memberof pb.MergeInput
         * @static
         * @param {pb.IMergeInput=} [properties] Properties to set
         * @returns {pb.MergeInput} MergeInput instance
         */
        MergeInput.create = function create(properties) {
            return new MergeInput(properties);
        };

        /**
         * Encodes the specified MergeInput message. Does not implicitly {@link pb.MergeInput.verify|verify} messages.
         * @function encode
         * @memberof pb.MergeInput
         * @static
         * @param {pb.IMergeInput} message MergeInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            return writer;
        };

        /**
         * Encodes the specified MergeInput message, length delimited. Does not implicitly {@link pb.MergeInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MergeInput
         * @static
         * @param {pb.IMergeInput} message MergeInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MergeInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MergeInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MergeInput} MergeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MergeInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MergeInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MergeInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MergeInput} MergeInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MergeInput message.
         * @function verify
         * @memberof pb.MergeInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MergeInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            return null;
        };

        /**
         * Creates a MergeInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MergeInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MergeInput} MergeInput
         */
        MergeInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MergeInput)
                return object;
            let message = new $root.pb.MergeInput();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MergeInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MergeInput
         * @static
         * @param {pb.MergeInput} message MergeInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MergeInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            return object;
        };

        /**
         * Converts this MergeInput to JSON.
         * @function toJSON
         * @memberof pb.MergeInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MergeInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MergeInput
         * @function getTypeUrl
         * @memberof pb.MergeInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MergeInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MergeInput";
        };

        return MergeInput;
    })();

    pb.MergeOp = (function() {

        /**
         * Properties of a MergeOp.
         * @memberof pb
         * @interface IMergeOp
         * @property {Array.<pb.IMergeInput>|null} [inputs] MergeOp inputs
         */

        /**
         * Constructs a new MergeOp.
         * @memberof pb
         * @classdesc Represents a MergeOp.
         * @implements IMergeOp
         * @constructor
         * @param {pb.IMergeOp=} [properties] Properties to set
         */
        function MergeOp(properties) {
            this.inputs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MergeOp inputs.
         * @member {Array.<pb.IMergeInput>} inputs
         * @memberof pb.MergeOp
         * @instance
         */
        MergeOp.prototype.inputs = $util.emptyArray;

        /**
         * Creates a new MergeOp instance using the specified properties.
         * @function create
         * @memberof pb.MergeOp
         * @static
         * @param {pb.IMergeOp=} [properties] Properties to set
         * @returns {pb.MergeOp} MergeOp instance
         */
        MergeOp.create = function create(properties) {
            return new MergeOp(properties);
        };

        /**
         * Encodes the specified MergeOp message. Does not implicitly {@link pb.MergeOp.verify|verify} messages.
         * @function encode
         * @memberof pb.MergeOp
         * @static
         * @param {pb.IMergeOp} message MergeOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inputs != null && message.inputs.length)
                for (let i = 0; i < message.inputs.length; ++i)
                    $root.pb.MergeInput.encode(message.inputs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MergeOp message, length delimited. Does not implicitly {@link pb.MergeOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.MergeOp
         * @static
         * @param {pb.IMergeOp} message MergeOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MergeOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MergeOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MergeOp} MergeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MergeOp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.pb.MergeInput.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MergeOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.MergeOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.MergeOp} MergeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MergeOp message.
         * @function verify
         * @memberof pb.MergeOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MergeOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                if (!Array.isArray(message.inputs))
                    return "inputs: array expected";
                for (let i = 0; i < message.inputs.length; ++i) {
                    let error = $root.pb.MergeInput.verify(message.inputs[i]);
                    if (error)
                        return "inputs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MergeOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.MergeOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.MergeOp} MergeOp
         */
        MergeOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.MergeOp)
                return object;
            let message = new $root.pb.MergeOp();
            if (object.inputs) {
                if (!Array.isArray(object.inputs))
                    throw TypeError(".pb.MergeOp.inputs: array expected");
                message.inputs = [];
                for (let i = 0; i < object.inputs.length; ++i) {
                    if (typeof object.inputs[i] !== "object")
                        throw TypeError(".pb.MergeOp.inputs: object expected");
                    message.inputs[i] = $root.pb.MergeInput.fromObject(object.inputs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MergeOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.MergeOp
         * @static
         * @param {pb.MergeOp} message MergeOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MergeOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.inputs = [];
            if (message.inputs && message.inputs.length) {
                object.inputs = [];
                for (let j = 0; j < message.inputs.length; ++j)
                    object.inputs[j] = $root.pb.MergeInput.toObject(message.inputs[j], options);
            }
            return object;
        };

        /**
         * Converts this MergeOp to JSON.
         * @function toJSON
         * @memberof pb.MergeOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MergeOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MergeOp
         * @function getTypeUrl
         * @memberof pb.MergeOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MergeOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MergeOp";
        };

        return MergeOp;
    })();

    pb.LowerDiffInput = (function() {

        /**
         * Properties of a LowerDiffInput.
         * @memberof pb
         * @interface ILowerDiffInput
         * @property {number|Long|null} [input] LowerDiffInput input
         */

        /**
         * Constructs a new LowerDiffInput.
         * @memberof pb
         * @classdesc Represents a LowerDiffInput.
         * @implements ILowerDiffInput
         * @constructor
         * @param {pb.ILowerDiffInput=} [properties] Properties to set
         */
        function LowerDiffInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LowerDiffInput input.
         * @member {number|Long} input
         * @memberof pb.LowerDiffInput
         * @instance
         */
        LowerDiffInput.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LowerDiffInput instance using the specified properties.
         * @function create
         * @memberof pb.LowerDiffInput
         * @static
         * @param {pb.ILowerDiffInput=} [properties] Properties to set
         * @returns {pb.LowerDiffInput} LowerDiffInput instance
         */
        LowerDiffInput.create = function create(properties) {
            return new LowerDiffInput(properties);
        };

        /**
         * Encodes the specified LowerDiffInput message. Does not implicitly {@link pb.LowerDiffInput.verify|verify} messages.
         * @function encode
         * @memberof pb.LowerDiffInput
         * @static
         * @param {pb.ILowerDiffInput} message LowerDiffInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LowerDiffInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            return writer;
        };

        /**
         * Encodes the specified LowerDiffInput message, length delimited. Does not implicitly {@link pb.LowerDiffInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LowerDiffInput
         * @static
         * @param {pb.ILowerDiffInput} message LowerDiffInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LowerDiffInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LowerDiffInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LowerDiffInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LowerDiffInput} LowerDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LowerDiffInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LowerDiffInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LowerDiffInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LowerDiffInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LowerDiffInput} LowerDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LowerDiffInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LowerDiffInput message.
         * @function verify
         * @memberof pb.LowerDiffInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LowerDiffInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            return null;
        };

        /**
         * Creates a LowerDiffInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LowerDiffInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LowerDiffInput} LowerDiffInput
         */
        LowerDiffInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LowerDiffInput)
                return object;
            let message = new $root.pb.LowerDiffInput();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LowerDiffInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LowerDiffInput
         * @static
         * @param {pb.LowerDiffInput} message LowerDiffInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LowerDiffInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            return object;
        };

        /**
         * Converts this LowerDiffInput to JSON.
         * @function toJSON
         * @memberof pb.LowerDiffInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LowerDiffInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LowerDiffInput
         * @function getTypeUrl
         * @memberof pb.LowerDiffInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LowerDiffInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.LowerDiffInput";
        };

        return LowerDiffInput;
    })();

    pb.UpperDiffInput = (function() {

        /**
         * Properties of an UpperDiffInput.
         * @memberof pb
         * @interface IUpperDiffInput
         * @property {number|Long|null} [input] UpperDiffInput input
         */

        /**
         * Constructs a new UpperDiffInput.
         * @memberof pb
         * @classdesc Represents an UpperDiffInput.
         * @implements IUpperDiffInput
         * @constructor
         * @param {pb.IUpperDiffInput=} [properties] Properties to set
         */
        function UpperDiffInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpperDiffInput input.
         * @member {number|Long} input
         * @memberof pb.UpperDiffInput
         * @instance
         */
        UpperDiffInput.prototype.input = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpperDiffInput instance using the specified properties.
         * @function create
         * @memberof pb.UpperDiffInput
         * @static
         * @param {pb.IUpperDiffInput=} [properties] Properties to set
         * @returns {pb.UpperDiffInput} UpperDiffInput instance
         */
        UpperDiffInput.create = function create(properties) {
            return new UpperDiffInput(properties);
        };

        /**
         * Encodes the specified UpperDiffInput message. Does not implicitly {@link pb.UpperDiffInput.verify|verify} messages.
         * @function encode
         * @memberof pb.UpperDiffInput
         * @static
         * @param {pb.IUpperDiffInput} message UpperDiffInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpperDiffInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.input);
            return writer;
        };

        /**
         * Encodes the specified UpperDiffInput message, length delimited. Does not implicitly {@link pb.UpperDiffInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.UpperDiffInput
         * @static
         * @param {pb.IUpperDiffInput} message UpperDiffInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpperDiffInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpperDiffInput message from the specified reader or buffer.
         * @function decode
         * @memberof pb.UpperDiffInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.UpperDiffInput} UpperDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpperDiffInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.UpperDiffInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.input = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpperDiffInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.UpperDiffInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.UpperDiffInput} UpperDiffInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpperDiffInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpperDiffInput message.
         * @function verify
         * @memberof pb.UpperDiffInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpperDiffInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input"))
                if (!$util.isInteger(message.input) && !(message.input && $util.isInteger(message.input.low) && $util.isInteger(message.input.high)))
                    return "input: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpperDiffInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.UpperDiffInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.UpperDiffInput} UpperDiffInput
         */
        UpperDiffInput.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.UpperDiffInput)
                return object;
            let message = new $root.pb.UpperDiffInput();
            if (object.input != null)
                if ($util.Long)
                    (message.input = $util.Long.fromValue(object.input)).unsigned = false;
                else if (typeof object.input === "string")
                    message.input = parseInt(object.input, 10);
                else if (typeof object.input === "number")
                    message.input = object.input;
                else if (typeof object.input === "object")
                    message.input = new $util.LongBits(object.input.low >>> 0, object.input.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpperDiffInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.UpperDiffInput
         * @static
         * @param {pb.UpperDiffInput} message UpperDiffInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpperDiffInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.input = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.input = options.longs === String ? "0" : 0;
            if (message.input != null && message.hasOwnProperty("input"))
                if (typeof message.input === "number")
                    object.input = options.longs === String ? String(message.input) : message.input;
                else
                    object.input = options.longs === String ? $util.Long.prototype.toString.call(message.input) : options.longs === Number ? new $util.LongBits(message.input.low >>> 0, message.input.high >>> 0).toNumber() : message.input;
            return object;
        };

        /**
         * Converts this UpperDiffInput to JSON.
         * @function toJSON
         * @memberof pb.UpperDiffInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpperDiffInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpperDiffInput
         * @function getTypeUrl
         * @memberof pb.UpperDiffInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpperDiffInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.UpperDiffInput";
        };

        return UpperDiffInput;
    })();

    pb.DiffOp = (function() {

        /**
         * Properties of a DiffOp.
         * @memberof pb
         * @interface IDiffOp
         * @property {pb.ILowerDiffInput|null} [lower] DiffOp lower
         * @property {pb.IUpperDiffInput|null} [upper] DiffOp upper
         */

        /**
         * Constructs a new DiffOp.
         * @memberof pb
         * @classdesc Represents a DiffOp.
         * @implements IDiffOp
         * @constructor
         * @param {pb.IDiffOp=} [properties] Properties to set
         */
        function DiffOp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiffOp lower.
         * @member {pb.ILowerDiffInput|null|undefined} lower
         * @memberof pb.DiffOp
         * @instance
         */
        DiffOp.prototype.lower = null;

        /**
         * DiffOp upper.
         * @member {pb.IUpperDiffInput|null|undefined} upper
         * @memberof pb.DiffOp
         * @instance
         */
        DiffOp.prototype.upper = null;

        /**
         * Creates a new DiffOp instance using the specified properties.
         * @function create
         * @memberof pb.DiffOp
         * @static
         * @param {pb.IDiffOp=} [properties] Properties to set
         * @returns {pb.DiffOp} DiffOp instance
         */
        DiffOp.create = function create(properties) {
            return new DiffOp(properties);
        };

        /**
         * Encodes the specified DiffOp message. Does not implicitly {@link pb.DiffOp.verify|verify} messages.
         * @function encode
         * @memberof pb.DiffOp
         * @static
         * @param {pb.IDiffOp} message DiffOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lower != null && Object.hasOwnProperty.call(message, "lower"))
                $root.pb.LowerDiffInput.encode(message.lower, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.upper != null && Object.hasOwnProperty.call(message, "upper"))
                $root.pb.UpperDiffInput.encode(message.upper, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiffOp message, length delimited. Does not implicitly {@link pb.DiffOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.DiffOp
         * @static
         * @param {pb.IDiffOp} message DiffOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiffOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiffOp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.DiffOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.DiffOp} DiffOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.DiffOp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lower = $root.pb.LowerDiffInput.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.upper = $root.pb.UpperDiffInput.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiffOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.DiffOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.DiffOp} DiffOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiffOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiffOp message.
         * @function verify
         * @memberof pb.DiffOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiffOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lower != null && message.hasOwnProperty("lower")) {
                let error = $root.pb.LowerDiffInput.verify(message.lower);
                if (error)
                    return "lower." + error;
            }
            if (message.upper != null && message.hasOwnProperty("upper")) {
                let error = $root.pb.UpperDiffInput.verify(message.upper);
                if (error)
                    return "upper." + error;
            }
            return null;
        };

        /**
         * Creates a DiffOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.DiffOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.DiffOp} DiffOp
         */
        DiffOp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.DiffOp)
                return object;
            let message = new $root.pb.DiffOp();
            if (object.lower != null) {
                if (typeof object.lower !== "object")
                    throw TypeError(".pb.DiffOp.lower: object expected");
                message.lower = $root.pb.LowerDiffInput.fromObject(object.lower);
            }
            if (object.upper != null) {
                if (typeof object.upper !== "object")
                    throw TypeError(".pb.DiffOp.upper: object expected");
                message.upper = $root.pb.UpperDiffInput.fromObject(object.upper);
            }
            return message;
        };

        /**
         * Creates a plain object from a DiffOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.DiffOp
         * @static
         * @param {pb.DiffOp} message DiffOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiffOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lower = null;
                object.upper = null;
            }
            if (message.lower != null && message.hasOwnProperty("lower"))
                object.lower = $root.pb.LowerDiffInput.toObject(message.lower, options);
            if (message.upper != null && message.hasOwnProperty("upper"))
                object.upper = $root.pb.UpperDiffInput.toObject(message.upper, options);
            return object;
        };

        /**
         * Converts this DiffOp to JSON.
         * @function toJSON
         * @memberof pb.DiffOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiffOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiffOp
         * @function getTypeUrl
         * @memberof pb.DiffOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiffOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.DiffOp";
        };

        return DiffOp;
    })();

    return pb;
})();

export { $root as default };
