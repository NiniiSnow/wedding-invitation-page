import "../styles/Invitation.css";

interface RoseConfig {
    size: number;
    top: number;
    left: number;
    zIndex: number;
    opacity: number;
    rotation: number;
    scaleX: number;
}

export function Invitation() {
    const roseUrl = "/rose.svg";
    const dragonUrl = "/dragon.svg";

    const invitationBackgroundUrl = '/invitation-background.jpeg';
    const invitationSecondaryBackgroundUrl = '/invitation-front.jpeg';

    const roses: RoseConfig[] = [
        { size: 30, top: 1, left: 0, zIndex: 0, opacity: 50, rotation: 0, scaleX: 1 },
        { size: 30, top: 30, left: 0, zIndex: 10, opacity: 60, rotation: 12, scaleX: -1 },
        { size: 30, top: 70, left: 0, zIndex: 20, opacity: 50, rotation: -6, scaleX: 1 },
        { size: 30, top: 100, left: 3, zIndex: 15, opacity: 55, rotation: 3, scaleX: -1 },
        { size: 30, top: 140, left: 1, zIndex: 10, opacity: 60, rotation: -12, scaleX: 1 },
        { size: 30, top: 170, left: 2, zIndex: 25, opacity: 50, rotation: 6, scaleX: -1 },
        { size: 30, top: 210, left: 0, zIndex: 15, opacity: 55, rotation: -3, scaleX: 1 },
        { size: 30, top: 240, left: 1, zIndex: 20, opacity: 60, rotation: 15, scaleX: -1 },
        { size: 30, top: 280, left: 2, zIndex: 10, opacity: 55, rotation: -9, scaleX: 1 },
        { size: 30, top: 310, left: 0, zIndex: 0, opacity: 50, rotation: 0, scaleX: 1 },
        { size: 30, top: 340, left: 0, zIndex: 10, opacity: 60, rotation: 12, scaleX: -1 },
        { size: 30, top: 370, left: 0, zIndex: 20, opacity: 50, rotation: -6, scaleX: 1 },
        { size: 30, top: 400, left: 3, zIndex: 15, opacity: 55, rotation: 3, scaleX: -1 },
        { size: 30, top: 440, left: 1, zIndex: 10, opacity: 60, rotation: -12, scaleX: 1 },
        { size: 30, top: 470, left: 2, zIndex: 25, opacity: 50, rotation: 6, scaleX: -1 },
        { size: 30, top: 500, left: 0, zIndex: 15, opacity: 55, rotation: -3, scaleX: 1 },
        { size: 30, top: 530, left: 1, zIndex: 20, opacity: 60, rotation: 15, scaleX: -1 },
        { size: 30, top: 560, left: 2, zIndex: 10, opacity: 55, rotation: -9, scaleX: 1 },
    ];


    return (
        <section
            id="invitation"
            className="w-full h-screen relative invitation"
        >
            {/* Rose Column - Left Side */}
            {roses.map((rose, index) => (
                <img
                    key={index}
                    src={roseUrl}
                    alt={`Rose ${index + 1}`}
                    style={{
                        width: `${rose.size}px`,
                        height: `${rose.size}px`,
                        top: `${rose.top}px`,
                        left: `${rose.left}px`,
                        zIndex: rose.zIndex,
                        opacity: rose.opacity / 100,
                        transform: `scaleX(${rose.scaleX}) rotate(${rose.rotation}deg)`,
                    }}
                    className="object-cover absolute"
                />
            ))}
            {/* Rose Column - Right Side */}
            {roses.map((rose, index) => (
                <img
                    key={index}
                    src={roseUrl}
                    alt={`Rose ${index + 1}`}
                    style={{
                        width: `${rose.size}px`,
                        height: `${rose.size}px`,
                        top: `${rose.top + 80}px`,
                        right: `${rose.left}px`,
                        zIndex: rose.zIndex,
                        opacity: rose.opacity / 100,
                        transform: `scaleX(${rose.scaleX}) rotate(${rose.rotation}deg)`,
                    }}
                    className="object-cover absolute"
                />
            ))}

            <img
                src={dragonUrl}
                alt="Dragon"
                className="w-12 h-12 object-cover absolute bottom-0 right-0 z-0 opacity-50"
            />
            <img
                src={dragonUrl}
                alt="Dragon"
                className="w-8 h-8 md:w-12 md:h-12 object-cover absolute bottom-6 right-4 z-0 opacity-50 -rotate-6"
            />
            <img
                src={dragonUrl}
                alt="Dragon"
                className="w-8 h-8 md:w-10 md:h-10 object-cover absolute bottom-10 right-12 z-0 opacity-50 rotate-6"
            />
            <div className="invitation-container">
                <img src={invitationSecondaryBackgroundUrl} alt="Invitation Background" className="w-1/2 h-1/2 min-w-1/2 min-h-1/2 md:w-11/12 md:h-11/12 object-cover" />
                <img src={invitationBackgroundUrl} alt="Invitation Background Secondary" className="w-5/6 h-1/2 min-w-1/2 min-h-1/2 md:w-11/12 md:h-11/12 object-cover" />
            </div>
        </section>
    );
}      