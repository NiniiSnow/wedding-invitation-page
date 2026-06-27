import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export function Invitation() {
    const roseUrl = "/rose.svg";
    const dragonUrl = "/dragon.svg";
    const floralUrl = "/floral-spirals.svg";
    const cornerFishUrl = "/corner-fish.svg";
    const vinesUrl = "/vines.svg";
    const { ids } = useParams<{ ids?: string }>();
    const navigate = useNavigate();
    const [isSingle, setIsSingle] = useState(true);

    useEffect(() => {
        if (!ids) {
            navigate("/not-found");
            return;
        }

        setIsSingle(!ids.includes(","));
    }, [ids, navigate]);

    return (
        <section
            id="invitation"
            className="w-full h-screen relative"
        >
            <img
                src={roseUrl}
                alt="Rose Facing Left"
                className="w-8 h-8 object-cover absolute top-0 left-0 z-0 opacity-50"
            />
            <img
                src={roseUrl}
                alt="Rose Facing Left"
                className="w-16 h-16 object-cover absolute top-0 left-0 z-0 opacity-50"
            />
            <img
                src={roseUrl}
                alt="Rose Facing Left"
                className="w-16 h-16 object-cover absolute top-0 left-0 z-0 opacity-50"
            />

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
            <img
                src={vinesUrl}
                alt="Vines"
                className="w-47.5 sm:w-1/2 md:w-[30%] min-w-25  h-1/5 md:h-41.25 object-cover absolute top-10 md:top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-50"
            />
            {/* <img
                src={floralUrl}
                alt="Floral Spirals"
                className="w-16 h-16 object-cover absolute bottom-0 left-1/2 z-0 opacity-50"
            /> */}
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
        </section>
    );
}      