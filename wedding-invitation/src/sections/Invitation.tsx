import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export function Invitation() {
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
        >
            { "invitation for " + ids }
            { " | is Single: " + isSingle }
        </section>
    );
}   