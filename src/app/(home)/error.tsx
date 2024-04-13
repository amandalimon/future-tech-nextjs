"use client";

interface ErrorProps {
    error: Error;
    reset: () => void
}

export default function Error({ reset }: ErrorProps) {
    return (
        <div
            style={{
                padding: "10rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2>:(</h2>
            <p>It seems that we are having some issues. Please try again later.</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}