# example-electron

## setup

```sh
# tools to compile protobuf
winget install Google.Protobuf

# resolve import easily
winget install bufbuild.buf
```

```sh
# dependencies
buf dep update

# compile protos
buf generate
```
