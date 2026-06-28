import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

interface RoseConfig {
    size: number;
    top: number;
    left: number;
    zIndex: number;
    opacity: number;
    rotation: number;
    scaleX: number;
}

export function Invitation({ buttonVisible = true }: { buttonVisible?: boolean }) {
    const roseUrl = "/rose.svg";
    const cornerFishUrl = "/corner-fish.svg";
    const vinesUrl = "/vines.svg";
    // const dragonUrl = "/dragon.svg";
    const { ids } = useParams<{ ids?: string }>();
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(true);

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

    useEffect(() => {
        if (!ids && buttonVisible) {
            navigate("/not-found");
            return;
        }

        setShowButton(buttonVisible ? buttonVisible : false);
    }, [ids, navigate, buttonVisible]);

    return (
        <section
            id="invitation"
            className="w-full h-screen relative"
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
            {/* 
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
            /> */}
            <img
                src={vinesUrl}
                alt="Vines"
                className="w-30 min-w-25 h-21.25 object-cover absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-50"
            />
            <img
                src={cornerFishUrl}
                alt="Corner Fish"
                className="w-16 h-16 object-cover absolute top-0 right-0 z-0 opacity-50"
            />
            <img
                src={cornerFishUrl}
                alt="Corner Fish"
                className="w-16 h-16 object-cover absolute bottom-0 left-0 z-0 opacity-50 rotate-180"
            />
            {/* <img
                src={roseUrl}
                alt="Rose Facing Right"
                className="w-16 h-16 object-cover absolute top-0 right-0 z-0 opacity-50 scale-x-[-1]"
            /> */}
            {/* <div className="w-full h-full md:w-1/2 md:h-1/2 flex items-center justify-center">
                {"invitation for " + ids}
                {" | is Single: " + isSingle}
            </div> */}
            {/* Invitation text */}
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h3>
                    ძვირფასო სტუმარო , გეპატიჟებით
                </h3>
                <h1>
                    ნინიკიასა
                </h1>
                <h2>
                    და
                </h2>
                <h1>
                    დიმიტრის
                </h1>
                <h3>
                    ქორწილში
                </h3>
                {showButton && (
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <span>ნოემბერი</span>
                        <div className="flex items-center justify-center gap-6">
                            <span>შაბათი</span>
                            <span>5</span>
                            <span>18:00</span>
                        </div>
                        <span>2026</span>
                        <span>შატო ვარციხე</span>
                        <button className="button-main" onClick={() => navigate(`/`)}>
                            დეტალები
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}      