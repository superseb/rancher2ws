# Rancher 2 websocket tester

Applicable to Rancher version 2

## Usage

1. Create API key through Rancher UI and save the Bearer token (`token-xxxxx:string`)
1. Run the container 

```docker run superseb/rancher2ws rancher_server_hostname_or_ip bearer-token```

For example:

```
$ docker run --net=host superseb/rancher2ws:latest 127.0.0.1 token-2d26b:lbz2gjgzl79jls2vxc4kwps4cp2fkhfpthcrb82jx4rhchqfh2vj57
(node:1) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
Socket opened
{"name":"ping","data":{}}
ping
```
