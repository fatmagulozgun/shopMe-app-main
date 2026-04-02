import React from "react";

const toneStyles = {
    neutral: "border-stone-300 bg-white text-stone-600",
    danger: "border-red-200 bg-red-50 text-red-700",
};

const StatusView = ({ title, description, tone = "neutral", action }) => {
    return (
        <div className={`rounded-[28px] border p-8 text-center shadow-sm ${toneStyles[tone]}`}>
            <div className="text-2xl font-black text-stone-900">{title}</div>
            {description && <p className="mx-auto mt-3 max-w-xl text-sm leading-7">{description}</p>}
            {action && <div className="mt-5 flex justify-center">{action}</div>}
        </div>
    );
};

export default StatusView;
