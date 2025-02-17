<<<<<<< HEAD
!function($,window,document){var _sa={sendType:"",serverUrl:"",distinct_id:"",trackParams:{$screen_height:Number(screen.height)||0,$screen_width:Number(screen.width)||0,$referrer:document.referrer,$referrer_host:document.referrer?document.referrer.split("/")[2]:"",$title:document.title,$url:()=>location.href,$url_path:location.pathname},send:{beacon:data=>{console.log("saData",data),navigator.sendBeacon(_sa.serverUrl,_sa.send.getSendData(data))},image:data=>{const img=document.createElement("img");img.width=1,img.height=1,img.src=_sa.send.getSendUrl(_sa.serverUrl,data)},getSendUrl:(url,data)=>{const base64Data=_sa.send.base64Encode(data),crc="crc="+_sa.send.hashCode(base64Data);return-1!==url.indexOf("?")?url+"&data="+encodeURIComponent(base64Data)+"&ext="+encodeURIComponent(crc):url+"?data="+encodeURIComponent(base64Data)+"&ext="+encodeURIComponent(crc)},getSendData:data=>{const base64Data=_sa.send.base64Encode(data),crc="crc="+_sa.send.hashCode(base64Data);return"data="+encodeURIComponent(base64Data)+"&ext="+encodeURIComponent(crc)},base64Encode:data=>btoa(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g,(function(match,p1){return String.fromCharCode("0x"+p1)}))),hashCode:data=>{if("string"!=typeof data)return 0;var hash=0;if(0==data.length)return hash;for(var i=0;i<data.length;i++)hash=(hash<<5)-hash+data.charCodeAt(i),hash|=0;return hash}},getProperties:customParams=>{let properties=Object.assign({},_sa.trackParams,customParams);for(const key in properties){let val=properties[key];val instanceof Function&&(val=val()),properties[key]=val}return properties},track:(event,customParams)=>{const data={distinct_id:_sa.distinct_id||(new Date).getTime().toString()+(400*Math.random().toFixed(2)+100).toString(),_track_id:Number(String(Math.random()).slice(2,5)+String(Math.random()).slice(2,4)+String((new Date).getTime()).slice(-4)),type:"track",event:event,properties:_sa.getProperties(customParams)};_sa.send[_sa.sendType](JSON.stringify(data))},setSendType:()=>{let type="image";"object"==typeof navigator&&"function"==typeof navigator.sendBeacon&&(type="beacon"),_sa.sendType=type},registerPage:params=>{_sa.trackParams=Object.assign({},_sa.trackParams,params||{})},identify:val=>{_sa.distinct_id=val},init:()=>{window.sa={init:function({server_url:server_url}){_sa.setSendType(),_sa.serverUrl=server_url},track:_sa.track,registerPage:_sa.registerPage,identify:_sa.identify}}};_sa.init()}(jQuery,window,document);
=======
(function ($, window, document) {
    ('use strict');

    var _sa = {
        sendType: '',
        serverUrl: '',
        distinct_id: '',
        trackParams: {
            $screen_height: Number(screen.height) || 0,
            $screen_width: Number(screen.width) || 0,
            $referrer: document.referrer,
            $referrer_host: document.referrer ? document.referrer.split('/')[2] : '',
            $title: document.title,
            $url: () => {
                return location.href;
            },
            $url_path: location.pathname
        },
        send: {
            beacon: (data) => {
                console.log('saData',data);
                navigator.sendBeacon(_sa.serverUrl, _sa.send.getSendData(data));
            },
            image: (data) => {
                const img = document.createElement('img');
                img.width = 1;
                img.height = 1;
                img.src = _sa.send.getSendUrl(_sa.serverUrl, data);
            },
            getSendUrl: (url, data) => {
                const base64Data = _sa.send.base64Encode(data);
                const crc = 'crc=' + _sa.send.hashCode(base64Data);
                if (url.indexOf('?') !== -1) {
                    return url + '&data=' + encodeURIComponent(base64Data) + '&ext=' + encodeURIComponent(crc);
                } else {
                    return url + '?data=' + encodeURIComponent(base64Data) + '&ext=' + encodeURIComponent(crc);
                }
            },
            getSendData: (data) => {
                const base64Data = _sa.send.base64Encode(data);
                const crc = 'crc=' + _sa.send.hashCode(base64Data);
                return 'data=' + encodeURIComponent(base64Data) + '&ext=' + encodeURIComponent(crc);
            },
            base64Encode: (data) => {
                return btoa(
                    encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                        return String.fromCharCode('0x' + p1);
                    })
                );
            },
            hashCode: (data) => {
                if (typeof data !== 'string') {
                    return 0;
                }
                var hash = 0;
                var char = null;
                if (data.length == 0) {
                    return hash;
                }
                for (var i = 0; i < data.length; i++) {
                    char = data.charCodeAt(i);
                    hash = (hash << 5) - hash + char;
                    hash = hash & hash;
                }
                return hash;
            }
        },
        getProperties: (customParams) => {
            let properties = Object.assign({}, _sa.trackParams, customParams);
            for (const key in properties) {
                let val = properties[key];
                if (val instanceof Function) {
                    val = val();
                }
                properties[key] = val;
            }
            return properties;
        },
        track: (event, customParams) => {
            const data = {
                distinct_id: _sa.distinct_id || new Date().getTime().toString() + (Math.random().toFixed(2) * 400 + 100).toString(),
                _track_id: Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(new Date().getTime()).slice(-4)),
                type: 'track',
                event,
                properties: _sa.getProperties(customParams)
            };

            _sa.send[_sa.sendType](JSON.stringify(data));
        },
        setSendType: () => {
            let type = 'image';
            if ('object' == typeof navigator && 'function' == typeof navigator.sendBeacon) {
                type = 'beacon';
            }
            _sa.sendType = type;
        },
        registerPage: (params) => {
            _sa.trackParams = Object.assign({}, _sa.trackParams, params || {});
        },
        identify: (val) => {
            _sa.distinct_id = val;
        },
        init: () => {
            window.sa = {
                init: function ({ server_url }) {
                    _sa.setSendType();
                    _sa.serverUrl = server_url;
                },
                track: _sa.track,
                registerPage: _sa.registerPage,
                identify: _sa.identify
            };
        }
    };
    _sa.init();
})(jQuery, window, document);
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e
