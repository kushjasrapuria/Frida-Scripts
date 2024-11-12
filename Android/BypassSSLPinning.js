Java.perform(function() {

    var array_list = Java.use("java.util.ArrayList");
    var conscrypt = Java.use('com.android.org.conscrypt.TrustManagerImpl');

    conscrypt.checkTrustedRecursive.implementation = function(certs, ocspData, tlsSctData, host, clientAuth, untrustedChain, trustAnchorChain, used) {
        var k = array_list.$new();
        return k;
    }
}, 0);
