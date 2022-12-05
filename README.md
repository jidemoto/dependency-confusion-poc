# Test Project for Dependency Confusion Attack

There are a couple things you'll need for this test:

- The local testing configuration from the other repo
- A local .npmrc file that instructs npm to use the local repo

## The .npmrc file

Add an .npmrc file directly into this repo for your configuration.  It should look something like the following:

```
registry=http://localhost:8081/repository/virtual-npm/
email={{your email}}
always-auth=true
_auth={{base64-encoded-credentials}}
```

See the Nexus 3 docs on [Using Basic Auth](https://help.sonatype.com/repomanager3/nexus-repository-administration/formats/npm-registry/npm-security#npmSecurity-AuthenticationUsingBasicAuth) for more information

## Running The Test

After setting up the .npmrc file as above, run `npm install` to run the test.

When pinned to version 1.0.0 (as this repo should start you with), you should see the "internal" version from the repository in the node_modules folder.  

Now edit package.json and set the `william-rowan-hamilton` dependency to a range like `~1.0.0`.  Run `npm upgrade`.  You should see the ["malicious" version from npm](https://www.npmjs.com/package/william-rowan-hamilton) in node_modules.
