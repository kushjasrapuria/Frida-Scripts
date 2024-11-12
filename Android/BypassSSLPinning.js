// frida --codeshare kushjasrapuria/conscrypt-ssl-bypass -f <YOUR_BINARY>

Java.perform(function() {

    var array_list = Java.use("java.util.ArrayList");
    var conscrypt = Java.use('com.android.org.conscrypt.TrustManagerImpl');

    console.log("\n");
    
    conscrypt.checkTrustedRecursive.implementation = function(certs, ocspData, tlsSctData, host, clientAuth, untrustedChain, trustAnchorChain, used) {
        var k = array_list.$new();
        return k;
    }
}, 0);
