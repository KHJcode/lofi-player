import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta httpEquiv="x-ua-compatible" content="IE=edge"/>
                    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

                    <meta name='language' content='ko'/>
                    <meta name="robots" content="index,follow"/>

                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                          crossOrigin="anonymous"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,800;0,900;1,700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
