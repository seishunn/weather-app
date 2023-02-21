import React, {useEffect, useRef} from 'react';

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

const Snowfall: React.FC<CanvasProps> = ({...props}) => {
    const drops: any[] = [];
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < 1000; i++) {
        drops.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2.5,
            v: Math.random() * 1.5,
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 10
        })
    }

    function draw(ctx: any, cnv: any) {
        ctx.clearRect(0, 0, w, h);

        drops.forEach(drop => {
            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            drop.y += drop.v;

            if (drop.y > cnv.height) {
                drop.y = -20;
                drop.x = Math.random() * cnv.width;
            }
        })
    }

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        context!.fillStyle = 'rgba(255, 255, 255, 1)';
        context!.lineWidth = 2;
        context!.lineCap = "round";
        const interval = setInterval(() => draw(context, canvas), 50);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}/>
        </div>
    );
};

export default React.memo(Snowfall);
