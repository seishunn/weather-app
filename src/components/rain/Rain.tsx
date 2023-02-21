import React, {useEffect, useRef} from 'react';

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

const Rain: React.FC<CanvasProps> = ({...props}) => {
    const drops: any[] = [];
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < 1000; i++) {
        drops.push({
            x: Math.random() * w,
            y: Math.random() * h,
            l: Math.random(),
            xs: -4 + Math.random() * 4 + 2,
            ys: Math.random() * 10 + 10
        })
    }

    function draw(ctx: any) {
        ctx.clearRect(0, 0, w, h);
        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x + drop.l * drop.xs, drop.y + drop.l * drop.ys);
            ctx.stroke();
        })
        move()
    }

    function move() {
        for(let b = 0; b < drops.length; b++) {
            let p = drops[b];
            p.x += p.xs;
            p.y += p.ys;
            if(p.x > w || p.y > h) {
                p.x = Math.random() * w;
                p.y = -20;
            }
        }
    }

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        context!.strokeStyle = 'rgba(174,194,224,0.5)';
        context!.lineWidth = 2;
        context!.lineCap = "round";
        const interval = setInterval(() => draw(context), 20);
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

export default React.memo(Rain);
