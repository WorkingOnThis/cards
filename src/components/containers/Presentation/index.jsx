import styled from 'styled-components'

const Container = styled.div`

    background: linear-gradient(to right, rgb(239, 108, 0), rgb(251, 140, 0));

    align-items: flex-start;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    min-height: 452px;
    overflow: visible;
    padding: 0;
    position: relative;

    .image-container{
        height: 532px;
        overflow-x: hidden;
        position: absolute;
        top: -48px;
        width: 100%;
    }

    .image-grid {

        flex: 1;

        width: 960px;
        padding: 0 12px;

        display: flex;
        flex-direction: row;
        margin: 0 auto;
        flex-wrap: wrap;
    }

    .grid-inner {

        width: 936px;
        margin: 0 12px 24px;

        display: flex;
        position: relative;
        box-sizing: border-box;

        .background {
            position: absolute;
            z-index: 1;
            transition: opacity .8s cubic-bezier(0.4, 0, 0.2, 1) .4s;

            & > img {
                width: 1184px;
            }
        }

        .foreground {
            position: absolute;
            z-index: 2;
            transition: opacity .8s cubic-bezier(0.4, 0, 0.2, 1) .6s;

            & > img {
                width: 1184px;
            }
        }

        .promotion {
            align-content: center;
            display: flex;
            flex-direction: column;
            position: relative;
            width: 400px;
            z-index: 3;
        }

        .header-container {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin: 48px 0;
        }

        .title {
            align-items: center;
            display: flex;
            flex-wrap: nowrap;
            transition: opacity .8s cubic-bezier(0.4, 0, 0.2, 1) .8s;
        }

        .title-copy {
            padding-bottom: 12px;

            flex-shrink: 0;
            font-family: "Google Sans",sans-serif;
            font-size: 36px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 44px;
            margin: 0;
            margin-right: 28px;
            text-shadow: 0 1px 1px rgb(0 0 0 / 12%);
        }

        .tagline {
            color: #fff;
            font-family: "Google Sans",sans-serif;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 28px;
            margin: 6px 0;
            max-width: 400px;
            text-align: left;
            text-shadow: 0 1px 1px rgb(0 0 0 / 12%);
        }
        
    }

`

const Presentation = () => {
    return (
        <Container>
            <div className="image-container">
                <div className="image-grid">
                    <div className="grid-inner">
                        <div className="background">
                            <img src={'https://www.gstatic.com/mobilesdk/200429_mobilesdk/cloud_firestore_mid2x.png'} alt="background"/>
                        </div>
                        <div className="foreground">
                            <img src={'https://www.gstatic.com/mobilesdk/200429_mobilesdk/cloud_firestore_fore2x.png'} alt="background"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-grid">
                <div className="grid-inner">
                    <div className="promotion">
                        <div className="header-container">
                            <div className="title">
                                <h1 className="title-copy">Cloud Firestore</h1>
                            </div>
                            <div className="copy">
                                <div className="tagline">
                                    Actualizaciones en tiempo real, consultas eficaces y escalado automático    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Presentation;