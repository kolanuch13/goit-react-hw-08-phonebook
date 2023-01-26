import { getUsername } from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { Button, Heading } from '@chakra-ui/react';
// ==============
import { useEffect, useRef, useState } from 'react';


const HomeView = () => {
    const user = useSelector(getUsername);
    const dispatch = useDispatch()
    // ===========================
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState('black');
    const [lineOpacity, setLineOpacity] = useState(0.1);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth]);
    
    const randomHex = () => {
        const color = Math.floor(Math.random() * 1000);
        return `#${color}`
    }

    const randomWidth = () => {
        const width = Math.floor(Math.random() * 10).toString(16);
        return width
    };

    const randomOpacity = () => {
        const opacity = (Math.random());
        return opacity;
    };

    const startDrawing = e => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
        setLineWidth(randomWidth);
        setLineOpacity(randomOpacity)
    };

    const endDrawing = () => {
        ctxRef.current.closePath();
        setLineColor(randomHex);
        setIsDrawing(false);
    };


    const draw = e => {
        if (!isDrawing) {
            return;
        }
        setLineColor(randomHex);
        ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current.stroke();
    };

    return (
        <section>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '30px',
                }}
            >
                <Heading>
                    Hey {user},<br /> you can log out here.
                </Heading>
                <Button
                    type="button"
                    onClick={() => {
                        dispatch(logOut());
                    }}
                >
                    Logout
                </Button>
                <p>or you can draw right here:</p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '80vw',
                }}
            >
                <div>
                    <canvas
                        onMouseDown={startDrawing}
                        onMouseUp={endDrawing}
                        onMouseMove={draw}
                        touchDown={startDrawing}
                        touchUp={endDrawing}
                        touchMove={draw}
                        ref={canvasRef}
                        width={`1280px`}
                        height={`720px`}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeView;
