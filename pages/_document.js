/**
 * Created by pdd on 2018/6/8.
 */

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script  dangerouslySetInnerHTML={{__html: `
                var _hmt = _hmt || [];
                    (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?7cfddc1838de22cfb6fd6515c2c32375";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
                ` }}/>
            </body>
            </html>
        )
    }
}
