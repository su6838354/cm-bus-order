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
                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}