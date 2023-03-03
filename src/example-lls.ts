
/**
 * Copied from this excellent blogpost from earthly
 * 
 * https://earthly.dev/blog/compiling-containers-dockerfiles-llvm-and-buildkit/
 */
export const exampleOps = [
  {
    Op: {
      Op: {
        source: {
          identifier: "local://context",
          attrs: {
            "local.unique": "s43w96rwjsm9tf1zlxvn6nezg",
          },
        },
      },
      constraints: {},
    },
    Digest:
      "sha256:c3ca71edeaa161bafed7f3dbdeeab9a5ab34587f569fd71c0a89b4d1e40d77f6",
    OpMetadata: {
      caps: {
        "source.local": true,
        "source.local.unique": true,
      },
    },
  },
  {
    Op: {
      Op: {
        source: {
          identifier: "docker-image://docker.io/library/alpine:latest",
        },
      },
      platform: {
        Architecture: "amd64",
        OS: "linux",
      },
      constraints: {},
    },
    Digest:
      "sha256:665ba8b2cdc0cb0200e2a42a6b3c0f8f684089f4cd1b81494fbb9805879120f7",
    OpMetadata: {
      caps: {
        "source.image": true,
      },
    },
  },
  {
    Op: {
      inputs: [
        {
          digest:
            "sha256:665ba8b2cdc0cb0200e2a42a6b3c0f8f684089f4cd1b81494fbb9805879120f7",
          index: 0,
        },
        {
          digest:
            "sha256:c3ca71edeaa161bafed7f3dbdeeab9a5ab34587f569fd71c0a89b4d1e40d77f6",
          index: 0,
        },
      ],
      Op: {
        file: {
          actions: [
            {
              input: 0,
              secondaryInput: 1,
              output: 0,
              Action: {
                copy: {
                  src: "/README.md",
                  dest: "/README.md",
                  mode: -1,
                  timestamp: -1,
                },
              },
            },
          ],
        },
      },
      platform: {
        Architecture: "amd64",
        OS: "linux",
      },
      constraints: {},
    },
    Digest:
      "sha256:ba425dda86f06cf10ee66d85beda9d500adcce2336b047e072c1f0d403334cf6",
    OpMetadata: {
      caps: {
        "file.base": true,
      },
    },
  },
  {
    Op: {
      inputs: [
        {
          digest:
            "sha256:ba425dda86f06cf10ee66d85beda9d500adcce2336b047e072c1f0d403334cf6",
          index: 0,
        },
      ],
      Op: {
        exec: {
          meta: {
            args: [
              "/bin/sh",
              "-c",
              'echo "programmatically built" > /built.txt',
            ],
            cwd: "/",
          },
          mounts: [
            {
              input: 0,
              dest: "/",
              output: 0,
            },
          ],
        },
      },
      platform: {
        Architecture: "amd64",
        OS: "linux",
      },
      constraints: {},
    },
    Digest:
      "sha256:d2d18486652288fdb3516460bd6d1c2a90103d93d507a9b63ddd4a846a0fca2b",
    OpMetadata: {
      caps: {
        "exec.meta.base": true,
        "exec.mount.bind": true,
      },
    },
  },
  {
    Op: {
      inputs: [
        {
          digest:
            "sha256:d2d18486652288fdb3516460bd6d1c2a90103d93d507a9b63ddd4a846a0fca2b",
          index: 0,
        },
      ],
      Op: null,
    },
    Digest:
      "sha256:fda9d405d3c557e2bd79413628a435da0000e75b9305e52789dd71001a91c704",
    OpMetadata: {
      caps: {
        constraints: true,
        platform: true,
      },
    },
  },
] as const;
